import { useState } from 'react';
import Sidebar from './components/Sidebar';
import HomeTab from './components/HomeTab';
import ProjectsTab from './components/ProjectsTab';
import EvidenceTable from './components/EvidenceTable';
import RubricTable from './components/RubricTable';
import Summary from './components/Summary';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeTab setActiveTab={setActiveTab} />;
      case 'projects': return <ProjectsTab />;
      case 'evidence': return <EvidenceTable />;
      case 'rubric': return <RubricTable />;
      case 'summary': return <Summary />;
      default: return <HomeTab setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="flex min-h-screen w-full max-w-full flex-col overflow-x-hidden bg-academic-background font-sans text-academic-ink md:h-screen md:flex-row md:overflow-hidden">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
      
      <main className="min-w-0 flex-1 overflow-x-hidden overflow-y-auto h-auto md:h-full p-4 md:p-8 lg:p-12 w-full max-w-full">
        {renderContent()}
      </main>
    </div>
  );
}

