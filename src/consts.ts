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

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/fso-training', label: 'Training' },
  { href: '/nispom-compliance', label: 'Compliance' },
  { href: '/security-clearances', label: 'Clearances' },
  { href: '/cmmc-for-fsos', label: 'CMMC' },
  { href: '/templates', label: 'Templates' },
  { href: '/about', label: 'About' },
];
