# WonderSprout 🌱 — *Little minds. Big wonders.*

**A DINVICTA EDU product.** A parent-guided learning ecosystem for ages 0–36 months,
built from the Project Wonder blueprint: See · Hear · Touch · Explore · Wonder.

Zero build step, zero dependencies — plain HTML/CSS/JS with Web Audio and SVG.
Optional Supabase backend (auth + private cloud sync) with full offline demo mode.

## The ecosystem

| Sub-brand | Route | What it is |
|---|---|---|
| WonderSprout | `#/` | Platform home, curriculum map, roadmap |
| World | `#/world` | 13 playable child labs (colour, math, physics, sound, life, weather, space, float/sink, shapes, patterns, sorting, animals, shadows) |
| Parent | `#/parent` | Today's Wonder, observations, journal, weekly report, account sync |
| Labs | `#/labs` | 14 worlds + 18 simulation templates + simulation-first showcase |
| Stories | `#/stories` | 7 interactive branching stories with read-aloud |
| Music | `#/music` | 9 public-domain sing-alongs + free play + rhythm game |
| Studio | `#/studio` | 6 creative activities (draw, colour-in, trace, shapes, scenes, surprise) |
| Camera | `#/camera` | Wonder Card object-discovery demo (11 objects) |
| AI | `#/ai` | Parent copilot, 13 intents, strict guardrails |
| Kits | `#/kits` | 12 future physical products wired to the curriculum |

## Run locally

```bash
python3 -m http.server 8000 --bind 0.0.0.0
# open http://localhost:8000
```

## Go live — checklist

### 1. Database (2 minutes)
1. Open your Supabase project → **SQL Editor** → **New query**.
2. Paste the contents of [`supabase/schema.sql`](supabase/schema.sql) → **Run**.
   This creates `children`, `observations`, `journal`, `activity_log` with
   Row Level Security so parents can only ever read/write their own rows.
3. For instant testing: **Auth → Sign In / Providers → Email** → turn **off**
   “Confirm email” (or use a real inbox to confirm).

### 2. Connect the app (30 seconds)
1. Supabase Dashboard → **Project Settings → API** → copy the **anon public** key.
   ⚠️ The key pasted into chat earlier arrived corrupted — copy a fresh one.
   The anon key is safe in client code **because RLS is on**. Never commit the
   `service_role` key anywhere.
2. Paste it into `SUPABASE_ANON_KEY` in [`js/config.js`](js/config.js).
3. Parent Dashboard → **WonderSprout Account** → create an account → sign in.
   The header chip flips from “📴 Demo mode” to “☁️ Synced to Supabase”.

### 3. Publish (2 minutes)
The code lives on GitHub at `invictadigitals25-ui/WonderSprout-` (branch `main`).
GitHub Pages serves the repo root directly — no build step, no Actions needed:

GitHub → repo **Settings → Pages** → *Build and deployment* →
**Source: “Deploy from a branch”** → Branch: `main`, Folder: `/ (root)` → **Save**.

~1 minute later the site is live at `https://invictadigitals25-ui.github.io/WonderSprout-/`.
Every later push to `main` redeploys automatically (`git push -u origin main`).
An Actions-based alternative (`deploy.yml`) is kept in local git history.

Alternative one-click hosts: drag this folder into **Netlify Drop** or import the
repo in **Vercel** — no build command needed.

## Privacy promises (baked in)

- No ads, no child rankings, no diagnosis — ever
- RLS: every row is owned by a parent account; no public child profiles
- The Wonder Camera demo never captures or uploads anything
- Screen time is a doorway, not the metric — every activity ends with a
  “Try it in real life” step

## Development

- Content lives in `js/data.js` (stories, songs, curriculum, kits, AI knowledge)
- Add a child lab: write a builder in `js/world.js`, register it in `LABS` + `LAB_BUILDERS`
- Verification: `node --check js/*.js` + the jsdom smoke suite (86 checks:
  routes, branching, labs, studio modes, sync-free demo path)

© DINVICTA EDU
