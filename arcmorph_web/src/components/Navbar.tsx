import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Cpu, LogOut, Terminal, FolderKanban, PlusCircle, Brain, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  activeProjectName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView, activeProjectName }) => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Brand */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentView('catalog')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-bold text-lg text-white tracking-tight flex items-center gap-2">
              Universal AI Migration <span className="text-xs px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">Engine</span>
            </div>
            <div className="text-xs text-slate-400">Legacy Reverse-Engineering & Modernization</div>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 bg-slate-800/60 p-1 rounded-xl border border-slate-700/50">
          <button
            onClick={() => setCurrentView('upload')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              currentView === 'upload' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <PlusCircle className="w-4 h-4" />
            New Migration
          </button>

          <button
            onClick={() => setCurrentView('catalog')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              currentView === 'catalog' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <FolderKanban className="w-4 h-4" />
            Projects
          </button>

          <button
            onClick={() => setCurrentView('rules')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              currentView === 'rules' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Brain className="w-4 h-4 text-emerald-400" />
            AI Memory & Rules
          </button>
        </nav>

        {/* Right: GPU Status & User */}
        <div className="flex items-center space-x-4">
          
          {/* Hardware Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-emerald-950/40 border border-emerald-500/30 rounded-full text-xs text-emerald-400">
            <Cpu className="w-3.5 h-3.5" />
            <span className="font-semibold">NVIDIA RTX 3070</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>

          {/* User Profile & Logout */}
          <div className="flex items-center gap-3 pl-3 border-l border-slate-800">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-semibold text-slate-200">{user?.name || 'Architect'}</div>
              <div className="text-[10px] text-slate-400">{user?.role || 'Admin'}</div>
            </div>
            <button
              onClick={logout}
              title="Logout"
              className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
