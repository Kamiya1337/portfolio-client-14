import { Quote, Sparkles, ShieldCheck, Compass, HelpCircle } from 'lucide-react';

export default function Summary() {
  return (
    <div className="max-w-5xl mx-auto animate-fade-in pb-12 space-y-8">
      
      {/* Tab Header */}
      <div className="border-b border-academic-border pb-6">
        <div className="flex items-center gap-2 text-academic-blue font-bold text-xs uppercase tracking-wider mb-1">
          <Quote size={16} /> Nhìn lại Hành trình
        </div>
        <h2 className="text-3xl font-extrabold text-academic-ink tracking-tight">TỔNG KẾT & SUY NGẪM</h2>
        <p className="text-academic-muted text-sm mt-1">Nhìn lại hành trình trải nghiệm và định hình tư duy phát triển.</p>
      </div>

      {/* 1. Hero Section: Kiến thức & Kỹ năng đã đạt được */}
      <div className="relative overflow-hidden rounded-3xl border border-academic-border bg-academic-card p-6 md:p-8 shadow-sm">
        <Quote className="absolute top-4 right-4 text-academic-accent/20 rotate-180" size={100} />
        
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-academic-cream rounded-full border border-academic-border text-xs font-bold text-academic-ink">
            <Sparkles size={14} className="text-academic-blue" />
            <span>Mục 01 · Tri thức & Năng lực</span>
          </div>

          <h3 className="text-2xl font-extrabold text-academic-hero-blue leading-snug">
            1. Kiến thức & Kỹ năng đã đạt được
          </h3>

          <div className="text-sm md:text-base leading-relaxed text-academic-ink/90 text-justify space-y-4 pt-1">
            <p>
              Trải qua quá trình hoàn thành 6 bài tập thực hành của học phần, em đã tích lũy được nhiều kiến thức nền tảng và kỹ năng thiết yếu trong kỷ nguyên số. Về mặt nhận thức, em đã hiểu rõ cấu trúc, phương thức vận hành của máy tính cùng các thiết bị ngoại vi, đồng thời nắm vững các nguyên tắc đánh giá độ tin cậy của thông tin trên không gian mạng. Đặc biệt, phân môn này cũng mang lại cho em cơ hội tiếp cận công nghệ trí tuệ nhân tạo (AI), giúp em nhận diện được cả tiềm năng lẫn giới hạn của công cụ này để ứng dụng một cách thông minh vào học tập.
            </p>
            <p>
              Về mặt kỹ năng, năng lực tìm kiếm, sàng lọc và xử lý dữ liệu từ đa nguồn của em đã được nâng cao rõ rệt. Em đã thuần thục hơn trong việc thiết kế các câu lệnh (Prompt) tối ưu để tương tác hiệu quả với AI, biết cách khai thác các nền tảng trực tuyến phục vụ cho việc kết nối, làm việc nhóm, và phát triển tư duy sáng tạo thông qua việc thiết kế, trình bày các sản phẩm học tập. Bên cạnh đó, các vấn đề về an toàn thông tin, bảo mật dữ liệu cá nhân cùng nguyên tắc liêm chính học thuật trong môi trường số cũng được em thấu suốt và áp dụng nghiêm túc.
            </p>
            <p className="italic font-medium text-academic-blue bg-academic-cream p-4 rounded-xl border border-academic-border">
              "Những hành trang này không chỉ giúp em hoàn thành tốt các yêu cầu của môn học, mà còn là bệ phóng quan trọng cho lộ trình học tập nâng cao và phát triển sự nghiệp sau này."
            </p>
          </div>
        </div>
      </div>

      {/* 2-Column Grid: 2. Khó khăn gặp phải & 3. Kế hoạch hoàn thiện */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Card 1: Khó khăn gặp phải */}
        <div className="academic-card-hover bg-academic-card p-6 md:p-8 rounded-3xl border border-academic-border shadow-xs space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="p-2.5 w-fit rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
              <HelpCircle size={22} />
            </div>
            <h3 className="text-lg font-bold text-academic-ink">2. Khó khăn gặp phải</h3>
            
            <div className="text-xs md:text-sm text-academic-muted leading-relaxed text-justify space-y-3">
              <p>
                Trong hành trình xây dựng Portfolio và giải quyết các bài tập, em cũng đối mặt với không ít thử thách. Trở ngại đầu tiên chính là việc thích nghi với hàng loạt công cụ và nền tảng công nghệ mới mẻ. Do chưa có nhiều kinh nghiệm thực tế trong việc thiết kế website, quản lý dữ liệu trực tuyến hay sử dụng các ứng dụng bổ trợ học tập, em đã phải dành khá nhiều thời gian để tự mày mò, học cách vận hành và khắc phục các lỗi hệ thống phát sinh. Việc kiểm chứng thông tin giữa một "biển" kiến thức trên Internet cũng là một bài toán khó, đòi hỏi em phải học cách tư duy phản biện, đối chiếu tài liệu kỹ lưỡng trước khi đưa vào bài làm.
              </p>
              <p>
                Một thách thức đáng nhớ khác là việc làm chủ công cụ AI. Ở giai đoạn đầu, do cách đặt câu hỏi còn chung chung, em thường nhận về những kết quả chưa sát với kỳ vọng. Phải qua nhiều lần thử nghiệm và tinh chỉnh cấu trúc Prompt, em mới rút ra được kinh nghiệm đưa ra yêu cầu chi tiết để khai thác tối đa công nghệ này, đồng thời luôn giữ sự cẩn trọng, kiểm tra lại các thông tin do AI cung cấp nhằm tránh sai sót. Cuối cùng, việc cân bằng thời gian để vừa hoàn thành tiến độ Portfolio, vừa giải quyết các bài tập chuyên ngành khác cũng tạo ra áp lực không nhỏ, buộc em phải liên tục chỉnh sửa, tối ưu nội dung để sản phẩm đạt chất lượng tốt nhất.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 inline-block">
              ✓ Tinh thần tự học & Tư duy chủ động khi đối diện thử thách
            </span>
          </div>
        </div>

        {/* Card 2: Kế hoạch hoàn thiện */}
        <div className="academic-card-hover bg-academic-card p-6 md:p-8 rounded-3xl border border-academic-border shadow-xs space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="p-2.5 w-fit rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
              <Compass size={22} />
            </div>
            <h3 className="text-lg font-bold text-academic-ink">3. Kế hoạch hoàn thiện</h3>
            
            <div className="text-xs md:text-sm text-academic-muted leading-relaxed text-justify space-y-3">
              <p>
                Dù đã hoàn thành chặng đường này, em nhận thấy bản thân vẫn còn nhiều không gian để hoàn thiện và phát triển. Trong thời gian tới, em đặt mục tiêu tối ưu hóa năng lực ứng dụng công nghệ vào cả học tập lẫn công việc thực tế. Em sẽ chủ động nghiên cứu sâu hơn về các phần mềm quản lý công việc, lưu trữ tài liệu và kết nối trực tuyến nhằm nâng cao hiệu suất làm việc. Đối với kỹ năng nghiên cứu, em sẽ duy trì thói quen tiếp cận các nguồn học thuật chính thống, đồng thời nâng cao tư duy phân tích, định lượng thông tin để đảm bảo tính chính xác cho các sản phẩm của mình.
              </p>
              <p>
                Về mảng trí tuệ nhân tạo, em dự định sẽ tiếp tục nâng cao kỹ năng tối ưu hóa Prompt để biến AI thành một trợ thủ đắc lực trong nghiên cứu. Tuy nhiên, em luôn ý thức được việc tuân thủ nghiêm ngặt tính liêm chính học thuật—chỉ xem AI là công cụ hỗ trợ tư duy chứ không thay thế cho sự sáng tạo độc lập của bản thân. Là một sinh viên ngành Biên phiên dịch tiếng Anh, em sẽ tích cực ứng dụng các kỹ năng số đã học vào việc tra cứu thuật ngữ, sử dụng thành thạo các công cụ hỗ trợ dịch thuật (CAT Tools) và nâng cao năng lực dịch thuật trực tuyến. Song song đó, em cũng sẽ mài giũa các kỹ năng mềm như giao tiếp, làm việc nhóm và quản trị thời gian để sẵn sàng cho môi trường làm việc chuyên nghiệp tương lai.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block">
              🚀 Định hướng ngành Biên phiên dịch tiếng Anh
            </span>
          </div>
        </div>

      </div>

      {/* 4. Cam kết Liêm chính Học thuật Box */}
      <div className="rounded-3xl border border-academic-border bg-academic-card p-6 md:p-8 shadow-md relative overflow-hidden text-center space-y-4">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-academic-cream rounded-full border border-academic-border text-xs font-bold text-academic-ink">
          <ShieldCheck size={16} className="text-emerald-600" />
          <span>Mục 04 · Cam kết Học thuật</span>
        </div>

        <h3 className="text-xl md:text-2xl font-extrabold text-academic-hero-blue">
          4. Cam kết Liêm chính Học thuật
        </h3>

        <p className="text-xs md:text-sm text-academic-muted leading-relaxed max-w-3xl mx-auto text-center italic">
          "Em xin cam kết toàn bộ nội dung và các báo cáo xuất hiện trong portfolio này đều phản ánh đúng năng lực thực tế và tiến trình làm việc độc lập của cá nhân em. Việc sử dụng công nghệ AI (nếu có) hoàn toàn được giới hạn ở vai trò hỗ trợ (như gợi ý ý tưởng, sửa lỗi diễn đạt hoặc kiểm tra dữ liệu văn bản) và tuyệt đối không thay thế cho tư duy tự học, tự nghiên cứu của bản thân. Mọi tài liệu, sản phẩm và tiến trình làm việc tại đây đều là minh chứng trung thực, không có bất kỳ hành vi sao chép hay gian lận thông tin nào."
        </p>

        <p className="text-xs font-bold text-academic-blue pt-2">
          Em xin chân thành cảm ơn Thầy/Cô đã dành thời gian quý báu để theo dõi và đánh giá sản phẩm của em!
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-academic-muted border-t border-academic-border/60">
          <div>
            <span className="block font-bold text-academic-ink">Người lập Portfolio</span>
            <span className="font-semibold text-academic-blue">Nguyễn Thị Hà An</span>
          </div>
          <div className="hidden sm:block text-academic-border">•</div>
          <div>
            <span className="block font-bold text-academic-ink">Đơn vị đào tạo</span>
            <span>ULIS - Đại học Quốc gia Hà Nội</span>
          </div>
          <div className="hidden sm:block text-academic-border">•</div>
          <div>
            <span className="block font-bold text-academic-ink">Năm học</span>
            <span className="font-mono">2025-2026</span>
          </div>
        </div>

      </div>

    </div>
  );
}


