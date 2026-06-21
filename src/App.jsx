import { useState } from 'react';
import Sidebar from './components/Sidebar';
import HomeTab from './components/HomeTab';
import ProjectsTab from './components/ProjectsTab';
import EvidenceTable from './components/EvidenceTable';
import RubricTable from './components/RubricTable';
import Summary from './components/Summary';
import PrintView from './components/PrintView'; // Import Component Mới

export default function App() {
  // Chỉ khai báo state 1 lần duy nhất
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Hàm xử lý chuyển trang bằng component
  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeTab setActiveTab={setActiveTab} />;
      case 'projects': return <ProjectsTab />;
      case 'evidence': return <EvidenceTable />;
      case 'rubric': return <RubricTable />;
      case 'summary': return <Summary />;
      case 'print': return <PrintView />; // Định tuyến sang trang in
      default: return <HomeTab setActiveTab={setActiveTab} />;
    }
  };

  return (
    // THAY ĐỔI CSS: Thêm print:h-auto và print:overflow-visible để fix lỗi cắt trang khi xuất PDF
    <div className="flex min-h-screen w-full max-w-full flex-col overflow-x-hidden bg-academic-background font-sans text-academic-ink md:h-screen md:flex-row md:overflow-hidden print:h-auto print:min-h-0 print:overflow-visible print:bg-white">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
      
      {/* THAY ĐỔI CSS TƯƠNG TỰ */}
      <main className="min-w-0 flex-1 overflow-x-hidden overflow-y-auto print:overflow-visible h-auto md:h-full print:h-auto p-4 md:p-8 lg:p-12 w-full max-w-full print:p-0 print:block">
        {renderContent()}
      </main>
    </div>
  );
}
