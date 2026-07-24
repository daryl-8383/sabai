# SABAI — Build Spec for Claude Code

Build a single-page marketing/sales site for **SABAI**, a Thai ya dom herbal inhaler sold as a nicotine-free alternative to vaping/smoking. A finished HTML prototype (`sabai.html`) may be in this repo — if it exists, use it as the source of truth for copy and design, and port it into the stack below. If not, build from this spec.

## Positioning (important — legal guardrail)
- NEVER market it as a smoking-cessation product, NRT, or anything that treats/cures addiction (FDA drug-claim territory).
- The angle: **"Break the habit. Keep the ritual."** Same hand-to-mouth inhale reflex, zero nicotine, zero vapor, zero smoke.
- Footer must include: "SABAI is a traditional herbal inhaler and general wellness product. It contains no nicotine and is not a smoking-cessation product or nicotine-replacement therapy. These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. If you want help quitting nicotine, talk to your doctor or call 1-800-QUIT-NOW."

## Stack
- Vite + vanilla HTML/CSS/JS (no framework needed — this is a static one-pager)
- Deployable to Vercel (`vercel.json` not required; default static build)
- SEO basics: title, meta description, OG tags, favicon
- Lighthouse targets: 95+ performance/accessibility/SEO

## Design tokens
```css
--leaf:      #0E3B2E;  /* deep betel-leaf green — hero/ingredients bg */
--leaf-soft: #1A5443;
--mint:      #F1F7F1;  /* page background — herbal mint tint, NOT cream */
--mint-deep: #DFECE0;  /* borders */
--gold:      #E8A020;  /* Thai marigold — CTAs + accents */
--ink:       #122019;
--muted:     #5C6E63;
```
- Display: **Fraunces** (Google Fonts, weight 400–600, used sparingly for headlines)
- Body: **Instrument Sans**
- Utility/labels: **IBM Plex Mono** (uppercase, letter-spaced — apothecary-label vibe)
- Pill-shaped buttons, 20px card radius, generous whitespace

## Signature element
Hero features an SVG inhaler tube (gold cap, cream body, dark green "SABAI / YA DOM" label, gold scent lines) with a **breathing animation**: two radial gold halos scaling on an 8s inhale/exhale ease-in-out loop, the tube gently floating, and a mono label below that swaps between "INHALE" / "EXHALE" via CSS `content` keyframes. Respect `prefers-reduced-motion` (freeze animation, label reads "BREATHE").

## Page sections (in order)
1. **Sticky nav** — logo "SABAI." (gold period), anchor links, green pill CTA "Buy — $18"
2. **Hero** (leaf-green bg) — eyebrow "Thai herbal inhaler · ยาดม", H1 "Break the habit. Keep the *ritual*." (italic gold "ritual"), lede about menthol/camphor pocket inhaler, gold CTA, badge pills: "0mg nicotine / Nothing burned / TSA friendly / Lasts ~3 months", signature inhaler animation on the right
3. **What is ya dom** — heritage explainer (100+ years in Thailand, carried daily by millions), stats row (100+ yrs / 0mg / ~1,000 inhales per tube), plus a mono-type "FIELD NOTE — BANGKOK" card explaining the crave→inhale→reset loop
4. **Why swap** (white bg) — 3-column comparison: Cigarettes (✕ nicotine+combustion, smell, banned, ~$15/pack NYC), Vapes (✕ nicotine, batteries/charging, clouds, $20–30/wk), SABAI highlighted in green (✓ zero nicotine/smoke, herbal menthol hit, use anywhere, $6/tube lasts months)
5. **How it works** — 3 step cards: CRAVE / INHALE / RESET (cravings crest and fall in ~3 minutes; the ritual carries you over the wave)
6. **Ingredients** (leaf-green bg) — 5 cards: Menthol, Camphor, Borneol, Eucalyptus oil, Peppermint oil, each with one sensory sentence. "Five herbs. Nothing else."
7. **FAQ** — native `<details>` accordions: any nicotine? (zero), will it make me quit? (honest: not a cessation drug, it replaces the ritual), plane/work use? (yes, no vapor, TSA treats it like lip balm), tube lifespan (2–3 months), safety (don't ingest, keep from kids/pets, consult doctor if pregnant/respiratory condition)
8. **Buy** — gradient green card: "SABAI 3-pack", $18 ($6/tube vs $15 cigarette pack in Manhattan), bullets (3 tubes, pocket/desk/bag, ~3,000 inhales, free US shipping), gold button "Checkout with Stripe →" linking to a `STRIPE_PAYMENT_LINK` constant at the top of the JS/HTML with a TODO comment, "Ships in 2–4 days from NYC"
9. **Footer** — logo, "Made with herbs in Thailand · Shipped from NYC", the FDA disclaimer above

## Quality floor
- Fully responsive to 375px (nav links collapse to logo + CTA on mobile)
- Visible `:focus-visible` states (gold outline)
- Semantic HTML, alt/aria where needed
- No layout shift from font loading (font-display: swap)

## Nice-to-haves (only if quick)
- Scroll-triggered fade-up reveals (IntersectionObserver, disabled under reduced motion)
- Plausible or simple analytics snippet placeholder
