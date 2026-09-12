import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface SubagentTask {
  id: string;
  name: string;
  role: string;
  status: 'running' | 'paused' | 'completed' | 'stopped';
  progress: number;
  tokensProcessed: number;
  logs: string[];
  startTime: string;
}

export interface PipelineTask {
  id: string;
  title: string;
  type: string;
  status: 'running' | 'paused' | 'completed' | 'quarantined';
  progress: number;
  estimatedRemaining: string;
  currentStep: string;
  subagents: SubagentTask[];
  savedAt?: string;
  quarantinedUntil?: string;
}

interface TaskContextType {
  activeTasks: PipelineTask[];
  savedTasks: PipelineTask[];
  quarantinedTasks: PipelineTask[];
  startMorphPipeline: (fileNames: string[]) => string;
  pauseSubagent: (subagentId: string) => void;
  stopSubagent: (subagentId: string) => void;
  saveAndCheckpointAll: () => void;
  stopAndQuarantineAll: () => void;
  resumeSavedTask: (taskId: string) => void;
  restoreQuarantinedTask: (taskId: string) => void;
  hasActiveTasks: boolean;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTasks, setActiveTasks] = useState<PipelineTask[]>(() => {
    // Seed an initial running modernization task for instant realism
    return [
      {
        id: 'task_ast_bornomala',
        title: 'AST Architecture Deconstruction (Bornomala ERP)',
        type: 'AST Parser',
        status: 'running',
        progress: 68,
        estimatedRemaining: '45s',
        currentStep: 'Analyzing cross-tier ADO.NET SQL query bounds in StudentAdmission.aspx.cs',
        subagents: [
          {
            id: 'sub_ast_1',
            name: 'Subagent-AST-Parser',
            role: 'Roslyn Code Synthesizer',
            status: 'running',
            progress: 74,
            tokensProcessed: 18450,
            logs: [
              '[INFO] Initialized Roslyn CSharpCompilation for Bornomala.BLL.dll',
              '[AST] Traversed 1,288 SyntaxTree root nodes',
              '[BOUND] Identified 44 unindexed SQL queries referencing tblStudentInfo',
              '[STREAM] Emitting microservice boundary candidate: AcademicService'
            ],
            startTime: new Date(Date.now() - 120000).toLocaleTimeString()
          },
          {
            id: 'sub_mig_2',
            name: 'Subagent-DB-Migrator',
            role: 'PostgreSQL DDL Compiler',
            status: 'running',
            progress: 58,
            tokensProcessed: 9240,
            logs: [
              '[SCHEMA] Reading MSSQL table schema for dbo.tblFeesCollection',
              '[TYPE] Mapped IDENTITY(1,1) -> BIGSERIAL',
              '[DDL] Synthesized PostgreSQL migration file 001_create_accounts_invoices.sql'
            ],
            startTime: new Date(Date.now() - 60000).toLocaleTimeString()
          }
        ]
      }
    ];
  });

  const [savedTasks, setSavedTasks] = useState<PipelineTask[]>(() => {
    const s = localStorage.getItem('ARCHMORPH_SAVED_TASKS');
    return s ? JSON.parse(s) : [];
  });

  const [quarantinedTasks, setQuarantinedTasks] = useState<PipelineTask[]>(() => {
    const q = localStorage.getItem('ARCHMORPH_QUARANTINED_TASKS');
    return q ? JSON.parse(q) : [];
  });

  // Background ticker that progresses active subagents
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTasks(prev =>
        prev.map(task => {
          if (task.status !== 'running') return task;
          const nextProg = Math.min(task.progress + 1, 100);
          const updatedSub = task.subagents.map(sub => {
            if (sub.status !== 'running') return sub;
            return {
              ...sub,
              progress: Math.min(sub.progress + 1, 100),
              tokensProcessed: sub.tokensProcessed + Math.floor(Math.random() * 80 + 20)
            };
          });
          return {
            ...task,
            progress: nextProg,
            subagents: updatedSub
          };
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const startMorphPipeline = (fileNames: string[]): string => {
    const newId = `task_morph_${Date.now()}`;
    const newTask: PipelineTask = {
      id: newId,
      title: `Batch Architecture Morph (${fileNames.length} files)`,
      type: 'Batch Morph Pipeline',
      status: 'running',
      progress: 5,
      estimatedRemaining: '2m 10s',
      currentStep: `Staging ${fileNames.slice(0, 2).join(', ')}${fileNames.length > 2 ? '...' : ''}`,
      subagents: [
        {
          id: `sub_agent_${Date.now()}_1`,
          name: 'Subagent-Code-Morpher',
          role: 'Refactoring & Decoupling',
          status: 'running',
          progress: 10,
          tokensProcessed: 1200,
          logs: [
            `[STAGING] Batch of ${fileNames.length} files received`,
            `[PARSE] Lexical tokenization dispatched for ${fileNames[0] || 'code'}`
          ],
          startTime: new Date().toLocaleTimeString()
        }
      ]
    };
    setActiveTasks(prev => [newTask, ...prev]);
    return newId;
  };

  const pauseSubagent = (subagentId: string) => {
    setActiveTasks(prev =>
      prev.map(t => ({
        ...t,
        subagents: t.subagents.map(s => (s.id === subagentId ? { ...s, status: s.status === 'paused' ? 'running' : 'paused' } : s))
      }))
    );
  };

  const stopSubagent = (subagentId: string) => {
    setActiveTasks(prev =>
      prev.map(t => ({
        ...t,
        subagents: t.subagents.map(s => (s.id === subagentId ? { ...s, status: 'stopped' } : s))
      }))
    );
  };

  const saveAndCheckpointAll = () => {
    const now = new Date().toISOString();
    const toSave = activeTasks.map(t => ({ ...t, status: 'paused' as const, savedAt: now }));
    const combined = [...toSave, ...savedTasks];
    setSavedTasks(combined);
    setActiveTasks([]);
    localStorage.setItem('ARCHMORPH_SAVED_TASKS', JSON.stringify(combined));
  };

  const stopAndQuarantineAll = () => {
    const expiryDate = new Date(Date.now() + 15 * 86400000).toLocaleDateString();
    const toQuarantine = activeTasks.map(t => ({
      ...t,
      status: 'quarantined' as const,
      quarantinedUntil: expiryDate
    }));
    const combined = [...toQuarantine, ...quarantinedTasks];
    setQuarantinedTasks(combined);
    setActiveTasks([]);
    localStorage.setItem('ARCHMORPH_QUARANTINED_TASKS', JSON.stringify(combined));
  };

  const resumeSavedTask = (taskId: string) => {
    const target = savedTasks.find(t => t.id === taskId);
    if (!target) return;
    setSavedTasks(prev => prev.filter(t => t.id !== taskId));
    setActiveTasks(prev => [{ ...target, status: 'running' }, ...prev]);
  };

  const restoreQuarantinedTask = (taskId: string) => {
    const target = quarantinedTasks.find(t => t.id === taskId);
    if (!target) return;
    setQuarantinedTasks(prev => prev.filter(t => t.id !== taskId));
    setActiveTasks(prev => [{ ...target, status: 'running' }, ...prev]);
  };

  return (
    <TaskContext.Provider
      value={{
        activeTasks,
        savedTasks,
        quarantinedTasks,
        startMorphPipeline,
        pauseSubagent,
        stopSubagent,
        saveAndCheckpointAll,
        stopAndQuarantineAll,
        resumeSavedTask,
        restoreQuarantinedTask,
        hasActiveTasks: activeTasks.length > 0
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error('useTask must be used within TaskProvider');
  return ctx;
};

export const useTasks = useTask;

