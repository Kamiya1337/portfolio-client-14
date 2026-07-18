import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ChevronRight, ArrowLeft, FileText, Image as ImageIcon, X, ExternalLink, Filter, CheckCircle2, Layers, BookOpen } from 'lucide-react';

export default function ProjectsTab() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const { projects } = portfolioData;

  // State quản lý Modal và tab xem trước bên trong Modal
  const [previewData, setPreviewData] = useState({ isOpen: false, project: null, activeTab: 'info' });

  const openModal = (project, defaultTab = 'info') => {
    setSelectedProject(project);
    setPreviewData({ isOpen: true, project, activeTab: defaultTab });
  };

  const closeModal = () => {
    setPreviewData({ isOpen: false, project: null, activeTab: 'info' });
    setSelectedProject(null);
  };

  // Filter projects by chapter group
  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ch1-2') return p.chapter.includes('Chương 1') || p.chapter.includes('Chương 2');
    if (activeFilter === 'ch3-4') return p.chapter.includes('Chương 3') || p.chapter.includes('Chương 4');
    if (activeFilter === 'ch5-6') return p.chapter.includes('Chương 5') || p.chapter.includes('Chương 6');
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto pb-12 animate-fade-in space-y-8">
      
      {/* Tab Header & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-academic-border pb-6">
        <div>
          <div className="flex items-center gap-2 text-academic-blue font-bold text-xs uppercase tracking-wider mb-1">
            <BookOpen size={16} /> Danh mục Thực hành
          </div>
          <h2 className="text-3xl font-extrabold text-academic-ink tracking-tight">Các Bài tập & Nhiệm vụ Thành phần</h2>
          <p className="text-academic-muted text-sm mt-1">Hệ thống 06 sản phẩm học tập thực hành từ Chương 1 đến Chương 6</p>
        </div>

        {/* Chapter Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-academic-cream rounded-xl border border-academic-border">
          {[
            { id: 'all', label: 'Tất cả (06)' },
            { id: 'ch1-2', label: 'Chương 1 & 2' },
            { id: 'ch3-4', label: 'Chương 3 & 4' },
            { id: 'ch5-6', label: 'Chương 5 & 6' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeFilter === tab.id
                  ? 'bg-academic-blue text-academic-cream shadow-xs'
                  : 'text-academic-muted hover:text-academic-ink hover:bg-academic-card'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid View of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const isReportDone = project.report && project.report !== "Sẽ cập nhật sau" && project.report !== "Không yêu cầu";
          const isImgDone = project.evidenceImg && project.evidenceImg !== "Sẽ cập nhật sau" && project.evidenceImg !== "Không yêu cầu";

          return (
            <div 
              key={project.id} 
              className="academic-card-hover bg-academic-card rounded-2xl border border-academic-border shadow-sm flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Body */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 bg-academic-cream text-academic-blue text-[11px] font-bold rounded-md uppercase tracking-wide border border-academic-border font-mono">
                    {project.chapter}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-full border border-emerald-200">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    Hoàn Thiện
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-academic-ink group-hover:text-academic-hero-blue transition-colors leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-academic-muted text-xs mt-2 line-clamp-3 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.skills?.map((skill, idx) => (
                    <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 bg-academic-cream text-academic-blue rounded border border-academic-border/60">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick File Action Bar & Primary Trigger */}
              <div className="border-t border-academic-border bg-academic-cream/40 p-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  {isReportDone && (
                    <button
                      onClick={() => openModal(project, 'pdf')}
                      className="p-1.5 rounded-lg bg-academic-card border border-academic-border text-academic-blue hover:bg-academic-blue hover:text-academic-cream transition-colors text-xs font-semibold flex items-center gap-1"
                      title="Xem Báo cáo PDF"
                    >
                      <FileText size={14} />
                    </button>
                  )}
                  {isImgDone && (
                    <button
                      onClick={() => openModal(project, 'img')}
                      className="p-1.5 rounded-lg bg-academic-card border border-academic-border text-academic-blue hover:bg-academic-blue hover:text-academic-cream transition-colors text-xs font-semibold flex items-center gap-1"
                      title="Xem Ảnh Screenshot"
                    >
                      <ImageIcon size={14} />
                    </button>
                  )}
                  {project.driveLink && (
                    <a
                      href={project.driveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-academic-card border border-academic-border text-academic-blue hover:bg-academic-blue hover:text-academic-cream transition-colors text-xs font-semibold flex items-center gap-1"
                      title="Mở Google Drive"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                <button 
                  onClick={() => openModal(project, 'info')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-academic-ink hover:text-academic-blue group/btn px-3 py-1.5 rounded-lg bg-academic-card border border-academic-border shadow-2xs transition-all"
                >
                  Chi tiết <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* RICH FULL-SCREEN MODAL DRAWER */}
      {previewData.isOpen && previewData.project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 md:p-8 animate-fade-in">
          <div className="bg-academic-card w-full max-w-5xl h-full max-h-[92vh] rounded-3xl flex flex-col overflow-hidden shadow-2xl border border-academic-border">
            
            {/* Modal Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 md:px-6 border-b border-academic-border bg-academic-cream">
              <div className="flex items-center gap-3 min-w-0">
                <span className="px-2.5 py-1 bg-academic-blue text-academic-cream text-xs font-bold rounded uppercase tracking-wider font-mono shrink-0">
                  {previewData.project.chapter}
                </span>
                <h3 className="font-bold text-academic-ink text-sm md:text-base truncate">
                  {previewData.project.title}
                </h3>
              </div>

              {/* Tab Switcher inside Modal */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="flex items-center gap-1 bg-academic-card p-1 rounded-xl border border-academic-border">
                  <button
                    onClick={() => setPreviewData({ ...previewData, activeTab: 'info' })}
                    className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                      previewData.activeTab === 'info' ? 'bg-academic-blue text-academic-cream' : 'text-academic-muted hover:text-academic-ink'
                    }`}
                  >
                    Nội dung
                  </button>
                  <button
                    onClick={() => setPreviewData({ ...previewData, activeTab: 'pdf' })}
                    className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                      previewData.activeTab === 'pdf' ? 'bg-academic-blue text-academic-cream' : 'text-academic-muted hover:text-academic-ink'
                    }`}
                  >
                    Báo cáo (PDF)
                  </button>
                  <button
                    onClick={() => setPreviewData({ ...previewData, activeTab: 'img' })}
                    className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                      previewData.activeTab === 'img' ? 'bg-academic-blue text-academic-cream' : 'text-academic-muted hover:text-academic-ink'
                    }`}
                  >
                    Hình ảnh
                  </button>
                </div>

                <button 
                  onClick={closeModal}
                  className="p-1.5 bg-academic-card hover:bg-academic-blue hover:text-academic-cream text-academic-ink rounded-xl border border-academic-border transition-colors ml-2"
                  aria-label="Đóng pop-up"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body Content depending on Active Tab */}
            <div className="flex-1 overflow-y-auto p-6 bg-academic-background/50">
              
              {/* TAB 1: INFO & PROCESS */}
              {previewData.activeTab === 'info' && (
                <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
                  
                  <div className="bg-academic-card p-6 rounded-2xl border border-academic-border shadow-xs space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-academic-blue">Tóm tắt nhiệm vụ</h4>
                    <p className="text-lg font-bold text-academic-ink">{previewData.project.shortDesc}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-academic-card p-6 rounded-2xl border border-academic-border space-y-2">
                      <h4 className="text-sm font-bold text-academic-ink flex items-center gap-2">
                        <span className="w-2 h-2 bg-academic-blue rounded-full"></span> Mục tiêu nhiệm vụ
                      </h4>
                      <p className="text-sm text-academic-muted leading-relaxed text-justify">
                        {previewData.project.target}
                      </p>
                    </div>

                    <div className="bg-academic-card p-6 rounded-2xl border border-academic-border space-y-3">
                      <h4 className="text-sm font-bold text-academic-ink flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> Kỹ năng ứng dụng
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {previewData.project.skills?.map((s, idx) => (
                          <span key={idx} className="px-3 py-1 bg-academic-cream text-academic-ink text-xs font-semibold rounded-lg border border-academic-border">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-academic-card p-6 rounded-2xl border border-academic-border space-y-3">
                    <h4 className="text-base font-bold text-academic-ink border-b border-academic-border pb-3">Quá trình thực hiện chi tiết</h4>
                    <p className="text-sm leading-relaxed text-academic-ink/90 text-justify">
                      {previewData.project.process}
                    </p>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 bg-academic-cream p-4 rounded-2xl border border-academic-border">
                    <span className="text-xs font-semibold text-academic-muted">Liên kết minh chứng gốc:</span>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setPreviewData({ ...previewData, activeTab: 'pdf' })}
                        className="px-4 py-2 bg-academic-blue text-academic-cream text-xs font-bold rounded-xl shadow-xs hover:bg-academic-hero-blue transition-colors"
                      >
                        Xem Báo cáo PDF
                      </button>
                      {previewData.project.driveLink && (
                        <a 
                          href={previewData.project.driveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 bg-academic-card text-academic-ink border border-academic-border text-xs font-bold rounded-xl hover:bg-academic-cream transition-colors inline-flex items-center gap-1.5"
                        >
                          Google Drive <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 2: PDF VIEWER */}
              {previewData.activeTab === 'pdf' && (
                <div className="w-full h-full flex flex-col items-center justify-center min-h-[500px]">
                  {previewData.project.report && previewData.project.report !== "Sẽ cập nhật sau" && previewData.project.report !== "Không yêu cầu" ? (
                    <iframe 
                      src={previewData.project.report} 
                      title="PDF Preview" 
                      className="w-full h-full min-h-[550px] rounded-2xl border border-academic-border shadow-sm bg-white"
                    />
                  ) : (
                    <div className="text-center p-8 bg-academic-card rounded-2xl border border-academic-border space-y-3">
                      <FileText size={48} className="mx-auto text-academic-muted" />
                      <p className="font-bold text-academic-ink">Báo cáo PDF hiện đang được hoàn thiện</p>
                      <p className="text-xs text-academic-muted">Vui lòng kiểm tra lại sau hoặc xem qua link Google Drive bên dưới.</p>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: IMAGE VIEWER */}
              {previewData.activeTab === 'img' && (
                <div className="w-full h-full flex flex-col items-center justify-center min-h-[500px]">
                  {previewData.project.evidenceImg && previewData.project.evidenceImg !== "Sẽ cập nhật sau" && previewData.project.evidenceImg !== "Không yêu cầu" ? (
                    <div className="bg-academic-card p-3 rounded-2xl border border-academic-border shadow-sm max-w-full max-h-full overflow-auto">
                      <img 
                        src={previewData.project.evidenceImg} 
                        alt="Minh chứng screenshot" 
                        className="max-w-full max-h-[600px] object-contain rounded-xl"
                      />
                    </div>
                  ) : (
                    <div className="text-center p-8 bg-academic-card rounded-2xl border border-academic-border space-y-3">
                      <ImageIcon size={48} className="mx-auto text-academic-muted" />
                      <p className="font-bold text-academic-ink">Ảnh minh chứng hiện chưa cập nhật</p>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

