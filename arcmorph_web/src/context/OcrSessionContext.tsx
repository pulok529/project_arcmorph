import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { playCyberChime } from '../utils/audioChime';

export interface OcrDocument {
  id: string;
  name: string;
  size: string;
  type: string;
  uploadedAt: string;
  extractedMarkdown?: string;
  extractedJson?: Record<string, any>;
  status: 'processing' | 'completed' | 'error';
}

export interface OcrProjectSession {
  id: string;
  createdAt: string;
  documents: OcrDocument[];
  isSaved: boolean;
  notes?: string;
}

interface OcrSessionContextType {
  activeSession: OcrProjectSession;
  hasUnsavedWork: boolean;
  addDocumentToSession: (doc: OcrDocument) => void;
  saveCurrentProject: (notes?: string) => void;
  discardCurrentProject: () => void;
  createNewProject: () => void;
  savedVaultProjects: OcrProjectSession[];
  loadVaultProject: (id: string) => void;
  watchdogTriggered: boolean;
  dismissWatchdog: () => void;
}

const OcrSessionContext = createContext<OcrSessionContextType | undefined>(undefined);

export const OcrSessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSession, setActiveSession] = useState<OcrProjectSession>(() => {
    return {
      id: `ocrproject_${Date.now()}`,
      createdAt: new Date().toISOString(),
      documents: [],
      isSaved: false
    };
  });

  const [savedVaultProjects, setSavedVaultProjects] = useState<OcrProjectSession[]>(() => {
    const s = localStorage.getItem('ARCHMORPH_OCR_VAULT');
    return s ? JSON.parse(s) : [];
  });

  const [watchdogTriggered, setWatchdogTriggered] = useState<boolean>(false);
  const lastOcrActivityRef = useRef<number>(Date.now());

  const hasUnsavedWork = activeSession.documents.length > 0 && !activeSession.isSaved;

  const addDocumentToSession = (doc: OcrDocument) => {
    lastOcrActivityRef.current = Date.now();
    setActiveSession(prev => ({
      ...prev,
      documents: [...prev.documents, doc],
      isSaved: false
    }));
  };

  const saveCurrentProject = (notes?: string) => {
    const updated = {
      ...activeSession,
      isSaved: true,
      notes: notes || 'Finalized OCR Project Vault Extraction'
    };
    const newVault = [updated, ...savedVaultProjects.filter(p => p.id !== updated.id)];
    setSavedVaultProjects(newVault);
    localStorage.setItem('ARCHMORPH_OCR_VAULT', JSON.stringify(newVault));
    setActiveSession({
      id: `ocrproject_${Date.now()}`,
      createdAt: new Date().toISOString(),
      documents: [],
      isSaved: false
    });
    setWatchdogTriggered(false);
  };

  const discardCurrentProject = () => {
    setActiveSession({
      id: `ocrproject_${Date.now()}`,
      createdAt: new Date().toISOString(),
      documents: [],
      isSaved: false
    });
    setWatchdogTriggered(false);
    lastOcrActivityRef.current = Date.now();
  };

  const createNewProject = () => {
    setActiveSession({
      id: `ocrproject_${Date.now()}`,
      createdAt: new Date().toISOString(),
      documents: [],
      isSaved: false
    });
    setWatchdogTriggered(false);
    lastOcrActivityRef.current = Date.now();
  };

  const loadVaultProject = (id: string) => {
    const found = savedVaultProjects.find(p => p.id === id);
    if (found) {
      setActiveSession(found);
    }
  };

  const dismissWatchdog = () => {
    setWatchdogTriggered(false);
    lastOcrActivityRef.current = Date.now();
  };

  // 3-Minute Inactivity Watchdog
  useEffect(() => {
    const interval = setInterval(() => {
      if (hasUnsavedWork && !watchdogTriggered) {
        const elapsed = (Date.now() - lastOcrActivityRef.current) / 60000;
        if (elapsed >= 3.0) {
          setWatchdogTriggered(true);
          playCyberChime();
        }
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [hasUnsavedWork, watchdogTriggered]);

  return (
    <OcrSessionContext.Provider
      value={{
        activeSession,
        hasUnsavedWork,
        addDocumentToSession,
        saveCurrentProject,
        discardCurrentProject,
        createNewProject,
        savedVaultProjects,
        loadVaultProject,
        watchdogTriggered,
        dismissWatchdog
      }}
    >
      {children}
    </OcrSessionContext.Provider>
  );
};

export const useOcrSession = () => {
  const ctx = useContext(OcrSessionContext);
  if (!ctx) throw new Error('useOcrSession must be used within OcrSessionProvider');
  return ctx;
};
