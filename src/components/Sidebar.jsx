import { Home, BookOpen, FileCheck, CheckSquare, MessageSquare, Menu, X, GraduationCap, Sparkles, ChevronRight } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Giới thiệu & Tổng quan', badge: 'Chính' },
    { id: 'projects', icon: BookOpen, label: 'Bài tập / Dự án', badge: '06 bài' },
    { id: 'evidence', icon: FileCheck, label: 'Bảng Minh chứng', badge: 'Quản lý' },
    { id: 'rubric', icon: CheckSquare, label: 'Rubric / Đánh giá', badge: 'Tự chấm' },
    { id: 'summary', icon: MessageSquare, label: 'Tổng kết cá nhân', badge: 'Thu hoạch' },
  ];

  return (
    <>
      {/* Mobile Sticky Header */}
      <div className="md:hidden flex w-full min-w-0 items-center justify-between gap-3 bg-academic-sidebar text-academic-cream p-4 shadow-lg border-b border-academic-sidebar-border sticky top-0 z-50">
        <div className="flex min-w-0 items-center gap-2.5 font-bold text-base tracking-wide">
          <div className="w-8 h-8 rounded-lg bg-academic-cream/10 border border-academic-accent/20 flex items-center justify-center text-academic-accent">
            <GraduationCap size={18} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="truncate text-sm text-academic-cream font-bold">Hà An · Portfolio</span>
            <span className="text-[10px] text-academic-accent/80 font-normal truncate">Ngôn ngữ & Văn hóa Anh</span>
          </div>
        </div>
        <button
          type="button"
          aria-label={isMobileOpen ? 'Đóng menu' : 'Mở menu'}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="shrink-0 p-2 bg-academic-cream/10 text-academic-cream hover:bg-academic-cream hover:text-academic-ink border border-academic-sidebar-border rounded-xl transition-colors"
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Desktop & Mobile Sidebar Container */}
      <nav className={`${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 w-[min(18rem,85vw)] md:w-72 bg-academic-sidebar text-academic-accent transition-transform duration-300 ease-in-out z-[60] md:z-40 flex flex-col shadow-2xl border-r border-academic-sidebar-border/80`}>
        
        {/* Profile Card Header */}
        <div className="p-6 border-b border-academic-sidebar-border/60 bg-gradient-to-b from-white/[0.03] to-transparent">
          <div className="flex items-center gap-3.5">
            <div className="relative">
              <img 
                src="/images.jpeg" 
                alt="Avatar Nguyễn Thị Hà An" 
                className="w-12 h-12 rounded-2xl object-cover shadow-lg ring-2 ring-academic-accent/30" 
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 border-2 border-academic-sidebar rounded-full flex items-center justify-center" title="Đã đồng bộ dữ liệu">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </span>
            </div>
            
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <h2 className="text-base font-bold text-academic-cream leading-tight truncate">Nguyễn Thị Hà An</h2>
              </div>
              <p className="text-xs text-academic-accent font-medium truncate mt-0.5">Ngôn ngữ & Văn hóa Anh</p>
              <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-academic-cream/10 border border-academic-accent/20 text-[10px] text-academic-accent/90 font-mono tracking-wider">
                <Sparkles size={10} className="text-amber-300" /> K59 · ULIS - VNU
              </div>
            </div>
          </div>
        </div>

        {/* Navigation List */}
        <div className="flex-1 py-6 space-y-1.5 px-3 overflow-y-auto">
          <p className="px-3 text-[11px] font-semibold text-academic-accent/60 uppercase tracking-wider mb-3">Danh mục chức năng</p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileOpen(false);
                }}
                className={`group relative flex items-center justify-between w-full px-3.5 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-academic-cream text-academic-ink shadow-lg shadow-black/20 font-semibold' 
                    : 'text-academic-accent/90 hover:bg-academic-cream/10 hover:text-academic-cream'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`p-1.5 rounded-lg transition-colors ${
                    isActive ? 'bg-academic-blue text-academic-cream' : 'bg-academic-cream/5 text-academic-accent group-hover:text-academic-cream'
                  }`}>
                    <Icon size={18} />
                  </div>
                  <span className="truncate">{item.label}</span>
                </div>

                <div className="flex items-center gap-1">
                  {item.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-md font-medium transition-colors ${
                      isActive 
                        ? 'bg-academic-blue/10 text-academic-ink font-semibold' 
                        : 'bg-academic-cream/5 text-academic-accent/70 group-hover:text-academic-cream'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  {isActive && <ChevronRight size={14} className="text-academic-ink shrink-0" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Sidebar Footer Metadata */}
        <div className="p-4 m-3 rounded-2xl bg-white/[0.02] border border-academic-sidebar-border text-[11px] text-academic-accent/70 space-y-1">
          <div className="flex items-center justify-between font-medium text-academic-cream/90">
            <span>Môn học</span>
            <span className="text-academic-accent font-mono">2025-2026</span>
          </div>
          <p className="text-[10px] text-academic-accent/60 leading-tight">Nhập môn CN Số & Ứng dụng AI</p>
        </div>
      </nav>
      
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}

