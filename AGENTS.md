# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 15** marketing website (Velorum AI). It is a single application with no backend, no database, and no external service dependencies required for local development.

### Key commands

All standard commands are in `package.json`:

| Task | Command |
|------|---------|
| Dev server | `npm run dev` (Turbopack, port 3000) |
| Build | `npm run build` |
| Lint | `npm run lint` |

### Notes

- The contact and newsletter forms POST to external **Make.com** webhook URLs. These work in production but will succeed or silently fail locally depending on network access — the app itself is fully functional without them.
- `next.config.js` sets `eslint.ignoreDuringBuilds: true`, so lint errors do not block builds. Run `npm run lint` separately to see them.
- There are no automated tests in this repository.
- No `.env` file is needed; there are no secrets or environment variables required.
