import React from 'react';
import {
  BarChart3,
  Briefcase,
  CalendarCheck2,
  Check,
  ChevronLeft,
  ChevronsUpDown,
  Heart,
  Inbox,
  LayoutGrid,
  MessageCircle,
  Newspaper,
  Pencil,
  Radar,
  Repeat2,
  Send,
  Settings2,
  Users,
  X as XIcon,
} from 'lucide-react';
import { Avatar } from './Bits';

/** Elvtera mark as a small inline SVG, for use inside mock UIs. */
export const LogoMark: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="#0546f2" />
    <path d="M9 8h4v7l6-7h5l-7 8 7 8h-5l-6-7v7H9z" fill="#fff" />
  </svg>
);

/* ────────────────────────── Window chrome (shared with AppDemo) ────────────────────────── */

export const Chrome: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex h-11 items-center gap-3 border-b border-line bg-paper px-4">
    <div className="flex gap-1.5" aria-hidden="true">
      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
      <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
      <span className="h-3 w-3 rounded-full bg-[#28c840]" />
    </div>
    <span className="text-[12.5px] text-slate">{title}</span>
  </div>
);

/* ────────────────────────── Floating hero widgets ────────────────────────── */

const W: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`rounded-[14px] bg-paper p-3.5 shadow-float ${className}`}>{children}</div>
);

export const WidgetSignals: React.FC = () => (
  <W className="w-[190px]">
    <div className="flex items-start justify-between">
      <div className="text-[11.5px] font-semibold leading-tight text-blue">
        New signals
        <br />
        this week
      </div>
      <div className="text-[18px] font-semibold leading-none text-blue">48</div>
    </div>
    <div className="mt-3 flex h-8 items-end gap-[3px]">
      {[30, 40, 35, 52, 48, 60, 58, 72, 70, 86].map((h, i) => (
        <span key={i} className="flex-1 rounded-full bg-blue" style={{ height: `${h}%`, opacity: 0.45 + i * 0.055 }} />
      ))}
    </div>
    <div className="mt-2 text-[10px] text-blue/70">matched to your ICP</div>
  </W>
);

export const WidgetReply: React.FC = () => (
  <W className="w-[210px]">
    <div className="flex items-center gap-2">
      <Avatar name="Megan Carter" size={24} />
      <div className="text-[11.5px] font-semibold">Megan replied</div>
      <span className="ml-auto text-[10px] text-ash">2m</span>
    </div>
    <div className="mt-2 rounded-lg rounded-tl-sm bg-canvas px-2.5 py-2 text-[11.5px] leading-snug text-ink/80">
      Timing is good. Thursday afternoon works.
    </div>
  </W>
);

export const WidgetBooked: React.FC = () => (
  <W className="w-[200px]">
    <div className="text-[11.5px] font-semibold">Booked for you</div>
    <div className="mt-2 flex items-center gap-2 rounded-lg bg-ok-tint p-2">
      <CalendarCheck2 className="h-4 w-4 text-ok" />
      <div className="text-[11px] leading-tight">
        <div className="font-semibold text-ink">Thu · 2:00 PM</div>
        <div className="text-slate">Ops Director · notes</div>
      </div>
    </div>
    <div className="mt-2 flex -space-x-1.5">
      {['Megan Carter', 'Daniel Reyes', 'Sarah Kim'].map((n) => (
        <Avatar key={n} name={n} size={20} />
      ))}
      <span className="pl-3 text-[10px] leading-5 text-slate">+ 2 this week</span>
    </div>
  </W>
);

export const WidgetICP: React.FC = () => (
  <W className="w-[200px]">
    <div className="text-[11.5px] font-semibold text-[#7a2e12]">Fits your ICP?</div>
    <div className="mt-2 space-y-1.5">
      {[
        ['Lone Star Freight', true],
        ['Northwind Labs', true],
        ['Maple Street Bakery', false],
      ].map(([n, ok]) => (
        <div key={n as string} className="flex items-center justify-between text-[11px]">
          <span className={ok ? 'text-ink' : 'text-ash line-through'}>{n as string}</span>
          {ok ? <Check className="h-3.5 w-3.5 text-ok" /> : <XIcon className="h-3.5 w-3.5 text-ash" />}
        </div>
      ))}
    </div>
  </W>
);

/* ────────────────────────── Signal source cards ────────────────────────── */

export const JobPost: React.FC = () => (
  <div className="w-[270px] rounded-xl bg-paper p-4 shadow-float">
    <div className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#0f2a4a] text-[13px] font-bold text-white">LS</span>
      <div>
        <div className="text-[13px] font-semibold">Dispatch Coordinator</div>
        <div className="text-[11.5px] text-slate">Lone Star Freight · Dallas, TX</div>
      </div>
    </div>
    <div className="mt-3 flex flex-wrap gap-1.5 text-[10.5px]">
      <span className="rounded-full bg-canvas px-2 py-0.5 text-slate">Full-time</span>
      <span className="rounded-full bg-canvas px-2 py-0.5 text-slate">3 openings</span>
      <span className="rounded-full bg-canvas px-2 py-0.5 text-slate">Posted 2d ago</span>
    </div>
    <p className="mt-3 text-[11.5px] leading-relaxed text-slate">
      …you'll handle <mark className="rounded bg-butter/80 px-0.5 text-ink">manual route planning</mark> for a growing fleet of 140 trucks…
    </p>
    <div className="mt-3 flex items-center gap-1.5 text-[10.5px] text-slate">
      <Briefcase className="h-3.5 w-3.5" /> Job board
    </div>
  </div>
);

export const SocialPost: React.FC = () => (
  <div className="w-[280px] rounded-xl bg-paper p-4 shadow-float">
    <div className="flex items-center gap-2.5">
      <Avatar name="Daniel Reyes" size={34} />
      <div>
        <div className="text-[13px] font-semibold">Daniel Reyes</div>
        <div className="text-[11px] text-slate">Head of Infrastructure, Apex Cloud · 1d</div>
      </div>
    </div>
    <p className="mt-3 text-[12.5px] leading-relaxed text-ink">
      Big week: we're finally moving off our legacy host. If you've done a migration like this,{' '}
      <span className="font-semibold">what do you wish you'd known?</span>
    </p>
    <div className="mt-3 flex items-center gap-4 border-t border-line pt-2.5 text-[11px] text-slate">
      <span className="flex items-center gap-1">
        <Heart className="h-3.5 w-3.5" /> 84
      </span>
      <span className="flex items-center gap-1">
        <MessageCircle className="h-3.5 w-3.5" /> 31
      </span>
      <span className="flex items-center gap-1">
        <Repeat2 className="h-3.5 w-3.5" /> 6
      </span>
    </div>
  </div>
);

export const NewsCard: React.FC = () => (
  <div className="w-[260px] rounded-xl bg-paper p-4 shadow-float">
    <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-slate">
      <Newspaper className="h-3.5 w-3.5" /> Funding news
    </div>
    <div className="mt-2 font-serif text-[18px] leading-snug">
      Northwind Labs raises <span className="italic">$14M Series A</span> to expand sales team
    </div>
    <div className="mt-3 flex items-center gap-2 text-[11px] text-slate">
      <Users className="h-3.5 w-3.5" /> Plans to double headcount this year
    </div>
  </div>
);

/* ────────────────────────── Process step mocks ────────────────────────── */

const Panel: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="overflow-hidden rounded-[18px] bg-paper shadow-app">
    <Chrome title={title} />
    <div className="p-5 sm:p-6">{children}</div>
  </div>
);

export const StepICP: React.FC = () => (
  <Panel title="Ideal customer profile">
    <div className="display text-[26px]">
      Who buys from you, <span className="accent">exactly.</span>
    </div>
    <div className="mt-5 grid grid-cols-2 gap-2.5 text-[12.5px]">
      {[
        ['Industry', 'Logistics, 3PL'],
        ['Company size', '50–500 staff'],
        ['Buyer', 'Ops Director, COO'],
        ['Deal size', '$5,000+'],
        ['Region', 'US, UK'],
        ['Must have', 'Own fleet'],
      ].map(([k, v]) => (
        <div key={k} className="rounded-xl bg-canvas p-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-ash">{k}</div>
          <div className="mt-1 font-medium">{v}</div>
        </div>
      ))}
    </div>
    <div className="mt-4 flex items-center gap-2 rounded-xl bg-ok-tint p-3 text-[12.5px] text-ok">
      <Check className="h-4 w-4" /> Signed off by you on day 4
    </div>
  </Panel>
);

export const StepSignals: React.FC = () => (
  <Panel title="Signals · filtered to your ICP">
    <div className="space-y-2">
      {[
        ['Hiring', 'Lone Star Freight', '3 dispatcher roles', true, 'bg-butter'],
        ['Funding', 'Northwind Labs', 'Series A, $14M', true, 'bg-mint'],
        ['New leader', 'Beacon Health', 'New COO appointed', true, 'bg-sky'],
        ['Social', 'Maple Street Bakery', 'Asked for vendor tips', false, 'bg-pink'],
        ['Tech change', 'Apex Cloud', 'Leaving legacy host', true, 'bg-lilac'],
      ].map(([tag, co, txt, ok, c]) => (
        <div key={co as string} className={`flex items-center gap-3 rounded-xl p-2.5 ${ok ? 'bg-canvas' : 'opacity-45'}`}>
          <span className={`w-[78px] shrink-0 rounded-md px-1.5 py-0.5 text-center font-mono text-[10px] ${c}`}>{tag as string}</span>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[13px] font-medium">{co as string}</div>
            <div className={`truncate text-[11.5px] text-slate ${ok ? '' : 'line-through'}`}>{txt as string}</div>
          </div>
          {ok ? <Check className="h-4 w-4 text-ok" /> : <XIcon className="h-4 w-4 text-ash" />}
        </div>
      ))}
    </div>
  </Panel>
);

export const StepCompose: React.FC = () => (
  <Panel title="New message · waiting for approval">
    <div className="space-y-2 border-b border-line pb-3 text-[12.5px]">
      <div className="flex gap-2">
        <span className="w-12 text-ash">To</span>
        <span className="flex items-center gap-1.5">
          <Avatar name="Megan Carter" size={18} /> Megan Carter, Ops Director
        </span>
      </div>
      <div className="flex gap-2">
        <span className="w-12 text-ash">Subject</span>
        <span>Your 3 dispatcher roles</span>
      </div>
    </div>
    <p className="mt-4 text-[13.5px] leading-relaxed text-ink/85">
      Hi Megan, saw you're hiring three dispatchers and the ad mentions{' '}
      <mark className="rounded bg-butter/80 px-0.5">manual route planning</mark>. We help fleets your size take most of
      that off the team. Worth a 20-minute look before the new hires start?
    </p>
    <div className="mt-5 flex items-center justify-between">
      <span className="font-hand text-[19px] text-blue">← written about her signal</span>
      <span className="btn-gloss-blue inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-medium text-white">
        <Send className="h-3.5 w-3.5" /> Approve
      </span>
    </div>
  </Panel>
);

export const StepQualify: React.FC = () => (
  <Panel title="Reply · qualification">
    <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-blue p-3.5 text-[13px] leading-relaxed text-white">
      Timing is good, we're drowning in it. Thursday afternoon works.
    </div>
    <div className="mt-5 space-y-2">
      {[
        ['Fits your ICP', '140 staff · logistics · US', true],
        ['Decision-maker', 'Owns the ops budget', true],
        ['Timeline', 'This quarter', true],
        ['Just curious?', 'No, active need', false],
      ].map(([k, v, ok]) => (
        <div key={k as string} className="flex items-center justify-between rounded-xl bg-canvas p-3 text-[12.5px]">
          <span className="flex items-center gap-2 font-medium">
            {ok ? <Check className="h-4 w-4 text-ok" /> : <XIcon className="h-4 w-4 text-ok" />}
            {k as string}
          </span>
          <span className="text-slate">{v as string}</span>
        </div>
      ))}
    </div>
  </Panel>
);

export const StepCalendar: React.FC = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const booked: Record<string, [number, string, string]> = {
    Tue: [1, 'Daniel R.', 'Apex Cloud'],
    Thu: [2, 'Megan C.', 'Lone Star Freight'],
    Wed: [3, 'Sarah K.', 'Beacon Health'],
  };
  return (
    <Panel title="Your calendar · this week">
      <div className="grid grid-cols-5 gap-2">
        {days.map((d) => (
          <div key={d}>
            <div className="text-center font-mono text-[10px] uppercase text-ash">{d}</div>
            <div className="mt-2 space-y-1.5">
              {[0, 1, 2, 3].map((slot) => {
                const b = booked[d];
                const hit = b && b[0] === slot;
                return (
                  <div
                    key={slot}
                    className={`h-12 rounded-lg p-1.5 text-[10px] leading-tight ${
                      hit ? 'bg-blue text-white shadow-[0_6px_14px_-6px_rgb(5_70_242/0.7)]' : 'bg-canvas'
                    }`}
                  >
                    {hit && (
                      <>
                        <div className="font-semibold">{b[1]}</div>
                        <div className="opacity-75">{b[2]}</div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-xl bg-ok-tint p-3 text-[12.5px] text-ok">
        <CalendarCheck2 className="h-4 w-4" /> Each call comes with a briefing note
      </div>
    </Panel>
  );
};
