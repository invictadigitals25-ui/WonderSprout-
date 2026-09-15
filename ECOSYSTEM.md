# WonderSprout — Ecosystem Build Map

**WonderSprout — Little minds. Big wonders.** · *See. Hear. Touch. Explore. Wonder.*

A working interactive prototype of the full ecosystem described in
`Project Wonder — Birth-to-3 Interactive Learning Platform Blueprint V1.0`.
Zero dependencies: vanilla JS + SVG + Web Audio, so every lab, song and story runs in any browser.

## Sub-brand → implementation map

| Sub-brand | Route | File | What's inside |
|---|---|---|---|
| **WonderSprout** (platform) | `#/` | `js/home.js` | Hero + brand lines, ecosystem grid, learning loop, 4 experience levels, signature experiences, curriculum sample table (blueprint §14), roadmap (§13), safety promise (§16) |
| **WonderSprout World** (child) | `#/world` | `js/world.js` | Child shell (huge targets, no text-heavy UI, gentle sound) + 8 playable labs |
| **WonderSprout Parent** | `#/parent` | `js/parent.js` | Today's Wonder w/ 6 micro-experiences, weekly report chart, 8-step developmental track, observations (not yet / sometimes / consistently), Wonder Journal, recommendations, "go outside" card |
| **WonderSprout Labs** | `#/labs` | `js/labs.js` | 14 learning worlds (§3), 18 simulation templates (§5), one-ball-every-age simulation-first showcase, curriculum hierarchy, monthly themes |
| **WonderSprout Stories** | `#/stories` | `js/stories.js` | Branching story engine + 2 illustrated stories ("Pip and the Little Seed", "Bloop's Big Bath"), read-aloud via speech synthesis, moral + real-world extension on every ending |
| **WonderSprout Music** | `#/music` | `js/music.js` | 4 public-domain songs with karaoke word highlighting + beat pulse, tempo control, pentatonic Free Play pad, Clap-the-Beat rhythm game |
| **WonderSprout Studio** | `#/studio` | `js/studio.js` | Draw/paint canvas: palette, brush sizes, eraser, 4 backgrounds, undo, 12 sticker stamps, PNG export |
| **WonderSprout Camera** | `#/camera` | `js/camera.js` | Demo viewfinder: tap an object → shutter/scan → Wonder Card (identification, connected worlds, 3 activities, real-world challenge, lab deep-link). Production flow = on-device recognition, nothing stored |
| **WonderSprout AI** | `#/ai` | `js/ai.js` | Parent copilot chat: intent-matched answers with learning value explained; guardrails active (no diagnosis, no ranking, refers concerns to professionals) |
| **WonderSprout Kits** | `#/kits` | `js/kits.js` | 7 future physical products (§15) each wired to the digital curriculum, waitlist |

## The 8 playable child labs (`#/world/:id`)

| Lab | Simulation template (blueprint §5) | Interaction |
|---|---|---|
| Colour Lab | Colour Mixing + matching | Find-the-colour balloon game (5 rounds), primary colour mixing |
| Math Lab | Counting + more/less | One-to-one apple counting, more/fewer cookie plates |
| Physics Playground | Falling/Rolling Object | Gravity + bounce canvas, height & size variables, "What if… both?" prediction prompt |
| Sound Lab | Sound | Xylophone, drum, shaker, loud/quiet slider, listen-and-repeat pattern |
| Life Lab | Growing Plant | Water + sunshine → 5 growth stages, celebration at flower |
| Earth & Weather | Day/Night + Weather | Day→dusk→night slider with stars, rain and wind modes |
| Space World | Shape Rotation / orbits | Earth–Moon orbit canvas, speed control, tappable Moon facts |
| Float & Sink | Float/Sink | Drop objects, prediction mode (Sink or Float?) for 24–36m |

Every lab has: age-band chips (6–12m / 12–24m / 24–36m) that change difficulty, a **parent note**, and a **"Try it in real life"** card (Digital-to-Physical Bridge, §7).

## Blueprint fidelity checklist

- ✅ Core loop EXPERIENCE→EXPLORE→DISCOVER→CONNECT→EXPRESS→CREATE (home page)
- ✅ 12 developmental stages + LOOK→…→WONDER+CREATE progression (data + parent dashboard)
- ✅ ACTION→RESULT as the fundamental interaction; prediction modes at 24–36m
- ✅ Wonder of the Day with Look/Explore/Talk/Move/Real World/Story micros (§8)
- ✅ Parent observations without diagnosis; referral-to-professional language (§9, §16)
- ✅ "Close the app and go outside" guiding principle (dashboard green card + footer)
- ✅ AI guardrails + content pipeline described on the AI page (§9)
- ✅ Curriculum hierarchy DOMAIN→…→EXPOSURE/MASTERY (§10, labs page)
- ✅ Simulation-first architecture: one ball, six ages (§5, labs page)
- ✅ Screen philosophy: 30-second to 3-minute micro-experiences (§8)

## Production path (from blueprint §11)

This prototype is the Phase 6–8 surface layer. For production: Next.js + Tailwind front end,
Supabase (Postgres + Auth + Storage) with RLS and private child profiles, an LLM API behind the
safety pipeline (AI generation → automated checks → human review → publish), Lottie/SVG animation
assets, and the Wonder Camera moving to on-device object recognition.

## Run it

```
cd wondersprout && python3 -m http.server 8000 --bind 0.0.0.0
# open http://localhost:8000
```
