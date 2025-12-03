export type ThemeMode = 'dark' | 'light';

export type ThemeConfig = {
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

export const themeConfig: Record<ThemeMode, ThemeConfig> = {
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


