import React from 'react';
import { X, Download, Trash2, Shield } from 'lucide-react';

const PrivacyModal = ({ 
  processingMode, 
  onProcessingModeChange, 
  onClose, 
  reflections,
  onDeleteAll 
}) => {
  const handleExportData = () => {
    const dataStr = JSON.stringify({
      processingMode,
      reflections,
      exportDate: new Date().toISOString()
    }, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `altruisticxai-data-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  const handleDeleteAll = () => {
    if (window.confirm('Are you sure you want to delete all your reflections? This action cannot be undone.')) {
      onDeleteAll();
      alert('All reflections have been deleted.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-deep-purple" />
            <h2 className="text-2xl font-display font-bold text-gray-800">
              Privacy & Data Control
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Processing Mode */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Processing Mode</h3>
            <div className="space-y-3">
              <label className="flex items-start gap-3 p-3 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="processingMode"
                  value="local"
                  checked={processingMode === 'local'}
                  onChange={(e) => onProcessingModeChange(e.target.value)}
                  className="mt-1"
                />
                <div>
                  <div className="font-medium text-gray-800">Local</div>
                  <div className="text-sm text-gray-600">
                    Private, runs on your device (slower)
                  </div>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="processingMode"
                  value="cloud"
                  checked={processingMode === 'cloud'}
                  onChange={(e) => onProcessingModeChange(e.target.value)}
                  className="mt-1"
                />
                <div>
                  <div className="font-medium text-gray-800">Cloud</div>
                  <div className="text-sm text-gray-600">
                    Faster, requires internet connection
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Data Storage */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Data Storage</h3>
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="mt-1"
              />
              <div className="text-sm text-gray-700">
                Keep reflection history (stored locally in your browser)
              </div>
            </label>
          </div>

          {/* Data Actions */}
          <div className="space-y-3">
            <button
              onClick={handleExportData}
              className="w-full bg-deep-purple text-white px-6 py-3 rounded-button 
                         hover:bg-light-purple transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Export My Data
            </button>

            <button
              onClick={handleDeleteAll}
              className="w-full bg-red-50 text-red-600 px-6 py-3 rounded-button 
                         hover:bg-red-100 transition-colors flex items-center justify-center gap-2
                         border-2 border-red-200"
            >
              <Trash2 className="w-5 h-5" />
              Delete All Data
            </button>
          </div>

          {/* Privacy Message */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Your data is private by default.</strong> All reflections are stored 
              locally in your browser. We never share your personal reflections without 
              explicit consent.
            </p>
            <button className="text-deep-purple text-sm font-medium mt-2 hover:underline">
              Learn more about our privacy practices →
            </button>
          </div>

          {/* Stats */}
          <div className="border-t border-gray-200 pt-4">
            <div className="text-sm text-gray-600">
              <div className="flex justify-between mb-2">
                <span>Total Reflections:</span>
                <span className="font-semibold text-gray-800">{reflections.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Current Mode:</span>
                <span className="font-semibold text-gray-800 capitalize">{processingMode}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
