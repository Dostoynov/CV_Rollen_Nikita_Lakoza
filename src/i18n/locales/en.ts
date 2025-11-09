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
      'PDF export and permanent links are on the roadmap. The controls will activate once the pipeline is connected.',
  },
  cv: {
    metadata: {
      name: 'Nikita “Rollen” Lakoza',
      headline: 'Observer / Production Staff for CS2 and Dota 2',
      detailsLabel: 'Professional details',
      details: [
        {
          label: 'Location',
          value: 'Belgrade, Serbia — ready for travel',
        },
        {
          label: 'Disciplines',
          value: 'Counter-Strike 2 & Dota 2 broadcasts',
        },
      ],
    },
    contact: {
      title: 'Contact',
      items: [
        {
          label: 'Email',
          value: 'csgo481@gmail.com',
          href: 'mailto:csgo481@gmail.com',
          icon: 'alternate_email',
        },
        {
          label: 'LinkedIn',
          value: 'linkedin.com/in/nikita-lakoza-98a339275',
          href: 'https://www.linkedin.com/in/nikita-lakoza-98a339275',
          icon: 'handshake',
        },
        {
          label: 'Liquipedia (Counter-Strike)',
          value: 'liquipedia.net/counterstrike/Rollen',
          href: 'https://liquipedia.net/counterstrike/Rollen',
          icon: 'travel_explore',
        },
        {
          label: 'Liquipedia (Dota 2)',
          value: 'liquipedia.net/dota2/Rollen',
          href: 'https://liquipedia.net/dota2/Rollen',
          icon: 'travel_explore',
        },
      ],
    },
    summary: {
      title: 'About me',
      description:
        'I am Nikita “Rollen” Lakoza — an observer for Counter-Strike 2 and Dota 2. Since February 2023 I have worked on FISSURE and BetBoom tournaments, including The International qualifiers and large commercial leagues such as Elite League and Riyadh Masters.',
      note: 'Based in Belgrade, available for travel and on-site events',
      tldr: {
        title: 'TLDR',
        items: [
          {
            title: 'Tournament observer',
            description: 'Delivers clean, engaging coverage for CS2 and Dota 2 finals, qualifiers, and long-format leagues',
          },
          {
            title: 'Production-ready',
            description: 'Configures PCs, flythroughs, overlays, and clean feeds to match broadcast requirements without downtime',
          },
          {
            title: 'Team enabler',
            description: 'Builds processes, trains observers, and shares ready-made configs for rapid team onboarding',
          },
        ],
      },
      about: {
        title: 'What I take care of',
        paragraphs: [
          'My responsibility is to make the in-game picture clear for the audience: I decide who to show, when to launch a cinematic flythrough, when to display ads, and I can suggest the best moment for a replay',
        ],
        listTitle: 'I can',
        list: [
          'observe a live match with the most engaging coverage',
          'prepare exclusive cinematic flythroughs tailored to a specific tournament',
          'deliver an SRT or YouTube Clean Feed',
          'configure the game and NVIDIA settings for broadcast requirements',
          'work with OBS and assemble scenes in vMix',
          'work with production hardware (SDI/coaxial, ATEM, BMD converters)',
          'train other observers and share ready-made configs and keybinds',
        ],
        highlight: 'I am the only documented notable observer on Liquipedia for Counter-Strike and Dota 2',
        note: 'I also support diagnostics, equipment upgrades, and quick fixes on site when something breaks',
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
          description: 'Observer for Counter-Strike 2 and Dota 2 tournaments across international productions',
          achievements: [
            'Observe CS2 and Dota 2 matches live on air, adapting the broadcast for studio and LAN feeds',
            'Prepare and launch cinematic flythroughs for advertising integrations tailored to each tournament',
            'Capture and deliver the game’s Clean Feed to the broadcast director on demand',
            'Tune in-game graphics and NVIDIA parameters so the signal stays stable throughout the show',
            'Build the chain “game → Telegram ChatBot → JSON for GFX” so post-match stats reach designers instantly',
            'Help commentators install configs for both disciplines and keep them updated',
            'Cover an event as a solo observer when needed, including 15-hour shifts across multiple countries',
            'Support diagnostics and assembly of observer PCs, including purchasing or renting equipment',
          ],
        },
      ],
    },
    events: {
      title: 'Tournaments & events',
      intro: 'Broadcasts I have supported as a lead observer or part of the production team',
      items: [] as {
        title: string
        role: string
        period: string
        location: string
        description: string
        link?: { label: string; href: string }
      }[],
      categories: [
        {
          title: 'Counter-Strike 2',
          items: [
            'BetBoom Dacha Dubai 2023: Closed Qualifier',
            'BetBoom Dacha Dubai 2023',
            'BetBoom Dacha Belgrade 2024: South American Qualifier',
            'BetBoom Dacha Belgrade #1 2024',
            'BetBoom Dacha Belgrade #2 2024',
            'FISSURE Playground #1',
            'FISSURE Playground #2',
          ],
        },
        {
          title: 'Dota 2',
          items: [
            'Bali Major 2023',
            'The International 2023 – North America Qualifier',
            'The International 2023 – South America Qualifier',
            'The International 2023 – Southeast Asia Qualifier',
            'The International 2023',
            'BetBoom Dacha Dubai 2024',
            'Elite League Season 1',
            'Elite League Season 2',
            'Riyadh Masters 2024',
            'BetBoom Dacha Belgrade 2024',
            'FISSURE Universe: Episode 2',
            'FISSURE Universe: Episode 5',
            'FISSURE Universe: Episode 6',
            'FISSURE Special',
            'FISSURE Playground 2 CQ',
            'FISSURE Playground 2',
          ],
        },
      ],
    },
    education: {
      title: 'Training & mentoring',
      items: [
        {
          degree: 'Mentored two observers to main-broadcast level for Dota 2 and CS2',
          institution: 'FISSURE.pro internal academy',
          period: '2023 — 2024',
          location: 'Remote & on-site',
          description: 'Shared keybind maps, configs, and workflows so they could reproduce the setup independently',
        },
        {
          degree: 'Observer workstation upgrades',
          institution: 'FISSURE.pro broadcast team',
          period: '2023 — 2024',
          location: 'Dubai · Yerevan · Belgrade',
          description: 'Expanded the observer workspace with monitors, headsets, and software tuned for fast switching',
        },
      ],
    },
    skills: {
      title: 'Functions & contribution',
      note: 'I focus on coverage that keeps production safe while giving viewers the best possible story',
      groups: [
        {
          title: 'Live broadcast',
          items: [
            'Observe CS2 and Dota 2 matches live with both viewer engagement and production goals in mind',
            'Adapt each feed for studio, LAN, and clean broadcast outputs',
            'Launch cinematic flythroughs and sponsor placements at the right moment',
          ],
        },
        {
          title: 'Production pipeline',
          items: [
            'I do more than show the game — I understand every “wire” that carries the signal, which helps me fix issues fast',
            'Work with coaxial and SDI cabling, ATEM switchers, and BMD converters',
            'Monitor signal and frame rate, diagnosing drops and mismatches on the fly',
            'Replace cables, converters, or even the PC when needed and keep drivers updated',
            'Assemble and upgrade observer PCs for specific tournaments and travel scenarios',
            'Keep poor internet stable by rerouting traffic or using services like ExitLag during qualifiers',
          ],
        },
        {
          title: 'Team enablement',
          items: [
            'Build the “game → Telegram ChatBot → JSON” chain so post-map statistics reach GFX without loss',
            'Prepare and install configs for both disciplines, helping casters set up quickly',
            'Expand the observer workspace with custom keybind maps, including undocumented binds',
            'Train new observers, explain logic, and share ready-made configs and processes',
          ],
        },
      ],
    },
    tools: {
      title: 'Software & tools',
      groups: [
        {
          title: 'Game & observer',
          items: ['HLAE', 'Custom HUD / MyHUD / BoltObserv', 'Configs for CS2 and Dota 2', 'AutoHotkey (automation)'],
        },
        {
          title: 'Production',
          items: ['OBS — configuring scenes and output', 'vMix — building scenes and inputs', 'ATEM Mini', 'Stream Deck', 'BMD Converter HDMI↔SDI'],
        },
        {
          title: 'Development & services',
          items: ['Python (simple scripts and stat delivery)', 'VS Code'],
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
          title: 'The team that owns the stage',
          description:
            'My favourite moments are when our team lights up the arena together — I make sure the broadcast keeps those smiles front and centre.',
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
          src: 'https://dummyimage.com/160x60/1a1a1a/ffffff&text=FISSURE',
          alt: 'FISSURE.pro logo',
        },
      ],
    },
    footer: {
      note: 'Let’s collaborate on your next broadcast — reach out anytime',
      pdfLink: null as { label: string; href: string } | null,
    },
  },
}

export type Translation = typeof en
export default en
