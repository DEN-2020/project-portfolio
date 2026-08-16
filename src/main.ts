import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Eye,
  Filter,
  Folder,
  Gamepad2,
  GitBranch,
  Globe,
  HardDrive,
  Languages,
  Layers,
  LayoutGrid,
  Lock,
  Maximize2,
  Play,
  Radio,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Unlock,
  Volume2,
  Wrench,
  X,
  createIcons,
} from 'lucide';
import './style.css';
import {
  CATEGORIES,
  projects,
  type CategoryInfo,
  type DemoStatus,
  type Language,
  type Project,
  type ProjectCategory,
} from './projects';
import { translations } from './translations';
import { getTechIcon } from './tech-icons';

interface AppState {
  language: Language;
  viewMode: 'grouped' | 'grid';
  visibilityMode: 'all' | 'public';
  categoryFilter: 'all' | ProjectCategory;
  statusFilter: 'all' | DemoStatus;
  query: string;
  lightboxSlug: string | null;
}

const savedLang = (localStorage.getItem('portfolio_lang') as Language) || 'ru';

const state: AppState = {
  language: savedLang === 'en' || savedLang === 'ru' ? savedLang : 'ru',
  viewMode: 'grouped',
  visibilityMode: 'all',
  categoryFilter: 'all',
  statusFilter: 'all',
  query: '',
  lightboxSlug: null,
};

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) {
  throw new Error('Root #app element not found');
}

const escapeHtml = (str: string) =>
  str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
const getStatusInfo = (p: Project, lang: Language) => {
  const t = translations[lang];
  if (p.visibility === 'private' || p.visibility === 'local-only') {
    return { label: t.statusPrivate, tone: 'internal', icon: 'lock' };
  }
  switch (p.demoStatus) {
    case 'live':
      return { label: t.statusLive, tone: 'live', icon: 'globe' };
    case 'ready':
      return { label: t.statusReady, tone: 'ready', icon: 'check-circle-2' };
    case 'source':
      return { label: t.statusSource, tone: 'source', icon: 'git-branch' };
    case 'preparing':
      return { label: t.statusPreparing, tone: 'preparing', icon: 'sparkles' };
    case 'internal':
    default:
      return { label: t.statusInternal, tone: 'internal', icon: 'lock' };
  }
};

const getVisibleProjects = (): Project[] => {
  const lang = state.language;
  return projects.filter((p) => {
    // Category filter
    if (state.categoryFilter !== 'all' && p.category !== state.categoryFilter) {
      return false;
    }
    // Status filter
    if (state.statusFilter !== 'all' && p.demoStatus !== state.statusFilter) {
      return false;
    }
    // Search query
    if (state.query.trim()) {
      const q = state.query.toLowerCase().trim();
      const haystack = [
        p.name[lang],
        p.name.en,
        p.name.ru,
        p.summary[lang],
        p.purpose[lang],
        p.repo ?? '',
        p.category,
        p.stack.join(' '),
        p.features[lang].join(' '),
        p.technicalNotes[lang].join(' '),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    }
    return true;
  });
};

const renderStatBox = (num: number | string, label: string, icon: string, tone: string) => `
  <div class="stat-box stat-box--${tone}">
    <div class="stat-box__icon">
      <i data-lucide="${icon}"></i>
    </div>
    <div class="stat-box__content">
      <span class="stat-box__num">${num}</span>
      <span class="stat-box__label">${label}</span>
    </div>
  </div>
`;

const renderCompanionStrip = (project: Project, lang: Language) => {
  if (!project.companion) return '';
  const c = project.companion;
  const t = translations[lang];
  return `
    <div class="companion-strip">
      <div class="companion-strip__left">
        <i data-lucide="layers"></i>
        <span>${escapeHtml(c.label[lang])}</span>
      </div>
      ${
        c.url
          ? `<a href="${escapeHtml(c.url)}" target="_blank" rel="noreferrer" class="project-card__repo-link">
              <i data-lucide="external-link"></i> ${t.viewCompanion}
            </a>`
          : `<span class="companion-strip__right">${escapeHtml(c.note ? c.note[lang] : '')}</span>`
      }
    </div>
  `;
};

const renderProjectCard = (p: Project) => {
  const lang = state.language;
  const t = translations[lang];
  const statusInfo = getStatusInfo(p, lang);
  const isDevMode = state.visibilityMode === 'all';
  const isPrivate = p.visibility === 'private' || p.visibility === 'local-only';
  const images = p.screenshots?.[lang]?.length ? p.screenshots[lang] : [p.thumbnail[lang] || p.thumbnail.en];

  return `
    <article class="project-card" data-slug="${escapeHtml(p.slug)}">
      <!-- Thumbnail Header with Interactive Hover Slider -->
      <div class="project-card__thumb-wrap" data-lightbox="${escapeHtml(p.slug)}" data-card-slider title="${t.clickToExpand}">
        <div class="project-card__thumb-slider">
          ${images
            .map(
              (src, idx) => `
            <img
              class="project-card__thumb ${idx === 0 ? 'project-card__thumb--active' : ''}"
              src="${src}"
              alt="${escapeHtml(p.name[lang])} preview ${idx + 1}"
              data-slide-index="${idx}"
              loading="lazy"
            />
          `,
            )
            .join('')}
        </div>

        ${
          images.length > 1
            ? `
          <div class="thumb-slider-dots">
            ${images.map((_, idx) => `<span class="thumb-slider-dot ${idx === 0 ? 'thumb-slider-dot--active' : ''}" data-dot-index="${idx}"></span>`).join('')}
          </div>
        `
            : ''
        }

        <div class="project-card__thumb-overlay">
          <div class="thumb-overlay-top">
            <span class="preview-pill preview-pill--${statusInfo.tone}">
              <i data-lucide="${statusInfo.icon}"></i>
              ${statusInfo.label}
            </span>
            ${p.badge ? `<span class="badge-featured">${escapeHtml(p.badge[lang])}</span>` : ''}
          </div>
          <div class="thumb-overlay-bottom">
            <span class="badge-featured" style="background: rgba(0,0,0,0.75);">
              ${escapeHtml(p.stack.slice(0, 2).join(' · '))}
            </span>
            <button class="thumb-zoom-icon" type="button" aria-label="Expand preview">
              <i data-lucide="maximize-2"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Card Body -->
      <div class="project-card__body">
        <div class="project-card__head">
          <div>
            <h3 class="project-card__title">${escapeHtml(p.name[lang])}</h3>
            ${
              !isPrivate && p.repo
                ? `<a class="project-card__repo-link" href="https://github.com/${escapeHtml(p.repo)}" target="_blank" rel="noreferrer">
                    <i data-lucide="git-branch"></i> ${escapeHtml(p.repo)}
                  </a>`
                : `<span class="project-card__repo-link"><i data-lucide="lock"></i> ${t.statusPrivate}</span>`
            }
          </div>
        </div>

        <p class="project-card__summary">${escapeHtml(p.summary[lang])}</p>
        <p class="project-card__purpose">${escapeHtml(p.purpose[lang])}</p>

        ${
          isDevMode && p.localFolder
            ? `<div class="dev-meta-strip">
                <i data-lucide="folder"></i>
                <span>${t.localPathLabel} <strong>${escapeHtml(p.localFolder)}</strong></span>
              </div>`
            : ''
        }

        ${renderCompanionStrip(p, lang)}

        <!-- Tech Stack Tags with Logos -->
        <div class="stack-tags" aria-label="Technologies used">
          ${p.stack
            .map(
              (item) => `
            <span class="stack-tag">
              ${getTechIcon(item)}
              <span>${escapeHtml(item)}</span>
            </span>
          `
            )
            .join('')}
        </div>

        <!-- Accordion Details -->
        <details class="card-details">
          <summary>${t.architectureHeading}</summary>
          <div class="details-content">
            <div class="details-block">
              <h4>${t.capabilitiesHeading}</h4>
              <ul>${p.features[lang].map((f) => `<li>${escapeHtml(f)}</li>`).join('')}</ul>
            </div>
            <div class="details-block">
              <h4>${t.techArchHeading}</h4>
              <ul>${p.technicalNotes[lang].map((note) => `<li>${escapeHtml(note)}</li>`).join('')}</ul>
            </div>
            <div class="details-block">
              <h4>${t.outcomesHeading}</h4>
              <ul>${p.outcomes[lang].map((o) => `<li>${escapeHtml(o)}</li>`).join('')}</ul>
            </div>
          </div>
        </details>

        <!-- Actions pinned to bottom -->
        <div class="project-card__actions">
          ${
            isPrivate
              ? `
                <button class="card-btn" disabled title="Private repository / Code not public">
                  <i data-lucide="lock"></i> ${t.privateRepoBtn}
                </button>
                <button class="card-btn" disabled title="Proprietary system">
                  <i data-lucide="shield"></i> ${t.proprietaryBtn}
                </button>
              `
              : `
                ${
                  p.siteUrl
                    ? `<a class="card-btn card-btn--primary" href="${escapeHtml(p.siteUrl)}" target="_blank" rel="noreferrer">
                        <i data-lucide="external-link"></i> ${t.liveDemoBtn}
                      </a>`
                    : p.demoStatus === 'ready' && p.githubUrl
                      ? `<a class="card-btn card-btn--primary" href="${escapeHtml(p.githubUrl)}" target="_blank" rel="noreferrer">
                          <i data-lucide="play"></i> ${t.productionBuildBtn}
                        </a>`
                      : `<button class="card-btn" disabled>
                          <i data-lucide="shield-check"></i> ${p.demoStatus === 'preparing' ? t.preparingBtn : t.localSourceBtn}
                        </button>`
                }

                ${
                  p.githubUrl
                    ? `<a class="card-btn" href="${escapeHtml(p.githubUrl)}" target="_blank" rel="noreferrer">
                        <i data-lucide="git-branch"></i> ${t.sourceRepoBtn}
                      </a>`
                    : `<button class="card-btn" disabled title="Private repository">
                        <i data-lucide="lock"></i> ${t.privateBtn}
                      </button>`
                }
              `
          }
        </div>
      </div>
    </article>
  `;
};

const renderCategorySection = (cat: CategoryInfo, visibleProjects: Project[], lang: Language) => {
  const catProjects = visibleProjects.filter((p) => p.category === cat.id);
  if (catProjects.length === 0) return '';
  const t = translations[lang];

  return `
    <section class="category-section" id="cat-${cat.id}">
      <div class="category-header">
        <div class="category-header__left">
          <div class="category-header__icon">
            <i data-lucide="${cat.icon}"></i>
          </div>
          <div>
            <h2 class="category-header__title">${escapeHtml(cat.title[lang])}</h2>
            <p class="category-header__subtitle">${escapeHtml(cat.subtitle[lang])}</p>
          </div>
        </div>
        <span class="category-header__badge">${catProjects.length} ${catProjects.length === 1 ? t.projectCount : t.projectsCount}</span>
      </div>

      <div class="projects-grid">
        ${catProjects.map(renderProjectCard).join('')}
      </div>
    </section>
  `;
};

const renderLightboxModal = () => {
  if (!state.lightboxSlug) return '';
  const p = projects.find((item) => item.slug === state.lightboxSlug);
  if (!p) return '';
  const lang = state.language;
  const t = translations[lang];
  const statusInfo = getStatusInfo(p, lang);
  const images = p.screenshots?.[lang]?.length ? p.screenshots[lang] : [p.thumbnail[lang] || p.thumbnail.en];

  return `
    <div class="lightbox-modal lightbox-modal--open" id="lightbox-container" role="dialog" aria-modal="true" aria-label="${escapeHtml(p.name[lang])} preview">
      <div class="lightbox-content">
        <div class="lightbox-header">
          <div>
            <h3 class="lightbox-title">${escapeHtml(p.name[lang])}</h3>
            <span class="preview-pill preview-pill--${statusInfo.tone}" style="margin-top: 4px;">
              ${statusInfo.label}
            </span>
          </div>
          <button class="lightbox-close" id="lightbox-close-btn" type="button" aria-label="Close modal">
            <i data-lucide="x"></i>
          </button>
        </div>
        <div class="lightbox-image-wrap">
          <img class="lightbox-image" id="lightbox-current-img" src="${images[0]}" alt="${escapeHtml(p.name[lang])} preview" />
        </div>
        ${
          images.length > 1
            ? `
          <div style="display: flex; justify-content: center; gap: 8px; padding: 8px 0;">
            ${images
              .map(
                (_, idx) => `
              <button class="thumb-slider-dot ${idx === 0 ? 'thumb-slider-dot--active' : ''}" data-lightbox-dot="${idx}" style="cursor: pointer; height: 6px; width: 28px;" title="Screenshot ${idx + 1}"></button>
            `,
              )
              .join('')}
          </div>
        `
            : ''
        }
        <div class="lightbox-footer">
          <p style="font-size: 13px; color: var(--ink-secondary); max-width: 650px;">
            ${escapeHtml(p.summary[lang])}
          </p>
          <div class="lightbox-links">
            ${
              p.siteUrl
                ? `<a class="btn btn--primary" href="${escapeHtml(p.siteUrl)}" target="_blank" rel="noreferrer">
                    <i data-lucide="external-link"></i> ${t.liveDemoBtn}
                  </a>`
                : ''
            }
            ${
              p.githubUrl
                ? `<a class="btn btn--secondary" href="${escapeHtml(p.githubUrl)}" target="_blank" rel="noreferrer">
                    <i data-lucide="git-branch"></i> GitHub
                  </a>`
                : ''
            }
          </div>
        </div>
      </div>
    </div>
  `;
};

const render = () => {
  const lang = state.language;
  const t = translations[lang];
  document.documentElement.lang = lang;

  const visible = getVisibleProjects();
  const liveCount = projects.filter((p) => p.demoStatus === 'live' || p.demoStatus === 'ready').length;
  const webPlatformsCount = projects.filter((p) => p.category === 'web-platforms').length;
  const calculatorsCount = projects.filter((p) => p.category === 'calculators').length;
  const audioMediaCount = projects.filter((p) => p.category === 'audio-media').length;
  const aiGameCount = projects.filter((p) => p.category === 'ai-3d-gamedev' || p.category === 'mobile-apps').length;

  app.innerHTML = `
    <!-- Top Navigation -->
    <header class="topbar">
      <a class="brand" href="#" aria-label="Portfolio home">
        <div class="brand__logo">
          <i data-lucide="sparkles"></i>
        </div>
        <div>
          <span>${t.brandTitle}</span>
          <span style="color: var(--accent-emerald);">.portfolio</span>
        </div>
        <span class="brand__tag">${t.brandTag}</span>
      </a>

      <div class="topbar__actions">
        <!-- Language Switcher RU / EN -->
        <div class="lang-toggle" title="Switch language (RU / EN)">
          <button class="lang-toggle__btn ${lang === 'ru' ? 'lang-toggle__btn--active' : ''}" type="button" data-lang="ru">
            RU
          </button>
          <button class="lang-toggle__btn ${lang === 'en' ? 'lang-toggle__btn--active' : ''}" type="button" data-lang="en">
            EN
          </button>
        </div>

        <!-- Visibility Mode Switcher -->
        <div class="mode-toggle" title="Switch between Local Workspace view and Public Portfolio preview">
          <button class="mode-toggle__btn ${state.visibilityMode === 'all' ? 'mode-toggle__btn--active mode-dev' : ''}" type="button" data-visibility="all">
            <i data-lucide="hard-drive"></i>
            <span>${t.devModeBtn}</span>
          </button>
          <button class="mode-toggle__btn ${state.visibilityMode === 'public' ? 'mode-toggle__btn--active' : ''}" type="button" data-visibility="public">
            <i data-lucide="globe"></i>
            <span>${t.publicModeBtn}</span>
          </button>
        </div>

        <a class="topbar__link" href="https://github.com/DEN-2020" target="_blank" rel="noreferrer">
          <i data-lucide="git-branch"></i>
          <span>${t.githubBtn}</span>
        </a>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__badge-row">
        <span class="hero__badge">
          <i data-lucide="cpu"></i>
          ${t.heroEyebrow}
        </span>
      </div>

      <h1 class="hero__title">
        ${t.heroTitlePrefix}<span class="hero__title-accent">${t.heroTitleAccent}</span>${t.heroTitleSuffix}
      </h1>

      <p class="hero__description">
        ${t.heroDescription}
      </p>

      <div class="hero__actions">
        <a class="btn btn--primary" href="#workspace">
          <i data-lucide="layout-grid"></i>
          ${t.exploreCatalogBtn} (${visible.length})
        </a>
        <a class="btn btn--secondary" href="https://github.com/DEN-2020?tab=repositories" target="_blank" rel="noreferrer">
          <i data-lucide="external-link"></i>
          ${t.githubReposBtn}
        </a>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="stats-grid" aria-label="Portfolio statistics">
      ${renderStatBox(projects.length, t.statTotalProjects, 'database', 'emerald')}
      ${renderStatBox(liveCount, t.statLiveReady, 'globe', 'cyan')}
      ${renderStatBox(webPlatformsCount, t.statWebPlatforms, 'layout-grid', 'emerald')}
      ${renderStatBox(calculatorsCount, t.statFintechTools, 'calculator', 'amber')}
      ${renderStatBox(audioMediaCount, t.statAudioVideo, 'volume-2', 'indigo')}
      ${renderStatBox(aiGameCount, t.statAiGames, 'gamepad-2', 'purple')}
    </section>

    <!-- Main Workspace -->
    <main class="main-workspace" id="workspace">
      <!-- Controls Bar -->
      <div class="controls-bar">
        <div class="search-field">
          <i data-lucide="search"></i>
          <input
            id="search-input"
            type="search"
            placeholder="${t.searchPlaceholder}"
            value="${escapeHtml(state.query)}"
            autocomplete="off"
          />
          ${
            state.query
              ? `<button class="search-field__clear" id="clear-search-btn" type="button" aria-label="Clear search">
                  <i data-lucide="x"></i>
                </button>`
              : ''
          }
        </div>

        <div class="view-switches">
          <div class="segmented-control" title="Toggle section grouping">
            <button class="segmented-control__btn ${state.viewMode === 'grouped' ? 'segmented-control__btn--active' : ''}" type="button" data-view="grouped">
              <i data-lucide="layers"></i>
              <span>${t.byCategoryBtn}</span>
            </button>
            <button class="segmented-control__btn ${state.viewMode === 'grid' ? 'segmented-control__btn--active' : ''}" type="button" data-view="grid">
              <i data-lucide="layout-grid"></i>
              <span>${t.allGridBtn}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Filter Tabs -->
      <nav class="filter-tabs" aria-label="Category filters">
        <button class="filter-tab ${state.categoryFilter === 'all' ? 'filter-tab--active' : ''}" type="button" data-category="all">
          <i data-lucide="layers"></i>
          <span>${t.allCategoriesTab}</span>
          <span class="filter-tab__count">${projects.length}</span>
        </button>
        ${CATEGORIES.map(
          (cat) => `
          <button class="filter-tab ${state.categoryFilter === cat.id ? 'filter-tab--active' : ''}" type="button" data-category="${cat.id}">
            <i data-lucide="${cat.icon}"></i>
            <span>${escapeHtml(cat.title[lang])}</span>
            <span class="filter-tab__count">${projects.filter((p) => p.category === cat.id).length}</span>
          </button>
        `,
        ).join('')}
      </nav>

      <!-- Projects View -->
      <div id="projects-container">
        ${
          visible.length === 0
            ? `
              <div class="empty-state">
                <i data-lucide="search" style="width: 48px; height: 48px;"></i>
                <h3>${t.noProjectsFound}</h3>
                <p>${t.noProjectsHint}</p>
                <button class="btn btn--secondary" id="reset-filters-btn" type="button" style="margin-top: 8px;">
                  ${t.resetFiltersBtn}
                </button>
              </div>
            `
            : state.viewMode === 'grouped' && state.categoryFilter === 'all'
              ? CATEGORIES.map((cat) => renderCategorySection(cat, visible, lang)).join('')
              : `
              <div class="projects-grid">
                ${visible.map(renderProjectCard).join('')}
              </div>
            `
        }
      </div>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="site-footer__inner">
        <div>
          <strong>${t.footerBrand}</strong> · Full-Stack, FinTech & Media Systems.
        </div>
        <div style="display: flex; gap: 14px; align-items: center;">
          <span>${state.visibilityMode === 'all' ? t.footerModeDev : t.footerModePublic}</span>
          <span>·</span>
          <a href="https://github.com/DEN-2020" target="_blank" rel="noreferrer" style="color: var(--accent-emerald);">
            github.com/DEN-2020
          </a>
        </div>
      </div>
    </footer>

    <!-- Lightbox Modal -->
    ${renderLightboxModal()}
  `;

  bindEvents();
  createIcons({
    icons: {
      ArrowRight,
      Calculator,
      CheckCircle2,
      Code2,
      Cpu,
      Database,
      ExternalLink,
      Eye,
      Filter,
      Folder,
      Gamepad2,
      GitBranch,
      Globe,
      HardDrive,
      Languages,
      Layers,
      LayoutGrid,
      Lock,
      Maximize2,
      Play,
      Radio,
      Search,
      Server,
      ShieldCheck,
      Smartphone,
      Sparkles,
      Unlock,
      Volume2,
      Wrench,
      X,
    },
    attrs: {
      'aria-hidden': 'true',
      strokeWidth: 2,
    },
  });
};

const bindEvents = () => {
  // Language Switch
  document.querySelectorAll<HTMLButtonElement>('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const selected = btn.dataset.lang as Language;
      if (selected && selected !== state.language) {
        state.language = selected;
        localStorage.setItem('portfolio_lang', selected);
        render();
      }
    });
  });

  // Search Input
  const searchInput = document.querySelector<HTMLInputElement>('#search-input');
  searchInput?.addEventListener('input', (e) => {
    state.query = (e.target as HTMLInputElement).value;
    render();
    const updated = document.querySelector<HTMLInputElement>('#search-input');
    if (updated) {
      updated.focus();
      updated.setSelectionRange(state.query.length, state.query.length);
    }
  });

  // Clear Search
  document.querySelector('#clear-search-btn')?.addEventListener('click', () => {
    state.query = '';
    render();
  });

  // Reset Filters
  document.querySelector('#reset-filters-btn')?.addEventListener('click', () => {
    state.query = '';
    state.categoryFilter = 'all';
    state.statusFilter = 'all';
    render();
  });

  // Visibility Mode Switch
  document.querySelectorAll<HTMLButtonElement>('[data-visibility]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.visibility as 'all' | 'public';
      if (mode) {
        state.visibilityMode = mode;
        render();
      }
    });
  });

  // View Mode Switch (Grouped vs Grid)
  document.querySelectorAll<HTMLButtonElement>('[data-view]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view as 'grouped' | 'grid';
      if (view) {
        state.viewMode = view;
        render();
      }
    });
  });

  // Category Filter Tabs
  document.querySelectorAll<HTMLButtonElement>('[data-category]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category as 'all' | ProjectCategory;
      if (cat) {
        state.categoryFilter = cat;
        render();
      }
    });
  });

  // Lightbox Open
  document.querySelectorAll<HTMLElement>('[data-lightbox]').forEach((el) => {
    el.addEventListener('click', () => {
      const slug = el.dataset.lightbox;
      if (slug) {
        state.lightboxSlug = slug;
        render();
      }
    });
  });

  // Card Thumbnail Hover Slider
  document.querySelectorAll<HTMLElement>('[data-card-slider]').forEach((wrap) => {
    const images = wrap.querySelectorAll<HTMLImageElement>('.project-card__thumb');
    const dots = wrap.querySelectorAll<HTMLElement>('.thumb-slider-dot');
    if (images.length <= 1) return;

    let currentIndex = 0;
    const setActive = (index: number) => {
      if (index === currentIndex || index < 0 || index >= images.length) return;
      currentIndex = index;
      images.forEach((img, i) => {
        img.classList.toggle('project-card__thumb--active', i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('thumb-slider-dot--active', i === index);
      });
    };

    wrap.addEventListener('mousemove', (e) => {
      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const progress = Math.max(0, Math.min(0.999, x / rect.width));
      const targetIndex = Math.floor(progress * images.length);
      setActive(targetIndex);
    });

    wrap.addEventListener('mouseleave', () => {
      setActive(0);
    });
  });

  // Lightbox Dot Navigation
  document.querySelectorAll<HTMLButtonElement>('[data-lightbox-dot]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.lightboxDot);
      const img = document.querySelector<HTMLImageElement>('#lightbox-current-img');
      const p = projects.find((item) => item.slug === state.lightboxSlug);
      if (!p || !img) return;
      const lang = state.language;
      const images = p.screenshots?.[lang]?.length ? p.screenshots[lang] : [p.thumbnail[lang] || p.thumbnail.en];
      if (images[idx]) {
        img.src = images[idx];
        document.querySelectorAll('[data-lightbox-dot]').forEach((d, i) => {
          d.classList.toggle('thumb-slider-dot--active', i === idx);
        });
      }
    });
  });

  // Lightbox Close
  document.querySelector('#lightbox-close-btn')?.addEventListener('click', () => {
    state.lightboxSlug = null;
    render();
  });

  document.querySelector('#lightbox-container')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      state.lightboxSlug = null;
      render();
    }
  });
};

// Keyboard shortcut Esc to close modal
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && state.lightboxSlug) {
    state.lightboxSlug = null;
    render();
  }
});

// Initial Render
render();
