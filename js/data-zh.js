/**
 * Resume Data Store - Chinese (中文)
 * Candidate: 黎光尚 (Le Quang Sang) - 软件工程师 (全栈架构、系统工程与应用 AI)
 */
var cvData = window.cvData = window.cvData || {};

cvData.zh = {
  meta: {
    langName: "中文",
    badge: "随时可沟通软件工程师职位机会",
    updatedDate: "2026年09月更新",
    printBtn: "下载 PDF / 打印",
    themeBtnLight: "明亮模式",
    themeBtnDark: "暗黑模式",
    copiedToast: "已成功复制到剪贴板！",
    viewDocBtn: "查看原始证书与成绩单",
    docModalTitle: "工学学士学位证书与成绩单",
    closeModal: "关闭",
    openOriginal: "查看原图",
    verifiedBadge: "官方认证学历资质",
    contribLabel: "核心职责与贡献"
  },
  personal: {
    name: "黎光尚",
    subName: "Le Quang Sang",
    title: "软件工程师 (Software Engineer)",
    tagline: "深耕分布式系统架构、Web 全栈研发、跨平台移动端及工业级端侧 AI 落地 (Applied AI)",
    avatar: "eaa169ef5155dd0b8444.jpg",
    dob: "2001年03月10日",
    phone: "+84 329 004 844",
    phoneDisplay: "(+84) 329 004 844",
    email: "quangsangle.hn@gmail.com",
    website: "https://sangle.online",
    websiteDisplay: "sangle.online",
    location: "越南 宁平省 金榜",
    github: "https://github.com/lequangsang01",
    linkedin: "https://linkedin.com"
  },
  metrics: [
    { value: "4+", label: "年软件研发经验", desc: "涵盖架构、Web 全栈与计算机视觉" },
    { value: "10+", label: "成功交付系统", desc: "企业 ERP、3D 视觉、CRM、金融 SaaS" },
    { value: "3.61", label: "工学学士绩点 (GPA)", desc: "越南电力大学优秀工学学士毕业生" },
    { value: "100%", label: "工程交付承诺", desc: "高并发、严守 AppSec 安全与 Clean Code" }
  ],
  summary: {
    title: "工程师简介与技术总览",
    content: "毕业于越南电力大学（Electric Power University）信息技术专业，荣获工学学士优秀毕业生荣誉（GPA 3.61/4.0），具备扎实的计算机科学理论素养与深厚的工程实操交付能力。在分布式高扩展架构、工业企业级 ERP 全栈闭环、高性能金融系统以及前沿计算机视觉（基于 YOLOv11 与 Open3D 的 3D 托盘视觉估算、人脸识别系统）方面积累了丰厚的工业实战经验。坚守“Code runs is not enough”的工程理念，高度注重系统安全性（AppSec/OWASP）、运行性能极致调优以及代码的高内聚、可读与长期可维护性。"
  },
  navTabs: {
    all: "全部核心项目",
    fullstack: "系统与全栈开发",
    ai: "AI 与计算机视觉",
    mobile: "移动端研发"
  },
  experience: {
    title: "软件工程项目与履历",
    items: [
      {
        company: "Zotek8",
        period: "2023年08月 - 至今",
        role: "软件工程师 (Full Stack & AI)",
        location: "越南河内",
        overview: "担任核心软件工程师，负责大型企业级软件系统的架构设计、数据库优化、全栈实现与工业级 AI 模块的工程落地。",
        projects: [
          {
            name: "Meeting Transcription Nagase (智能会议语音转录与 CRM 深度同步)",
            category: "mobile",
            tag: "移动端、云原生与 AI 系统",
            desc: "跨平台移动端会议录音与 AI 自动语音转文字（Speech-to-Text）系统，智能提炼会议纪要，并与 Salesforce CRM 深度双向打通。",
            tech: ["Flutter (Dart)", "AWS Lambda", "AWS EC2", "AWS Cognito", "OpenAI Whisper", "AWS Amplify", "Salesforce API", "SQLite"],
            contributions: [
              "研发 Flutter 移动端：实现录音交互、音频流处理与 SQLite 离线缓存。",
              "构建 AWS Lambda 无服务器后端，处理音频事件并对接 Salesforce API。",
              "集成 AWS Cognito，落地企业级身份认证、数据安全与权限控制。",
              "在 AWS EC2 部署调优 OpenAI Whisper 模型，达成低延迟自动语音转录。"
            ],
            highlights: [
              "全面实现会议纪要生成与 Salesforce CRM 数据的 100% 自动化闭环同步。",
              "离线优先架构保障弱网环境下无损录音与静默恢复同步。"
            ]
          },
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
            name: "InvoiceShelf (开源企业发票与现金流管理平台)",
            category: "fullstack",
            tag: "金融科技与开源",
            desc: "面向中小企业的高性能发票与账目管理系统：自动化开票、逾期催收、合规电子凭证导出、EMVCo 动态银行聚合支付二维码与定期容灾备份。",
            tech: ["Laravel (PHP)", "Vite", "Tailwind CSS", "MySQL", "REST API", "DomPDF", "Laravel Queue", "Docker"],
            highlights: [
              "通过异步任务队列自动化日常账单推送与逾期风控预警。",
              "集成毫秒级 PDF 批量渲染与符合 EMVCo 国际标准的动态银行转账二维码。"
            ]
          },
          {
            name: "Adstart (多渠道广告聚合运营控制台)",
            category: "fullstack",
            tag: "数字营销中台",
            desc: "深度整合 Meta 与 Google Ads 投放生态的一体化中台：链接投资回报率（ROI）追踪、广告违规违禁词实时风控拦截（NG Keywords）及财务对账。",
            tech: ["Laravel", "Facebook Marketing API", "Google Ads API", "MySQL", "Redis", "Docker", "Bootstrap"],
            highlights: [
              "深度双向对接 Facebook Marketing API 与 Google Ads API，实现投放数据毫秒级同步。",
              "自研违禁词过滤引擎，有效拦截违规文案，防止客户投放账户被封禁风险。"
            ]
          },
          {
            name: "Kurua & Will Watch (康复医疗与生态地理地图)",
            category: "fullstack",
            tag: "医疗健康与 GIS-AI",
            desc: "Kurua：诊所骨科康复追踪平台；Will Watch：结合社区协作与 AI 物种识别的野生动物地理信息地图平台。",
            tech: ["Vue.js", "React Native", "Next.js", "Flutter", "Laravel", "Firebase", "Docker"],
            highlights: [
              "保证跨平台一致性体验（管理后台 Web 与移动端 App 无缝协作）。",
              "严格践行医疗健康数据隐私标准，基于 Firebase 达成高并发实时同步。"
            ]
          }
        ]
      },
      {
        company: "Torus Engineering",
        period: "2022年05月 - 2022年05月",
        role: "前端与工具链研发工程师 (Tooling Engineer)",
        location: "越南河内",
        overview: "研发计算机视觉研究专用的高精度交互式数据标注工具，并将 AI 核心能力封装为可嵌入式 B2B 模块。",
        projects: [
          {
            name: "Skin Annotation Tool (高精度皮肤病理标注系统)",
            category: "ai",
            tag: "AI 数据基础设施",
            desc: "专为皮肤医学影像研发的多边形高精度交互标注与病损评分工具，生成标准化 Ground Truth 数据集直接接入深度学习训练流水线。",
            tech: ["Python Flask", "JavaScript (ES6+)", "Bootstrap", "Canvas API"],
            highlights: [
              "基于原生 Canvas API 打造低延迟、亚像素级平滑交互绘图与测量引擎。",
              "设计标准化 JSON 标注序列化格式，直通算法团队的模型训练流水线。"
            ]
          },
          {
            name: "Belle Widget (可嵌入式 AI 组件 SDK)",
            category: "fullstack",
            tag: "B2B 嵌入式 SDK",
            desc: "将自研 AI 算法打包为即插即用的现代化独立 Web/Mobile 组件，为企业级 B2B 客户提供极简的一行脚本接入方案。",
            tech: ["React", "React Native", "JavaScript", "Python", ".NET API"],
            highlights: [
              "沙箱化组件设计，彻底避免接入客户第三方系统时的 CSS 样式冲突与全局 JS 命名空间污染。"
            ]
          }
        ]
      },
      {
        company: "越南电力大学信息技术学院研发实验室",
        period: "2020年 - 2024年",
        role: "软件研发工程师 (Software R&D Engineer)",
        location: "越南河内",
        overview: "主导并深度参与学院重点科研项目，推动深度学习与计算机视觉前沿技术向工业实际应用场景转化落地。",
        projects: [
          {
            name: "人脸识别智能考勤与企业人力资源管理系统",
            category: "ai",
            tag: "获奖 AI 核心成果",
            desc: "集成自研深度人脸特征比对算法的综合考勤平台，支持 Web 端及移动端高精度无感考勤与考勤异常分析。",
            tech: ["Angular", ".NET Core", "Python", "C++", "SQL Server", "Face Recognition"],
            highlights: [
              "荣获越南电力大学 2022 年度“创新挑战赛”团队三等奖 (3rd Prize)。",
              "突破并发瓶颈，在保证高准确率的同时将特征比对耗时极致压缩至 500 毫秒以内。"
            ]
          },
          {
            name: "OCR 文档智能识别转换与影像检索平台",
            category: "ai",
            tag: "OCR 与文本智能化",
            desc: "针对扫描纸质文件与 PDF 的高性能文字检测与抽取系统，赋能传统档案智能化电子归档与全文精准搜索。",
            tech: ["Python Flask", "Tesseract OCR 5", "OpenCV", "JavaScript"],
            highlights: [
              "自研自适应图像去噪、倾斜校正算法，显著提升复杂纸张扫描识别准确率。"
            ]
          }
        ]
      },
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
        items: ["Docker", "AWS (EC2, S3, Lambda, DynamoDB, Cognito, Amplify)", "Google Cloud Platform", "Cloudflare", "Git / GitHub Actions", "Meta Ads API", "Google Ads API", "Salesforce API"]
      },
      {
        name: "语言能力与工程思维",
        items: ["团队管理与项目规划 (带领 5 人研发团队)", "越南语 (母语)", "英语 (B1 级 - 熟练阅读英文技术文档及技术沟通)", "批判性思维", "复杂系统问题分析", "架构设计思维"]
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
        desc: ""
      },
      {
        id: "transcript-p1",
        title: "官方成绩单 / 文凭附录 (第 1 页 / 共 2 页)",
        subtitle: "第 1 - 45 门课程：核心专业与基础学科",
        badge: "成绩单 第 1 页",
        src: "0af520d6ae30006e5921.jpg",
        desc: ""
      },
      {
        id: "transcript-p2",
        title: "官方成绩单 / 毕业论文与公章 (第 2 页 / 共 2 页)",
        subtitle: "第 46 - 57 门课程：CUDA 并行、毕业论文、总评 GPA 3.61 及校印",
        badge: "成绩单 第 2 页 (红章)",
        src: "3acf5fe8d10e7f50261f.jpg",
        desc: ""
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
    copyright: "© 2026 黎光尚 (Le Quang Sang). 保留所有权利。",
    printNote: ""
  }
};
