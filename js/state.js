/* ============================================================
   WonderSprout — Shared demo state (in-memory)
   In production this is a private Supabase/Postgres child profile.
   ============================================================ */

window.WSState = {
  stars: 0,
  ageBand: "12-24",
  child: { name: "Layla", months: 14, emoji: "👧" },
  microDone: {},
  observations: {},
  journal: (typeof WSData !== "undefined" ? WSData.JOURNAL_SEEDS : []).slice(),
  weekMinutes: [9, 12, 6, 14, 11, 4, 0], /* Mon … Sun */
  counters: { activities: 6, stories: 2, songs: 4, realworld: 3 },
};
