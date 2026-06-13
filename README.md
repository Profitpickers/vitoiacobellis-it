# Facilitatore Tagaro

Documentation-first MVP and static frontend for the Facilitatore Tagaro project by Vito Iacobellis.

The project supports commercial facilitation and B2B introductions for Masseria Tagaro S.r.l., an internationally-oriented winery based in Locorotondo, Puglia, Italy.

## Project Overview

The current repository contains:

- Project documentation
- Product requirements
- MVP architecture
- Landing page content
- Static frontend MVP
- Image, video, audio, and PDF asset folders
- GitHub Pages deployment support

The landing page is designed for buyers, distributors, importers, Ho.Re.Ca. operators, GDO, retail chains, and commercial partners.

Expected public URL:

https://www.vitoiacobellis.it/facilitatore-tagaro/

## Local Preview

Open the local landing page directly in a browser:

```text
C:\Users\vitoi\vitoiacobellis-facilitatore-tagaro\facilitatore-tagaro\index.html
```

No backend, build process, dashboard, CRM, Supabase, analytics, or local server is required for the current MVP.

## GitHub Pages Deployment

Recommended deployment steps:

1. Push the repository to GitHub.
2. In the GitHub repository settings, open `Pages`.
3. Select deployment from the main branch root.
4. Confirm that `CNAME` contains:

```text
www.vitoiacobellis.it
```

5. Configure DNS for `www.vitoiacobellis.it` to point to GitHub Pages.
6. After DNS propagation, verify:

```text
https://www.vitoiacobellis.it/facilitatore-tagaro/
```

The root `index.html` redirects visitors to `/facilitatore-tagaro/`.

## Assets Folders

- `assets/images/` - active landing images and future image assets
- `assets/videos/` - Tagaro video presentation and future video assets
- `assets/audio/` - executive audio briefing and future audio assets
- `assets/pdf/` - future PDF resources such as business presentations, catalogs, product sheets, and certifications

## Current Scope

The current MVP is static and frontend-only.

Out of scope:

- Backend
- Supabase
- CRM
- Dashboard
- Analytics
- Automation
- AI assistant
