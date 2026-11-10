import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BarChart3,
  CalendarCheck2,
  Check,
  ChevronLeft,
  ChevronsUpDown,
  Inbox,
  LayoutGrid,
  Pencil,
  Radar,
  Send,
  Settings2,
  X as XIcon,
} from 'lucide-react';
import { Avatar } from './Bits';
import { Chrome, LogoMark } from './Mocks';
import { sampleThreads } from '../../data/homeData';

/* ═══════════════════════════ Sample data ═══════════════════════════ */

type Tag = 'Hiring' | 'Funding' | 'New leader' | 'Tech change' | 'Expansion' | 'Social';
type Region = 'US' | 'UK';

interface Signal {
  id: string;
  tag: Tag;
  company: string;
  city: string;
  region: Region;
  size: number;
  industry: string;
  text: string;
  person: string;
  role: string;
}

/** Illustrative signals. Not real companies or people. */
const SIGNALS: Signal[] = [
  { id: 's1', tag: 'Hiring', company: 'Lone Star Freight', city: 'Dallas, TX', region: 'US', size: 140, industry: 'Logistics', text: 'Posted 3 dispatcher roles', person: 'Megan Carter', role: 'Ops Director' },
  { id: 's2', tag: 'Tech change', company: 'Apex Cloud', city: 'Denver, CO', region: 'US', size: 220, industry: 'SaaS', text: 'Moving off their legacy host', person: 'Daniel Reyes', role: 'Head of Infrastructure' },
  { id: 's3', tag: 'New leader', company: 'Beacon Health', city: 'Columbus, OH', region: 'US', size: 60, industry: 'Healthcare', text: 'Appointed a new COO', person: 'Sarah Kim', role: 'Managing Partner' },
  { id: 's4', tag: 'Funding', company: 'Northwind Labs', city: 'Austin, TX', region: 'US', size: 90, industry: 'SaaS', text: 'Raised a $14M Series A', person: 'Jason Miller', role: 'VP Sales' },
  { id: 's5', tag: 'Expansion', company: 'Harbor Point Logistics', city: 'Savannah, GA', region: 'US', size: 310, industry: 'Logistics', text: 'Opened a second warehouse', person: 'Emily Turner', role: 'COO' },
  { id: 's6', tag: 'Social', company: 'Maple Street Bakery', city: 'Portland, OR', region: 'US', size: 8, industry: 'Food & retail', text: 'Asked for vendor tips', person: 'Chris Walker', role: 'Owner' },
  { id: 's7', tag: 'Hiring', company: 'Summit IT Partners', city: 'Charlotte, NC', region: 'US', size: 75, industry: 'IT services', text: 'Hiring a Head of Security', person: 'Ryan Brooks', role: 'CEO' },
  { id: 's8', tag: 'Funding', company: 'Bright Path Clinics', city: 'Phoenix, AZ', region: 'US', size: 180, industry: 'Healthcare', text: 'Raised an $8M growth round', person: 'Laura Bennett', role: 'CFO' },
  { id: 's9', tag: 'Tech change', company: 'Granite Manufacturing', city: 'Milwaukee, WI', region: 'US', size: 650, industry: 'Manufacturing', text: 'Replacing their ERP', person: 'Mark Davis', role: 'VP Operations' },
  { id: 's10', tag: 'New leader', company: 'Cobalt Staffing', city: 'Atlanta, GA', region: 'US', size: 45, industry: 'Recruitment', text: 'Hired a new VP of Sales', person: 'Ashley Moore', role: 'VP Sales' },
  { id: 's11', tag: 'Expansion', company: 'Redwood Analytics', city: 'San Jose, CA', region: 'US', size: 130, industry: 'SaaS', text: 'Opening a London office', person: 'Kevin Nguyen', role: 'CRO' },
  { id: 's12', tag: 'Social', company: 'Thames Ledger', city: 'London', region: 'UK', size: 85, industry: 'IT services', text: 'Posted: "our onboarding is a mess"', person: 'Oliver Grant', role: 'Head of Ops' },
];

const TAG_STYLE: Record<Tag, { bg: string; dot: string; letter: string }> = {
  Hiring: { bg: 'bg-butter', dot: '#e0a91b', letter: 'H' },
  Funding: { bg: 'bg-mint', dot: '#24a865', letter: 'F' },
  'New leader': { bg: 'bg-sky', dot: '#3b82f6', letter: 'L' },
  'Tech change': { bg: 'bg-lilac', dot: '#8b5cf6', letter: 'T' },
  Expansion: { bg: 'bg-peach', dot: '#ea7a3d', letter: 'E' },
  Social: { bg: 'bg-pink', dot: '#db2777', letter: 'S' },
};
const TAGS = Object.keys(TAG_STYLE) as Tag[];
const INDUSTRIES = ['Logistics', 'SaaS', 'Healthcare', 'IT services', 'Manufacturing', 'Recruitment', 'Food & retail'];

interface ICP {
  industries: string[];
  min: number;
  max: number;
  regions: Region[];
}
const DEFAULT_ICP: ICP = { industries: ['Logistics', 'SaaS', 'Healthcare', 'IT services'], min: 50, max: 500, regions: ['US', 'UK'] };

const fits = (s: Signal, icp: ICP) =>
  icp.industries.includes(s.industry) && s.size >= icp.min && s.size <= icp.max && icp.regions.includes(s.region);

/** Why a signal was filtered out, in plain words. */
const whyNot = (s: Signal, icp: ICP) => {
  if (!icp.regions.includes(s.region)) return 'Outside your regions';
  if (!icp.industries.includes(s.industry)) return `${s.industry} isn't in your ICP`;
  if (s.size < icp.min) return `Too small (${s.size} staff)`;
  if (s.size > icp.max) return `Too big (${s.size} staff)`;
  return '';
};

const draft = (s: Signal) =>
  `Hi ${s.person.split(' ')[0]}, saw ${s.company} ${s.text.charAt(0).toLowerCase()}${s.text.slice(1)}. That's usually when teams like yours start looking for help with this. Worth a 20-minute look this week?`;

type View = 'pipeline' | 'signals' | 'inbox' | 'calendar' | 'reports' | 'targeting';

/* ═══════════════════════════ Small parts ═══════════════════════════ */

const Pill: React.FC<{ children: React.ReactNode; dark?: boolean }> = ({ children, dark }) => (
  <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${dark ? 'bg-white/15 text-white' : 'bg-paper text-ok ring-1 ring-line'}`}>
    <Check className="h-3 w-3" /> {children}
  </span>
);

const TagChip: React.FC<{ tag: Tag }> = ({ tag }) => (
  <span className={`inline-block w-[82px] shrink-0 rounded-md px-1.5 py-0.5 text-center font-mono text-[10px] text-ink ${TAG_STYLE[tag].bg}`}>{tag}</span>
);

const NavBtn: React.FC<{ icon: React.ReactNode; label: string; active: boolean; count?: number; onClick: () => void }> = ({
  icon,
  label,
  active,
  count,
  onClick,
}) => (
  <button
    type="button"
    onClick={onClick}
    title={label}
    aria-current={active ? 'page' : undefined}
    className={`flex w-full items-center justify-center gap-2.5 rounded-lg px-2 py-[7px] text-left text-[13px] transition-colors @min-[1000px]:justify-start @min-[1000px]:px-2.5 ${
      active ? 'bg-hover font-medium text-ink' : 'text-slate hover:bg-hover/60 hover:text-ink'
    }`}
  >
    <span className="text-ink/60">{icon}</span>
    <span className="hidden flex-1 @min-[1000px]:inline">{label}</span>
    {count !== undefined && <span className="hidden font-mono text-[10.5px] text-ash @min-[1000px]:inline">{count}</span>}
  </button>
);

/* ═══════════════════════════ Views ═══════════════════════════ */

interface Ctx {
  icp: ICP;
  setICP: (i: ICP) => void;
  sent: Set<string>;
  approve: (s: Signal) => void;
  go: (v: View, tag?: Tag | null) => void;
  tag: Tag | null;
  setTag: (t: Tag | null) => void;
  spotted: number;
}

const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = 'bg-canvas', children }) => (
  <div className={`min-w-0 rounded-2xl p-4 @min-[560px]:p-5 ${className}`}>{children}</div>
);

/* ---------- Pipeline (overview) ---------- */

const PipelineView: React.FC<{ c: Ctx }> = ({ c }) => {
  const fitList = SIGNALS.filter((s) => fits(s, c.icp));
  const queue = fitList.filter((s) => !c.sent.has(s.id));
  const bars = [30, 34, 38, 42, 46, 40, 36, 50, 56, 62, 68, 72, 78, 86];

  return (
    <div className="grid gap-3 @min-[560px]:grid-cols-2 @min-[1080px]:grid-cols-[1.15fr_1fr_1fr]">
      {/* Signals */}
      <Card className="flex flex-col bg-blue-tint">
        <div className="flex items-start justify-between gap-3">
          <div>
            <button type="button" onClick={() => c.go('signals', null)} className="text-left text-[14.5px] font-semibold leading-snug text-blue hover:underline">
              Signals spotted
            </button>
            <div className="mt-2">
              <Pill>Live</Pill>
            </div>
          </div>
          <div className="text-right">
            <motion.div key={c.spotted} initial={{ y: -6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-[28px] font-semibold leading-none tracking-[-0.03em] text-blue">
              {c.spotted}
            </motion.div>
            <div className="mt-1.5 text-[11px] text-blue/80">
              <b className="font-semibold">{fitList.length}</b> of the latest {SIGNALS.length} fit
            </div>
          </div>
        </div>
        <div className="mt-5 flex h-16 items-end gap-[5px]">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.03, duration: 0.5 }}
              className={`flex-1 rounded-full ${i > 10 ? 'bg-blue' : 'bg-blue/70'}`}
            />
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-x-1.5 border-t border-blue/15 pt-3 text-[11.5px] text-blue/80">
          {(['Hiring', 'Funding', 'New leader', 'Tech change'] as Tag[]).map((t, i) => (
            <button key={t} type="button" onClick={() => c.go('signals', t)} className="hover:text-blue hover:underline">
              {t}
              {i < 3 ? ' ·' : ''}
            </button>
          ))}
        </div>
      </Card>

      {/* Approvals */}
      <Card>
        <div className="flex items-center justify-between">
          <div className="text-[14.5px] font-semibold">Waiting for your OK</div>
          <span className="rounded-full bg-paper px-2 py-0.5 font-mono text-[10.5px] text-slate ring-1 ring-line">{queue.length}</span>
        </div>
        <div className="mt-2">
          <Pill>You approve every message</Pill>
        </div>
        <div className="mt-4 space-y-2">
          <AnimatePresence initial={false}>
            {queue.slice(0, 2).map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 30 }}
                className="flex items-center gap-2.5 rounded-xl bg-paper p-2.5 shadow-card"
              >
                <Avatar name={p.person} size={30} />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[12.5px] font-medium">{p.person}</div>
                  <div className="truncate text-[11px] text-slate">
                    {p.role} · {p.tag}
                  </div>
                </div>
                <button type="button" onClick={() => c.approve(p)} className="btn-gloss-blue rounded-lg px-2.5 py-1 text-[11px] font-medium text-white">
                  Approve
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
          {queue.length === 0 && (
            <div className="rounded-xl bg-ok-tint p-3 text-center text-[12px] text-ok">All caught up. Nice.</div>
          )}
          {queue.length > 2 && (
            <button type="button" onClick={() => c.go('inbox')} className="w-full pt-1 text-center text-[11.5px] font-medium text-blue hover:underline">
              + {queue.length - 2} more in Inbox
            </button>
          )}
        </div>
      </Card>

      {/* ICP */}
      <Card className="bg-[#fbeee6]">
        <div className="flex items-center justify-between">
          <div className="text-[14.5px] font-semibold text-[#7a2e12]">Does it fit?</div>
          <button type="button" onClick={() => c.go('targeting')} className="text-[11px] font-medium text-[#a2512b] hover:underline">
            Edit
          </button>
        </div>
        <div className="mt-2">
          <Pill>Filtered</Pill>
        </div>
        <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-[#a2512b]">Your ideal customer</div>
        <div className="mt-2 space-y-1.5 rounded-xl bg-paper p-3 shadow-card">
          {[
            ['Company size', `${c.icp.min}–${c.icp.max}`],
            ['Industries', `${c.icp.industries.length} picked`],
            ['Region', c.icp.regions.join(' · ') || 'None'],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between text-[12px]">
              <span className="flex items-center gap-1.5 text-ink">
                <Check className="h-3.5 w-3.5 text-ok" />
                {k}
              </span>
              <span className="font-medium text-slate">{v}</span>
            </div>
          ))}
        </div>
        {SIGNALS.filter((s) => !fits(s, c.icp))
          .slice(0, 1)
          .map((s) => (
            <div key={s.id} className="mt-2.5 flex items-center gap-2 px-1 text-[11.5px] text-[#a2512b]/80">
              <XIcon className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">
                <span className="line-through">{s.company}</span> · {whyNot(s, c.icp)}
              </span>
            </div>
          ))}
      </Card>

      {/* Replies */}
      <Card>
        <div className="text-[14.5px] font-semibold">Who replies?</div>
        <div className="mt-2">
          <Pill>Qualified by our team</Pill>
        </div>
        <svg viewBox="0 0 260 90" className="mt-3 h-[92px] w-full" aria-hidden="true">
          <path d="M0 80 C 60 78, 110 62, 160 44 S 230 12, 260 6 L260 90 L0 90Z" fill="rgb(14 17 22 / 0.05)" />
          <motion.path
            d="M0 80 C 60 78, 110 62, 160 44 S 230 12, 260 6"
            fill="none"
            stroke="#0e1116"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2 }}
          />
          <path d="M0 82 C 20 60, 28 40, 36 64 S 70 84, 260 84" fill="none" stroke="#9096a3" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-[20px] font-semibold tracking-[-0.02em]">Right people</div>
            <div className="text-[11.5px] text-slate">↑ because they were already looking</div>
          </div>
          <div className="space-y-1 whitespace-nowrap text-[10.5px] text-slate">
            <div className="flex items-center gap-1.5">
              <span className="h-0.5 w-4 bg-ink" /> Signal-based
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-4 border-t border-dashed border-ash" /> Cold list
            </div>
          </div>
        </div>
      </Card>

      {/* Booked */}
      <button
        type="button"
        onClick={() => c.go('calendar')}
        className="relative min-w-0 overflow-hidden rounded-2xl bg-[radial-gradient(120%_120%_at_100%_0%,#7c5cff_0%,#2a3cf0_45%,#11195e_100%)] p-4 text-left text-white shadow-[0_20px_40px_-18px_rgb(42_60_240/0.7)] transition-transform hover:-translate-y-0.5 @min-[560px]:col-span-2 @min-[560px]:p-5"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[14.5px] font-semibold leading-snug">Qualified calls on your calendar</div>
            <div className="mt-2">
              <Pill dark>Booked with notes</Pill>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[28px] font-semibold leading-none tracking-[-0.03em]">25+</div>
            <div className="mt-1.5 text-[11px] text-white/70">
              <b className="font-semibold text-white">Target</b> · per month
            </div>
          </div>
        </div>
        <svg viewBox="0 0 400 110" className="mt-3 h-[110px] w-full" aria-hidden="true">
          <defs>
            <linearGradient id="bk2" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#fff" stopOpacity="0.22" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <text x="0" y="22" fill="rgb(255 255 255 / 0.55)" fontSize="10">
            Goal
          </text>
          <line x1="0" x2="400" y1="30" y2="30" stroke="rgb(255 255 255 / 0.45)" strokeDasharray="5 5" />
          {[100, 200, 300].map((x) => (
            <line key={x} x1={x} x2={x} y1="30" y2="104" stroke="rgb(255 255 255 / 0.1)" />
          ))}
          <path d="M0 96 C 80 94, 140 86, 200 70 S 330 32, 392 24 L392 110 L0 110Z" fill="url(#bk2)" />
          <motion.path
            d="M0 96 C 80 94, 140 86, 200 70 S 330 32, 392 24"
            fill="none"
            stroke="#ffd66b"
            strokeWidth="2.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 0.2 }}
          />
          <circle cx="392" cy="24" r="5" fill="#ffd66b" stroke="#fff" strokeWidth="2" />
        </svg>
        <div className="mt-1 flex justify-between px-1 text-[11px] text-white/60">
          <span>Week 1</span>
          <span>Week 4</span>
          <span>Week 8</span>
          <span className="rounded-full bg-white px-2 text-blue">Week 12</span>
        </div>
      </button>
    </div>
  );
};

/* ---------- Signals ---------- */

const SignalsView: React.FC<{ c: Ctx }> = ({ c }) => {
  const [onlyFits, setOnlyFits] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const list = SIGNALS.filter((s) => (!c.tag || s.tag === c.tag) && (!onlyFits || fits(s, c.icp)));

  return (
    <div>
      <div className="flex flex-wrap items-center gap-1.5">
        {[null, ...TAGS].map((t) => (
          <button
            key={t ?? 'all'}
            type="button"
            onClick={() => c.setTag(t)}
            className={`rounded-full px-3 py-1 text-[12px] font-medium transition-colors ${c.tag === t ? 'bg-ink text-white' : 'bg-canvas text-slate hover:text-ink'}`}
          >
            {t ?? 'All'}
          </button>
        ))}
        <label className="ml-auto flex cursor-pointer items-center gap-2 text-[12px] text-slate">
          <span>Only ICP fits</span>
          <button
            type="button"
            role="switch"
            aria-checked={onlyFits}
            onClick={() => setOnlyFits((v) => !v)}
            className={`relative h-5 w-9 rounded-full transition-colors ${onlyFits ? 'bg-blue' : 'bg-line-2'}`}
          >
            <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${onlyFits ? 'left-[18px]' : 'left-0.5'}`} />
          </button>
        </label>
      </div>

      <div className="mt-4 divide-y divide-line overflow-hidden rounded-2xl ring-1 ring-line">
        {list.length === 0 && <div className="p-6 text-center text-[13px] text-slate">No signals match. Try another filter.</div>}
        {list.map((s) => {
          const ok = fits(s, c.icp);
          const isOpen = open === s.id;
          return (
            <div key={s.id} className={ok ? 'bg-paper' : 'bg-paper/60'}>
              <button type="button" onClick={() => setOpen(isOpen ? null : s.id)} className="flex w-full items-center gap-3 px-3.5 py-3 text-left hover:bg-canvas/60">
                <TagChip tag={s.tag} />
                <div className="min-w-0 flex-1">
                  <div className={`truncate text-[13px] font-medium ${ok ? '' : 'text-slate'}`}>{s.company}</div>
                  <div className={`truncate text-[11.5px] text-slate ${ok ? '' : 'line-through'}`}>{s.text}</div>
                </div>
                <span className="hidden shrink-0 text-[11.5px] text-ash @min-[620px]:block">{s.city}</span>
                {ok ? (
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-ok-tint px-2 py-0.5 text-[10.5px] font-medium text-ok">
                    <Check className="h-3 w-3" /> Fits
                  </span>
                ) : (
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-canvas px-2 py-0.5 text-[10.5px] font-medium text-ash">
                    <XIcon className="h-3 w-3" /> Skip
                  </span>
                )}
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                    <div className="flex flex-wrap items-center gap-3 bg-canvas/60 px-3.5 py-3 text-[12px]">
                      <Avatar name={s.person} size={26} />
                      <span>
                        <b className="font-medium">{s.person}</b> · {s.role} · {s.size} staff · {s.industry}
                      </span>
                      {ok ? (
                        c.sent.has(s.id) ? (
                          <span className="ml-auto rounded-lg bg-ok-tint px-2.5 py-1 text-[11px] font-medium text-ok">Sent</span>
                        ) : (
                          <button type="button" onClick={() => c.approve(s)} className="btn-gloss-blue ml-auto rounded-lg px-2.5 py-1 text-[11px] font-medium text-white">
                            Approve outreach
                          </button>
                        )
                      ) : (
                        <span className="ml-auto text-[11.5px] text-ash">{whyNot(s, c.icp)}</span>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-[11.5px] text-ash">Click a row to see who we'd contact.</p>
    </div>
  );
};

/* ---------- Inbox ---------- */

const InboxView: React.FC<{ c: Ctx }> = ({ c }) => {
  const queue = SIGNALS.filter((s) => fits(s, c.icp) && !c.sent.has(s.id));
  const sentList = SIGNALS.filter((s) => c.sent.has(s.id));
  const [tab, setTab] = useState<'approve' | 'replies' | 'sent'>(queue.length ? 'approve' : 'replies');
  const [sel, setSel] = useState<string | null>(null);

  const items =
    tab === 'approve'
      ? queue.map((s) => ({ id: s.id, name: s.person, sub: `${s.company} · ${s.tag}` }))
      : tab === 'sent'
        ? sentList.map((s) => ({ id: s.id, name: s.person, sub: `${s.company} · sent` }))
        : sampleThreads.map((t) => ({ id: t.id, name: t.person, sub: `${t.company} · replied` }));

  const current = items.find((i) => i.id === sel) ?? items[0];
  const sig = SIGNALS.find((s) => s.id === current?.id);
  const thread = sampleThreads.find((t) => t.id === current?.id);

  return (
    <div>
      <div className="flex gap-1.5">
        {(
          [
            ['approve', `To approve (${queue.length})`],
            ['replies', `Replies (${sampleThreads.length})`],
            ['sent', `Sent (${sentList.length})`],
          ] as const
        ).map(([k, l]) => (
          <button
            key={k}
            type="button"
            onClick={() => {
              setTab(k);
              setSel(null);
            }}
            className={`rounded-full px-3 py-1 text-[12px] font-medium ${tab === k ? 'bg-ink text-white' : 'bg-canvas text-slate hover:text-ink'}`}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="mt-4 grid overflow-hidden rounded-2xl ring-1 ring-line @min-[620px]:grid-cols-[220px_1fr]">
        <div className="max-h-[360px] overflow-y-auto border-b border-line @min-[620px]:border-b-0 @min-[620px]:border-r">
          {items.length === 0 && <div className="p-5 text-[12.5px] text-slate">Nothing here yet.</div>}
          {items.map((i) => (
            <button
              key={i.id}
              type="button"
              onClick={() => setSel(i.id)}
              className={`flex w-full items-center gap-2.5 px-3 py-2.5 text-left ${current?.id === i.id ? 'bg-hover' : 'hover:bg-canvas'}`}
            >
              <Avatar name={i.name} size={26} />
              <div className="min-w-0">
                <div className="truncate text-[12.5px] font-medium">{i.name}</div>
                <div className="truncate text-[11px] text-slate">{i.sub}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="min-h-[300px] p-4 @min-[620px]:p-5">
          {!current ? (
            <div className="grid h-full place-items-center text-[13px] text-slate">Pick a conversation.</div>
          ) : thread ? (
            <div className="space-y-3 text-[12.5px] leading-relaxed">
              <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-ash">Signal · {thread.signalTag}</div>
              <p className="text-ink/80">{thread.signal}</p>
              <p className="rounded-xl rounded-tl-sm bg-canvas p-3 text-ink/80">{thread.outbound}</p>
              <p className="ml-auto max-w-[88%] rounded-xl rounded-tr-sm bg-blue p-3 text-white">{thread.reply}</p>
              <div className="flex items-center gap-2 rounded-xl bg-ok-tint p-2.5 text-[12px] text-ok">
                <CalendarCheck2 className="h-4 w-4" /> Booked {thread.booked}
              </div>
            </div>
          ) : sig ? (
            <div className="text-[12.5px]">
              <div className="space-y-1.5 border-b border-line pb-3">
                <div className="flex gap-2">
                  <span className="w-14 text-ash">To</span>
                  <span>
                    {sig.person}, {sig.role}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="w-14 text-ash">Signal</span>
                  <span>
                    <TagChip tag={sig.tag} /> {sig.text}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-[13.5px] leading-relaxed text-ink/85">{draft(sig)}</p>
              <div className="mt-5 flex items-center justify-end gap-2">
                {c.sent.has(sig.id) ? (
                  <span className="rounded-full bg-ok-tint px-3 py-1.5 text-[12px] font-medium text-ok">Sent ✓</span>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      c.approve(sig);
                      setSel(null);
                    }}
                    className="btn-gloss-blue inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-medium text-white"
                  >
                    <Send className="h-3.5 w-3.5" /> Approve &amp; send
                  </button>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

/* ---------- Calendar ---------- */

interface Booking {
  person: string;
  role: string;
  company: string;
  detail: string;
  signal: string;
  tag: Tag;
}

/** A full sample week. Built from the signals list plus a few extra US accounts. */
const BOOKINGS: Booking[] = [
  ...SIGNALS.filter((s) => s.region === 'US' && s.id !== 's6').map((s) => ({
    person: s.person,
    role: s.role,
    company: s.company,
    detail: `${s.size} staff · ${s.industry} · ${s.city}`,
    signal: s.text,
    tag: s.tag,
  })),
  { person: 'Brian Foster', role: 'VP Operations', company: 'Ironwood Builders', detail: '210 staff · Construction · Nashville, TN', signal: 'Hiring 2 project coordinators', tag: 'Hiring' },
  { person: 'Rachel Hughes', role: 'Head of Growth', company: 'Clearwater Insurance', detail: '160 staff · Insurance · Tampa, FL', signal: 'New CMO appointed last month', tag: 'New leader' },
  { person: 'Tyler Jensen', role: 'COO', company: 'Prairie Cold Storage', detail: '95 staff · Logistics · Omaha, NE', signal: 'Opening a third facility', tag: 'Expansion' },
  { person: 'Hannah Price', role: 'Director of Sales', company: 'Bluebird Payroll', detail: '120 staff · SaaS · Raleigh, NC', signal: 'Switching CRM this quarter', tag: 'Tech change' },
];

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const TIMES = ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'];
/** Which slots are booked: [day, time] pairs, 14 of 20. */
const SLOTS: [number, number][] = [
  [0, 0], [0, 1], [0, 3],
  [1, 0], [1, 2], [1, 3],
  [2, 1], [2, 2], [2, 3],
  [3, 0], [3, 1], [3, 2],
  [4, 1], [4, 2],
];
const TIMELINES = ['This quarter', 'Next 30 days', 'Within 60 days', 'Budget approved'];

const CalendarView: React.FC = () => {
  const booked = new Map(SLOTS.map(([d, t], i) => [`${d}-${t}`, i]));
  const [sel, setSel] = useState(0); // Monday 9 AM, Megan Carter
  const b = BOOKINGS[sel];
  const [d, t] = SLOTS[sel];

  return (
    <div className="grid gap-4 @min-[760px]:grid-cols-[1.35fr_1fr]">
      <div>
        <div className="mb-3 flex flex-wrap items-center gap-2 text-[12px]">
          <span className="rounded-full bg-ok-tint px-2.5 py-1 font-medium text-ok">{SLOTS.length} qualified calls this week</span>
          <span className="rounded-full bg-canvas px-2.5 py-1 text-slate">Sample week</span>
          <span className="text-slate">Each one with a briefing note</span>
        </div>
        <div className="overflow-x-auto">
          <div className="grid min-w-[400px] grid-cols-[48px_repeat(5,1fr)] gap-1.5">
            <span />
            {DAYS.map((day) => (
              <span key={day} className="text-center font-mono text-[10px] uppercase text-ash">
                {day}
              </span>
            ))}
            {TIMES.map((tm, ti) => (
              <React.Fragment key={tm}>
                <span className="pt-2 text-right font-mono text-[9.5px] text-ash">{tm.replace(':00', '')}</span>
                {DAYS.map((day, di) => {
                  const i = booked.get(`${di}-${ti}`);
                  if (i === undefined) return <span key={day} className="h-[60px] rounded-lg bg-canvas" />;
                  const bk = BOOKINGS[i];
                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setSel(i)}
                      aria-pressed={sel === i}
                      className={`h-[60px] min-w-0 overflow-hidden rounded-lg p-1.5 text-left text-[10px] leading-tight text-white transition-all ${
                        sel === i ? 'bg-blue shadow-[0_6px_14px_-6px_rgb(5_70_242/0.7)] ring-2 ring-blue/30' : 'bg-blue/65 hover:bg-blue'
                      }`}
                    >
                      <div className="truncate font-semibold">{bk.person.split(' ')[0]} {bk.person.split(' ')[1][0]}.</div>
                      <div className="line-clamp-2 opacity-85">{bk.company}</div>
                    </button>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={sel} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="min-w-0 rounded-2xl bg-canvas p-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-blue">
            Briefing note · {DAYS[d]} {TIMES[t]}
          </div>
          <div className="mt-2.5 flex items-center gap-2.5">
            <Avatar name={b.person} size={34} />
            <div className="min-w-0">
              <div className="truncate text-[13.5px] font-semibold">{b.person}</div>
              <div className="truncate text-[11.5px] text-slate">
                {b.role}, {b.company}
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-[12.5px]">
            <TagChip tag={b.tag} />
            <span className="text-ink/80">{b.signal}</span>
          </div>
          <div className="mt-3 space-y-1.5">
            {[
              ['Fits your ICP', b.detail],
              ['Decision-maker', b.role],
              ['Timeline', TIMELINES[sel % TIMELINES.length]],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-3 rounded-lg bg-paper px-2.5 py-1.5 text-[11.5px]">
                <span className="flex shrink-0 items-center gap-1.5 font-medium">
                  <Check className="h-3.5 w-3.5 text-ok" /> {k}
                </span>
                <span className="truncate text-right text-slate">{v}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11.5px] leading-relaxed text-slate">
            Talking point: open with their {b.tag.toLowerCase()} signal and ask how they're handling it today.
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

/* ---------- Reports ---------- */

const ReportsView: React.FC<{ c: Ctx }> = ({ c }) => {
  // Week 6 is the same sample week shown in Calendar (14 calls).
  const weeks = [
    [60, 5, 2],
    [90, 8, 4],
    [120, 12, 7],
    [150, 16, 10],
    [165, 19, 12],
    [180 + c.sent.size, 22, 14],
  ];
  const max = 200;
  const kpis = [
    ['Signals spotted', String(c.spotted)],
    ['Contacted this week', String(180 + c.sent.size)],
    ['Positive replies', '22'],
    ['Calls booked', String(SLOTS.length)],
  ];
  return (
    <div>
      <div className="grid grid-cols-2 gap-2.5 @min-[620px]:grid-cols-4">
        {kpis.map(([k, v]) => (
          <div key={k} className="rounded-xl bg-canvas p-3.5">
            <div className="text-[11px] text-slate">{k}</div>
            <div className="mt-1 text-[24px] font-semibold tracking-[-0.03em]">{v}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-2xl bg-canvas p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[12px]">
          <span className="font-semibold">Week by week</span>
          <span className="flex gap-3 text-slate">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-sm bg-blue/30" /> Contacted
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-sm bg-blue" /> Replies
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-sm bg-[#e0a91b]" /> Booked
            </span>
          </span>
        </div>
        <div className="mt-4 flex items-end gap-3">
          {weeks.map(([a, b, d], i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
              <div className="flex h-36 w-full items-end justify-center gap-1">
                {[
                  [a, 'bg-blue/30'],
                  [b * 4, 'bg-blue'],
                  [d * 6, 'bg-[#e0a91b]'],
                ].map(([v, cls], j) => (
                  <motion.span
                    key={j}
                    initial={{ height: 0 }}
                    animate={{ height: `${((v as number) / max) * 100}%` }}
                    transition={{ delay: i * 0.05 + j * 0.03, duration: 0.5 }}
                    className={`w-full max-w-[14px] rounded-t ${cls}`}
                  />
                ))}
              </div>
              <span className="font-mono text-[9.5px] text-ash">W{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-3 text-[11.5px] text-ash">Sample numbers. You get a report like this every week.</p>
    </div>
  );
};

/* ---------- Targeting ---------- */

const TargetingView: React.FC<{ c: Ctx }> = ({ c }) => {
  const { icp, setICP } = c;
  const toggle = <T,>(arr: T[], v: T) => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
  const fitCount = SIGNALS.filter((s) => fits(s, icp)).length;

  return (
    <div className="grid gap-4 @min-[760px]:grid-cols-[1.3fr_1fr]">
      <div className="space-y-5 rounded-2xl bg-canvas p-4 @min-[560px]:p-5">
        <div>
          <div className="text-[12px] font-semibold">Industries</div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {INDUSTRIES.map((i) => {
              const on = icp.industries.includes(i);
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setICP({ ...icp, industries: toggle(icp.industries, i) })}
                  aria-pressed={on}
                  className={`rounded-full px-3 py-1 text-[12px] font-medium transition-colors ${on ? 'bg-ink text-white' : 'bg-paper text-slate ring-1 ring-line hover:text-ink'}`}
                >
                  {on && '✓ '}
                  {i}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <div className="text-[12px] font-semibold">Company size (staff)</div>
          <div className="mt-2 flex items-center gap-2 text-[12px]">
            <select
              value={icp.min}
              onChange={(e) => setICP({ ...icp, min: +e.target.value })}
              className="rounded-lg bg-paper px-2.5 py-1.5 ring-1 ring-line focus:outline-none focus:ring-blue"
              aria-label="Minimum company size"
            >
              {[1, 10, 50, 100].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <span className="text-slate">to</span>
            <select
              value={icp.max}
              onChange={(e) => setICP({ ...icp, max: +e.target.value })}
              className="rounded-lg bg-paper px-2.5 py-1.5 ring-1 ring-line focus:outline-none focus:ring-blue"
              aria-label="Maximum company size"
            >
              {[200, 500, 1000, 5000].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <div className="text-[12px] font-semibold">Regions</div>
          <div className="mt-2 flex gap-1.5">
            {(['US', 'UK'] as Region[]).map((r) => {
              const on = icp.regions.includes(r);
              return (
                <button
                  key={r}
                  type="button"
                  onClick={() => setICP({ ...icp, regions: toggle(icp.regions, r) })}
                  aria-pressed={on}
                  className={`rounded-full px-3 py-1 text-[12px] font-medium ${on ? 'bg-ink text-white' : 'bg-paper text-slate ring-1 ring-line'}`}
                >
                  {on && '✓ '}
                  {r}
                </button>
              );
            })}
          </div>
        </div>
        <button type="button" onClick={() => setICP(DEFAULT_ICP)} className="text-[11.5px] font-medium text-blue hover:underline">
          Reset to default
        </button>
      </div>

      <div className="rounded-2xl bg-blue-tint p-4 @min-[560px]:p-5">
        <div className="text-[12px] font-semibold text-blue">Live preview</div>
        <motion.div key={fitCount} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mt-2 text-[40px] font-semibold leading-none tracking-[-0.03em] text-blue">
          {fitCount}
          <span className="text-[16px] font-medium text-blue/60"> / {SIGNALS.length}</span>
        </motion.div>
        <p className="mt-1 text-[12px] text-blue/80">of the latest signals fit. Only these get a message.</p>
        <div className="mt-4 space-y-1">
          {SIGNALS.slice(0, 6).map((s) => {
            const ok = fits(s, icp);
            return (
              <div key={s.id} className="flex items-center justify-between rounded-lg bg-paper/70 px-2.5 py-1.5 text-[11.5px]">
                <span className={ok ? 'text-ink' : 'text-ash line-through'}>{s.company}</span>
                {ok ? <Check className="h-3.5 w-3.5 text-ok" /> : <XIcon className="h-3.5 w-3.5 text-ash" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════ The app ═══════════════════════════ */

const VIEWS: { id: View; label: string; icon: React.ReactNode }[] = [
  { id: 'pipeline', label: 'Pipeline', icon: <LayoutGrid className="h-4 w-4" /> },
  { id: 'signals', label: 'Signals', icon: <Radar className="h-4 w-4" /> },
  { id: 'inbox', label: 'Inbox', icon: <Inbox className="h-4 w-4" /> },
  { id: 'calendar', label: 'Calendar', icon: <CalendarCheck2 className="h-4 w-4" /> },
  { id: 'reports', label: 'Reports', icon: <BarChart3 className="h-4 w-4" /> },
];

const HEAD: Record<View, [React.ReactNode, string]> = {
  pipeline: [
    <>
      From signal to call. <span className="accent">Done for you.</span>
    </>,
    'Everything we find, send and book, in one place.',
  ],
  signals: [
    <>
      Buying signals, <span className="accent">filtered.</span>
    </>,
    'Every company showing intent. Only the ones that fit get contacted.',
  ],
  inbox: [
    <>
      Nothing goes out <span className="accent">without you.</span>
    </>,
    'Approve drafts, read replies, see what was sent.',
  ],
  calendar: [
    <>
      Your week, <span className="accent">booked.</span>
    </>,
    'Click a call to read its briefing note.',
  ],
  reports: [
    <>
      Every number, <span className="accent">every week.</span>
    </>,
    'Who we contacted, who replied, what was booked.',
  ],
  targeting: [
    <>
      Who you <span className="accent">sell to.</span>
    </>,
    'Change your ideal customer and watch the list update.',
  ],
};

/** A working demo of the Elvtera workspace. All data is sample data, kept in memory. */
export const AppWindow: React.FC = () => {
  const [view, setView] = useState<View>('pipeline');
  const [tag, setTag] = useState<Tag | null>(null);
  const [icp, setICP] = useState<ICP>(DEFAULT_ICP);
  const [sent, setSent] = useState<Set<string>>(() => new Set());
  const [toast, setToast] = useState<string | null>(null);
  const [spotted, setSpotted] = useState(312);

  // New signals keep arriving while the page is open.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setSpotted((n) => n + 1), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  const queueCount = useMemo(() => SIGNALS.filter((s) => fits(s, icp) && !sent.has(s.id)).length, [icp, sent]);

  const ctx: Ctx = {
    icp,
    setICP,
    sent,
    tag,
    setTag,
    spotted,
    approve: (s) => {
      setSent((prev) => new Set(prev).add(s.id));
      setToast(`Message to ${s.person} approved and sent`);
    },
    go: (v, t) => {
      if (t !== undefined) setTag(t);
      setView(v);
    },
  };

  const [title, sub] = HEAD[view];

  return (
    <div className="@container relative overflow-hidden rounded-[18px] bg-paper text-left shadow-app">
      <Chrome title="Elvtera · Signal desk (sample workspace, try it)" />
      <div className="grid @min-[760px]:grid-cols-[60px_1fr] @min-[1000px]:grid-cols-[210px_1fr]">
        {/* Sidebar */}
        <aside className="hidden border-r border-line bg-[#fbfbfc] p-3 @min-[760px]:block">
          <div className="flex items-center justify-center gap-2 px-1 py-1.5 @min-[1000px]:justify-start @min-[1000px]:px-2">
            <LogoMark />
            <span className="hidden flex-1 text-[13.5px] font-semibold @min-[1000px]:inline">Your company</span>
            <ChevronsUpDown className="hidden h-3.5 w-3.5 text-ash @min-[1000px]:block" />
          </div>
          <nav className="mt-3 space-y-0.5">
            {VIEWS.map((v) => (
              <NavBtn
                key={v.id}
                icon={v.icon}
                label={v.label}
                active={view === v.id}
                count={v.id === 'signals' ? spotted : v.id === 'inbox' ? queueCount : undefined}
                onClick={() => ctx.go(v.id, v.id === 'signals' ? null : undefined)}
              />
            ))}
          </nav>
          <div className="mt-6 hidden px-2.5 text-[11px] text-ash @min-[1000px]:block">Signals</div>
          <div className="mx-2.5 mt-6 h-px bg-line @min-[1000px]:hidden" />
          <div className="mt-1 space-y-0.5">
            {TAGS.slice(0, 5).map((t) => (
              <button
                key={t}
                type="button"
                title={t}
                onClick={() => ctx.go('signals', t)}
                className={`flex w-full items-center justify-center gap-2.5 rounded-lg px-2 py-[6px] text-[13px] transition-colors @min-[1000px]:justify-start @min-[1000px]:px-2.5 ${
                  view === 'signals' && tag === t ? 'bg-hover text-ink' : 'text-slate hover:bg-hover/60 hover:text-ink'
                }`}
              >
                <span className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-[5px] text-[10px] font-semibold text-white" style={{ background: TAG_STYLE[t].dot }}>
                  {TAG_STYLE[t].letter}
                </span>
                <span className="hidden @min-[1000px]:inline">{t}</span>
              </button>
            ))}
          </div>
          <div className="mt-6">
            <NavBtn icon={<Settings2 className="h-4 w-4" />} label="Targeting" active={view === 'targeting'} onClick={() => ctx.go('targeting')} />
          </div>
        </aside>

        {/* Main */}
        <div className="min-h-[560px] min-w-0 p-4 @min-[560px]:p-6 @min-[1000px]:min-h-[640px]">
          {/* Narrow: tabs instead of the sidebar */}
          <div className="no-scrollbar -mx-4 mb-4 flex gap-1.5 overflow-x-auto border-b border-line px-4 pb-3 @min-[760px]:hidden">
            {[...VIEWS, { id: 'targeting' as View, label: 'Targeting' }].map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => ctx.go(v.id, v.id === 'signals' ? null : undefined)}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] ${view === v.id ? 'bg-ink text-white' : 'bg-canvas text-slate'}`}
              >
                {v.label}
                {v.id === 'inbox' && queueCount > 0 && <span className="font-mono text-[10px] opacity-60">{queueCount}</span>}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-[13px] text-slate">
            <button type="button" onClick={() => ctx.go('pipeline')} className="flex items-center gap-1.5 hover:text-ink">
              <ChevronLeft className="h-4 w-4" />
              <span className="font-medium text-ink">{view === 'pipeline' ? 'Pipeline' : VIEWS.find((v) => v.id === view)?.label ?? 'Targeting'}</span>
            </button>
            <button type="button" onClick={() => ctx.go('targeting')} className="flex items-center gap-1.5 hover:text-ink">
              <Pencil className="h-3.5 w-3.5" /> Targeting
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
            >
              <h3 className="display mt-3 text-[26px] @min-[760px]:text-[34px]">{title}</h3>
              <p className="mt-1 text-[13.5px] text-slate">{sub}</p>
              <div className="mt-5">
                {view === 'pipeline' && <PipelineView c={ctx} />}
                {view === 'signals' && <SignalsView c={ctx} />}
                {view === 'inbox' && <InboxView c={ctx} />}
                {view === 'calendar' && <CalendarView />}
                {view === 'reports' && <ReportsView c={ctx} />}
                {view === 'targeting' && <TargetingView c={ctx} />}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            role="status"
            className="absolute inset-x-0 bottom-4 z-10 mx-auto flex w-fit max-w-[90%] items-center gap-2 rounded-full bg-ink px-4 py-2 text-[12.5px] text-white shadow-float"
          >
            <span className="grid h-4 w-4 place-items-center rounded-full bg-[#7ee2a8] text-ink">
              <Check className="h-3 w-3" />
            </span>
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
