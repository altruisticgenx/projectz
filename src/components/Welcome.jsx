export default function Welcome({ onStart }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pastel-blue via-pastel-neutral to-pastel-green">
      <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 font-poppins">
            AltruisticXAI
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 font-medium">
            Reflect. Decide. Grow.
          </p>
        </div>

        <div className="card max-w-lg mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Welcome to your personal compass for ethical reflection. 
            We help you clarify your values, make confident decisions, 
            and foster authentic growth—with complete privacy.
          </p>
          
          <button
            onClick={onStart}
            className="btn-primary w-full text-lg py-4"
          >
            Begin Your Journey
          </button>
        </div>

        <p className="text-sm text-gray-500">
          Your reflections are private by default. You maintain full control.
        </p>
      </div>
    </div>
  );
}
