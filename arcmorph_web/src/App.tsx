import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import { AppLayout } from './components/layout/AppLayout';

import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { MorphHubPage } from './pages/MorphHubPage';
import { UploadPage } from './pages/UploadPage';
import { TerminalPage } from './pages/TerminalPage';
import { AiStudioPage } from './pages/AiStudioPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ArchitectureGraphPage } from './pages/ArchitectureGraphPage';
import { EmptyPage } from './pages/EmptyPage';

export function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Authentication Gateway */}
            <Route path="/login" element={<LoginPage />} />

            {/* Dedicated Full-Screen Architecture Topology Graph */}
            <Route
              path="/projects/:id/graph"
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

            {/* Protected ArcMorph Modernization Platform Suite */}
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/" element={<DashboardPage />} />
              <Route path="/morph-hub" element={<MorphHubPage />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/terminal" element={<TerminalPage />} />
              <Route path="/ai-studio" element={<AiStudioPage />} />
              <Route path="/projects/:id" element={<ProjectDetailPage />} />
              <Route path="/pages/empty" element={<EmptyPage />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
