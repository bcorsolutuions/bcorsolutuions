'use client';

import { useState, useEffect } from 'react';
import { motion } from '@/lib/motion';
import { TrendingUp, Users, FileText, DollarSign, BarChart3 } from 'lucide-react';

const chartBars = [42, 58, 35, 72, 50, 88, 64, 78, 55, 91, 68, 80];
const chartMonths = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const kpis = [
  { label: 'Revenue', target: 284750, prefix: '$', suffix: '', icon: DollarSign, color: 'text-emerald-400', bg: 'bg-emerald-400/10', change: '+12.5%' },
  { label: 'Employees', target: 1247, prefix: '', suffix: '', icon: Users, color: 'text-blue-400', bg: 'bg-blue-400/10', change: '+8.2%' },
  { label: 'Invoices', target: 3842, prefix: '', suffix: '', icon: FileText, color: 'text-purple-400', bg: 'bg-purple-400/10', change: '+24.1%' },
  { label: 'Growth', target: 94, prefix: '', suffix: '%', icon: TrendingUp, color: 'text-[#D5A849]', bg: 'bg-[#D5A849]/10', change: '+3.7%' },
];

const modules = [
  { name: 'Finance', active: true },
  { name: 'HR & Payroll', active: true },
  { name: 'Inventory', active: true },
  { name: 'CRM', active: true },
  { name: 'Fixed Assets', active: true },
  { name: 'Projects', active: false },
];

const activities = [
  { text: 'Invoice #4821 approved', time: '2m ago', dot: 'bg-emerald-400' },
  { text: 'New employee onboarded', time: '15m ago', dot: 'bg-blue-400' },
  { text: 'PO #1093 dispatched', time: '1h ago', dot: 'bg-purple-400' },
];

export function DashboardMockup() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative bg-[#0d1526] rounded-2xl overflow-hidden border border-white/10 shadow-2xl select-none">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-[#111827]">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-[#D5A849] to-[#f59e0b] flex items-center justify-center">
            <span className="text-[10px] font-bold text-white leading-none">B</span>
          </div>
          <span className="text-xs font-semibold text-white/90 tracking-wide">BCor ERP</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-[10px] text-white/50">Live</span>
        </div>
        <div className="flex gap-1">
          {['bg-red-400', 'bg-yellow-400', 'bg-green-400'].map((c, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${c} opacity-50`} />
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-2 p-3">
        {kpis.map((kpi, i) => (
          <motion.div
            key={i}
            className="bg-white/5 rounded-xl p-3 border border-white/5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-white/45 uppercase tracking-wider">{kpi.label}</span>
              <div className={`${kpi.bg} p-1 rounded-lg`}>
                <kpi.icon className={`w-3 h-3 ${kpi.color}`} />
              </div>
            </div>
            <div className="text-sm font-bold text-white leading-none mb-1">
              <AnimatedCounter target={kpi.target} prefix={kpi.prefix} suffix={kpi.suffix} />
            </div>
            <div className="text-[10px] text-emerald-400 font-medium">{kpi.change} this month</div>
          </motion.div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="px-3 pb-2">
        <motion.div
          className="bg-white/5 rounded-xl p-3 border border-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">Monthly Revenue</span>
            <BarChart3 className="w-3 h-3 text-[#D5A849]" />
          </div>
          <div className="flex items-end gap-0.5 h-14">
            {chartBars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                style={{
                  height: `${h}%`,
                  background:
                    i === 9
                      ? 'linear-gradient(to top, #D5A849, #f59e0b)'
                      : 'rgba(213,168,73,0.22)',
                  transformOrigin: 'bottom',
                }}
                transition={{ delay: 0.9 + i * 0.05, duration: 0.45, ease: 'easeOut' }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1.5">
            {chartMonths.map((m, i) => (
              <span key={i} className="text-[8px] text-white/25 flex-1 text-center">{m}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Module Pills */}
      <div className="px-3 pb-2">
        <div className="flex flex-wrap gap-1.5">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] border ${
                mod.active
                  ? 'bg-[#D5A849]/10 border-[#D5A849]/30 text-[#D5A849]'
                  : 'bg-white/5 border-white/10 text-white/35'
              }`}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.07, duration: 0.3 }}
            >
              {mod.active && <div className="w-1.5 h-1.5 rounded-full bg-[#D5A849]" />}
              {mod.name}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-3 pb-3">
        <motion.div
          className="bg-white/5 rounded-xl p-3 border border-white/5 space-y-2.5"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.4 }}
        >
          <span className="text-[10px] font-semibold text-white/55 uppercase tracking-wider block">
            Recent Activity
          </span>
          {activities.map((a, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${a.dot} flex-shrink-0`} />
                <span className="text-[10px] text-white/55">{a.text}</span>
              </div>
              <span className="text-[9px] text-white/25 ml-2">{a.time}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
