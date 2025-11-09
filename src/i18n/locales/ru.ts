import { tournamentCategories } from '../../data/tournaments'
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
    backToTop: 'Наверх',
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
      headline: 'Freelance Counter-Strike и Dota 2 Observer / Esports',
      detailsLabel: 'Профессиональные сведения',
      details: [
        {
          label: 'Локация',
          value: 'Белград, Сербия — готов к командировкам и релокации',
        },
        {
          label: 'Дисциплины',
          value: 'Counter-Strike 2 и Dota 2',
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
          value: 'Никита Лакоза',
          href: 'https://www.linkedin.com/in/nikita-lakoza-98a339275',
          icon: 'handshake',
        },
        {
          label: 'Liquipedia (Counter-Strike)',
          value: 'Профиль по Counter-Strike',
          href: 'https://liquipedia.net/counterstrike/Rollen',
          icon: 'travel_explore',
        },
        {
          label: 'Liquipedia (Dota 2)',
          value: 'Профиль по Dota 2',
          href: 'https://liquipedia.net/dota2/Rollen',
          icon: 'travel_explore',
        },
      ],
    },
    summary: {
      title: 'Обо мне',
      description:
        'Я Никита «Rollen» Лакоза — observer по дисциплинам Counter-Strike 2 и Dota 2. С февраля 2023 года работал на турнирах FISSURE и BetBoom, в том числе на отборочных к The International и крупных коммерческих лигах (Elite League, Riyadh Masters, BetBoom Dacha).',
      note: 'Базируюсь в Белграде, готов к командировкам, работе на выездных ивентах и релокации',
      tldr: {
        title: 'TLDR',
        items: [
          {
            title: 'Турнирный observer',
            description: 'Делаю чистую и зрелищную картинку для чемпионатов по CS2 и Dota 2',
          },
          {
            title: 'Опыт в live-продакшене',
            description: 'Настраиваю ПК, пролёты, оверлеи и чистые фиды под требования трансляции',
          },
          {
            title: 'Помогаю команде',
            description: 'Выстраиваю процессы, обучаю обсерверов и делюсь готовыми конфигами и биндами',
          },
        ],
      },
      about: {
        title: 'Чем занимаюсь',
        paragraphs: [
          'Моя зона ответственности — сделать так, чтобы игровая картинка была понятна зрителю: решаю, кого показывать, когда запускать cinematic-пролёт, в какой момент вывести рекламу и что стоит показать на повторе',
        ],
        listTitle: 'Я умею',
        list: [
          'обсервить матч в прямом эфире с максимально интересным наполнением',
          'подготавливать эксклюзивные cinematic-пролёты под конкретный турнир',
          'отдавать SRT или YouTube Clean Feed',
          'настраивать игру и NVIDIA под требования трансляции',
          'работать с OBS и собирать сцены во vMix',
          'работать с продакшен-оборудованием (SDI/коаксиал, ATEM, BMD-конвертеры)',
          'обучать других обсерверов и передавать им готовые конфиги и бинды',
        ],
        highlight: 'Являюсь единственным задокументированным notable-observer на Liquipedia по Counter-Strike и Dota 2',
        note: '',
      },
    },
    experience: {
      title: 'Опыт',
      items: [
        {
          role: 'Observer',
          company: 'FISSURE.pro',
          period: 'февраль 2023 — наст. время',
          location: 'Дубай · Ереван · Белград (гибрид)',
          description: 'Обсервлю турниры по CS2 и Dota 2, закрывая задачи трансляции и продакшена',
          achievements: [
            'Обсервлю CS2 и Dota 2 в прямом эфире с учётом интересов зрителя и задач продакшена',
            'Подстраиваю сетап под студийный эфир или LAN-турнир',
            'Подготавливаю и запускаю cinematic-пролёты и рекламные интеграции',
            'Отдаю Clean Feed игры напрямую режиссёру трансляции',
            'Настраиваю графику и параметры NVIDIA, чтобы игра оставалась сочной',
            'Делаю связку «игра → Telegram ChatBot → JSON» для моментальной отправки статистики дизайнерам прямого эфира',
            'Помогаю комментаторам с установкой конфигов для обеих дисциплин',
            'Закрываю ивент в одного обсервера, если это необходимо, и работаю длинные смены',
            'Занимаюсь диагностикой и сборкой обсерверных ПК, включая аренду и закупку оборудования',
          ],
        },
      ],
    },
    events: {
      title: 'Турниры и события',
      intro: 'За время работы участвовал в трансляциях следующих турниров',
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
      title: 'Обучение и наставничество',
      items: [
        {
          degree: 'Наставил двух обсерверов до уровня Tier 1 по Dota 2 и CS2',
          institution: 'Внутренняя академия FISSURE.pro',
          period: '2023; 2024',
          location: 'Удалённо и на площадке',
          description: 'Руководил и участвовал в создании карт биндов и конфигов, чтобы коллеги могли воспроизвести мой сетап самостоятельно',
        },
        {
          degree: 'Усиление рабочего пространства обсервера',
          institution: 'Команда трансляций FISSURE.pro',
          period: '2023; 2024; 2025',
          location: 'Дубай · Ереван · Белград',
          description: 'Настроил сетап обсервера: мониторы, гарнитуры и софт. Это упростило команде жизнь, улучшило качество эфира кратно',
        },
      ],
    },
    skills: {
      title: 'Функции и вклад',
      note: 'Делаю трансляцию лучшей для продакшена и интересной зрителям',
      groups: [
        {
          title: 'Прямой эфир',
          items: [
            'Обсервлю CS2 и Dota 2 в прямом эфире с учётом интересов зрителя и задач продакшена',
            'Подстраиваю сетап под студийный эфир или LAN-турнир',
            'Запускаю cinematic-пролёты и рекламные интеграции в нужный момент',
            'Слежу за тем, чтобы игра оставалась сочной и интересной зрителям',
          ],
        },
        {
          title: 'Продакшен',
          items: [
            'Понимаю, по какому «проводу» идёт сигнал, поэтому быстро нахожу и решаю технические проблемы',
            'Работаю с коаксиальными и SDI кабелями, ATEM и BMD-конвертерами',
            'Контролирую сигнал и FPS, отслеживаю падения и несоответствия',
            'Оперативно заменяю кабели, конвертеры или даже ПК и обновляю драйверы',
            'Собираю и обновляю обсерверные ПК под конкретный турнир и условия путешествий',
            'Стабилизирую интернет в сложных условиях, в том числе через ExitLag на квалификациях',
          ],
        },
        {
          title: 'Команда',
          items: [
            'Выстраиваю цепочку «игра → Telegram ChatBot → JSON», чтобы статистика моментально попадала дизайнерам',
            'Готовлю и устанавливаю конфиги для кастеров и обсерверов, ускоряя их подготовку',
            'Расширяю рабочее место обсервера и делюсь картами биндов, включая редкие комбинации',
            'Обучаю новых обсерверов, объясняю логику и делюсь рабочими процессами',
          ],
        },
      ],
    },
    tools: {
      title: 'Софт и инструменты',
      groups: [
        {
          title: 'Игровые и обсерверные',
          items: ['HLAE', 'Custom HUD / MyHUD / BoltObserv', 'Конфиги для CS2 и Dota 2', 'AutoHotkey (автоматизация)', 'ExitLag'],
        },
        {
          title: 'Продакшен',
          items: ['Companion - контроль и автоматизация','OBS — настраиваю сцены, источники и вывод', 'vMix — собираю сцены и подключаю фиды', 'ATEM Mini', 'Stream Deck', 'BMD Converter HDMI↔SDI'],
        },
        {
          title: 'Разработка и сервисы',
          items: ['Cursor - код и AI', 'Python - простые скрипты и доставка статистики'],
        },
      ],
    },
    portfolio: {
      title: 'Хайлайты',
      toggle: {
        expand: 'Показать больше хайлайтов',
        collapse: 'Скрыть хайлайты',
      },
      items: [
        {
          title: 'Команда, которая зажигает сцену',
          description:
            'Лучшие эмоции после турнира',
          mediaType: 'image',
          src: '/highlights/team.jpg',
          alt: 'Команда наблюдателей празднует на сцене арены',
        },
      ],
    },
    logos: {
      title: 'Партнёры и турниры',
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
          src: '/logos/fissure.png',
          alt: 'FISSURE.pro logo',
        },
      ],
    },
    footer: {
      note: 'Буду рад обсудить ваш следующий эфир — пишите в любое время',
      pdfLink: null as { label: string; href: string } | null,
    },
  },
}

export default ru
