import type { Language } from './projects';

export interface TranslationDict {
  brandTitle: string;
  brandTag: string;
  devModeBtn: string;
  publicModeBtn: string;
  portfolioBoundaryNote: string;
  githubBtn: string;
  heroEyebrow: string;
  heroTitlePrefix: string;
  heroTitleAccent: string;
  heroTitleSuffix: string;
  heroDescription: string;
  exploreCatalogBtn: string;
  githubReposBtn: string;
  contactBtn: string;
  contactEyebrow: string;
  contactTitle: string;
  contactDescription: string;
  contactNameLabel: string;
  contactNamePlaceholder: string;
  contactEmailLabel: string;
  contactEmailPlaceholder: string;
  contactTopicLabel: string;
  contactTopicJob: string;
  contactTopicFreelance: string;
  contactTopicCollaboration: string;
  contactTopicOther: string;
  contactMessageLabel: string;
  contactMessagePlaceholder: string;
  contactPrivacy: string;
  contactSubmit: string;
  contactSending: string;
  contactSuccess: string;
  contactError: string;
  contactRateLimit: string;
  statTotalProjects: string;
  statLiveReady: string;
  statWebPlatforms: string;
  statFintechTools: string;
  statAudioVideo: string;
  statAiGames: string;
  searchPlaceholder: string;
  clearSearchLabel: string;
  byCategoryBtn: string;
  allGridBtn: string;
  allCategoriesTab: string;
  noProjectsFound: string;
  noProjectsHint: string;
  resetFiltersBtn: string;
  architectureHeading: string;
  capabilitiesHeading: string;
  techArchHeading: string;
  outcomesHeading: string;
  liveDemoBtn: string;
  productionBuildBtn: string;
  sourceRepoBtn: string;
  privateBtn: string;
  preparingBtn: string;
  localSourceBtn: string;
  footerBrand: string;
  footerModeDev: string;
  footerModePublic: string;
  statusLive: string;
  statusReady: string;
  statusSource: string;
  statusPreparing: string;
  statusInternal: string;
  statusPrivate: string;
  privateRepoBtn: string;
  sourcePublicLabel: string;
  sourcePrivateLabel: string;
  sourceMixedLabel: string;
  sourceLocalLabel: string;
  conceptPreviewLabel: string;
  proprietaryBtn: string;
  viewCompanion: string;
  clickToExpand: string;
  projectCount: string;
  projectsCount: string;
}

export const translations: Record<Language, TranslationDict> = {
  ru: {
    brandTitle: 'DEN-2020',
    brandTag: 'Портфолио',
    devModeBtn: 'Все кейсы',
    publicModeBtn: 'Только публичные',
    portfolioBoundaryNote: 'Публичное демо и доступность исходников отмечаются отдельно. Закрытые кейсы содержат только безопасный обзор — код, данные и локальная среда не публикуются.',
    githubBtn: 'GitHub',
    heroEyebrow: 'FULL-STACK · FINTECH · AUDIO DSP · AI 3D',
    heroTitlePrefix: 'Веб-системы, ',
    heroTitleAccent: 'торговые движки',
    heroTitleSuffix: ' и медиа-пайплайны',
    heroDescription:
      'Инженерная витрина DEN-2020: веб-платформы и дата-порталы, SEO-автоматизация, финансовые инструменты, аудио/DSP, 3D-пайплайны, игры и локальные системные утилиты.',
    exploreCatalogBtn: 'Открыть каталог',
    githubReposBtn: 'Репозитории GitHub',
    contactBtn: 'Связаться',
    contactEyebrow: 'КОНТАКТ БЕЗ ПУБЛИКАЦИИ EMAIL',
    contactTitle: 'Есть задача, которую стоит обсудить?',
    contactDescription:
      'Опишите проект, роль или формат сотрудничества. Сообщение будет передано через защищённую форму; адрес получателя не публикуется.',
    contactNameLabel: 'Имя или компания',
    contactNamePlaceholder: 'Как к вам обращаться',
    contactEmailLabel: 'Ваш email',
    contactEmailPlaceholder: 'name@company.com',
    contactTopicLabel: 'Тема',
    contactTopicJob: 'Предложение работы',
    contactTopicFreelance: 'Проект / фриланс',
    contactTopicCollaboration: 'Сотрудничество',
    contactTopicOther: 'Другое',
    contactMessageLabel: 'Сообщение',
    contactMessagePlaceholder: 'Кратко расскажите о задаче, сроках и желаемом результате…',
    contactPrivacy: 'Данные используются только для ответа на ваше обращение.',
    contactSubmit: 'Отправить сообщение',
    contactSending: 'Отправка…',
    contactSuccess: 'Сообщение отправлено. Спасибо — отвечу по указанному адресу.',
    contactError: 'Не удалось отправить. Проверьте поля и попробуйте ещё раз.',
    contactRateLimit: 'Слишком много попыток. Пожалуйста, попробуйте позже.',
    statTotalProjects: 'Всего проектов',
    statLiveReady: 'Онлайн / Готово',
    statWebPlatforms: 'Веб-платформы',
    statFintechTools: 'Финтех-инструменты',
    statAudioVideo: 'Аудио и видео',
    statAiGames: 'ИИ, 3D и игры',
    searchPlaceholder: 'Поиск по названию, стеку (React, Python...) или ключевому слову...',
    clearSearchLabel: 'Очистить поиск',
    byCategoryBtn: 'По категориям',
    allGridBtn: 'Общая сетка',
    allCategoriesTab: 'Все категории',
    noProjectsFound: 'Проекты не найдены',
    noProjectsHint: 'Попробуйте изменить поисковый запрос или сбросить фильтры.',
    resetFiltersBtn: 'Сбросить фильтры',
    architectureHeading: 'Архитектура и возможности',
    capabilitiesHeading: 'Ключевые возможности',
    techArchHeading: 'Техническая архитектура',
    outcomesHeading: 'Инженерные результаты',
    liveDemoBtn: 'Открыть демо',
    productionBuildBtn: 'Сборка / Деплой',
    sourceRepoBtn: 'Исходный код',
    privateBtn: 'Приватно',
    preparingBtn: 'В разработке',
    localSourceBtn: 'Локальный проект',
    footerBrand: 'Инженерное портфолио DEN-2020',
    footerModeDev: '🔒 Публичная витрина: открытые и закрытые кейсы',
    footerModePublic: '🌐 Только проекты с публичной витриной',
    statusLive: 'Работает онлайн',
    statusReady: 'Готово / MVP',
    statusSource: 'Открытый код',
    statusPreparing: 'В подготовке',
    statusInternal: 'Внутренний инструмент',
    statusPrivate: 'Приватная система',
    privateRepoBtn: 'Закрытый репозиторий',
    sourcePublicLabel: 'Публичный исходный код',
    sourcePrivateLabel: 'Приватный исходный код',
    sourceMixedLabel: 'Смешанная доступность кода',
    sourceLocalLabel: 'Только локальные исходники',
    conceptPreviewLabel: 'Концепт-иллюстрация',
    proprietaryBtn: 'Закрытый проект',
    viewCompanion: 'Связанный проект',
    clickToExpand: 'Нажмите для увеличения скриншота',
    projectCount: 'проект',
    projectsCount: 'проектов',
  },
  en: {
    brandTitle: 'DEN-2020',
    brandTag: 'Portfolio Pro',
    devModeBtn: 'All Case Studies',
    publicModeBtn: 'Public Only',
    portfolioBoundaryNote: 'Public demos and source-code access are labeled separately. Private case studies expose only safe summaries — code, data, and local environments are not published.',
    githubBtn: 'GitHub',
    heroEyebrow: 'FULL-STACK · FINTECH · AUDIO DSP · AI 3D',
    heroTitlePrefix: 'Production Web Systems, ',
    heroTitleAccent: 'Trading Engines',
    heroTitleSuffix: ' & Media Pipelines',
    heroDescription:
      'Engineering showcase by DEN-2020 spanning web platforms and data portals, SEO automation, financial tools, audio/DSP, 3D pipelines, games, and local system utilities.',
    exploreCatalogBtn: 'Explore Catalog',
    githubReposBtn: 'GitHub Repositories',
    contactBtn: 'Contact',
    contactEyebrow: 'PRIVATE CONTACT CHANNEL',
    contactTitle: 'Have a project worth discussing?',
    contactDescription:
      'Share the project, role, or collaboration format. Your message is forwarded through a protected form and the recipient address is never published.',
    contactNameLabel: 'Name or company',
    contactNamePlaceholder: 'How should I address you?',
    contactEmailLabel: 'Your email',
    contactEmailPlaceholder: 'name@company.com',
    contactTopicLabel: 'Topic',
    contactTopicJob: 'Job opportunity',
    contactTopicFreelance: 'Project / freelance',
    contactTopicCollaboration: 'Collaboration',
    contactTopicOther: 'Other',
    contactMessageLabel: 'Message',
    contactMessagePlaceholder: 'Briefly describe the project, timeline, and desired outcome…',
    contactPrivacy: 'Your details are used only to reply to this inquiry.',
    contactSubmit: 'Send message',
    contactSending: 'Sending…',
    contactSuccess: 'Message sent. Thank you — I will reply to the address provided.',
    contactError: 'The message could not be sent. Check the fields and try again.',
    contactRateLimit: 'Too many attempts. Please try again later.',
    statTotalProjects: 'Total Projects',
    statLiveReady: 'Live / Ready',
    statWebPlatforms: 'Web Platforms',
    statFintechTools: 'FinTech Tools',
    statAudioVideo: 'Audio & Video',
    statAiGames: 'AI, 3D & Games',
    searchPlaceholder: 'Search by title, stack (React, TypeScript), or keyword...',
    clearSearchLabel: 'Clear search',
    byCategoryBtn: 'By Category',
    allGridBtn: 'All Grid',
    allCategoriesTab: 'All Categories',
    noProjectsFound: 'No projects matched your criteria',
    noProjectsHint: 'Try searching for a different keyword or reset the category filter.',
    resetFiltersBtn: 'Reset all filters',
    architectureHeading: 'Architecture & Features',
    capabilitiesHeading: 'Key Capabilities',
    techArchHeading: 'Technical Architecture',
    outcomesHeading: 'Engineering Outcomes',
    liveDemoBtn: 'Live Demo',
    productionBuildBtn: 'Production Build',
    sourceRepoBtn: 'Source Code',
    privateBtn: 'Private',
    preparingBtn: 'Preparing',
    localSourceBtn: 'Local / Source',
    footerBrand: 'DEN-2020 Engineering Portfolio',
    footerModeDev: '🔒 Public showcase: open and closed-source case studies',
    footerModePublic: '🌐 Projects with a public showcase only',
    statusLive: 'Live Demo',
    statusReady: 'Ready / MVP',
    statusSource: 'Source Available',
    statusPreparing: 'Demo Preparing',
    statusInternal: 'Internal Tooling',
    statusPrivate: 'Private Architecture',
    privateRepoBtn: 'Private Repository',
    sourcePublicLabel: 'Public source code',
    sourcePrivateLabel: 'Private source code',
    sourceMixedLabel: 'Mixed source access',
    sourceLocalLabel: 'Local source only',
    conceptPreviewLabel: 'Concept illustration',
    proprietaryBtn: 'Proprietary System',
    viewCompanion: 'View companion',
    clickToExpand: 'Click to view full screenshot',
    projectCount: 'Project',
    projectsCount: 'Projects',
  },
};
