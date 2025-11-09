import { tournamentCategories } from '../../data/tournaments'
import type { Translation } from './en'

const ro: Translation = {
  language: {
    label: 'Romanian',
    nativeName: 'Română',
  },
  layout: {
    skipToMain: 'Sari la conținutul principal',
    languageSwitcherLabel: 'Limbă',
    themeSwitcherToggle: 'Schimbă tema',
    themeOptionSystem: 'Sistem',
    themeOptionLight: 'Luminoasă',
    themeOptionDark: 'Întunecată',
    backToTop: 'Înapoi sus',
    pdfControlsLabel: 'Controale PDF',
    headerControlsLabel: 'Controale în antet',
  },
  actions: {
    exportPdf: 'Exportă PDF',
    viewPdf: 'Vezi PDF',
    exportComingSoon:
      'Exportul și legăturile statice vor fi disponibile în curând. Controalele se activează când fluxul este conectat.',
  },
  cv: {
    metadata: {
      name: 'Nikita „Rollen” Lakoza',
      headline: 'Observer freelance pentru Counter-Strike și Dota 2 / Esports',
      detailsLabel: 'Detalii profesionale',
      details: [
        {
          label: 'Locație',
          value: 'Belgrad, Serbia — disponibil pentru deplasări și relocare',
        },
        {
          label: 'Discipline',
          value: 'Counter-Strike 2 și Dota 2',
        },
      ],
    },
    contact: {
      title: 'Contacte',
      items: [
        {
          label: 'Email',
          value: 'csgo481@gmail.com',
          href: 'mailto:csgo481@gmail.com',
          icon: 'alternate_email',
        },
        {
          label: 'LinkedIn',
          value: null,
          href: 'https://www.linkedin.com/in/nikita-lakoza-98a339275',
          icon: 'handshake',
        },
        {
          label: 'Liquipedia (Counter-Strike)',
          value: null,
          href: 'https://liquipedia.net/counterstrike/Rollen',
          icon: 'travel_explore',
        },
        {
          label: 'Liquipedia (Dota 2)',
          value: null,
          href: 'https://liquipedia.net/dota2/Rollen',
          icon: 'travel_explore',
        },
      ],
    },
    summary: {
      title: 'Despre mine',
      description:
        'Sunt Nikita „Rollen” Lakoza — observer pentru Counter-Strike 2 și Dota 2. Din februarie 2023 lucrez la turneele FISSURE și BetBoom, inclusiv calificările pentru The International și ligi comerciale majore (Elite League, Riyadh Masters, BetBoom Dacha).',
      note: 'Stabilit în Belgrad, disponibil pentru deplasări, evenimente on-site și relocare',
      tldr: {
        title: 'TLDR',
        items: [
          {
            title: 'Observer de turnee',
            description: 'Ofer imagini curate și spectaculoase pentru campionate CS2 și Dota 2',
          },
          {
            title: 'Experiență în live production',
            description: 'Configurez PC-uri, flythrough-uri, overlay-uri și clean feed-uri după cerințele transmisiei',
          },
          {
            title: 'Sprijin pentru echipă',
            description: 'Construiesc fluxuri de lucru, instruiesc observatori și împart configurații și keybind-uri gata de folosit',
          },
        ],
      },
      about: {
        title: 'Ce fac',
        paragraphs: [
          'Responsabilitatea mea este ca imaginea din joc să fie clară pentru public: decid pe cine arătăm, când pornim un flythrough cinematic, când afișăm reclame și ce merită un replay.',
        ],
        listTitle: 'Pot să',
        list: [
          'observ un meci live cu cel mai captivant conținut',
          'pregătesc flythrough-uri cinematice exclusive pentru un turneu specific',
          'livrez un clean feed SRT sau YouTube',
          'setez jocul și parametrii NVIDIA conform cerințelor transmisiei',
          'lucrez în OBS și construiesc scene în vMix',
          'lucrez cu echipamente de producție (SDI/coaxial, ATEM, convertoare BMD)',
          'instruiesc alți observatori și împărtășesc configurații și keybind-uri gata de folosit',
        ],
        highlight: 'Sunt singurul observer notabil documentat pe Liquipedia pentru Counter-Strike și Dota 2',
        note: '',
      },
    },
    experience: {
      title: 'Experiență',
      items: [
        {
          role: 'Observer',
          company: 'FISSURE.pro',
          period: 'februarie 2023 — prezent',
          location: 'Dubai · Erevan · Belgrad (hibrid)',
          description: 'Observ turnee CS2 și Dota 2, acoperind sarcinile de broadcast și producție',
          achievements: [
            'Observ CS2 și Dota 2 live, echilibrând interesele publicului și obiectivele producției',
            'Adaptez setup-ul pentru studiouri sau turnee LAN',
            'Pregătesc și lansez flythrough-uri cinematice și integrări publicitare',
            'Trimit clean feed-ul jocului direct regizorului de transmisie',
            'Ajustez grafica și parametrii NVIDIA pentru a menține semnalul bogat și stabil',
            'Construiesc lanțul „joc → Telegram ChatBot → JSON” pentru a livra instant statisticile către designeri',
            'Ajut comentatorii să instaleze configurații pentru ambele discipline',
            'Acopăr un eveniment singur atunci când e nevoie și gestionez ture lungi',
            'Diagnostic și asamblez PC-uri de observer, inclusiv achiziția sau închirierea echipamentelor',
          ],
        },
      ],
    },
    events: {
      title: 'Turnee & evenimente',
      intro: 'Am contribuit la transmisiile următoarelor turnee',
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
      title: 'Training & mentorat',
      items: [
        {
          degree: 'Am ghidat doi observatori până la nivel Tier 1 pentru Dota 2 și CS2',
          institution: 'Academia internă FISSURE.pro',
          period: '2023; 2024',
          location: 'Remote și on-site',
          description: 'Am coordonat și creat hărți de keybind-uri și configurații pentru ca echipa să poată reproduce setup-ul independent',
        },
        {
          degree: 'Îmbunătățirea spațiului de lucru al observerului',
          institution: 'Echipa de broadcast FISSURE.pro',
          period: '2023; 2024; 2025',
          location: 'Dubai · Erevan · Belgrad',
          description: 'Am configurat setup-ul de observer — monitoare, căști și software — simplificând munca zilnică și crescând semnificativ calitatea transmisiilor',
        },
      ],
    },
    skills: {
      title: 'Funcții & contribuție',
      note: 'Fac transmisiunea sigură pentru producție și captivantă pentru spectatori',
      groups: [
        {
          title: 'Transmisiune live',
          items: [
            'Observ CS2 și Dota 2 live, ținând cont de public și de nevoile producției',
            'Adaptez setup-ul pentru studiouri sau turnee LAN',
            'Pornesc flythrough-urile cinematice și integrările comerciale la momentul potrivit',
            'Mențin imaginea jocului vibrantă și interesantă pentru spectatori',
          ],
        },
        {
          title: 'Producție',
          items: [
            'Știu pe ce „fir” circulă semnalul, așa că găsesc și rezolv rapid problemele tehnice',
            'Lucrez cu cabluri coaxiale și SDI, switcher-e ATEM și convertoare BMD',
            'Monitorizez semnalul și FPS-ul, detectând imediat căderile sau neconcordanțele',
            'Înlocuiesc cabluri, convertoare sau chiar PC-ul atunci când e nevoie și actualizez driverele',
            'Asamblez și upgradez PC-uri de observer pentru turnee specifice și scenarii de călătorie',
            'Stabilizez internetul în condiții dificile, inclusiv cu ExitLag în calificări',
          ],
        },
        {
          title: 'Echipă',
          items: [
            'Construiesc lanțul „joc → Telegram ChatBot → JSON” pentru ca statisticile să ajungă instant la designeri',
            'Pregătesc și instalez configurații pentru casteri și observatori, accelerând pregătirea lor',
            'Extind spațiul de lucru al observerului și împart hărți de keybind-uri, inclusiv combinații rare',
            'Instruiesc observatori noi, explic logica și împărtășesc procesele de lucru',
          ],
        },
      ],
    },
    tools: {
      title: 'Software & instrumente',
      groups: [
        {
          title: 'Joc & observer',
          items: ['HLAE', 'Custom HUD / MyHUD / BoltObserv', 'Config-uri pentru CS2 și Dota 2', 'AutoHotkey (automatizare)', 'ExitLag'],
        },
        {
          title: 'Producție',
          items: [
            'Companion — control și automatizare',
            'OBS — configurare scene, surse și output',
            'vMix — construiesc scene și conectez feed-uri',
            'ATEM Mini',
            'Stream Deck',
            'BMD Converter HDMI↔SDI',
          ],
        },
        {
          title: 'Dezvoltare & servicii',
          items: ['Cursor — coding și AI', 'Python — scripturi simple și livrarea statisticilor'],
        },
      ],
    },
    portfolio: {
      title: 'Momente',
      toggle: {
        expand: 'Arată mai multe momente',
        collapse: 'Ascunde momentele',
      },
      items: [
        {
          title: 'Echipa care aprinde scena',
          description: 'Cele mai bune emoții după un turneu',
          mediaType: 'image',
          src: '/highlights/team.jpg',
          alt: 'Echipa de observatori sărbătorește pe scena arenei',
        },
      ],
    },
    logos: {
      title: 'Parteneri & turnee',
      items: [
        {
          href: 'https://youtu.be/YVuiXKjDKwc?si=gtHzvoS68YClZD4D',
          src: '/logos/fpg1.png',
          alt: 'Logo Fissure Playground 1',
        },
        {
          href: 'https://youtu.be/wGEbsuWClbA?si=y3RBo-w44JIxzYhm',
          src: '/logos/fpg2.png',
          alt: 'Logo Fissure Playground 2',
        },
        {
          href: 'https://www.youtube.com/live/dOaZ4mjJmG4?si=3F_USY0zgp-JI9Xt',
          src: '/logos/bbd2024.png',
          alt: 'Logo BetBoom Dacha Dubai 2024',
        },
        {
          href: 'https://fissure.pro',
          src: '/logos/fissure.png',
          alt: 'Logo FISSURE.pro',
        },
      ],
    },
    footer: {
      note: 'Mă bucur să discutăm despre următorul vostru broadcast — scrieți-mi oricând',
      pdfLink: null as { label: string; href: string } | null,
    },
  },
}

export default ro
