import { tournamentCategories } from '../../data/tournaments'
import type { Translation } from './en'

const de: Translation = {
  language: {
    label: 'German',
    nativeName: 'Deutsch',
  },
  layout: {
    skipToMain: 'Zum Hauptinhalt springen',
    languageSwitcherLabel: 'Sprache',
    themeSwitcherToggle: 'Thema wechseln',
    themeOptionSystem: 'System',
    themeOptionLight: 'Hell',
    themeOptionDark: 'Dunkel',
    backToTop: 'Zurück nach oben',
    pdfControlsLabel: 'PDF-Steuerung',
    headerControlsLabel: 'Steuerelemente im Header',
  },
  actions: {
    exportPdf: 'PDF exportieren',
    viewPdf: 'PDF anzeigen',
    exportComingSoon:
      'Export und statische Links folgen später. Die Steuerung wird aktiviert, sobald die Pipeline angebunden ist.',
  },
  cv: {
    metadata: {
      name: 'Nikita „Rollen“ Lakoza',
      headline: 'Freelance-Counter-Strike- und Dota-2-Observer / Esports',
      detailsLabel: 'Berufliche Details',
      details: [
        {
          label: 'Standort',
          value: 'Belgrad, Serbien — bereit für Reisen und Umzug',
        },
        {
          label: 'Disziplinen',
          value: 'Counter-Strike 2 und Dota 2',
        },
      ],
    },
    contact: {
      title: 'Kontakte',
      items: [
        {
          label: 'E-Mail',
          value: 'csgo481@gmail.com',
          href: 'mailto:csgo481@gmail.com',
          icon: 'alternate_email',
        },
        {
          label: 'LinkedIn',
          value: 'Nikita Lakoza',
          href: 'https://www.linkedin.com/in/nikita-lakoza-98a339275',
          icon: 'handshake',
        },
        {
          label: 'Liquipedia (Counter-Strike)',
          value: 'Counter-Strike-Profil',
          href: 'https://liquipedia.net/counterstrike/Rollen',
          icon: 'travel_explore',
        },
        {
          label: 'Liquipedia (Dota 2)',
          value: 'Dota-2-Profil',
          href: 'https://liquipedia.net/dota2/Rollen',
          icon: 'travel_explore',
        },
      ],
    },
    summary: {
      title: 'Über mich',
      description:
        'Ich bin Nikita „Rollen“ Lakoza — Observer für Counter-Strike 2 und Dota 2. Seit Februar 2023 arbeite ich an Turnieren von FISSURE und BetBoom, darunter Qualifier für The International sowie große kommerzielle Ligen (Elite League, Riyadh Masters, BetBoom Dacha).',
      note: 'Sitze in Belgrad, bereit für Reisen, Onsite-Produktionen und Relocation',
      tldr: {
        title: 'TLDR',
        items: [
          {
            title: 'Turnier-Observer',
            description: 'Liefere saubere, eindrucksvolle Bilder für CS2- und Dota-2-Meisterschaften',
          },
          {
            title: 'Live-Production-Erfahrung',
            description: 'Konfiguriere PCs, Flythroughs, Overlays und Clean Feeds exakt nach den Anforderungen der Übertragung',
          },
          {
            title: 'Teamplayer',
            description: 'Baue Workflows auf, schule Observer und teile einsatzbereite Konfigurationen und Keybinds',
          },
        ],
      },
      about: {
        title: 'Was ich mache',
        paragraphs: [
          'Meine Verantwortung ist es, das Spielbild für Zuschauer klar zu halten: Ich entscheide, wen man sieht, wann ein cinematic Flythrough startet, wann Werbung läuft und was in die Wiederholung gehört.',
        ],
        listTitle: 'Ich kann',
        list: [
          'Live-Matches mit maximal spannendem Inhalt beobachten',
          'Exklusive cinematic Flythroughs für ein spezifisches Turnier vorbereiten',
          'Einen SRT- oder YouTube-Clean-Feed liefern',
          'Spiel und NVIDIA-Einstellungen auf Broadcast-Anforderungen abstimmen',
          'Mit OBS arbeiten und Szenen in vMix bauen',
          'Mit Produktionstechnik arbeiten (SDI/Koax, ATEM, BMD-Konverter)',
          'Andere Observer trainieren und fertige Configs sowie Keybinds teilen',
        ],
        highlight: 'Ich bin der einzige dokumentierte notable Observer auf Liquipedia für Counter-Strike und Dota 2',
        note: '',
      },
    },
    experience: {
      title: 'Erfahrung',
      items: [
        {
          role: 'Observer',
          company: 'FISSURE.pro',
          period: 'Februar 2023 — heute',
          location: 'Dubai · Jerewan · Belgrad (Hybrid)',
          description: 'Beobachte CS2- und Dota-2-Turniere und decke Aufgaben für Broadcast und Produktion ab',
          achievements: [
            'Beobachte CS2 und Dota 2 live on air und balanciere Zuschauerinteressen mit Produktionszielen',
            'Passe das Setup für Studioübertragungen oder LAN-Turniere an',
            'Bereite cinematic Flythroughs und Werbe-Integrationen vor und starte sie',
            'Liefer einen Clean Feed des Spiels direkt an den Broadcast Director',
            'Justiere Grafik und NVIDIA-Parameter, damit das Signal stabil und kräftig bleibt',
            'Baue die Kette „Game → Telegram ChatBot → JSON“, damit Statistiken sofort beim Design-Team landen',
            'Unterstütze Kommentatoren bei der Installation von Configs für beide Disziplinen',
            'Führe Events bei Bedarf als alleiniger Observer durch und halte lange Schichten durch',
            'Diagnostiziere und baue Observer-PCs, inklusive Beschaffung oder Anmietung von Equipment',
          ],
        },
      ],
    },
    events: {
      title: 'Turniere & Events',
      intro: 'Ich habe an den Übertragungen der folgenden Turniere mitgewirkt',
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
      title: 'Training & Mentoring',
      items: [
        {
          degree: 'Zwei Observer bis auf Tier-1-Level für Dota 2 und CS2 begleitet',
          institution: 'FISSURE.pro interne Akademie',
          period: '2023; 2024',
          location: 'Remote und vor Ort',
          description: 'Keybind-Maps und Configs erstellt und geteilt, damit Kolleg:innen mein Setup eigenständig reproduzieren können',
        },
        {
          degree: 'Ausbau des Observer-Arbeitsplatzes',
          institution: 'FISSURE.pro Broadcast-Team',
          period: '2023; 2024; 2025',
          location: 'Dubai · Jerewan · Belgrad',
          description: 'Observer-Setup eingerichtet – Monitore, Headsets und Software. Das vereinfachte die Arbeit und steigerte die Broadcast-Qualität deutlich',
        },
      ],
    },
    skills: {
      title: 'Aufgaben & Beitrag',
      note: 'Ich mache den Broadcast sicher für die Produktion und spannend für Zuschauer:innen',
      groups: [
        {
          title: 'Live-Broadcast',
          items: [
            'Beobachte CS2 und Dota 2 live mit Blick auf Zuschauerbindung und Produktionsanforderungen',
            'Passe das Setup für Studio- oder LAN-Produktionen an',
            'Starte cinematic Flythroughs und Werbe-Integrationen im richtigen Moment',
            'Sorge dafür, dass das Spielbild lebendig und fesselnd bleibt',
          ],
        },
        {
          title: 'Produktion',
          items: [
            'Weiß, über welches „Kabel“ das Signal läuft und löse technische Probleme schnell',
            'Arbeite mit Koax- und SDI-Verkabelung, ATEM-Switchern und BMD-Konvertern',
            'Überwache Signal und FPS und erkenne Einbrüche oder Abweichungen sofort',
            'Tausche Kabel, Konverter oder ganze PCs kurzfristig und halte Treiber aktuell',
            'Baue und aktualisiere Observer-PCs für spezifische Turniere und Reiseszenarien',
            'Stabilisiere Internet in schwierigen Umgebungen, z. B. mit ExitLag bei Qualifiern',
          ],
        },
        {
          title: 'Team',
          items: [
            'Baue die Kette „Game → Telegram ChatBot → JSON“, damit Statistiken sofort beim Design landen',
            'Bereite Configs für Caster und Observer vor und installiere sie, um den Aufbau zu beschleunigen',
            'Erweitere den Observer-Arbeitsplatz und teile Keybind-Maps, inklusive seltener Kombinationen',
            'Schule neue Observer, erkläre Abläufe und teile Workflows',
          ],
        },
      ],
    },
    tools: {
      title: 'Software & Tools',
      groups: [
        {
          title: 'Game & Observer',
          items: ['HLAE', 'Custom HUD / MyHUD / BoltObserv', 'Configs für CS2 und Dota 2', 'AutoHotkey (Automatisierung)', 'ExitLag'],
        },
        {
          title: 'Produktion',
          items: [
            'Companion – Steuerung und Automatisierung',
            'OBS – Szenen, Quellen und Output konfigurieren',
            'vMix – Szenen bauen und Feeds einbinden',
            'ATEM Mini',
            'Stream Deck',
            'BMD Converter HDMI↔SDI',
          ],
        },
        {
          title: 'Entwicklung & Services',
          items: ['Cursor – Coding und KI', 'Python – Skripte und Statistik-Lieferung'],
        },
      ],
    },
    portfolio: {
      title: 'Highlights',
      toggle: {
        expand: 'Mehr Highlights anzeigen',
        collapse: 'Highlights ausblenden',
      },
      items: [
        {
          title: 'Das Team, das die Bühne erhellt',
          description: 'Die besten Emotionen nach einem Turnier',
          mediaType: 'image',
          src: '/highlights/team.jpg',
          alt: 'Observer-Team feiert auf der Arenabühne',
        },
      ],
    },
    logos: {
      title: 'Partner & Turniere',
      items: [
        {
          href: 'https://youtu.be/YVuiXKjDKwc?si=gtHzvoS68YClZD4D',
          src: '/logos/fpg1.png',
          alt: 'Logo von Fissure Playground 1',
        },
        {
          href: 'https://youtu.be/wGEbsuWClbA?si=y3RBo-w44JIxzYhm',
          src: '/logos/fpg2.png',
          alt: 'Logo von Fissure Playground 2',
        },
        {
          href: 'https://www.youtube.com/live/dOaZ4mjJmG4?si=3F_USY0zgp-JI9Xt',
          src: '/logos/bbd2024.png',
          alt: 'Logo von BetBoom Dacha Dubai 2024',
        },
        {
          href: 'https://fissure.pro',
          src: '/logos/fissure.png',
          alt: 'Logo von FISSURE.pro',
        },
      ],
    },
    footer: {
      note: 'Ich freue mich auf euer nächstes Broadcast-Projekt — meldet euch jederzeit',
      pdfLink: null as { label: string; href: string } | null,
    },
  },
}

export default de
