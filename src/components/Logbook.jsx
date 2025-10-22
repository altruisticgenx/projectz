import { BookOpen, Trash2, Download } from 'lucide-react';

export default function Logbook({ reflections, onDelete, onExport }) {
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <BookOpen size={32} />
          Reflection Logbook
        </h2>
        {reflections.length > 0 && (
          <button
            onClick={onExport}
            className="btn-secondary flex items-center gap-2"
          >
            <Download size={20} />
            Export
          </button>
        )}
      </div>

      {reflections.length === 0 ? (
        <div className="card text-center py-12">
          <BookOpen className="mx-auto mb-4 text-gray-400" size={48} />
          <p className="text-gray-600 text-lg">
            Your reflection journey will appear here
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Start by exploring your values in the Compass
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {reflections.map((reflection) => (
            <div
              key={reflection.id}
              className="card hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-sm text-pastel-purple font-medium mb-1">
                    {reflection.category}
                  </div>
                  <div className="text-xs text-gray-500">
                    {formatDate(reflection.timestamp)}
                  </div>
                </div>
                <button
                  onClick={() => onDelete(reflection.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  title="Delete reflection"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <h4 className="font-semibold text-gray-800 mb-2">
                {reflection.question}
              </h4>
              
              <div className="bg-pastel-neutral rounded-2xl p-4 mb-3">
                <div className="text-sm text-gray-600 mb-1">You chose:</div>
                <div className="font-medium text-gray-800">
                  {reflection.choice.label}
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                {reflection.choice.reflection}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
