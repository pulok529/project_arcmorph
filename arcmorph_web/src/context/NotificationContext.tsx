import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { playCyberChime } from '../utils/audioChime';

export interface AppNotification {
  id: string;
  title: string;
  category: 'AI Feedback' | 'Audit Blueprint' | 'Process Alert' | 'System';
  message: string;
  createdAt: string;
  dateStr: string;
  isUnread: boolean;
  score?: number;
  critiqueDetails?: string;
  actionPayload?: string;
}

const INITIAL_NOTIFICATIONS: AppNotification[] = [
  {
    id: 'notif_1',
    title: 'External AI Architectural Feedback Ingested',
    category: 'AI Feedback',
    message: 'Claude 3.7 Sonnet completed deep evaluation of Bornomala Monolith ERP.',
    createdAt: '10 mins ago',
    dateStr: '2026-09-12',
    isUnread: true,
    score: 9.2,
    critiqueDetails: `### Claude 3.7 Sonnet Architectural Assessment Report
- **Overall Modernization Feasibility**: 9.2 / 10
- **Identified Monolith Anti-Patterns**:
  1. Direct database queries inside ASPX code-behind without repository abstraction.
  2. Heavy coupling between AttendanceWorker and StudentAdmission database tables.
- **Recommended Strangler Pattern Strategy**:
  1. Extract AcademicService as independent Go/ASP.NET Core microservice.
  2. Migrate SQL Server identity columns to PostgreSQL BigSerial.
  3. Deploy Outbox Pattern for payment event publishing.`,
    actionPayload: 'academic-service-strangler'
  },
  {
    id: 'notif_2',
    title: 'Tool Audit Blueprint Generated',
    category: 'Audit Blueprint',
    message: 'Architecture Topology Graph generated decoupling plan for StudentAdmission.aspx',
    createdAt: '1 hour ago',
    dateStr: '2026-09-12',
    isUnread: true,
    critiqueDetails: `### Evolutionary Blueprint Log #BP-17890
- **Action**: Microservice Decoupling Generation
- **Target Entity**: StudentAdmission.aspx
- **Fan-Out Dependencies**: tblStudentInfo, tblStudentSubjectMapping, StudentService
- **Target Container**: academic-service (:8081)`
  },
  {
    id: 'notif_3',
    title: 'Unsaved OCR Session Confirmation Pending',
    category: 'Process Alert',
    message: 'Work session in ocrproject_1789214690 requires saving or discarding.',
    createdAt: '2 hours ago',
    dateStr: '2026-09-12',
    isUnread: true,
    critiqueDetails: `### Unsaved OCR Work Diagnostic
- **Session ID**: ocrproject_1789214690
- **Files Staged**: Bangladesh_Passport_A02828950.jpg (Extracted: Name, Number, MRZ)
- **Status**: Temporary staged in temp_uploads/`
  },
  {
    id: 'notif_4',
    title: 'Docker Image arcmorph:web Compiled Successfully',
    category: 'System',
    message: 'Production multi-stage build completed in 25.1s on port 3005.',
    createdAt: 'Yesterday',
    dateStr: '2026-09-11',
    isUnread: false,
    critiqueDetails: `### System Compilation Log
- **Container**: project_arcmorph
- **Status**: Healthy (Port 3005:80)
- **Nginx Engine**: Version 1.31.4 Alpine`
  }
];

interface NotificationContextType {
  notifications: AppNotification[];
  unreadCount: number;
  hasNewNotificationTrigger: boolean;
  addNotification: (notif: Omit<AppNotification, 'id' | 'createdAt' | 'isUnread'>) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  deleteNotification: (id: string) => void;
  triggerSampleNotification: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<AppNotification[]>(() => {
    try {
      const stored = localStorage.getItem('ARCMORPH_NOTIFICATIONS');
      if (stored) return JSON.parse(stored);
    } catch {}
    return INITIAL_NOTIFICATIONS;
  });

  const [hasNewNotificationTrigger, setHasNewNotificationTrigger] = useState(false);

  useEffect(() => {
    localStorage.setItem('ARCMORPH_NOTIFICATIONS', JSON.stringify(notifications));
  }, [notifications]);

  const unreadCount = notifications.filter(n => n.isUnread).length;

  const addNotification = useCallback((notif: Omit<AppNotification, 'id' | 'createdAt' | 'isUnread'>) => {
    const newNotif: AppNotification = {
      ...notif,
      id: `notif_${Date.now()}`,
      createdAt: 'Just now',
      isUnread: true
    };

    setNotifications(prev => [newNotif, ...prev]);

    // PLAY SOUND STRICTLY ON INCOMING NOTIFICATION!
    playCyberChime();

    // Trigger soundwave animation for 10 seconds
    setHasNewNotificationTrigger(true);
    setTimeout(() => {
      setHasNewNotificationTrigger(false);
    }, 10000);
  }, []);

  const markAsRead = useCallback((id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isUnread: false } : n));
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications(prev => prev.map(n => ({ ...n, isUnread: false })));
  }, []);

  const deleteNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const triggerSampleNotification = useCallback(() => {
    addNotification({
      title: 'CQRS Decoupling Pipeline Verified',
      category: 'Process Alert',
      message: 'Background subagent verified zero circular dependencies in StudentAdmission.',
      dateStr: new Date().toISOString().split('T')[0],
      critiqueDetails: 'Automated verification pass: 0 AST violations, clean Clean Architecture boundaries maintained.'
    });
  }, [addNotification]);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        hasNewNotificationTrigger,
        addNotification,
        markAsRead,
        markAllAsRead,
        deleteNotification,
        triggerSampleNotification
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = (): NotificationContextType => {
  const ctx = useContext(NotificationContext);
  if (!ctx) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return ctx;
};
