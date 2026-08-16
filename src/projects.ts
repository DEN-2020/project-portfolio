import asistApiImg1 from './assets/screenshots/asist-api-1.png';
import asistApiImg2 from './assets/screenshots/asist-api-2.png';
import asistApiImg3 from './assets/screenshots/asist-api-3.png';
import btcusdtImg from './assets/screenshots/btcusdt-research.svg';
import calcEnImg from './assets/screenshots/calc-en.png';
import calcRuImg from './assets/screenshots/calc-ru.png';
import carCalcImg from './assets/screenshots/car-calc.png';
import hunyuan3dImg from './assets/screenshots/hunyuan3d.svg';
import kidsTrackerEn1 from './assets/screenshots/kids-tracker-en-1.png';
import kidsTrackerEn2 from './assets/screenshots/kids-tracker-en-2.png';
import kidsTrackerEn3 from './assets/screenshots/kids-tracker-en-3.png';
import marketplaceEn1 from './assets/screenshots/marketplace-en-1.png';
import marketplaceEn2 from './assets/screenshots/marketplace-en-2.png';
import marketplaceEn3 from './assets/screenshots/marketplace-en-3.png';
import marketplaceRu1 from './assets/screenshots/marketplace-ru-1.png';
import marketplaceRu2 from './assets/screenshots/marketplace-ru-2.png';
import marketplaceRu3 from './assets/screenshots/marketplace-ru-3.png';
import nabioraCommunityEn1 from './assets/screenshots/nabiora-community-en-1.png';
import nabioraCommunityEn2 from './assets/screenshots/nabiora-community-en-2.png';
import nabioraCommunityEn3 from './assets/screenshots/nabiora-community-en-3.png';
import nabioraCommunityRu1 from './assets/screenshots/nabiora-community-ru-1.png';
import nabioraCommunityRu2 from './assets/screenshots/nabiora-community-ru-2.png';
import nabioraCommunityRu3 from './assets/screenshots/nabiora-community-ru-3.png';
import nabioraRealestateEn1 from './assets/screenshots/nabiora-realestate-en-1.png';
import nabioraRealestateEn2 from './assets/screenshots/nabiora-realestate-en-2.png';
import nabioraRealestateEn3 from './assets/screenshots/nabiora-realestate-en-3.png';
import nabioraRealestateRu1 from './assets/screenshots/nabiora-realestate-ru-1.png';
import nabioraRealestateRu2 from './assets/screenshots/nabiora-realestate-ru-2.png';
import nabioraRealestateRu3 from './assets/screenshots/nabiora-realestate-ru-3.png';
import nightvoiceImg from './assets/screenshots/nightvoice.png';
import nizamPortalEn1 from './assets/screenshots/nizam-portal-en-1.png';
import nizamPortalEn2 from './assets/screenshots/nizam-portal-en-2.png';
import nizamPortalEn3 from './assets/screenshots/nizam-portal-en-3.png';
import nizamPortalRu1 from './assets/screenshots/nizam-portal-ru-1.png';
import nizamPortalRu2 from './assets/screenshots/nizam-portal-ru-2.png';
import nizamPortalRu3 from './assets/screenshots/nizam-portal-ru-3.png';
import profitCalcImg from './assets/screenshots/profit-calc.png';
import robloxSpace1 from './assets/screenshots/roblox-space-1.png';
import robloxSpace2 from './assets/screenshots/roblox-space-2.png';
import robloxSpace3 from './assets/screenshots/roblox-space-3.png';
import secondImg1 from './assets/screenshots/second-1.png';
import secondImg2 from './assets/screenshots/second-2.png';
import secondImg3 from './assets/screenshots/second-3.png';
import tvImg from './assets/screenshots/tv.svg';
import videogenEn1 from './assets/screenshots/videogen-en-1.png';
import videogenEn2 from './assets/screenshots/videogen-en-2.png';
import videogenEn3 from './assets/screenshots/videogen-en-3.png';
import volumepilotSiteImg from './assets/screenshots/volumepilot-site.png';
import volumepilotImg from './assets/screenshots/volumepilot.png';
import vpnProxyImg from './assets/screenshots/vpn-proxy.svg';

export type Language = 'ru' | 'en';
export type DemoStatus = 'live' | 'source' | 'preparing' | 'internal' | 'ready';
export type ProjectType = 'app' | 'site' | 'calculator' | 'tooling' | 'game' | 'pipeline' | 'ecosystem';
export type ProjectVisibility = 'public' | 'private' | 'local-only';
export type ProjectCategory =
  | 'web-platforms'
  | 'calculators'
  | 'audio-media'
  | 'mobile-apps'
  | 'ai-3d-gamedev'
  | 'research-infra';

export interface CategoryInfo {
  id: ProjectCategory;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  icon: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'web-platforms',
    title: {
      en: 'Web Platforms & Ecosystems',
      ru: 'Веб-платформы и сервисы',
    },
    subtitle: {
      en: 'Full-stack multi-language marketplaces, community portals, and business platforms',
      ru: 'Многоязычные маркетплейсы, порталы сообществ и корпоративные платформы',
    },
    icon: 'layout-grid',
  },
  {
    id: 'calculators',
    title: {
      en: 'FinTech & Analytics Calculators',
      ru: 'Финансовые и аналитические калькуляторы',
    },
    subtitle: {
      en: 'PWA suites for trading, spot/perpetuals ROI, and automotive finance models',
      ru: 'PWA-комплексы для криптотрейдинга, спота, фьючерсов и автокредитов',
    },
    icon: 'calculator',
  },
  {
    id: 'audio-media',
    title: {
      en: 'Audio, Video & Media Software',
      ru: 'Аудио, видео и медиа-инструменты',
    },
    subtitle: {
      en: 'Desktop utilities, AI voice stabilization, automated video studios, and streaming scripts',
      ru: 'Десктопные утилиты, стабилизация звука, видеогенерация и медиа-скрипты',
    },
    icon: 'volume-2',
  },
  {
    id: 'mobile-apps',
    title: {
      en: 'Mobile & Productivity Systems',
      ru: 'Мобильная разработка и трекеры',
    },
    subtitle: {
      en: 'Gamified habit trackers, Firebase real-time sync, reward economies, and Android apps',
      ru: 'Геймифицированные трекеры привычек, Firebase Firestore и Android-приложения',
    },
    icon: 'smartphone',
  },
  {
    id: 'ai-3d-gamedev',
    title: {
      en: 'AI, 3D Pipelines & Game Dev',
      ru: 'ИИ, 3D-пайплайны и разработка игр',
    },
    subtitle: {
      en: 'Generative 3D neural mesh pipelines, Blender modeling, and Roblox arcade games',
      ru: 'Генеративные 3D-нейросети, Blender-пайплайны и аркадные игры на Roblox',
    },
    icon: 'sparkles',
  },
  {
    id: 'research-infra',
    title: {
      en: 'Research, AI Agents & Mesh Infra',
      ru: 'Исследования, AI-агенты и сетевая инфраструктура',
    },
    subtitle: {
      en: 'Algorithmic backtesting engines, microservice orchestrators, and private mesh tunnels',
      ru: 'Бэктестинг торговых стратегий, микросервисы AI и сетевые туннели',
    },
    icon: 'cpu',
  },
];

export interface CompanionLink {
  label: Record<Language, string>;
  url?: string;
  type: 'app' | 'site' | 'admin' | 'android' | 'repo';
  note?: Record<Language, string>;
}

export interface Project {
  slug: string;
  name: Record<Language, string>;
  category: ProjectCategory;
  type: ProjectType;
  visibility: ProjectVisibility;
  demoStatus: DemoStatus;
  thumbnail: Record<Language, string>;
  screenshots?: Record<Language, string[]>;
  summary: Record<Language, string>;
  purpose: Record<Language, string>;
  features: Record<Language, string[]>;
  technicalNotes: Record<Language, string[]>;
  stack: string[];
  outcomes: Record<Language, string[]>;
  repo?: string;
  githubUrl?: string;
  siteUrl?: string;
  companion?: CompanionLink;
  badge?: Record<Language, string>;
}

export const projects: Project[] = [
  // 1. Web Platforms & Ecosystems
  {
    slug: 'nabiora-marketplace',
    name: {
      en: 'Nabiora Marketplace',
      ru: 'Nabiora Marketplace (Хургада)',
    },
    category: 'web-platforms',
    type: 'ecosystem',
    visibility: 'public',
    demoStatus: 'live',
    thumbnail: {
      en: marketplaceEn1,
      ru: marketplaceRu1,
    },
    screenshots: {
      en: [marketplaceEn1, marketplaceEn2, marketplaceEn3],
      ru: [marketplaceRu1, marketplaceRu2, marketplaceRu3],
    },
    badge: {
      en: 'Live Marketplace',
      ru: 'Работает онлайн',
    },
    siteUrl: 'https://nabiora.com/en/egypt',
    companion: {
      label: {
        en: 'Dedicated Admin Dashboard',
        ru: 'Панель администратора',
      },
      type: 'admin',
      note: {
        en: 'Separate role-based moderation and analytics portal',
        ru: 'Отдельный портал модерации и аналитики',
      },
    },
    summary: {
      en: 'Multilingual classifieds marketplace for goods, real estate, vehicles, jobs, services, and local businesses in Egypt.',
      ru: 'Многоязычный маркетплейс объявлений для товаров, недвижимости, транспорта, услуг, работы и локального бизнеса в Египте.',
    },
    purpose: {
      en: 'A production marketplace for the Hurghada and Red Sea region with geographic and category routes, listings, search, moderation, messaging, and Russian, English, and Arabic interfaces.',
      ru: 'Рабочий маркетплейс для Хургады и региона Красного моря с географическими и категорийными маршрутами, объявлениями, поиском, модерацией, сообщениями и интерфейсами на русском, английском и арабском языках.',
    },
    features: {
      en: [
        'Tri-lingual localized catalog (RU / EN / AR) with full bidirectional RTL/LTR layout rendering.',
        'Structured vertical categories: Real Estate, Auto/Marine, Electronics, Jobs, and Verified Services.',
        'Listing lifecycle management covering moderation, revisions, expiry, renewal, archive, favorites, and messages.',
        'Responsive image variants and private-media handling backed by Supabase Storage when production data mode is enabled.',
        'Installable PWA shell with a service worker and controlled caching strategy.',
      ],
      ru: [
        'Трехъязычный локализованный каталог (RU / EN / AR) с поддержкой RTL/LTR-интерфейса.',
        'Структурированные категории: Недвижимость, Авто/Яхты, Электроника, Вакансии и Проверенные услуги.',
        'Жизненный цикл объявлений: модерация, правки, срок действия, продление, архив, избранное и сообщения.',
        'Адаптивные варианты изображений и приватные медиа через Supabase Storage при включённом production-режиме данных.',
        'Устанавливаемая PWA-оболочка с service worker и контролируемой стратегией кэширования.',
      ],
    },
    technicalNotes: {
      en: [
        'Next.js 16 App Router and React 19 with Server Components, TypeScript, Tailwind CSS 4, and Zod validation.',
        'OpenNext deployment target for Cloudflare Workers; Supabase provides PostgreSQL, Auth, Storage, and RLS in production data mode.',
        'The application also runs safely against mock data when production backend variables are not configured.',
      ],
      ru: [
        'Next.js 16 App Router и React 19 с Server Components, TypeScript, Tailwind CSS 4 и валидацией Zod.',
        'Целевой деплой через OpenNext на Cloudflare Workers; в production-режиме Supabase предоставляет PostgreSQL, Auth, Storage и RLS.',
        'Без настроенного production-бэкенда приложение безопасно работает на демонстрационных данных.',
      ],
    },
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Supabase', 'Cloudflare Workers', 'PWA'],
    outcomes: {
      en: [
        'Public marketplace routes are live for Egypt with RU, EN, and AR localization.',
        'Production and mock data modes are separated so local development does not require access to production services.',
      ],
      ru: [
        'Публичные маршруты маркетплейса для Египта работают с локализацией RU, EN и AR.',
        'Production- и mock-режимы данных разделены: локальная разработка не требует доступа к боевым сервисам.',
      ],
    },
  },

  {
    slug: 'nabiora-community',
    name: {
      en: 'Nabiora Community Portal',
      ru: 'Nabiora Community (Инфо-портал)',
    },
    category: 'web-platforms',
    type: 'site',
    visibility: 'public',
    demoStatus: 'live',
    thumbnail: {
      en: nabioraCommunityEn1,
      ru: nabioraCommunityRu1,
    },
    screenshots: {
      en: [nabioraCommunityEn1, nabioraCommunityEn2, nabioraCommunityEn3],
      ru: [nabioraCommunityRu1, nabioraCommunityRu2, nabioraCommunityRu3],
    },
    badge: {
      en: 'Live Portal',
      ru: 'Работает онлайн',
    },
    siteUrl: 'https://community.nabiora.com/en',
    summary: {
      en: 'SSR community portal for Egypt with a moderated forum, multilingual guides, directory foundations, and practical city tools.',
      ru: 'SSR-портал сообщества в Египте с модерируемым форумом, многоязычными гайдами, основой каталога и городскими инструментами.',
    },
    purpose: {
      en: 'A standalone community service for community.nabiora.com. It combines server-rendered forum routes, Markdown/MDX guides, profile onboarding, moderation, and weather/currency tool pages.',
      ru: 'Самостоятельный сервис для community.nabiora.com: серверный форум, Markdown/MDX-гайды, онбординг профилей, модерация и страницы инструментов погоды и валют.',
    },
    features: {
      en: [
        'Moderated forum with published, pending, hidden, and locked content states enforced by RLS.',
        'Markdown/MDX guide collection and stable multilingual routes in RU, EN, and AR with RTL support.',
        'Profile onboarding with user-selected public names and safe avatar options.',
        'Server-side weather and currency tools with public snapshot refresh jobs.',
      ],
      ru: [
        'Модерируемый форум со статусами published, pending, hidden и locked, которые контролируются через RLS.',
        'Коллекция Markdown/MDX-гайдов и стабильные маршруты RU, EN и AR с поддержкой RTL.',
        'Онбординг профиля с выбранным пользователем публичным именем и безопасными вариантами аватара.',
        'Серверные инструменты погоды и валют с обновлением публичных снимков по расписанию.',
      ],
    },
    technicalNotes: {
      en: [
        'Astro 7 SSR with strict TypeScript and the Cloudflare adapter; React is limited to interactive islands.',
        'Supabase Database and Auth with role checks, RPC-based moderation, and row-level security.',
        'The current scope intentionally excludes chat, ratings, realtime, file uploads, and notifications.',
      ],
      ru: [
        'Astro 7 SSR со строгим TypeScript и Cloudflare-адаптером; React используется только для интерактивных островов.',
        'Supabase Database и Auth с проверкой ролей, RPC-модерацией и Row Level Security.',
        'Текущий scope намеренно не включает чат, рейтинги, realtime, загрузку файлов и уведомления.',
      ],
    },
    stack: ['Astro 7', 'React 19', 'TypeScript', 'Supabase', 'Cloudflare Workers', 'SSR', 'i18n (AR/EN/RU)'],
    outcomes: {
      en: [
        'Delivered a self-contained community portal with explicit data and authentication boundaries.',
        'Added automated type, build, RLS, integration, and Lighthouse verification workflows.',
      ],
      ru: [
        'Создан самостоятельный портал сообщества с явными границами данных и аутентификации.',
        'Добавлены автоматические проверки типов, сборки, RLS, интеграции и Lighthouse.',
      ],
    },
  },

  {
    slug: 'nabiora-real-estate',
    name: {
      en: 'Nabiora Real Estate Agency',
      ru: 'Nabiora Real Estate (Агентство)',
    },
    category: 'web-platforms',
    type: 'site',
    visibility: 'private',
    demoStatus: 'ready',
    thumbnail: {
      en: nabioraRealestateEn1,
      ru: nabioraRealestateRu1,
    },
    screenshots: {
      en: [nabioraRealestateEn1, nabioraRealestateEn2, nabioraRealestateEn3],
      ru: [nabioraRealestateRu1, nabioraRealestateRu2, nabioraRealestateRu3],
    },
    badge: {
      en: 'Local MVP',
      ru: 'Локальный MVP',
    },
    companion: {
      label: {
        en: 'Integrated CRM & Admin',
        ru: 'Встроенные CRM и админ-панель',
      },
      type: 'admin',
      note: {
        en: 'Property inventory management, lead routing, and price updates',
        ru: 'Управление каталогом недвижимости, лидами и статусами объектов',
      },
    },
    summary: {
      en: 'Local real-estate agency MVP with multilingual property catalog, filters, lead capture, CRM-lite, and an integrated admin area.',
      ru: 'Локальный MVP агентства недвижимости с многоязычным каталогом, фильтрами, сбором лидов, CRM-lite и встроенной админ-панелью.',
    },
    purpose: {
      en: 'A self-contained demonstration system for an agency in Egypt. Public catalog pages and internal workflows run locally against seeded demo data; no production deployment or remote database is connected.',
      ru: 'Самостоятельная демонстрационная система для агентства в Египте. Каталог и внутренние процессы работают локально на тестовых данных; production-деплой и удалённая база не подключены.',
    },
    features: {
      en: [
        'Multi-parameter property search: price range, district, compound, delivery date, bedrooms, and beachfront status.',
        'Property and project pages with responsive galleries and demonstration inventory.',
        'Lead capture connected to a local CRM-lite pipeline with stages, notes, and tasks.',
        'Integrated admin workflows for property CRUD, publishing, and availability management.',
      ],
      ru: [
        'Многокритериальный фильтр: ценовой диапазон, район, застройщик, срок сдачи, спальни и первая линия.',
        'Страницы объектов и проектов с адаптивными галереями и демонстрационным каталогом.',
        'Сбор лидов во встроенную локальную CRM-lite с этапами, заметками и задачами.',
        'Админ-процессы для CRUD объектов, публикации и управления доступностью.',
      ],
    },
    technicalNotes: {
      en: [
        'Astro 7 SSR, React 19, TypeScript, Tailwind CSS 4, and a local Cloudflare D1 database through Wrangler/Miniflare.',
        'Authentication is intentionally absent in demo mode; the admin route must not be exposed until real authentication is implemented.',
        'Search indexing is disabled and every seeded record is explicitly marked as demonstration data.',
      ],
      ru: [
        'Astro 7 SSR, React 19, TypeScript, Tailwind CSS 4 и локальная Cloudflare D1 через Wrangler/Miniflare.',
        'В demo-режиме авторизация намеренно отсутствует; админ-маршрут нельзя публиковать до реализации реальной аутентификации.',
        'Индексация отключена, а все начальные записи явно помечены как демонстрационные.',
      ],
    },
    stack: ['Astro 7', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Cloudflare D1', 'Vitest'],
    outcomes: {
      en: [
        'Built and verified a complete local MVP without connecting demo data to production infrastructure.',
        'Separated public catalog, admin workflows, and CRM-lite responsibilities inside one repository.',
      ],
      ru: [
        'Собран и проверен полноценный локальный MVP без подключения демонстрационных данных к production-инфраструктуре.',
        'Публичный каталог, админ-процессы и CRM-lite разделены внутри одного репозитория.',
      ],
    },
  },

  {
    slug: 'nizam-al-tayyibat',
    name: {
      en: 'Nizam Al-Tayyibat Health Portal',
      ru: 'Низам Аль-Тайибат (Здоровье)',
    },
    category: 'web-platforms',
    type: 'site',
    visibility: 'public',
    demoStatus: 'live',
    thumbnail: {
      en: nizamPortalEn1,
      ru: nizamPortalRu1,
    },
    screenshots: {
      en: [nizamPortalEn1, nizamPortalEn2, nizamPortalEn3],
      ru: [nizamPortalRu1, nizamPortalRu2, nizamPortalRu3],
    },
    badge: {
      en: 'Live Health Portal',
      ru: 'Работает онлайн',
    },
    siteUrl: 'https://verdant-dusk-c3c590.netlify.app/',
    summary: {
      en: 'Interactive informational wellness portal with nutrition content, recipe tools, onboarding, and responsive reading interfaces.',
      ru: 'Интерактивный информационный wellness-портал с материалами о питании, рецептами, онбордингом и адаптивным интерфейсом чтения.',
    },
    purpose: {
      en: 'A content-focused prototype that organizes nutrition and lifestyle materials into structured guides and interactive tools. Its content is informational and is not a substitute for medical advice.',
      ru: 'Контентный прототип, который организует материалы о питании и образе жизни в виде гайдов и интерактивных инструментов. Материалы носят информационный характер и не заменяют медицинскую консультацию.',
    },
    features: {
      en: [
        'Interactive nutrition and ingredient catalog with search and tag filtering.',
        'Adaptive reading mode with customizable typography, dark/light themes, and progress indicators.',
        'Dietary phase planner and interactive plate constructor.',
        'Automated bookmarking system utilizing localStorage for offline recipe and article saving.',
      ],
      ru: [
        'Интерактивный каталог продуктов и ингредиентов с поиском и фильтрами.',
        'Режим комфортного чтения с адаптивной типографикой, темной темой и индикатором прогресса.',
        'Планировщик этапов питания и интерактивный конструктор тарелки.',
        'Система сохранения избранных статей и рецептов в локальное хранилище браузера.',
      ],
    },
    technicalNotes: {
      en: [
        'Built with React, TypeScript, Tailwind CSS, Lucide icons, and modern responsive flex/grid layouts.',
        'Client-side navigation and filtering across structured informational sections.',
        'The current public demo is deployed on Netlify; its source repository remains private.',
      ],
      ru: [
        'Стек: React, TypeScript, Tailwind CSS, Lucide Icons и адаптивная верстка.',
        'Клиентская навигация и фильтрация по структурированным информационным разделам.',
        'Текущая публичная демо-версия размещена на Netlify; репозиторий исходников остаётся закрытым.',
      ],
    },
    stack: ['React 19', 'TypeScript', 'Vite 6', 'Tailwind CSS 4', 'Responsive UI'],
    outcomes: {
      en: [
        'Delivered a responsive public prototype with reusable content and interactive tool components.',
      ],
      ru: [
        'Создан адаптивный публичный прототип с переиспользуемыми контентными и интерактивными компонентами.',
      ],
    },
  },

  {
    slug: 'second-coworking',
    name: {
      en: 'Second (Smart Coworking & Space ERP)',
      ru: 'Second (Коворкинг & ERP недвижимости)',
    },
    category: 'web-platforms',
    type: 'app',
    visibility: 'private',
    demoStatus: 'ready',
    thumbnail: {
      en: secondImg1,
      ru: secondImg1,
    },
    screenshots: {
      en: [secondImg1, secondImg2, secondImg3],
      ru: [secondImg1, secondImg2, secondImg3],
    },
    badge: {
      en: 'Enterprise React 19 ERP',
      ru: 'ERP на React 19 & Vite',
    },
    summary: {
      en: 'Commercial space management ERP with interactive SVG floor plan zoning, real-time occupancy scheduling, financial forecasting, and tenant partner portals.',
      ru: 'ERP-система управления коммерческими пространствами и коворкингами: интерактивная карта этажей (Floor Plan), календарь занятости, юнит-экономика и кабинет арендатора.',
    },
    purpose: {
      en: 'An enterprise platform designed for coworking hubs, commercial real estate operators, and retail clusters to streamline spatial leasing, booth assignments, cash flow analytics, and CCTV security in a unified multilingual web application.',
      ru: 'Корпоративная веб-платформа для операторов коворкингов, торговых центров и смарт-офисов: автоматизация зонирования помещений, распределение торговых мест (будок), анализ денежных потоков и интеграция с CCTV-камерами.',
    },
    features: {
      en: [
        'Interactive Floor Plan: visual floor mapping, zone partitioning, and trade booth allocation with status badges.',
        'Occupancy Calendar & Booking Engine: real-time lease scheduling, customer check-in, and reservation timelines.',
        'Financial Modeling & Unit Economics: cash flow analysis, income/expense tracking, scenario testing, and PnL reporting.',
        'Partner Portal & CCTV Integration: tenant self-service dashboard, document exchange, and live IP camera monitoring.',
      ],
      ru: [
        'Интерактивная карта этажей (Floor Plan): визуальная разметка зон, закрепление торговых мест и цветовая индикация статусов.',
        'Календарь занятости и бронирование: онлайн-учет аренды, регистрация резидентов и таймлайны использования пространств.',
        'Финансовое моделирование и юнит-экономика: аналитика Cash Flow, учет доходов/расходов, сценарное планирование и PnL-отчеты.',
        'Кабинет партнера и видеонаблюдение: дашборд арендатора, обмен документами и мониторинг потоков с IP-камер.',
      ],
    },
    technicalNotes: {
      en: [
        'Engineered with React 19, TypeScript, Vite, Tailwind CSS v4, Zustand state management, and Oxlint.',
        'Data visualization built with Recharts, form validation via Zod, and full internationalization (i18next).',
      ],
      ru: [
        'Стек: React 19, TypeScript, Vite, Tailwind CSS v4, стейт-менеджер Zustand и линтер Oxlint.',
        'Графика и аналитика на Recharts, строгая валидация схем через Zod и мультиязычность i18next.',
      ],
    },
    stack: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite', 'Zustand', 'Recharts', 'i18next'],
    outcomes: {
      en: [
        'Unified property leasing, tenant billing, and floor allocation into a sub-second reactive interface.',
      ],
      ru: [
        'Объединение управления арендой, биллинга резидентов и планировок в единый быстрый интерфейс.',
      ],
    },
  },

  // 2. FinTech & Analytics Calculators
  {
    slug: 'calc',
    name: {
      en: 'FinCalc Analytics Suite',
      ru: 'FinCalc (Финансовый комплекс)',
    },
    category: 'calculators',
    type: 'calculator',
    visibility: 'public',
    demoStatus: 'live',
    thumbnail: {
      en: calcEnImg,
      ru: calcRuImg,
    },
    screenshots: {
      en: [calcEnImg, calcEnImg, calcEnImg],
      ru: [calcRuImg, calcRuImg, calcRuImg],
    },
    badge: {
      en: 'Live FinTech PWA',
      ru: 'Работает онлайн',
    },
    repo: 'DEN-2020/calc',
    githubUrl: 'https://github.com/DEN-2020/calc',
    siteUrl: 'https://den-2020.github.io/calc/',
    summary: {
      en: 'Multi-tool PWA for crypto spot trading, perpetual futures risk management, compound interest models, and Monte-Carlo strategy simulations.',
      ru: 'PWA-комплекс для спотового и фьючерсного трейдинга, риск-менеджмента, сложного процента и симуляций Монте-Карло.',
    },
    purpose: {
      en: 'An all-in-one client-side financial modeling suite for traders and investors. It covers liquidation formulas, margin requirements, position sizing, strategy scenarios, and long-term asset growth without a calculation backend.',
      ru: 'Клиентский аналитический комплекс для трейдеров и инвесторов: цены ликвидации, маржинальные требования, размер позиции, сценарии стратегий и сложный процент без отдельного расчётного бэкенда.',
    },
    features: {
      en: [
        'Spot Trading Calculator: exact TP/SL levels, dollar capital allocation, maker/taker fee factoring, and risk/reward ratios.',
        'Perpetual Futures Engine: leverage sliders (1x-125x), cross/isolated liquidation price solver, and ROE projections.',
        'Strategy Simulator: Monte-Carlo sequence simulation testing winrate vs risk-of-ruin curves across 1,000 randomized trades.',
        'Investment Compounder: dynamic monthly/annual contribution modeling with visual growth trajectory curves.',
        'Car Loan & Balloon Payment Calculator: amortized interest breakdown, balloon payment factoring, and true annual ownership costs.',
      ],
      ru: [
        'Спотовый калькулятор: точный расчет TP/SL, распределение капитала, учет комиссий мейкера/тейкера и риск/прибыль.',
        'Фьючерсный движок: плечи от 1x до 125x, точный расчет цены ликвидации (Cross/Isolated) и прогноз ROE.',
        'Симулятор стратегий: тест кривой риска разорения по методу Монте-Карло на выборке из 1000 сделок.',
        'Инвестиционный калькулятор: моделирование сложного процента с реинвестированием и графиками роста.',
        'Автокредитный модуль: аннуитетный график платежей, остаточный платеж (Balloon) и полная стоимость владения.',
      ],
    },
    technicalNotes: {
      en: [
        'Architected with pure vanilla ES6+ modules and zero runtime overhead for instantaneous math calculations.',
        'Full PWA implementation with custom Service Worker caching strategy for 100% offline availability in airplane mode.',
        'State persistence engine synchronizing user inputs, currency selections, and custom presets across sessions.',
        'Modern Glassmorphism UI design tokens with full light/dark theme contrast switching.',
      ],
      ru: [
        'Разработано на чистом ES6+ JavaScript без тяжелых фреймворков для максимальной скорости расчетов.',
        'Полноценный PWA с Service Worker для автономной работы в оффлайн-режиме без подключения к интернету.',
        'Автосохранение введенных параметров в localStorage с мгновенным восстановлением при повторном визите.',
        'Современный Glassmorphism-дизайн с поддержкой темной и светлой темы оформления.',
      ],
    },
    stack: ['JavaScript', 'HTML5', 'CSS3', 'PWA', 'Trading Math', 'GitHub Pages'],
    outcomes: {
      en: [
        'Keeps the calculation engine lightweight and independent of a remote backend.',
        'Provides an installable offline-capable interface through a manifest and service worker.',
      ],
      ru: [
        'Расчётное ядро остаётся лёгким и не зависит от удалённого бэкенда.',
        'Manifest и service worker обеспечивают устанавливаемый интерфейс с поддержкой оффлайн-запуска.',
      ],
    },
  },

  {
    slug: 'car-calc',
    name: {
      en: 'Car Loan & Expense Calculator',
      ru: 'Car Calc (Автокалькулятор)',
    },
    category: 'calculators',
    type: 'calculator',
    visibility: 'public',
    demoStatus: 'live',
    thumbnail: {
      en: carCalcImg,
      ru: carCalcImg,
    },
    screenshots: {
      en: [carCalcImg, carCalcImg, carCalcImg],
      ru: [carCalcImg, carCalcImg, carCalcImg],
    },
    badge: {
      en: 'Live Auto Calculator',
      ru: 'Работает онлайн',
    },
    repo: 'DEN-2020/car-calc',
    githubUrl: 'https://github.com/DEN-2020/car-calc',
    siteUrl: 'https://den-2020.github.io/car-calc/',
    summary: {
      en: 'Multilingual car-finance calculator for loan amortization, balloon payments, fees, insurance, maintenance, taxes, and other recurring costs.',
      ru: 'Многоязычный автокалькулятор для кредита, остаточного платежа, комиссий, страховки, обслуживания, налогов и других регулярных расходов.',
    },
    purpose: {
      en: 'A specialized browser utility that combines financing schedules with configurable upfront and recurring expenses to show the total cost over the selected loan period.',
      ru: 'Браузерный инструмент, объединяющий график финансирования с настраиваемыми разовыми и регулярными расходами для расчёта общей стоимости за выбранный срок кредита.',
    },
    features: {
      en: [
        'Detailed loan calculator supporting standard annuity and balloon payment schedules.',
        'Configurable upfront fees and recurring tax, insurance, service, and other expenses.',
        'Summary of principal, interest, balloon payment, and total ownership-period costs.',
        'Multilingual interface with locale-aware labels and number formatting.',
      ],
      ru: [
        'Детальный кредитный калькулятор с поддержкой аннуитета и остаточного платежа (Balloon).',
        'Настраиваемые разовые комиссии и регулярные расходы на налог, страховку, обслуживание и другие статьи.',
        'Сводка основного долга, процентов, остаточного платежа и совокупных расходов за срок кредита.',
        'Многоязычный интерфейс с локализованными подписями и форматированием чисел.',
      ],
    },
    technicalNotes: {
      en: [
        'Constructed with vanilla JavaScript, modern responsive CSS Grid, and custom slider controls.',
        'Service Worker integration for instant offline loading and PWA installation.',
        'Optimized calculation lifecycle updating summary cards and cost-per-km metrics on every keypress.',
      ],
      ru: [
        'Стек: чистый JavaScript, адаптивный CSS Grid и кастомные элементы управления.',
        'Интеграция Service Worker для мгновенного запуска и работы без интернета.',
        'Реактивный пересчет итоговых показателей при любом изменении ползунков или полей ввода.',
      ],
    },
    stack: ['JavaScript', 'HTML5', 'CSS3', 'PWA', 'GitHub Pages'],
    outcomes: {
      en: [
        'Combines financing and recurring expenses in one transparent calculation flow.',
      ],
      ru: [
        'Объединяет финансирование и регулярные расходы в одном прозрачном сценарии расчёта.',
      ],
    },
  },

  {
    slug: 'profit-calc',
    name: {
      en: 'Profit Calc (Spot & Perp)',
      ru: 'Profit Calc (Трейдинг-калькулятор)',
    },
    category: 'calculators',
    type: 'calculator',
    visibility: 'public',
    demoStatus: 'ready',
    thumbnail: {
      en: profitCalcImg,
      ru: profitCalcImg,
    },
    screenshots: {
      en: [profitCalcImg, profitCalcImg, profitCalcImg],
      ru: [profitCalcImg, profitCalcImg, profitCalcImg],
    },
    badge: {
      en: 'Trading Suite',
      ru: 'Трейдинг-модуль',
    },
    repo: 'DEN-2020/profit-calc',
    githubUrl: 'https://github.com/DEN-2020/profit-calc',
    summary: {
      en: 'Focused crypto trading math suite providing instant profit/loss, margin utilization, liquidation buffers, and risk assessment.',
      ru: 'Быстрый крипто-калькулятор для мгновенного расчета прибыли, маржи, точки ликвидации и управления рисками.',
    },
    purpose: {
      en: 'A streamlined trader terminal companion delivering instantaneous mathematical clarity before opening positions on major exchanges (Binance, Bybit, OKX).',
      ru: 'Инструмент быстрого расчета торговых параметров перед открытием сделок на ведущих криптобиржах (Binance, Bybit, OKX).',
    },
    features: {
      en: [
        'Spot Trade Sizing: exact position quantity, net profit taking target, and dollar risk per trade.',
        'Leverage & Margin Analysis: collateral requirement breakdown, maintenance margin buffer, and estimated liquidation threshold.',
        'DCA & Reinvest Simulator: multi-entry dollar-cost averaging average price recalculator.',
      ],
      ru: [
        'Расчет спотовых позиций: объем в монетах, чистая прибыль после комиссий и риск в долларах.',
        'Анализ кредитного плеча и маржи: запас до ликвидации, гарантийное обеспечение и целевой ROE.',
        'DCA-калькулятор усреднения: пересчет средней цены входа при ступенчатых покупках.',
      ],
    },
    technicalNotes: {
      en: [
        'High-performance vanilla JavaScript math core designed for rapid keyboard-first data entry.',
        'Trading terminal dark theme with high-contrast emerald/rose profit-loss color coding.',
      ],
      ru: [
        'Математическое ядро на чистом JavaScript, оптимизированное для быстрого ввода с клавиатуры.',
        'Темная тема в стиле торговых терминалов с контрастной цветовой индикацией прибыли и убытка.',
      ],
    },
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Trading Math'],
    outcomes: {
      en: [
        'Consolidates frequently used spot and perpetual-futures formulas in one lightweight interface.',
      ],
      ru: [
        'Объединяет часто используемые формулы для спота и бессрочных фьючерсов в одном лёгком интерфейсе.',
      ],
    },
  },

  // 3. Audio, Video & Media Software
  {
    slug: 'volumepilot',
    name: {
      en: 'VolumePilot (Auto Audio Ducking)',
      ru: 'VolumePilot (Авто-приглушение звука)',
    },
    category: 'audio-media',
    type: 'tooling',
    visibility: 'private',
    demoStatus: 'ready',
    thumbnail: {
      en: volumepilotImg,
      ru: volumepilotImg,
    },
    screenshots: {
      en: [volumepilotImg, volumepilotImg, volumepilotImg],
      ru: [volumepilotImg, volumepilotImg, volumepilotImg],
    },
    badge: {
      en: 'Windows .NET Ducking',
      ru: 'Авто-дакинг для Windows',
    },
    summary: {
      en: 'Intelligent Windows background utility that automatically ducks background music, media, or game volume whenever you speak into your microphone and smoothly restores it on silence.',
      ru: 'Интеллектуальная утилита для Windows, которая автоматически приглушает фоновую музыку, YouTube или игры в момент, когда вы говорите в микрофон, и плавно восстанавливает громкость при молчании.',
    },
    purpose: {
      en: 'A high-performance system tray utility built for streamers, podcasters, gamers, and remote workers. Monitors the default input microphone in real time via low-latency WASAPI, automatically attenuating target applications (or master volume) and restoring levels using finely tuned Attack, Hold, and Release parameters.',
      ru: 'Высокопроизводительная утилита для системного трея Windows, созданная для стримеров, подкастеров, геймеров и звонков. Отслеживает активность микрофона через низколатентный WASAPI, автоматически приглушает выбранные приложения (или Master Volume) и плавно восстанавливает громкость с гибкой настройкой времени атаки, удержания (Hold) и затухания.',
    },
    features: {
      en: [
        'Targeted Ducking: selectively duck individual background apps (Spotify, Chrome, Discord) or the entire System Master Volume.',
        'Low-latency WASAPI input monitoring for microphone activity and configurable trigger thresholds.',
        'Customizable dynamics envelope with precise millisecond controls for Attack, Hold, and Release curves.',
        'Silent System Tray operation with quick profile toggles, Inno Setup installer, and zero-privilege local execution.',
      ],
      ru: [
        'Целевой дакинг: приглушение отдельных приложений (Spotify, Браузер, Discord) или общего системного звука Master Volume.',
        'Низколатентный WASAPI-мониторинг микрофона с настраиваемым порогом срабатывания.',
        'Точная настройка огибающей звука: миллисекундный контроль времени атаки (Attack), удержания (Hold) и восстановления (Release).',
        'Фоновая работа в системном трее Windows, собственный инсталлятор Inno Setup и полная локальная конфиденциальность.',
      ],
    },
    technicalNotes: {
      en: [
        'Developed in C# and .NET with direct Windows CoreAudio API and WASAPI audio endpoint session hooks.',
        'Real-time thread-safe audio level polling and per-session volume curve interpolation.',
        'Packaged as a standalone self-contained portable executable and Inno Setup Windows installer.',
      ],
      ru: [
        'Разработано на C# и .NET с прямым вызовом Windows CoreAudio API и хуками аудио-сессий WASAPI.',
        'Потокобезопасный опрос уровня сигнала в реальном времени и интерполяция кривых громкости.',
        'Сборка в виде автономного портативного EXE-файла и инсталлятора Inno Setup.',
      ],
    },
    stack: ['C#', '.NET', 'WPF / WinUI', 'WASAPI Audio', 'Audio Ducking', 'Windows Tray'],
    outcomes: {
      en: [
        'Provides automatic voice-over background audio ducking without requiring an external hardware mixer.',
        'Processes microphone levels locally without recording voice or uploading audio and telemetry.',
      ],
      ru: [
        'Автоматически приглушает фон при разговоре без необходимости использовать внешний аппаратный микшер.',
        'Обрабатывает уровни микрофона локально, не записывая голос и не отправляя аудио или телеметрию.',
      ],
    },
  },

  {
    slug: 'volumepilot-website',
    name: {
      en: 'VolumePilot Marketing Website',
      ru: 'VolumePilot (Официальный промо-сайт)',
    },
    category: 'audio-media',
    type: 'site',
    visibility: 'public',
    demoStatus: 'live',
    thumbnail: {
      en: volumepilotSiteImg,
      ru: volumepilotSiteImg,
    },
    screenshots: {
      en: [volumepilotSiteImg, volumepilotSiteImg, volumepilotSiteImg],
      ru: [volumepilotSiteImg, volumepilotSiteImg, volumepilotSiteImg],
    },
    badge: {
      en: 'Live Landing Page',
      ru: 'Работает онлайн',
    },
    siteUrl: 'https://volumepilot.netlify.app/',
    summary: {
      en: 'Modern showcase landing page for the VolumePilot audio ducking utility featuring interactive waveform animations, feature breakdowns, and direct downloads.',
      ru: 'Промо-сайт для утилиты VolumePilot с интерактивной анимацией аудио-волн, описанием преимуществ авто-дакинга и ссылкой на загрузку.',
    },
    purpose: {
      en: 'Created to present VolumePilot to international users with high-impact visual design, dynamic audio equalizer effects, clear feature comparisons, and one-click installer downloads.',
      ru: 'Создан для презентации утилиты VolumePilot международной аудитории: визуализация работы эквалайзера, интерактивные сравнения «до/после» и удобная загрузка инсталлятора.',
    },
    features: {
      en: [
        'Interactive audio waveform visualizer demonstrating real-time dynamic audio ducking normalization.',
        'Before/After interactive comparison sliders demonstrating background audio suppression while talking.',
        'Responsive layout optimized for high conversion on mobile, tablet, and desktop viewports.',
        'Download and product-information calls to action for the desktop utility.',
      ],
      ru: [
        'Интерактивный визуализатор аудио-волны, демонстрирующий выравнивание громкости при разговоре.',
        'Интерактивное сравнение «До и После» со сглаживанием резких перепадов звука.',
        'Адаптивная верстка с высокой конверсией на смартфонах и десктопах.',
        'Кнопки загрузки и понятные блоки с информацией о десктопной утилите.',
      ],
    },
    technicalNotes: {
      en: [
        'Developed with React 19, TypeScript, Vite 6, Tailwind CSS 4, and Motion.',
        'Built and deployed as a static marketing site on Netlify.',
      ],
      ru: [
        'Стек: React 19, TypeScript, Vite 6, Tailwind CSS 4 и Motion.',
        'Статическая сборка и размещение промо-сайта на Netlify.',
      ],
    },
    stack: ['React 19', 'TypeScript', 'Vite 6', 'Tailwind CSS 4', 'Motion', 'Netlify'],
    outcomes: {
      en: [
        'Provides a dedicated public product presentation separate from the private desktop source repository.',
      ],
      ru: [
        'Даёт продукту отдельную публичную витрину без публикации закрытого исходного кода десктопного приложения.',
      ],
    },
  },

  {
    slug: 'nightvoice',
    name: {
      en: 'NightVoice (Loudness Stabilization & Web)',
      ru: 'NightVoice (Стабилизатор звука & Веб)',
    },
    category: 'audio-media',
    type: 'tooling',
    visibility: 'public',
    demoStatus: 'ready',
    thumbnail: {
      en: nightvoiceImg,
      ru: nightvoiceImg,
    },
    screenshots: {
      en: [nightvoiceImg, nightvoiceImg, nightvoiceImg],
      ru: [nightvoiceImg, nightvoiceImg, nightvoiceImg],
    },
    badge: {
      en: 'DSP Compression & Astro',
      ru: 'DSP компрессия & Astro',
    },
    repo: 'DEN-2020/NightVoice-Web',
    githubUrl: 'https://github.com/DEN-2020/NightVoice-Web',
    summary: {
      en: 'System-wide loudness stabilization and dynamic range compression for Windows (0% AI, pure DSP) with official Astro multilingual documentation portal in 6 languages.',
      ru: 'Системная стабилизация громкости и динамическая компрессия для Windows (без ИИ, чистый DSP) с официальным сайтом на Astro на 6 языках.',
    },
    purpose: {
      en: 'Engineered to solve voice clarity and volume spike issues in media playback. Employs 100% mathematical DSP algorithms (Soft, Night, Strong, Custom compression modes) without AI overhead, paired with a modern Astro web portal translated into English, Russian, German, Spanish, French, and Finnish.',
      ru: 'Разработано для устранения резких перепадов громкости и улучшения разборчивости речи в фильмах и видео. Использует чистые математические DSP-алгоритмы (режимы Soft, Night, Strong, Custom) без ИИ-задержек в связке с мультиязычным веб-порталом на Astro на 6 языках (EN, RU, DE, ES, FR, FI).',
    },
    features: {
      en: [
        'System-wide Windows dynamic range compression balancing loud explosions and quiet dialogue.',
        'Preset modes (Soft, Night, Strong, Custom) with instant system tray profile switching.',
        'Official multilingual Astro website translated into 6 languages with interactive audio before/after player.',
        'Local DSP processing without cloud AI or audio uploads.',
      ],
      ru: [
        'Системная динамическая компрессия Windows: выравнивание громких спецэффектов и тихой речи.',
        'Готовые пресеты (Soft, Night, Strong, Custom) с быстрым переключением из системного трея.',
        'Официальный многоязычный сайт на Astro на 6 языках со встроенным интерактивным аудио-плеером «До/После».',
        'Локальная DSP-обработка без облачного ИИ и отправки аудио.',
      ],
    },
    technicalNotes: {
      en: [
        'Windows audio core written in C# with WASAPI endpoint DSP biquad filter cascades.',
        'Public documentation and marketing portal built with Astro 7 and TypeScript.',
      ],
      ru: [
        'Десктопное ядро на C# с каскадами фильтров WASAPI и цифровой компрессией.',
        'Публичный документационный и промо-портал на Astro 7 и TypeScript.',
      ],
    },
    stack: ['C#', 'DSP Algorithms', 'Astro 7', 'TypeScript', 'i18n (EN/RU/DE/ES/FR/FI)', 'Web Audio API'],
    outcomes: {
      en: [
        'Delivered crystal-clear night movie listening without waking family members or needing manual volume adjustments.',
      ],
      ru: [
        'Комфортный ночной просмотр фильмов без постоянной ручной регулировки громкости пультом.',
      ],
    },
  },

  {
    slug: 'videogen',
    name: {
      en: 'Local VideoGen (AI Video Studio)',
      ru: 'Local VideoGen (AI-Видеостудия)',
    },
    category: 'audio-media',
    type: 'pipeline',
    visibility: 'private',
    demoStatus: 'ready',
    thumbnail: {
      en: videogenEn1,
      ru: videogenEn1,
    },
    screenshots: {
      en: [videogenEn1, videogenEn2, videogenEn3],
      ru: [videogenEn1, videogenEn2, videogenEn3],
    },
    badge: {
      en: 'FastAPI & OpenCV Studio',
      ru: 'FastAPI & OpenCV студия',
    },
    summary: {
      en: 'Local-first automated video studio with FastAPI backend, React dashboard, Ollama script drafts, OpenCV scene/motion detection, and FFmpeg GPU rendering.',
      ru: 'Локальная студия генерации коротких видео с бэкендом на FastAPI, дашбордом на React, сценариями Ollama, детекцией сцен OpenCV и рендером FFmpeg GPU.',
    },
    purpose: {
      en: 'An end-to-end production workflow designed for creating factual, educational, and narrative short-form videos (Shorts/Reels) with rights review, AI script generation, OpenCV scene segmentation, voice synthesis, dynamic subtitles, and direct Telegram publishing.',
      ru: 'Комплексный конвейер для создания коротких познавательных и сюжетных видео (Shorts/Reels): генерация сценариев через Ollama, нарезка и анализ сцен через OpenCV, синтез речи, анимированные субтитры и прямая публикация через Telegram Bot API.',
    },
    features: {
      en: [
        'Storyboard & EDL engine mapping script segments to video scenes via Ollama embeddings and OpenCV motion metrics.',
        'Hardware-accelerated FFmpeg 1080x1920 portrait rendering with visual styles (clean, documentary, cinematic, archive).',
        'Voice synthesis integration with Silero RU, Piper, and optional F5-TTS neural voice lab.',
        'Fact-checking and rights-clearing approval gate blocking publication of unverified video assets.',
        'Direct Telegram Bot API upload sharing finished MP4 videos straight into target channels.',
      ],
      ru: [
        'Слой раскадровки (EDL): привязка фрагментов текста к видеоряду через эмбеддинги Ollama и детекцию сцен OpenCV.',
        'Аппаратный рендеринг FFmpeg (1080x1920) со стилями монтажа (документальный, кинематографичный, архивный).',
        'Голосовой синтез на базе Silero RU, Piper и экспериментального модуля F5-TTS.',
        'Шлюз проверки прав и фактов (Approval Gate) для контроля качества перед публикацией.',
        'Прямая отправка готового MP4 в Telegram через встроенный Telegram Bot API.',
      ],
    },
    technicalNotes: {
      en: [
        'FastAPI backend with SQLite database for edit decision lists, transcripts, assets, and audit logs.',
        'React 19 & Vite frontend dashboard with interactive video player and still-frame preview generator.',
        'Modular OpenCV and scenedetect pipelines extracting scene quality and motion metrics.',
      ],
      ru: [
        'Бэкенд на FastAPI с базой SQLite для хранения монтажных листов (EDL), транскриптов и очередей рендера.',
        'Фронтенд на React 19 и Vite с дашбордом управления и предпросмотром стоп-кадров.',
        'Пайплайн OpenCV и PySceneDetect для анализа динамики и качества видео-фрагментов.',
      ],
    },
    stack: ['Python', 'FastAPI', 'React 19', 'FFmpeg GPU', 'OpenCV', 'Ollama / LLMs', 'Telegram Bot API'],
    outcomes: {
      en: [
        'Integrated source review, editing decisions, rendering, and optional Telegram delivery into one local workflow.',
      ],
      ru: [
        'Объединены проверка исходников, монтажные решения, рендеринг и опциональная отправка в Telegram в одном локальном процессе.',
      ],
    },
  },

  {
    slug: 'tv-media-portal',
    name: {
      en: 'TV Media & Stream Utilities',
      ru: 'TV Media (Стриминг и плейлисты)',
    },
    category: 'audio-media',
    type: 'tooling',
    visibility: 'private',
    demoStatus: 'internal',
    thumbnail: {
      en: tvImg,
      ru: tvImg,
    },
    screenshots: {
      en: [tvImg, tvImg, tvImg],
      ru: [tvImg, tvImg, tvImg],
    },
    badge: {
      en: 'Internal Media Engine',
      ru: 'Приватная медиа-система',
    },
    summary: {
      en: 'Private JavaScript experiments and a small Node proxy for media-player integrations and online source resolution.',
      ru: 'Приватные JavaScript-эксперименты и небольшой Node-прокси для интеграций медиаплеера и разрешения онлайн-источников.',
    },
    purpose: {
      en: 'A local collection of JavaScript modules used to test media-source integrations, proxy requests, player handoff, and provider-specific parsing. It is not a standalone streaming dashboard.',
      ru: 'Локальная коллекция JavaScript-модулей для тестирования источников медиа, проксирования запросов, передачи ссылок плееру и разбора данных отдельных провайдеров. Это не отдельный стриминговый dashboard.',
    },
    features: {
      en: [
        'Provider-specific JavaScript modules for resolving media links.',
        'Local Node proxy and test player for request and playback experiments.',
        'Internal-only utilities with no public service or repository access.',
      ],
      ru: [
        'JavaScript-модули для разрешения медиа-ссылок отдельных провайдеров.',
        'Локальный Node-прокси и тестовый плеер для экспериментов с запросами и воспроизведением.',
        'Только внутренние утилиты без публичного сервиса и доступа к репозиторию.',
      ],
    },
    technicalNotes: {
      en: [
        'Implemented primarily with JavaScript and Node.js; the portfolio does not expose provider URLs or local configuration.',
      ],
      ru: [
        'Основной стек — JavaScript и Node.js; портфолио не публикует URL провайдеров и локальную конфигурацию.',
      ],
    },
    stack: ['JavaScript', 'Node.js', 'Media APIs', 'Local Proxy'],
    outcomes: {
      en: [
        'Keeps provider-specific experiments isolated from public-facing projects.',
      ],
      ru: [
        'Эксперименты с конкретными провайдерами изолированы от публичных проектов.',
      ],
    },
  },

  // 4. Mobile & Productivity Systems
  {
    slug: 'kids-tracker',
    name: {
      en: 'Kids Tracker Family Suite',
      ru: 'Kids Tracker (Семейный трекер привычек)',
    },
    category: 'mobile-apps',
    type: 'app',
    visibility: 'public',
    demoStatus: 'live',
    thumbnail: {
      en: kidsTrackerEn1,
      ru: kidsTrackerEn1,
    },
    screenshots: {
      en: [kidsTrackerEn1, kidsTrackerEn2, kidsTrackerEn3],
      ru: [kidsTrackerEn1, kidsTrackerEn2, kidsTrackerEn3],
    },
    badge: {
      en: 'Live Family PWA',
      ru: 'Работает онлайн',
    },
    repo: 'DEN-2020/kids-tracker',
    githubUrl: 'https://github.com/DEN-2020/kids-tracker',
    siteUrl: 'https://kidstracker-ed3e9.web.app/',
    summary: {
      en: 'Gamified real-time family habit and task tracker featuring synchronized point balances, rewards marketplace, and PIN-protected parent dashboard.',
      ru: 'Геймифицированный семейный трекер привычек и заданий с синхронизацией баланса баллов, магазином наград и родительским контролем.',
    },
    purpose: {
      en: 'A multi-device family productivity application that motivates children to build positive daily habits (homework, chores, reading) through gamified coin rewards, customizable goal stores, and live progress dashboards.',
      ru: 'Кроссплатформенное семейное приложение, мотивирующее детей выполнять ежедневные полезные привычки (учеба, спорт, чтение) через систему игровых баллов, магазин желаний и мгновенную синхронизацию между родителями и детьми.',
    },
    features: {
      en: [
        'Live multi-device data synchronization using Firebase Firestore real-time snapshot listeners.',
        'Gamified reward marketplace where children redeem earned points for real-life privileges and rewards.',
        'Parent controls for task creation, point adjustments, family settings, and reward approvals.',
        'Progress, achievements, activity history, and child-friendly completion feedback.',
        'Full PWA installation capability on Android, iOS, and desktop with offline optimism.',
      ],
      ru: [
        'Мгновенная синхронизация между устройствами на базе Firebase Firestore в реальном времени.',
        'Магазин наград: дети могут обменивать накопленные баллы на реальные призы и активности.',
        'Родительские инструменты для создания заданий, корректировки баллов, семейных настроек и подтверждения наград.',
        'Прогресс, достижения, история действий и понятная детям обратная связь о выполнении.',
        'PWA-режим с установкой на домашний экран Android и iOS и оптимистичными обновлениями интерфейса.',
      ],
    },
    technicalNotes: {
      en: [
        'Built with React 19, TypeScript, Vite, Tailwind CSS, Lucide icons, and Canvas-Confetti.',
        'Backend powered by Google Firebase Firestore NoSQL real-time database and Firebase Hosting.',
        'Firebase rules and family-scoped data model separate each household\'s records.',
      ],
      ru: [
        'Фронтенд: React 19, TypeScript, Vite, Tailwind CSS и библиотека анимаций частиц Canvas-Confetti.',
        'Бэкенд: NoSQL база данных Google Firebase Firestore и Firebase Hosting.',
        'Firebase Rules и модель данных с family scope разделяют записи разных семей.',
      ],
    },
    stack: ['React 19', 'TypeScript', 'Firebase Firestore', 'Tailwind CSS', 'PWA', 'Android'],
    outcomes: {
      en: [
        'Supports shared family workflows across multiple devices through Firestore snapshot synchronization.',
      ],
      ru: [
        'Поддерживает совместные семейные сценарии на нескольких устройствах через Firestore snapshot-синхронизацию.',
      ],
    },
  },

  {
    slug: 'kids-tracker-android',
    name: {
      en: 'Kids Tracker Android Companion',
      ru: 'Kids Tracker (Android companion)',
    },
    category: 'mobile-apps',
    type: 'app',
    visibility: 'private',
    demoStatus: 'ready',
    thumbnail: {
      en: kidsTrackerEn1,
      ru: kidsTrackerEn1,
    },
    screenshots: {
      en: [kidsTrackerEn1, kidsTrackerEn2, kidsTrackerEn3],
      ru: [kidsTrackerEn1, kidsTrackerEn2, kidsTrackerEn3],
    },
    badge: {
      en: 'Hybrid Android Scaffold',
      ru: 'Гибридный Android scaffold',
    },
    summary: {
      en: 'Early Android companion that embeds the existing Kids Tracker PWA and adds native device-usage tools.',
      ru: 'Ранняя Android-версия, которая открывает существующий Kids Tracker PWA и добавляет нативные инструменты статистики устройства.',
    },
    purpose: {
      en: 'A separate Android scaffold for validating a hybrid WebView shell, Usage Access permission flow, foreground-app statistics, and a callable path for syncing device usage.',
      ru: 'Отдельный Android scaffold для проверки гибридной WebView-оболочки, разрешения Usage Access, статистики активных приложений и callable-маршрута синхронизации использования устройства.',
    },
    features: {
      en: [
        'WebView shell that opens the deployed Kids Tracker PWA as the default experience.',
        'Native Java UI for reading today\'s foreground app usage through UsageStatsManager.',
        'Usage Access permission flow and a callable sync path for the device_usage collection.',
        'Single debug APK concept for parent and child modes; account linking and Play packaging remain unfinished.',
      ],
      ru: [
        'WebView-оболочка, которая по умолчанию открывает опубликованный Kids Tracker PWA.',
        'Нативный Java-интерфейс для чтения статистики активных приложений через UsageStatsManager.',
        'Сценарий разрешения Usage Access и callable-маршрут для коллекции device_usage.',
        'Единая debug APK-концепция для режима родителя и ребёнка; привязка аккаунта и публикация в Play ещё не завершены.',
      ],
    },
    technicalNotes: {
      en: [
        'Implemented with Java, Android SDK views, WebView, UsageStatsManager, Firebase callable functions, and Gradle Kotlin DSL.',
      ],
      ru: [
        'Стек: Java, Android SDK Views, WebView, UsageStatsManager, Firebase callable functions и Gradle Kotlin DSL.',
      ],
    },
    stack: ['Java', 'Android SDK', 'WebView', 'UsageStatsManager', 'Firebase', 'Gradle'],
    outcomes: {
      en: [
        'Verified a local debug APK and the first hybrid integration path without presenting the scaffold as a finished native app.',
      ],
      ru: [
        'Проверена локальная debug APK и первый гибридный интеграционный сценарий без выдачи scaffold за готовое нативное приложение.',
      ],
    },
  },

  // 5. AI, 3D Pipelines & Game Dev
  {
    slug: 'hunyuan3d-docker',
    name: {
      en: 'Hunyuan3D Pipeline & Blender Bridge',
      ru: 'Hunyuan3D (AI-пайплайн & Blender Bridge)',
    },
    category: 'ai-3d-gamedev',
    type: 'pipeline',
    visibility: 'private',
    demoStatus: 'ready',
    thumbnail: {
      en: hunyuan3dImg,
      ru: hunyuan3dImg,
    },
    screenshots: {
      en: [hunyuan3dImg, hunyuan3dImg, hunyuan3dImg],
      ru: [hunyuan3dImg, hunyuan3dImg, hunyuan3dImg],
    },
    badge: {
      en: 'Docker & Blender 3D',
      ru: 'Docker & Blender 3D',
    },
    summary: {
      en: 'Local Docker and Blender integration work around Tencent Hunyuan3D-2 with GPU support, a REST API server, and mesh-generation tooling.',
      ru: 'Локальная Docker- и Blender-интеграция вокруг Tencent Hunyuan3D-2 с поддержкой GPU, REST API и инструментами генерации мешей.',
    },
    purpose: {
      en: 'A private integration repository based on the upstream open-source model. It packages the environment, exposes a local API, and provides Blender addon experiments; it is not presented as the upstream model itself.',
      ru: 'Приватный интеграционный репозиторий на базе открытой upstream-модели. Он упаковывает окружение, добавляет локальный API и эксперименты с Blender-аддоном, не выдавая интеграцию за саму upstream-модель.',
    },
    features: {
      en: [
        'Single-image to high-density 3D textured mesh generation (GLTF, OBJ, FBX output formats).',
        'Custom direct Blender 3D addon (blender_addon.py) for generating neural meshes directly into the 3D viewport.',
        'Local REST API server (api_server.py) for programmatic generation requests.',
        'Interactive local Gradio interface for adjusting supported generation parameters.',
      ],
      ru: [
        'Генерация 3D-моделей по одной картинке с высококачественными текстурами и экспортом в форматы GLTF / OBJ / FBX.',
        'Прямой плагин для Blender 3D (blender_addon.py): генерация и импорт нейросетевых объектов сразу в сцену 3D-редактора.',
        'Локальный REST API сервер (api_server.py) для программных запросов генерации.',
        'Интерактивный локальный интерфейс Gradio для настройки поддерживаемых параметров генерации.',
      ],
    },
    technicalNotes: {
      en: [
        'Multi-stage Dockerfile with layer optimization, PyTorch isolation, and NVIDIA Container Toolkit / CUDA 12.1+ support.',
        'Dynamic HuggingFace token authorization via .env configuration without baking secrets into Docker image layers.',
        'GPU memory requirements and model constraints remain dependent on the selected upstream model and generation settings.',
      ],
      ru: [
        'Многоэтапный Dockerfile с оптимизацией слоев, изоляцией PyTorch и поддержкой драйверов NVIDIA CUDA 12.1+.',
        'Безопасная работа с HuggingFace: динамическая передача токенов через .env без попадания в слои Docker-образа.',
        'Требования к видеопамяти зависят от выбранной upstream-модели и параметров генерации.',
      ],
    },
    stack: ['Docker', 'Python', 'PyTorch', 'CUDA', '3D Neural Synthesis', 'Blender Pipeline', 'Blender 3D'],
    outcomes: {
      en: [
        'Reduced deployment of complex 3D AI generative environments down to a single command (docker compose up --build).',
        'Created a repeatable local path between image-to-3D generation and Blender import experiments.',
      ],
      ru: [
        'Сокращение развертывания сложного ИИ-окружения до одной команды (docker compose up --build).',
        'Создан воспроизводимый локальный сценарий между image-to-3D генерацией и экспериментами импорта в Blender.',
      ],
    },
  },

  {
    slug: 'roblox-space-shooter',
    name: {
      en: 'Roblox Space Shooter (Galaxy Arcade)',
      ru: 'Roblox Space Shooter (Космическая аркада)',
    },
    category: 'ai-3d-gamedev',
    type: 'game',
    visibility: 'local-only',
    demoStatus: 'ready',
    thumbnail: {
      en: robloxSpace1,
      ru: robloxSpace1,
    },
    screenshots: {
      en: [robloxSpace1, robloxSpace2, robloxSpace3],
      ru: [robloxSpace1, robloxSpace2, robloxSpace3],
    },
    badge: {
      en: 'Roblox Studio Game',
      ru: 'Игра в Roblox Studio',
    },
    summary: {
      en: 'Vertical arcade galaxy shooter in Roblox Studio developed with Rojo 7.4.4 workflow, featuring drag-to-move ship physics, bullet-hell boss battles, and modular upgrade trees.',
      ru: 'Вертикальный космический аркадный шутер на движке Roblox Studio с разработкой через Rojo 7.4.4, кастомной физикой звездолетов, волнами противников, битвами с боссами (Bullet Hell) и древом прокачки.',
    },
    purpose: {
      en: 'A fast-paced vertical arcade shooter prototype inspired by classic mobile galaxy shooters. Players pilot customizable starships, battle escalating waves of enemy squadrons and asteroids, collect coins and crystals, unlock companion drones, and fight multi-phase bosses in real-time.',
      ru: 'Динамичный вертикальный аркадный шутер в стиле классических galaxy shooters. Игроки управляют звездолетами, сражаются с волнами инопланетных эскадрилий и астероидами, собирают кристаллы и монеты, открывают дронов-помощников и побеждают боссов с уникальными паттернами атак.',
    },
    features: {
      en: [
        'Drag-to-move flight controls with smooth inertial damping, hit-lag feedback, and dynamic camera shake.',
        'Modular weapon & companion system: plasma blasters, heavy homing missiles, beam turrets, and automated support drones.',
        'Multi-tier upgrade paths (LV1 -> LV3) with live 3D ViewportFrame previews in the Hangar showroom.',
        'Boss combat mechanics with bullet-hell projectile rings, targeted needle shots, and multi-phase enraged states.',
        'Persistent progression using ProfileService for reliable cloud DataStore inventory and score saving.',
      ],
      ru: [
        'Управление кораблем (Drag-to-Move) с инерцией, тактильным хит-стопом и динамической тряской камеры.',
        'Модульная система вооружения: плазменные бластеры, самонаводящиеся ракеты и дроны-помощники.',
        'Многоуровневая прокачка кораблей (LV1 -> LV3) с 3D ViewportFrame предпросмотром моделей в ангаре.',
        'Битвы с боссами в стиле Bullet Hell: кольцевые залпы снарядов, фазы ярости и вызов миньонов.',
        'Надежное сохранение инвентаря и рекордов в Roblox DataStore через ProfileService.',
      ],
    },
    technicalNotes: {
      en: [
        'Professional Luau development environment utilizing Rojo 7.4.4 live sync, Aftman, and Luau LSP static type checking.',
        'Client-server architecture with server-authoritative projectile damage, hit registration, and RemoteEvent replication.',
        'Modular service mesh on server (AsteroidStormService, BossCombatService, ProfileService, ProgressionService).',
        'Client controller hierarchy (BackgroundController with multi-layer parallax stars and nebulae, HUD, HangarShowroomController).',
      ],
      ru: [
        'Профессиональный стек разработки на Luau: синхронизация через Rojo 7.4.4, Aftman и проверка типов Luau LSP.',
        'Клиент-серверная архитектура с серверной валидацией урона, коллизий и репликацией через RemoteEvents.',
        'Модульный каркас серверных служб (AsteroidStormService, BossCombatService, ProfileService, ProgressionService).',
        'Иерархия клиентских контроллеров (BackgroundController с многослойным параллаксом звезд, HUD, Ангар).',
      ],
    },
    stack: ['Luau', 'Roblox Studio', 'Blender 3D', 'Game Mechanics', 'VFX & Particle Systems'],
    outcomes: {
      en: [
        'Implemented a modular local prototype with server services, client controllers, and declarative configuration tables.',
        'Clean codebase architecture enabling frictionless integration of new weapons, ships, and boss phases via declarative Config tables.',
      ],
      ru: [
        'Реализован модульный локальный прототип с серверными службами, клиентскими контроллерами и декларативными конфигами.',
        'Декларативная архитектура конфигов для легкого добавления новых кораблей, оружия и фаз боссов.',
      ],
    },
  },

  // 6. Research, AI Agents & Mesh Infra
  {
    slug: 'btcusdt-edge-research',
    name: {
      en: 'BTC/USDT Edge Research & Audit',
      ru: 'BTC/USDT Edge Research (Квант-исследования)',
    },
    category: 'research-infra',
    type: 'tooling',
    visibility: 'private',
    demoStatus: 'internal',
    thumbnail: {
      en: btcusdtImg,
      ru: btcusdtImg,
    },
    screenshots: {
      en: [btcusdtImg, btcusdtImg, btcusdtImg],
      ru: [btcusdtImg, btcusdtImg, btcusdtImg],
    },
    badge: {
      en: 'Quant Research',
      ru: 'Квант-исследование',
    },
    summary: {
      en: 'Quantitative research framework analyzing 2.67M+ 1m clean OHLCV candles (2021–2026) and Binance Futures tick data with cost sensitivity and MFE distribution modeling.',
      ru: 'Количественный исследовательский комплекс: анализ базы из 2.67+ млн минутных свечей (2021–2026) и тиковых данных Binance Futures с учетом проскальзывания и комиссий.',
    },
    purpose: {
      en: 'A high-grade quantitative research framework in Python that ingests historical tick and 1m Kline data to model risk-adjusted returns, maximum drawdown boundaries, Sharpe ratios, and fee-drag optimizations on BTC/USDT pairs.',
      ru: 'Высокоточный исследовательский фреймворк на Python для тестирования торговых гипотез на исторических данных BTC/USDT: расчет коэффициентов Шарпа/Сортино, максимальной просадки и влияния биржевых комиссий.',
    },
    features: {
      en: [
        'Multi-timeframe diagnostic scans (5m, 15m, 30m, 1h, 4h, 1D) evaluating gross and net edge signals.',
        'Realistic cost viability gates (0.20%, 0.30%, 0.40%, 0.50% round-trip friction) testing strategy survivability.',
        'Maximum Favorable Excursion (MFE) distribution analysis and volatility cluster tracking.',
        'Memory-efficient Parquet data pipelines processing over 2.67 million candles in seconds.',
      ],
      ru: [
        'Мультитаймфреймовые диагностические сканы (5м, 15м, 30м, 1ч, 4ч, 1D) для оценки торговых сигналов.',
        'Проверка на реалистичных комиссиях биржи (0.20%–0.50% round-trip) для отсева иллюзорных стратегий.',
        'Анализ распределения MFE (Maximum Favorable Excursion) и кластеров волатильности.',
        'Оптимизированные пайплайны Parquet для мгновенной обработки более 2.67 млн свечей.',
      ],
    },
    technicalNotes: {
      en: [
        'Built with Python, Pandas, NumPy, PyArrow Parquet pipelines, and Vectorized calculation models.',
        'Automated deep research diagnostic exports with sanitized data packets for independent auditing.',
      ],
      ru: [
        'Стек: Python, Pandas, NumPy, PyArrow Parquet и векторные вычисления.',
        'Автоматизированный экспорт пакетов глубокого аудита для верификации гипотез.',
      ],
    },
    stack: ['Python', 'Pandas', 'NumPy', 'Parquet Datasets', 'Quantitative Modeling', 'Binance Futures'],
    outcomes: {
      en: [
        'Produced a sanitized evidence packet for independent review without publishing live trading configuration or raw market data.',
      ],
      ru: [
        'Подготовлен очищенный пакет материалов для независимой проверки без публикации боевой конфигурации и сырых рыночных данных.',
      ],
    },
  },

  {
    slug: 'asist-api',
    name: {
      en: 'AssistJarvis (Unreal MetaHuman & AI)',
      ru: 'AssistJarvis (Unreal 3D-Аватар & AI)',
    },
    category: 'research-infra',
    type: 'tooling',
    visibility: 'private',
    demoStatus: 'internal',
    thumbnail: {
      en: asistApiImg1,
      ru: asistApiImg1,
    },
    screenshots: {
      en: [asistApiImg1, asistApiImg2, asistApiImg3],
      ru: [asistApiImg1, asistApiImg2, asistApiImg3],
    },
    badge: {
      en: 'Unreal Engine 5 & AI',
      ru: 'Unreal Engine 5 & AI',
    },
    summary: {
      en: 'Private Unreal Engine 5 MetaHuman assistant prototype connecting local Ollama responses, speech synthesis, OSC/WebSocket bridges, and runtime control tools.',
      ru: 'Приватный прототип ассистента с MetaHuman в Unreal Engine 5, объединяющий локальные ответы Ollama, синтез речи, OSC/WebSocket-мосты и инструменты управления runtime.',
    },
    purpose: {
      en: 'An offline-first experimental pipeline that passes local LLM replies through Piper or Silero speech synthesis and into an open Unreal bridge for avatar animation. Home Assistant and multi-agent experiments remain private supporting components.',
      ru: 'Экспериментальный offline-first пайплайн: ответы локальной LLM проходят через Piper или Silero и передаются в открытый Unreal-мост для анимации аватара. Эксперименты Home Assistant и мультиагентной координации остаются закрытыми вспомогательными компонентами.',
    },
    features: {
      en: [
        'Photorealistic Unreal Engine 5 MetaHuman 3D avatar with real-time facial expression solver and look-at eye tracking.',
        'Audio-driven lip-sync experiments transferring speech and timing data through OSC and WebSockets.',
        'Offline-first local AI engine running quantized LLMs via Ollama with multi-agent tool execution.',
        'Dual-interface ecosystem: native Windows standalone runtime control panel and interactive web browser dashboard (Voice Tuning Lab).',
        'Private Home Assistant and Yandex Smart Home integration experiments isolated from the public portfolio.',
      ],
      ru: [
        'Фотореалистичный 3D-аватар MetaHuman в Unreal Engine 5 с динамической мимикой и отслеживанием взгляда (Look-At).',
        'Эксперименты Lip-Sync с передачей речи и таймингов через OSC и WebSockets.',
        'Полная автономность: запуск локальных LLM через Ollama без зависимости от внешних облачных API.',
        'Двойной интерфейс управления: нативная панель управления для Windows и веб-интерфейс Voice Tuning Lab.',
        'Закрытые эксперименты интеграции Home Assistant и Яндекс Умного дома изолированы от публичного портфолио.',
      ],
    },
    technicalNotes: {
      en: [
        'Engineered with Unreal Engine 5, Python 3, Blueprint OSC bridge (BP_AssistantBridge), and FastAPI / WebSockets.',
        'Multi-agent coordination architecture dispatching specialized sub-agents with dedicated system prompts and toolchains.',
        'Modular speech synthesis pipeline supporting Piper TTS and Silero neural voice models with custom pitch/speed tuning.',
      ],
      ru: [
        'Стек: Unreal Engine 5, MetaHuman, Python 3, Blueprints OSC Bridge (BP_AssistantBridge), WebSockets и FastAPI.',
        'Мультиагентная архитектура: диспетчеризация запросов специализированным под-агентам с набором инструментов.',
        'Модульный пайплайн генерации голоса на базе Piper TTS и Silero с регулировкой интонации и скорости.',
      ],
    },
    stack: ['Unreal Engine 5', 'MetaHuman', 'Python', 'Ollama / LLMs', 'WebSockets', 'Voice DSP / TTS', 'Windows Runtime'],
    outcomes: {
      en: [
        'Established a working local message format carrying reply text, transliterated text, WAV path, and duration into the runtime bridge.',
        'Separated editor-driven and future packaged-runtime lip-sync workflows for continued testing.',
      ],
      ru: [
        'Создан рабочий локальный формат сообщения с текстом ответа, транслитерацией, путём к WAV и длительностью для runtime-моста.',
        'Разделены editor-driven и будущий packaged-runtime сценарии Lip-Sync для дальнейшего тестирования.',
      ],
    },
  },

  {
    slug: 'vpn-proxy-tunnel',
    name: {
      en: 'Home Gateway & Tailscale Exit Node',
      ru: 'Home Gateway (Tailscale Exit Node VPN)',
    },
    category: 'research-infra',
    type: 'tooling',
    visibility: 'local-only',
    demoStatus: 'internal',
    thumbnail: {
      en: vpnProxyImg,
      ru: vpnProxyImg,
    },
    screenshots: {
      en: [vpnProxyImg, vpnProxyImg, vpnProxyImg],
      ru: [vpnProxyImg, vpnProxyImg, vpnProxyImg],
    },
    badge: {
      en: 'Tailscale Exit Node',
      ru: 'Tailscale VPN шлюз',
    },
    summary: {
      en: 'Encrypted mesh VPN infrastructure configuring home workstation as a Tailscale Exit Node with automated PowerShell connection and health scripts.',
      ru: 'Защищенная mesh-инфраструктура с настройкой домашнего ПК как шлюза Tailscale Exit Node и автоматизацией на PowerShell.',
    },
    purpose: {
      en: 'A private setup for routing a trusted remote Windows device through a home Tailscale exit node without opening inbound ports. No addresses, device names, or Tailnet details are published here.',
      ru: 'Приватная настройка маршрутизации доверенного удалённого Windows-устройства через домашний Tailscale exit node без открытия входящих портов. Адреса, имена устройств и данные Tailnet здесь не публикуются.',
    },
    features: {
      en: [
        'Tailscale Exit Node routing tunnel redirecting all outbound TCP/UDP traffic under home IP.',
        'Automated PowerShell management scripts (enable-exit-node.ps1, connect-remote.ps1, check-ip.ps1).',
        'Direct WireGuard peer-to-peer encryption with automatic NAT traversal and zero port-forwarding requirements.',
      ],
      ru: [
        'Туннелирование всего исходящего трафика через Tailscale Exit Node под домашним IP-адресом.',
        'Автоматизированные скрипты управления на PowerShell (enable-exit-node.ps1, connect-remote.ps1, check-ip.ps1).',
        'Прямое шифрование WireGuard P2P с автоматическим обходом NAT без необходимости проброса портов.',
      ],
    },
    technicalNotes: {
      en: [
        'Configured with Tailscale subnet routers, Windows service auto-startup, and PowerShell CLI wrappers.',
      ],
      ru: [
        'Настройка шлюзов подсетей Tailscale, автозапуск системной службы Windows и CLI-обертки PowerShell.',
      ],
    },
    stack: ['Tailscale', 'WireGuard', 'Mesh VPN', 'Exit Node Routing', 'PowerShell', 'Windows Service'],
    outcomes: {
      en: [
        'Documented a repeatable enable, connect, verify, and disable workflow while keeping network identifiers out of the portfolio.',
      ],
      ru: [
        'Описан воспроизводимый сценарий включения, подключения, проверки и отключения без публикации сетевых идентификаторов.',
      ],
    },
  },
];
