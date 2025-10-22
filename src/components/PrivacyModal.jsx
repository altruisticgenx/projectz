import { Shield, Download, Trash2, X, Server, Laptop } from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose, settings, onUpdateSettings }) {
  if (!isOpen) return null;

  const handleProcessingModeToggle = () => {
    onUpdateSettings({
      ...settings,
      processingMode: settings.processingMode === 'local' ? 'cloud' : 'local'
    });
  };

  const handleDataExport = () => {
    // In a real app, this would trigger actual data export
    alert('Your reflection data has been exported to JSON format.');
  };

  const handleDataDelete = () => {
    if (window.confirm('Are you sure you want to delete all your reflections? This cannot be undone.')) {
      onUpdateSettings({
        ...settings,
        reflections: []
      });
      alert('All reflections have been deleted.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <Shield size={28} />
            Privacy & Data Control
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6">
          {/* Processing Mode */}
          <div className="p-5 bg-pastel-neutral rounded-2xl">
            <h3 className="font-semibold text-gray-800 mb-3">
              AI Processing Mode
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Choose how your reflections are processed. Local mode keeps everything on your device,
              while cloud mode provides faster processing.
            </p>
            
            <div className="flex items-center justify-between p-4 bg-white rounded-2xl">
              <div className="flex items-center gap-3">
                {settings.processingMode === 'local' ? (
                  <Laptop className="text-pastel-blue" size={24} />
                ) : (
                  <Server className="text-pastel-green" size={24} />
                )}
                <div>
                  <div className="font-medium text-gray-800">
                    {settings.processingMode === 'local' ? 'Local Processing' : 'Cloud Processing'}
                  </div>
                  <div className="text-xs text-gray-500">
                    {settings.processingMode === 'local' 
                      ? 'Private, runs on your device'
                      : 'Faster, requires internet'}
                  </div>
                </div>
              </div>
              <button
                onClick={handleProcessingModeToggle}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  settings.processingMode === 'cloud' ? 'bg-pastel-green' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.processingMode === 'cloud' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Data Management */}
          <div className="p-5 bg-pastel-neutral rounded-2xl">
            <h3 className="font-semibold text-gray-800 mb-3">
              Your Data
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              You have complete control over your reflection data. Export or delete at any time.
            </p>
            
            <div className="space-y-3">
              <button
                onClick={handleDataExport}
                className="btn-secondary w-full flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Export All Reflections
              </button>
              
              <button
                onClick={handleDataDelete}
                className="w-full px-6 py-3 rounded-2xl font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-colors flex items-center justify-center gap-2"
              >
                <Trash2 size={20} />
                Delete All Data
              </button>
            </div>
          </div>

          {/* Privacy Statement */}
          <div className="p-5 bg-blue-50 rounded-2xl">
            <h3 className="font-semibold text-gray-800 mb-2">
              Our Privacy Promise
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Your reflections are private by default</li>
              <li>✓ No data is shared with third parties</li>
              <li>✓ You can export or delete your data anytime</li>
              <li>✓ Anonymous usage patterns help improve the AI (opt-in only)</li>
            </ul>
          </div>
        </div>

        <button
          onClick={onClose}
          className="btn-primary w-full mt-6"
        >
          Close
        </button>
      </div>
    </div>
  );
}
