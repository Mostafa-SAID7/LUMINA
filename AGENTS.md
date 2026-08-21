# Base44 Dev Environment

## Project
Vite + React 18 + TypeScript single-page app (Lumina Beauty skincare storefront). Frontend-only — no backend, no database, no external services, no secrets required.

## Stack
- Vite 5 dev server (SWC plugin) on port 8080 inside the container, mapped to host port 3000.
- React Router, TanStack Query, shadcn/ui, Tailwind, framer-motion, recharts, swiper.
- Package manager: npm (uses `package-lock.json`); a `bun.lock` also exists but npm is used in compose.

## Running
```
docker compose -f docker-compose.base44.yml up -d
```
The `web` service bind-mounts the repo, runs `npm install` then `vite dev` with live reload. Edits appear via HMR; no image rebuild needed for code changes.

## Verifying it works
- `curl -sf http://localhost:3000/` returns the HTML shell with Vite client injected.
- `curl -sf -H "Host: external-preview.example.com" http://localhost:3000/src/main.tsx` returns live (unhashed) source — confirms dev mode, not a prebuilt bundle.
- `docker compose -f docker-compose.base44.yml ps` shows the `web` service healthy.

## Notes
- `vite.config.ts` sets `server.host: true` and `allowedHosts: true` so the preview's external hostname is accepted.
- `CHOKIDAR_USEPOLLING=true` is set so file-watch fires under the bind mount.
