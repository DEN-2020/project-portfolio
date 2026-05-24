export type DemoStatus = 'live' | 'source' | 'preparing';
export type ProjectType = 'app' | 'site' | 'calculator' | 'tooling';

export type Project = {
  slug: string;
  name: string;
  type: ProjectType;
  repo?: string;
  githubUrl?: string;
  siteUrl?: string;
  demoStatus: DemoStatus;
  summary: string;
  purpose: string;
  features: string[];
  technicalNotes: string[];
  stack: string[];
  outcomes: string[];
};

export const projects: Project[] = [
  {
    slug: 'kids-tracker',
    name: 'Kids Tracker',
    type: 'app',
    repo: 'DEN-2020/kids-tracker',
    githubUrl: 'https://github.com/DEN-2020/kids-tracker',
    demoStatus: 'source',
    summary: 'Gamified family task manager for kids, parents, rewards, approvals, and progress tracking.',
    purpose:
      'Kids Tracker turns daily chores into a points-based routine. Children see assigned tasks, complete them through deliberate confirmation flows, and exchange earned points for rewards. Parents manage tasks, children, approvals, shop items, achievements, and family settings.',
    features: [
      'Kid experience: assigned tasks, icons, point values, countdown timers, balance, shop rewards, achievements, and interactive completion feedback.',
      'Parent/admin experience: task creation, auto-repeat, auto-approve options, shop management, achievement thresholds, child switching, and activity review.',
      'Family onboarding: Firebase authentication, family IDs, invite/join flow, profile selection, and multi-child support.',
      'Production-oriented Firebase layer with Firestore rules, indexes, Cloud Functions, Storage, migration scripts, and PWA build tooling.',
    ],
    technicalNotes: [
      'Frontend is built with Vite, React, TypeScript, Firebase SDK, lucide-react, qrcode.react, Recharts, and PWA tooling.',
      'The app uses Firestore real-time updates and Cloud Functions for server-side task and approval flows.',
      'The repository includes lint/build checks and a separate function syntax check.',
    ],
    stack: ['React', 'TypeScript', 'Firebase', 'Firestore', 'Cloud Functions', 'PWA'],
    outcomes: [
      'Centralizes task tracking, rewards, and approvals in one family workflow.',
      'Separates kid-facing actions from parent controls.',
      'Provides a foundation for a deployed Firebase-backed family app.',
    ],
  },
  {
    slug: 'tv',
    name: 'TV',
    type: 'site',
    repo: 'DEN-2020/tv',
    githubUrl: 'https://github.com/DEN-2020/tv',
    siteUrl: 'https://den-2020.github.io/tv/',
    demoStatus: 'live',
    summary: 'Published GitHub Pages project with browser-side TV and media-link utility scripts.',
    purpose:
      'TV is a lightweight public web project for media-link utilities and TV-oriented browser scripts. It is published as a static GitHub Pages site and keeps the project easy to open, inspect, and iterate without backend infrastructure.',
    features: [
      'Static JavaScript modules for TV, online, cinema, and related media-link flows.',
      'A Lampa-related proxy folder for companion integration work.',
      'Simple GitHub Pages hosting from the main branch.',
    ],
    technicalNotes: [
      'The project is intentionally static and does not require a server process for the public page.',
      'The published version is served through GitHub Pages.',
      'The codebase is compact and easy to inspect directly from GitHub.',
    ],
    stack: ['JavaScript', 'Static site', 'GitHub Pages'],
    outcomes: [
      'Provides a shareable public page for the TV utility project.',
      'Keeps deployment simple through static hosting.',
      'Useful as a small script-focused public repository.',
    ],
  },
  {
    slug: 'calc',
    name: 'Calc',
    type: 'calculator',
    repo: 'DEN-2020/calc',
    githubUrl: 'https://github.com/DEN-2020/calc',
    siteUrl: 'https://den-2020.github.io/calc/',
    demoStatus: 'live',
    summary: 'Multi-page public calculator suite for trading, investing, strategy, and vehicle-related calculations.',
    purpose:
      'Calc groups several practical calculators into one static PWA-style site. It is designed for quick browser access, multilingual UI text, offline-friendly assets, and fast iteration without a backend.',
    features: [
      'Separate pages for spot, perpetuals, investing, strategy, vehicle calculations, and the main index.',
      'Shared JavaScript and CSS structure with language files for multiple locales.',
      'PWA assets including manifest, service worker, icons, and splash screens.',
    ],
    technicalNotes: [
      'The project is built as a static HTML/CSS/JavaScript site.',
      'GitHub Pages hosts the public demo from the main branch.',
      'The page structure makes individual calculators easy to test and update independently.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'PWA', 'GitHub Pages'],
    outcomes: [
      'Collects related calculation tools under one public site.',
      'Supports quick access from desktop or mobile browsers.',
      'Keeps deployment inexpensive and portable.',
    ],
  },
  {
    slug: 'car-calc',
    name: 'Car Calc',
    type: 'calculator',
    repo: 'DEN-2020/car-calc',
    githubUrl: 'https://github.com/DEN-2020/car-calc',
    siteUrl: 'https://den-2020.github.io/car-calc/',
    demoStatus: 'live',
    summary: 'Focused public calculator for vehicle-related cost and loan scenarios.',
    purpose:
      'Car Calc is a dedicated static calculator project for vehicle scenarios. It separates general calculations from car-specific flows and keeps the interface deployable as a small GitHub Pages app.',
    features: [
      'Dedicated pages for the main calculator and loan calculations.',
      'Reusable partials, language files, CSS modules, icons, and splash assets.',
      'Service worker and manifest support for app-like usage.',
    ],
    technicalNotes: [
      'The project is a static frontend with no backend dependency.',
      'GitHub Pages serves the public version.',
      'The folder structure keeps UI, translations, and scripts separated for easier maintenance.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'PWA', 'GitHub Pages'],
    outcomes: [
      'Provides a targeted calculator instead of mixing vehicle logic into unrelated tools.',
      'Works as a lightweight public demo.',
      'Can evolve independently from the broader Calc project.',
    ],
  },
  {
    slug: 'profit-calc',
    name: 'Profit Calc',
    type: 'calculator',
    repo: 'DEN-2020/profit-calc',
    githubUrl: 'https://github.com/DEN-2020/profit-calc',
    demoStatus: 'preparing',
    summary: 'Spot and perpetual profit calculator source project.',
    purpose:
      'Profit Calc focuses on trading-related profit calculations for spot and perpetual scenarios. It is kept as a public source project and is structured as a static calculator suite.',
    features: [
      'Pages for spot, perpetuals, investing, strategy, and the main calculator entry point.',
      'Static CSS, JavaScript, images, icons, and service-worker assets.',
      'Simple README that identifies the project as a spot and perp profit calculator.',
    ],
    technicalNotes: [
      'The source is public on GitHub.',
      'The project uses a static frontend architecture.',
      'The public live demo is not linked here until the Pages deployment is ready.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Static site'],
    outcomes: [
      'Keeps trading calculation logic in a dedicated project.',
      'Can be published as a static demo after Pages configuration is finalized.',
      'Useful as a compact source example for calculator UI work.',
    ],
  },
  {
    slug: 'internal-work',
    name: 'Private Tooling & Research',
    type: 'tooling',
    demoStatus: 'source',
    summary: 'Internal work across backend experiments, automation, Docker tooling, research, and 3D pipelines.',
    purpose:
      'Some work is intentionally kept private because it contains internal tooling, experiments, infrastructure, research notes, or project-specific setup. This portfolio mentions that work at a high level without exposing private repositories or sensitive implementation details.',
    features: [
      'Backend and API experiments for private workflows.',
      'Docker and 3D generation tooling for local production pipelines.',
      'Research and audit projects that are useful internally but not suitable for public source release.',
    ],
    technicalNotes: [
      'Private projects are not linked from the public portfolio.',
      'Sensitive configuration, local paths, datasets, and internal notes are intentionally excluded.',
      'Public summaries stay focused on capability areas rather than repository internals.',
    ],
    stack: ['Backend', 'Docker', 'Automation', 'Research', '3D tooling'],
    outcomes: [
      'Keeps public presentation clean while acknowledging broader engineering work.',
      'Protects private implementation details.',
      'Leaves room to publish selected internal tools later as separate public projects.',
    ],
  },
];
