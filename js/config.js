/* ============================================================
   WonderSprout — Deployment Config
   DINVICTA EDU · Supabase project: vngaumnvmjovkwczepej
   ============================================================ */

window.WSConfig = {
  SUPABASE_URL: "https://vngaumnvmjovkwczepej.supabase.co",

  /* Anon public key — verified against the project on 2026-09-12.
     Safe in client code because Row Level Security is enabled on every
     table (see supabase/schema.sql). Never commit the service_role key. */
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuZ2F1bW52bWpvdmt3Y3plcGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyMzU0MjAsImV4cCI6MjEwNDgxMTQyMH0.Eg88-ecTChtD2ZeiedRfia1yU_MIZGcCB4DhTYwKdIw",

  /* supabase-js is loaded on demand from CDN the first time a parent
     signs in — the app itself never blocks on the network. */
  SUPABASE_JS_CDN: "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2",

  APP_NAME: "WonderSprout",
  COMPANY: "DINVICTA EDU",
};
