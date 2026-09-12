import React from 'react';
import {
  FolderKanban,
  PlusCircle,
  Terminal,
  Brain,
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck,
  Palette,
  FileCode,
  Sliders
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  activeProjectId?: string | null;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView, activeProjectId }) => {
  const { toggleCustomizer, skin } = useTheme();

  const menuCategories = [
    {
      category: 'MAIN',
      items: [
        { key: 'catalog', label: 'Projects Catalog', icon: FolderKanban, badge: null },
        { key: 'upload', label: 'New Migration Intake', icon: PlusCircle, badge: 'Dropzone' },
        { key: 'terminal', label: 'Live Terminal Monitor', icon: Terminal, badge: activeProjectId ? 'Live' : null, disabled: !activeProjectId }
      ]
    },
    {
      category: 'MIGRATION & ARCHITECTURE',
      items: [
        { key: 'detail', label: 'Modernization Hub', icon: Layers, badge: activeProjectId ? 'Ready' : null, disabled: !activeProjectId }
      ]
    },
    {
      category: 'AI & CONTINUOUS LEARNING',
      items: [
        { key: 'rules', label: 'AI Memory & Rulebook', icon: Brain, badge: 'Shadow' }
      ]
    }
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0 min-h-screen">
      
      {/* Top: Brand Header matching paces template */}
      <div>
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-sm text-white tracking-tight">
                Paces Modernizer
              </div>
              <div className="text-[10px] text-emerald-400 font-mono font-semibold uppercase">
                Theme: {skin}
              </div>
            </div>
          </div>

          {/* Quick Customizer Toggle Icon */}
          <button
            onClick={toggleCustomizer}
            title="Open Admin Theme Customizer"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <Sliders className="w-4 h-4 text-indigo-400" />
          </button>
        </div>

        {/* Navigation Categories */}
        <div className="p-4 space-y-6">
          {menuCategories.map((group, gIdx) => (
            <div key={gIdx} className="space-y-1">
              <div className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                {group.category}
              </div>

              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = currentView === item.key;
                const isDisabled = item.disabled;

                return (
                  <button
                    key={item.key}
                    disabled={isDisabled}
                    onClick={() => setCurrentView(item.key)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      isDisabled
                        ? 'opacity-40 cursor-not-allowed text-slate-500'
                        : isActive
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </div>

                    {item.badge && (
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-bold ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : item.badge === 'Live'
                            ? 'bg-emerald-500/20 text-emerald-400 animate-pulse'
                            : 'bg-indigo-500/20 text-indigo-300'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: Specs & Container Status */}
      <div className="p-4 border-t border-slate-800 space-y-2">
        <button
          onClick={toggleCustomizer}
          className="w-full flex items-center justify-center gap-2 p-2 rounded-xl bg-slate-800/70 hover:bg-slate-800 text-xs font-semibold text-indigo-300 border border-slate-700/60 transition"
        >
          <Palette className="w-3.5 h-3.5" />
          <span>Admin Theme Customizer</span>
        </button>

        <div className="p-2.5 bg-slate-950/70 border border-slate-800 rounded-xl space-y-1.5 text-xs">
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" /> Engine
            </span>
            <span className="font-mono text-emerald-400 text-[11px] font-bold">RTX 3070</span>
          </div>
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" /> Container
            </span>
            <span className="font-mono text-indigo-300 text-[11px]">legacytoModern</span>
          </div>
        </div>
      </div>

    </aside>
  );
};
