import asistApiImg from './assets/screenshots/asist-api.jpg';
import btcusdtImg from './assets/screenshots/btcusdt-research.jpg';
import calcEnImg from './assets/screenshots/calc-en.png';
import calcRuImg from './assets/screenshots/calc-ru.png';
import carCalcImg from './assets/screenshots/car-calc.png';
import hunyuan3dImg from './assets/screenshots/hunyuan3d.png';
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
import robloxSpaceImg from './assets/screenshots/roblox-space.png';
import tvImg from './assets/screenshots/tv.jpg';
import videogenEn1 from './assets/screenshots/videogen-en-1.png';
import videogenEn2 from './assets/screenshots/videogen-en-2.png';
import videogenEn3 from './assets/screenshots/videogen-en-3.png';
import volumepilotSiteImg from './assets/screenshots/volumepilot-site.png';
import volumepilotImg from './assets/screenshots/volumepilot.png';
import vpnProxyImg from './assets/screenshots/vpn-proxy.jpg';

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
      ru: 'Генерация 3D нейросетями, 3D-моделирование и аркадные игры для Roblox',
    },
    icon: 'gamepad-2',
  },
  {
    id: 'research-infra',
    title: {
      en: 'Quant Research & Cloud Infra',
      ru: 'Аналитика, бэкенд и инфраструктура',
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
  localFolder?: string;
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
    repo: 'DEN-2020/hurghada-marketplace',
    githubUrl: 'https://github.com/DEN-2020/hurghada-marketplace',
    siteUrl: 'https://nabiora.com/en/egypt',
    localFolder: 'Marketplace / Marketplace-admin',
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
      en: 'Multilingual classifieds marketplace for goods, real estate, vehicles, jobs, and local services in Egypt.',
      ru: 'Многоязычный маркетплейс объявлений для товаров, недвижимости, транспорта, услуг и работы в Египте.',
    },
    purpose: {
      en: 'Nabiora Marketplace is an end-to-end commerce platform tailored for the Hurghada and Red Sea region. It connects local businesses, expats, and residents across Russian, English, and Arabic locales with high-speed search, category filtering, user listings, and structured deal workflows.',
      ru: 'Полнофункциональная платформа электронной коммерции для региона Хургады и Красного моря. Объединяет экспатов, местных жителей и бизнес на русском, английском и арабском языках с быстрым гео-поиском и системой объявлений.',
    },
    features: {
      en: [
        'Tri-lingual localized catalog (RU / EN / AR) with RTL styling support.',
        'Comprehensive categories: Real Estate, Auto/Boats, Electronics, Jobs, and Services.',
        'User auth, profile dashboards, photo upload pipelines, and direct messaging channels.',
        'PWA support for responsive offline browsing and native home screen installation.',
      ],
      ru: [
        'Трехъязычный локализованный каталог (RU / EN / AR) с поддержкой RTL-интерфейса.',
        'Категории: Недвижимость, Авто/Яхты, Электроника, Вакансии и Услуги.',
        'Личный кабинет, загрузка фото с оптимизацией и внутренний чат.',
        'PWA-режим для быстрой работы на мобильных устройствах без магазинов приложений.',
      ],
    },
    technicalNotes: {
      en: [
        'Built with Vite, React 18, TypeScript, Tailwind CSS, Lucide icons, and modern state architecture.',
        'Backend includes RESTful endpoints, image compression, and security middleware.',
        'Includes companion administrative moderation portal (Marketplace-admin) with audit logs.',
      ],
      ru: [
        'Стек: React 18, TypeScript, Tailwind CSS, Lucide Icons, Next.js / Node.js бэкенд.',
        'Включает отдельную систему администрирования Marketplace-admin для модерации объявлений.',
        'Оптимизированный пайплайн сжатия изображений WebP и гео-привязка объектов.',
      ],
    },
    stack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PWA', 'i18n (AR/EN/RU)'],
    outcomes: {
      en: [
        'Delivers a complete production-grade marketplace tailored for multi-language markets.',
        'Demonstrates high-performance frontend architecture and localization mastery.',
      ],
      ru: [
        'Создан готовый к продакшену международный маркетплейс с полной локализацией.',
        'Высокая производительность загрузки страниц и отзывчивый мобильный интерфейс.',
      ],
    },
  },
  {
    slug: 'nabiora-community',
    name: {
      en: 'Nabiora Community Portal',
      ru: 'Nabiora Community (Портал сообщества)',
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
      en: 'Live SSR Portal',
      ru: 'Работает онлайн',
    },
    repo: 'DEN-2020/Nabiora-Community',
    githubUrl: 'https://github.com/DEN-2020/Nabiora-Community',
    siteUrl: 'https://community.nabiora.com/en',
    localFolder: 'Nabiora-Community',
    summary: {
      en: 'High-speed standalone SSR community hub, city directory, and local expatriate knowledge base.',
      ru: 'Высокоскоростной SSR-портал сообщества, городской справочник и база знаний для экспатов.',
    },
    purpose: {
      en: 'Engineered as an independent SSR knowledge network for community.nabiora.com, providing fast access to local city directories, medical facilities, legal services, resident discussions, and verified neighborhood guides.',
      ru: 'Автономный информационный портал сообщества: справочники проверенных врачей, юридических услуг, визовых правил, школы и обсуждения районов.',
    },
    features: {
      en: [
        'Server-Side Rendered (SSR) pages optimized for instant first paint and SEO indexation.',
        'Structured city directories: Healthcare, Embassies, Schools, Visa centers, and Leisure.',
        'Interactive topic discussion threads, search indexing, and tag taxonomy.',
        'Dark and light theme support with responsive mobile-first typography.',
      ],
      ru: [
        'SSR-рендеринг для мгновенной загрузки первого экрана и 100% индексации в поисковиках.',
        'Каталог городских сервисов: Медицина, Визы, Образование, Досуг.',
        'Интерактивные форумы, поиск по тегам и рубрикам.',
        'Светлая и темная темы оформления с мобильной адаптивностью.',
      ],
    },
    technicalNotes: {
      en: [
        'Built with modern SSR frameworks, TypeScript, and clean CSS modular tokens.',
        'Isolated architecture completely decoupled from marketplace data stores for maximum uptime.',
        'Includes automated Playwright visual regression snapshots across mobile, desktop, and 4K displays.',
      ],
      ru: [
        'Разработано на TypeScript с модульными CSS-токенами.',
        'Архитектурно изолирован от маркетплейса для гарантии максимальной отказоустойчивости.',
        'Покрыт визуальными тестами Playwright для экранов от 375px до 4K.',
      ],
    },
    stack: ['SSR', 'TypeScript', 'Responsive CSS', 'SEO Optimization', 'Playwright CI'],
    outcomes: {
      en: [
        'Achieves near-perfect Core Web Vitals and lightning-fast content delivery.',
        'Structures complex municipal and local community knowledge into clean navigation.',
      ],
      ru: [
        'Достигнуты высшие показатели Core Web Vitals в тестах Google PageSpeed.',
        'Удобная структура навигации по городской инфраструктуре.',
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
    visibility: 'public',
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
      en: 'Real Estate Portal',
      ru: 'Агентство недвижимости',
    },
    repo: 'DEN-2020/Nabiora-Real-Estate',
    githubUrl: 'https://github.com/DEN-2020/Nabiora-Real-Estate',
    localFolder: 'Nabiora-Real-Estate',
    summary: {
      en: 'Luxury real estate agency web portal with interactive property catalogs, map search, and specs filter.',
      ru: 'Официальный сайт агентства курортной недвижимости с интерактивным каталогом и фильтрами.',
    },
    purpose: {
      en: 'Official web application for the Nabiora Real Estate agency. Designed to present coastal apartments, villas, and commercial real estate with high-fidelity photo galleries, price filters, area calculation, and inquiry forms.',
      ru: 'Сайт агентства недвижимости на побережье: виллы, апартаменты у моря, коммерческие объекты с фотогалереями, фильтрами по спальням, видам на море и формами заявок.',
    },
    features: {
      en: [
        'Interactive property catalog with price ranges, bedroom counters, sea-view filters, and amenities.',
        'Dedicated property detail pages with photo carousels, payment plans, and neighborhood specs.',
        'Multi-currency price toggle (USD, EUR, EGP) and multi-language support (RU, EN, AR).',
        'Direct WhatsApp and consultation inquiry lead generator.',
      ],
      ru: [
        'Интерактивный каталог недвижимости с фильтрами по цене, спальням, виду на море и удобствам.',
        'Страницы объектов с галереями, планами рассрочки и описанием районов.',
        'Переключатель валют (USD, EUR, EGP) и мультиязычность.',
        'Быстрая отправка заявок на просмотр и в WhatsApp.',
      ],
    },
    technicalNotes: {
      en: [
        'Frontend built with modern reactive components, responsive CSS Grid, and custom select layers.',
        'Verified with automated Playwright screenshot testing across 1440px desktop and 390px mobile viewports.',
      ],
      ru: [
        'Построен на Vite, TypeScript, модульных CSS-компонентах и кастомных селектах.',
        'Протестирован Playwright-скриншотами на мобильных (390px) и десктопных экранах.',
      ],
    },
    stack: ['TypeScript', 'Vite', 'CSS Modules', 'Gallery Engine', 'Playwright'],
    outcomes: {
      en: [
        'Provides a high-conversion digital showroom for international real estate clients.',
        'Maintains ultra-clean card alignment and cohesive luxury visual identity.',
      ],
      ru: [
        'Создана стильная цифровая витрина для покупателей курортной недвижимости.',
        'Безупречное выравнивание элементов и высокая скорость работы.',
      ],
    },
  },
  {
    slug: 'nizam-al-tayyibat',
    name: {
      en: 'Nizam Al-Tayyibat Health Portal',
      ru: 'Nizam Al-Tayyibat (Портал здоровья)',
    },
    category: 'web-platforms',
    type: 'app',
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
      en: 'Live AI Health',
      ru: 'Работает онлайн',
    },
    repo: 'DEN-2020/nizam-al-tayyibat',
    githubUrl: 'https://github.com/DEN-2020/nizam-al-tayyibat',
    siteUrl: 'https://verdant-dusk-c3c590.netlify.app/',
    localFolder: 'Nizam-Al-Tayyibat-Portal',
    summary: {
      en: 'Interactive clinical nutrition ecosystem, biological digestive routing, and plate simulation.',
      ru: 'Интерактивная система питания: биологическая совместимость продуктов и симулятор тарелки с ИИ.',
    },
    purpose: {
      en: 'Implements a specialized dietary and metabolic guidance system based on biological digestion routing, food compatibility matrices, plate simulators, and food blacklist controls, integrated with AI-driven nutritional assistance.',
      ru: 'Система питания по методике профессора Diaa Al-Awadi: расчет биологической совместимости продуктов в желудке, контроль запрещенных сочетаний и ИИ-анализ меню через Google Gemini API.',
    },
    features: {
      en: [
        'Biological digestion matrix calculating real-time food compatibility and enzyme conflicts.',
        'Interactive Plate Simulator evaluating protein, carbohydrate, and fat absorption timing.',
        'Server-side Gemini AI integration for intelligent meal audits and custom dietary recommendations.',
        'Patient schedule timeline tracking meals, organ detox cycles, and metabolic states.',
      ],
      ru: [
        'Матрица совместимости продуктов и ферментов в реальном времени.',
        'Симулятор тарелки с оценкой времени переваривания белков, жиров и углеводов.',
        'Интеграция Google Gemini AI для аудита меню и персональных рекомендаций.',
        'Таймлайн приемов пищи и фаз детоксикации органов.',
      ],
    },
    technicalNotes: {
      en: [
        'Full-stack architecture with React, TypeScript, Tailwind CSS v4, Motion, and Google GenAI SDK.',
        'Secure server-side API proxy ensuring safe token handling and streaming answers.',
      ],
      ru: [
        'Стек: React 19, TypeScript, Tailwind CSS v4, Motion, Google Gemini API.',
        'Безопасный серверный прокси для работы с ИИ-моделями без утечки ключей.',
      ],
    },
    stack: ['React 19', 'TypeScript', 'Gemini AI API', 'Tailwind v4', 'Motion'],
    outcomes: {
      en: [
        'Transforms complex biomedical nutritional methodology into an intuitive interactive app.',
        'Leverages AI intelligence for dynamic personalized meal validation.',
      ],
      ru: [
        'Сложная медицинская методология превращена в удобный интерактивный веб-сервис.',
        'Интеграция передового ИИ в прикладную диетологию.',
      ],
    },
  },

  // 2. FinTech & Calculators
  {
    slug: 'calc',
    name: {
      en: 'FinCalc Analytics Suite',
      ru: 'FinCalc (Финансовый калькулятор)',
    },
    category: 'calculators',
    type: 'calculator',
    visibility: 'public',
    demoStatus: 'live',
    thumbnail: {
      en: calcEnImg,
      ru: calcRuImg,
    },
    badge: {
      en: 'Live PWA',
      ru: 'Работает онлайн',
    },
    repo: 'DEN-2020/calc',
    githubUrl: 'https://github.com/DEN-2020/calc',
    siteUrl: 'https://den-2020.github.io/calc/',
    localFolder: 'calc',
    summary: {
      en: 'Multi-page financial calculator suite for crypto trading, spot, perpetuities, and portfolio strategy.',
      ru: 'Мультистраничный калькулятор доходности, спот-сделок, фьючерсов и инвестиционных стратегий.',
    },
    purpose: {
      en: 'FinCalc groups practical financial calculation engines into an offline-first, multilingual PWA. Enables traders and investors to rapidly compute risk/reward ratios, DCA curves, liquidation thresholds, and compounding yields.',
      ru: 'Набор точных инструментов для трейдеров и инвесторов: мгновенный расчет уровней тейк-профита/стоп-лосса, плеча, точек ликвидации, усреднения (DCA) и сложного процента.',
    },
    features: {
      en: [
        'Specialized modules: Spot trading, Perpetuals margin, DCA investing, and Strategy modeling.',
        'Multi-language UI (English, Russian, and more) with instantaneous calculations.',
        'Progressive Web App (PWA) manifest with service worker caching for offline use.',
        'Dark mode toggle with responsive controls.',
      ],
      ru: [
        'Разделы: Спот-торговля, Фьючерсы/Маржа, DCA-инвестиции, Сложный процент.',
        'Мультиязычный интерфейс (RU, EN, FI) и мгновенный пересчет параметров.',
        'PWA-режим для автономной работы без интернета прямо из браузера.',
        'Удобная темная тема и интерактивные ползунки параметров.',
      ],
    },
    technicalNotes: {
      en: [
        'Static zero-dependency vanilla architecture for maximum performance and instant load times.',
        'Hosted on GitHub Pages directly from main branch with automated CI.',
      ],
      ru: [
        'Легковесный стек без тяжелых библиотек для мгновенного отклика (Zero Dependencies).',
        'Автономное кэширование через Service Worker и деплой на GitHub Pages.',
      ],
    },
    stack: ['HTML5', 'CSS3', 'JavaScript', 'PWA', 'GitHub Pages'],
    outcomes: {
      en: [
        'Delivers a zero-latency financial calculator used in live trading sessions.',
        'Requires zero server infrastructure while supporting offline mobile installations.',
      ],
      ru: [
        'Мгновенный отклик при расчете сложных финансовых моделей прямо во время торгов.',
        'Работает офлайн на смартфонах и ПК.',
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
    badge: {
      en: 'Live Demo',
      ru: 'Работает онлайн',
    },
    repo: 'DEN-2020/car-calc',
    githubUrl: 'https://github.com/DEN-2020/car-calc',
    siteUrl: 'https://den-2020.github.io/car-calc/',
    localFolder: 'car-calc',
    summary: {
      en: 'Vehicle acquisition, loan amortization, depreciation, and total cost of ownership (TCO) calculator.',
      ru: 'Калькулятор автокредита, графика платежей, амортизации и полной стоимости владения авто.',
    },
    purpose: {
      en: 'Dedicated automotive calculator that models complex car purchasing decisions: down payments, interest rates, depreciation curves, insurance, maintenance, and amortization schedules.',
      ru: 'Инструмент для расчета расходов при покупке автомобиля: первоначальный взнос, переплата по процентам, ежемесячный платеж, страховка и потеря остаточной стоимости.',
    },
    features: {
      en: [
        'Loan amortization schedule with monthly principal vs interest breakdown.',
        'Total Cost of Ownership (TCO) estimator including fuel, insurance, and maintenance.',
        'Interactive comparison between financing, cash purchase, and leasing.',
        'PWA mobile layout with multilingual support.',
      ],
      ru: [
        'График амортизации кредита с разделением на тело долга и проценты.',
        'Оценка совокупной стоимости владения (TCO) с учетом топлива и ТО.',
        'Сравнение покупки в кредит, лизинг и за наличные.',
        'Мобильная PWA-версия и мультиязычность.',
      ],
    },
    technicalNotes: {
      en: [
        'Built as a modular static frontend with clean CSS variable themes and standalone calculation scripts.',
        'Published on GitHub Pages for instant desktop and mobile browser access.',
      ],
      ru: [
        'Модульная статическая структура с чистыми CSS-переменными.',
        'Опубликован на GitHub Pages.',
      ],
    },
    stack: ['HTML5', 'CSS3', 'JavaScript', 'PWA', 'GitHub Pages'],
    outcomes: {
      en: [
        'Assists car buyers with transparent financial breakdown before dealership negotiations.',
        'Completely self-contained with no external API dependencies.',
      ],
      ru: [
        'Помогает покупателям рассчитать реальную стоимость кредита перед визитом в автосалон.',
      ],
    },
  },
  {
    slug: 'profit-calc',
    name: {
      en: 'Profit Calc (Spot & Perp)',
      ru: 'Profit Calc (Калькулятор трейдера)',
    },
    category: 'calculators',
    type: 'calculator',
    visibility: 'public',
    demoStatus: 'ready',
    thumbnail: {
      en: profitCalcImg,
      ru: profitCalcImg,
    },
    badge: {
      en: 'Crypto FinTech',
      ru: 'Крипто-трейдинг',
    },
    repo: 'DEN-2020/profit-calc',
    githubUrl: 'https://github.com/DEN-2020/profit-calc',
    localFolder: 'profit-calc',
    summary: {
      en: 'Precision profit, loss, liquidation point, and fee breakdown calculator for crypto leverage trading.',
      ru: 'Точный расчет профита, убытка, цены ликвидации и комиссий для маржинальной криптоторговли.',
    },
    purpose: {
      en: 'Profit Calc is engineered specifically for cryptocurrency derivatives traders. It models exact funding fees, exchange maker/taker tiers, liquidation buffers, and risk-adjusted return on capital.',
      ru: 'Калькулятор для деривативных трейдеров: точный расчет комиссий бирж (мейкер/тейкер), маржи, цены принудительной ликвидации и чистого PnL при любом плече (от 1x до 125x).',
    },
    features: {
      en: [
        'Interactive leverage slider (1x - 125x) with dynamic liquidation gauge indicator.',
        'Comprehensive PnL projection table with ROI percentage and dollar return.',
        'Exchange fee deduction calculator accounting for maker/taker rate differences.',
        'Dedicated pages for spot, perpetuals, investment DCA, and breakout strategies.',
      ],
      ru: [
        'Интерактивный выбор плеча (1x - 125x) и шкала риска ликвидации.',
        'Таблица прогноза PnL с процентом ROI и итоговой прибылью в USDT.',
        'Учет комиссий бирж за открытие и закрытие позиции.',
        'Раздельные экраны для спота, фьючерсов и инвестиционных планов.',
      ],
    },
    technicalNotes: {
      en: [
        'Lightweight client-side mathematical algorithms with service worker caching.',
        'Modular architecture ready for GitHub Pages deployment and embedding.',
      ],
      ru: [
        'Высокоточные клиентские математические алгоритмы с кэшированием.',
        'Легко встраивается в торговые терминалы и публикуется на статических хостингах.',
      ],
    },
    stack: ['HTML5', 'CSS3', 'JavaScript', 'PWA', 'Trading Math'],
    outcomes: {
      en: [
        'Prevents liquidation surprises by calculating exact margin requirements before order placement.',
        'Clean modular codebase easily expandable to new cryptocurrency exchanges.',
      ],
      ru: [
        'Исключает неожиданные ликвидации за счет точного предварительного расчета маржи.',
      ],
    },
  },

  // 3. Audio, Video & Media Software
  {
    slug: 'volumepilot',
    name: {
      en: 'VolumePilot Desktop Utility',
      ru: 'VolumePilot (Windows-утилита)',
    },
    category: 'audio-media',
    type: 'app',
    visibility: 'public',
    demoStatus: 'source',
    thumbnail: {
      en: volumepilotImg,
      ru: volumepilotImg,
    },
    badge: {
      en: 'Windows App',
      ru: 'Windows / C#',
    },
    repo: 'DEN-2020/VolumePilot',
    githubUrl: 'https://github.com/DEN-2020/VolumePilot',
    localFolder: 'VolumePilot',
    companion: {
      label: {
        en: 'VolumePilot Marketing Site',
        ru: 'Промо-сайт VolumePilot',
      },
      url: 'https://github.com/DEN-2020/VolumePilot-Website',
      type: 'site',
      note: {
        en: 'High-conversion single-page promotional website',
        ru: 'Официальный лендинг с описанием и загрузкой',
      },
    },
    summary: {
      en: 'Intelligent Windows background utility that monitors mic audio and ducks system volume during speech.',
      ru: 'Умная системная утилита Windows для автоматического приглушения фонового звука во время разговора.',
    },
    purpose: {
      en: 'VolumePilot solves the pain of loud background music or game audio while speaking on voice calls or streaming. It continuously listens to the microphone threshold and smoothly ducks background application audio with zero lag.',
      ru: 'Автоматическое приглушение (Audio Ducking) музыки, видео или игр при звуке вашего голоса в микрофоне. Идеально для стримеров, геймеров и звонков в Discord/Zoom.',
    },
    features: {
      en: [
        'Automated Audio Ducking with customizable attack and release envelope curves.',
        'Multiple interface layouts: Compact, Default, Studio, and Modern overlay modes.',
        'Per-application volume targeting allowing exclusion of specific voice chat channels.',
        'Low CPU and RAM footprint running quietly in the Windows system tray.',
      ],
      ru: [
        'Автоматический дакинг звука с настройкой плавности затухания и восстановления.',
        '4 режима интерфейса: Compact, Default, Studio и Modern.',
        'Выборочное приглушение конкретных приложений (браузер, плеер, игра).',
        'Минимальное потребление ресурсов (работает незаметно в трее Windows).',
      ],
    },
    technicalNotes: {
      en: [
        'Developed with .NET/C# and Windows Core Audio APIs (WASAPI) for low-latency audio capture.',
        'Includes custom installer packages, background service listeners, and UI hardware acceleration.',
      ],
      ru: [
        'Написано на C# / .NET с прямым использованием Windows Core Audio APIs (WASAPI).',
        'Низкая задержка обработки звука и поддержка аппаратного ускорения интерфейса.',
      ],
    },
    stack: ['C#', '.NET', 'WPF / WinUI', 'WASAPI Audio', 'Windows Tray'],
    outcomes: {
      en: [
        'Provides a professional stream-deck quality audio ducking experience for everyday users.',
        'Showcases deep native Windows audio subsystem and multithreaded desktop development.',
      ],
      ru: [
        'Профессиональный уровень управления звуком уровня студийных стрим-пультов.',
      ],
    },
  },
  {
    slug: 'volumepilot-website',
    name: {
      en: 'VolumePilot Marketing Website',
      ru: 'VolumePilot (Промо-сайт)',
    },
    category: 'audio-media',
    type: 'site',
    visibility: 'public',
    demoStatus: 'live',
    thumbnail: {
      en: volumepilotSiteImg,
      ru: volumepilotSiteImg,
    },
    badge: {
      en: 'Live Demo',
      ru: 'Работает онлайн',
    },
    repo: 'DEN-2020/VolumePilot-Website',
    githubUrl: 'https://github.com/DEN-2020/VolumePilot-Website',
    siteUrl: 'https://volumepilot.netlify.app/',
    localFolder: 'VolumePilotWebsite',
    companion: {
      label: {
        en: 'VolumePilot App Repo',
        ru: 'Репозиторий приложения',
      },
      url: 'https://github.com/DEN-2020/VolumePilot',
      type: 'app',
      note: {
        en: 'The native Windows application source code',
        ru: 'Исходный код Windows-приложения',
      },
    },
    summary: {
      en: 'Single-page responsive marketing site for the VolumePilot audio utility with interactive layout demos.',
      ru: 'Современный промо-лендинг для утилиты VolumePilot с интерактивной демонстрацией режимов.',
    },
    purpose: {
      en: 'High-converting product landing page designed to showcase VolumePilot features, highlight user testimonials, demonstrate screenshot layouts, and provide direct MSI/EXE download links.',
      ru: 'Сайт для презентации и скачивания VolumePilot: интерактивный просмотр режимов интерфейса, звуковые демонстрации и ссылки на установщик.',
    },
    features: {
      en: [
        'Hero section with dynamic audio waveform animations and prominent CTA buttons.',
        'Interactive layout switcher showcasing Studio, Compact, and Modern mode screenshots.',
        'Feature breakdown grid with technical audio specs and OS compatibility matrix.',
        'Optimized asset pipeline with OpenGraph social preview cards and SEO tags.',
      ],
      ru: [
        'Анимированная аудио-волна и кнопки быстрой загрузки.',
        'Интерактивный переключатель скриншотов разных режимов приложения.',
        'Техническая таблица совместимости с версиями Windows.',
        'Оптимизирован для поисковых систем и соцсетей (OpenGraph).',
      ],
    },
    technicalNotes: {
      en: [
        'Static frontend built with Vite, TypeScript, and modern responsive CSS.',
        'Zero backend requirements — easily deployable to GitHub Pages, Netlify, or Vercel.',
      ],
      ru: [
        'Быстрый статический фронтенд на Vite и TypeScript.',
        '100 баллов в Google PageSpeed Performance.',
      ],
    },
    stack: ['TypeScript', 'Vite', 'Modern CSS', 'Responsive UI', 'SEO & Social Cards'],
    outcomes: {
      en: [
        'Offers a polished commercial-grade web presence for the desktop software product.',
      ],
      ru: [
        'Стильная и убедительная презентация десктопного софта в вебе.',
      ],
    },
  },
  {
    slug: 'nightvoice',
    name: {
      en: 'NightVoice Audio & Web Engine',
      ru: 'NightVoice (Аудио-стабилизатор)',
    },
    category: 'audio-media',
    type: 'app',
    visibility: 'public',
    demoStatus: 'source',
    thumbnail: {
      en: nightvoiceImg,
      ru: nightvoiceImg,
    },
    badge: {
      en: 'Astro Web + Audio',
      ru: 'Astro + DSP',
    },
    repo: 'DEN-2020/NightVoice-Web',
    githubUrl: 'https://github.com/DEN-2020/NightVoice-Web',
    localFolder: 'NightVoice-Web / AudioStabilizator',
    companion: {
      label: {
        en: 'AudioStabilizator Engine',
        ru: 'Движок AudioStabilizator',
      },
      url: 'https://github.com/DEN-2020/NightVoice',
      type: 'repo',
      note: {
        en: 'DSP audio stabilization and volume compression algorithm',
        ru: 'Алгоритм динамической компрессии и выравнивания громкости',
      },
    },
    summary: {
      en: 'Web platform and DSP audio stabilizer for dynamic voice clarity and night-time volume leveling.',
      ru: 'Веб-сервис и DSP-алгоритм для стабилизации громкости речи и комфортного ночного прослушивания.',
    },
    purpose: {
      en: 'NightVoice provides intelligent audio processing that prevents volume spikes (explosions, loud sound effects) while amplifying quiet dialogue, making night listening and podcast streaming pleasant without touching the volume dial.',
      ru: 'Интеллектуальная обработка звука: убирает резкие перепады громкости в фильмах и играх, автоматически усиливая тихий шепот и приглушая резкие взрывы.',
    },
    features: {
      en: [
        'Astro-powered web portal presenting audio comparison demos and software docs.',
        'DSP dynamic range compression and whisper-amplification filters.',
        'Real-time frequency spectrum visualizer and latency-free audio playback.',
      ],
      ru: [
        'Портал на Astro с интерактивными примерами звука до/после.',
        'DSP компрессия динамического диапазона и усиление разборчивости речи.',
        'Спектральный визуализатор частот в реальном времени.',
      ],
    },
    technicalNotes: {
      en: [
        'Web application built with Astro framework for minimal JavaScript payload and fast hydration.',
        'Paired with native DSP audio stabilizer routines in the companion NightVoice repository.',
      ],
      ru: [
        'Фронтенд на фреймворке Astro для минимального размера JS-бандла.',
        'DSP-алгоритмы цифровой обработки сигналов.',
      ],
    },
    stack: ['Astro', 'TypeScript', 'Web Audio API', 'DSP Algorithms', 'AudioStabilizator'],
    outcomes: {
      en: [
        'Demonstrates cutting-edge web performance with Astro alongside digital signal processing.',
      ],
      ru: [
        'Сочетание современных веб-технологий и алгоритмов обработки аудио.',
      ],
    },
  },
  {
    slug: 'videogen',
    name: {
      en: 'VIDEOGEN Automated Studio',
      ru: 'VIDEOGEN (Автогенератор видео)',
    },
    category: 'audio-media',
    type: 'pipeline',
    visibility: 'public',
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
      en: 'AI Media Pipeline',
      ru: 'Видео-студия ИИ',
    },
    repo: 'DEN-2020/VIDEOGEN',
    githubUrl: 'https://github.com/DEN-2020/VIDEOGEN',
    localFolder: 'VIDEOGEN',
    summary: {
      en: 'Local-first automated short-form video generation pipeline with source verification, AI speech, and rendering.',
      ru: 'Автоматизированный локальный конвейер создания коротких видео с фактчекингом, ИИ-озвучкой и GPU-рендерингом.',
    },
    purpose: {
      en: 'VIDEOGEN automates the creation of factual, high-retention short-form video content (TikTok, YouTube Shorts, Reels). It conducts automated topic research, source validation, AI script generation, subtitle animation, and GPU video composition.',
      ru: 'Полный цикл создания вирусных коротких видео (Shorts/Reels/TikTok): автоматический мониторинг трендов, проверка фактов по источникам, генерация сценария, синтез голоса и сборка видеоряда через FFmpeg.',
    },
    features: {
      en: [
        'Automated Trend Radar that searches, audits, and ranks news stories and historical events.',
        'Multi-scene script generator with fact-checking safeguards to prevent AI hallucinations.',
        'Automated voiceover synthesis, dynamic subtitle overlays, and B-roll alignment.',
        'Local-first rendering queue producing production-ready MP4 videos with guarded publishing.',
      ],
      ru: [
        'Радар трендов для поиска и ранжирования актуальных тем.',
        'Генератор многосценарных текстов с фильтром недостоверной информации.',
        'Синтез дикторской речи и анимация субтитров.',
        'Локальный рендеринг MP4 на GPU с безопасной очередью публикаций.',
      ],
    },
    technicalNotes: {
      en: [
        'Full pipeline orchestrating Python backend, Node.js scripts, FFmpeg GPU acceleration, and Playwright research spiders.',
        'Frontend studio interface for scene preview, script editing, and live audio sync.',
      ],
      ru: [
        'Оркестрация Python, Node.js, GPU-ускорения FFmpeg и Playwright-краулеров.',
        'Студийный веб-интерфейс для предпросмотра сцен и синхронизации звука.',
      ],
    },
    stack: ['Python', 'Node.js', 'FFmpeg GPU', 'Playwright', 'AI Voice Synthesis', 'React UI'],
    outcomes: {
      en: [
        'Accelerates video content production from hours of manual editing to minutes of automated generation.',
      ],
      ru: [
        'Сокращение времени создания видеоролика с нескольких часов до 2-3 минут.',
      ],
    },
  },
  {
    slug: 'tv-media-portal',
    name: {
      en: 'TV Media & Stream Utilities',
      ru: 'TV & Media Scripts (Медиа-скрипты)',
    },
    category: 'audio-media',
    type: 'site',
    visibility: 'public',
    demoStatus: 'source',
    thumbnail: {
      en: tvImg,
      ru: tvImg,
    },
    repo: 'DEN-2020/tv',
    githubUrl: 'https://github.com/DEN-2020/tv',
    localFolder: 'tv',
    summary: {
      en: 'Lightweight media link resolver scripts, Lampa proxy companion, and browser TV utilities.',
      ru: 'Набор скриптов для парсинга медиа-потоков, онлайн-кинотеатров и Lampa-прокси.',
    },
    purpose: {
      en: 'TV is a collection of static browser scripts and companion proxy utilities for media aggregation, stream link resolution, and Smart TV extension development.',
      ru: 'Комплект модульных скриптов для Smart TV платформ, парсинга стриминговых ссылок, онлайн-кинотеатров и проксирования запросов.',
    },
    features: {
      en: [
        'Static JavaScript resolver modules for online cinema and media stream link validation.',
        'Integrated Lampa companion proxy structure for custom Smart TV plugins.',
        'Zero-dependency standalone client scripts for rapid browser testing.',
      ],
      ru: [
        'Модули резолвинга видеопотоков для медиаплееров.',
        'Интеграция с прокси-модулями для Lampa и Smart TV.',
        'Легкие клиентские скрипты без зависимостей.',
      ],
    },
    technicalNotes: {
      en: [
        'Static modular JavaScript repository with proxy middleware configurations.',
      ],
      ru: [
        'Модульный чистый JavaScript со структурой прокси-роутинга.',
      ],
    },
    stack: ['JavaScript', 'Media APIs', 'Streaming Protocols', 'Proxy Middleware'],
    outcomes: {
      en: [
        'Provides a clean, modular suite of media script utilities for Smart TV and browser platforms.',
      ],
      ru: [
        'Быстрые утилиты для работы с медиа-потоками в браузерах и ТВ-приставках.',
      ],
    },
  },

  // 4. Mobile & Productivity Systems
  {
    slug: 'kids-tracker',
    name: {
      en: 'Kids Tracker Family Suite',
      ru: 'Kids Tracker (Семейный трекер)',
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
      en: 'Live App + Android',
      ru: 'Работает онлайн + Android',
    },
    repo: 'DEN-2020/kids-tracker',
    githubUrl: 'https://github.com/DEN-2020/kids-tracker',
    siteUrl: 'https://kidstracker-ed3e9.web.app/',
    localFolder: 'kids-tracker / kids-tracker-android',
    companion: {
      label: {
        en: 'Android Mobile Client',
        ru: 'Android-клиент',
      },
      url: 'https://github.com/DEN-2020/kids-tracker-android',
      type: 'android',
      note: {
        en: 'Native mobile wrapper and Android build assets',
        ru: 'Нативная мобильная сборка и Android-манифест',
      },
    },
    summary: {
      en: 'Gamified family chore manager, point rewards shop, parent approval workflows, and Firebase backend.',
      ru: 'Геймифицированный менеджер детских обязанностей: баллы, магазин наград, родительский контроль и Firebase.',
    },
    purpose: {
      en: 'Kids Tracker transforms daily household routines into an engaging point-based game for children, while giving parents full control over task creation, approval gates, reward items, and family balance management.',
      ru: 'Превращает выполнение домашних дел и уроков в увлекательную игру с зарабатыванием баллов и обменом на реальные награды или карманные деньги с одобрения родителей.',
    },
    features: {
      en: [
        'Child UI: interactive chore cards with points, 5-second hold-to-confirm mechanic, and reward progress.',
        'Star Shop: custom family reward catalog with point-to-euro exchange rates and achievement badges.',
        'Parent Admin Panel: task scheduling, auto-repeat rules, instant approvals, and multi-child switching.',
        'Family Onboarding: Firebase Auth, invite link generator (?join=CODE), and multi-tenant Firestore sync.',
      ],
      ru: [
        'Детский интерфейс: карточки задач, таймеры, удержание кнопки 5 секунд для подтверждения.',
        'Магазин наград: обмен баллов на подарки, конвертация в валюту и система ачивок.',
        'Родительская панель: назначение дел, автоповтор, подтверждение выполненных задач.',
        'Семейный вход по коду ссылки (?join=CODE), Firebase Auth и синхронизация в реальном времени.',
      ],
    },
    technicalNotes: {
      en: [
        'Frontend built with React 19, Vite, TypeScript, Recharts, Lucide icons, and PWA tooling.',
        'Backend powered by Firebase Firestore real-time snapshots, Cloud Functions, and Firebase Storage.',
        'Deployed live at kidstracker-ed3e9.web.app with companion Android repository.',
      ],
      ru: [
        'Фронтенд: React 19, TypeScript, Recharts, PWA.',
        'Бэкенд: Firebase Firestore (real-time listeners), Cloud Functions, Auth.',
        'Задеплоен и работает онлайн на kidstracker-ed3e9.web.app.',
      ],
    },
    stack: ['React 19', 'TypeScript', 'Firebase Firestore', 'Cloud Functions', 'PWA', 'Android'],
    outcomes: {
      en: [
        'Proven production-ready family motivation app balancing fun child UX with strict parent controls.',
      ],
      ru: [
        'Полноценное семейное приложение, внедренное в реальное повседневное использование.',
      ],
    },
  },

  // 5. AI, 3D Pipelines & Game Dev
  {
    slug: 'hunyuan3d-docker',
    name: {
      en: 'Hunyuan3D-2 Generative Pipeline',
      ru: 'Hunyuan3D-2 (3D ИИ-пайплайн)',
    },
    category: 'ai-3d-gamedev',
    type: 'pipeline',
    visibility: 'public',
    demoStatus: 'source',
    thumbnail: {
      en: hunyuan3dImg,
      ru: hunyuan3dImg,
    },
    badge: {
      en: 'Neural 3D AI',
      ru: 'Нейро-3D',
    },
    repo: 'DEN-2020/Hunyuan3D-2-docker',
    githubUrl: 'https://github.com/DEN-2020/Hunyuan3D-2-docker',
    localFolder: 'Hunyuan3D-2-docker / 3D',
    summary: {
      en: 'Dockerized neural 3D mesh and texture synthesis pipeline with GPU acceleration and API gateway.',
      ru: 'Docker-контейнер для генерации 3D-моделей и PBR-текстур с помощью нейросетей на GPU.',
    },
    purpose: {
      en: 'Packages the state-of-the-art Hunyuan3D-2 AI generative model into an isolated, reproducible Docker container environment for rapid text-to-3D and image-to-3D mesh generation.',
      ru: 'Изолированное и готовое к развертыванию Docker-окружение для генерации 3D-моделей по тексту и картинкам на базе нейросети Hunyuan3D-2 с поддержкой CUDA.',
    },
    features: {
      en: [
        'Multi-view image to high-resolution 3D polygonal mesh synthesis (.OBJ / .GLB).',
        'PBR texture generation with normal maps, roughness, and diffuse lighting channels.',
        'Containerized CUDA / PyTorch environment ensuring seamless GPU reproduction.',
        'REST API endpoints for automated integration into 3D modeling and game engine pipelines.',
      ],
      ru: [
        'Синтез полигональных 3D-сеток высокого разрешения (.OBJ / .GLB) по фото.',
        'Генерация PBR-текстур (диффуз, карты нормалей, шероховатость).',
        'Контейнеризованное CUDA/PyTorch окружение без конфликтов зависимостей.',
        'REST API для интеграции с Blender и игровыми движками.',
      ],
    },
    technicalNotes: {
      en: [
        'Docker container optimized for NVIDIA CUDA runtime with PyTorch and Triton dependencies.',
        'Includes batch processing scripts and automated model checkpoint loaders.',
      ],
      ru: [
        'Оптимизировано для видеокарт NVIDIA (CUDA runtime, PyTorch, Triton).',
      ],
    },
    stack: ['Docker', 'Python', 'PyTorch', 'CUDA', '3D Neural Synthesis', 'Blender Pipeline'],
    outcomes: {
      en: [
        'Eliminates environment setup friction for heavy neural 3D pipelines.',
      ],
      ru: [
        'Автоматизация создания 3D-ассетов для игр и виртуальной реальности.',
      ],
    },
  },
  {
    slug: 'roblox-space-shooter',
    name: {
      en: 'Roblox Space Shooter Arcade',
      ru: 'Roblox Space Shooter (Аркада)',
    },
    category: 'ai-3d-gamedev',
    type: 'game',
    visibility: 'local-only',
    demoStatus: 'internal',
    thumbnail: {
      en: robloxSpaceImg,
      ru: robloxSpaceImg,
    },
    badge: {
      en: 'Arcade Game',
      ru: 'Roblox / Luau',
    },
    localFolder: 'ROBLOX_SPACE / ROBLOX',
    summary: {
      en: 'Vertical arcade galaxy space shooter prototype for Roblox with custom Blender ships, bosses, and FX.',
      ru: 'Космический аркадный шутер для Roblox: 3D-корабли из Blender, волны врагов, лазеры и боссы.',
    },
    purpose: {
      en: 'An action-packed vertical arcade space shooter game built for the Roblox engine. Features drag-to-move ship physics, bullet hell projectile patterns, power-up systems, multi-stage boss encounters, and rank progression.',
      ru: 'Динамичный космический вертикальный скролл-шутер в Roblox: физика управления кораблем, волны врагов, прокачка вооружения, система рангов и боссы.',
    },
    features: {
      en: [
        'Responsive drag-to-move spacecraft controls optimized for mobile touch and PC keyboards.',
        'Dynamic wave spawner with procedural enemy squadrons, projectile patterns, and lasers.',
        'Custom 3D starships, weapons, pickups, and planet environments modeled in Blender.',
        'Pilot rank progression, high score leaderboards, and sound effect engine.',
      ],
      ru: [
        'Отзывчивое управление кораблем на тач-экранах и ПК.',
        'Процедурные волны врагов, снаряды, лазерные лучи и бонусы.',
        '3D-модели звездолетов и планет, созданные в Blender.',
        'Таблица лидеров, прокачка пилота и звуковые эффекты.',
      ],
    },
    technicalNotes: {
      en: [
        'Built with Lua / Luau, Roblox Studio engine, and custom modular game state machines.',
        'Includes Blender asset pipeline presets and AI-assisted contact sheets for art generation.',
      ],
      ru: [
        'Разработано на Luau в среде Roblox Studio с модульной архитектурой стейтов.',
        'Пайплайн импорта моделей из Blender и генерация спрайтов.',
      ],
    },
    stack: ['Luau', 'Roblox Studio', 'Blender 3D', 'Game Mechanics', 'VFX & Particle Systems'],
    outcomes: {
      en: [
        'Demonstrates real-time game architecture, hitbox collision math, and player retention loops.',
      ],
      ru: [
        'Пример создания законченного игрового прототипа с кастомным 3D-артом.',
      ],
    },
  },

  // 6. Quant Research & Cloud Infra
  {
    slug: 'btcusdt-edge-research',
    name: {
      en: 'BTC/USDT Edge Research & Audit',
      ru: 'BTC/USDT Quant Audit (Аналитика)',
    },
    category: 'research-infra',
    type: 'tooling',
    visibility: 'private',
    demoStatus: 'internal',
    thumbnail: {
      en: btcusdtImg,
      ru: btcusdtImg,
    },
    badge: {
      en: 'Quant Audit',
      ru: 'Количественный анализ',
    },
    repo: 'DEN-2020/btcusdt-edge-research-audit-20260504',
    githubUrl: 'https://github.com/DEN-2020/btcusdt-edge-research-audit-20260504',
    localFolder: 'btcusdt-edge-research-audit-20260504',
    summary: {
      en: 'Quantitative trading research, market microstructure audit, and backtesting framework for BTC/USDT.',
      ru: 'Количественные исследования рынка, аудит микроструктуры книги ордеров и бэктестинг торговых стратегий.',
    },
    purpose: {
      en: 'A deep statistical research and algorithmic backtesting engine investigating historical price action, order book liquidity imbalances, volatility breakout filters, and statistical edge validity for Bitcoin derivatives.',
      ru: 'Фреймворк статистического анализа тиковых данных и минутных свечей BTC/USDT: проверка статистического преимущества алгоритмов, расчет коэффициентов Шарпа/Сортино и матриц просадок.',
    },
    features: {
      en: [
        'High-resolution tick-level and 1-minute candle historical data ingest engine.',
        'Quantitative performance metrics: Sharpe Ratio, Sortino Ratio, Max Drawdown, and Profit Factor.',
        'Drawdown risk matrices and parameter sensitivity heatmaps to prevent overfitting.',
        'Order execution simulation accounting for exchange slippage and maker/taker fees.',
      ],
      ru: [
        'Обработка исторических тиковых данных и минутных баров.',
        'Расчет метрик: Sharpe, Sortino, Max Drawdown, Profit Factor, CAGR.',
        'Тепловые карты устойчивости параметров для защиты от переподгонки.',
        'Симуляция реального исполнения ордеров с учетом проскальзывания и комиссий.',
      ],
    },
    technicalNotes: {
      en: [
        'Developed with Python, Pandas, NumPy, and statistical data visualization libraries.',
      ],
      ru: [
        'Python, Pandas, NumPy, Jupyter, статистические тесты устойчивости.',
      ],
    },
    stack: ['Python', 'Pandas', 'NumPy', 'Quantitative Modeling', 'Backtesting Engine'],
    outcomes: {
      en: [
        'Validates trading models with mathematical rigor before deploying capital.',
      ],
      ru: [
        'Математически строгое подтверждение гипотез до запуска на реальном капитале.',
      ],
    },
  },
  {
    slug: 'asist-api',
    name: {
      en: 'AssistJarvis AI Orchestrator',
      ru: 'AssistJarvis (AI-оркестратор)',
    },
    category: 'research-infra',
    type: 'tooling',
    visibility: 'private',
    demoStatus: 'internal',
    thumbnail: {
      en: asistApiImg,
      ru: asistApiImg,
    },
    badge: {
      en: 'AI Microservice',
      ru: 'Микросервис AI',
    },
    repo: 'DEN-2020/asist-api',
    githubUrl: 'https://github.com/DEN-2020/asist-api',
    localFolder: 'asist-api / AssistJarvisTools',
    summary: {
      en: 'Personal AI assistant backend, microservice orchestrator, webhook handlers, and tooling bridge.',
      ru: 'Бэкенд персонального AI-ассистента, маршрутизация вебхуков, системные скрипты и интеграции.',
    },
    purpose: {
      en: 'Backend coordination service that empowers an AI assistant with access to local system APIs, knowledge bases, webhook triggers, file transformations, and automated workflow execution.',
      ru: 'Серверная платформа персонального ассистента: выполнение команд, вызов внешних инструментов, обработка входящих вебхуков и автоматизация рутинных рабочих процессов.',
    },
    features: {
      en: [
        'RESTful endpoint router for natural language commands and structured tool calls.',
        'Webhook listener handling real-time notifications and external cloud event triggers.',
        'Low-latency microservice pipeline with latency monitoring and token efficiency tracking.',
      ],
      ru: [
        'REST API маршрутизатор для выполнения структурированных команд.',
        'Обработчик вебхуков и системных оповещений в реальном времени.',
        'Микросервисная архитектура с минимальной задержкой отклика.',
      ],
    },
    technicalNotes: {
      en: [
        'Lightweight Node.js / TypeScript microservice architecture with structured JSON schemas.',
      ],
      ru: [
        'Node.js / TypeScript микросервис с валидацией JSON-схем.',
      ],
    },
    stack: ['Node.js', 'TypeScript', 'REST API', 'Webhook Engine', 'AI Tooling'],
    outcomes: {
      en: [
        'Serves as the nerve center for personal developer automation and AI agent tools.',
      ],
      ru: [
        'Центральный узел автоматизации разработчика и AI-инструментов.',
      ],
    },
  },
  {
    slug: 'vpn-proxy-tunnel',
    name: {
      en: 'Home Gateway & Tailscale Proxy',
      ru: 'Home Gateway (VPN-туннель)',
    },
    category: 'research-infra',
    type: 'tooling',
    visibility: 'local-only',
    demoStatus: 'internal',
    thumbnail: {
      en: vpnProxyImg,
      ru: vpnProxyImg,
    },
    badge: {
      en: 'Mesh Network',
      ru: 'Сетевой шлюз',
    },
    localFolder: 'VPN_PROXY',
    summary: {
      en: 'Residential exit node, Tailscale mesh tunnel, and network routing gateway for secure remote development.',
      ru: 'Домашний шлюз и Tailscale Exit Node для защищенного удаленного доступа и тестирования.',
    },
    purpose: {
      en: 'Configures a secure, encrypted mesh network gateway allowing remote development machines and test devices across the globe to tunnel all network traffic through a home residential IP with full protocol support.',
      ru: 'Настройка безопасного зашифрованного сетевого туннеля (Tailscale/WireGuard): позволяет удаленным ноутбукам и смартфонам выходить в интернет через домашний IP-адрес со сквозной маршрутизацией всего трафика.',
    },
    features: {
      en: [
        'Full-tunnel Tailscale Exit Node routing entire system traffic (TCP/UDP, native apps, game clients).',
        'Encrypted WireGuard mesh topology connecting multiple developer laptops, phones, and tablets.',
        'Low-overhead network bridge ensuring maximum bandwidth throughput (450+ Mbps) and low latency.',
      ],
      ru: [
        'Маршрутизация всего системного трафика (TCP/UDP, приложения, игровые клиенты).',
        'Шифрованная ячеистая топология WireGuard для всех рабочих устройств.',
        'Высокая пропускная способность без задержек и утечек трафика.',
      ],
    },
    technicalNotes: {
      en: [
        'Implemented with Tailscale, WireGuard kernel modules, and Windows PowerShell routing scripts.',
      ],
      ru: [
        'Стек: Tailscale, WireGuard, PowerShell скрипты сетевой маршрутизации.',
      ],
    },
    stack: ['Tailscale', 'WireGuard', 'Network Routing', 'PowerShell', 'Mesh VPN'],
    outcomes: {
      en: [
        'Enables seamless remote testing of geo-restricted services and native gaming clients from anywhere.',
      ],
      ru: [
        'Удобное удаленное тестирование сервисов и нативных клиентов из любой точки мира.',
      ],
    },
  },
];
