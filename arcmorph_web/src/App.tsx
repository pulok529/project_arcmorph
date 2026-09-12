import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { SessionLockProvider } from './context/SessionLockContext';
import { TaskProvider } from './context/TaskContext';
import { ModelProvider } from './context/ModelContext';
import { OcrSessionProvider } from './context/OcrSessionContext';
import { NotificationProvider } from './context/NotificationContext';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import { AppLayout } from './components/layout/AppLayout';

import { LoginPage } from './pages/LoginPage';
import { LockScreenPage } from './pages/LockScreenPage';
import { DashboardPage } from './pages/DashboardPage';
import { ArchitectureGraphPage } from './pages/ArchitectureGraphPage';
import { OcrStudioPage } from './pages/OcrStudioPage';
import { TerminalPage } from './pages/TerminalPage';
import { MorphHubPage } from './pages/MorphHubPage';
import { NotificationHubPage } from './pages/NotificationHubPage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { SettingsPage } from './pages/SettingsPage';
import { ProfilePage } from './pages/ProfilePage';
import { UserManagementPage } from './pages/UserManagementPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { UploadPage } from './pages/UploadPage';
import { AiStudioPage } from './pages/AiStudioPage';
import { EmptyPage } from './pages/EmptyPage';

export function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SessionLockProvider>
          <TaskProvider>
            <ModelProvider>
              <OcrSessionProvider>
                <NotificationProvider>
                  <BrowserRouter>
                  <Routes>
                    {/* Public Cybernetic Auth Gateway */}
                    <Route path="/login" element={<LoginPage />} />

                    {/* Cybernetic Lock Screen (PIN Protected, Persists Active Background Tasks) */}
                    <Route path="/lockscreen" element={<LockScreenPage />} />

                    {/* Dedicated Full-Screen 2D/3D Architecture Topology Graph */}
                    <Route
                      path="/graph"
                      element={
                        <ProtectedRoute>
                          <ArchitectureGraphPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/architecture-graph"
                      element={
                        <ProtectedRoute>
                          <ArchitectureGraphPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/projects/:id/graph"
                      element={
                        <ProtectedRoute>
                          <ArchitectureGraphPage />
                        </ProtectedRoute>
                      }
                    />

                    {/* Protected ArcMorph Suite (Paces Template Architecture) */}
                    <Route
                      element={
                        <ProtectedRoute>
                          <AppLayout />
                        </ProtectedRoute>
                      }
                    >
                      <Route path="/" element={<DashboardPage />} />
                      <Route path="/ocr-studio" element={<OcrStudioPage />} />
                      <Route path="/terminal" element={<TerminalPage />} />
                      <Route path="/morph-hub" element={<MorphHubPage />} />
                      <Route path="/notifications" element={<NotificationHubPage />} />
                      <Route path="/search" element={<SearchResultsPage />} />
                      <Route path="/settings" element={<SettingsPage />} />
                      <Route path="/profile" element={<ProfilePage />} />
                      <Route path="/users" element={<UserManagementPage />} />
                      <Route path="/upload" element={<UploadPage />} />
                      <Route path="/ai-studio" element={<AiStudioPage />} />
                      <Route path="/projects/:id" element={<ProjectDetailPage />} />
                      <Route path="/pages/empty" element={<EmptyPage />} />
                    </Route>

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </BrowserRouter>
                </NotificationProvider>
              </OcrSessionProvider>
            </ModelProvider>
          </TaskProvider>
        </SessionLockProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
