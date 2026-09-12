import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import {
  Bell,
  Globe,
  LogOut,
  Cpu,
  CheckCircle2,
  ChevronDown,
  Sliders,
  ShieldCheck
} from 'lucide-react';

export const TopBar: React.FC = () => {
  const { user, logout } = useAuth();
  const { toggleCustomizer, skin } = useTheme();
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English (US)');
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'Universal Migration Engine Ready',
      desc: 'Dual-Engine AST & Playwright crawler initialized in container.',
      time: 'Just now',
      unread: true
    },
    {
      id: 2,
      title: 'Developer Shadow Active',
      desc: 'Git Diff observer is actively watching for manual code edits.',
      time: '5m ago',
      unread: true
    },
    {
      id: 3,
      title: 'NVIDIA RTX 3070 Connected',
      desc: 'Local GPU acceleration loaded with qwen2.5-coder:7b.',
      time: '12m ago',
      unread: false
    }
  ];

  const languages = [
    { code: 'en', name: 'English (US)', flag: '🇺🇸' },
    { code: 'gb', name: 'English (UK)', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  return (
    <header className="h-16 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40 px-6 flex items-center justify-between">
      
      {/* Left: Container Badge */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Container: <strong className="text-emerald-400">legacytoModernConverter</strong></span>
        </div>
      </div>

      {/* Right: Actions, Customizer, Language, Notifications, Profile */}
      <div className="flex items-center space-x-3">
        
        {/* GPU Status Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-emerald-950/40 border border-emerald-500/30 rounded-full text-xs text-emerald-400">
          <Cpu className="w-3.5 h-3.5" />
          <span className="font-semibold font-mono">RTX 3070 (CUDA)</span>
        </div>

        {/* 1. Theme Customizer Cog Toggle */}
        <button
          onClick={toggleCustomizer}
          title="Open Theme Customizer"
          className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-indigo-400 hover:text-white border border-slate-700/60 transition"
        >
          <Sliders className="w-4 h-4" />
        </button>

        {/* 2. Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => { setLangOpen(!langOpen); setNotifOpen(false); setProfileOpen(false); }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-xs font-semibold text-slate-200 border border-slate-700/60 transition"
          >
            <Globe className="w-4 h-4 text-indigo-400" />
            <span className="hidden sm:inline">{selectedLang}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setSelectedLang(l.name); setLangOpen(false); }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-slate-200 hover:bg-slate-800 hover:text-white transition"
                >
                  <span className="flex items-center gap-2">
                    <span>{l.flag}</span>
                    <span>{l.name}</span>
                  </span>
                  {selectedLang === l.name && <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 3. Notification Bell Dropdown */}
        <div className="relative">
          <button
            onClick={() => { setNotifOpen(!notifOpen); setLangOpen(false); setProfileOpen(false); }}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/60 transition relative"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center shadow-lg shadow-rose-500/40">
              2
            </span>
          </button>

          {notifOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2 px-1">
                <span className="text-xs font-bold text-white">System Notifications</span>
                <span className="text-[10px] text-indigo-400 font-semibold cursor-pointer hover:underline">Mark all read</span>
              </div>
              <div className="space-y-1.5 max-h-64 overflow-y-auto">
                {notifications.map((n) => (
                  <div key={n.id} className={`p-2.5 rounded-xl border text-xs transition ${n.unread ? 'bg-indigo-950/30 border-indigo-500/30' : 'bg-slate-950/40 border-slate-800/80'}`}>
                    <div className="font-semibold text-white flex items-center justify-between">
                      <span>{n.title}</span>
                      <span className="text-[10px] text-slate-500">{n.time}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{n.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 4. User Profile Avatar & Dropdown */}
        <div className="relative pl-2 border-l border-slate-800">
          <button
            onClick={() => { setProfileOpen(!profileOpen); setLangOpen(false); setNotifOpen(false); }}
            className="flex items-center gap-3 p-1 rounded-xl hover:bg-slate-800/60 transition"
          >
            <div className="relative">
              <img
                src="/assets/images/users/user-1.jpg"
                alt="Avatar"
                onError={(e: any) => { e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'; }}
                className="w-9 h-9 rounded-xl object-cover border border-slate-700 shadow-md"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900"></span>
            </div>
            <div className="text-left hidden lg:block">
              <div className="text-xs font-bold text-slate-200">{user?.name || 'Lead Architect'}</div>
              <div className="text-[10px] text-slate-400">{user?.role || 'Administrator'}</div>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500 hidden sm:block" />
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="p-3 border-b border-slate-800 mb-1">
                <div className="text-xs font-bold text-white">{user?.name || 'Lead Architect'}</div>
                <div className="text-[11px] text-slate-400">{user?.username || 'admin'} • Administrator</div>
              </div>

              <div className="p-1 space-y-1">
                <div className="px-3 py-1.5 rounded-xl text-xs text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Container Protected
                </div>
                <button
                  onClick={logout}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

    </header>
  );
};
