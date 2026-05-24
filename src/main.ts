import {
  Calculator,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Filter,
  GitBranch,
  Globe,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Wrench,
  createIcons,
} from 'lucide';
import './style.css';
import heroImage from './assets/portfolio-hero.png';
import { projects, type DemoStatus, type Project, type ProjectType } from './projects';

type FilterMode = 'all' | ProjectType | DemoStatus;

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App root was not found.');
}

const state: { filter: FilterMode; query: string } = {
  filter: 'all',
  query: '',
};

const typeLabels: Record<ProjectType, string> = {
  app: 'Apps',
  site: 'Sites',
  calculator: 'Calculators',
  tooling: 'Private work',
};

const demoLabels: Record<DemoStatus, string> = {
  live: 'Live demo',
  source: 'Source / overview',
  preparing: 'Demo preparing',
};

const typeIcon: Record<ProjectType, string> = {
  app: 'code-2',
  site: 'globe',
  calculator: 'calculator',
  tooling: 'wrench',
};

const demoIcon: Record<DemoStatus, string> = {
  live: 'globe',
  source: 'git-branch',
  preparing: 'shield-check',
};

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const countBy = <T extends string>(items: Project[], selector: (project: Project) => T, value: T) =>
  items.filter((project) => selector(project) === value).length;

const filteredProjects = () => {
  const normalizedQuery = state.query.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesFilter =
      state.filter === 'all' || project.type === state.filter || project.demoStatus === state.filter;

    const searchText = [
      project.name,
      project.repo ?? '',
      project.summary,
      project.purpose,
      project.features.join(' '),
      project.technicalNotes.join(' '),
      project.outcomes.join(' '),
      project.stack.join(' '),
    ]
      .join(' ')
      .toLowerCase();

    return matchesFilter && (!normalizedQuery || searchText.includes(normalizedQuery));
  });
};

const statCard = (label: string, value: number | string, icon: string, tone = 'neutral') => `
  <article class="stat stat--${tone}">
    <span class="stat__icon"><i data-lucide="${icon}"></i></span>
    <span>
      <strong>${value}</strong>
      <small>${label}</small>
    </span>
  </article>
`;

const pill = (label: string, tone: string, icon: string) => `
  <span class="pill pill--${tone}">
    <i data-lucide="${icon}"></i>
    ${escapeHtml(label)}
  </span>
`;

const listItems = (items: string[]) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join('');

const projectCard = (project: Project) => `
  <article class="project-card" data-project="${escapeHtml(project.slug)}">
    <div class="project-card__top">
      <div class="project-card__icon">
        <i data-lucide="${typeIcon[project.type]}"></i>
      </div>
      <div class="project-card__title">
        <h2>${escapeHtml(project.name)}</h2>
        <p>${project.repo ? escapeHtml(project.repo) : 'Selected internal work'}</p>
      </div>
    </div>

    <div class="project-card__pills">
      ${pill(typeLabels[project.type], 'type', typeIcon[project.type])}
      ${pill(demoLabels[project.demoStatus], project.demoStatus, demoIcon[project.demoStatus])}
      ${project.siteUrl ? pill('Published site', 'built', 'globe') : pill('Public-safe summary', 'disabled', 'shield-check')}
    </div>

    <p class="project-card__summary">${escapeHtml(project.summary)}</p>
    <p class="project-card__purpose">${escapeHtml(project.purpose)}</p>

    <div class="stack-list" aria-label="Technology stack">
      ${project.stack.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}
    </div>

    <section class="inside-preview" aria-label="Project highlights">
      <h3>Highlights</h3>
      <ul>${listItems(project.features.slice(0, 2))}</ul>
    </section>

    <details class="project-details">
      <summary>Project details</summary>
      <div class="details-grid">
        <section>
          <h3>What it includes</h3>
          <ul>${listItems(project.features)}</ul>
        </section>
        <section>
          <h3>Technical shape</h3>
          <ul>${listItems(project.technicalNotes)}</ul>
        </section>
        <section>
          <h3>What it demonstrates</h3>
          <ul>${listItems(project.outcomes)}</ul>
        </section>
      </div>
    </details>

    <div class="actions actions--public">
      ${
        project.githubUrl
          ? `<a class="icon-button icon-button--primary" href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noreferrer" title="Open source repository">
              <i data-lucide="git-branch"></i>
              Source
            </a>`
          : `<button class="icon-button icon-button--primary" type="button" disabled title="Private work is not linked publicly">
              <i data-lucide="shield-check"></i>
              Private
            </button>`
      }
      ${
        project.siteUrl
          ? `<a class="icon-button" href="${escapeHtml(project.siteUrl)}" target="_blank" rel="noreferrer" title="Open live project">
              <i data-lucide="external-link"></i>
              Live site
            </a>`
          : `<button class="icon-button" type="button" disabled title="No public live site linked">
              <i data-lucide="globe"></i>
              No demo
            </button>`
      }
    </div>
  </article>
`;

const filterButton = (filter: FilterMode, label: string, count: number) => `
  <button class="filter-button ${state.filter === filter ? 'filter-button--active' : ''}" type="button" data-filter="${filter}">
    ${escapeHtml(label)}
    <span>${count}</span>
  </button>
`;

const render = () => {
  const shown = filteredProjects();
  const liveCount = countBy(projects, (project) => project.demoStatus, 'live');
  const calculatorCount = countBy(projects, (project) => project.type, 'calculator');
  const appCount = countBy(projects, (project) => project.type, 'app');
  const publicSourceCount = projects.filter((project) => project.githubUrl).length;

  app.innerHTML = `
    <header class="hero" style="--hero-image: url('${heroImage}')">
      <nav class="topbar" aria-label="Project portfolio navigation">
        <a class="brand" href="#projects" aria-label="Go to projects">
          <i data-lucide="sparkles"></i>
          DEN-2020 Portfolio
        </a>
        <div class="topbar__links">
          <a href="https://github.com/DEN-2020" target="_blank" rel="noreferrer">
            <i data-lucide="git-branch"></i>
            GitHub
          </a>
        </div>
      </nav>

      <section class="hero__content">
        <p class="eyebrow">Selected public projects and engineering work</p>
        <h1>Practical web apps, calculators, and tooling</h1>
        <p class="hero__lead">
          A compact portfolio of published projects, source repositories, static tools, and private engineering work summarized without exposing internal details.
        </p>
        <div class="hero__actions">
          <a class="icon-button icon-button--primary" href="#projects">
            <i data-lucide="filter"></i>
            View projects
          </a>
          <a class="icon-button" href="https://github.com/DEN-2020" target="_blank" rel="noreferrer">
            <i data-lucide="git-branch"></i>
            GitHub profile
          </a>
        </div>
      </section>
    </header>

    <main>
      <section class="stats" aria-label="Portfolio summary">
        ${statCard('Portfolio entries', projects.length, 'database')}
        ${statCard('Live demos', liveCount, 'globe', 'info')}
        ${statCard('Public source repos', publicSourceCount, 'git-branch', 'success')}
        ${statCard('Calculators', calculatorCount, 'calculator', 'warning')}
        ${statCard('Applications', appCount, 'code-2', 'private')}
      </section>

      <section class="workspace" id="projects">
        <div class="workspace__header">
          <div>
            <p class="eyebrow">Project index</p>
            <h2>Selected Work</h2>
          </div>
          <div class="search-box">
            <i data-lucide="search"></i>
            <input id="project-search" type="search" placeholder="Search by project, stack, or description" value="${escapeHtml(state.query)}" />
          </div>
        </div>

        <div class="filters" role="tablist" aria-label="Project filter">
          ${filterButton('all', 'All', projects.length)}
          ${filterButton('live', 'Live', liveCount)}
          ${filterButton('calculator', 'Calculators', calculatorCount)}
          ${filterButton('app', 'Apps', appCount)}
          ${filterButton('tooling', 'Tooling', countBy(projects, (project) => project.type, 'tooling'))}
        </div>

        <div class="project-grid" aria-live="polite">
          ${
            shown.length
              ? shown.map(projectCard).join('')
              : `<div class="empty-state">
                  <i data-lucide="search"></i>
                  <h2>No projects found</h2>
                  <p>Try another search or filter.</p>
                </div>`
          }
        </div>
      </section>
    </main>
  `;

  bindEvents();
  createIcons({
    icons: {
      Calculator,
      CheckCircle2,
      Code2,
      Database,
      ExternalLink,
      Filter,
      GitBranch,
      Globe,
      Search,
      Server,
      ShieldCheck,
      Sparkles,
      Wrench,
    },
    attrs: {
      'aria-hidden': 'true',
      strokeWidth: 2,
    },
  });
};

const bindEvents = () => {
  const searchInput = document.querySelector<HTMLInputElement>('#project-search');
  searchInput?.addEventListener('input', (event) => {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      state.query = target.value;
      render();
    }
  });

  document.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      const nextFilter = button.dataset.filter;
      if (
        nextFilter === 'all' ||
        nextFilter === 'app' ||
        nextFilter === 'site' ||
        nextFilter === 'calculator' ||
        nextFilter === 'tooling' ||
        nextFilter === 'live' ||
        nextFilter === 'source' ||
        nextFilter === 'preparing'
      ) {
        state.filter = nextFilter;
        render();
      }
    });
  });
};

render();
