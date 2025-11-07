const en = {
  language: {
    label: 'English',
    nativeName: 'English',
  },
  layout: {
    skipToMain: 'Skip to main content',
    languageSwitcherLabel: 'Language',
    themeSwitcherToggle: 'Toggle theme',
    themeOptionSystem: 'System',
    themeOptionLight: 'Light',
    themeOptionDark: 'Dark',
    pdfControlsLabel: 'PDF controls',
    headerControlsLabel: 'Header controls',
  },
  actions: {
    exportPdf: 'Export PDF',
    viewPdf: 'View PDF',
    exportComingSoon:
      'PDF export and permanent links are on the roadmap. The controls will activate once the pipeline is connected.',
  },
  cv: {
    metadata: {
      name: 'Nikita Lakoza',
      headline: 'Product-oriented Frontend Engineer',
      detailsLabel: 'Professional details',
      details: [
        {
          label: 'Location',
          value: 'Berlin, Germany',
        },
        {
          label: 'Availability',
          value: 'Open to relocation and remote roles',
        },
      ],
    },
    contact: {
      title: 'Contact',
      items: [
        {
          label: 'Email',
          value: 'hello@nikitalakoza.dev',
          href: 'mailto:hello@nikitalakoza.dev',
          icon: 'alternate_email',
        },
        {
          label: 'Phone',
          value: '+49 000 0000000',
          href: 'tel:+490000000000',
          icon: 'call',
        },
        {
          label: 'Portfolio',
          value: 'nikitalakoza.dev',
          href: 'https://nikitalakoza.dev',
          icon: 'language',
        },
        {
          label: 'LinkedIn',
          value: 'linkedin.com/in/nikitalakoza',
          href: 'https://www.linkedin.com/in/nikitalakoza',
          icon: 'handshake',
        },
      ],
    },
    summary: {
      title: 'Summary',
      description:
        'Frontend engineer focused on resilient design systems and measurable product outcomes. Builds adaptable CV foundations that scale across teams, languages, and delivery channels.',
    },
    experience: {
      title: 'Experience',
      items: [
        {
          company: 'CV Base Platform',
          role: 'Lead Frontend Engineer',
          period: '2023 — Present',
          location: 'Remote',
          description:
            'Leading the creation of a modular CV ecosystem with reusable building blocks and high accessibility standards.',
          achievements: [
            'Introduced a localisation pipeline enabling multilingual CVs within minutes.',
            'Implemented a semantic layout library optimised for PDF export and responsive rendering.',
            'Shipped a theming system with automatic dark/light support and contrast guardrails.',
          ],
        },
        {
          company: 'Product Studio',
          role: 'Senior Frontend Engineer',
          period: '2020 — 2023',
          location: 'Berlin, Germany',
          description:
            'Built immersive product experiences across growth, onboarding, and analytics verticals.',
          achievements: [
            'Scaled a component library that reduced time-to-market for new verticals by 35%.',
            'Aligned cross-functional squads on measurable accessibility targets.',
          ],
        },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          institution: 'ITMO University',
          degree: 'B.Sc. in Computer Science',
          period: '2016 — 2020',
          location: 'Saint Petersburg, Russia',
        },
      ],
    },
    skills: {
      title: 'Skills',
      groups: [
        {
          title: 'Technical',
          items: [
            'React & TypeScript architecture',
            'Design systems & accessibility',
            'Performance profiling',
            'Automated testing pipelines',
          ],
        },
        {
          title: 'Human',
          items: ['Product discovery facilitation', 'Mentoring & coaching', 'Stakeholder alignment'],
        },
      ],
    },
    footer: {
      note: 'This template is ready for localisation, PDF export integration, and future specialisations.',
      pdfLink: {
        label: 'Download English PDF',
        href: '/pdf/en/nikita-lakoza.pdf',
      },
    },
  },
}

export type Translation = typeof en
export default en
