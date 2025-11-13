import { tournamentCategories } from '../../data/tournaments'

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
    backToTop: 'Back to top',
    pdfControlsLabel: 'PDF controls',
    headerControlsLabel: 'Header controls',
  },
  actions: {
    exportPdf: 'Export PDF',
    viewPdf: 'View PDF',
    exportComingSoon:
      'Export and static links will arrive later. The controls activate once the pipeline is connected.',
  },
  cv: {
    metadata: {
      name: 'Nikita “Rollen” Lakoza',
      headline: 'Freelance Counter-Strike and Dota 2 Observer / Esports',
      detailsLabel: 'Professional details',
      details: [
        {
          label: 'Location',
          value: 'Belgrade, Serbia — available for travel and relocation',
        },
        {
          label: 'Disciplines',
          value: 'Counter-Strike 2 and Dota 2',
        },
      ],
    },
    contact: {
      title: 'Contacts',
      items: [
        {
          label: 'Email',
          value: 'csgo481@gmail.com',
          href: 'mailto:csgo481@gmail.com',
          icon: 'alternate_email',
        },
        {
          label: 'LinkedIn',
          value: 'View profile',
          href: 'https://www.linkedin.com/in/nikita-lakoza-98a339275',
          icon: 'handshake',
        },
        {
          label: 'Liquipedia (Counter-Strike)',
          value: 'Counter-Strike profile',
          href: 'https://liquipedia.net/counterstrike/Rollen',
          icon: 'travel_explore',
        },
        {
          label: 'Liquipedia (Dota 2)',
          value: 'Dota 2 profile',
          href: 'https://liquipedia.net/dota2/Rollen',
          icon: 'travel_explore',
        },
      ],
    },
    summary: {
      title: 'About me',
      description:
        'I am Nikita “Rollen” Lakoza — an observer for Counter-Strike 2 and Dota 2. Since February 2023 I have worked on FISSURE and BetBoom tournaments, including The International qualifiers and major commercial leagues (Elite League, Riyadh Masters, BetBoom Dacha).',
      note: 'Based in Belgrade, ready for travel, on-site events, and relocation',
      tldr: {
        title: 'TLDR',
        items: [
          {
            title: 'Tournament observer',
            description: 'Deliver clean, spectacular coverage for CS2 and Dota 2 championships',
          },
          {
            title: 'Live production experience',
            description: 'Configure PCs, flythroughs, overlays, and clean feeds to match broadcast requirements',
          },
          {
            title: 'Team contributor',
            description: 'Build workflows, train observers, and share ready-to-use configs and keybinds',
          },
        ],
      },
      about: {
        title: 'What I do',
        paragraphs: [
          'My responsibility is to make the in-game picture clear for the audience: I decide who to show, when to launch a cinematic flythrough, when to display ads, and what deserves a replay.',
        ],
        listTitle: 'I can',
        list: [
          'observe a live match with the most engaging coverage',
          'prepare exclusive cinematic flythroughs tailored to a specific tournament',
          'deliver an SRT or YouTube clean feed',
          'configure the game and NVIDIA settings for broadcast requirements',
          'work with OBS and assemble scenes in vMix',
          'work with production hardware (SDI/coaxial, ATEM, BMD converters)',
          'train other observers and share ready-made configs and keybinds',
        ],
        highlight: 'I am the only documented notable observer on Liquipedia for Counter-Strike and Dota 2',
        note: '',
      },
    },
    experience: {
      title: 'Experience',
      items: [
        {
          role: 'Observer',
          company: 'FISSURE.pro',
          period: 'February 2023 — present',
          location: 'Dubai · Yerevan · Belgrade (hybrid)',
          description: 'Observe CS2 and Dota 2 tournaments, covering broadcast and production tasks',
          achievements: [
            'Observe CS2 and Dota 2 live on air, balancing viewer interests with production goals',
            'Adapt the setup for studio broadcasts or LAN tournaments',
            'Prepare and launch cinematic flythroughs and advertising integrations',
            'Deliver a clean feed of the game directly to the broadcast director',
            'Adjust graphics and NVIDIA settings so the game stays rich and stable',
            'Build the “game → Telegram ChatBot → JSON” chain for instant stat delivery to designers',
            'Help commentators install configs for both disciplines',
            'Cover an event as a solo observer when needed and handle long shifts',
            'Diagnose and assemble observer PCs, including sourcing and renting equipment',
          ],
        },
      ],
    },
    events: {
      title: 'Tournaments & events',
      intro: 'I have contributed to the broadcasts of the following tournaments',
      items: [] as {
        title: string
        role: string
        period: string
        location: string
        description: string
        link?: { label: string; href: string }
      }[],
      categories: tournamentCategories,
    },
    education: {
      title: 'Training & mentoring',
      items: [
        {
          degree: 'Mentored two observers to Tier 1 level for Dota 2 and CS2',
          institution: 'FISSURE.pro internal academy',
          period: '2023; 2024',
          location: 'Remote and on site',
          description: 'Led and contributed to creating keybind maps and configs so colleagues can reproduce my setup independently',
        },
        {
          degree: 'Boosting the observer workspace',
          institution: 'FISSURE.pro broadcast team',
          period: '2023; 2024; 2025',
          location: 'Dubai · Yerevan · Belgrade',
          description: 'Configured the observer setup — monitors, headsets, and software — making everyday work easier and boosting broadcast quality significantly',
        },
      ],
    },
    skills: {
      title: 'Functions & contribution',
      note: 'I make the broadcast safer for production and exciting for viewers',
      groups: [
        {
          title: 'Live broadcast',
          items: [
            'Observe CS2 and Dota 2 live with both viewer engagement and production tasks in mind',
            'Adapt the setup for studio broadcasts or LAN tournaments',
            'Launch cinematic flythroughs and advertising integrations at the right moment',
            'Keep the game vibrant and engaging for viewers',
          ],
        },
        {
          title: 'Production',
          items: [
            'Understand which “wire” carries the signal, so I quickly find and solve technical issues',
            'Work with coaxial and SDI cabling, ATEM switchers, and BMD converters',
            'Monitor signal and frame rate, catching drops and mismatches instantly',
            'Swap cables, converters, or even PCs on short notice and update drivers',
            'Assemble and upgrade observer PCs for specific tournaments and travel conditions',
            'Stabilize internet in tough conditions, including via ExitLag during qualifiers',
          ],
        },
        {
          title: 'Team',
          items: [
            'Build the “game → Telegram ChatBot → JSON” chain so statistics reach designers instantly',
            'Prepare and install configs for casters and observers, speeding up their setup',
            'Expand the observer workspace and share keybind maps, including rare combinations',
            'Train new observers, explain logic, and share working processes',
          ],
        },
      ],
    },
    tools: {
      title: 'Software & tools',
      groups: [
        {
          title: 'Game & observer',
          items: ['HLAE', 'Custom HUD / MyHUD / BoltObserv', 'Configs for CS2 and Dota 2', 'AutoHotkey (automation)', 'ExitLag'],
        },
        {
          title: 'Production',
          items: [
            'Companion — control and automation',
            'OBS — configuring scenes, sources, and output',
            'vMix — building scenes and connecting feeds',
            'ATEM Mini',
            'Stream Deck',
            'BMD Converter HDMI↔SDI',
          ],
        },
        {
          title: 'Development & services',
          items: ['Cursor — coding and AI', 'Python — simple scripts and stat delivery'],
        },
      ],
    },
    portfolio: {
      title: 'Highlights',
      toggle: {
        expand: 'Show more highlights',
        collapse: 'Hide highlights',
      },
      items: [
        {
          title: 'Top observer mindgame move',
          description: 'Did you saw this smoke fade?',
          mediaType: 'video',
          src: 'https://drive.usercontent.google.com/download?id=10SNqs5bLyPQQGlBeYmuoPrwlIA0r7OfO&export=download',
          sourceType: 'video/mp4',
          orientation: 'portrait',
          fallback: {
            mediaType: 'iframe',
            src: 'https://drive.google.com/file/d/10SNqs5bLyPQQGlBeYmuoPrwlIA0r7OfO/preview',
            allow: 'autoplay; fullscreen',
            allowFullScreen: true,
          },
        },
        {
          title: 'The team that lights up the stage',
          description: 'Best emotions after a tournament',
          mediaType: 'image',
          src: '/highlights/team.jpg',
          alt: 'Observer team celebrating on the arena stage',
        },
      ],
    },
    logos: {
      title: 'Partners & tournaments',
      items: [
        {
          href: 'https://youtu.be/YVuiXKjDKwc?si=gtHzvoS68YClZD4D',
          src: '/logos/fpg1.png',
          alt: 'Fissure Playground 1 logo',
        },
        {
          href: 'https://youtu.be/wGEbsuWClbA?si=y3RBo-w44JIxzYhm',
          src: '/logos/fpg2.png',
          alt: 'Fissure Playground 2 logo',
        },
        {
          href: 'https://www.youtube.com/live/dOaZ4mjJmG4?si=3F_USY0zgp-JI9Xt',
          src: '/logos/bbd2024.png',
          alt: 'BetBoom Dacha Dubai 2024 logo',
        },
        {
          href: 'https://fissure.pro',
          src: '/logos/fissure.svg',
          alt: 'FISSURE.pro logo',
          id: 'fissure',
        },
      ],
    },
    footer: {
      note: 'Happy to discuss your next broadcast — write anytime',
      pdfLink: null as { label: string; href: string } | null,
    },
  },
}

export type Translation = typeof en
export default en
