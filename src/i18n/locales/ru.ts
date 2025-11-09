import type { Translation } from './en'

const ru: Translation = {
  language: {
    label: 'Russian',
    nativeName: 'Русский',
  },
  layout: {
    skipToMain: 'Перейти к основному содержимому',
    languageSwitcherLabel: 'Язык',
    themeSwitcherToggle: 'Переключить тему',
    themeOptionSystem: 'Система',
    themeOptionLight: 'Светлая',
    themeOptionDark: 'Тёмная',
    pdfControlsLabel: 'Управление PDF',
    headerControlsLabel: 'Элементы управления в шапке',
  },
  actions: {
    exportPdf: 'Экспорт в PDF',
    viewPdf: 'Открыть PDF',
    exportComingSoon:
      'Экспорт и статическая ссылка появятся позже. Управление активируется, когда процесс будет подключён.',
  },
  cv: {
    metadata: {
      name: 'Никита «Rollen» Лакоза',
      headline: 'Observer / Production Staff по CS2 и Dota 2.',
      detailsLabel: 'Профессиональные сведения',
      details: [
        {
          label: 'Локация',
          value: 'Белград, Сербия — готов к командировкам',
        },
        {
          label: 'Дисциплины',
          value: 'Трансляции Counter-Strike 2 и Dota 2',
        },
      ],
    },
    contact: {
      title: 'Контакты',
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
      title: '1. Обо мне',
      description:
        'Я Никита «Rollen» Лакоза — observer по дисциплинам Counter-Strike 2 и Dota 2. С февраля 2023 года работал на турнирах FISSURE и BetBoom, в том числе на отборочных к The International и крупных коммерческих лигах (Elite League, Riyadh Masters, BetBoom Dacha).',
      note: 'Базируюсь в Белграде, готов к командировкам и работе на выездных ивентах.',
      tldr: {
        title: 'Коротко',
        items: [
          {
            title: 'Турнирный observer',
            description:
              'Делаю чистую и зрелищную картинку для финалов, квалификаций и длинных лиг по CS2 и Dota 2.',
          },
          {
            title: 'Готов к продакшену',
            description:
              'Настраиваю ПК, пролёты, оверлеи и чистые фиды под требования трансляции без простоев.',
          },
          {
            title: 'Помогаю команде',
            description:
              'Выстраиваю процессы, обучаю обсерверов и делюсь готовыми конфигами и биндами.',
          },
        ],
      },
      about: {
        title: 'Чем занимаюсь',
        paragraphs: [
          'Моя зона ответственности — сделать так, чтобы игровая картинка была понятна зрителю: решаю, кого показывать, когда запускать cinematic-пролёт, в какой момент вывести рекламу и что стоит показать на повторе.',
        ],
        listTitle: 'Я умею:',
        list: [
          'обсервить матч в прямом эфире с максимально интересным наполнением;',
          'подготавливать эксклюзивные cinematic-пролёты под конкретный турнир;',
          'отдавать SRT или YouTube Clean Feed;',
          'настраивать игру и NVIDIA под требования трансляции;',
          'работать с OBS и собирать сцены во vMix;',
          'работать с продакшен-оборудованием (SDI/коаксиал, ATEM, BMD-конвертеры);',
          'обучать других обсерверов и передавать им готовые конфиги и бинды.',
        ],
        highlight:
          'Являюсь единственным задокументированным notable-observer на Liquipedia по Counter-Strike и Dota 2.',
        note: 'Также беру на себя диагностику, апгрейд техники и быстрые правки прямо на площадке.',
      },
    },
    experience: {
      title: '2. Опыт',
      items: [
        {
          role: 'Observer',
          company: 'FISSURE.pro',
          period: 'февраль 2023 — наст. время',
          location: 'Дубай · Ереван · Белград (гибрид)',
          description:
            'Обсервлю турниры по CS2 и Dota 2, закрывая задачи трансляции и продакшена.',
          achievements: [
            'Обсервлю CS2 и Dota 2 в прямом эфире с учётом интересов зрителя и задач продакшена.',
            'Подстраиваю показ под студийный эфир, LAN и чистый сигнал.',
            'Подготавливаю и запускаю cinematic-пролёты и рекламные интеграции.',
            'Отдаю Clean Feed игры напрямую режиссёру трансляции.',
            'Настраиваю графику и параметры NVIDIA, чтобы сигнал оставался стабильным.',
            'Делаю связку «игра → Telegram ChatBot → JSON» для моментальной отправки статистики дизайнерам.',
            'Помогаю комментаторам с установкой конфигов для обеих дисциплин.',
            'Закрываю ивент в одного обсервера, если это необходимо, и работаю длинные смены.',
            'Занимаюсь диагностикой и сборкой обсерверных ПК, включая аренду и закупку оборудования.',
          ],
        },
      ],
    },
    events: {
      title: '3. Турниры и события',
      intro: 'За время работы участвовал в трансляциях следующих турниров:',
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
          title: 'CS2',
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
      title: '4. Обучение и наставничество',
      items: [
        {
          degree: 'Наставил двух обсерверов до уровня основного эфира по Dota 2 и CS2',
          institution: 'Внутренняя академия FISSURE.pro',
          period: '2023 — 2024',
          location: 'Удалённо и на площадке',
          description:
            'Передал карты биндов и конфиги, чтобы коллеги могли воспроизвести мой сетап самостоятельно.',
        },
        {
          degree: 'Усиление обсерверных рабочих мест',
          institution: 'Команда трансляций FISSURE.pro',
          period: '2023 — 2024',
          location: 'Дубай · Ереван · Белград',
          description:
            'Добавил мониторы, гарнитуры и софт, настроенный под быстрое переключение и стабильный сигнал.',
        },
      ],
    },
    skills: {
      title: '5. Функции и вклад',
      note: 'Делаю трансляцию безопасной для продакшена и интересной зрителю.',
      groups: [
        {
          title: 'Живой эфир',
          items: [
            'Обсервлю CS2 и Dota 2 в прямом эфире с учётом интересов зрителя и задач продакшена.',
            'Подстраиваю показ под студийный эфир, LAN и чистый сигнал.',
            'Запускаю cinematic-пролёты и рекламные интеграции в нужный момент.',
          ],
        },
        {
          title: 'Продакшен',
          description:
            'Понимаю, по какому «проводу» идёт сигнал, поэтому быстро нахожу и решаю технические проблемы.',
          items: [
            'Работаю с коаксиальными и SDI кабелями, ATEM и BMD-конвертерами.',
            'Контролирую сигнал и FPS, отслеживаю падения и несоответствия.',
            'Оперативно заменяю кабели, конвертеры или даже ПК и обновляю драйверы.',
            'Собираю и обновляю обсерверные ПК под конкретный турнир и условия путешествий.',
            'Стабилизирую интернет в сложных условиях, в том числе через ExitLag на квалификациях.',
          ],
        },
        {
          title: 'Команда',
          items: [
            'Выстраиваю цепочку «игра → Telegram ChatBot → JSON», чтобы статистика моментально попадала дизайнерам.',
            'Готовлю и устанавливаю конфиги для кастеров и обсерверов, ускоряя их подготовку.',
            'Расширяю рабочее место обсервера и делюсь картами биндов, включая редкие комбинации.',
            'Обучаю новых обсерверов, объясняю логику и делюсь рабочими процессами.',
          ],
        },
      ],
    },
    tools: {
      title: '6. Софт и инструменты',
      groups: [
        {
          title: 'Игровые и обсерверные',
          items: ['HLAE', 'Custom HUD / MyHUD / BoltObserv', 'Конфиги для CS2 и Dota 2', 'AutoHotkey (автоматизация)'],
        },
        {
          title: 'Продакшен',
          items: ['OBS — настраиваю сцены, источники и вывод', 'vMix — собираю сцены и подключаю фиды', 'ATEM Mini', 'Stream Deck', 'BMD Converter HDMI↔SDI'],
        },
        {
          title: 'Разработка и сервисы',
          items: ['Python (простые скрипты и доставка статистики)', 'VS Code'],
        },
      ],
    },
    portfolio: {
      title: '7. Ключевые трансляции',
      toggle: {
        expand: 'Показать больше трансляций',
        collapse: 'Скрыть трансляции',
      },
      items: [
        {
          title: 'BetBoom Dacha Dubai 2024',
          description:
            'Вёл CS2 и Dota 2, готовил cinematic-пролёты и держал рекламные интеграции по расписанию.',
          mediaType: 'image',
          src: 'https://images.unsplash.com/photo-1526404079167-7a174eea6b52?auto=format&fit=crop&w=900&q=80',
          alt: 'Сцена турнира с подсветкой',
        },
        {
          title: 'Riyadh Masters 2024',
          description:
            'Обеспечивал чистые фиды для международного эфира и адаптировал показ под несколько языков.',
          mediaType: 'image',
          src: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=900&q=80',
          alt: 'Команда на сцене турнира',
        },
        {
          title: 'Elite League Season 2',
          description:
            'Организовал удалённый сетап с кастомными бинд-картами и моментальной доставкой статистики дизайнерам.',
          mediaType: 'image',
          src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
          alt: 'Пульт продакшена',
        },
      ],
    },
    logos: {
      title: '8. Партнёры и турниры',
      items: [
        {
          href: 'https://fissure.pro',
          src: 'https://dummyimage.com/160x60/1a1a1a/ffffff&text=FISSURE',
          alt: 'Логотип FISSURE.pro',
        },
        {
          href: 'https://betboomdacha.com',
          src: 'https://dummyimage.com/160x60/1a1a1a/ffffff&text=BetBoom',
          alt: 'Логотип BetBoom Dacha',
        },
        {
          href: 'https://www.dota2.com',
          src: 'https://dummyimage.com/160x60/1a1a1a/ffffff&text=Dota+2',
          alt: 'Логотип Dota 2',
        },
        {
          href: 'https://www.counter-strike.net/cs2',
          src: 'https://dummyimage.com/160x60/1a1a1a/ffffff&text=CS2',
          alt: 'Логотип Counter-Strike 2',
        },
      ],
    },
    links: {
      title: '9. Ссылки',
      items: [
        {
          label: 'LinkedIn',
          value: 'https://www.linkedin.com/in/nikita-lakoza-98a339275',
          href: 'https://www.linkedin.com/in/nikita-lakoza-98a339275',
        },
        {
          label: 'Liquipedia (Counter-Strike)',
          value: 'https://liquipedia.net/counterstrike/Rollen',
          href: 'https://liquipedia.net/counterstrike/Rollen',
        },
        {
          label: 'Liquipedia (Dota 2)',
          value: 'https://liquipedia.net/dota2/Rollen',
          href: 'https://liquipedia.net/dota2/Rollen',
        },
        {
          label: 'Email',
          value: 'csgo481@gmail.com',
          href: 'mailto:csgo481@gmail.com',
        },
      ],
    },
    shortVersion: {
      title: '10. Краткая версия',
      description:
        'Observer / Production Staff по CS2 и Dota 2. С 2023 года работаю на турнирах FISSURE и BetBoom, включая TI qualifiers, Elite League и Riyadh Masters. Делаю эксклюзивные cinematic-пролёты, отдаю Clean Feed, настраиваю OBS и vMix, подключаюсь к продакшен-сетке и отправляю статистику в GFX. Единственный задокументированный notable observer на Liquipedia по CS и Dota 2. Белград, готов к выездам.',
    },
    footer: {
      note: 'Если нужно, могу подготовить эту структуру в JSON/Markdown для автоматического импорта на сайт.',
      pdfLink: null as { label: string; href: string } | null,
    },
  },
}

export default ru
