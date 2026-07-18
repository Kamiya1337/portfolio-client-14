import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { AlertCircle, CheckCircle2, XCircle, X, Maximize2, LayoutGrid, Table, FileText, Image as ImageIcon, ExternalLink } from 'lucide-react';

export default function EvidenceTable() {
  const { projects } = portfolioData;
  
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'done' | 'pending'

  // State quản lý Pop-up Modal
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });

  const openPreview = (e, url, type) => {
    if (type === 'drive') return;
    if (e) e.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };

  const closePreview = () => setPreviewData({ isOpen: false, url: '', type: '' });

  // Filter projects by submission status
  const filteredProjects = projects.filter((p) => {
    const isReportDone = p.report && p.report !== "Sẽ cập nhật sau" && p.report !== "Không yêu cầu";
    const isImgDone = p.evidenceImg && p.evidenceImg !== "Sẽ cập nhật sau" && p.evidenceImg !== "Không yêu cầu";
    const isFullyDone = isReportDone && isImgDone;

    if (statusFilter === 'done') return isFullyDone;
    if (statusFilter === 'pending') return !isFullyDone;
    return true;
  });

  const StatusBadge = ({ report, img, drive }) => {
    const isReportDone = report !== "Sẽ cập nhật sau" && report !== "" && report !== "Không yêu cầu";
    const isImgDone = img !== "Sẽ cập nhật sau" && img !== "" && img !== "Không yêu cầu";
    const isDriveDone = drive !== "Sẽ cập nhật sau" && drive !== "" && drive !== "Không yêu cầu";
    
    if (isReportDone && isImgDone && isDriveDone) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
          <CheckCircle2 size={13}/> Đã đủ MC
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full border border-amber-200">
        <XCircle size={13}/> Cần bổ sung
      </span>
    );
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in pb-12 space-y-6">
      
      {/* POP-UP MODAL VIEWER */}
      {previewData.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 md:p-10 animate-fade-in">
          <div className="bg-academic-card w-full max-w-5xl h-full max-h-[90vh] rounded-3xl flex flex-col overflow-hidden shadow-2xl border border-academic-border">
            <div className="flex justify-between items-center p-4 border-b border-academic-border bg-academic-cream">
              <h3 className="font-bold text-academic-ink text-sm md:text-base">
                {previewData.type === 'pdf' ? 'Trình xem PDF (Báo cáo)' : 'Trình xem Hình ảnh (Screenshot)'}
              </h3>
              <div className="flex items-center gap-3">
                <a href={previewData.url} target="_blank" rel="noreferrer" className="text-xs text-academic-blue hover:underline font-bold">
                  Mở thẻ mới
                </a>
                <button onClick={closePreview} className="p-1.5 bg-academic-card hover:bg-academic-blue hover:text-academic-cream text-academic-ink rounded-xl transition-colors border border-academic-border">
                  <X size={18} />
                </button>
              </div>
            </div>
            
            <div className="flex-1 bg-academic-background/50 flex justify-center items-center overflow-auto p-4">
              {previewData.type === 'pdf' ? (
                <iframe src={previewData.url} title="PDF Preview" className="w-full h-full rounded-xl border border-academic-border shadow-xs bg-white" />
              ) : (
                <img src={previewData.url} alt="Minh chứng" className="max-w-full max-h-full object-contain rounded-xl shadow-xs bg-white" />
              )}
            </div>
          </div>
        </div>
      )}

      {/* HEADER & CONTROLS */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-academic-border pb-6">
        <div>
          <h2 className="text-3xl font-extrabold text-academic-ink tracking-tight">Bảng Kiểm soát Minh chứng Số</h2>
          <p className="text-academic-muted text-sm mt-1">Quản lý và truy cập nhanh các tệp Báo cáo PDF, Ảnh minh chứng và thư mục Google Drive</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Status Filter */}
          <div className="flex items-center gap-1 p-1 bg-academic-cream rounded-xl border border-academic-border">
            {[
              { id: 'all', label: 'Tất cả' },
              { id: 'done', label: 'Đã hoàn thành' },
              { id: 'pending', label: 'Cần bổ sung' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setStatusFilter(f.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  statusFilter === f.id ? 'bg-academic-blue text-academic-cream shadow-xs' : 'text-academic-muted hover:text-academic-ink'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Dual View Mode Switcher */}
          <div className="flex items-center gap-1 p-1 bg-academic-cream rounded-xl border border-academic-border">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-all ${
                viewMode === 'grid' ? 'bg-academic-blue text-academic-cream' : 'text-academic-muted hover:text-academic-ink'
              }`}
              title="Xem dạng Thẻ (Grid)"
            >
              <LayoutGrid size={16} />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-lg transition-all ${
                viewMode === 'table' ? 'bg-academic-blue text-academic-cream' : 'text-academic-muted hover:text-academic-ink'
              }`}
              title="Xem dạng Bảng (Table)"
            >
              <Table size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-academic-card p-4 rounded-2xl border border-academic-border shadow-2xs flex items-center gap-3">
        <AlertCircle className="text-academic-blue shrink-0" size={20} />
        <p className="text-xs text-academic-ink/90 leading-relaxed">
          <strong>Hướng dẫn nhanh:</strong> Nhấp vào bất kỳ file Báo cáo (PDF) hoặc Ảnh minh chứng nào để xem trực tiếp dưới dạng Pop-up Modal mà không cần rời khỏi trang web.
        </p>
      </div>

      {/* VIEW MODE 1: GRID CARDS VIEW */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => {
            const hasReport = project.report && project.report !== "Sẽ cập nhật sau" && project.report !== "Không yêu cầu";
            const hasImg = project.evidenceImg && project.evidenceImg !== "Sẽ cập nhật sau" && project.evidenceImg !== "Không yêu cầu";
            const hasDrive = project.driveLink && project.driveLink !== "Sẽ cập nhật sau";

            return (
              <div 
                key={project.id}
                className="academic-card-hover bg-academic-card rounded-2xl border border-academic-border p-5 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold font-mono text-academic-blue bg-academic-cream px-2 py-0.5 rounded border border-academic-border">
                      {project.chapter}
                    </span>
                    <StatusBadge report={project.report} img={project.evidenceImg} drive={project.driveLink} />
                  </div>
                  <h3 className="font-bold text-academic-ink text-sm leading-snug line-clamp-2">{project.title}</h3>
                </div>

                <div className="space-y-2 border-t border-academic-border/60 pt-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-academic-muted flex items-center gap-1.5"><FileText size={14} /> Báo cáo PDF</span>
                    {hasReport ? (
                      <button 
                        onClick={(e) => openPreview(e, project.report, 'pdf')}
                        className="font-bold text-academic-blue hover:underline inline-flex items-center gap-1"
                      >
                        Xem PDF <Maximize2 size={12} />
                      </button>
                    ) : (
                      <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[10px] font-bold">Chưa có</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-academic-muted flex items-center gap-1.5"><ImageIcon size={14} /> Ảnh Screenshot</span>
                    {hasImg ? (
                      <button 
                        onClick={(e) => openPreview(e, project.evidenceImg, 'img')}
                        className="font-bold text-academic-blue hover:underline inline-flex items-center gap-1"
                      >
                        Xem ảnh <Maximize2 size={12} />
                      </button>
                    ) : (
                      <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[10px] font-bold">Chưa có</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-academic-muted flex items-center gap-1.5"><ExternalLink size={14} /> Google Drive</span>
                    {hasDrive ? (
                      <a 
                        href={project.driveLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="font-bold text-academic-blue hover:underline inline-flex items-center gap-1"
                      >
                        Mở Drive <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[10px] font-bold">Chưa có</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW MODE 2: DETAILED DATA TABLE */}
      {viewMode === 'table' && (
        <div className="bg-academic-card rounded-2xl border border-academic-border shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-academic-cream border-b border-academic-border text-academic-ink font-bold text-xs uppercase tracking-wider">
                  <th className="p-4 w-1/3">Nhiệm vụ / Bài tập</th>
                  <th className="p-4">File Báo cáo</th>
                  <th className="p-4">Ảnh Screenshot</th>
                  <th className="p-4">Link Google Drive</th>
                  <th className="p-4 text-center">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-academic-border/60 text-xs">
                {filteredProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-academic-cream/50 transition-colors">
                    <td className="p-4">
                      <p className="font-bold text-academic-ink text-sm leading-snug">{project.title}</p>
                      <p className="text-academic-muted text-[11px] mt-0.5 font-mono">{project.chapter}</p>
                    </td>
                    <td className="p-4">
                      {project.report && project.report !== "Sẽ cập nhật sau" && project.report !== "Không yêu cầu" ? (
                        <button 
                          onClick={(e) => openPreview(e, project.report, 'pdf')}
                          className="font-bold text-academic-blue hover:underline inline-flex items-center gap-1"
                        >
                          <FileText size={14} /> Xem Báo cáo
                        </button>
                      ) : (
                        <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[10px] font-bold">Đang chờ</span>
                      )}
                    </td>
                    <td className="p-4">
                      {project.evidenceImg && project.evidenceImg !== "Sẽ cập nhật sau" && project.evidenceImg !== "Không yêu cầu" ? (
                        <button 
                          onClick={(e) => openPreview(e, project.evidenceImg, 'img')}
                          className="font-bold text-academic-blue hover:underline inline-flex items-center gap-1"
                        >
                          <ImageIcon size={14} /> Xem Ảnh
                        </button>
                      ) : (
                        <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[10px] font-bold">Đang chờ</span>
                      )}
                    </td>
                    <td className="p-4">
                      {project.driveLink && project.driveLink !== "Sẽ cập nhật sau" ? (
                        <a 
                          href={project.driveLink} 
                          target="_blank" 
                          rel="noreferrer"
                          className="font-bold text-academic-blue hover:underline inline-flex items-center gap-1"
                        >
                          <ExternalLink size={14} /> Mở Drive
                        </a>
                      ) : (
                        <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[10px] font-bold">Đang chờ</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      <StatusBadge report={project.report} img={project.evidenceImg} drive={project.driveLink} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
}

