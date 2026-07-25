# SABAI — one-page site

Static one-pager for SABAI, a Thai ya dom herbal inhaler. Vite + vanilla HTML/CSS/JS.

**Live (production):** https://sabai-site-nu.vercel.app/
**Mirror (GitHub Pages):** https://daryl-8383.github.io/sabai/

## Before taking orders

1. Create a Stripe Payment Link for the $18 3-pack.
2. Replace `STRIPE_PAYMENT_LINK` at the top of `src/main.js`.
3. Rebuild and redeploy (see below).

## Develop

```bash
pnpm install
pnpm dev
```

## Deploy

Currently on GitHub Pages (gh-pages branch = built `dist/`):

```bash
pnpm build
git worktree add /tmp/sabai-pages gh-pages
rm -rf /tmp/sabai-pages/* && cp -R dist/* /tmp/sabai-pages/
cd /tmp/sabai-pages && git add -A && git commit -m "deploy" && git push
```

Vercel is connected (project `sabai-site`): `vercel deploy --prod --yes` from this
directory. For a custom domain, add it in the Vercel dashboard and update the
`og:url` / `og:image` / canonical URLs in `index.html`.

## Legal guardrail

Never market as smoking cessation / NRT. The footer FDA disclaimer must stay.
