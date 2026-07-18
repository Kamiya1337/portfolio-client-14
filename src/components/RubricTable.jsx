import { portfolioData } from '../data/portfolioData';
import { Target, CheckCircle2, RefreshCw, Award, ShieldCheck, FileCheck, Sparkles, AlertTriangle } from 'lucide-react';

export default function RubricTable() {
  const { projects } = portfolioData;

  const totalMilestones = projects.length * 2; // 6 bài x 2 mục (Báo cáo + Ảnh)
  
  const completedMilestones = projects.reduce((acc, project) => {
    const reportDone = project.report && project.report !== "Sẽ cập nhật sau" && project.report !== "Không yêu cầu";
    const imgDone = project.evidenceImg && project.evidenceImg !== "Sẽ cập nhật sau" && project.evidenceImg !== "Không yêu cầu";
    return acc + (reportDone ? 1 : 0) + (imgDone ? 1 : 0);
  }, 0);

  const progressPercent = Math.round(50 + (completedMilestones / totalMilestones) * 50);

  // SVG Gauge calculations
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <div className="max-w-6xl mx-auto animate-fade-in pb-12 space-y-8">
      
      {/* Tab Header */}
      <div className="border-b border-academic-border pb-6">
        <div className="flex items-center gap-2 text-academic-blue font-bold text-xs uppercase tracking-wider mb-1">
          <Award size={16} /> Đánh giá Chất lượng
        </div>
        <h2 className="text-3xl font-extrabold text-academic-ink tracking-tight">Tự Đánh giá theo Rubric Môn học</h2>
        <p className="text-academic-muted text-sm mt-1">Phân tích mức độ đáp ứng tiêu chuẩn xuất sắc và readiness score thời gian thực</p>
      </div>

      {/* ASSESSMENT ANALYTICS HERO BANNER */}
      <div className="bg-academic-card p-6 md:p-8 rounded-3xl border border-academic-border shadow-sm grid md:grid-cols-[1.5fr_1fr] items-center gap-8">
        
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-academic-cream rounded-full border border-academic-border text-xs font-bold text-academic-ink">
            <RefreshCw size={14} className="text-academic-blue animate-spin" style={{ animationDuration: '10s' }} />
            <span>Readiness Score Analytics</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold text-academic-hero-blue tracking-tight">
            Mức độ Sẵn sàng Portfolio
          </h3>
          
          <p className="text-sm text-academic-muted leading-relaxed">
            Hệ thống phân tích tự động kiểm duyệt dữ liệu thực tế: Đã tích hợp thành công <strong className="text-academic-ink">{completedMilestones} trên {totalMilestones}</strong> hạng mục minh chứng học tập.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-academic-cream/60 rounded-xl border border-academic-border">
              <span className="text-[11px] text-academic-muted block">Tiêu chuẩn chấm</span>
              <span className="text-sm font-extrabold text-academic-ink">8.1 - 10.0 (Xuất sắc)</span>
            </div>
            <div className="p-3 bg-academic-cream/60 rounded-xl border border-academic-border">
              <span className="text-[11px] text-academic-muted block">Mục tiêu kỳ vọng</span>
              <span className="text-sm font-extrabold text-emerald-700">Điểm tối đa A+</span>
            </div>
          </div>
        </div>

        {/* Circular Progress Gauge Component */}
        <div className="flex flex-col items-center justify-center p-4 bg-academic-cream/40 rounded-2xl border border-academic-border relative">
          <div className="relative w-36 h-36 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r={radius}
                className="text-academic-border"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
              />
              <circle
                cx="60"
                cy="60"
                r={radius}
                className="text-academic-blue transition-all duration-1000 ease-out"
                strokeWidth="10"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-black text-academic-hero-blue tracking-tight">{progressPercent}%</span>
              <span className="text-[10px] uppercase font-bold text-academic-muted tracking-wider">Đạt chuẩn</span>
            </div>
          </div>
          <p className="text-xs font-bold text-academic-ink mt-3">Tự Đánh Giá Hoàn Thiện</p>
        </div>

      </div>

      {/* CRITERIA CARDS GRID */}
      <div className="space-y-4">
        <h3 className="text-xl font-extrabold text-academic-ink flex items-center gap-2">
          <Target size={20} className="text-academic-blue" /> Chi tiết Tiêu chí & Hiện trạng Bài làm
        </h3>

        <div className="grid grid-cols-1 gap-4">
          
          {/* Criterion 1: UI/UX & Layout */}
          <div className="academic-card-hover bg-academic-card p-5 rounded-2xl border border-academic-border shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase font-mono px-2 py-0.5 bg-academic-cream text-academic-blue rounded border border-academic-border">
                  Tiêu chí 01
                </span>
                <h4 className="font-bold text-academic-ink text-base">Thiết kế & Cấu trúc Portfolio</h4>
              </div>
              <p className="text-xs text-academic-muted leading-relaxed">
                Giao diện chuyên nghiệp, cấu trúc Neo-Bento rõ ràng, điều hướng mượt mà, chuẩn UI/UX học thuật đại học.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
                <CheckCircle2 size={14} /> Đã hoàn thành 100%
              </span>
            </div>
          </div>

          {/* Dynamic Chapter Assignments Criteria */}
          {projects.map((project) => {
            const isReportDone = project.report && project.report !== "Sẽ cập nhật sau" && project.report !== "Không yêu cầu";
            const isImgDone = project.evidenceImg && project.evidenceImg !== "Sẽ cập nhật sau" && project.evidenceImg !== "Không yêu cầu";
            const isFullyDone = isReportDone && isImgDone;

            return (
              <div 
                key={project.id}
                className="academic-card-hover bg-academic-card p-5 rounded-2xl border border-academic-border shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase font-mono px-2 py-0.5 bg-academic-cream text-academic-blue rounded border border-academic-border">
                      {project.chapter}
                    </span>
                    <h4 className="font-bold text-academic-ink text-base">{project.title}</h4>
                  </div>
                  <p className="text-xs text-academic-muted leading-relaxed">
                    Yêu cầu: Đầy đủ file báo cáo nội dung thực hành chi tiết và hình ảnh screenshot sản phẩm số thực tế.
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1 shrink-0">
                  {isFullyDone ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
                      <CheckCircle2 size={14} /> Đạt chuẩn Xuất sắc
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full border border-amber-200">
                      <AlertTriangle size={14} /> Đang hoàn thiện
                    </span>
                  )}
                  <span className="text-[11px] text-academic-muted italic">
                    {isFullyDone ? "Đã đồng bộ minh chứng" : "Cần bổ sung thêm file báo cáo/ảnh"}
                  </span>
                </div>
              </div>
            );
          })}

        </div>
      </div>

    </div>
  );
}

