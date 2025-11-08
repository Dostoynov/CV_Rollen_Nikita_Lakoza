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
        'Frontend engineer focused on resilient design systems and measurable product outcomes. Builds adaptable CV foundations that scale across teams, languages, and delivery channels',
      tldr: {
        title: 'TLDR',
        items: [
          {
            title: 'Design-systems lead',
            description:
              'Guides modular interface workstreams with accessibility and localisation embedded from day zero',
          },
          {
            title: 'Product strategist',
            description: 'Pairs experimentation rituals with analytics to validate CV experience hypotheses quickly',
          },
          {
            title: 'Delivery partner',
            description:
              'Builds guardrails for content, design, and engineering teams so rollouts stay fast without regressions',
          },
        ],
      },
      about: {
        title: 'About me',
        paragraphs: [
          'Cross-functional facilitator connecting product, design, and engineering narratives into one CV story',
          'Helps teams grow component ecosystems that are measurable, accessible, and pleasant to evolve',
        ],
        highlight: 'Believes that clarity and empathy in content architecture unlock faster product bets',
      },
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
    events: {
      title: 'Tournaments & Events',
      items: [
        {
          title: 'Frontend Masters Challenge',
          role: 'Design systems finalist',
          period: '2023',
          location: 'Remote',
          description:
            'Prototyped an adaptive CV layout live, focusing on progressive enhancement and print fidelity.',
          link: {
            label: 'Watch recap',
            href: 'https://frontendmasters.com/workshops/',
          },
        },
        {
          title: 'CSS Camp Barcelona',
          role: 'Speaker & mentor',
          period: '2022',
          location: 'Barcelona, Spain',
          description:
            'Shared the rollout playbook for localisation-ready design systems and mentored product squads.',
          link: {
            label: 'Session notes',
            href: 'https://csscamp.tech/',
          },
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
    tools: {
      title: 'Software & Tools',
      groups: [
        {
          title: 'Interface craft',
          items: ['Figma', 'Storybook', 'Framer', 'Motion Canvas'],
        },
        {
          title: 'Quality & delivery',
          items: ['Playwright', 'Vitest', 'Chromatic', 'Lighthouse CI'],
        },
        {
          title: 'Collaboration',
          items: ['Linear', 'Notion', 'Miro', 'Confluence'],
        },
      ],
    },
    portfolio: {
      title: 'Portfolio',
      toggle: {
        expand: 'Show portfolio',
        collapse: 'Hide portfolio',
      },
      items: [
        {
          title: 'Interactive CV builder',
          description: 'A guided editor with live localisation previews and automated accessibility checks.',
          mediaType: 'video',
          src: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4',
          poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Design system workbench',
          description:
            'A Storybook-driven workspace combining tokens, analytics hooks, and change logs in one place.',
          mediaType: 'image',
          src: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80',
          alt: 'Screens from a design system workbench with components and documentation panels.',
        },
        {
          title: 'PDF automation pipeline',
          description: 'Serverless rendering pipeline for consistent PDF exports and branded variants.',
          mediaType: 'image',
          src: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80',
          alt: 'Flow diagram representing a PDF automation pipeline with workers and queues.',
        },
        {
          title: 'Research insights hub',
          description: 'An internal portal aligning usability studies with design tokens and component usage.',
          mediaType: 'image',
          src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
          alt: 'Dashboard showing research highlights and qualitative notes pinned for teams.',
        },
      ],
    },
    logos: {
      title: 'Selected collaborations',
      items: [
        {
          alt: 'Delivery Hero logo',
          href: 'https://www.deliveryhero.com/',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Delivery_Hero_logo.svg/512px-Delivery_Hero_logo.svg.png',
        },
        {
          alt: 'N26 logo',
          href: 'https://n26.com/',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/N26_logo.svg/512px-N26_logo.svg.png',
        },
        {
          alt: 'SoundCloud logo',
          href: 'https://soundcloud.com/',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/SoundCloud_logo.svg/512px-SoundCloud_logo.svg.png',
        },
        {
          alt: 'Zalando logo',
          href: 'https://corporate.zalando.com/en',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Zalando_logo.svg/512px-Zalando_logo.svg.png',
        },
        {
          alt: 'Delivery Club logo',
          href: 'https://delivery-club.ru/',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Delivery_Club_logo.svg/512px-Delivery_Club_logo.svg.png',
        },
        {
          alt: 'Product Hunt logo',
          href: 'https://www.producthunt.com/',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Product_Hunt_logo.svg/512px-Product_Hunt_logo.svg.png',
        },
      ],
    },
    footer: {
      note: 'This template is ready for localisation, PDF export integration, and future specialisations',
      pdfLink: {
        label: 'Download English PDF',
        href: '/pdf/en/nikita-lakoza.pdf',
      },
    },
  },
}

export type Translation = typeof en
export default en
