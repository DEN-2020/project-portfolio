# DEN-2020 Project Portfolio

Public portfolio for selected DEN-2020 projects: web apps, calculators, published sites, and high-level summaries of private engineering work.

The portfolio is intentionally curated. It is not an automatic inventory of every local Git repository: archives, duplicates, experiments without a stable story, infrastructure, and internal tooling are excluded. A private or local project may be shown as a case-study summary, but its source code, local path, internal repository name, credentials, network identifiers, and private data must never be published here.

The deployed site opens in **Public only** mode. **All case studies** adds private/local summaries; it does not grant access to their repositories or environments. Because every word and asset shipped to GitHub Pages is public, this toggle is presentation—not an access-control mechanism.

## Content checklist

Before adding or updating a project:

- verify every public repository and demo URL;
- derive technical claims from the current code or README;
- label unavailable source code as private instead of linking to a missing repository;
- use an authentic screenshot or a clearly labelled architecture diagram;
- remove local paths, internal URLs, user/device names, credentials, tokens, and real customer data;
- omit performance, security, medical, or business-result claims without reproducible evidence.

## Команды

```bash
npm run dev
npm run verify
npm run build
```

## Publishing

The site is deployed to GitHub Pages through the workflow in `.github/workflows/pages.yml`.

The portfolio intentionally avoids local paths, private repository names, secrets, internal URLs, and uncertain wording. Private work is summarized only at a high level.
