export const COMPANY_SIZE_OPTIONS = [
  { value: '', label: 'Company size' },
  { value: '1', label: '1 to 5 members' },
  { value: '2', label: '5 to 20 members' },
  { value: '3', label: 'More than 20 members' },
] as const;

export const NAV_LINKS = [
  { href: '/updates', label: 'Updates' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact Us' },
] as const;

export const SOCIAL_LINKS = [
  { href: 'https://twitter.com/globaltradingacademy', label: '@GTAcademy' },
  { href: 'https://linkedin.com/company/global-trading-academy', label: 'LinkedIn' },
] as const;