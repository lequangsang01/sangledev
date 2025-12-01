import Script from "next/script";

const experiences = [
  {
    company: "Zotek8",
    period: "08/2023 – 01/2025",
    role: "Full Stack Developer",
    summary:
      "Xây dựng các sản phẩm SaaS trong y tế, quản trị mạng xã hội và bản đồ dữ liệu cộng đồng.",
    projects: [
      {
        name: "Kurua",
        description:
          "Web App cho bệnh viện/phòng khám quản lý sức khỏe xương khớp, theo dõi hồ sơ bệnh nhân.",
        stack: "Laravel · Vue.js · React Native",
      },
      {
        name: "SNS Management",
        description:
          "Hệ thống lên lịch nội dung, quảng cáo và báo cáo dữ liệu cho Facebook, Instagram, X, TikTok.",
        stack: "Laravel · Vue.js · MySQL",
      },
      {
        name: "Will Watch",
        description:
          "Bản đồ động vật dựa trên dữ liệu đóng góp thời gian thực từ cộng đồng.",
        stack: "Flutter · Next.js · Firebase",
      },
    ],
  },
  {
    company: "Torus Engineering",
    period: "05/2022 – 05/2023",
    role: "Front End Engineer",
    summary:
      "Thiết kế công cụ Annotation và gói widget AI nhúng cho khách hàng B2B.",
    projects: [
      {
        name: "Annotation Tool",
        description:
          "Công cụ gán nhãn ảnh soi da phục vụ training AI trong lĩnh vực làm đẹp.",
        stack: "Python Flask · JavaScript · Bootstrap",
      },
      {
        name: "Belle Widget",
        description:
          "Đóng gói demo AI thành component có thể embed vào web/mobile, hỗ trợ tuỳ biến UI theo brand.",
        stack: "Python · .NET · React · React Native",
      },
    ],
  },
  {
    company: "Khoa CNTT – Đại học Điện Lực",
    period: "2020 – 2024",
    role: "Research & Development",
    summary:
      "Tham gia các đề tài AI/Computer Vision: chấm công khuôn mặt, OCR và tìm kiếm hình ảnh.",
    projects: [
      {
        name: "HR Face Attendance",
        description:
          "Hệ thống quản lý nhân sự kết hợp AI Face Matching và dashboard quản trị.",
        stack: "Angular · .NET Core · Python · SQL Server",
      },
      {
        name: "OCR & Image Search",
        description:
          "Website chuyển đổi PDF/ảnh sang text và tìm kiếm hình ảnh đa nền tảng.",
        stack: "Python Flask · Tesseract OCR 5",
      },
    ],
  },
];

const skillGroups = [
  {
    title: "Web Frontend",
    items: [
      "JavaScript",
      "Vue.js",
      "React",
      "Next.js",
      "Bootstrap",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend & API",
    items: ["PHP Laravel", "Next.js", "Python", ".NET Core", "Node.js"],
  },
  {
    title: "Mobile & Cross-platform",
    items: ["React Native", "Flutter"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "Firebase", "MongoDB"],
  },
  {
    title: "AI & Data",
    items: [
      "Python",
      "YOLO",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Tesseract OCR",
      "Sklearn",
    ],
  },
  {
    title: "DevOps & Cloud",
    items: ["AWS EC2/S3", "Google Cloud Console", "Docker", "GitHub Actions"],
  },
];

const achievements = [
  {
    title: "Giải Ba Thử Thách Đổi Mới 2022",
    description:
      "Hệ thống quản lý nhân sự tích hợp chấm công khuôn mặt – Khoa CNTT Đại học Điện Lực.",
  },
  {
    title: "GPA 3.61 / 8.42",
    description: "Tốt nghiệp Xuất Sắc ngành CNTT, chuyên ngành AI & Computer Vision.",
  },
  {
    title: "Tiếng Anh B1",
    description: "Đọc hiểu tài liệu tốt, giao tiếp kỹ thuật ở mức chuyên môn cơ bản.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lê Quang Sang",
  alternateName: ["SangLe", "SangLee", "LE QUANG SANG"],
  jobTitle: "Full Stack & AI Engineer",
  description:
    "Kĩ sư lập trình Full Stack và AI tại Hà Nội, từng làm việc tại Zotek8 và Torus Engineering.",
  email: "mailto:quangsangle.hn@gmail.com",
  url: "https://sangle.dev",
  sameAs: ["https://github.com/lequangsang01"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bắc Từ Liêm",
    addressRegion: "Hà Nội",
    addressCountry: "VN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Đại học Điện Lực",
  },
  knowsAbout: [
    "Full Stack Development",
    "AI & Computer Vision",
    "Vue.js",
    "React",
    "Laravel",
    "Next.js",
    "React Native",
    "Flutter",
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: "Zotek8",
      sameAs: "https://zotek8.com",
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 text-slate-100">
      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 md:py-24">
        <header className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-emerald-900/30 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-300">
            SangLe • SangLee • LE QUANG SANG
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Kĩ sư lập trình Full Stack & AI tại Hà Nội
          </h1>
          <p className="mt-4 text-lg text-slate-200">
            Tôi là Lê Quang Sang (SangLe/SangLee), 24 tuổi, đam mê xây dựng sản
            phẩm Web/App, tích hợp AI và tối ưu trải nghiệm người dùng. Mục tiêu
            của tôi là đồng hành cùng doanh nghiệp trong các dự án đổi mới số và
            sản phẩm quốc tế.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="mailto:quangsangle.hn@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-emerald-300"
            >
              Đặt lịch trao đổi
            </a>
            <a
              href="https://github.com/lequangsang01"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:text-emerald-200"
            >
              GitHub Portfolio
            </a>
          </div>
          <dl className="mt-8 grid gap-6 text-sm text-slate-300 md:grid-cols-3">
            <div>
              <dt className="font-semibold text-white">Chuyên môn</dt>
              <dd>Full Stack · AI · Mobile</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Địa điểm</dt>
              <dd>Quận Bắc Từ Liêm, Hà Nội</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Ngôn ngữ</dt>
              <dd>Tiếng Việt · Tiếng Anh (B1)</dd>
            </div>
          </dl>
        </header>

        <section
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          aria-labelledby="experience-heading"
        >
          <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Kinh nghiệm nổi bật
            </p>
            <h2 id="experience-heading" className="text-3xl font-semibold text-white">
              4+ năm xây dựng sản phẩm cho y tế, mạng xã hội & AI
            </h2>
            <p className="text-slate-300">
              Từ Full Stack đến AI/Computer Vision, tôi ưu tiên hiệu quả, bảo mật và khả năng
              mở rộng, phối hợp chặt chẽ với đội ngũ sản phẩm/marketing.
            </p>
          </div>
          <div className="mt-6 space-y-8">
            {experiences.map((experience) => (
              <article
                key={experience.company}
                className="rounded-2xl bg-black/20 p-6 ring-1 ring-white/5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm tracking-widest text-emerald-300">
                      {experience.period}
                    </p>
                    <h3 className="text-2xl font-semibold text-white">
                      {experience.role} · {experience.company}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 text-slate-200">{experience.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {experience.projects.map((project) => (
                    <li
                      key={project.name}
                      className="rounded-xl border border-white/10 p-4"
                    >
                      <p className="font-semibold text-white">
                        {project.name}
                      </p>
                      <p>{project.description}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.3em] text-emerald-300">
                        {project.stack}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          aria-labelledby="skills-heading"
        >
          <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Năng lực kỹ thuật
            </p>
            <h2 id="skills-heading" className="text-3xl font-semibold text-white">
              Stack linh hoạt cho Web, Mobile, AI & DevOps
            </h2>
            <p className="text-slate-300">
              Ưu tiên clean code, quy trình CI/CD và thử nghiệm thực tiễn để đảm bảo sản phẩm
              có thể mở rộng và dễ bảo trì.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-white/10 bg-black/10 p-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
                  {group.title}
                </p>
                <p className="mt-3 text-lg text-white">
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          aria-labelledby="education-heading"
        >
          <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Học vấn & thành tựu
            </p>
            <h2 id="education-heading" className="text-3xl font-semibold text-white">
              Kĩ sư CNTT – AI & Computer Vision
            </h2>
            <p className="text-slate-300">
              Đại học Điện Lực (2019 – 2024), GPA 3.61 · Xuất Sắc. Nghiên cứu AI, tham gia
              các dự án OCR, tìm kiếm hình ảnh và sản phẩm cộng đồng.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="rounded-2xl border border-white/10 bg-black/10 p-5"
              >
                <p className="text-base font-semibold text-white">
                  {achievement.title}
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-slate-100">
            <h3 className="text-2xl font-semibold text-white">
              Sẵn sàng đồng hành cùng bạn?
            </h3>
            <p className="mt-2 text-slate-200">
              Tôi yêu thích đọc sách (1 quyển/tháng) và chạy bộ 3 buổi mỗi tuần để giữ sự
              tập trung. Luôn sẵn sàng học hỏi, cập nhật công nghệ và dẫn dắt giải pháp mới.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:quangsangle.hn@gmail.com"
                className="rounded-full bg-white px-5 py-2 font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                quangsangle.hn@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Script
        id="sangle-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
