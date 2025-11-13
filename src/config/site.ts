export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

const publicSiteUrl = import.meta.env.PUBLIC_SITE_URL ?? 'https://automationarchitech.com';

export const siteConfig = {
  title: 'Automation Architech',
  description:
    'Automation Architech unifies AI application delivery, resilient data pipelines, and workflow automation into a single Astro experience.',
  url: publicSiteUrl,
  email: 'hello@automationarchitech.com',
  navigation: <NavLink[]>[
    { label: 'Home', href: '/#home' },
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact', href: '/#contact' }
  ],
  services: [
    {
      slug: 'llm-applications',
      name: 'LLM Applications',
      headline: 'AI copilots that understand your workflows.',
      description:
        'Custom ChatGPT-style copilots, knowledge assistants, and workflow copilots grounded in your data.',
      icon: 'brain',
      link: '/services/llm-applications'
    },
    {
      slug: 'data-pipelines',
      name: 'Data Pipelines & Scrapers',
      headline: 'Operational data streams engineered for reliability.',
      description:
        'Streaming + batch ETL, scraping frameworks, and validation layers that keep analytics trustworthy.',
      icon: 'database',
      link: '/services/data-pipelines'
    },
    {
      slug: 'system-workflows',
      name: 'System Workflows',
      headline: 'APIs and automations that tie platforms together.',
      description:
        'Zapier/n8n orchestration, custom webhooks, and event-driven middleware for cross-product flows.',
      icon: 'workflow',
      link: '/services/system-workflows'
    }
  ]
};
