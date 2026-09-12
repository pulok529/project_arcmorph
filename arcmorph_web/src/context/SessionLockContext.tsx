import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

interface SessionLockContextType {
  isLocked: boolean;
  lockTimeoutMinutes: number;
  setLockTimeoutMinutes: (mins: number) => void;
  lockPin: string;
  pin: string;
  setLockPin: (newPin: string) => void;
  updatePin: (newPin: string) => void;
  clientIp: string;
  isOnline: boolean;
  lockSession: () => void;
  unlockSession: (enteredPin: string) => boolean;
}

const SessionLockContext = createContext<SessionLockContextType | undefined>(undefined);

export const SessionLockProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLocked, setIsLocked] = useState<boolean>(() => {
    return localStorage.getItem('ARCHMORPH_SESSION_LOCKED') === 'true';
  });

  const [lockTimeoutMinutes, setLockTimeoutMinutesState] = useState<number>(() => {
    const saved = localStorage.getItem('ARCHMORPH_LOCK_TIMEOUT');
    return saved ? parseInt(saved, 10) : 15;
  });

  const [lockPin, setLockPinState] = useState<string>(() => {
    return localStorage.getItem('ARCHMORPH_LOCK_PIN') || '1234';
  });

  const clientIp = '127.0.0.1 (Localhost Engine)';
  const [isOnline] = useState<boolean>(true);

  const lastActivityRef = useRef<number>(Date.now());
  const timerRef = useRef<number | null>(null);

  const setLockTimeoutMinutes = (mins: number) => {
    setLockTimeoutMinutesState(mins);
    localStorage.setItem('ARCHMORPH_LOCK_TIMEOUT', mins.toString());
  };

  const setLockPin = (newPin: string) => {
    setLockPinState(newPin);
    localStorage.setItem('ARCHMORPH_LOCK_PIN', newPin);
  };

  const lockSession = useCallback(() => {
    setIsLocked(true);
    localStorage.setItem('ARCHMORPH_SESSION_LOCKED', 'true');
  }, []);

  const unlockSession = (enteredPin: string): boolean => {
    if (enteredPin === lockPin) {
      setIsLocked(false);
      localStorage.removeItem('ARCHMORPH_SESSION_LOCKED');
      lastActivityRef.current = Date.now();
      return true;
    }
    return false;
  };

  // Activity Watchdog
  useEffect(() => {
    if (lockTimeoutMinutes <= 0) return; // 'Never'

    const handleActivity = () => {
      lastActivityRef.current = Date.now();
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('scroll', handleActivity);

    const checkInterval = setInterval(() => {
      if (isLocked) return;
      const elapsedMinutes = (Date.now() - lastActivityRef.current) / 60000;
      if (elapsedMinutes >= lockTimeoutMinutes) {
        lockSession();
      }
    }, 15000); // check every 15s

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      clearInterval(checkInterval);
    };
  }, [lockTimeoutMinutes, isLocked, lockSession]);

  return (
    <SessionLockContext.Provider
      value={{
        isLocked,
        lockTimeoutMinutes,
        setLockTimeoutMinutes,
        lockPin,
        pin: lockPin,
        setLockPin,
        updatePin: setLockPin,
        clientIp,
        isOnline,
        lockSession,
        unlockSession
      }}
    >
      {children}
    </SessionLockContext.Provider>
  );
};

export const useSessionLock = () => {
  const ctx = useContext(SessionLockContext);
  if (!ctx) throw new Error('useSessionLock must be used within SessionLockProvider');
  return ctx;
};
