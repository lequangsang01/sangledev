/**
 * Resume Data Store with full multilingual support (Vietnamese, English, Chinese)
 * Candidate: Lê Quang Sang - Software Engineer (Full Stack, Systems & Applied AI)
 */
const cvData = {
  vi: {
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
      verifiedBadge: "Văn Bằng Đã Xác Thực"
    },
    personal: {
      name: "LÊ QUANG SANG",
      subName: "Le Quang Sang",
      title: "Kỹ Sư Phần Mềm (Software Engineer)",
      tagline: "Thiết kế kiến trúc hệ thống, phát triển giải pháp Full Stack, Mobile & Trí tuệ nhân tạo ứng dụng (Applied AI)",
      avatar: "eaa169ef5155dd0b8444.jpg",
      dob: "10/03/2001",
      phone: "0329004844",
      phoneDisplay: "(+84) 329 004 844",
      email: "quangsangle.hn@gmail.com",
      website: "https://sangle.online",
      websiteDisplay: "sangle.online",
      location: "Kim Bảng, Ninh Bình, Việt Nam",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    metrics: [
      { value: "3+", label: "Năm kinh nghiệm", desc: "Software Engineering, Web & AI" },
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
          company: "Dự Án Cá Nhân & Sản Phẩm Độc Lập (Personal Projects)",
          period: "2024 - Hiện tại",
          role: "Creator & Lead Software Engineer",
          location: "Hà Nội, Việt Nam / Online",
          overview: "Trực tiếp nghiên cứu kiến trúc, phát triển và vận hành các sản phẩm phần mềm độc lập phục vụ cộng đồng, đạt chuẩn kỹ thuật cao về bảo mật Client-Side, tối ưu AI SEO / GEO First và Trí tuệ Nhân tạo thời gian thực.",
          projects: [
            {
              name: "OmniKit Web Tool (Suite 53+ Công Cụ Trực Tuyến Client-Side)",
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
        },
        {
          company: "Zotek8",
          period: "08/2023 - Hiện tại",
          role: "Software Engineer (Full Stack & AI)",
          location: "Hà Nội, Việt Nam",
          overview: "Đảm nhiệm vai trò kỹ sư phần mềm chủ lực, tham gia phân tích kiến trúc hệ thống, thiết kế cơ sở dữ liệu và triển khai toàn diện các sản phẩm phần mềm quy mô lớn cho doanh nghiệp trong và ngoài nước.",
          projects: [
            {
              name: "Camera-count (Hệ Thống AI Đếm Pallet 3D Kho Bãi)",
              category: "ai",
              tag: "AI & Computer Vision",
              desc: "Hệ thống AI xử lý thị giác đa góc (kết hợp 3 camera đồng thời) ứng dụng hình học 3D để ước tính thể tích và giải quyết bài toán đếm số lượng kiện hàng bị che khuất trong kho vận thực tế.",
              tech: ["Python", "YOLOv11", "OpenCV", "Open3D", "PyTorch", "Streamlit", "Plotly"],
              highlights: [
                "Ứng dụng mô hình YOLOv11 của Ultralytics kết hợp tái tạo không gian 3D qua Open3D.",
                "Giải quyết triệt để điểm mù thị giác và hiện tượng xếp chồng che khuất trong môi trường kho vận thực tế."
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
              name: "Meeting Transcription Nagase",
              category: "mobile",
              tag: "Mobile & AI Systems",
              desc: "Ứng dụng di động ghi âm, tự động chuyển đổi giọng nói thành văn bản (Speech-to-Text) và tổng hợp biên bản cuộc họp thông minh bằng AI, đồng bộ dữ liệu thời gian thực với Salesforce CRM.",
              tech: ["Flutter (Dart)", "AWS Amplify", "Cognito", "Firebase FCM", "SQLite", "Salesforce API"],
              highlights: [
                "Thiết kế luồng đồng bộ dữ liệu hai chiều an toàn với Salesforce CRM REST API.",
                "Cơ chế Offline-First: hỗ trợ ghi âm ngoại tuyến và tự động đẩy dữ liệu khi có mạng ổn định."
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
          name: "Ứng Dụng Di Động (Mobile)",
          items: ["Flutter (Dart)", "React Native", "Cross-platform Architecture", "Offline-First Sync"]
        },
        {
          name: "Cơ Sở Dữ Liệu & Bộ Nhớ Đệm",
          items: ["PostgreSQL", "MySQL", "MSSQL", "SQLite", "MongoDB", "Firebase (Firestore/RTDB)", "Redis"]
        },
        {
          name: "DevOps, Cloud & Tích Hợp API",
          items: ["Docker", "AWS (EC2, S3, Amplify)", "Google Cloud Platform", "Cloudflare", "Git / GitHub Actions", "Meta Ads API", "Google Ads API", "Salesforce API"]
        },
        {
          name: "Ngoại Ngữ & Kỹ Năng Kỹ Sư",
          items: ["Tiếng Việt (Bản ngữ)", "Tiếng Anh (Chuẩn B1 - Đọc hiểu tài liệu chuyên sâu & Giao tiếp)", "Tư duy phản biện", "Giải quyết vấn đề phức tạp", "Làm việc nhóm"]
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
          desc: "Bằng Kỹ sư ngành Công nghệ thông tin cấp cho Ông Lê Quang Sang, hạng tốt nghiệp Xuất sắc (09/04/2024)."
        },
        {
          id: "transcript-p1",
          title: "Bảng Điểm Tốt Nghiệp (Trang 1/2)",
          subtitle: "Môn 1 - 45: Đại cương & Cơ sở chuyên ngành",
          badge: "Bảng Điểm Trang 1",
          src: "0af520d6ae30006e5921.jpg",
          desc: "Phụ lục văn bằng trang 1: Điểm A/A+ tuyệt đối ở các môn Lập trình C nâng cao (10.0), Cấu trúc dữ liệu & giải thuật (9.0), Học máy (9.3), Xử lý ảnh (9.7), Học sâu (9.2)."
        },
        {
          id: "transcript-p2",
          title: "Bảng Điểm & Dấu Mộc ĐHĐL (Trang 2/2)",
          subtitle: "Môn 46 - 57: Khóa luận tốt nghiệp, GPA 3.61 & Mộc đỏ",
          badge: "Bảng Điểm Trang 2 (Mộc đỏ)",
          src: "3acf5fe8d10e7f50261f.jpg",
          desc: "Phụ lục văn bằng trang 2: Lập trình CUDA (9.0), Khóa luận tốt nghiệp (9.0), Phân tích Big Data (8.9), Xử lý ảnh y tế (8.8), Tổng 150 tín chỉ, Điểm trung bình toàn khóa GPA 3.61/4.0 cùng chữ ký và dấu mộc đỏ Trưởng phòng Đào tạo."
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
      printNote: "Hồ sơ năng lực Kỹ sư Phần mềm - Tối ưu hiển thị màn hình và chuẩn in ấn PDF."
    }
  },

  en: {
    meta: {
      langName: "English",
      badge: "Available for Software Engineering opportunities",
      updatedDate: "Updated Sep 2026",
      printBtn: "Download PDF / Print",
      themeBtnLight: "Light Mode",
      themeBtnDark: "Dark Mode",
      copiedToast: "Copied to clipboard!",
      viewDocBtn: "View Credential",
      docModalTitle: "Verified Academic Credentials",
      closeModal: "Close",
      openOriginal: "Open Original",
      verifiedBadge: "Verified Credential"
    },
    personal: {
      name: "LE QUANG SANG",
      subName: "Lê Quang Sang",
      title: "Software Engineer",
      tagline: "System Architecture, Full Stack Engineering, Cross-Platform Mobile & Applied AI Solutions",
      avatar: "eaa169ef5155dd0b8444.jpg",
      dob: "March 10, 2001",
      phone: "+84 329 004 844",
      phoneDisplay: "(+84) 329 004 844",
      email: "quangsangle.hn@gmail.com",
      website: "https://sangle.online",
      websiteDisplay: "sangle.online",
      location: "Kim Bang, Ninh Binh, Vietnam",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    metrics: [
      { value: "3+", label: "Years Experience", desc: "Software Engineering & Applied AI" },
      { value: "10+", label: "Production Systems", desc: "ERP, 3D Vision, CRM, FinTech" },
      { value: "3.61", label: "Graduation GPA", desc: "Summa Cum Laude / Highest Distinction" },
      { value: "100%", label: "Engineering Standard", desc: "Clean Code, Security & Performance" }
    ],
    summary: {
      title: "Software Engineering Profile & Summary",
      content: "Versatile Software Engineer graduated with Highest Distinction (Summa Cum Laude, GPA 3.61/4.0) from Electric Power University, combining strong theoretical computer science fundamentals with broad, real-world engineering execution. Experienced in architecting scalable, resilient systems: from complex distributed enterprise ERP platforms and open-source financial SaaS to cross-platform mobile apps and production-grade Computer Vision systems (3D pallet volume prediction with YOLOv11 & Open3D, biometric facial recognition). Pragmatic software engineer driven by high performance, application security (AppSec), clean maintainable code, and high-impact business outcomes."
    },
    navTabs: {
      all: "All Projects",
      fullstack: "Systems & Full Stack",
      ai: "AI & Computer Vision",
      mobile: "Mobile App"
    },
    experience: {
      title: "Engineering Experience & Systems",
      items: [
        {
          company: "Independent Products & Open Source (Personal Projects)",
          period: "2024 - Present",
          role: "Creator & Lead Software Engineer",
          location: "Hanoi, Vietnam / Remote",
          overview: "Architecting, developing, and operating independent production-grade software applications, demonstrating deep engineering capabilities across full-stack architecture, privacy-first client-side systems, cutting-edge AI SEO, and edge AI.",
          projects: [
            {
              name: "OmniKit Web Tool (53+ Client-Side Online Utility Suite)",
              category: "fullstack",
              tag: "Client-Side Suite / AI SEO",
              liveUrl: "https://www.omnikit.online",
              liveText: "omnikit.online",
              githubUrl: "https://github.com/lequangsang01/web-tool",
              desc: "Comprehensive suite of 53 free online utility tools (Typing speed test, text diff checker, developer utilities for JSON/JWT/Regex/Hash, image/PDF processing, financial ROI calculators, WCAG color contrast, QR generator). 100% client-side execution ensuring zero user data ever touches external servers.",
              tech: ["Next.js (SSG)", "TypeScript", "Tailwind CSS", "Firebase Auth", "Web Crypto API", "Web Workers", "Schema.org (JSON-LD)"],
              highlights: [
                "Engineered with cutting-edge AI SEO & GEO First architecture: Answer-First content modeling, native /llms.txt for AI crawlers, schema-dts structured data, and static generation (SSG) across 341 pages.",
                "Integrated Firebase Auth for unlimited usage tiers and full internationalization across 5 languages (VI, EN, ZH, JA, KO)."
              ]
            },
            {
              name: "SangLe AI Showcase (Real-Time In-Browser AI Platform)",
              category: "ai",
              tag: "Real-Time Browser AI",
              liveUrl: "https://sangle-ai.vercel.app/",
              liveText: "sangle-ai.vercel.app",
              githubUrl: "https://github.com/lequangsang01/sangle-AI",
              desc: "High-performance real-time browser AI showcase platform powered by Google MediaPipe Tasks, leveraging WebAssembly (WASM) and WebGL hardware acceleration across GPU/CPU for ultra-low latency on-device intelligence.",
              tech: ["Next.js 16 (App Router)", "TypeScript", "Google MediaPipe", "WASM", "WebGL", "Tailwind CSS", "Radix UI", "Chart.js"],
              highlights: [
                "Deployed 15+ frontier AI models across 3 core modalities: Computer Vision (468+ point Face Landmarker with blendshapes, Hand tracking, Gesture recognition, Pose estimation, 1-click Interactive Segmentation), NLP (client-side LLM inference with Gemma), and Audio classification.",
                "100% On-Device edge inference with zero camera/mic streaming to the cloud, ensuring complete privacy and high responsiveness on desktop and mobile."
              ]
            }
          ]
        },
        {
          company: "Zotek8",
          period: "08/2023 - Present",
          role: "Software Engineer (Full Stack & AI)",
          location: "Hanoi, Vietnam",
          overview: "Lead software engineer responsible for system architecture, database design, and end-to-end delivery of complex enterprise applications, mobile clients, and applied AI systems.",
          projects: [
            {
              name: "Camera-count (3D Multi-Camera Pallet AI)",
              category: "ai",
              tag: "AI & Computer Vision",
              desc: "Engineered a multi-angle (3-camera) 3D computer vision inspection system using geometric reconstruction to predict volume and accurately count severely occluded pallets in industrial warehouse logistics.",
              tech: ["Python", "YOLOv11", "OpenCV", "Open3D", "PyTorch", "Streamlit", "Plotly"],
              highlights: [
                "Integrated Ultralytics' state-of-the-art YOLOv11 detector with Open3D spatial point cloud processing.",
                "Overcame optical occlusion and blind-spot challenges in actual warehouse operations."
              ]
            },
            {
              name: "Manufacturing ERP Procurement System",
              category: "fullstack",
              tag: "Enterprise Architecture",
              desc: "Architected and engineered a comprehensive digital procurement system for manufacturing plants: purchase requests (PR), quotation bidding (RFQ), purchase orders (PO), warehouse quality control, and invoicing.",
              tech: ["Vue 3 (Vite)", "Django DRF", "MSSQL", "Redis", "Celery", "Docker", "Tailwind CSS"],
              highlights: [
                "Designed asynchronous task worker architecture with Celery & Redis to handle heavy report generation and background document dispatch.",
                "Optimized complex relational queries on MSSQL to process hundreds of thousands of inventory records seamlessly."
              ]
            },
            {
              name: "Meeting Transcription Nagase",
              category: "mobile",
              tag: "Mobile & AI Systems",
              desc: "Built a high-reliability mobile application that records corporate meetings, performs automatic speech-to-text with AI-driven minute summarization, and syncs bidirectionally with Salesforce CRM.",
              tech: ["Flutter (Dart)", "AWS Amplify", "Cognito", "Firebase FCM", "SQLite", "Salesforce API"],
              highlights: [
                "Engineered secure bidirectional synchronization with Salesforce REST APIs.",
                "Implemented resilient Offline-First recording with background upload queue on connection recovery."
              ]
            },
            {
              name: "InvoiceShelf (Open Source Financial & Billing SaaS)",
              category: "fullstack",
              tag: "FinTech & Open Source",
              desc: "Engineered an open-source billing and financial management system for SMBs: multi-currency invoice creation, automated payment tracking, print-ready PDF export, dynamic banking QR codes, and automated backups.",
              tech: ["Laravel (PHP)", "Vite", "Tailwind CSS", "MySQL", "REST API", "DomPDF", "Laravel Queue", "Docker"],
              highlights: [
                "Automated recurring billing cycles and overdue alerts via Laravel Scheduler.",
                "Integrated fast PDF compilation and standard EMVCo dynamic banking QR code generation."
              ]
            },
            {
              name: "Adstart (Omnichannel Ad Campaign Operations)",
              category: "fullstack",
              tag: "Marketing Tech",
              desc: "Centralized multi-platform advertising operations engine across Meta & Google Ads: performance attribution URLs, negative keyword compliance filters (NG Keywords), payment reconciliations, and financial reporting.",
              tech: ["Laravel", "Facebook Marketing API", "Google Ads API", "MySQL", "Redis", "Docker", "Bootstrap"],
              highlights: [
                "Deep integration with Meta Marketing API & Google Ads API for real-time campaign telemetry.",
                "Automated compliance rule engine safeguarding client accounts against advertising policy violations."
              ]
            },
            {
              name: "Kurua & Will Watch",
              category: "fullstack",
              tag: "Healthcare & Geo-AI",
              desc: "Kurua: Healthcare platform for orthopedic clinic patient recovery tracking. Will Watch: Wildlife crowdsourced geospatial mapping platform with AI data verification.",
              tech: ["Vue.js", "React Native", "Next.js", "Flutter", "Laravel", "Firebase", "Docker"],
              highlights: [
                "Delivered seamless cross-platform consistency between responsive web dashboards and mobile clients.",
                "Enforced strict patient data confidentiality and real-time cloud data synchronization."
              ]
            }
          ]
        },
        {
          company: "Torus Engineering",
          period: "05/2022 - 05/2022",
          role: "Front End & Tooling Engineer",
          location: "Hanoi, Vietnam",
          overview: "Collaborated on building specialized data annotation interfaces for computer vision and packaging modular AI components for B2B integration.",
          projects: [
            {
              name: "Skin Annotation Tool",
              category: "ai",
              tag: "AI Data Tooling",
              desc: "Developed an interactive dermatological annotation tool enabling lesion polygon labeling and quality scoring to feed machine learning training pipelines.",
              tech: ["Python Flask", "JavaScript (ES6+)", "Bootstrap", "Canvas API"],
              highlights: [
                "Created responsive canvas drawing utilities for multi-polygon defect annotation.",
                "Standardized structured JSON dataset outputs directly consumed by machine learning pipelines."
              ]
            },
            {
              name: "Belle Widget (Modular AI Component)",
              category: "fullstack",
              tag: "B2B Embeddable SDK",
              desc: "Packaged AI proof-of-concept demos into embeddable, customizable JavaScript widgets for B2B clients, configurable via API and easily branded.",
              tech: ["React", "React Native", "JavaScript", "Python", ".NET API"],
              highlights: [
                "Engineered scoped, conflict-free UI widgets capable of seamless embedding into third-party host websites."
              ]
            }
          ]
        },
        {
          company: "IT Faculty Lab - Electric Power University",
          period: "2020 - 2024",
          role: "Software R&D Engineer",
          location: "Hanoi, Vietnam",
          overview: "Participated in university research initiatives applying computer vision and deep learning to digital transformation challenges.",
          projects: [
            {
              name: "Biometric Face Recognition HR & Attendance System",
              category: "ai",
              tag: "AI & Award Winning",
              desc: "Comprehensive HR management platform integrating AI face-matching algorithms to verify employee attendance via mobile/web kiosks with anti-spoofing checks.",
              tech: ["Angular", ".NET Core", "Python", "C++", "SQL Server", "Face Recognition"],
              highlights: [
                "Awarded 3RD PRIZE at the 2022 Innovation Challenge organized by the Faculty of IT, Electric Power University.",
                "Optimized edge inference to achieve sub-500ms facial verification latency."
              ]
            },
            {
              name: "Document OCR & Intelligent Image Retrieval",
              category: "ai",
              tag: "OCR & Document Processing",
              desc: "Optical Character Recognition web app converting scanned documents and PDFs into searchable, indexable full text.",
              tech: ["Python Flask", "Tesseract OCR 5", "OpenCV", "JavaScript"],
              highlights: [
                "Developed adaptive image pre-processing (binarization, skew correction) drastically boosting recognition accuracy."
              ]
            }
          ]
        }
      ]
    },
    skills: {
      title: "Engineering Skills & Competencies",
      groups: [
        {
          name: "Software Engineering & Architecture",
          items: ["System Architecture", "Clean Code & Design Patterns", "RESTful APIs", "OOP & Data Structures", "High Concurrency & Caching", "Database Optimization & Indexing", "Application Security (OWASP)", "Microservices Architecture"]
        },
        {
          name: "Applied AI & Computer Vision",
          items: ["YOLOv11", "PyTorch", "OpenCV", "Open3D", "TensorFlow", "Keras", "Scikit-Learn", "Tesseract OCR", "LLMs (Llama, DeepSeek)", "AI Agents (Hermes, n8n)"]
        },
        {
          name: "Web Development (Full Stack)",
          items: ["JavaScript / TypeScript", "Vue.js (Vue 3)", "ReactJS", "Next.js", "PHP (Laravel)", "Python (Django, Flask)", "HTML5 / CSS3", "Tailwind CSS", "Bootstrap"]
        },
        {
          name: "Mobile App Development",
          items: ["Flutter (Dart)", "React Native", "Cross-platform Architecture", "Offline-First Sync"]
        },
        {
          name: "Databases & In-Memory Stores",
          items: ["PostgreSQL", "MySQL", "MSSQL", "SQLite", "MongoDB", "Firebase (Firestore/RTDB)", "Redis"]
        },
        {
          name: "DevOps, Cloud & API Integrations",
          items: ["Docker", "AWS (EC2, S3, Amplify)", "Google Cloud Platform", "Cloudflare", "Git / GitHub Actions", "Meta Ads API", "Google Ads API", "Salesforce API"]
        },
        {
          name: "Languages & Engineering Mindset",
          items: ["Vietnamese (Native)", "English (CEFR B1 - Technical documentation & Communication)", "Critical Thinking", "Complex Problem Solving", "Systems Thinking"]
        }
      ]
    },
    education: {
      title: "Education & Credentials",
      school: "Electric Power University (EPU)",
      degree: "The Degree of Engineer in Information Technology",
      major: "Major: Artificial Intelligence & Computer Vision",
      period: "08/2019 - 04/2024",
      grade: "Honors: HIGH DISTINCTION (Summa Cum Laude / Xuất Sắc)",
      gpa: "Cumulative GPA: 3.61 / 4.0",
      notes: "Graduated top of class with strong mastery in algorithms, computer architecture, networking, and computer vision systems.",
      documents: [
        {
          id: "diploma",
          title: "The Degree of Engineer - High Distinction",
          subtitle: "Electric Power University (Conferred April 09, 2024)",
          badge: "Summa Cum Laude Degree",
          src: "11515d67388696d8cf97.jpg",
          desc: "Official Engineer's Degree in Information Technology awarded to Mr. Le Quang Sang with Excellent classification."
        },
        {
          id: "transcript-p1",
          title: "Academic Transcript (Page 1 of 2)",
          subtitle: "Courses 1 - 45: Core CS & Engineering curriculum",
          badge: "Transcript Page 1",
          src: "0af520d6ae30006e5921.jpg",
          desc: "Diploma supplement page 1: Perfect A/A+ scores in Advanced C (10.0), Data Structures & Algorithms (9.0), Machine Learning (9.3), Image Processing (9.7), Deep Learning (9.2)."
        },
        {
          id: "transcript-p2",
          title: "Academic Transcript & University Seal (Page 2 of 2)",
          subtitle: "Courses 46 - 57: Thesis, Final GPA 3.61 & Official Seal",
          badge: "Transcript Page 2 (Seal)",
          src: "3acf5fe8d10e7f50261f.jpg",
          desc: "Diploma supplement page 2: Parallel Programming with CUDA (9.0), Graduation Thesis (9.0), Big Data Analytics (8.9), 150 cumulative credits, Final GPA 3.61/4.0 with official university seal and registrar signature."
        }
      ]
    },
    awards: {
      title: "Honors & Achievements",
      items: [
        {
          year: "06/2022",
          title: "3rd Prize (Team) - Innovation Challenge 2022",
          issuer: "Faculty of IT - Electric Power University",
          desc: "Recognized for the project 'Biometric AI Face-Recognition Attendance & HR Management System'."
        },
        {
          year: "04/2024",
          title: "High Distinction Graduate (GPA 3.61/4.0)",
          issuer: "Electric Power University",
          desc: "Honored among top-tier academic graduates in the Department of Information Technology."
        }
      ]
    },
    interests: {
      title: "Personal Interests",
      items: [
        { icon: "💻", text: "Distributed systems architecture, open-source software & AI agents" },
        { icon: "🏃", text: "Long-distance running (Cultivating grit, stamina & discipline)" },
        { icon: "🎮", text: "Strategic thinking & logic games" }
      ]
    },
    footer: {
      copyright: "© 2026 Le Quang Sang. All rights reserved.",
      printNote: "Software Engineer Curriculum Vitae - Optimized for digital presentation and standard A4 PDF printing."
    }
  },

  zh: {
    meta: {
      langName: "中文 (简体)",
      badge: "随时可沟通软件工程师新机会 / 合作",
      updatedDate: "更新于 2026年9月",
      printBtn: "下载 PDF / 打印简历",
      themeBtnLight: "明亮模式",
      themeBtnDark: "暗黑模式",
      copiedToast: "已成功复制到剪贴板！",
      viewDocBtn: "查看证明原件",
      docModalTitle: "官方学位证书与成绩单认证",
      closeModal: "关闭",
      openOriginal: "查看原图",
      verifiedBadge: "官方认证文件"
    },
    personal: {
      name: "黎光创 (Le Quang Sang)",
      subName: "Lê Quang Sang",
      title: "软件工程师 (Software Engineer)",
      tagline: "系统架构设计、全栈工程、跨平台移动端及工业级落地 AI 解决方案",
      avatar: "eaa169ef5155dd0b8444.jpg",
      dob: "2001年3月10日",
      phone: "+84 329 004 844",
      phoneDisplay: "(+84) 329 004 844",
      email: "quangsangle.hn@gmail.com",
      website: "https://sangle.online",
      websiteDisplay: "sangle.online",
      location: "越南宁平省金榜",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    metrics: [
      { value: "3+", label: "年软件工程经验", desc: "涵盖系统架构、全栈与落地 AI" },
      { value: "10+", label: "主导/交付系统", desc: "ERP、3D视觉、CRM、金融SaaS" },
      { value: "3.61", label: "毕业 GPA", desc: "电力大学优秀工学学士 (Summa Cum Laude)" },
      { value: "100%", label: "工程交付品质", desc: "系统高并发、应用安全与整洁代码" }
    ],
    summary: {
      title: "软件工程综合简介与目标",
      content: "全面型软件工程师 (Software Engineer)，毕业于越南电力大学信息技术系（人工智能与计算机视觉方向），以优异学术成绩（GPA 3.61/4.0 优秀毕业生，Summa Cum Laude）荣获工学学士学位。兼具深厚的计算机底层基础与端到端系统架构落地实力。拥有丰富的实战经验：主导大型制造企业 ERP 采购管理系统、开源财务发票 SaaS、Meta/Google 跨平台广告投放中台，以及基于 3D 空间几何与 YOLOv11 的仓储遮挡托盘体积预测系统与人脸识别考勤系统。始终践行高标准软件工程规范：注重应用安全 (AppSec)、高并发性能优化、低耦合架构设计与可维护性。"
    },
    navTabs: {
      all: "全部项目",
      fullstack: "系统架构与全栈",
      ai: "AI 与计算机视觉",
      mobile: "移动端开发 (App)"
    },
    experience: {
      title: "软件工程项目与履历",
      items: [
        {
          company: "个人重点开源与独立软件项目 (Personal Projects)",
          period: "2024年 - 至今",
          role: "独立全栈开发者 / 负责人 (Creator & Lead Engineer)",
          location: "越南河内 / 线上",
          overview: "自主设计、研发并长期维护面向全球用户的独立软件产品，体现端到端全栈工程能力、客户端隐私计算与浏览器端边缘 AI 深度落地。",
          projects: [
            {
              name: "OmniKit Web Tool (53 款离线客户端综合效率工具箱)",
              category: "fullstack",
              tag: "客户端工具 / AI SEO",
              liveUrl: "https://www.omnikit.online",
              liveText: "omnikit.online",
              githubUrl: "https://github.com/lequangsang01/web-tool",
              desc: "包含 53 款在线效率工具的高性能 Web 平台（打字测速、文本 Diff 比对、JSON/JWT/正则/哈希加密、离线 PDF 与图像处理、商业 ROI 计算、WCAG 色彩对比度、动态二维码等）。采用 100% 浏览器客户端计算，零数据上云，保障极致隐私。",
              tech: ["Next.js (SSG)", "TypeScript", "Tailwind CSS", "Firebase Auth", "Web Crypto API", "Web Workers", "Schema.org (JSON-LD)"],
              highlights: [
                "深度践行 AI SEO / GEO First 架构：Answer-First 语义优化、提供 /llms.txt 供 AI 爬虫解析、Schema.org 结构化数据，静态预渲染 (SSG) 341 个页面。",
                "集成 Firebase 身份认证并支持 5 种国际语言（中、越、英、日、韩）。"
              ]
            },
            {
              name: "SangLe AI Showcase (浏览器端实时高性能 AI 演示平台)",
              category: "ai",
              tag: "浏览器端实时 AI",
              liveUrl: "https://sangle-ai.vercel.app/",
              liveText: "sangle-ai.vercel.app",
              githubUrl: "https://github.com/lequangsang01/sangle-AI",
              desc: "基于浏览器的轻量级高性能实时 AI 演示平台，基于 Google MediaPipe Tasks 并借助 WebAssembly (WASM) 与 WebGL 实现 GPU/CPU 硬件加速，达成毫秒级端侧边缘推理。",
              tech: ["Next.js 16 (App Router)", "TypeScript", "Google MediaPipe", "WASM", "WebGL", "Tailwind CSS", "Radix UI", "Chart.js"],
              highlights: [
                "深度集成 3 大模态共 15+ 款核心 AI 模型：计算机视觉（468+ 关键点面部微表情识别、手势隔空控制、人体骨骼姿态追踪、单点交互式智能抠图）、自然语言处理（浏览器端本地运行 Gemma 大语言模型）、环境音频分类。",
                "100% 设备端本地推理（On-Device Edge AI），音视频流绝不上云，保障隐私并流畅兼容移动端与桌面端。"
              ]
            }
          ]
        },
        {
          company: "Zotek8",
          period: "2023年08月 - 至今",
          role: "软件工程师 (Full Stack & AI)",
          location: "越南河内",
          overview: "担任核心软件工程师，负责大型企业级软件系统的架构设计、数据库优化、全栈实现与工业级 AI 模块的工程落地。",
          projects: [
            {
              name: "Camera-count (3D 多视角仓储托盘 AI 盘点系统)",
              category: "ai",
              tag: "AI 与计算机视觉",
              desc: "针对工业仓储中货物被严重遮挡的行业痛点，研发基于 3 台摄像头协同的 3D 视觉空间几何系统，预测货物总体积并精确盘点托盘数量。",
              tech: ["Python", "YOLOv11", "OpenCV", "Open3D", "PyTorch", "Streamlit", "Plotly"],
              highlights: [
                "结合 Ultralytics 最新 YOLOv11 目标检测算法与 Open3D 空间点云处理。",
                "成功攻克真实物流环境中的视角盲区与堆叠遮挡盘点难题。"
              ]
            },
            {
              name: "ERP Procurement (制造型企业数字化采购系统)",
              category: "fullstack",
              tag: "企业级核心系统",
              desc: "从零架构并研发制造型企业数字化采购端到端闭环：采购申请（PR）、询价与比价（RFQ）、采购订单（PO）、验收入库到发票对账与财务结算。",
              tech: ["Vue 3 (Vite)", "Django DRF", "MSSQL", "Redis", "Celery", "Docker", "Tailwind CSS"],
              highlights: [
                "采用 Celery + Redis 构建高可靠分布式异步任务队列，解耦大型报表导出与凭证生成。",
                "对 MSSQL 复杂账目与物料表进行深度查询优化与索引重构，顺畅支撑数十万级数据规模。"
              ]
            },
            {
              name: "Meeting Transcription Nagase",
              category: "mobile",
              tag: "移动端与 AI 系统",
              desc: "高可靠企业会议录音与语音智能转录移动应用，基于 AI 自动将录音转为文本并提炼会议摘要，数据双向同步至 Salesforce CRM。",
              tech: ["Flutter (Dart)", "AWS Amplify", "Cognito", "Firebase FCM", "SQLite", "Salesforce API"],
              highlights: [
                "实现了与 Salesforce REST API 的双向增量同步机制。",
                "离线优先架构：支持断网录音并在恢复连接后自动通过后台队列断点续传。"
              ]
            },
            {
              name: "InvoiceShelf (开源企业财税发票 SaaS)",
              category: "fullstack",
              tag: "金融科技 / 开源项目",
              desc: "面向企业及商户的开源财务管理平台：发票全生命周期开立、账期逾期自动追踪、打印级 PDF 导出、动态银行二维码及自动数据备份。",
              tech: ["Laravel (PHP)", "Vite", "Tailwind CSS", "MySQL", "REST API", "DomPDF", "Laravel Queue", "Docker"],
              highlights: [
                "利用 Laravel Scheduler 实现自动化定期开票与账单催缴提醒。",
                "集成高性能 PDF 渲染引擎与标准 EMVCo 银行二维码动态加密生成。"
              ]
            },
            {
              name: "Adstart (多平台广告综合运营中台)",
              category: "fullstack",
              tag: "广告营销科技",
              desc: "Meta (Facebook) 与 Google Ads 跨平台广告统一管理系统：链接归因分析、违规敏感词自动拦截过滤（NG Keywords）、账务流水对账及自动化报表。",
              tech: ["Laravel", "Facebook Marketing API", "Google Ads API", "MySQL", "Redis", "Docker", "Bootstrap"],
              highlights: [
                "深度对接 Meta 与 Google 营销接口，保障毫秒级数据回传与实时报表更新。",
                "内置敏感词合规过滤引擎，有效保护企业广告账户免受违规封禁。"
              ]
            },
            {
              name: "Kurua & Will Watch",
              category: "fullstack",
              tag: "医疗健康与生态 AI",
              desc: "Kurua: 骨科门诊康复追踪系统。Will Watch: 基于众包地理信息与 AI 识别的野生动物保护地图。",
              tech: ["Vue.js", "React Native", "Next.js", "Flutter", "Laravel", "Firebase", "Docker"],
              highlights: [
                "保障 Web 端与跨平台 Mobile 客户端之间高度一致的用户体验与业务状态流转。",
                "遵循严格的医疗数据安全规范与云端毫秒级实时同步。"
              ]
            }
          ]
        },
        {
          company: "Torus Engineering",
          period: "2022年05月 - 2022年05月",
          role: "前端与工程化工具开发",
          location: "越南河内",
          overview: "参与计算机视觉数据标注平台的研发，以及面向 B2B 客户的 AI 模块化前端 SDK 封装。",
          projects: [
            {
              name: "Skin Annotation Tool (专业影像标注工具)",
              category: "ai",
              tag: "AI 数据工程",
              desc: "开发用于专业皮肤镜影像的多边形标注与缺陷量化工具，产出结构化数据集直接供给深度学习模型训练。",
              tech: ["Python Flask", "JavaScript (ES6+)", "Bootstrap", "Canvas API"],
              highlights: [
                "利用原生 Canvas 构建低延迟交互绘图与病灶几何计算工具。",
                "规范化输出 JSON 数据集，实现与模型训练 Pipeline 无缝对接。"
              ]
            },
            {
              name: "Belle Widget (模块化 AI 组件库)",
              category: "fullstack",
              tag: "B2B 嵌入式 SDK",
              desc: "将 AI Demo 封装为可配置、高内聚的前端组件，支持 B2B 客户通过轻量 JS 脚本无缝嵌入其宿主网站及移动应用。",
              tech: ["React", "React Native", "JavaScript", "Python", ".NET API"],
              highlights: [
                "采用样式与逻辑隔离机制，确保嵌入第三方宿主系统时不产生样式冲突与全局污染。"
              ]
            }
          ]
        },
        {
          company: "电力大学信息技术系实验中心 (EPU IT Lab)",
          period: "2020年 - 2024年",
          role: "软件研发与学术探索",
          location: "越南河内",
          overview: "参与校级重点科研课题，应用深度学习与计算机视觉技术赋能数字化转型实际场景。",
          projects: [
            {
              name: "人脸识别智能考勤与人力资源管理系统",
              category: "ai",
              tag: "获奖 AI 核心系统",
              desc: "集成人脸特征比对（Face Matching）与活体防伪检测，实现员工在移动端与 Web 终端的智能刷脸考勤与人资管理。",
              tech: ["Angular", ".NET Core", "Python", "C++", "SQL Server", "Face Recognition"],
              highlights: [
                "荣获电力大学 2022 年“创新挑战赛” (Innovation Challenge) 季军（三等奖）。",
                "算法优化使得端到端人脸验证延迟稳定控制在 0.5 秒以内。"
              ]
            },
            {
              name: "智能 OCR 文档数字化与检索系统",
              category: "ai",
              tag: "OCR 与文档数字化",
              desc: "基于 OCR 技术自动将纸质扫描件和 PDF 转换为可编辑、可全文检索的结构化文本。",
              tech: ["Python Flask", "Tesseract OCR 5", "OpenCV", "JavaScript"],
              highlights: [
                "自研自适应图像去噪、倾斜校正算法，显著提升复杂纸张扫描识别准确率。"
              ]
            }
          ]
        }
      ]
    },
    skills: {
      title: "工程技术与专业专长",
      groups: [
        {
          name: "软件工程与系统架构 (Software Engineering)",
          items: ["System Architecture", "Clean Code & Design Patterns", "RESTful APIs", "OOP & Data Structures", "High Concurrency & Caching", "Database Optimization & Indexing", "Application Security (OWASP)", "Microservices Architecture"]
        },
        {
          name: "人工智能与计算机视觉 (AI & CV)",
          items: ["YOLOv11", "PyTorch", "OpenCV", "Open3D", "TensorFlow", "Keras", "Scikit-Learn", "Tesseract OCR", "大语言模型 (Llama, DeepSeek)", "AI Agent (Hermes, n8n)"]
        },
        {
          name: "Web 全栈开发 (Full Stack)",
          items: ["JavaScript / TypeScript", "Vue.js (Vue 3)", "ReactJS", "Next.js", "PHP (Laravel)", "Python (Django, Flask)", "HTML5 / CSS3", "Tailwind CSS", "Bootstrap"]
        },
        {
          name: "移动端开发 (Mobile)",
          items: ["Flutter (Dart)", "React Native", "跨平台系统架构", "离线优先与数据同步"]
        },
        {
          name: "数据库与缓存技术",
          items: ["PostgreSQL", "MySQL", "MSSQL", "SQLite", "MongoDB", "Firebase (Firestore/RTDB)", "Redis"]
        },
        {
          name: "DevOps、云平台与第三方集成",
          items: ["Docker", "AWS (EC2, S3, Amplify)", "Google Cloud Platform", "Cloudflare", "Git / GitHub Actions", "Meta Ads API", "Google Ads API", "Salesforce API"]
        },
        {
          name: "语言能力与工程思维",
          items: ["越南语 (母语)", "英语 (B1 级 - 熟练阅读英文技术文档及技术沟通)", "批判性思维", "复杂系统问题分析", "架构设计思维"]
        }
      ]
    },
    education: {
      title: "教育背景与工学学士资质",
      school: "越南电力大学 (Electric Power University - EPU)",
      degree: "信息技术工学学士 (The Degree of Engineer in IT)",
      major: "专业方向：人工智能与计算机视觉 (AI & Computer Vision)",
      period: "2019年08月 - 2024年04月",
      grade: "毕业荣誉：优秀毕业生 (Summa Cum Laude / Xuất Sắc)",
      gpa: "累计平均绩点 (GPA)：3.61 / 4.0",
      notes: "以拔尖成绩毕业，掌握扎实的数据结构、算法、计算机组成原理、操作系统与计算机视觉理论。",
      documents: [
        {
          id: "diploma",
          title: "工学学士学位证书 (优秀毕业生)",
          subtitle: "越南电力大学 (2024年4月9日 编号 E3E 0006288)",
          badge: "优秀工学学士学位",
          src: "11515d67388696d8cf97.jpg",
          desc: "越南电力大学校长颁发的正式信息技术工学学士学位证书，评定等级：优秀 (Xuất Sắc)。"
        },
        {
          id: "transcript-p1",
          title: "官方成绩单 / 文凭附录 (第 1 页 / 共 2 页)",
          subtitle: "第 1 - 45 门课程：核心专业与基础学科",
          badge: "成绩单 第 1 页",
          src: "0af520d6ae30006e5921.jpg",
          desc: "文凭附录成绩单第 1 页：高级 C 语言编程 (10.0)、高级数据结构与算法 (9.0)、机器学习 (9.3)、图像处理 (9.7)、深度学习 (9.2) 等核心课程均获 A/A+。"
        },
        {
          id: "transcript-p2",
          title: "官方成绩单 / 毕业论文与公章 (第 2 页 / 共 2 页)",
          subtitle: "第 46 - 57 门课程：CUDA 并行、毕业论文、总评 GPA 3.61 及校印",
          badge: "成绩单 第 2 页 (红章)",
          src: "3acf5fe8d10e7f50261f.jpg",
          desc: "文凭附录成绩单第 2 页：CUDA 并行计算 (9.0)、毕业论文 (9.0)、大数据分析，修满 150 学分，累计平均绩点 GPA 3.61/4.0，附电力大学教务处公章与签名认证。"
        }
      ]
    },
    awards: {
      title: "荣誉与竞赛奖项",
      items: [
        {
          year: "2022年06月",
          title: "三等奖 (团队) - 2022 创新挑战赛 (Innovation Challenge)",
          issuer: "越南电力大学信息技术学院",
          desc: "参赛项目《集成人脸识别的人力资源管理与考勤系统》凭借工业落地价值荣获三等奖。"
        },
        {
          year: "2024年04月",
          title: "工学学士优秀毕业生荣誉 (GPA 3.61/4.0)",
          issuer: "越南电力大学",
          desc: "凭借拔尖的学业成绩与科研创新成果荣获全院前列优秀毕业生嘉奖。"
        }
      ]
    },
    interests: {
      title: "业余兴趣",
      items: [
        { icon: "💻", text: "钻研分布式系统架构设计、开源软件与 AI Agents" },
        { icon: "🏃", text: "长跑运动 (锻炼身体耐力、韧性与专注力)" },
        { icon: "🎮", text: "策略逻辑类游戏" }
      ]
    },
    footer: {
      copyright: "© 2026 黎光创 (Le Quang Sang). 保留所有权利。",
      printNote: "软件工程师专业简历 - 针对高清屏幕展示及国际标准 A4 打印与 PDF 导出优化。"
    }
  }
};
