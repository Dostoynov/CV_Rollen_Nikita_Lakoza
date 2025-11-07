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
        'Frontend-инженер, создающий устойчивые дизайн-системы и продукты с измеримым влиянием. Формирует базу CV, которая легко адаптируется для разных ролей, языков и каналов доставки.',
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
    footer: {
      note: 'Этот шаблон готов к локализации, интеграции экспорта в PDF и будущим специализациям.',
      pdfLink: {
        label: 'Скачать PDF на русском',
        href: '/pdf/ru/nikita-lakoza.pdf',
      },
    },
  },
}

export default ru
