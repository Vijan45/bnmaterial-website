# Security and deployment audit

Repository: `Vijan45/bnmaterial-website`

Audit date: 2026-07-28

Auditor: authenticated GitHub account `Vijan45`

This report is sanitized. It contains no tokens, repository-secret values, webhook URLs, or credential material. No DNS or Cloudflare setting was changed.

## Executive summary

The repository is public and publishes `https://bnmaterial.com/` through GitHub Pages. Live DNS and response headers identify GitHub Pages as the active host, so GitHub Pages, repository visibility, the custom domain, and both `CNAME` files were preserved.

The account has repository admin access. Vulnerability alerts, automated security updates, CodeQL default setup, secret scanning, push protection, and read-only default Actions permissions were already enabled. The audit added a production-branch ruleset and automatic deletion of merged feature branches directly in repository settings. File hardening is proposed on `chore/repository-security-hardening`.

## Deployment and repository baseline

| Item                            | Audited state                                       |
| ------------------------------- | --------------------------------------------------- |
| Visibility                      | Public                                              |
| Default/production branch       | `main`                                              |
| GitHub Pages                    | Enabled; status `built`; build type `workflow`      |
| Pages source                    | `main`, repository root                             |
| Pages URL                       | `https://bnmaterial.com/`                           |
| Custom domain                   | `bnmaterial.com`                                    |
| HTTPS enforcement               | Enabled                                             |
| Repository CNAME files          | `/CNAME` and `/public/CNAME`, both `bnmaterial.com` |
| Deployment environment          | `github-pages`, restricted by branch policy         |
| Latest recorded deployment      | Successful GitHub Pages deployment from `main`      |
| Cloudflare Pages                | Not evidenced as the active deployment              |
| External DNS/Cloudflare changes | None                                                |

Live checks found the GitHub Pages IPv4 addresses on the apex and `www.bnmaterial.com` pointing to `vijan45.github.io`. HTTP response headers identified `GitHub.com` as the server. The apex returned HTTP 200 over HTTPS and `www` redirected to the apex.

## Actions and integrations

Current workflows:

- `CI` at `.github/workflows/ci.yml`
- `Deploy to GitHub Pages` at `.github/workflows/deploy-pages.yml`
- GitHub-managed CodeQL
- GitHub-managed Pages build/deployment

The most recent `CI`, Pages deployment, and CodeQL runs audited on 2026-07-28 completed successfully. The default workflow token permission is read-only, and workflows cannot approve pull-request reviews. The Pages deployment workflow retains its explicit `pages: write` and `id-token: write` job permissions.

The repository has one deployment environment (`github-pages`) and no repository webhooks. GitHub App installations could not be enumerated: the authenticated OAuth token has repository administration scopes but the installations endpoint returned HTTP 403 because it was not authorized to a GitHub App. No integrations were removed or changed.

## Security controls and findings

| Control                          | Audited state                                      |
| -------------------------------- | -------------------------------------------------- |
| Vulnerability alerts             | Enabled                                            |
| Automated security updates       | Enabled and not paused                             |
| Open Dependabot alerts           | 0                                                  |
| Dependabot version-update file   | Absent on `main`; added in this branch             |
| Secret scanning                  | Enabled                                            |
| Push protection                  | Enabled                                            |
| Open secret-scanning alerts      | 0                                                  |
| CodeQL default setup             | Configured for Actions, JavaScript, and TypeScript |
| Open code-scanning alerts        | 1 at audit time                                    |
| Actions default token permission | Read repository contents                           |
| Actions PR-approval permission   | Disabled                                           |
| Repository webhooks              | 0                                                  |

The open CodeQL alert is `actions/missing-workflow-permissions` in `.github/workflows/ci.yml` at commit `5fa801a6e87e8d938879c3b34fc23162ed7eb190`. This branch adds explicit `contents: read` permission. The alert will remain open until GitHub analyzes the merged fix.

## Credential exposure review

Gitleaks 8.30.1 scanned all 14 reachable commits (approximately 751 KB) with redaction enabled and found no potential credentials. GitHub secret scanning reported no open alerts. No tracked or historical files used common sensitive names such as `.env`, private-key files, or credentials files.

No exposed credential was identified, so no rotation action is currently indicated. If a provider reports a credential independently, revoke it first, replace it in GitHub secrets, and investigate affected logs and deployments before considering history cleanup.

## Branch policy and administrative changes

| Setting                  | Before       | After                                                                  |
| ------------------------ | ------------ | ---------------------------------------------------------------------- |
| Production ruleset       | None         | Active `Protect production branch` ruleset targeting `refs/heads/main` |
| Branch deletion          | Not blocked  | Blocked by ruleset                                                     |
| Force pushes             | Not blocked  | Blocked by ruleset                                                     |
| Pull requests            | Not required | Required with 0 approvals                                              |
| Review-thread resolution | Not required | Required                                                               |
| Linear history           | Not required | Unchanged; existing history contains a merge commit                    |
| Required status checks   | None         | Unchanged to avoid introducing a new deployment gate                   |
| Delete merged branches   | Disabled     | Enabled                                                                |

The ruleset does not require an outside reviewer or approval, so the repository owner can merge their own pull request after resolving any conversations. It does not change the Pages source or current deployment.

## Proposed repository-file changes

| File or control            | Before                                  | Proposed on this branch                                                                                                           |
| -------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `.gitignore`               | Partial exclusions                      | Environment files, private keys, credential files, build/test output, local Cloudflare state, editor files, and OS files excluded |
| `.env.example`             | Absent                                  | Added with documentation only; no secret or invented runtime requirement                                                          |
| `.github/dependabot.yml`   | Absent                                  | Weekly npm and GitHub Actions update checks                                                                                       |
| `.github/workflows/ci.yml` | Relied on repository default permission | Explicit `contents: read` permission                                                                                              |
| This report                | Absent                                  | Added                                                                                                                             |

## Validation

The following commands completed successfully on this branch:

- `pnpm install --frozen-lockfile`
- `pnpm lint`
- `pnpm format:check`
- `pnpm typecheck` (0 errors; existing framework deprecation hints only)
- `pnpm test` (4 tests passed)
- `pnpm build` (30 static pages built)
- `pnpm check:links` (no broken internal links)
- `pnpm test:e2e` (11 Playwright tests passed)

## Preserved settings and known limitations

- The repository remains public because its live GitHub Pages site depends on public publication.
- GitHub Pages, `bnmaterial.com`, both `CNAME` files, and the `github-pages` environment remain unchanged.
- Linear history was not required because the reachable history includes a merge commit and all three merge methods are enabled.
- Status checks were not added to the ruleset; existing CI remains active but is not made a new production gate.
- Secret-scanning non-provider patterns and validity checks remain disabled because they were not requested and may depend on plan or feature availability.
- GitHub App installation inventory requires a token authorized to a GitHub App and could not be completed through the authenticated CLI token.
