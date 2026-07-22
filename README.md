# BN Material website

Production-oriented Astro website for BN Material: an independent materials-science, research, scientific-software, and engineering-knowledge platform.

## Stack and local setup

Astro static output, TypeScript strict mode, custom CSS tokens, Vitest, Playwright, ESLint, Prettier, and Cloudflare Pages. Use Node 22 LTS and pnpm.

```sh
pnpm install
pnpm dev
pnpm lint
pnpm format:check
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
pnpm check:links
```

## Content workflow

Central identity settings, topic entries, and the current software catalogue live in `src/config/site.ts`. Add a product by supplying its structured fields and evidence-backed status, features, planned features, access method, platform, licensing, and update date. Publication records must only be added from an authoritative source and should include title, authors, year, journal, DOI or journal URL, topics, and optional citation export.

Brand SVG sources live in `public/brand`; conceptual graphics must be labelled and must never be represented as experimental evidence.

## GitHub and release workflow

Changes flow through pull requests and CI. Production is `main`. Cloudflare Pages should use Git integration with build command `pnpm build`, output directory `dist`, and Node 22. Tag `v1.0.0` only after review, all validation, and production smoke tests. Roll back by reverting the relevant commit on `main` or selecting a known-good Cloudflare deployment.

## Cloudflare, DNS, and email safety

The permanent Pages project is `bnmaterial-website`. The canonical URL is `https://bnmaterial.com`; `www` and the Pages hostname require account-level redirects preserving paths and queries. DNS evidence is recorded in `docs/dns-before-launch.md`. Squarespace remains registrar; Cloudflare provides authoritative DNS and Pages; Zoho remains email provider. Never replace Zoho MX, verification, SPF, or DKIM records, create duplicate SPF, or enable Cloudflare Email Routing. Verify DNSSEC before changing nameservers.

The `info@bnmaterial.com` mailbox is configured in source but flagged unconfirmed; verify the mailbox or alias in Zoho before presenting it as operational. A future secure form endpoint can be configured without storing SMTP credentials in the repository.

## Sister-site boundary

`bhijan.com.np` is a linked sister site and Bhijan Neupane's personal portfolio. Do not change its repository, project, zone, DNS, domain, or files.

## Environment variables

No runtime variables are required for the static build. Future form endpoints or analytics configuration must use Cloudflare project secrets/settings; never commit local `.env` or `.dev.vars` files.
