import React, { useState, useEffect } from 'react';
import { Brain, Plus, Trash2, Key, CheckCircle, AlertCircle, Shield, Sparkles } from 'lucide-react';
import { AiRule } from '../types';

export const RulesEditor: React.FC = () => {
  const [rules, setRules] = useState<AiRule[]>([]);
  const [newRule, setNewRule] = useState('');
  const [category, setCategory] = useState('Architecture');
  
  // API Key Tester
  const [provider, setProvider] = useState('anthropic');
  const [apiKey, setApiKey] = useState('');
  const [testResult, setTestResult] = useState<any>(null);
  const [testing, setTesting] = useState(false);

  const fetchRules = async () => {
    try {
      const res = await fetch('/api/rules');
      const data = await res.json();
      if (data.success) setRules(data.rules);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchRules();
  }, []);

  const addRule = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRule.trim()) return;

    try {
      const res = await fetch('/api/rules', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rule: newRule, category })
      });
      const data = await res.json();
      if (data.success) {
        setNewRule('');
        fetchRules();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const deleteRule = async (id: string) => {
    try {
      await fetch(`/api/rules/${id}`, { method: 'DELETE' });
      fetchRules();
    } catch (e) {
      console.error(e);
    }
  };

  const testApiKey = async () => {
    if (!apiKey) return;
    setTesting(true);
    setTestResult(null);

    try {
      const res = await fetch('/api/ai/test-key', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ provider, apiKey })
      });
      const data = await res.json();
      setTestResult(data.result);
    } catch (e: any) {
      setTestResult({ valid: false, error: e.message, statusMessage: `🔴 Network Error: ${e.message}` });
    } finally {
      setTesting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
          <Brain className="w-7 h-7 text-emerald-400" />
          Continuous Learning Memory & AI Rulebook
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Rules and preferences recorded by the <strong className="text-indigo-400">Developer Shadow (Git Diff Observer)</strong> and your custom directives. The AI automatically adheres to these rules on every generation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Rules List & Add Rule */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Add Rule Form */}
          <form onSubmit={addRule} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <Plus className="w-4 h-4 text-emerald-400" />
              Add Permanent Developer Preference / Rule
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="Architecture">Architecture</option>
                <option value="Database">Database</option>
                <option value="Reporting">Reporting</option>
                <option value="Frontend">Frontend</option>
                <option value="Coding Style">Coding Style</option>
              </select>

              <input
                type="text"
                placeholder="e.g. Always use Mapster instead of AutoMapper..."
                value={newRule}
                onChange={(e) => setNewRule(e.target.value)}
                className="sm:col-span-3 bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-lg transition"
            >
              Save Rule to AI Memory
            </button>
          </form>

          {/* Rules List */}
          <div className="space-y-3">
            {rules.map((r) => (
              <div
                key={r.id}
                className="p-4 bg-slate-900/90 border border-slate-800 rounded-xl flex items-start justify-between gap-4 hover:border-slate-700 transition"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {r.category}
                    </span>
                    <span className="text-[10px] text-slate-500">Source: {r.source}</span>
                  </div>
                  <div className="text-xs text-slate-200 font-medium leading-relaxed">{r.rule}</div>
                </div>

                <button
                  onClick={() => deleteRule(r.id)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-800 transition"
                  title="Delete Rule"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

        </div>

        {/* Right: Cloud API Key Diagnostic Tester */}
        <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5 self-start">
          <div>
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <Key className="w-4 h-4 text-amber-400" />
              Cloud AI API Diagnostic Tester
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Add cloud keys (Anthropic Claude / OpenAI / Gemini). The tool immediately fires a diagnostic validation test.
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-[11px] font-semibold text-slate-300 block mb-1">Provider</label>
              <select
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="anthropic">Anthropic Claude 3.7 Sonnet</option>
                <option value="openai">OpenAI GPT-4o / o3-mini</option>
                <option value="gemini">Google Gemini 2.0 Flash / Pro</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-300 block mb-1">API Key</label>
              <input
                type="password"
                placeholder="sk-ant-... or sk-..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <button
              onClick={testApiKey}
              disabled={testing || !apiKey}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-bold rounded-xl shadow-lg transition"
            >
              {testing ? 'Running Diagnostic Probe...' : 'Test & Validate Key'}
            </button>
          </div>

          {/* Test Diagnostic Result */}
          {testResult && (
            <div
              className={`p-3.5 rounded-xl border text-xs space-y-1.5 ${
                testResult.valid
                  ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-200'
                  : 'bg-rose-950/40 border-rose-500/30 text-rose-200'
              }`}
            >
              <div className="font-bold flex items-center gap-1.5">
                {testResult.valid ? (
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                )}
                {testResult.statusMessage}
              </div>
              {testResult.valid && (
                <div className="text-[10px] text-slate-300 space-y-0.5 pt-1 border-t border-emerald-500/20">
                  <div><strong>Model:</strong> {testResult.provider}</div>
                  <div><strong>Latency:</strong> {testResult.latencyMs}ms</div>
                  <div><strong>Context Window:</strong> {testResult.contextWindow}</div>
                </div>
              )}
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
