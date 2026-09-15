-- ============================================================
-- WonderSprout — Supabase Schema V1  (DINVICTA EDU)
-- Run once in: Supabase Dashboard → SQL Editor → New query → paste → Run
-- Privacy-first: every row belongs to a parent account; RLS on everything.
-- ============================================================

-- ---------- Children ----------
create table if not exists public.children (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users (id) on delete cascade,
  name       text not null default 'Little Wonder',
  months     int  not null default 12 check (months >= 0 and months <= 48),
  emoji      text not null default '🧒',
  stars      int  not null default 0,
  age_band   text not null default '12-24',
  updated_at timestamptz not null default now(),
  unique (user_id)  -- one child profile per parent account in V1
);

-- ---------- Parent observations (never a diagnosis, never a ranking) ----------
create table if not exists public.observations (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users (id) on delete cascade,
  child_id   uuid not null references public.children (id) on delete cascade,
  skill_id   text not null,
  value      text not null check (value in ('notyet', 'sometimes', 'consistently')),
  updated_at timestamptz not null default now(),
  unique (child_id, skill_id)
);

-- ---------- Wonder Journal ----------
create table if not exists public.journal (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users (id) on delete cascade,
  child_id   uuid not null references public.children (id) on delete cascade,
  emoji      text not null default '🌟',
  title      text not null,
  body       text not null default '',
  created_at timestamptz not null default now()
);

-- ---------- Activity log (micro-experiences, sessions — for weekly reports) ----------
create table if not exists public.activity_log (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users (id) on delete cascade,
  child_id   uuid references public.children (id) on delete cascade,
  kind       text not null,          -- 'micro' | 'story' | 'song' | 'realworld' | 'lab'
  meta       jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- ---------- Indexes ----------
create index if not exists obs_child_idx    on public.observations (child_id);
create index if not exists journal_child_idx on public.journal (child_id, created_at desc);
create index if not exists activity_user_idx on public.activity_log (user_id, created_at desc);

-- ---------- Row Level Security: parents see ONLY their own data ----------
alter table public.children      enable row level security;
alter table public.observations  enable row level security;
alter table public.journal       enable row level security;
alter table public.activity_log  enable row level security;

do $$
declare t text;
begin
  foreach t in array array['children', 'observations', 'journal', 'activity_log'] loop
    execute format('drop policy if exists "owner_all" on public.%I', t);
    execute format(
      'create policy "owner_all" on public.%I for all using (auth.uid() = user_id) with check (auth.uid() = user_id)', t
    );
  end loop;
end $$;

-- ---------- updated_at trigger ----------
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists children_touch on public.children;
create trigger children_touch before update on public.children
  for each row execute function public.touch_updated_at();

-- Done ✅  Next: Auth → Sign In / Providers → Email is already enabled by default.
-- For instant testing (no confirmation email): Auth → Providers → Email →
-- turn OFF "Confirm email" while you test, or use a real inbox.
