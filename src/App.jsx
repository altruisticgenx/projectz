import { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import Onboarding from './components/Onboarding';
import CompassView from './components/CompassView';
import Logbook from './components/Logbook';
import PrivacyModal from './components/PrivacyModal';

function App() {
  const [currentView, setCurrentView] = useState('welcome'); // welcome, onboarding, compass, logbook
  const [reflections, setReflections] = useState([]);
  const [settings, setSettings] = useState({
    processingMode: 'local',
    selectedValues: []
  });
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedReflections = localStorage.getItem('altruisticxai_reflections');
    const savedSettings = localStorage.getItem('altruisticxai_settings');
    
    if (savedReflections) {
      setReflections(JSON.parse(savedReflections));
    }
    
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Check if user has completed welcome
    const hasCompletedWelcome = localStorage.getItem('altruisticxai_welcomed');
    if (hasCompletedWelcome) {
      setCurrentView('compass');
    }
  }, []);

  // Save reflections to localStorage
  useEffect(() => {
    if (reflections.length > 0) {
      localStorage.setItem('altruisticxai_reflections', JSON.stringify(reflections));
    }
  }, [reflections]);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('altruisticxai_settings', JSON.stringify(settings));
  }, [settings]);

  const handleStartJourney = () => {
    setCurrentView('onboarding');
  };

  const handleCompleteOnboarding = (selectedValues) => {
    setSettings({ ...settings, selectedValues });
    setCurrentView('compass');
    localStorage.setItem('altruisticxai_welcomed', 'true');
  };

  const handleAddReflection = (reflection) => {
    setReflections(prev => [reflection, ...prev]);
  };

  const handleDeleteReflection = (id) => {
    setReflections(prev => prev.filter(r => r.id !== id));
  };

  const handleExportReflections = () => {
    const dataStr = JSON.stringify(reflections, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `altruisticxai-reflections-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  const handleNavigate = (view) => {
    if (view === 'privacy') {
      setShowPrivacyModal(true);
    } else {
      setCurrentView(view);
    }
  };

  const handleUpdateSettings = (newSettings) => {
    setSettings(newSettings);
    if (newSettings.reflections !== undefined) {
      setReflections(newSettings.reflections);
    }
  };

  return (
    <>
      {currentView === 'welcome' && (
        <Welcome onStart={handleStartJourney} />
      )}

      {currentView === 'onboarding' && (
        <Onboarding onComplete={handleCompleteOnboarding} />
      )}

      {currentView === 'compass' && (
        <CompassView 
          onAddReflection={handleAddReflection}
          onNavigate={handleNavigate}
        />
      )}

      {currentView === 'logbook' && (
        <div className="min-h-screen bg-gradient-to-br from-pastel-neutral via-white to-pastel-green/20">
          <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
            <div className="max-w-6xl mx-auto px-4 py-4">
              <button
                onClick={() => setCurrentView('compass')}
                className="px-4 py-2 rounded-xl text-gray-600 hover:bg-pastel-neutral transition-colors"
              >
                ← Back to Compass
              </button>
            </div>
          </header>
          <main className="max-w-6xl mx-auto px-4 py-8">
            <Logbook
              reflections={reflections}
              onDelete={handleDeleteReflection}
              onExport={handleExportReflections}
            />
          </main>
        </div>
      )}

      <PrivacyModal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
      />
    </>
  );
}

export default App;
