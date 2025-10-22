import { TrendingUp, AlertCircle, Lightbulb } from 'lucide-react';

export default function RippleCard({ choice, onContinue }) {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="card bg-gradient-to-br from-white to-pastel-neutral">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Reflection
        </h3>
        
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          {choice.reflection}
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3 p-4 bg-pastel-blue/20 rounded-2xl">
            <TrendingUp className="text-pastel-blue mt-1" size={24} />
            <div>
              <div className="font-semibold text-gray-800">Value Upheld</div>
              <div className="text-gray-600">{choice.valueUpheld}</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-orange-100 rounded-2xl">
            <AlertCircle className="text-orange-500 mt-1" size={24} />
            <div>
              <div className="font-semibold text-gray-800">Value Strained</div>
              <div className="text-gray-600">{choice.valueStrained}</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-pastel-green/20 rounded-2xl">
            <Lightbulb className="text-pastel-green mt-1" size={24} />
            <div>
              <div className="font-semibold text-gray-800">Potential Ripple</div>
              <div className="text-gray-600">{choice.potentialRipple}</div>
            </div>
          </div>
        </div>

        <button
          onClick={onContinue}
          className="btn-primary w-full"
        >
          Continue Reflecting
        </button>
      </div>
    </div>
  );
}
