/**
 * Resume Data Store - Vietnamese (Tiếng Việt)
 * Candidate: Lê Quang Sang - Software Engineer (Full Stack, Systems & Applied AI)
 */
var cvData = window.cvData = window.cvData || {};

cvData.vi = {
  meta: {
    langName: "Tiếng Việt",
    badge: "Sẵn sàng nhận cơ hội Software Engineer mới",
    updatedDate: "Cập nhật T09/2026",
    printBtn: "Tải PDF / In CV",
    themeBtnLight: "Giao diện Sáng",
    themeBtnDark: "Giao diện Tối",
    copiedToast: "Đã sao chép vào bộ nhớ tạm!",
    viewDocBtn: "Xem minh chứng gốc",
    docModalTitle: "Hồ Sơ Văn Bằng & Bảng Điểm Kỹ Sư",
    closeModal: "Đóng",
    openOriginal: "Mở ảnh gốc",
    verifiedBadge: "Văn Bằng Đã Xác Thực",
    contribLabel: "Nhiệm vụ & Đóng góp chính"
  },
  personal: {
    name: "LÊ QUANG SANG",
    subName: "Le Quang Sang",
    title: "Kỹ Sư Phần Mềm (Software Engineer)",
    tagline: "Thiết kế kiến trúc hệ thống và phát triển các giải pháp Full Stack, Mobile & Trí tuệ nhân tạo ứng dụng (Applied AI).",
    avatar: "eaa169ef5155dd0b8444.jpg",
    dob: "10/03/2001",
    phone: "0329004844",
    phoneDisplay: "(+84) 329 004 844",
    email: "quangsangle.hn@gmail.com",
    website: "https://sangle.online",
    websiteDisplay: "sangle.online",
    location: "Kim Bảng, Ninh Bình, Việt Nam",
    github: "https://github.com/lequangsang01",
    linkedin: "https://linkedin.com"
  },
  metrics: [
    { value: "4+", label: "Năm kinh nghiệm", desc: "Software Engineering, Web & AI" },
    { value: "10+", label: "Hệ thống bàn giao", desc: "ERP, 3D Vision, CRM, FinTech" },
    { value: "3.61", label: "GPA Tốt nghiệp", desc: "Kỹ sư Xuất sắc ĐH Điện Lực" },
    { value: "100%", label: "Cam kết kỹ thuật", desc: "Hiệu năng cao, bảo mật & Clean Code" }
  ],
  summary: {
    title: "Mục Tiêu & Hồ Sơ Năng Lực Kỹ Sư",
    content: "Kỹ sư Phần mềm (Software Engineer) tốt nghiệp loại Xuất sắc tại Đại học Điện Lực (GPA 3.61/4.0), sở hữu tư duy nền tảng khoa học máy tính vững chắc và năng lực kỹ thuật toàn diện. Có kinh nghiệm thực chiến dày dặn trong việc thiết kế kiến trúc hệ thống có khả năng mở rộng (scalable), phát triển giải pháp Full Stack từ Web phân tán đến Mobile đa nền tảng, tối ưu hóa cơ sở dữ liệu lớn (MSSQL, PostgreSQL, Redis) và nghiên cứu triển khai các hệ thống Trí tuệ Nhân tạo thực tế (Computer Vision 3D với YOLOv11 & Open3D, nhận diện khuôn mặt, các mô hình ngôn ngữ lớn LLM/Agents). Luôn làm việc với tinh thần trách nhiệm cao: chú trọng AppSec (bảo mật), tối ưu hiệu năng và xây dựng mã nguồn chuẩn mực, dễ bảo trì."
  },
  navTabs: {
    all: "Tất cả dự án",
    fullstack: "Hệ thống & Full Stack",
    ai: "AI & Computer Vision",
    mobile: "Mobile App"
  },
  experience: {
    title: "Kinh Nghiệm Kỹ Thuật & Dự Án",
    items: [
      {
        company: "Zotek8",
        period: "08/2023 - Hiện tại",
        role: "Software Engineer (Full Stack & AI)",
        location: "Hà Nội, Việt Nam",
        overview: "Đảm nhiệm vai trò kỹ sư phần mềm chủ lực, tham gia phân tích kiến trúc hệ thống, thiết kế cơ sở dữ liệu và triển khai toàn diện các sản phẩm phần mềm quy mô lớn cho doanh nghiệp trong và ngoài nước.",
        projects: [
          {
            name: "Meeting Transcription Nagase (Ghi Âm & AI Bóc Băng Cuộc Họp)",
            category: "mobile",
            tag: "Mobile, Cloud & AI Systems",
            desc: "Hệ thống ghi âm di động, tự động chuyển đổi giọng nói thành văn bản (Speech-to-Text) và tổng hợp biên bản cuộc họp thông minh bằng AI, đồng bộ dữ liệu thời gian thực với Salesforce CRM.",
            tech: ["Flutter (Dart)", "AWS Lambda", "AWS EC2", "AWS Cognito", "OpenAI Whisper", "AWS Amplify", "Salesforce API", "SQLite"],
            contributions: [
              "Phát triển app Flutter: xây dựng UI ghi âm, xử lý audio streaming và cơ chế Offline-First với SQLite.",
              "Xây dựng Serverless Backend với AWS Lambda điều phối xử lý audio và tích hợp Salesforce CRM API.",
              "Thiết lập hệ thống xác thực, bảo mật và phân quyền người dùng qua AWS Cognito.",
              "Triển khai và tối ưu mô hình OpenAI Whisper trên AWS EC2 phục vụ bóc băng âm thanh tự động độ trễ thấp."
            ],
            highlights: [
              "Tự động hóa 100% quy trình ghi âm, bóc băng và đồng bộ dữ liệu hai chiều an toàn với Salesforce CRM REST API.",
              "Cơ chế Offline-First: hỗ trợ ghi âm ngoại tuyến ổn định và tự động đẩy dữ liệu khi có mạng trở lại."
            ]
          },
          {
            name: "Camera-count (Hệ Thống AI Đếm Pallet 3D Kho Bãi)",
            category: "ai",
            tag: "AI & Computer Vision",
            desc: "Hệ thống AI thị giác máy tính kết hợp 3 camera đồng thời ứng dụng hình học 3D để ước tính thể tích và giải quyết bài toán đếm pallet/kiện hàng bị che khuất trong kho bãi.",
            tech: ["Python", "YOLOv11", "OpenCV", "Open3D", "PyTorch", "Streamlit", "Plotly"],
            contributions: [
              "Nghiên cứu, huấn luyện mô hình YOLOv11 và thuật toán thị giác máy tính để nhận diện, đếm pallet/kiện hàng chính xác.",
              "Ứng dụng Open3D & OpenCV tái tạo hình học 3D đa góc nhìn, giải quyết triệt để điểm mù thị giác và hiện tượng xếp chồng che khuất.",
              "Xây dựng ứng dụng Base Demo (PoC) trực quan hóa 3D thời gian thực bằng Streamlit & Plotly phục vụ đánh giá nghiệm thu."
            ],
            highlights: [
              "Giải quyết triệt để góc khuất và hiện tượng che khuất trong môi trường logistics thực tế.",
              "Hoàn thiện bản PoC trực quan, chứng minh tính khả thi cao trước khi tích hợp vào dây chuyền kho bãi."
            ]
          },
          {
            name: "Hệ Thống Quản Lý Mua Hàng Sản Xuất (ERP Procurement)",
            category: "fullstack",
            tag: "Enterprise Architecture",
            desc: "Kiến trúc và xây dựng hệ thống số hóa toàn diện chuỗi mua sắm sản xuất: từ yêu cầu mua hàng (PR), đấu thầu báo giá (RFQ), đơn đặt hàng (PO) đến thủ tục nhập kho kiểm phẩm và đối soát công nợ.",
            tech: ["Vue 3 (Vite)", "Django DRF", "MSSQL", "Redis", "Celery", "Docker", "Tailwind CSS"],
            highlights: [
              "Thiết kế kiến trúc hàng đợi xử lý tác vụ nền nặng bằng Celery & Redis (báo cáo, gửi mail, tổng hợp chứng từ).",
              "Tối ưu truy vấn phức tạp trên cơ sở dữ liệu MSSQL cho hàng trăm nghìn bản ghi danh mục và chứng từ."
            ]
          },
          {
            name: "InvoiceShelf (Nền Tảng Quản Lý Hóa Đơn Doanh Nghiệp)",
            category: "fullstack",
            tag: "FinTech & Open Source",
            desc: "Hệ thống quản lý hóa đơn và dòng tiền mã nguồn mở cho cá nhân & doanh nghiệp: phát hành hóa đơn chuyên nghiệp, theo dõi công nợ tự động, xuất PDF chuẩn in ấn, tích hợp mã QR động và sao lưu định kỳ.",
            tech: ["Laravel (PHP)", "Vite", "Tailwind CSS", "MySQL", "REST API", "DomPDF", "Laravel Queue", "Docker"],
            highlights: [
              "Tự động hóa chu kỳ xuất hóa đơn định kỳ và cảnh báo nợ quá hạn bằng Laravel Scheduler.",
              "Tích hợp xuất PDF tốc độ cao và tạo mã QR động ngân hàng chuẩn EMVCo."
            ]
          },
          {
            name: "Adstart (Hệ Thống Vận Hành Quảng Cáo Đa Kênh)",
            category: "fullstack",
            tag: "Marketing Tech",
            desc: "Trung tâm quản trị tập trung chiến dịch quảng cáo Meta & Google Ads: theo dõi chỉ số ROI của URL liên kết, bộ lọc từ khóa vi phạm chính sách (NG Keywords), đối soát nạp tiền và xuất báo cáo tài chính.",
            tech: ["Laravel", "Facebook Marketing API", "Google Ads API", "MySQL", "Redis", "Docker", "Bootstrap"],
            highlights: [
              "Tích hợp sâu Facebook Marketing API & Google Ads API nhằm đồng bộ dữ liệu chiến dịch thời gian thực.",
              "Bộ lọc từ khóa cấm tự động giúp bảo vệ tài khoản quảng cáo của khách hàng khỏi vi phạm chính sách."
            ]
          },
          {
            name: "Kurua & Will Watch",
            category: "fullstack",
            tag: "Healthcare & Geo-AI",
            desc: "Kurua: Ứng dụng web/app theo dõi phục hồi sức khỏe xương khớp cho phòng khám. Will Watch: Nền tảng bản đồ động vật hoang dã dựa trên dữ liệu cộng đồng và AI.",
            tech: ["Vue.js", "React Native", "Next.js", "Flutter", "Laravel", "Firebase", "Docker"],
            highlights: [
              "Đồng bộ trải nghiệm đa nền tảng giữa Web App quản trị và Mobile App người dùng.",
              "Bảo mật dữ liệu bệnh án nghiêm ngặt và lưu trữ thời gian thực qua Firebase."
            ]
          }
        ]
      },
      {
        company: "Torus Engineering",
        period: "05/2022 - 05/2022",
        role: "Front End & Tooling Engineer",
        location: "Hà Nội, Việt Nam",
        overview: "Tham gia phát triển công cụ tương tác dữ liệu phục vụ nghiên cứu thị giác máy tính và đóng gói các module giao diện AI cho khách hàng B2B.",
        projects: [
          {
            name: "Skin Annotation Tool",
            category: "ai",
            tag: "AI Data Tooling",
            desc: "Công cụ gán nhãn đa giác và chấm điểm tổn thương trên ảnh soi da chuyên sâu, xuất dữ liệu chuẩn hóa phục vụ huấn luyện mô hình thị giác máy tính.",
            tech: ["Python Flask", "JavaScript (ES6+)", "Bootstrap", "Canvas API"],
            highlights: [
              "Xây dựng công cụ vẽ và đo đạc trực tiếp trên Canvas với tốc độ phản hồi cao.",
              "Xuất định dạng dữ liệu JSON chuẩn mực tích hợp thẳng vào pipeline training."
            ]
          },
          {
            name: "Belle Widget (Modular AI Component)",
            category: "fullstack",
            tag: "B2B Embeddable SDK",
            desc: "Đóng gói các giải pháp AI thành các widget Web/Mobile độc lập, hỗ trợ khách hàng B2B tích hợp trực tiếp vào website qua mã nhúng JavaScript có thể tùy biến cấu hình.",
            tech: ["React", "React Native", "JavaScript", "Python", ".NET API"],
            highlights: [
              "Kiến trúc component cô lập, ngăn ngừa triệt để xung đột CSS/JS khi nhúng vào website bên thứ ba."
            ]
          }
        ]
      },
      {
        company: "Phòng Lab Khoa CNTT - Đại học Điện Lực",
        period: "2020 - 2024",
        role: "Software R&D Engineer",
        location: "Hà Nội, Việt Nam",
        overview: "Tham gia các đề tài nghiên cứu trọng điểm tại khoa, xây dựng các giải pháp ứng dụng học sâu và xử lý ảnh vào thực tiễn.",
        projects: [
          {
            name: "Hệ Thống Quản Lý Nhân Sự & Chấm Công Nhận Diện Khuôn Mặt",
            category: "ai",
            tag: "AI & Award Winning",
            desc: "Hệ thống quản lý nhân sự toàn diện tích hợp công nghệ AI Face Matching nhận dạng khuôn mặt để chấm công tự động trên Web và thiết bị di động.",
            tech: ["Angular", ".NET Core", "Python", "C++", "SQL Server", "Face Recognition"],
            highlights: [
              "Đoạt GIẢI BA - Cuộc thi Thử Thách Đổi Mới 2022 do Khoa CNTT ĐH Điện Lực tổ chức.",
              "Tối ưu hóa tốc độ so khớp khuôn mặt thời gian thực dưới 0.5 giây với độ chính xác cao."
            ]
          },
          {
            name: "Website OCR Chuyển Đổi Tài Liệu & Tìm Kiếm Hình Ảnh",
            category: "ai",
            tag: "OCR & Document Processing",
            desc: "Hệ thống trích xuất văn bản từ hình ảnh và tệp PDF, phục vụ số hóa văn bản lưu trữ và tra cứu tài liệu thông minh.",
            tech: ["Python Flask", "Tesseract OCR 5", "OpenCV", "JavaScript"],
            highlights: [
              "Xây dựng quy trình tiền xử lý ảnh (khử nhiễu, cân bằng sáng) nâng cao độ chính xác của bộ máy OCR."
            ]
          }
        ]
      },
      {
        company: "Dự Án Cá Nhân & Sản Phẩm Độc Lập (Personal Projects)",
        period: "2024 - Hiện tại",
        role: "Creator & Lead Software Engineer",
        location: "Hà Nội, Việt Nam / Online",
        overview: "Trực tiếp nghiên cứu kiến trúc, phát triển và vận hành các sản phẩm phần mềm độc lập phục vụ cộng đồng, đạt chuẩn kỹ thuật cao về bảo mật Client-Side, tối ưu AI SEO / GEO First và Trí tuệ Nhân tạo thời gian thực.",
        projects: [
          {
            name: "OmniKit Web Tool (Suite 54+ Công Cụ Trực Tuyến Client-Side)",
            category: "fullstack",
            tag: "Client-Side Suite / AI SEO",
            liveUrl: "https://www.omnikit.online",
            liveText: "omnikit.online",
            githubUrl: "https://github.com/lequangsang01/web-tool",
            desc: "Nền tảng tổng hợp 53 công cụ tiện ích trực tuyến hoàn toàn miễn phí (Luyện gõ bàn phím WPM, xử lý Text/Diff, công cụ lập trình viên JSON/JWT/Regex/Hash, nén PDF & ảnh, máy tính tài chính ROI, đo độ tương phản màu WCAG, tạo mã QR động). Kiến trúc xử lý 100% Client-Side trên trình duyệt, không lưu trữ hay gửi dữ liệu về máy chủ, bảo vệ tuyệt đối quyền riêng tư người dùng.",
            tech: ["Next.js (SSG)", "TypeScript", "Tailwind CSS", "Firebase Auth", "Web Crypto API", "Web Workers", "Schema.org (JSON-LD)"],
            highlights: [
              "Kiến trúc AI SEO / GEO First tiên tiến: tối ưu Answer-First, cung cấp file /llms.txt, cấu trúc dữ liệu JSON-LD Schema.org, pre-render SSG 341 trang tĩnh chuẩn SEO.",
              "Tích hợp Firebase Auth đăng nhập Google/Email mở khóa không giới hạn lượt dùng và hỗ trợ đa ngôn ngữ 5 thứ tiếng (VI, EN, ZH, JA, KO)."
            ]
          },
          {
            name: "SangLe AI Showcase (Nền Tảng Trình Diễn AI Thời Gian Thực)",
            category: "ai",
            tag: "Real-Time Browser AI",
            liveUrl: "https://sangle-ai.vercel.app/",
            liveText: "sangle-ai.vercel.app",
            githubUrl: "https://github.com/lequangsang01/sangle-AI",
            desc: "Nền tảng trình diễn và thử nghiệm các mô hình AI thời gian thực ngay trên trình duyệt web, khai thác sức mạnh của Google MediaPipe Tasks kết hợp WebAssembly (WASM) và WebGL để tăng tốc phần cứng trực tiếp trên GPU/CPU với độ trễ cực thấp.",
            tech: ["Next.js 16 (App Router)", "TypeScript", "Google MediaPipe", "WASM", "WebGL", "Tailwind CSS", "Radix UI", "Chart.js"],
            highlights: [
              "Tích hợp 15+ mô hình AI đỉnh cao qua 3 nhóm chuyên sâu: Thị giác máy tính (Face Landmarker 468+ điểm mốc cảm xúc, Hand/Gesture tracking, Pose khung xương, Interactive Segmentation tách nền 1-click), Xử lý ngôn ngữ tự nhiên (chạy mô hình LLM Gemma trực tiếp trong trình duyệt), và Phân loại âm thanh môi trường.",
              "Xử lý hoàn toàn On-Device (Real-time Edge AI) không gửi dữ liệu hình ảnh/âm thanh lên cloud, bảo mật dữ liệu tuyệt đối và tương thích mượt mà giữa Desktop và Mobile."
            ]
          }
        ]
      }
    ]
  },
  skills: {
    title: "Kỹ Năng Kỹ Sư & Công Nghệ",
    groups: [
      {
        name: "Kiến Trúc & Kỹ Thuật Phần Mềm (Software Engineering)",
        items: ["System Architecture", "Clean Code & Refactoring", "RESTful APIs", "OOP & Design Patterns", "High Concurrency & Caching", "Database Indexing & Optimization", "Application Security (OWASP)", "Microservices Architecture"]
      },
      {
        name: "Trí Tuệ Nhân Tạo & Thị Giác (AI / Computer Vision)",
        items: ["YOLOv11", "PyTorch", "OpenCV", "Open3D", "TensorFlow", "Keras", "Scikit-Learn", "Tesseract OCR", "LLM (Llama, DeepSeek)", "AI Agents (Hermes, n8n)"]
      },
      {
        name: "Lập Trình Web (Full Stack)",
        items: ["JavaScript / TypeScript", "Vue.js (Vue 3)", "ReactJS", "Next.js", "PHP (Laravel)", "Python (Django, Flask)", "HTML5 / CSS3", "Tailwind CSS", "Bootstrap"]
      },
      {
        name: "Lập Trình Ứng Dụng Di Động (Mobile)",
        items: ["Flutter (Dart)", "React Native", "Kiến trúc Cross-platform", "Offline-First Sync"]
      },
      {
        name: "Cơ Sở Dữ Liệu & Bộ Nhớ Đệm",
        items: ["PostgreSQL", "MySQL", "MSSQL", "SQLite", "MongoDB", "Firebase (Firestore/RTDB)", "Redis"]
      },
      {
        name: "DevOps, Cloud & Tích Hợp API",
        items: ["Docker", "AWS (EC2, S3, Lambda, DynamoDB, Cognito, Amplify)", "Google Cloud Platform", "Cloudflare", "Git / GitHub Actions", "Meta Ads API", "Google Ads API", "Salesforce API"]
      },
      {
        name: "Ngoại Ngữ & Kỹ Năng Kỹ Sư",
        items: ["Quản lý đội nhóm & Lập kế hoạch kỹ thuật (Team Lead nhóm 5 thành viên)", "Tiếng Việt (Bản ngữ)", "Tiếng Anh (Chuẩn B1 - Đọc hiểu tài liệu chuyên sâu & Giao tiếp)", "Tư duy phản biện", "Giải quyết vấn đề phức tạp", "Làm việc nhóm"]
      }
    ]
  },
  education: {
    title: "Học Vấn & Bằng Cấp Kỹ Sư",
    school: "Trường Đại học Điện Lực (EPU)",
    degree: "Kỹ Sư Công Nghệ Thông Tin (The Degree of Engineer)",
    major: "Chuyên ngành: Trí Tuệ Nhân Tạo & Thị Giác Máy Tính",
    period: "08/2019 - 04/2024",
    grade: "Hạng Tốt Nghiệp: XUẤT SẮC (Summa Cum Laude / Excellent)",
    gpa: "Điểm trung bình tích lũy (GPA): 3.61 / 4.0",
    notes: "Tốt nghiệp thủ khoa đầu ra với nền tảng vững vàng về thuật toán, kiến trúc máy tính, mạng máy tính và thị giác máy tính.",
    documents: [
      {
        id: "diploma",
        title: "Bằng Kỹ Sư - Hạng Xuất Sắc",
        subtitle: "Đại học Điện Lực (Quyết định tốt nghiệp số 448/QĐ-ĐHĐL)",
        badge: "Bằng Kỹ Sư Xuất Sắc",
        src: "11515d67388696d8cf97.jpg",
        desc: ""
      },
      {
        id: "transcript-p1",
        title: "Bảng Điểm Tốt Nghiệp (Trang 1/2)",
        subtitle: "Môn 1 - 45: Đại cương & Cơ sở chuyên ngành",
        badge: "Bảng Điểm Trang 1",
        src: "0af520d6ae30006e5921.jpg",
        desc: ""
      },
      {
        id: "transcript-p2",
        title: "Bảng Điểm & Dấu Mộc ĐHĐL (Trang 2/2)",
        subtitle: "Môn 46 - 57: Khóa luận tốt nghiệp, GPA 3.61 & Mộc đỏ",
        badge: "Bảng Điểm Trang 2 (Mộc đỏ)",
        src: "3acf5fe8d10e7f50261f.jpg",
        desc: ""
      }
    ]
  },
  awards: {
    title: "Giải Thưởng & Thành Tích",
    items: [
      {
        year: "06/2022",
        title: "Giải Ba (Đồng Đội) - Cuộc Thi Thử Thách Đổi Mới",
        issuer: "Khoa CNTT - Đại Học Điện Lực",
        desc: "Đạt giải với sản phẩm 'Hệ Thống Quản Lý Nhân Sự Tích Hợp Chấm Công Bằng Nhận Diện Khuôn Mặt AI'."
      },
      {
        year: "04/2024",
        title: "Tốt Nghiệp Kỹ Sư Loại Xuất Sắc (GPA 3.61/4.0)",
        issuer: "Trường Đại Học Điện Lực",
        desc: "Được vinh danh trong danh sách sinh viên có thành tích học tập và nghiên cứu xuất sắc toàn khoa."
      }
    ]
  },
  interests: {
    title: "Sở Thích Cá Nhân",
    items: [
      { icon: "💻", text: "Nghiên cứu kiến trúc hệ thống phân tán, mã nguồn mở & AI Agents" },
      { icon: "🏃", text: "Chạy bộ (Rèn luyện thể lực bền bỉ và tính kiên định)" },
      { icon: "🎮", text: "Chơi game chiến thuật và giải đố logic" }
    ]
  },
  footer: {
    copyright: "© 2026 Lê Quang Sang. Bản quyền được bảo lưu.",
    printNote: ""
  }
};
