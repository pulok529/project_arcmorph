import React, { createContext, useContext, useState, useEffect } from 'react';

export interface AiModel {
  id: string;
  name: string;
  provider: 'local' | 'cloud' | 'mcp';
  type?: 'local' | 'cloud' | 'mcp';
  endpoint: string;
  isOnline: boolean;
  status?: 'online' | 'offline';
  speedRating: string;
  latency?: string;
  contextLength: string;
  contextWindow?: string;
  vram?: string;
  isDefault?: boolean;
}

export type ModelEntity = AiModel;

interface ModelContextType {
  models: AiModel[];
  activeModelId: string;
  setActiveModelId: (id: string) => void;
  activeModel: AiModel | undefined;
  addModel: (model: any) => void;
  deleteModel: (id: string) => void;
  removeModel: (id: string) => void;
  toggleModelStatus: (id: string) => void;
  switchModel: (id: string) => boolean;
}

const ModelContext = createContext<ModelContextType | undefined>(undefined);

const INITIAL_MODELS: AiModel[] = [
  {
    id: 'qwen2.5-3b',
    name: 'Qwen2.5-3B-Instruct (Cloud-Speed Orchestrator)',
    provider: 'local',
    endpoint: 'http://localhost:11434/api/generate',
    isOnline: true,
    speedRating: '145 tokens/s',
    contextLength: '32k',
    isDefault: true
  },
  {
    id: 'qwen2.5-coder-14b',
    name: 'Qwen2.5-Coder-14B (Architecture Modernizer)',
    provider: 'local',
    endpoint: 'http://localhost:8000/v1/chat/completions',
    isOnline: true,
    speedRating: '82 tokens/s',
    contextLength: '64k'
  },
  {
    id: 'qwen2.5-vl-7b',
    name: 'Qwen2.5-VL-7B (Document & Passport OCR)',
    provider: 'local',
    endpoint: 'http://localhost:11434/api/chat',
    isOnline: true,
    speedRating: '60 tokens/s',
    contextLength: '32k'
  },
  {
    id: 'llama-3.2-3b',
    name: 'Llama-3.2-3B-Instruct (Meta Compact)',
    provider: 'local',
    endpoint: 'http://localhost:11434/api/generate',
    isOnline: true,
    speedRating: '150 tokens/s',
    contextLength: '128k'
  },
  {
    id: 'claude-3-7-sonnet',
    name: 'Claude 3.7 Sonnet (Anthropic Cloud)',
    provider: 'cloud',
    endpoint: 'https://api.anthropic.com/v1/messages',
    isOnline: true,
    speedRating: 'Cloud Dynamic',
    contextLength: '200k'
  }
];

export const ModelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [models, setModels] = useState<AiModel[]>(() => {
    const saved = localStorage.getItem('ARCHMORPH_MODELS');
    return saved ? JSON.parse(saved) : INITIAL_MODELS;
  });

  const [activeModelId, setActiveModelId] = useState<string>(() => {
    return localStorage.getItem('ARCHMORPH_ACTIVE_MODEL') || 'qwen2.5-3b';
  });

  useEffect(() => {
    localStorage.setItem('ARCHMORPH_MODELS', JSON.stringify(models));
  }, [models]);

  useEffect(() => {
    localStorage.setItem('ARCHMORPH_ACTIVE_MODEL', activeModelId);
  }, [activeModelId]);

  const activeModel = models.find(m => m.id === activeModelId) || models[0];

  const addModel = (modelData: Omit<AiModel, 'id'>) => {
    const newId = modelData.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const newModel: AiModel = { ...modelData, id: newId };
    setModels(prev => [...prev, newModel]);
  };

  const deleteModel = (id: string) => {
    setModels(prev => prev.filter(m => m.id !== id));
    if (activeModelId === id) {
      setActiveModelId(models[0]?.id || 'qwen2.5-3b');
    }
  };

  const switchModel = (idOrName: string): boolean => {
    const found = models.find(
      m => m.id.toLowerCase() === idOrName.toLowerCase() || m.name.toLowerCase().includes(idOrName.toLowerCase())
    );
    if (found) {
      setActiveModelId(found.id);
      return true;
    }
    return false;
  };

  const toggleModelStatus = (id: string) => {
    setModels(prev =>
      prev.map(m => (m.id === id ? { ...m, isOnline: !m.isOnline } : m))
    );
  };

  return (
    <ModelContext.Provider
      value={{
        models,
        activeModelId,
        setActiveModelId,
        activeModel,
        addModel,
        deleteModel,
        removeModel: deleteModel,
        toggleModelStatus,
        switchModel
      }}
    >
      {children}
    </ModelContext.Provider>
  );
};

export const useModel = () => {
  const ctx = useContext(ModelContext);
  if (!ctx) throw new Error('useModel must be used within ModelProvider');
  return ctx;
};

export const useModels = useModel;

