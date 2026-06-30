'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { ScheduleDemoModal } from '@/components/ui/schedule-demo-modal';
import {
  BarChart3, ShoppingCart, Package, Users, ClipboardList,
  Factory, HeartHandshake, Building2, Hospital, Car,
  Truck, Warehouse, UtensilsCrossed, MapPin,
} from 'lucide-react';

const tickerItems = [
  { icon: BarChart3,       label: { en: 'Finance',       ar: 'المالية' } },
  { icon: ShoppingCart,    label: { en: 'Trading',       ar: 'التجارة' } },
  { icon: Package,         label: { en: 'Inventory',     ar: 'المخزون' } },
  { icon: Users,           label: { en: 'HCM',           ar: 'الموارد البشرية' } },
  { icon: ClipboardList,   label: { en: 'Projects',      ar: 'المشاريع' } },
  { icon: Factory,         label: { en: 'Production',    ar: 'الإنتاج' } },
  { icon: HeartHandshake,  label: { en: 'CRM',           ar: 'علاقات العملاء' } },
  { icon: Building2,       label: { en: 'Fixed Assets',  ar: 'الأصول الثابتة' } },
  { icon: Hospital,        label: { en: 'Healthcare',    ar: 'الرعاية الصحية' } },
  { icon: Car,             label: { en: 'Automotive',    ar: 'السيارات' } },
  { icon: Truck,           label: { en: 'Van Sales',     ar: 'المبيعات المتنقلة' } },
  { icon: Warehouse,       label: { en: 'WMS',           ar: 'إدارة المستودعات' } },
  { icon: UtensilsCrossed, label: { en: 'Restaurant',    ar: 'المطاعم' } },
  { icon: MapPin,          label: { en: 'Logistics',     ar: 'اللوجستيات' } },
];

type NetNode = { x: number; y: number; vx: number; vy: number; r: number; gold: boolean };
type NetPulse = { a: number; b: number; t: number; speed: number };

export function SplashHeroSection() {
  const { language, isRTL } = useLanguage();
  const [demoOpen, setDemoOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const doubled = [...tickerItems, ...tickerItems];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0, h = 0;
    let nodes: NetNode[] = [];
    let pulses: NetPulse[] = [];

    const spawnPulse = (): NetPulse => ({
      a: Math.floor(Math.random() * nodes.length),
      b: Math.floor(Math.random() * nodes.length),
      t: 0,
      speed: 0.4 + Math.random() * 0.5,
    });

    const initNodes = () => {
      const count = Math.max(40, Math.min(85, Math.round((w * h) / 24000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.5 + 1.1,
        gold: Math.random() < 0.14,
      }));
      pulses = Array.from({ length: Math.round(count / 4) }, spawnPulse);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
    };
    resize();
    window.addEventListener('resize', resize);

    let rafId: number;

    const frame = () => {
      ctx.fillStyle = '#020205';
      ctx.fillRect(0, 0, w, h);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = w + 20; else if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20; else if (n.y > h + 20) n.y = -20;
      }

      const maxDist = Math.min(w, h) * 0.16 + 70;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.32;
            ctx.strokeStyle = `rgba(168,139,250,${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < pulses.length; i++) {
        const p = pulses[i];
        const a = nodes[p.a], b = nodes[p.b];
        if (!a || !b) { pulses[i] = spawnPulse(); continue; }
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > maxDist * 1.3) { pulses[i] = spawnPulse(); continue; }
        p.t += p.speed * 0.012;
        if (p.t >= 1) { pulses[i] = spawnPulse(); continue; }
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, 5);
        grad.addColorStop(0, 'rgba(255,255,255,0.95)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const n of nodes) {
        const color = n.gold ? '245,193,90' : '168,139,250';
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4.5);
        glow.addColorStop(0, `rgba(${color},0.85)`);
        glow.addColorStop(1, `rgba(${color},0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 4.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${color},1)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      /* light vignette for text contrast */
      const vg = ctx.createRadialGradient(w / 2, h * 0.42, h * 0.05, w / 2, h * 0.42, h * 0.7);
      vg.addColorStop(0, 'rgba(2,2,8,0.35)');
      vg.addColorStop(1, 'rgba(2,2,8,0.05)');
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, w, h);

      rafId = requestAnimationFrame(frame);
    };

    rafId = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  /* Ticker RAF */
  useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;
    let pos = 0;
    let rafId: number;
    const tick = () => {
      pos -= 1;
      const half = el.scrollWidth / 2;
      if (Math.abs(pos) >= half) pos = 0;
      el.style.transform = `translateX(${pos}px)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      <section
        className="relative flex flex-col overflow-hidden"
        style={{ background: '#020205', height: '100vh', marginTop: '-80px' }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 0 }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-4">
          <h1
            className={cn('font-black tracking-tight mb-6', isRTL && 'font-cairo')}
            style={{ fontSize: 'clamp(64px, 11vw, 148px)', lineHeight: 1.02 }}
          >
            <span style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #c084fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {isRTL ? 'بي كور' : 'BCor'}
            </span>
            {' '}
            <span style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #D5A849 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              ERP
            </span>
          </h1>

          <p className={cn(
            'text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed',
            isRTL && 'font-cairo'
          )}>
            {isRTL
              ? 'إدارة مؤسسية تتوسع مع أعمالك — مالية وموارد بشرية ومخزون وتجارة وإنتاج على منصة واحدة قوية.'
              : 'Enterprise management that scales with your business — finance, HR, inventory, trading, and production on one powerful platform.'}
          </p>

          <button
            onClick={() => setDemoOpen(true)}
            className={cn(
              'rounded-full px-9 py-3 text-white/90 font-medium text-sm transition-all duration-200',
              'border border-white/20 hover:border-white/40 hover:text-white backdrop-blur-sm',
              isRTL && 'font-cairo'
            )}
            style={{ background: 'rgba(255,255,255,0.07)' }}
          >
            {isRTL ? 'جدولة عرض توضيحي' : 'Schedule a Demo'}
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 flex flex-col items-center gap-2 pb-2">
          <span className="text-white/40 text-[11px] font-medium tracking-[0.2em] uppercase">Discover More</span>
          <div
            className="flex justify-center items-start pt-1.5"
            style={{
              width: '22px', height: '36px',
              borderRadius: '11px',
              border: '1.5px solid rgba(255,255,255,0.28)',
            }}
          >
            <div
              className="bcor-scroll-dot rounded-full"
              style={{ width: '4px', height: '7px', background: 'rgba(255,255,255,0.55)' }}
            />
          </div>
        </div>

        {/* Scrolling ticker */}
        <div className="relative z-10 w-full overflow-hidden py-6 shrink-0">
          <div ref={tickerRef} className="flex gap-4 w-max">
            {doubled.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-full px-7 py-3.5 whitespace-nowrap"
                  style={{
                    background: 'rgba(12,20,48,0.72)',
                    border: '1px solid rgba(255,255,255,0.13)',
                  }}
                >
                  <Icon className="w-4.5 h-4.5 text-white/60" style={{ width: '18px', height: '18px' }} />
                  <span className={cn('text-white/75 text-sm font-medium tracking-wide', isRTL && 'font-cairo')}>
                    {item.label[language]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ScheduleDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  );
}
