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
      en: 'VolumePilot Desktop Utility',
      ru: 'VolumePilot (Аудио-утилита Windows)',
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
      en: 'Windows .NET App',
      ru: 'Приложение для Windows',
    },
    repo: 'DEN-2020/VolumePilot',
    githubUrl: 'https://github.com/DEN-2020/VolumePilot',
    summary: {
      en: 'Intelligent real-time Windows audio stabilizer utilizing WASAPI DSP filters to balance quiet dialogue and suppress sudden loud sound spikes.',
      ru: 'Интеллектуальный стабилизатор звука для Windows на базе WASAPI DSP для выравнивания тихих диалогов и сглаживания громких звуков.',
    },
    purpose: {
      en: 'A high-performance system tray utility for Windows that eliminates the need to constantly adjust volume during movies, streams, and gaming sessions. It acts as an intelligent automatic gain controller (AGC) and dynamic peak limiter directly at the Windows audio endpoint layer.',
      ru: 'Системная утилита в трее Windows, устраняющая необходимость вручную регулировать громкость при просмотре фильмов, стримов и в играх. Выполняет автоматическую регулировку усиления (AGC) и пиковое лимитирование на уровне аудио-эндпоинта Windows.',
    },
    features: {
      en: [
        'Real-time RMS volume level analysis with configurable attack, release, and lookahead window parameters.',
        'Adaptive dialogue boost raising quiet whispers while softly clamping loud explosions and sound effects.',
        'Global hotkey management for instant mode toggling (Night Mode, Gaming, Movie, Voice Clarity).',
        'Lightweight system tray background service with zero UI lag and minimal memory footprint (< 15 MB).',
      ],
      ru: [
        'Анализ уровня громкости RMS в реальном времени с настраиваемыми параметрами атаки и спада.',
        'Адаптивное усиление тихой речи с мягким ограничением внезапных взрывов и спецэффектов.',
        'Глобальные горячие клавиши для быстрого переключения профилей (Ночной режим, Игры, Кино, Голос).',
        'Работа в фоновом режиме в системном трее с минимальным потреблением ОЗУ (< 15 МБ).',
      ],
    },
    technicalNotes: {
      en: [
        'Written in C# and .NET with low-level Windows CoreAudio API and WASAPI loopback capture integration.',
        'Implements custom double-precision floating-point DSP algorithms for lossless audio dynamics processing.',
        'Engineered for ultra-low latency (< 5ms buffer delay) with zero perceptible audio-video desync.',
      ],
      ru: [
        'Разработано на C# и .NET с интеграцией низкоуровневых Windows CoreAudio API и WASAPI Loopback.',
        'Собственные алгоритмы цифровой обработки сигналов (DSP) с плавающей точкой двойной точности.',
        'Ультранизкая задержка обработки (< 5 мс), исключающая рассинхронизацию звука и видео.',
      ],
    },
    stack: ['C#', '.NET', 'WPF / WinUI', 'WASAPI Audio', 'DSP Algorithms', 'Windows Tray'],
    outcomes: {
      en: [
        'Delivered rock-solid stability during continuous multi-hour streaming and gaming benchmarks.',
        'Provides professional studio-grade dynamic range compression in an intuitive consumer desktop app.',
      ],
      ru: [
        'Абсолютная стабильность при многочасовой непрерывной работе в фоновом режиме.',
        'Студийное качество компрессии динамического диапазона в простом интерфейсе для Windows.',
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
      en: 'Modern showcase landing page for the VolumePilot audio stabilizer featuring interactive waveform animations, feature breakdowns, and direct downloads.',
      ru: 'Промо-сайт для утилиты VolumePilot с интерактивной анимацией аудио-волн, описанием преимуществ и ссылкой на загрузку.',
    },
    purpose: {
      en: 'Created to present VolumePilot to international users with high-impact visual design, dynamic audio equalizer effects, clear feature comparisons, and one-click installer downloads.',
      ru: 'Создан для презентации утилиты VolumePilot международной аудитории: визуализация работы эквалайзера, интерактивные сравнения «до/после» и удобная загрузка инсталлятора.',
    },
    features: {
      en: [
        'Interactive audio waveform visualizer demonstrating real-time dynamic range normalization.',
        'Before/After interactive comparison sliders demonstrating audio spike smoothing.',
        'Responsive layout optimized for high conversion on mobile, tablet, and desktop viewports.',
        'Automated release pipeline linking GitHub Release binaries to direct download buttons.',
      ],
      ru: [
        'Интерактивный визуализатор аудио-волны, демонстрирующий выравнивание громкости.',
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
      en: 'NightVoice Audio & Web Engine',
      ru: 'NightVoice (Аудио-процессинг & Веб)',
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
      en: 'Audio DSP Suite',
      ru: 'Аудио DSP система',
    },
    repo: 'DEN-2020/NightVoice',
    githubUrl: 'https://github.com/DEN-2020/NightVoice',
    summary: {
      en: 'Audio DSP processing ecosystem and companion web interfaces for dynamic voice enhancement, night listening, and speech intelligibility.',
      ru: 'Экосистема цифровой обработки звука и веб-интерфейсы для улучшения разборчивости речи и комфортного ночного прослушивания.',
    },
    purpose: {
      en: 'Engineered to solve voice clarity issues in media playback. Employs multiband frequency shaping, lookahead compression, and speech-frequency boosting algorithms.',
      ru: 'Разработано для решения проблемы неразборчивой речи в фильмах и подкастах с помощью многополосной эквализации и алгоритмов выделения голосового спектра.',
    },
    features: {
      en: [
        'Speech Bandwidth Isolation boosting 1kHz-4kHz speech harmonics while attenuating sub-bass rumbles.',
        'Fast-acting peak limiter preventing digital audio clipping and headphone fatigue.',
        'Modular web architecture facilitating cross-platform audio DSP control.',
      ],
      ru: [
        'Выделение голосового диапазона частот 1-4 кГц с подавлением низкочастотного гула.',
        'Быстрый пиковый лимитер для предотвращения клиппинга и искажений звука.',
        'Модульная архитектура для управления аудио-профилями через веб-интерфейс.',
      ],
    },
    technicalNotes: {
      en: [
        'Combines C# audio engines, Web Audio API DSP nodes, and modern web UI components.',
        'Biquad filter cascade architecture for precise real-time frequency response manipulation.',
      ],
      ru: [
        'Связка алгоритмов цифровой фильтрации C# и Web Audio API Biquad-фильтров.',
        'Каскад фильтров для точной настройки амплитудно-частотной характеристики в реальном времени.',
      ],
    },
    stack: ['C#', 'Web Audio API', 'TypeScript', 'DSP Algorithms', 'AudioStabilizator'],
    outcomes: {
      en: [
        'Significantly enhanced speech clarity during late-night media consumption without increasing overall volume.',
      ],
      ru: [
        'Существенное повышение разборчивости диалогов в ночное время без увеличения общей громкости.',
      ],
    },
  },

  {
    slug: 'videogen',
    name: {
      en: 'VIDEOGEN Automated Studio',
      ru: 'VIDEOGEN (Автоматизированная видеостудия)',
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
      en: 'AI Video Pipeline',
      ru: 'AI-видеогенератор',
    },
    repo: 'DEN-2020/VIDEOGEN',
    githubUrl: 'https://github.com/DEN-2020/VIDEOGEN',
    summary: {
      en: 'End-to-end automated content generation studio pipeline utilizing Python, FFmpeg GPU acceleration, AI voice synthesis, and dynamic subtitle burning.',
      ru: 'Автоматизированный программный комплекс для создания видеоконтента с ИИ-озвучкой, субтитрами и FFmpeg GPU рендерингом.',
    },
    purpose: {
      en: 'A fully automated production pipeline designed to transform raw script text into complete, edited, captioned, and voiceover-synced videos ready for YouTube Shorts, Reels, and TikTok with zero manual editing.',
      ru: 'Автоматический конвейер генерации видеороликов: превращает текстовые сценарии в готовые видео с закадровым голосом ИИ, динамическими анимированными субтитрами и видеорядом для YouTube Shorts и Reels.',
    },
    features: {
      en: [
        'Multi-track timeline assembler syncing background video clips, background music, and synthesized voiceover.',
        'Word-level subtitle synchronization with custom animations, colors, and font styles burned directly via FFmpeg.',
        'Web management dashboard (Vite + React) for job queuing, script editing, and live video previews.',
        'Hardware-accelerated GPU encoding (NVENC / CUDA) rendering 1080x1920 video at over 4x real-time speed.',
      ],
      ru: [
        'Многодорожечный монтажный движок: сведение видеоряда, фоновой музыки и голосовой дорожки.',
        'Пословная синхронизация анимированных субтитров (Word-by-word) с наложением через FFmpeg.',
        'Веб-интерфейс управления (Vite + React) для редактирования сценариев, очереди задач и превью роликов.',
        'Аппаратный GPU-рендеринг (NVIDIA NVENC / CUDA) со скоростью более 4x от реального времени.',
      ],
    },
    technicalNotes: {
      en: [
        'Backend built with Python, FastAPI/Uvicorn, FFmpeg libav filters, and text-to-speech API adapters.',
        'Frontend built with React 19, TypeScript, and Vite for real-time rendering status polling.',
        'Asynchronous task worker model managing background rendering pipelines without blocking the web API.',
      ],
      ru: [
        'Бэкенд на Python (FastAPI/Uvicorn) с прямым вызовом фильтров FFmpeg и генераторов речи.',
        'Фронтенд на React 19, TypeScript и Vite для мониторинга очереди и прогресса генерации.',
        'Асинхронные воркеры для фонового рендеринга без блокировки основного API сервера.',
      ],
    },
    stack: ['Python', 'React 19', 'TypeScript', 'FFmpeg GPU', 'Vite', 'AI Voice Synthesis'],
    outcomes: {
      en: [
        'Reduced 1-minute video production time from 30 minutes of manual editing down to under 15 seconds automated.',
        'Successfully batch-rendered hundreds of short-form videos with 100% audio-caption synchronization accuracy.',
      ],
      ru: [
        'Сокращение времени производства 1-минутного ролика с 30 минут ручного монтажа до 15 секунд автоматики.',
        'Успешная пакетная генерация сотен видео с идеальной синхронизацией субтитров и голоса.',
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
    visibility: 'public',
    demoStatus: 'ready',
    thumbnail: {
      en: tvImg,
      ru: tvImg,
    },
    screenshots: {
      en: [tvImg, tvImg, tvImg],
      ru: [tvImg, tvImg, tvImg],
    },
    badge: {
      en: 'Stream Pipeline',
      ru: 'Медиа-скрипты',
    },
    repo: 'DEN-2020/TV',
    githubUrl: 'https://github.com/DEN-2020/TV',
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

  // 5. AI, 3D Pipelines & Game Dev
  {
    slug: 'hunyuan3d-docker',
    name: {
      en: 'Hunyuan3D Generative Pipeline',
      ru: 'Hunyuan3D (Нейросетевой 3D-пайплайн)',
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
      en: 'Docker AI Pipeline',
      ru: 'Docker & CUDA пайплайн',
    },
    repo: 'DEN-2020/hunyuan3d-docker',
    githubUrl: 'https://github.com/DEN-2020/hunyuan3d-docker',
    summary: {
      en: 'Containerized production Docker environment with CUDA 12 support for generating textured 3D meshes from single 2D images via Tencent Hunyuan3D-2.',
      ru: 'Контейнеризированная Docker-среда с поддержкой CUDA 12 для генерации текстурированных 3D-моделей из 2D-изображений на базе нейросети Hunyuan3D-2.',
    },
    purpose: {
      en: 'Engineered to package complex, dependency-heavy generative AI 3D neural pipelines into a reproducible, isolated, and GPU-optimized Docker container for game asset creation and 3D printing pipelines.',
      ru: 'Создано для упаковки сложной нейросетевой модели генерации 3D-ассетов в изолированный, воспроизводимый Docker-контейнер с аппаратным ускорением на видеокартах NVIDIA.',
    },
    features: {
      en: [
        'Single-image to high-density 3D textured mesh generation (GLTF, OBJ, FBX output formats).',
        'Automated environment provisioning configuring PyTorch, FlashAttention, and CUDA 12.4 drivers.',
        'REST API & Web UI endpoints for queuing generation requests and downloading finished 3D assets.',
        'Integrated mesh decimation and normal map baking scripts for game-ready asset optimization.',
      ],
      ru: [
        'Генерация высокополигональной 3D-модели с текстурами по одной входной картинке (форматы GLTF, OBJ).',
        'Автоматическая настройка окружения: PyTorch, FlashAttention и драйверы CUDA 12.4.',
        'REST API и веб-интерфейс для отправки заданий на генерацию и выгрузки готовых 3D-моделей.',
        'Скрипты автоматической оптимизации сетки (Decimation) и запекания карт нормалей для игровых движков.',
      ],
    },
    technicalNotes: {
      en: [
        'Multi-stage Dockerfile optimizing image layer caching and reducing final container footprint.',
        'GPU memory management allocating tensor weights efficiently across 16GB+ VRAM environments.',
        'Orchestrated with Docker Compose for seamless volume mounting and persistent model cache storage.',
      ],
      ru: [
        'Многоэтапный Dockerfile для оптимизации слоев и уменьшения итогового размера образа.',
        'Оптимизация видеопамяти (VRAM) для стабильной работы нейросети без Out-Of-Memory ошибок.',
        'Оркестрация через Docker Compose с монтированием томов для кэша моделей.',
      ],
    },
    stack: ['Docker', 'Python', 'PyTorch', 'CUDA', '3D Neural Synthesis', 'Blender Pipeline'],
    outcomes: {
      en: [
        'Eliminated hours of manual AI environment configuration, enabling one-command deployment on any GPU server.',
      ],
      ru: [
        'Полное устранение ручной настройки зависимостей: запуск генерации 3D одной командой на любом GPU-сервере.',
      ],
    },
  },

  {
    slug: 'roblox-space-shooter',
    name: {
      en: 'Roblox Space Colony & Arcade',
      ru: 'Roblox Space Colony (Аркадная игра)',
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
      en: 'Full-featured 3D sci-fi action arcade game built in Roblox Studio featuring custom space flight physics, particle weapons, and enemy AI.',
      ru: 'Полноценная космическая 3D-аркада в Roblox Studio с физикой полета звездолета, системой вооружения и вражеским ИИ.',
    },
    purpose: {
      en: 'A complete space action game developed in Luau and Roblox Studio. Players navigate starships, battle rogue AI fleets, mine asteroids, upgrade laser turrets, and defend planetary space stations in multiplayer sessions.',
      ru: 'Полноценная игра в жанре космического экшена на движке Roblox Studio. Включает управление космическими кораблями, сражения с флотом противника, апгрейды оружия и защиту орбитальной станции.',
    },
    features: {
      en: [
        'Custom ship flight mechanics with 6-DOF inertia, thruster physics, and responsive camera damping.',
        'Modular weapon system: plasma cannons, homing missiles, shield recharge cycles, and dynamic hitboxes.',
        'Enemy wave spawning algorithms with pathfinding, combat states, and difficulty scaling.',
        'Blender-crafted 3D space station models, asteroid fields, and custom particle emitters (VFX).',
        'Cross-platform input support for PC keyboard/mouse, mobile touch controls, and gamepads.',
      ],
      ru: [
        'Физика полета корабля с 6 степенями свободы, инерцией двигателей и кинематографичной камерой.',
        'Модульная система вооружения: плазменные пушки, самонаводящиеся ракеты и силовые щиты.',
        'ИИ вражеских эскадрилий с алгоритмами поиска пути, фазами атаки и масштабированием сложности.',
        '3D-модели космических станций и астероидов, созданные в Blender, с кастомными эффектами частиц.',
        'Кроссплатформенное управление: ПК (клавиатура/мышь), мобильные сенсорные экраны и геймпады.',
      ],
    },
    technicalNotes: {
      en: [
        'Written in object-oriented Luau utilizing Client-Server replication architecture and RemoteEvents.',
        'Spatial partitioning and raycasting for collision detection and projectile hit registration.',
        'Custom UI HUD displaying shields, energy gauges, radar minimap, and score leaderboards.',
      ],
      ru: [
        'Объектно-ориентированный код на Luau с клиент-серверной репликацией через RemoteEvents.',
        'Пространственная оптимизация (Raycasting) для регистрации попаданий и проверки коллизий.',
        'Кастомный игровой интерфейс (HUD): индикаторы щитов, радар, прицел и таблица рекордов.',
      ],
    },
    stack: ['Luau', 'Roblox Studio', 'Blender 3D', 'Game Mechanics', 'VFX & Particle Systems'],
    outcomes: {
      en: [
        'Smooth 60 FPS multiplayer performance with optimized networking and low packet overhead.',
      ],
      ru: [
        'Стабильные 60 кадров в секунду в мультиплеере с оптимизированным сетевым кодом.',
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
    localFolder: 'BTCUSDT_Edge_Research',
    summary: {
      en: 'Quantitative algorithmic trading research framework for backtesting, volatility analysis, statistical arbitrage, and execution edge verification.',
      ru: 'Исследовательский комплекс для количественного анализа рынка BTC/USDT, бэктестинга стратегий, расчета волатильности и мат-ожидания.',
    },
    purpose: {
      en: 'A high-grade quantitative research framework in Python that ingests historical tick and 1m Kline data to model risk-adjusted returns, maximum drawdown boundaries, Sharpe ratios, and fee-drag optimizations on BTC/USDT pairs.',
      ru: 'Высокоточный исследовательский фреймворк на Python для тестирования торговых гипотез на исторических данных BTC/USDT: расчет коэффициентов Шарпа/Сортино, максимальной просадки и влияния биржевых комиссий.',
    },
    features: {
      en: [
        'Walk-forward backtesting engine with slippage models, maker/taker fee factoring, and leverage risk.',
        'Statistical distribution analysis measuring kurtosis, volatility clusters, and mean reversion windows.',
        'Automated HTML/PDF equity curve, drawdown chart, and monthly returns heatmap report generator.',
      ],
      ru: [
        'Движок бэктестинга Walk-Forward с точным учетом проскальзывания и комиссий биржи.',
        'Статистический анализ кластеров волатильности и окон возврата к среднему значению.',
        'Автогенерация интерактивных отчетов с кривыми доходности, просадками и тепловой картой PnL.',
      ],
    },
    technicalNotes: {
      en: [
        'Built with Python, Pandas, NumPy, Vectorized calculation pipelines, and Matplotlib/Plotly visuals.',
        'Optimized for memory efficiency processing gigabytes of historical tick datasets in seconds.',
      ],
      ru: [
        'Стек: Python, Pandas, NumPy, векторные вычисления и визуализация на Plotly/Matplotlib.',
        'Оптимизирован для обработки гигабайтных массивов тиковых данных за секунды.',
      ],
    },
    stack: ['Python', 'Pandas', 'NumPy', 'Quantitative Modeling', 'Backtesting Engine', 'Trading Math'],
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
      en: 'AssistJarvis AI Orchestrator',
      ru: 'AssistJarvis (AI-оркестратор агентов)',
    },
    category: 'research-infra',
    type: 'tooling',
    visibility: 'private',
    demoStatus: 'internal',
    thumbnail: {
      en: asistApiImg,
      ru: asistApiImg,
    },
    screenshots: {
      en: [asistApiImg, asistApiImg, asistApiImg],
      ru: [asistApiImg, asistApiImg, asistApiImg],
    },
    badge: {
      en: 'AI Agent System',
      ru: 'Система AI-агентов',
    },
    localFolder: 'asist_api',
    summary: {
      en: 'Modular AI microservice orchestrator connecting Google Gemini API, automated tools, local system hooks, and real-time webhook endpoints.',
      ru: 'Микросервисный AI-оркестратор, связывающий Google Gemini API, системные утилиты, инструменты автоматизации и вебхуки.',
    },
    purpose: {
      en: 'An intelligent agent hub that coordinates complex reasoning tasks, tool dispatching, code generation, data parsing, and system automation through clean REST and WebSocket interfaces.',
      ru: 'Интеллектуальный шлюз для координации работы нейросетевых агентов, маршрутизации системных команд, генерации данных и выполнения задач через REST и WebSocket API.',
    },
    features: {
      en: [
        'Multi-agent task delegation routing prompt chains to specialized sub-agents with distinct toolsets.',
        'Real-time token streaming with WebSocket and Server-Sent Events (SSE) interfaces.',
        'Secure API token management with request rate limiting and automated retry fallback chains.',
      ],
      ru: [
        'Делегирование задач специализированным агентам с индивидуальным набором инструментов.',
        'Потоковая передача ответов (Streaming) в реальном времени через WebSocket и SSE.',
        'Безопасное управление ключами API с защитой от превышения лимитов запросов (Rate Limiting).',
      ],
    },
    technicalNotes: {
      en: [
        'Engineered with Node.js, TypeScript, Express/Fastify, and Google Gemini Pro/Flash API integration.',
        'Strict schema validation and structured JSON output guarantee via function calling declarations.',
      ],
      ru: [
        'Разработано на Node.js, TypeScript и Google Gemini API с поддержкой Function Calling.',
        'Строгая валидация входящих и исходящих данных по JSON-схемам.',
      ],
    },
    stack: ['Node.js', 'TypeScript', 'Gemini AI API', 'REST API', 'Webhook Engine', 'AI Tooling'],
    outcomes: {
      en: [
        'Serves as the core AI reasoning backbone powering automated workflows and external tooling integrations.',
      ],
      ru: [
        'Надежный шлюз для автоматизации задач и интеграции нейросетевых возможностей в приложения.',
      ],
    },
  },

  {
    slug: 'vpn-proxy-tunnel',
    name: {
      en: 'Home Gateway & Tailscale Proxy',
      ru: 'Home Gateway (WireGuard & Tailscale VPN)',
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
      en: 'Mesh VPN Infra',
      ru: 'Сетевая инфраструктура',
    },
    localFolder: 'VPN-PROXy',
    summary: {
      en: 'Private encrypted mesh VPN and smart proxy routing infrastructure built on WireGuard, Tailscale, and automated health monitoring scripts.',
      ru: 'Защищенный зашифрованный mesh-туннель и интеллектуальный прокси-маршрутизатор на базе WireGuard и Tailscale.',
    },
    purpose: {
      en: 'Provides resilient, encrypted, low-latency remote access between developer workstations, home test servers, cloud instances, and mobile devices across multiple geographies with automated failover.',
      ru: 'Обеспечивает защищенный, зашифрованный удаленный доступ с низкой задержкой между рабочими станциями, серверами и мобильными устройствами в разных локациях.',
    },
    features: {
      en: [
        'Mesh topology connecting dev nodes directly with WireGuard kernel-level peer-to-peer encryption.',
        'Split-tunneling traffic routing directing internal microservices securely while preserving direct Internet speeds.',
        'Automated connection health probes with background auto-reconnect and DNS leak prevention.',
      ],
      ru: [
        'Mesh-топология с прямым P2P-шифрованием между рабочими узлами на уровне ядра WireGuard.',
        'Раздельное туннелирование (Split-tunneling) для доступа к микросервисам без замедления интернета.',
        'Автоматический мониторинг доступности узлов с автопереподключением и защитой от утечек DNS.',
      ],
    },
    technicalNotes: {
      en: [
        'Configured with Tailscale subnet routers, WireGuard configuration profiles, and PowerShell orchestration.',
      ],
      ru: [
        'Настройка маршрутизации подсетей Tailscale, конфигов WireGuard и скриптов PowerShell.',
      ],
    },
    stack: ['WireGuard', 'Tailscale', 'Mesh VPN', 'Network Routing', 'Proxy Middleware', 'PowerShell'],
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
