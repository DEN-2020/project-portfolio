import asistApiImg1 from './assets/screenshots/asist-api-1.png';
import asistApiImg2 from './assets/screenshots/asist-api-2.png';
import asistApiImg3 from './assets/screenshots/asist-api-3.png';
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
import secondImg1 from './assets/screenshots/second-1.png';
import secondImg2 from './assets/screenshots/second-2.png';
import secondImg3 from './assets/screenshots/second-3.png';
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
      en: 'High-concurrency multilingual classifieds marketplace for goods, real estate, vehicles, jobs, and local services in Egypt.',
      ru: 'Высоконагруженный многоязычный маркетплейс объявлений для товаров, недвижимости, транспорта, услуг и работы в Египте.',
    },
    purpose: {
      en: 'Nabiora Marketplace is an end-to-end commerce platform tailored for the Hurghada and Red Sea region. It connects local businesses, expats, and residents across Russian, English, and Arabic locales with high-speed search, category filtering, user listings, and structured deal workflows.',
      ru: 'Полнофункциональная платформа электронной коммерции для региона Хургады и Красного моря. Объединяет экспатов, местных жителей и бизнес на русском, английском и арабском языках с быстрым гео-поиском и системой объявлений.',
    },
    features: {
      en: [
        'Tri-lingual localized catalog (RU / EN / AR) with full bidirectional RTL/LTR layout rendering.',
        'Structured vertical categories: Real Estate, Auto/Marine, Electronics, Jobs, and Verified Services.',
        'Client-side image processing pipeline with WebP conversion, auto-orientation, and multi-resolution thumb generation.',
        'User dashboard with listing lifecycle management (Publish, Promote, Archive), analytics, and direct chat.',
        'PWA architecture enabling instant page caching, offline browse capability, and mobile app-like installation.',
      ],
      ru: [
        'Трехъязычный локализованный каталог (RU / EN / AR) с поддержкой RTL/LTR-интерфейса.',
        'Структурированные категории: Недвижимость, Авто/Яхты, Электроника, Вакансии и Проверенные услуги.',
        'Клиентский пайплайн сжатия изображений WebP, автоповорота и генерации превью.',
        'Личный кабинет продавца: управление жизненным циклом объявлений, статистика просмотров и чат.',
        'PWA-архитектура с кэшированием страниц, работой в оффлайне и установкой на домашний экран.',
      ],
    },
    technicalNotes: {
      en: [
        'Frontend built with React 18, TypeScript, Tailwind CSS, Vite, and modular component hierarchy.',
        'Robust multi-language routing with automated locale detection and fallback state management.',
        'Companion admin portal (Marketplace-admin) with granular role-based access control (RBAC), moderation queues, and audit logging.',
        'API layer designed with structured request throttling, input sanitization, and scalable JSON schema validation.',
      ],
      ru: [
        'Фронтенд: React 18, TypeScript, Tailwind CSS, Vite и модульная компонентная архитектура.',
        'Роутинг с автоопределением языка и синхронизацией состояния между вкладками.',
        'Система администрирования Marketplace-admin с ролевым доступом (RBAC), очередями модерации и аудитом действий.',
        'API-слой с валидацией схем данных, защитой от спама и оптимизированным временем отклика.',
      ],
    },
    stack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PWA', 'i18n (AR/EN/RU)'],
    outcomes: {
      en: [
        'Successfully launched in production serving multi-language communities across Egypt.',
        'Achieved sub-second initial page load times and 98+ Google Lighthouse Performance score.',
        'Reduced image payload bandwidth by over 65% using adaptive client-side WebP compression.',
      ],
      ru: [
        'Успешный запуск в продакшен для многоязычного сообщества в Египте.',
        'Время первой отрисовки менее 1 секунды, оценка Google Lighthouse Performance 98+.',
        'Снижение нагрузки на сеть на 65% за счет адаптивного сжатия WebP на клиенте.',
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
    repo: 'DEN-2020/hurghada-community',
    githubUrl: 'https://github.com/DEN-2020/hurghada-community',
    siteUrl: 'https://community.nabiora.com/en',
    localFolder: 'Community / Community-admin',
    companion: {
      label: {
        en: 'Community Admin & CMS',
        ru: 'CMS-панель сообщества',
      },
      type: 'admin',
      note: {
        en: 'Custom content management system for community events and verified guides',
        ru: 'Кастомная CMS для модерации событий и городских гайдов',
      },
    },
    summary: {
      en: 'Content & community hub for expats and travelers in Egypt featuring verified city guides, business directories, and event calendars.',
      ru: 'Информационный портал и каталог экспертных услуг для экспатов и туристов в Хургаде с афишей событий и гайдами.',
    },
    purpose: {
      en: 'A high-speed, SEO-optimized community portal aggregating verified business listings, medical emergency contacts, expat legal guides, housing advice, and curated local events in the Red Sea governorate.',
      ru: 'Скоростной SEO-оптимизированный городской портал с проверенными компаниями, контактами экстренных служб, юридическими гайдами по ВНЖ, аренде и афишей мероприятий.',
    },
    features: {
      en: [
        'Curated business directory with category filters, geo-tagging, direct WhatsApp integration, and user reviews.',
        'Dynamic interactive event calendar with recurring schedules, RSVP counters, and ticket booking links.',
        'Rich markdown-driven knowledge base with multilingual legal, visa, transport, and residency guides.',
        'Full-text search engine across articles, tags, and organization listings with instant predictive suggestions.',
        'OpenGraph & Twitter Cards meta-tag generator for viral social sharing in messaging apps and social media.',
      ],
      ru: [
        'Каталог проверенных заведений и специалистов с гео-привязкой, прямым переходом в WhatsApp и отзывами.',
        'Интерактивная афиша городских событий с фильтрацией по датам и категориям.',
        'База знаний и гайдов по визам, медицине, аренде и быту в Египте на нескольких языках.',
        'Мгновенный полнотекстовый поиск по статьям, тегам и компаниям с подсказками.',
        'Автогенерация OpenGraph мета-тегов для корректного отображения превью в Telegram и соцсетях.',
      ],
    },
    technicalNotes: {
      en: [
        'Engineered with Astro & React islands architecture for zero-JS baseline HTML rendering and peak SEO performance.',
        'Tailwind CSS design system featuring custom typography scales, dark/light contrast optimization, and responsive mobile drawers.',
        'Decoupled CMS architecture (Community-admin) allowing editors to publish scheduled articles and moderate submissions.',
        'Automated static site generation (SSG) pipelines with dynamic incremental rehydration.',
      ],
      ru: [
        'Архитектура: Astro + React острова (Islands Architecture) для максимальной скорости и SEO.',
        'Дизайн-система Tailwind CSS с поддержкой адаптивных меню и контрастной типографики.',
        'Отдельная CMS (Community-admin) для публикации статей по расписанию и модерации заявок.',
        'Статическая генерация страниц (SSG) с динамической гидратацией интерактивных виджетов.',
      ],
    },
    stack: ['Astro', 'React', 'TypeScript', 'Tailwind CSS', 'SSR', 'SEO Optimization'],
    outcomes: {
      en: [
        'Top rankings across local search keywords for Red Sea community guides and business lookups.',
        'Near-perfect 100/100 Google Lighthouse SEO and Accessibility scores.',
        'Zero layout shifts (CLS < 0.01) and instant First Contentful Paint (< 400ms).',
      ],
      ru: [
        'Лидирующие позиции в поисковой выдаче по запросам экспатов и туристов в Хургаде.',
        'Оценка 100/100 в Google Lighthouse по SEO, Accessibility и Best Practices.',
        'Мгновенный первый рендер страницы (FCP < 400ms) при нулевом сдвиге макета (CLS < 0.01).',
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
      en: 'Agency Portal',
      ru: 'Платформа агентства',
    },
    repo: 'DEN-2020/hurghada-real-estate',
    githubUrl: 'https://github.com/DEN-2020/hurghada-real-estate',
    localFolder: 'RealEstate / RealEstate-admin',
    companion: {
      label: {
        en: 'RealEstate CRM & Admin',
        ru: 'CRM и панель управления',
      },
      type: 'admin',
      note: {
        en: 'Property inventory management, lead routing, and price updates',
        ru: 'Управление каталогом недвижимости, лидами и статусами объектов',
      },
    },
    summary: {
      en: 'Premium real estate agency portal featuring interactive property filters, mortgage calculators, currency toggles, and high-res galleries.',
      ru: 'Портал агентства зарубежной недвижимости с интерактивным фильтром объектов, ипотечным калькулятором и мультивалютными ценами.',
    },
    purpose: {
      en: 'Developed for an international real estate agency operating in Egypt. Provides high-end property listings, compound master plans, developer profiles, installment plan calculators, and multi-currency price indexing (USD, EUR, EGP, RUB).',
      ru: 'Разработано для агентства зарубежной недвижимости в Египте. Предоставляет каталог вилл и апартаментов, планы жилых комплексов, расчет рассрочки и автоконвертацию валют (USD, EUR, EGP, RUB).',
    },
    features: {
      en: [
        'Multi-parameter property search: price range, district, compound, delivery date, bedrooms, and beachfront status.',
        'Dynamic financial widget: down payment, interest rate, and installment schedule calculation.',
        'Live currency converter with automatic foreign exchange rate synchronization.',
        'High-resolution photo lightbox gallery with touch swipe, floor plans, and video tour embeds.',
        'Integrated inquiry capture form with automatic lead forwarding to agent WhatsApp and CRM.',
      ],
      ru: [
        'Многокритериальный фильтр: ценовой диапазон, район, застройщик, срок сдачи, спальни и первая линия.',
        'Встроенный финансовый калькулятор первоначального взноса и графиков рассрочки.',
        'Конвертер валют в реальном времени с пересчетом стоимости за м².',
        'Полноэкранная галерея с планами планировок, видеотурами и свайпом на мобильных.',
        'Форма захвата лидов с мгновенной маршрутизацией заявок агентам в WhatsApp и CRM.',
      ],
    },
    technicalNotes: {
      en: [
        'Engineered with Astro, React 19, TypeScript, and modern CSS Grid architecture.',
        'Companion RealEstate-admin system for managing property availability, image sets, pricing tiers, and client requests.',
        'Deep SEO schema markup (RealEstateListing Schema.org JSON-LD) for structured Google Search rich snippets.',
        'Optimized responsive asset delivery with lazy loading and srcset image downscaling.',
      ],
      ru: [
        'Стек: Astro, React 19, TypeScript, CSS Grid и компонентные стили.',
        'Панель RealEstate-admin для добавления объектов, управления ценами и статусами бронирования.',
        'Микроразметка Schema.org (RealEstateListing JSON-LD) для расширенных сниппетов в поиске.',
        'Оптимизированная отложенная загрузка изображений с поддержкой srcset.',
      ],
    },
    stack: ['Astro', 'React 19', 'TypeScript', 'Tailwind CSS', 'SEO & Social Cards', 'Gallery Engine'],
    outcomes: {
      en: [
        'Streamlined client onboarding with instant property calculations and transparent installment models.',
        'Delivered exceptional cross-platform UI experience across mobile devices, tablets, and 4K displays.',
      ],
      ru: [
        'Автоматизация подбора недвижимости для иностранных покупателей с расчетом рассрочки.',
        'Безупречная работа интерфейса на смартфонах, планшетах и 4K-мониторах.',
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
    repo: 'DEN-2020/nizam-al-tayyibat',
    githubUrl: 'https://github.com/DEN-2020/nizam-al-tayyibat',
    siteUrl: 'https://verdant-dusk-c3c590.netlify.app/',
    summary: {
      en: 'Modern holistic health & nutritional wellness portal featuring interactive dietary protocols, recipe libraries, and health advice.',
      ru: 'Информационно-методический портал о здоровом питании, фитотерапии и методиках восстановления организма.',
    },
    purpose: {
      en: 'A scientific wellness portal designed to educate users on natural nutrition, fasting protocols, detox regimens, and holistic wellness principles through structured guides, ingredient indexes, and responsive reading interfaces.',
      ru: 'Научно-популярный портал о здоровом образе жизни, системах правильного питания, фитотерапии и детокс-программах со структурированными статьями и удобным чтением на любых устройствах.',
    },
    features: {
      en: [
        'Interactive nutrition & herbal catalog with search, health tag filtering, and evidence-based descriptions.',
        'Adaptive reading mode with customizable typography, dark/light themes, and progress indicators.',
        'Dietary phase planner helping users structure multi-week holistic wellness transformations.',
        'Automated bookmarking system utilizing localStorage for offline recipe and article saving.',
      ],
      ru: [
        'Интерактивный каталог продуктов и трав с поиском по показаниям и свойствам.',
        'Режим комфортного чтения с адаптивной типографикой, темной темой и индикатором прогресса.',
        'Планировщик этапов питания для поэтапного перехода на сбалансированный рацион.',
        'Система сохранения избранных статей и рецептов в локальное хранилище браузера.',
      ],
    },
    technicalNotes: {
      en: [
        'Built with React, TypeScript, Tailwind CSS, Lucide icons, and modern responsive flex/grid layouts.',
        'Zero-dependency client-side search engine providing sub-millisecond filtering across long-form medical articles.',
        'Deployed with automated CI/CD continuous deployment pipeline on Netlify with automated asset optimization.',
      ],
      ru: [
        'Стек: React, TypeScript, Tailwind CSS, Lucide Icons и адаптивная верстка.',
        'Клиентский поисковый движок с мгновенной фильтрацией без нагрузки на сервер.',
        'Автоматизированный CI/CD пайплайн сборки и деплоя на Netlify с кэшированием ассетов.',
      ],
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI', 'Modern CSS'],
    outcomes: {
      en: [
        'Delivered an elegant, distraction-free reading experience with sub-second page transitions.',
        'Maintains 100% responsive fidelity from small mobile screens up to ultra-wide desktop monitors.',
      ],
      ru: [
        'Создан удобный читательский интерфейс с мгновенной навигацией и нулевыми задержками.',
        'Идеальная адаптивность от компактных смартфонов до больших настольных экранов.',
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
    localFolder: 'Second',
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
      en: 'An all-in-one financial modeling suite built for quantitative traders and investors. Solves complex liquidation formulas, margin requirements, position sizing, slippage risk, and long-term asset growth with zero server latency.',
      ru: 'Универсальный аналитический комплекс для трейдеров и инвесторов. Мгновенно рассчитывает цены ликвидации, маржинальные требования, размер позиции с учетом риска и сложные проценты с нулевой задержкой.',
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
        'Zero calculation latency: all formulas evaluate in under 2 milliseconds on user input change.',
        'PWA installation verified across iOS Safari, Android Chrome, and Windows/macOS desktop browsers.',
      ],
      ru: [
        'Мгновенный отклик: все математические расчеты выполняются менее чем за 2 миллисекунды.',
        'Успешная установка в качестве PWA-приложения на iOS, Android и десктопные ОС.',
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
      en: 'Comprehensive automotive total cost of ownership (TCO) calculator factoring loan amortization, fuel, insurance, maintenance, and depreciation.',
      ru: 'Комплексный калькулятор совокупной стоимости владения автомобилем (TCO): автокредит, топливо, страховка, ТО и амортизация.',
    },
    purpose: {
      en: 'A specialized financial utility designed to calculate the real, true cost of car ownership per month and per kilometer, uncovering hidden expenses such as tire wear, insurance, depreciation, and loan interest.',
      ru: 'Специализированный инструмент для расчета реальной стоимости владения автомобилем в месяц и на 1 километр пробега с учетом скрытых расходов на обслуживание, страховку, резину и проценты по кредиту.',
    },
    features: {
      en: [
        'Detailed loan calculator supporting standard annuity and balloon payment schedules.',
        'Fuel & mileage tracker computing cost per kilometer and monthly fuel budget dynamically.',
        'Recurring maintenance, insurance (CASCO/OSAGO), seasonal tires, and parking expense aggregator.',
        'Multi-currency toggle (USD, EUR, RUB, EGP, AED) with real-time numeric formatting.',
      ],
      ru: [
        'Детальный кредитный калькулятор с поддержкой аннуитета и остаточного платежа (Balloon).',
        'Расчет расходов на топливо: динамический расчет стоимости 1 км пути и ежемесячного бюджета на бензин.',
        'Учет регулярных расходов: ТО, страховка (ОСАГО/КАСКО), сезонная резина, налог и парковка.',
        'Переключатель валют (USD, EUR, RUB, EGP, AED) с адаптивным форматированием чисел.',
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
        'Empowers car buyers with complete transparency into lifetime vehicle ownership costs.',
        'Lightweight bundle (< 50 KB total size) ensuring immediate start on any mobile connection.',
      ],
      ru: [
        'Наглядная визуализация реальной стоимости владения автомобилем без скрытых переплат.',
        'Ультралегкий размер сборки (< 50 КБ) для моментальной загрузки даже при слабом интернете.',
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
        'Enables error-free risk calculation within seconds during high-volatility market events.',
      ],
      ru: [
        'Предотвращает ошибки в расчете размера позиции в моменты высокой волатильности рынка.',
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
    visibility: 'public',
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
    repo: 'DEN-2020/VolumePilot',
    githubUrl: 'https://github.com/DEN-2020/VolumePilot',
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
        'Low-latency WASAPI input monitoring capturing microphone voice thresholds with zero CPU overhead.',
        'Customizable dynamics envelope with precise millisecond controls for Attack, Hold, and Release curves.',
        'Silent System Tray operation with quick profile toggles, Inno Setup installer, and zero-privilege local execution.',
      ],
      ru: [
        'Целевой дакинг: приглушение отдельных приложений (Spotify, Браузер, Discord) или общего системного звука Master Volume.',
        'Быстрый WASAPI-мониторинг голоса с мгновенным определением порога срабатывания без нагрузки на процессор.',
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
        'Seamless automatic voice-over background audio ducking without needing expensive external hardware mixers.',
        'Ultra-low memory footprint (< 15 MB) and zero perceptible latency during live streams and gaming.',
      ],
      ru: [
        'Идеальное автоматическое приглушение звука при разговоре без необходимости покупать дорогие микшерные пульты.',
        'Минимальное потребление памяти (< 15 МБ) и нулевая задержка во время прямых трансляций и игр.',
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
    repo: 'DEN-2020/VolumePilot-Site',
    githubUrl: 'https://github.com/DEN-2020/VolumePilot-Site',
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
        'Automated release pipeline linking GitHub Release binaries to direct download buttons.',
      ],
      ru: [
        'Интерактивный визуализатор аудио-волны, демонстрирующий выравнивание громкости при разговоре.',
        'Интерактивное сравнение «До и После» со сглаживанием резких перепадов звука.',
        'Адаптивная верстка с высокой конверсией на смартфонах и десктопах.',
        'Прямая интеграция кнопок скачивания со сборками релизов на GitHub Releases.',
      ],
    },
    technicalNotes: {
      en: [
        'Developed with modern HTML5, CSS3 animations, and vanilla JavaScript for 60fps canvas visualizer performance.',
        'Continuous automated build and deployment workflow managed via Netlify.',
      ],
      ru: [
        'Стек: современный HTML5, CSS3-анимации и чистый JavaScript с 60 FPS на Canvas.',
        'Автоматический деплой и CDN-кэширование через платформу Netlify.',
      ],
    },
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Web Audio API', 'Responsive CSS'],
    outcomes: {
      en: [
        'Delivers a polished product presentation with sub-second page loading and high visual engagement.',
      ],
      ru: [
        'Привлекательная презентация продукта с моментальной загрузкой и плавной анимацией.',
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
    repo: 'DEN-2020/NightVoice',
    githubUrl: 'https://github.com/DEN-2020/NightVoice',
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
        'Zero-AI real-time audio pipeline ensuring 100% privacy and zero latency.',
      ],
      ru: [
        'Системная динамическая компрессия Windows: выравнивание громких спецэффектов и тихой речи.',
        'Готовые пресеты (Soft, Night, Strong, Custom) с быстрым переключением из системного трея.',
        'Официальный многоязычный сайт на Astro на 6 языках со встроенным интерактивным аудио-плеером «До/После».',
        'Полная оффлайн-конфиденциальность без нейросетевых задержек (чистая DSP-математика).',
      ],
    },
    technicalNotes: {
      en: [
        'Windows audio core written in C# with WASAPI endpoint DSP biquad filter cascades.',
        'Web portal built with Astro, Tailwind CSS, TypeScript, and 100/100 Lighthouse performance architecture.',
      ],
      ru: [
        'Десктопное ядро на C# с каскадами фильтров WASAPI и цифровой компрессией.',
        'Веб-портал на Astro, Tailwind CSS и TypeScript с наивысшей оценкой скорости Lighthouse 100/100.',
      ],
    },
    stack: ['C#', 'DSP Algorithms', 'Astro', 'TypeScript', 'i18n (AR/EN/RU)', 'Web Audio API'],
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
      en: 'FastAPI & OpenCV Studio',
      ru: 'FastAPI & OpenCV студия',
    },
    repo: 'DEN-2020/VIDEOGEN',
    githubUrl: 'https://github.com/DEN-2020/VIDEOGEN',
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
        'Automated the complete short-form video lifecycle from URL ingestion to final Telegram publishing in under 60 seconds.',
      ],
      ru: [
        'Полная автоматизация создания вертикальных видеороликов от анализа темы до отправки в Telegram за 60 секунд.',
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
    localFolder: 'tv',
    summary: {
      en: 'Automated streaming utilities, IPTV playlist parsers, stream validation engines, and EPG metadata scrapers.',
      ru: 'Набор утилит для IPTV: парсинг плейлистов, автоматическая валидация потоков и агрегация EPG телепрограммы.',
    },
    purpose: {
      en: 'A collection of resilient Python and PowerShell media scripts for validating live HLS/MPEG-TS video streams, checking stream availability, stripping duplicate channels, and formatting standardized M3U8 playlists.',
      ru: 'Комплекс скриптов на Python и PowerShell для автоматической проверки работоспособности HLS/MPEG-TS видеопотоков, фильтрации дубликатов каналов и сборки оптимизированных M3U8 плейлистов.',
    },
    features: {
      en: [
        'Asynchronous multi-threaded stream validator probing hundreds of live endpoints in parallel.',
        'Automated channel category classifier grouping news, sports, entertainment, and documentary channels.',
        'M3U/M3U8 playlist generator with custom tags, logo URLs, and EPG mapping.',
      ],
      ru: [
        'Асинхронный многопоточный валидатор потоков с одновременным пингом сотен каналов.',
        'Автоматический классификатор каналов по категориям (новости, спорт, кино, познавательное).',
        'Генератор оптимизированных M3U/M3U8 плейлистов с логотипами и привязкой к телепрограмме.',
      ],
    },
    technicalNotes: {
      en: [
        'Developed with Python asyncio, aiohttp, FFprobe headers analysis, and PowerShell orchestration.',
      ],
      ru: [
        'Стек: Python asyncio, aiohttp, анализ заголовков FFprobe и скрипты автоматизации PowerShell.',
      ],
    },
    stack: ['Python', 'PowerShell', 'Streaming Protocols', 'Media APIs'],
    outcomes: {
      en: [
        'Automated playlist maintenance, eliminating dead stream links and reducing loading latency in media players.',
      ],
      ru: [
        'Полная автоматизация очистки плейлистов от неработающих каналов с ускорением переключения.',
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
        'PIN-protected Parent Control mode for task creation, points adjustments, and reward approvals.',
        'Interactive progress charts, streak counters, and celebratory particle animations upon task completion.',
        'Full PWA installation capability on Android, iOS, and desktop with offline optimism.',
      ],
      ru: [
        'Мгновенная синхронизация между устройствами на базе Firebase Firestore в реальном времени.',
        'Магазин наград: дети могут обменивать накопленные баллы на реальные призы и активности.',
        'Режим родительского контроля с защитой PIN-кодом для подтверждения заданий и начисления бонусов.',
        'Интерактивная статистика, счетчик серии выполненных дней (Streak) и праздничные анимации.',
        'PWA-режим с установкой на домашний экран Android и iOS и оптимистичными обновлениями интерфейса.',
      ],
    },
    technicalNotes: {
      en: [
        'Built with React 19, TypeScript, Vite, Tailwind CSS, Lucide icons, and Canvas-Confetti.',
        'Backend powered by Google Firebase Firestore NoSQL real-time database and Firebase Hosting.',
        'Privacy-focused client architecture keeping family IDs secure with client-side state isolation.',
      ],
      ru: [
        'Фронтенд: React 19, TypeScript, Vite, Tailwind CSS и библиотека анимаций частиц Canvas-Confetti.',
        'Бэкенд: NoSQL база данных Google Firebase Firestore и Firebase Hosting.',
        'Безопасная архитектура с изолированными сессиями семейных профилей.',
      ],
    },
    stack: ['React 19', 'TypeScript', 'Firebase Firestore', 'Tailwind CSS', 'PWA', 'Android'],
    outcomes: {
      en: [
        'Active daily family use with zero sync latency across simultaneous mobile phones and tablets.',
        'Demonstrates mastery of modern real-time cloud data architectures and playful, accessible UX design.',
      ],
      ru: [
        'Активное ежедневное использование в семье с мгновенным обновлением баланса на смартфонах и планшетах.',
        'Пример современной реактивной архитектуры с геймификацией и дружелюбным мобильным UX.',
      ],
    },
  },

  {
    slug: 'kids-tracker-android',
    name: {
      en: 'Kids Tracker Android Native App',
      ru: 'Kids Tracker (Нативное Android-приложение)',
    },
    category: 'mobile-apps',
    type: 'app',
    visibility: 'public',
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
      en: 'Kotlin & Jetpack Compose',
      ru: 'Kotlin & Jetpack Compose',
    },
    repo: 'DEN-2020/kids-tracker-android',
    githubUrl: 'https://github.com/DEN-2020/kids-tracker-android',
    summary: {
      en: 'Native Android companion application for Kids Tracker built with Kotlin, Jetpack Compose, and Firebase Firestore real-time synchronization.',
      ru: 'Нативное мобильное Android-приложение для Kids Tracker на базе Kotlin, Jetpack Compose и Firebase Firestore.',
    },
    purpose: {
      en: 'Delivers a native Android experience for parents and kids, providing home screen widgets, low-latency Firebase sync, native animations, and offline-first state persistence.',
      ru: 'Обеспечивает нативный мобильный опыт под Android: быстрая синхронизация с Firebase Firestore, плавные анимации Material You и оффлайн-кэширование.',
    },
    features: {
      en: [
        'Modern Jetpack Compose UI adhering to Material 3 design guidelines.',
        'Real-time synchronization with cloud Firestore collections shared with the PWA web client.',
        'PIN security gate for parent settings and custom coin award granting.',
        'Offline data caching enabling uninterrupted task checking when disconnected.',
      ],
      ru: [
        'Современный интерфейс на Jetpack Compose по гайдлайнам Material 3.',
        'Синхронизация в реальном времени с базой Firebase Firestore совместно с веб-версией PWA.',
        'Защита родительских настроек PIN-кодом и начисление виртуальных монет.',
        'Оффлайн-кэширование данных для работы без постоянного подключения к сети.',
      ],
    },
    technicalNotes: {
      en: [
        'Built with Kotlin, Android Gradle Plugin, Jetpack Compose, Coroutines/Flow, and Firebase Android SDK.',
      ],
      ru: [
        'Стек: Kotlin, Jetpack Compose, Kotlin Coroutines, StateFlow, Gradle Kotlin DSL, Firebase Android SDK.',
      ],
    },
    stack: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Firebase Firestore', 'Coroutines', 'Material 3'],
    outcomes: {
      en: [
        'Expanded Kids Tracker into the native Android ecosystem with instantaneous push sync and smooth 120Hz scrolling.',
      ],
      ru: [
        'Расширение экосистемы Kids Tracker в нативный Android с плавной работой и синхронизацией.',
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
    visibility: 'public',
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
    repo: 'DEN-2020/hunyuan3d-docker',
    githubUrl: 'https://github.com/DEN-2020/hunyuan3d-docker',
    summary: {
      en: 'Production-ready containerized pipeline and Blender 3D bridge built on Tencent Hunyuan3D-2, adding CUDA 12 GPU acceleration, REST API server, and automated mesh processing.',
      ru: 'Инженерный конвейер и интеграция для Blender 3D на базе генеративной нейросети Hunyuan3D-2: контейнеризация Docker CUDA 12, REST API шлюз и автоматизация генерации 3D-ассетов.',
    },
    purpose: {
      en: 'A production infrastructure extension and tooling suite built around the Tencent Hunyuan3D-2 generative core. Eliminates complex manual dependency installation, adds a headless REST API for automated generation queues, and connects the neural network directly into Blender 3D via a custom addon.',
      ru: 'Инфраструктурная надстройка и инструментарий вокруг открытой нейросетевой модели Tencent Hunyuan3D-2. Устраняет сложную ручную установку зависимостей, добавляет headless REST API для фоновой генерации и связывает нейросеть напрямую с Blender 3D через кастомный аддон.',
    },
    features: {
      en: [
        'Single-image to high-density 3D textured mesh generation (GLTF, OBJ, FBX output formats).',
        'Custom direct Blender 3D addon (blender_addon.py) for generating neural meshes directly into the 3D viewport.',
        'Headless REST API server (api_server.py) with asynchronous request queuing and batch processing.',
        'Interactive Gradio web studio interface running on localhost:8080 for fine-tuning diffusion steps and seed parameters.',
      ],
      ru: [
        'Генерация 3D-моделей по одной картинке с высококачественными текстурами и экспортом в форматы GLTF / OBJ / FBX.',
        'Прямой плагин для Blender 3D (blender_addon.py): генерация и импорт нейросетевых объектов сразу в сцену 3D-редактора.',
        'Автономный REST API сервер (api_server.py): асинхронный прием запросов и пакетная обработка очередей.',
        'Интерактивная веб-студия (Gradio Studio) на порту 8080 для настройки параметров генерации и сидов.',
      ],
    },
    technicalNotes: {
      en: [
        'Multi-stage Dockerfile with layer optimization, PyTorch isolation, and NVIDIA Container Toolkit / CUDA 12.1+ support.',
        'Dynamic HuggingFace token authorization via .env configuration without baking secrets into Docker image layers.',
        'GPU VRAM memory management efficiently scheduling tensor allocation across 16GB+ VRAM environments without OOM errors.',
      ],
      ru: [
        'Многоэтапный Dockerfile с оптимизацией слоев, изоляцией PyTorch и поддержкой драйверов NVIDIA CUDA 12.1+.',
        'Безопасная работа с HuggingFace: динамическая передача токенов через .env без попадания в слои Docker-образа.',
        'Оптимизация видеопамяти (VRAM) для стабильной работы нейросети на GPU от 16GB VRAM без сбоев.',
      ],
    },
    stack: ['Docker', 'Python', 'PyTorch', 'CUDA', '3D Neural Synthesis', 'Blender Pipeline', 'Blender 3D'],
    outcomes: {
      en: [
        'Reduced deployment of complex 3D AI generative environments down to a single command (docker compose up --build).',
        'Directly integrated generative AI into the standard workflow of 3D artists and game development teams.',
      ],
      ru: [
        'Сокращение развертывания сложного ИИ-окружения до одной команды (docker compose up --build).',
        'Полная интеграция генеративного ИИ в рабочий пайплайн 3D-моделлеров и геймдев-студий.',
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
      en: robloxSpaceImg,
      ru: robloxSpaceImg,
    },
    screenshots: {
      en: [robloxSpaceImg, robloxSpaceImg, robloxSpaceImg],
      ru: [robloxSpaceImg, robloxSpaceImg, robloxSpaceImg],
    },
    badge: {
      en: 'Roblox Studio Game',
      ru: 'Игра в Roblox Studio',
    },
    localFolder: 'RobloxSpaceShooter',
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
        'Stable 60 FPS performance with low memory footprint and optimized object pooling for high-density projectile storms.',
        'Clean codebase architecture enabling frictionless integration of new weapons, ships, and boss phases via declarative Config tables.',
      ],
      ru: [
        'Стабильные 60 FPS с оптимизированным пулингом объектов для плотных снарядных бурь без лагов.',
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
    localFolder: 'btcusdt-edge-research-audit-20260504',
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
        'Identified mathematically sound risk parameters and execution edges across multiple market regimes.',
      ],
      ru: [
        'Определение математически обоснованных параметров риска и подтверждение эффективности стратегий.',
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
    localFolder: 'AssistJarvisTools',
    summary: {
      en: 'Autonomous 3D AI assistant system integrating Unreal Engine 5 MetaHuman with real-time lip-sync, local LLM orchestration (Ollama), multi-agent dispatching, voice synthesis, and desktop/web control panels.',
      ru: 'Автономный 3D ИИ-ассистент на базе Unreal Engine 5 MetaHuman с анимацией мимики в реальном времени (Lip-Sync), локальными LLM (Ollama), голосовым синтезом, веб-интерфейсом и нативной панелью Windows.',
    },
    purpose: {
      en: 'A next-generation embodied AI assistant platform bridging Unreal Engine 5 MetaHuman rendering with local neural intelligence. Features real-time voice speech-to-text, LLM prompt engineering, Piper/Silero speech synthesis, OSC/WebSocket audio-to-viseme lip-sync streaming, Smart Home integration, and Pixel Streaming web accessibility.',
      ru: 'Комплексная система персонального 3D-ассистента, объединяющая фотореалистичный 3D-аватар Unreal Engine 5 MetaHuman с локальным ИИ. Включает распознавание речи, оркестрацию нейросетей через Ollama, синтез речи (Piper/Silero), синхронизацию движения губ и взгляда (Lip-Sync / Look-At), управление умным домом и веб-интерфейс через Pixel Streaming.',
    },
    features: {
      en: [
        'Photorealistic Unreal Engine 5 MetaHuman 3D avatar with real-time facial expression solver and look-at eye tracking.',
        'Zero-latency audio-driven Lip-Sync pipeline extracting phonemes and driving viseme blendshapes over OSC / WebSockets.',
        'Offline-first local AI engine running quantized LLMs via Ollama with multi-agent tool execution.',
        'Dual-interface ecosystem: native Windows standalone runtime control panel and interactive web browser dashboard (Voice Tuning Lab).',
        'Smart Home bridge integrating Home Assistant and Yandex Smart Home devices for automated voice execution.',
      ],
      ru: [
        'Фотореалистичный 3D-аватар MetaHuman в Unreal Engine 5 с динамической мимикой и отслеживанием взгляда (Look-At).',
        'Синхронизация речи и артикуляции (Lip-Sync): извлечение фонем и передача блендшейпов через OSC и WebSockets.',
        'Полная автономность: запуск локальных LLM через Ollama без зависимости от внешних облачных API.',
        'Двойной интерфейс управления: нативная панель управления для Windows и веб-интерфейс Voice Tuning Lab.',
        'Интеграция с умным домом: управление сценариями через Home Assistant и Яндекс Умный Дом голосом.',
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
        'Achieved seamless sub-second voice-to-3D animation response in full offline desktop environment.',
        'Demonstrated state-of-the-art integration of 3D gaming engines with generative AI agent backends.',
      ],
      ru: [
        'Мгновенный отклик: генерация речи и запуск 3D-анимации аватара менее чем за 1 секунду в оффлайн-режиме.',
        'Флагманский пример интеграции 3D-движка Unreal Engine 5 с локальными генеративными нейросетями.',
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
    localFolder: 'VPN_PROXY',
    summary: {
      en: 'Encrypted mesh VPN infrastructure configuring home workstation as a Tailscale Exit Node with automated PowerShell connection and health scripts.',
      ru: 'Защищенная mesh-инфраструктура с настройкой домашнего ПК как шлюза Tailscale Exit Node и автоматизацией на PowerShell.',
    },
    purpose: {
      en: 'Provides secure, encrypted remote internet routing for developer laptops and gaming clients located in other regions to route all traffic through the home IP address without port forwarding, preserving native application compatibility (Roblox, banking, internal dev servers).',
      ru: 'Обеспечивает защищенное шифрованное туннелирование трафика удаленных рабочих станций и игровых клиентов из других стран через домашний IP-адрес без проброса портов, сохраняя полную совместимость с нативными приложениями (клиент Roblox, банкинг, локальные серверы разработки).',
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
        'Zero-downtime secure remote engineering environment accessible securely from anywhere in the world.',
      ],
      ru: [
        'Надежная и безопасная среда удаленной разработки с доступом из любой точки мира.',
      ],
    },
  },
];
