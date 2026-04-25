export const SITE = {
  name: 'FSO Shield',
  shortName: 'FSO Shield',
  description:
    'Templates, checklists, and training that survive DCSA scrutiny. Practical NISPOM compliance resources for Facility Security Officers at cleared defense contractors.',
  url: 'https://fsoshield.com',
  author: 'Jean Baptiste',
  defaultOgImage: '/og-default.png',
  twitterHandle: '',
  locale: 'en_US',
  organization: {
    name: 'FSO Shield',
    logo: '/favicon.svg',
    sameAs: [] as string[],
  },
};

export interface NavLink {
  href: string;
  label: string;
  /** Accent links get the gold-outline treatment (like Free Checklist). */
  accent?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/prepare', label: 'Prepare', accent: true },
  { href: '/fso-training', label: 'Training' },
  { href: '/nispom-compliance', label: 'Compliance' },
  { href: '/security-clearances', label: 'Clearances' },
  { href: '/cmmc-for-fsos', label: 'CMMC' },
  { href: '/templates', label: 'Templates' },
  { href: '/about', label: 'About' },
];
