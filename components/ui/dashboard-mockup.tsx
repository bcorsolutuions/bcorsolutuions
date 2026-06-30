'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

// ── colour tokens ────────────────────────────────────────────────────────────
const GOLD   = '#F5A623';
const GREEN  = '#22c55e';
const BLUE   = '#3b82f6';
const PURPLE = '#a855f7';
const RED    = '#ef4444';

type Tab = 'overview' | 'finance' | 'hr' | 'inventory' | 'crm' | 'alerts';

// ── helpers ──────────────────────────────────────────────────────────────────
function useCanvas(
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
  deps: unknown[]
) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const dpr = window.devicePixelRatio || 1;
    el.width  = el.offsetWidth  * dpr;
    el.height = el.offsetHeight * dpr;
    const ctx = el.getContext('2d');
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    draw(ctx, el.offsetWidth, el.offsetHeight);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return ref;
}

function AnimCounter({
  value, prefix = '', suffix = '',
}: { value: number; prefix?: string; suffix?: string }) {
  const [displayed, setDisplayed] = useState(0);
  const startRef = useRef<number | null>(null);
  const fromRef  = useRef(0);

  useEffect(() => {
    fromRef.current = displayed;
    startRef.current = null;
    const to = value;
    const duration = 900;
    let raf: number;
    function step(ts: number) {
      if (!startRef.current) startRef.current = ts;
      const p = Math.min((ts - startRef.current) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setDisplayed(Math.round(fromRef.current + (to - fromRef.current) * ease));
      if (p < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <>{prefix}{displayed.toLocaleString()}{suffix}</>;
}

// ── sub-components ───────────────────────────────────────────────────────────

function KpiCell({
  icon, label, value, delta, color, bg, prefix = '', suffix = '',
}: {
  icon: string; label: string; value: number; delta: string;
  color: string; bg: string; prefix?: string; suffix?: string;
}) {
  return (
    <div style={{ background: '#1a2230', padding: '12px 14px', borderRight: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ fontSize: '.67rem', color: '#7a8fa6', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 5, display: 'flex', alignItems: 'center', gap: 5 }}>
        <span style={{ width: 18, height: 18, borderRadius: 4, background: bg, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '.65rem' }}>{icon}</span>
        {label}
      </div>
      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#e8edf3' }}>
        <AnimCounter value={value} prefix={prefix} suffix={suffix} />
      </div>
      <div style={{ fontSize: '.68rem', color: GREEN, marginTop: 2 }}>{delta}</div>
    </div>
  );
}

function StagePill({ label, color }: { label: string; color: string }) {
  return (
    <span style={{ padding: '2px 8px', borderRadius: 8, fontSize: '.65rem', fontWeight: 600, background: color + '20', color }}>
      {label}
    </span>
  );
}

function PipeRow({ name, stage, stageColor, pct, val }: { name: string; stage?: string; stageColor?: string; pct: number; val: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,.04)', fontSize: '.72rem' }}>
      <div style={{ flex: 1.2, color: '#e8edf3', fontWeight: 500 }}>{name}</div>
      {stage && stageColor && <div style={{ flex: .8 }}><StagePill label={stage} color={stageColor} /></div>}
      <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,.07)', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', borderRadius: 2, background: `linear-gradient(90deg,${GOLD},#ff9f00)` }} />
      </div>
      <div style={{ flex: .6, textAlign: 'right', color: GOLD, fontWeight: 700 }}>{val}</div>
    </div>
  );
}

function AlertItem({ icon, text, badge, badgeColor, bg, border }: {
  icon: string; text: string; badge: string; badgeColor: string; bg: string; border: string;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8, fontSize: '.74rem', background: bg, border }}>
      <span style={{ fontSize: '.9rem', flexShrink: 0 }}>{icon}</span>
      <div style={{ flex: 1, color: '#7a8fa6' }} dangerouslySetInnerHTML={{ __html: text }} />
      <span style={{ fontSize: '.63rem', padding: '2px 7px', borderRadius: 8, fontWeight: 700, background: badgeColor + '25', color: badgeColor }}>{badge}</span>
    </div>
  );
}

// ── Overview panel ────────────────────────────────────────────────────────────
function OverviewPanel({ revValue }: { revValue: number }) {
  // Revenue bar chart
  const values  = [42, 55, 38, 68, 74, 52, 80, 65, 90, 110, 78, 95];
  const months  = ['J','F','M','A','M','J','J','A','S','O','N','D'];
  const startRef = useRef<number | null>(null);
  const rafRef   = useRef<number>(0);

  const chartRef = useCanvas((ctx, W, H) => {
    function draw(progress: number) {
      ctx.clearRect(0, 0, W, H);
      const pad = { l: 4, r: 4, t: 6, b: 20 };
      const maxV = Math.max(...values);
      const barW = (W - pad.l - pad.r) / values.length;
      values.forEach((v, i) => {
        const barH = ((v / maxV) * (H - pad.t - pad.b)) * Math.min(1, Math.max(0, progress * 12 - i));
        const x = pad.l + i * barW + barW * .15;
        const y = H - pad.b - barH;
        const bw = barW * .7;
        const grad = ctx.createLinearGradient(x, y, x, H - pad.b);
        if (i === 9) { grad.addColorStop(0, GOLD); grad.addColorStop(1, 'rgba(245,166,35,.3)'); }
        else { grad.addColorStop(0, 'rgba(255,255,255,.18)'); grad.addColorStop(1, 'rgba(255,255,255,.04)'); }
        ctx.fillStyle = grad;
        ctx.beginPath();
        const r = 2;
        ctx.moveTo(x + r, y); ctx.lineTo(x + bw - r, y);
        ctx.quadraticCurveTo(x + bw, y, x + bw, y + r);
        ctx.lineTo(x + bw, H - pad.b); ctx.lineTo(x, H - pad.b); ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y); ctx.closePath(); ctx.fill();
        ctx.fillStyle = 'rgba(122,143,166,.7)';
        ctx.font = `8px Inter, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText(months[i], x + bw / 2, H - 5);
      });
    }
    cancelAnimationFrame(rafRef.current);
    startRef.current = null;
    function animate(ts: number) {
      if (!startRef.current) startRef.current = ts;
      const p = Math.min((ts - startRef.current) / 1200, 1);
      draw(p);
      if (p < 1) rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  // sparklines
  function Spark({ id, data, color }: { id: string; data: number[]; color: string }) {
    const ref = useCanvas((ctx, W, H) => {
      const max = Math.max(...data), min = Math.min(...data), range = max - min || 1;
      const stepX = W / (data.length - 1);
      ctx.beginPath();
      data.forEach((v, i) => {
        const x = i * stepX;
        const y = H - ((v - min) / range) * H * .85 - H * .05;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.stroke();
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, color.replace(')', ', .3)').replace('rgb(', 'rgba('));
      grad.addColorStop(1, color.replace(')', ', 0)').replace('rgb(', 'rgba('));
      ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
      ctx.fillStyle = grad; ctx.fill();
    }, []);
    return <canvas ref={ref} style={{ width: '100%', height: 28, display: 'block' }} />;
  }

  // donut
  const donutRef = useCanvas((ctx, W, H) => {
    const cx = W / 2, cy = H / 2, r = Math.min(W, H) / 2 - 2, inner = r * .55;
    const segs = [
      { pct: .35, color: GOLD }, { pct: .22, color: BLUE },
      { pct: .18, color: GREEN }, { pct: .15, color: PURPLE }, { pct: .10, color: RED },
    ];
    let angle = -Math.PI / 2;
    segs.forEach(s => {
      const end = angle + s.pct * Math.PI * 2;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, r, angle, end); ctx.closePath();
      ctx.fillStyle = s.color; ctx.fill(); angle = end;
    });
    ctx.beginPath(); ctx.arc(cx, cy, inner, 0, Math.PI * 2);
    ctx.fillStyle = '#1a2230'; ctx.fill();
  }, []);

  const modules = [
    { name: 'Finance', pct: 35, color: GOLD }, { name: 'HR', pct: 22, color: BLUE },
    { name: 'Inventory', pct: 18, color: GREEN }, { name: 'CRM', pct: 15, color: PURPLE },
    { name: 'Assets', pct: 10, color: RED },
  ];

  const [activities, setActivities] = useState([
    { color: GREEN,  text: '<strong style="color:#e8edf3">Invoice #1041</strong> approved',         time: '2m ago'  },
    { color: BLUE,   text: '<strong style="color:#e8edf3">New employee</strong> onboarded',          time: '15m ago' },
    { color: GOLD,   text: '<strong style="color:#e8edf3">PO #3083</strong> requested',              time: '1h ago'  },
  ]);

  const moreActivities = useRef([
    { color: PURPLE, text: '<strong style="color:#e8edf3">Payroll run</strong> completed',           time: 'just now' },
    { color: GREEN,  text: '<strong style="color:#e8edf3">Sales order</strong> #5521 shipped',       time: 'just now' },
    { color: BLUE,   text: '<strong style="color:#e8edf3">Asset report</strong> generated',          time: 'just now' },
  ]);
  const actIdx = useRef(0);

  useEffect(() => {
    const t = setInterval(() => {
      const next = { ...moreActivities.current[actIdx.current % moreActivities.current.length] };
      setActivities(prev => [next, prev[0], prev[1]]);
      actIdx.current++;
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* KPI grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <KpiCell icon="$" label="Revenue" value={revValue} delta="↑ +12.5%" color={BLUE}   bg="rgba(59,130,246,.15)"  prefix="$" />
        <KpiCell icon="👤" label="Staff"  value={1247}     delta="↑ +8.2%"  color={PURPLE} bg="rgba(168,85,247,.15)"  />
        <KpiCell icon="📦" label="Orders" value={3842}     delta="↑ +24.1%" color={GOLD}   bg="rgba(245,166,35,.15)"  />
        <KpiCell icon="📈" label="Growth" value={94}       delta="↑ +3.7%"  color={GREEN}  bg="rgba(34,197,94,.15)"   suffix="%" />
      </div>

      {/* Revenue chart */}
      <div style={{ padding: '12px 14px 8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.72rem', color: '#7a8fa6', marginBottom: 8 }}>
          <span>Monthly Revenue</span>
          <span style={{ color: GOLD, fontWeight: 700 }}>↑ 23.4%</span>
        </div>
        <canvas ref={chartRef} style={{ width: '100%', height: 80, display: 'block' }} />
      </div>

      {/* Donut + modules */}
      <div style={{ display: 'flex', gap: 10, padding: '0 14px 10px', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: 68, height: 68, flexShrink: 0 }}>
          <canvas ref={donutRef} style={{ width: 68, height: 68, display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <strong style={{ fontSize: '.8rem', color: '#e8edf3' }}>68%</strong>
            <span style={{ fontSize: '.58rem', color: '#7a8fa6' }}>Utilization</span>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
          {modules.map(m => (
            <div key={m.name} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '.7rem' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: m.color, flexShrink: 0 }} />
              <div style={{ flex: .9, color: '#7a8fa6' }}>{m.name}</div>
              <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,.07)', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ width: `${m.pct}%`, height: '100%', borderRadius: 3, background: m.color }} />
              </div>
              <div style={{ fontSize: '.65rem', color: '#7a8fa6', width: 26, textAlign: 'right' }}>{m.pct}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity */}
      <div style={{ padding: '0 14px 12px' }}>
        <div style={{ fontSize: '.68rem', color: '#7a8fa6', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 7 }}>Recent Activity</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {activities.map((a, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '.72rem' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: a.color, flexShrink: 0 }} />
              <div style={{ flex: 1, color: '#7a8fa6' }} dangerouslySetInnerHTML={{ __html: a.text }} />
              <div style={{ fontSize: '.63rem', color: 'rgba(122,143,166,.6)' }}>{a.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Finance panel ─────────────────────────────────────────────────────────────
function FinancePanel() {
  const plRef = useCanvas((ctx, W, H) => {
    const income  = [320,360,310,390,420,450,410,480,500,510,470,490];
    const expense = [180,195,170,210,220,200,215,230,195,240,210,205];
    [[income, GREEN], [expense, RED]].forEach(([data, color]) => {
      const nums = data as number[];
      const max = 520, stepX = W / (nums.length - 1);
      ctx.beginPath();
      nums.forEach((v, i) => {
        const x = i * stepX, y = H - ((v / max) * H * .85) - H * .05;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.strokeStyle = color as string; ctx.lineWidth = 1.5; ctx.stroke();
    });
  }, []);

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <KpiCell icon="↑" label="Income"      value={482000} delta="↑ +18.2% vs last qtr" color={GREEN}  bg="rgba(34,197,94,.15)"  prefix="$" />
        <KpiCell icon="↓" label="Expenses"    value={197000} delta="↑ +4.1% vs last qtr"  color={RED}    bg="rgba(239,68,68,.15)"  prefix="$" />
        <KpiCell icon="$" label="Net Profit"  value={285000} delta="↑ Margin 59.1%"        color={BLUE}   bg="rgba(59,130,246,.15)" prefix="$" />
        <KpiCell icon="⚡" label="Outstanding" value={43000}  delta="12 invoices pending"   color={GOLD}   bg="rgba(245,166,35,.15)" prefix="$" />
      </div>
      <div style={{ padding: '12px 14px 8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.72rem', color: '#7a8fa6', marginBottom: 8 }}>
          <span>P&amp;L Trend</span><span style={{ color: GREEN, fontWeight: 700 }}>Profitable</span>
        </div>
        <canvas ref={plRef} style={{ width: '100%', height: 72, display: 'block' }} />
      </div>
      <div style={{ padding: '0 14px 12px' }}>
        <div style={{ fontSize: '.68rem', color: '#7a8fa6', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 7 }}>Top Invoices</div>
        <PipeRow name="Acme Corp"    stage="Paid"    stageColor={GREEN} pct={100} val="$28,400" />
        <PipeRow name="TechVentures" stage="Pending" stageColor={GOLD}  pct={72}  val="$19,200" />
        <PipeRow name="GlobalTrade"  stage="Overdue" stageColor={RED}   pct={44}  val="$12,900" />
        <PipeRow name="NexGen Ltd"   stage="Paid"    stageColor={GREEN} pct={88}  val="$8,750"  />
      </div>
    </div>
  );
}

// ── HR panel ──────────────────────────────────────────────────────────────────
function Gauge({ value, color, label, display }: { value: number; color: string; label: string; display: string }) {
  const ref = useCanvas((ctx, W, H) => {
    const cx = W / 2, cy = H - 2, r = Math.min(W, H) * .8;
    ctx.beginPath(); ctx.arc(cx, cy, r, Math.PI, 0);
    ctx.strokeStyle = 'rgba(255,255,255,.08)'; ctx.lineWidth = 7; ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, r, Math.PI, Math.PI + value * Math.PI);
    ctx.strokeStyle = color; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.stroke();
  }, [value, color]);

  return (
    <div style={{ flex: 1, textAlign: 'center' }}>
      <canvas ref={ref} style={{ width: '100%', maxWidth: 78, height: 46, display: 'block', margin: '0 auto' }} />
      <div style={{ fontSize: '.78rem', fontWeight: 700, color: '#e8edf3' }}>{display}</div>
      <div style={{ fontSize: '.63rem', color: '#7a8fa6' }}>{label}</div>
    </div>
  );
}

function HRPanel() {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <KpiCell icon="👤" label="Headcount"  value={1247} delta="↑ +18 this month"     color={PURPLE} bg="rgba(168,85,247,.15)" />
        <KpiCell icon="✓"  label="Attendance" value={96}   delta="↑ +1.2% vs last wk"  color={GREEN}  bg="rgba(34,197,94,.15)"  suffix="%" />
        <KpiCell icon="$"  label="Payroll"    value={2100000} delta="Monthly processed" color={BLUE}   bg="rgba(59,130,246,.15)" prefix="$" />
        <KpiCell icon="📋" label="Open Roles" value={23}   delta="8 offers pending"     color={GOLD}   bg="rgba(245,166,35,.15)" />
      </div>
      <div style={{ display: 'flex', gap: 8, padding: '10px 14px' }}>
        <Gauge value={.87} color={PURPLE} label="Retention"   display="87%" />
        <Gauge value={.72} color={BLUE}   label="Satisfaction" display="72%" />
        <Gauge value={.94} color={GREEN}  label="Training"     display="94%" />
        <Gauge value={.68} color={GOLD}   label="Diversity"    display="68%" />
      </div>
      <div style={{ padding: '0 14px 12px' }}>
        {[
          { color: GREEN, title: 'Q2 Performance Reviews', sub: '248 employees completed', time: 'Today' },
          { color: BLUE,  title: 'New Hire Orientation',    sub: '7 new joiners onboarded', time: 'Yesterday' },
          { color: GOLD,  title: 'Payroll Processed',       sub: '$2.1M disbursed, 0 errors', time: '3 days ago' },
        ].map((item, i, arr) => (
          <div key={i} style={{ display: 'flex', gap: 10, paddingBottom: i < arr.length - 1 ? 10 : 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: item.color, marginTop: 2, flexShrink: 0 }} />
              {i < arr.length - 1 && <div style={{ flex: 1, width: 1, background: 'rgba(255,255,255,.07)', minHeight: 20 }} />}
            </div>
            <div>
              <div style={{ fontSize: '.74rem', color: '#e8edf3', fontWeight: 500 }}>{item.title}</div>
              <div style={{ fontSize: '.67rem', color: '#7a8fa6', marginTop: 2 }}>{item.sub}</div>
              <div style={{ fontSize: '.63rem', color: 'rgba(122,143,166,.5)' }}>{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Inventory panel ───────────────────────────────────────────────────────────
function InventoryPanel() {
  const heatCells = useMemo(() => {
    const cols = [GOLD, GREEN, BLUE];
    return Array.from({ length: 84 }, (_, i) => ({
      bg: cols[i % 3],
      op: (Math.random() * .8 + .1).toFixed(2),
    }));
  }, []);

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <KpiCell icon="📦" label="SKUs"       value={4812} delta="↑ +120 this week"  color={GOLD}  bg="rgba(245,166,35,.15)" />
        <KpiCell icon="⚠"  label="Low Stock"  value={38}   delta="Requires reorder"  color={RED}   bg="rgba(239,68,68,.15)"  />
        <KpiCell icon="🏭" label="Warehouses" value={6}    delta="2 countries"       color={GREEN} bg="rgba(34,197,94,.15)"  />
        <KpiCell icon="🔄" label="Turnover"   value={84}   delta="↑ +1.2x vs last yr" color={BLUE} bg="rgba(59,130,246,.15)" suffix="%" />
      </div>
      <div style={{ padding: '10px 14px 6px' }}>
        <div style={{ fontSize: '.68rem', color: '#7a8fa6', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 7 }}>
          Stock Activity — Last 12 Weeks
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: 3 }}>
          {heatCells.map((c, i) => (
            <div key={i} style={{ aspectRatio: '1', borderRadius: 2, background: c.bg, opacity: parseFloat(c.op) }} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
          {['W1','W4','W8','W12'].map(w => (
            <span key={w} style={{ fontSize: '.58rem', color: '#7a8fa6' }}>{w}</span>
          ))}
        </div>
      </div>
      <div style={{ padding: '0 14px 12px' }}>
        <div style={{ fontSize: '.68rem', color: '#7a8fa6', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 7 }}>Warehouse Utilization</div>
        <PipeRow name="WH-01 Main"   pct={92} val="92%" />
        <PipeRow name="WH-02 North"  pct={74} val="74%" />
        <PipeRow name="WH-03 South"  pct={58} val="58%" />
        <PipeRow name="WH-04 Int'l"  pct={41} val="41%" />
      </div>
    </div>
  );
}

// ── CRM panel ─────────────────────────────────────────────────────────────────
function CRMPanel() {
  const geoDots = [
    { left: '45%', top: '38%', color: GOLD,   label: 'Dubai'     },
    { left: '35%', top: '28%', color: BLUE,   label: 'London'    },
    { left: '42%', top: '30%', color: BLUE,   label: 'Paris'     },
    { left: '55%', top: '22%', color: BLUE,   label: 'Frankfurt' },
    { left: '72%', top: '32%', color: GREEN,  label: 'Singapore' },
    { left: '80%', top: '30%', color: GREEN,  label: 'Tokyo'     },
    { left: '78%', top: '46%', color: GREEN,  label: 'Sydney'    },
  ];

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <KpiCell icon="🤝" label="Leads"     value={1824} delta="↑ +214 this month"  color={BLUE}   bg="rgba(59,130,246,.15)"  />
        <KpiCell icon="✓"  label="Won Deals" value={342}  delta="↑ 18.7% close rate" color={GREEN}  bg="rgba(34,197,94,.15)"   />
        <KpiCell icon="💰" label="Pipeline"  value={1200000} delta="94 active deals"  color={GOLD}   bg="rgba(245,166,35,.15)"  prefix="$" />
        <KpiCell icon="⭐" label="CSAT"      value={48}   delta="↑ +0.2 this quarter" color={PURPLE} bg="rgba(168,85,247,.15)"  suffix="/5" />
      </div>
      <div style={{ padding: '10px 14px 6px' }}>
        <div style={{ fontSize: '.68rem', color: '#7a8fa6', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 7 }}>Deal Pipeline</div>
        <PipeRow name="Enterprise SaaS"  stage="Proposal" stageColor={GOLD}   pct={65} val="$240K" />
        <PipeRow name="Retail Chain Co." stage="Demo"     stageColor={PURPLE} pct={40} val="$185K" />
        <PipeRow name="HealthCorp Ltd"   stage="Closing"  stageColor={GREEN}  pct={88} val="$320K" />
        <PipeRow name="Logix Partners"   stage="Qualify"  stageColor={BLUE}   pct={22} val="$94K"  />
      </div>
      <div style={{ padding: '0 14px 12px' }}>
        <div style={{ fontSize: '.68rem', color: '#7a8fa6', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 6 }}>Client Geo Distribution</div>
        <div style={{ position: 'relative', height: 80, borderRadius: 8, background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.07)', overflow: 'hidden' }}>
          {geoDots.map((d, i) => (
            <span key={i}>
              <span style={{
                position: 'absolute', left: d.left, top: d.top,
                width: 8, height: 8, borderRadius: '50%', background: d.color,
                transform: 'translate(-50%,-50%)',
              }} />
              <span style={{
                position: 'absolute', left: d.left, top: d.top,
                width: 20, height: 20, borderRadius: '50%',
                border: `1px solid ${d.color}`,
                transform: 'translate(-50%,-50%)',
                animation: `geoRing 2s ${i * .3}s infinite`,
                opacity: .6,
              }} />
            </span>
          ))}
        </div>
        <style>{`@keyframes geoRing{0%{transform:translate(-50%,-50%) scale(1);opacity:.8}100%{transform:translate(-50%,-50%) scale(2.2);opacity:0}}`}</style>
      </div>
    </div>
  );
}

// ── Alerts panel ──────────────────────────────────────────────────────────────
function AlertsPanel() {
  return (
    <div>
      <div style={{ padding: '10px 14px 6px', fontSize: '.68rem', color: '#7a8fa6', textTransform: 'uppercase', letterSpacing: '.06em' }}>System Alerts</div>
      <div style={{ padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <AlertItem icon="🔴" text="<strong style='color:#e8edf3'>Low Stock Critical</strong> — 38 SKUs below reorder point" badge="High"   badgeColor={RED}    bg="rgba(239,68,68,.07)"   border="1px solid rgba(239,68,68,.2)"   />
        <AlertItem icon="🟡" text="<strong style='color:#e8edf3'>Invoice Overdue</strong> — $12,900 from GlobalTrade past 30d"  badge="Med"    badgeColor={GOLD}   bg="rgba(245,166,35,.07)"  border="1px solid rgba(245,166,35,.2)"  />
        <AlertItem icon="🔵" text="<strong style='color:#e8edf3'>Payroll Scheduled</strong> — $2.1M run on 30th"                badge="Info"   badgeColor={BLUE}   bg="rgba(59,130,246,.07)"  border="1px solid rgba(59,130,246,.2)"  />
        <AlertItem icon="🟢" text="<strong style='color:#e8edf3'>Backup Successful</strong> — All systems synced 2h ago"        badge="OK"     badgeColor={GREEN}  bg="rgba(34,197,94,.07)"   border="1px solid rgba(34,197,94,.2)"   />
        <AlertItem icon="🟣" text="<strong style='color:#e8edf3'>License Renewal</strong> — 14 days remaining"                  badge="Notice" badgeColor={PURPLE} bg="rgba(168,85,247,.07)"  border="1px solid rgba(168,85,247,.2)"  />
      </div>
      <div style={{ padding: '10px 14px 6px', fontSize: '.68rem', color: '#7a8fa6', textTransform: 'uppercase', letterSpacing: '.06em' }}>System Health</div>
      <div style={{ display: 'flex', gap: 8, padding: '0 14px 12px' }}>
        <Gauge value={.999} color={GREEN}  label="Uptime"  display="99.9%" />
        <Gauge value={.28}  color={BLUE}   label="Latency" display="42ms"  />
        <Gauge value={.78}  color={GOLD}   label="CPU"     display="78%"   />
        <Gauge value={.61}  color={PURPLE} label="Storage" display="61%"   />
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export function DashboardMockup() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const revRef = useRef(284750);
  const [revValue, setRevValue] = useState(284750);

  useEffect(() => { setMounted(true); }, []);

  // live revenue tick
  useEffect(() => {
    const t = setInterval(() => {
      revRef.current = revRef.current + Math.round((Math.random() - .3) * 800);
      setRevValue(revRef.current);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  if (!mounted) return null;

  const tabs: { id: Tab; label: string }[] = [
    { id: 'overview',  label: 'Overview'  },
    { id: 'finance',   label: 'Finance'   },
    { id: 'hr',        label: 'HR'        },
    { id: 'inventory', label: 'Inventory' },
    { id: 'crm',       label: 'CRM'       },
    { id: 'alerts',    label: 'Alerts'    },
  ];

  return (
    <div
      style={{
        background: '#1a2230',
        border: '1px solid rgba(255,255,255,.07)',
        borderRadius: 18,
        overflow: 'hidden',
        boxShadow: '0 32px 80px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.04)',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#e8edf3',
        userSelect: 'none',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,.07)', background: 'rgba(255,255,255,.03)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '.88rem', fontWeight: 600 }}>
          <div style={{ width: 26, height: 26, background: GOLD, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 900, fontSize: '.7rem' }}>B</div>
          BCor ERP
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '.72rem', color: GREEN }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: GREEN, display: 'inline-block', animation: 'pulse 1.5s infinite' }} />
          Live
        </div>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ff5f57','#ffbd2e','#28ca42'].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 2, padding: '8px 12px 0', borderBottom: '1px solid rgba(255,255,255,.07)', background: 'rgba(255,255,255,.02)', overflowX: 'auto' }}>
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            style={{
              fontSize: '.72rem', fontWeight: 600, padding: '5px 12px',
              borderRadius: '7px 7px 0 0',
              color: activeTab === t.id ? GOLD : '#7a8fa6',
              background: activeTab === t.id ? 'rgba(245,166,35,.07)' : 'transparent',
              border: 'none',
              borderBottom: activeTab === t.id ? `2px solid ${GOLD}` : '2px solid transparent',
              marginBottom: -1,
              cursor: 'pointer',
              transition: 'all .2s',
              whiteSpace: 'nowrap',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Panels */}
      <div style={{ maxHeight: 380, overflowY: 'auto', scrollbarWidth: 'none' }}>
        {activeTab === 'overview'  && <OverviewPanel  revValue={revValue} />}
        {activeTab === 'finance'   && <FinancePanel   />}
        {activeTab === 'hr'        && <HRPanel        />}
        {activeTab === 'inventory' && <InventoryPanel />}
        {activeTab === 'crm'       && <CRMPanel       />}
        {activeTab === 'alerts'    && <AlertsPanel    />}
      </div>

      <style>{`@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.4)}}`}</style>
    </div>
  );
}
