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
      name: 'Никита Лакоза',
      headline: 'Frontend-инженер, ориентированный на продукт',
      detailsLabel: 'Профессиональные сведения',
      details: [
        {
          label: 'Локация',
          value: 'Берлин, Германия',
        },
        {
          label: 'Доступность',
          value: 'Открыт к релокации и удалённой работе',
        },
      ],
    },
    contact: {
      title: 'Контакты',
      items: [
        {
          label: 'Email',
          value: 'hello@nikitalakoza.dev',
          href: 'mailto:hello@nikitalakoza.dev',
          icon: 'alternate_email',
        },
        {
          label: 'Телефон',
          value: '+49 000 0000000',
          href: 'tel:+490000000000',
          icon: 'call',
        },
        {
          label: 'Портфолио',
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
      title: 'О себе',
      description:
        'Frontend-инженер, создающий устойчивые дизайн-системы и продукты с измеримым влиянием. Формирует базу CV, которая легко адаптируется для разных ролей, языков и каналов доставки',
      tldr: {
        title: 'TLDR',
        items: [
          {
            title: 'Лид дизайн-систем',
            description:
              'Веду модульные интерфейсные потоки и закладываю доступность и локализацию с первого спринта',
          },
          {
            title: 'Продуктовый стратег',
            description: 'Связываю эксперименты с аналитикой, чтобы проверять гипотезы о CV быстрее',
          },
          {
            title: 'Партнёр по поставке',
            description:
              'Создаю защитные полосы для контент-, дизайн- и инженеринговых команд, чтобы релизы оставались быстрыми без регрессий',
          },
        ],
      },
      about: {
        title: 'Обо мне',
        paragraphs: [
          'Фасилитатор между продуктом, дизайном и разработкой — собираю истории команды в цельный нарратив резюме',
          'Помогаю масштабировать библиотеки компонентов, сохраняя измеримость, доступность и простоту развития',
        ],
        highlight: 'Убеждён, что ясная архитектура контента ускоряет продуктовые ставки и укрепляет эмпатию',
      },
    },
    experience: {
      title: 'Опыт',
      items: [
        {
          company: 'CV Base Platform',
          role: 'Ведущий фронтенд-инженер',
          period: '2023 — наст. время',
          location: 'Удалённо',
          description:
            'Руководство созданием модульной экосистемы резюме с переиспользуемыми блоками и высоким уровнем доступности.',
          achievements: [
            'Запустил процесс локализации, позволяющий создавать многоязычные CV за считанные минуты.',
            'Реализовал библиотеку семантических макетов, оптимизированную под экспорт в PDF и адаптивное отображение.',
            'Настроил систему темизации с автоопределением светлой/тёмной темы и контролем контрастности.',
          ],
        },
        {
          company: 'Product Studio',
          role: 'Старший фронтенд-инженер',
          period: '2020 — 2023',
          location: 'Берлин, Германия',
          description:
            'Создавал продуктовые интерфейсы для направлений роста, онбординга и аналитики.',
          achievements: [
            'Масштабировал библиотеку компонентов, сократив time-to-market новых направлений на 35%.',
            'Согласовал цели по доступности между кросс-функциональными командами.',
          ],
        },
      ],
    },
    events: {
      title: 'Турниры и события',
      items: [
        {
          title: 'Frontend Masters Challenge',
          role: 'Финалист дизайн-систем',
          period: '2023',
          location: 'Онлайн',
          description:
            'Вживую спроектировал адаптивный макет резюме с упором на прогрессивное улучшение и печатную верстку.',
          link: {
            label: 'Смотреть обзор',
            href: 'https://frontendmasters.com/workshops/',
          },
        },
        {
          title: 'CSS Camp Barcelona',
          role: 'Докладчик и ментор',
          period: '2022',
          location: 'Барселона, Испания',
          description:
            'Поделился планом запуска локализуемых дизайн-систем и менторил продуктовые команды.',
          link: {
            label: 'Конспект сессии',
            href: 'https://csscamp.tech/',
          },
        },
      ],
    },
    education: {
      title: 'Образование',
      items: [
        {
          institution: 'Университет ИТМО',
          degree: 'Бакалавр информатики',
          period: '2016 — 2020',
          location: 'Санкт-Петербург, Россия',
        },
      ],
    },
    skills: {
      title: 'Навыки',
      groups: [
        {
          title: 'Технические',
          items: [
            'Архитектура на React и TypeScript',
            'Дизайн-системы и доступность',
            'Оптимизация производительности',
            'Автоматизация тестирования',
          ],
        },
        {
          title: 'Гибкие',
          items: ['Фасилитация продуктовых дискавери', 'Менторство и коучинг', 'Согласование со стейкхолдерами'],
        },
      ],
    },
    tools: {
      title: 'Софт и инструменты',
      groups: [
        {
          title: 'Интерфейсы',
          items: ['Figma', 'Storybook', 'Framer', 'Motion Canvas'],
        },
        {
          title: 'Качество и поставка',
          items: ['Playwright', 'Vitest', 'Chromatic', 'Lighthouse CI'],
        },
        {
          title: 'Совместная работа',
          items: ['Linear', 'Notion', 'Miro', 'Confluence'],
        },
      ],
    },
    portfolio: {
      title: 'Портфолио',
      toggle: {
        expand: 'Показать портфолио',
        collapse: 'Скрыть портфолио',
      },
      items: [
        {
          title: 'Интерактивный CV-конструктор',
          description:
            'Редактор с лайв-просмотром локализаций и автоматическими проверками доступности.',
          mediaType: 'video',
          src: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4',
          poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Workbench дизайн-системы',
          description:
            'Рабочая зона на базе Storybook с токенами, аналитикой и журналом изменений.',
          mediaType: 'image',
          src: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80',
          alt: 'Экраны рабочей зоны дизайн-системы с компонентами и документацией.',
        },
        {
          title: 'Автономный PDF-конвейер',
          description: 'Пайплайн для единообразного экспорта PDF и брендовых версий.',
          mediaType: 'image',
          src: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80',
          alt: 'Схема конвейера PDF с воркерами и очередями.',
        },
        {
          title: 'Хаб исследований',
          description:
            'Внутренний портал, связывающий юзабилити-исследования с токенами и использованием компонентов.',
          mediaType: 'image',
          src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
          alt: 'Дашборд с исследованиями и заметками для команд.',
        },
      ],
    },
    logos: {
      title: 'Партнёрства',
      items: [
        {
          alt: 'Логотип Delivery Hero',
          href: 'https://www.deliveryhero.com/',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Delivery_Hero_logo.svg/512px-Delivery_Hero_logo.svg.png',
        },
        {
          alt: 'Логотип N26',
          href: 'https://n26.com/',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/N26_logo.svg/512px-N26_logo.svg.png',
        },
        {
          alt: 'Логотип SoundCloud',
          href: 'https://soundcloud.com/',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/SoundCloud_logo.svg/512px-SoundCloud_logo.svg.png',
        },
        {
          alt: 'Логотип Zalando',
          href: 'https://corporate.zalando.com/en',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Zalando_logo.svg/512px-Zalando_logo.svg.png',
        },
        {
          alt: 'Логотип Delivery Club',
          href: 'https://delivery-club.ru/',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Delivery_Club_logo.svg/512px-Delivery_Club_logo.svg.png',
        },
        {
          alt: 'Логотип Product Hunt',
          href: 'https://www.producthunt.com/',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Product_Hunt_logo.svg/512px-Product_Hunt_logo.svg.png',
        },
      ],
    },
    footer: {
      note: 'Этот шаблон готов к локализации, интеграции экспорта в PDF и будущим специализациям',
      pdfLink: {
        label: 'Скачать PDF на русском',
        href: '/pdf/ru/nikita-lakoza.pdf',
      },
    },
  },
}

export default ru
