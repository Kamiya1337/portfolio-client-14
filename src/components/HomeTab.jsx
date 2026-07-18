import { portfolioData } from '../data/portfolioData';
import { BookOpenText, Library, Layers, Quote, ArrowRight, CheckCircle2, Award, Sparkles, Compass, GraduationCap } from 'lucide-react';

export default function HomeTab({ setActiveTab }) {
  const { student, overview } = portfolioData;

  const statsList = [
    { label: 'Bài học', value: '07', desc: 'Chủ đề lý thuyết', tag: 'Hoàn thành' },
    { label: 'Sản phẩm', value: '06', desc: 'Bài tập thực hành', tag: '100% Nộp' },
    { label: 'Kỹ năng số', value: '06+', desc: 'Nhóm năng lực lõi', tag: 'Ứng dụng' },
    { label: 'Mức điểm kỳ vọng', value: '10/10', desc: 'Mục tiêu Xuất sắc', tag: 'Quyết tâm' },
  ];

  const chapterTimeline = [
    { num: '01', title: 'Chương 1 & 2', subtitle: 'Quản lý dữ liệu & Khai thác thông tin' },
    { num: '02', title: 'Chương 3', subtitle: 'Prompt Engineering & Tư duy AI' },
    { num: '03', title: 'Chương 4', subtitle: 'Hợp tác trực tuyến & Làm việc nhóm' },
    { num: '04', title: 'Chương 5 & 6', subtitle: 'Sáng tạo nội dung & Liêm chính AI' },
  ];

  return (
    <div className="mx-auto max-w-6xl w-full min-w-0 space-y-10 animate-fade-in pb-12">
      
      {/* Editorial Hero Bento Section */}
      <div className="relative overflow-hidden rounded-3xl border border-academic-border bg-academic-card p-6 md:p-10 shadow-xl shadow-black/5">
        
        {/* Subtle Background Watermark Decoration */}
        <div className="pointer-events-none absolute -top-10 -right-10 w-96 h-96 rounded-full bg-academic-cream/80 blur-3xl opacity-60" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-academic-accent/10 blur-2xl" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.5fr_1fr] items-center">
          
          {/* Left Column: Title, Intro & Actions */}
          <div className="space-y-6">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-academic-border bg-academic-cream/90 px-4 py-1.5 text-xs font-bold text-academic-ink tracking-wide">
              <Sparkles size={14} className="text-academic-muted" />
              <span>Báo cáo Cuối kỳ · Năm học 2025-2026</span>
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl font-black text-academic-hero-blue tracking-tight leading-[1.15]">
                Digital Technology & <br />
                <span className="underline decoration-academic-accent/60 underline-offset-8">
                  AI Learning Portfolio
                </span>
              </h1>
              <p className="mt-3 text-base md:text-lg text-academic-muted font-normal leading-relaxed">
                Hồ sơ học tập học phần: <strong className="text-academic-ink font-semibold">Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo</strong>
              </p>
            </div>

            {/* Bio Card */}
            <div className="rounded-2xl border border-academic-border bg-academic-background/60 p-5 backdrop-blur-xs space-y-4">
              <p className="text-sm md:text-base leading-relaxed text-academic-ink/90 text-justify">
                {student.bio}
              </p>
              
              <div className="flex flex-wrap gap-1.5 pt-1">
                {student.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="rounded-lg border border-academic-border/80 bg-academic-card px-2.5 py-1 text-xs font-semibold text-academic-blue shadow-xs"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button 
                onClick={() => setActiveTab('projects')}
                className="inline-flex items-center gap-2.5 rounded-xl bg-academic-blue px-6 py-3.5 text-sm font-bold text-academic-cream shadow-lg shadow-black/10 transition-all hover:bg-academic-hero-blue hover:scale-[1.02] active:scale-[0.98]"
              >
                <Layers size={18} /> Khám phá 06 bài tập <ArrowRight size={16} />
              </button>
              <button 
                onClick={() => setActiveTab('evidence')}
                className="inline-flex items-center gap-2 rounded-xl border border-academic-border bg-academic-card px-5 py-3.5 text-sm font-bold text-academic-ink shadow-xs transition-all hover:bg-academic-cream hover:border-academic-accent"
              >
                <Library size={18} /> Bảng Minh chứng
              </button>
            </div>

          </div>

          {/* Right Column: Spotlight Student Profile Card */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative rounded-3xl border border-academic-border bg-academic-card p-5 shadow-2xl space-y-4">
              <Quote className="absolute right-4 top-4 text-academic-accent/30" size={42} />
              
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-academic-blue">
                  <GraduationCap size={14} /> Student Profile
                </span>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-academic-border group">
                <img
                  src="/avatar.jpg"
                  alt={student.name}
                  className="h-96 md:h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-academic-hero-blue/80 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-3 left-3 right-3 text-academic-cream">
                  <p className="text-lg font-bold drop-shadow-sm">{student.name}</p>
                  <p className="text-xs text-academic-accent font-medium truncate">{student.id} · ULIS - VNU</p>
                </div>
              </div>

              <div className="space-y-1 text-xs pt-1 text-academic-muted">
                <p><strong className="text-academic-ink font-semibold">Ngành:</strong> {student.major}</p>
                <p className="truncate"><strong className="text-academic-ink font-semibold">Trường:</strong> ULIS - Đại học Quốc gia Hà Nội</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Neo-Bento Metrics Hub */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {statsList.map((stat, i) => (
          <div 
            key={i} 
            className="academic-card-hover bg-academic-card p-5 md:p-6 rounded-2xl border border-academic-border shadow-sm flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-academic-muted uppercase tracking-wider">{stat.label}</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-academic-cream text-academic-ink border border-academic-border">
                {stat.tag}
              </span>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-academic-hero-blue tracking-tight mb-1">{stat.value}</h3>
              <p className="text-xs text-academic-muted font-medium">{stat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Course Overview Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-academic-blue text-academic-cream">
              <BookOpenText size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-academic-ink">Tổng quan Năng lực Học phần</h2>
              <p className="text-xs md:text-sm text-academic-muted">07 nhóm năng lực lõi được trang bị trong suốt môn học</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {overview.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="academic-card-hover bg-academic-card p-5 rounded-2xl border border-academic-border shadow-xs flex items-start gap-4 group"
              >
                <div className="p-3 bg-academic-cream text-academic-ink rounded-xl border border-academic-border shrink-0 group-hover:bg-academic-blue group-hover:text-academic-cream transition-colors">
                  <Icon size={22} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold text-academic-muted bg-academic-cream px-1.5 py-0.5 rounded border border-academic-border">
                      0{item.id}
                    </span>
                    <h3 className="font-bold text-academic-ink text-sm leading-tight truncate">{item.title}</h3>
                  </div>
                  <p className="text-xs text-academic-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chapter Roadmap Preview */}
      <div className="rounded-3xl border border-academic-border bg-academic-card p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <Compass className="text-academic-blue" size={26} />
          <div>
            <h3 className="text-xl font-bold text-academic-ink">Lộ trình 06 Bài học Thành phần</h3>
            <p className="text-xs text-academic-muted">Cấu trúc tiến trình thực hành từ cơ bản đến nâng cao</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {chapterTimeline.map((item, index) => (
            <div key={index} className="relative p-4 rounded-xl bg-academic-cream/60 border border-academic-border flex flex-col justify-between space-y-2">
              <span className="text-2xl font-black text-academic-accent">{item.num}</span>
              <div>
                <h4 className="font-bold text-sm text-academic-ink">{item.title}</h4>
                <p className="text-xs text-academic-muted mt-0.5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

