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
  statTotalProjects: string;
  statLiveReady: string;
  statWebPlatforms: string;
  statFintechTools: string;
  statAudioVideo: string;
  statAiGames: string;
  searchPlaceholder: string;
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
    portfolioBoundaryNote: 'Закрытые кейсы содержат только обзор. Код, данные и локальная среда не публикуются.',
    githubBtn: 'GitHub',
    heroEyebrow: 'FULL-STACK · FINTECH · AUDIO DSP · AI 3D',
    heroTitlePrefix: 'Веб-системы, ',
    heroTitleAccent: 'торговые движки',
    heroTitleSuffix: ' и медиа-пайплайны',
    heroDescription:
      'Комплексное инженерное портфолио DEN-2020: публичные репозитории, высокопроизводительные PWA-калькуляторы, многоязычные маркетплейсы, нейросетевые 3D-пайплайны и системные десктопные утилиты.',
    exploreCatalogBtn: 'Открыть каталог',
    githubReposBtn: 'Репозитории GitHub',
    statTotalProjects: 'Всего проектов',
    statLiveReady: 'Онлайн / Готово',
    statWebPlatforms: 'Веб-платформы',
    statFintechTools: 'Финтех-инструменты',
    statAudioVideo: 'Аудио и видео',
    statAiGames: 'ИИ, 3D и игры',
    searchPlaceholder: 'Поиск по названию, стеку (React, Python...) или ключевому слову...',
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
    portfolioBoundaryNote: 'Private case studies are summaries only. Source code, data, and local environments are not published.',
    githubBtn: 'GitHub',
    heroEyebrow: 'FULL-STACK · FINTECH · AUDIO DSP · AI 3D',
    heroTitlePrefix: 'Production Web Systems, ',
    heroTitleAccent: 'Trading Engines',
    heroTitleSuffix: ' & Media Pipelines',
    heroDescription:
      'Comprehensive engineering showcase of public repositories, high-performance PWA calculators, multi-language marketplace platforms, neural 3D workflows, and desktop utilities developed by DEN-2020.',
    exploreCatalogBtn: 'Explore Catalog',
    githubReposBtn: 'GitHub Repositories',
    statTotalProjects: 'Total Projects',
    statLiveReady: 'Live / Ready',
    statWebPlatforms: 'Web Platforms',
    statFintechTools: 'FinTech Tools',
    statAudioVideo: 'Audio & Video',
    statAiGames: 'AI, 3D & Games',
    searchPlaceholder: 'Search by title, stack (React, TypeScript), or keyword...',
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
    proprietaryBtn: 'Proprietary System',
    viewCompanion: 'View companion',
    clickToExpand: 'Click to view full screenshot',
    projectCount: 'Project',
    projectsCount: 'Projects',
  },
};
