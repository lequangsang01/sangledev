'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { createTranslator } from 'next-intl';

import enMessages from '@/i18n/messages/en.json';
import viMessages from '@/i18n/messages/vi.json';

type Language = 'vi' | 'en';
type ThemeMode = 'dark' | 'light';

type LocaleMessages = typeof viMessages;
type Experience = LocaleMessages['experiences'][number];
type SkillGroup = LocaleMessages['skills']['groups'][number];
type Achievement = LocaleMessages['education']['achievements'][number];

type ThemeConfig = {
  gradient: string;
  heroCard: string;
  sectionBorder: string;
  sectionBg: string;
  subtleText: string;
  accentText: string;
  articleBg: string;
  miniCardBorder: string;
  miniCardBg: string;
  callout: string;
  controlBorder: string;
  controlBg: string;
  controlInactive: string;
  controlActive: string;
};

const locales: Record<Language, LocaleMessages> = {
  vi: viMessages,
  en: enMessages,
};

const languageButtons: { id: Language; icon: string }[] = [
  { id: 'vi', icon: '🇻🇳' },
  { id: 'en', icon: '🇺🇸' },
];

const themeConfig: Record<ThemeMode, ThemeConfig> = {
  dark: {
    gradient: 'from-slate-950 via-slate-900 to-emerald-900 text-slate-100',
    heroCard: 'border-white/10 bg-white/5 shadow-emerald-900/30',
    sectionBorder: 'border-white/10',
    sectionBg: 'bg-white/[0.03]',
    subtleText: 'text-slate-300',
    accentText: 'text-emerald-300',
    articleBg: 'bg-black/20 ring-white/5',
    miniCardBorder: 'border-white/10',
    miniCardBg: 'bg-black/10',
    callout: 'border-emerald-400/30 bg-emerald-400/10 text-slate-100',
    controlBorder: 'border-white/20',
    controlBg: 'bg-white/5',
    controlInactive: 'text-slate-300',
    controlActive: 'bg-emerald-400 text-slate-900',
  },
  light: {
    gradient: 'from-emerald-50 via-white to-amber-100 text-slate-900',
    heroCard: 'border-slate-200 bg-white shadow-emerald-200/40',
    sectionBorder: 'border-slate-200',
    sectionBg: 'bg-white/80',
    subtleText: 'text-slate-600',
    accentText: 'text-emerald-700',
    articleBg: 'bg-white ring-emerald-50',
    miniCardBorder: 'border-emerald-200',
    miniCardBg: 'bg-emerald-50/70',
    callout: 'border-emerald-500/30 bg-emerald-50 text-slate-900',
    controlBorder: 'border-slate-200',
    controlBg: 'bg-white',
    controlInactive: 'text-slate-500',
    controlActive: 'bg-emerald-500 text-white',
  },
};

// Function to detect if user is in Vietnam based on timezone
function detectLanguageFromTimezone(): Language {
  if (typeof window === 'undefined') {
    return 'vi'; // Default for SSR
  }
  
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // Vietnam timezones
    const vietnamTimezones = ['Asia/Ho_Chi_Minh', 'Asia/Hanoi'];
    
    if (vietnamTimezones.includes(timezone)) {
      return 'vi';
    }
    
    // Also check browser language as fallback
    const browserLang = navigator.language || navigator.languages?.[0] || '';
    if (browserLang.startsWith('vi')) {
      return 'vi';
    }
    
    return 'en';
  } catch {
    return 'en'; // Default to English if detection fails
  }
}

export default function Home() {
  const [language, setLanguage] = useState<Language>(() => detectLanguageFromTimezone());
  const [theme, setTheme] = useState<ThemeMode>('dark');

  const localeData = locales[language];
  const { heroStats, experiences, skills, education } = localeData;

  const t = useMemo(
    () =>
      createTranslator({
        locale: language,
        messages: localeData.ui,
      }),
    [language, localeData.ui]
  );

  const themeClasses = themeConfig[theme];
  const portraitSrc = theme === 'dark' ? '/sangle-dark.jpg' : '/sangle-light.jpg';

  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Lê Quang Sang',
      alternateName: ['SangLeDEV', 'SangLeeDEV', 'LE QUANG SANG'],
      jobTitle: 'Full Stack & AI Engineer',
      description: t('schemaDescription'),
      email: 'mailto:quangsangle.hn@gmail.com',
      url: 'https://sangle.dev',
      sameAs: ['https://github.com/lequangsang01'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bắc Từ Liêm',
        addressRegion: 'Hà Nội',
        addressCountry: 'VN',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Đại học Điện Lực',
      },
      knowsAbout: [
        'Full Stack Development',
        'AI & Computer Vision',
        'Vue.js',
        'React',
        'Laravel',
        'Next.js',
        'React Native',
        'Flutter',
      ],
      worksFor: [
        {
          '@type': 'Organization',
          name: 'Zotek8',
        },
      ],
    }),
    [t]
  );

  return (
    <div className={`min-h-screen bg-gradient-to-br ${themeClasses.gradient}`}>
      <main className="relative mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 md:py-24">
        <div className="absolute right-6 top-6 flex items-center gap-2 md:right-8 md:top-8">
          <div
            className={`inline-flex items-center rounded-full border ${themeClasses.controlBorder} ${themeClasses.controlBg} px-1 py-1`}
          >
            {languageButtons.map((option) => {
              const active = option.id === language;
              const languageKey = `languageNames.${option.id}` as Parameters<typeof t>[0];
              const languageLabel = t(languageKey);
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setLanguage(option.id)}
                  aria-pressed={active}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-base transition ${
                    active ? themeClasses.controlActive : themeClasses.controlInactive
                  }`}
                  aria-label={t('languageToggleAria', {
                    language: languageLabel,
                  })}
                >
                  <span className="text-lg" role="img" aria-hidden>
                    {option.icon}
                  </span>
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`flex h-9 w-9 items-center justify-center rounded-full border ${themeClasses.controlBorder} ${themeClasses.controlBg} text-base transition hover:opacity-80`}
            aria-label={t('themeToggleAria')}
          >
            <span role="img" aria-hidden>
              {theme === 'dark' ? '🌞' : '🌙'}
            </span>
          </button>
        </div>

        <header className={`rounded-3xl border ${themeClasses.heroCard} p-8 backdrop-blur`}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="flex-1">
              <p className={`text-xs uppercase tracking-[0.4em] ${themeClasses.accentText}`}>
                {t('heroTagline')}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                {t('heroTitle')}
              </h1>
              <p className={`mt-4 text-lg ${themeClasses.subtleText}`}>
                {t('heroDescription')}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="mailto:quangsangle.hn@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-emerald-300"
                >
                  {t('primaryCta')}
          </a>
          <a
                  href="https://www.linkedin.com/in/sang-l%C3%AA-7a18a01a1/"
            target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-wide transition ${themeClasses.sectionBorder} ${
                    theme === 'dark'
                      ? 'text-white hover:text-emerald-200'
                      : 'text-slate-900 hover:text-emerald-700'
                  }`}
                >
                  {t('linkedinCta')}
                </a>
          <a
                  href="https://github.com/lequangsang01"
            target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-wide transition ${themeClasses.sectionBorder} ${
                    theme === 'dark'
                      ? 'text-white hover:text-emerald-200'
                      : 'text-slate-900 hover:text-emerald-700'
                  }`}
                >
                  {t('githubCta')}
                </a>
              </div>
              <dl className="mt-8 grid gap-6 text-sm md:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={`${stat.label}-${stat.value}`}>
                    <dt className="font-semibold">{stat.label}</dt>
                    <dd className={themeClasses.subtleText}>{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <figure className="flex w-full justify-center lg:w-auto">
              <Image
                src={portraitSrc}
                alt={t('heroPortraitAlt')}
                width={360}
                height={420}
                priority
                className="h-auto w-64 rounded-2xl border border-white/10 object-cover shadow-2xl shadow-emerald-900/30 lg:w-72"
              />
            </figure>
          </div>
        </header>

        <SectionShell
          id="experience-heading"
          accentClass={themeClasses.accentText}
          subtleClass={themeClasses.subtleText}
          sectionBorder={themeClasses.sectionBorder}
          sectionBg={themeClasses.sectionBg}
          heading={t('experienceHeading')}
          tagline={t('experienceTagline')}
          intro={t('experienceIntro')}
        >
          <div className="mt-6 space-y-8">
            {experiences.map((experience) => (
              <ExperienceCard
                key={`${experience.company}-${experience.role}`}
                experience={experience}
                accentClass={themeClasses.accentText}
                subtleClass={themeClasses.subtleText}
                articleBg={themeClasses.articleBg}
                miniCardBorder={themeClasses.miniCardBorder}
                miniCardBg={themeClasses.miniCardBg}
              />
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="skills-heading"
          accentClass={themeClasses.accentText}
          subtleClass={themeClasses.subtleText}
          sectionBorder={themeClasses.sectionBorder}
          sectionBg={themeClasses.sectionBg}
          heading={t('skillsHeading')}
          tagline={t('skillsTagline')}
          intro={t('skillsIntro')}
        >
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {skills.groups.map((group) => (
              <SkillCard
                key={group.title}
                group={group}
                accentClass={themeClasses.accentText}
                miniCardBorder={themeClasses.miniCardBorder}
                miniCardBg={themeClasses.miniCardBg}
              />
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="education-heading"
          accentClass={themeClasses.accentText}
          subtleClass={themeClasses.subtleText}
          sectionBorder={themeClasses.sectionBorder}
          sectionBg={themeClasses.sectionBg}
          heading={t('educationHeading')}
          tagline={t('educationTagline')}
          intro={t('educationIntro')}
        >
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {education.achievements.map((achievement) => (
              <AchievementCard
                key={achievement.title}
                achievement={achievement}
                miniCardBorder={themeClasses.miniCardBorder}
                miniCardBg={themeClasses.miniCardBg}
                subtleClass={themeClasses.subtleText}
              />
            ))}
          </div>
          <div className={`mt-8 rounded-2xl border ${themeClasses.callout} p-6`}>
            <h3 className="text-2xl font-semibold">{t('calloutTitle')}</h3>
            <p className="mt-2">{t('calloutDescription')}</p>
            <p className={`mt-2 text-sm ${themeClasses.subtleText}`}>
              {t('calloutInterests')}
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
        </SectionShell>
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

type SectionShellProps = {
  id: string;
  heading: string;
  tagline: string;
  intro: string;
  children: React.ReactNode;
  accentClass: string;
  subtleClass: string;
  sectionBorder: string;
  sectionBg: string;
};

function SectionShell({
  id,
  heading,
  tagline,
  intro,
  children,
  accentClass,
  subtleClass,
  sectionBorder,
  sectionBg,
}: SectionShellProps) {
  return (
    <section
      className={`rounded-3xl border ${sectionBorder} ${sectionBg} p-8`}
      aria-labelledby={id}
    >
      <div className={`flex flex-col gap-2 border-b pb-6 ${sectionBorder}`}>
        <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${accentClass}`}>
          {tagline}
        </p>
        <h2 id={id} className="text-3xl font-semibold">
          {heading}
        </h2>
        <p className={subtleClass}>{intro}</p>
      </div>
      {children}
    </section>
  );
}

type ExperienceCardProps = {
  experience: Experience;
  accentClass: string;
  subtleClass: string;
  articleBg: string;
  miniCardBorder: string;
  miniCardBg: string;
};

function ExperienceCard({
  experience,
  accentClass,
  subtleClass,
  articleBg,
  miniCardBorder,
  miniCardBg,
}: ExperienceCardProps) {
  return (
    <article className={`rounded-2xl p-6 ring-1 ${articleBg}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className={`text-sm tracking-widest ${accentClass}`}>{experience.period}</p>
          <h3 className="text-2xl font-semibold">
            {experience.role} · {experience.company}
          </h3>
        </div>
      </div>
      <p className={`mt-3 ${subtleClass}`}>{experience.summary}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {experience.projects.map((project) => (
          <li
            key={project.name}
            className={`rounded-xl border ${miniCardBorder} ${miniCardBg} p-4`}
          >
            <p className="font-semibold">{project.name}</p>
            <p className={subtleClass}>{project.description}</p>
            <p className={`mt-1 text-xs uppercase tracking-[0.3em] ${accentClass}`}>
              {project.stack}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}

type SkillCardProps = {
  group: SkillGroup;
  accentClass: string;
  miniCardBorder: string;
  miniCardBg: string;
};

function SkillCard({ group, accentClass, miniCardBorder, miniCardBg }: SkillCardProps) {
  return (
    <div className={`rounded-2xl border ${miniCardBorder} ${miniCardBg} p-5`}>
      <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${accentClass}`}>
        {group.title}
      </p>
      <p className="mt-3 text-lg">{group.items.join(' · ')}</p>
    </div>
  );
}

type AchievementCardProps = {
  achievement: Achievement;
  miniCardBorder: string;
  miniCardBg: string;
  subtleClass: string;
};

function AchievementCard({
  achievement,
  miniCardBorder,
  miniCardBg,
  subtleClass,
}: AchievementCardProps) {
  return (
    <div className={`rounded-2xl border ${miniCardBorder} ${miniCardBg} p-5`}>
      <p className="text-base font-semibold">{achievement.title}</p>
      <p className={`mt-2 text-sm ${subtleClass}`}>{achievement.description}</p>
    </div>
  );
}
