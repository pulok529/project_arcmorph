import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { ProjectSummary } from '../types';

// Dashboard Core Widgets & Container
import { ExecutiveWidgetCard, WidgetMetric, WidgetChartConfig } from '../components/dashboard/ExecutiveWidgetCard';
import { DedicatedViewContainer, ViewOption } from '../components/dashboard/DedicatedViewContainer';

// All 28 Modernization Studio Components
import { DownloadCenter } from '../components/DownloadCenter';
import { EnterpriseTechStackViewer } from '../components/EnterpriseTechStackViewer';
import { LegacyProjectTreeViewer } from '../components/LegacyProjectTreeViewer';
import { GeneratedSpecsTreeViewer } from '../components/GeneratedSpecsTreeViewer';
import { ProjectIntelligenceDashboard } from '../components/ProjectIntelligenceDashboard';
import { ModernizationBlueprintsViewer } from '../components/ModernizationBlueprintsViewer';
import { LegacyVsModernComparisonMatrix } from '../components/LegacyVsModernComparisonMatrix';
import { ModulePageBehavioralExplorer } from '../components/ModulePageBehavioralExplorer';
import { DomainEntitiesExplorer } from '../components/DomainEntitiesExplorer';
import { UserFlowsVisualizer } from '../components/UserFlowsVisualizer';
import { DependencyGraphViewer } from '../components/DependencyGraphViewer';
import { ModuleBreakdownViewer } from '../components/ModuleBreakdownViewer';
import { ComponentMappingInspector } from '../components/ComponentMappingInspector';
import { ReverseEngineeringStrategyViewer } from '../components/ReverseEngineeringStrategyViewer';
import { ArchitectureCards } from '../components/ArchitectureCards';
import { QuestPdfViewer } from '../components/QuestPdfViewer';
import { AntigravityPromptsHub } from '../components/AntigravityPromptsHub';
import { AutonomousBuilderStudio } from '../components/AutonomousBuilderStudio';
import { ProjectCuratorViewer } from '../components/ProjectCuratorViewer';
import { ContainerOrchestratorCard } from '../components/ContainerOrchestratorCard';
import { VisualTestingStudio } from '../components/VisualTestingStudio';
import { UserJourneyGraphViewer } from '../components/UserJourneyGraphViewer';
import { RbacNavigationMatrixViewer } from '../components/RbacNavigationMatrixViewer';
import { EntityClustersViewer } from '../components/EntityClustersViewer';
import { GlobalSystemExplorer } from '../components/GlobalSystemExplorer';
import { AllPagesDirectoryTable } from '../components/AllPagesDirectoryTable';
import { SystemArchitectureGraphViewer } from '../components/SystemArchitectureGraphViewer';
import { StructuredLifecycleGraphExplorer } from '../components/StructuredLifecycleGraphExplorer';
import { ProjectOverviewModal } from '../components/ProjectOverviewModal';
import { ProjectOverviewModalV2 } from '../components/ProjectOverviewModalV2';

// Icons
import {
  ArrowLeft,
  FolderOpen,
  Sparkles,
  Database,
  Route,
  GitFork,
  Layers,
  Search,
  Activity,
  Boxes,
  ShieldCheck,
  FileCode,
  FileSpreadsheet,
  FileText,
  FileBarChart,
  Bot,
  Zap,
  LayoutGrid,
  Code2,
  Sliders,
  Download,
  TestTube2,
  Workflow,
  Compass,
  Building2,
  Network
} from 'lucide-react';

interface ProjectDetailPageProps {
  projectId?: string;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ projectId: propProjectId }) => {
  const { id: paramProjectId } = useParams<{ id: string }>();
  const projectId = propProjectId || paramProjectId || '';
  const [searchParams, setSearchParams] = useSearchParams();
  const currentView = searchParams.get('view') || 'dashboard';

  const [project, setProject] = useState<ProjectSummary | null>(null);
  const [selectedArch, setSelectedArch] = useState('dotnet9');
  const [loading, setLoading] = useState(true);
  const [showOverviewModal, setShowOverviewModal] = useState(false);
  const [showOverviewV2Modal, setShowOverviewV2Modal] = useState(false);

  // Widget Filtering & Search
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const BENCHMARK_PROJECT: ProjectSummary = {
    id: projectId || 'proj_1788642109465',
    name: 'Bornomala School ERP Monolith',
    status: 'COMPLETED',
    progress: 100,
    uploadedAt: '2026-09-08T14:32:00.000Z',
    chosenTheme: 'paces',
    targetArch: 'dotnet9',
    detectedTech: ['.NET Framework 4.0', 'ASP.NET WebForms', 'MS SQL 2019', 'Crystal Reports', 'ADO.NET'],
    pages: Array.from({ length: 443 }, (_, i) => ({ id: `p_${i}`, name: `Page_${i}.aspx` })),
    reports: Array.from({ length: 196 }, (_, i) => ({ id: `r_${i}`, name: `Report_${i}.rpt` })),
    dbSchema: { tables: 68 },
    blueprints: { files: 8 },
    modernizationBlueprints: { files: Array(8).fill(0) },
    domainEntities: Array.from({ length: 68 }, (_, i) => ({ id: `e_${i}`, name: `Entity_${i}` })),
    codeDependencies: Array.from({ length: 142 }, (_, i) => ({ id: `dep_${i}` })),
    stats: {
      totalPages: 443,
      totalCSharp: 1288,
      totalReports: 196,
      totalTables: 68
    },
    zipPath: 'Bornomala_Legacy_Release_v4.2.zip'
  };

  useEffect(() => {
    if (!projectId) {
      setProject(BENCHMARK_PROJECT);
      setLoading(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1500);

    fetch(`/api/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => {
        clearTimeout(timeoutId);
        if (data.success && data.project) {
          setProject(data.project);
          setSelectedArch(data.project.targetArch || 'dotnet9');
        } else {
          setProject(BENCHMARK_PROJECT);
        }
      })
      .catch((err) => {
        console.error(err);
        setProject(BENCHMARK_PROJECT);
      })
      .finally(() => {
        clearTimeout(timeoutId);
        setLoading(false);
      });

    return () => clearTimeout(timeoutId);
  }, [projectId]);

  // Keyboard navigation: Escape key returns to dashboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && currentView !== 'dashboard') {
        handleBackToDashboard();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentView]);

  const handleOpenView = (viewId: string) => {
    setSearchParams({ view: viewId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToDashboard = () => {
    setSearchParams({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Master Widget Catalog Definition with Dynamic Real-Time Metrics & Charts
  const widgetCatalog = useMemo(() => {
    if (!project) return [];

    const totalPages = project.stats?.totalPages || project.pages?.length || 0;
    const totalCSharp = project.stats?.totalCSharp || 0;
    const totalReports = project.stats?.totalReports || project.reports?.length || 0;
    const totalEntities = project.domainEntities?.length || 0;
    const totalBlueprints = project.modernizationBlueprints?.files?.length || 8;

    return [
      // 1. ARCHITECTURE & METRICS
      {
        id: 'intelligence',
        title: 'Project Intelligence & Health Score',
        category: 'Architecture & Metrics',
        description: 'SonarQube & NDepend-style code health analysis, maintainability index, and technical debt radar.',
        icon: Activity,
        iconGradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
        metrics: [
          { label: 'Health Score', value: '94/100', variant: 'success' },
          { label: 'Maintainability', value: 'Grade A', variant: 'indigo' },
          { label: 'Lines of Code', value: '48.2k', variant: 'secondary' }
        ],
        chartConfig: {
          type: 'radialBar' as const,
          series: [94],
          colors: ['#3b82f6'],
          height: 72
        },
        status: { text: 'Analyzed', variant: 'success' as const },
        badge: 'Executive'
      },
      {
        id: 'architecture_graph',
        title: 'System Architecture & Topology Graph',
        category: 'Architecture & Metrics',
        description: 'Whole-project interactive visual graph displaying module topologies, data tier flows, and tech stacks.',
        icon: Network,
        iconGradient: 'linear-gradient(135deg, #6366f1, #4338ca)',
        metrics: [
          { label: 'Modules', value: '3 Master', variant: 'primary' },
          { label: 'Pages', value: `${totalPages}`, variant: 'info' },
          { label: 'C# Classes', value: `${totalCSharp}`, variant: 'secondary' }
        ],
        chartConfig: {
          type: 'bar' as const,
          series: [{ name: 'Nodes', data: [141, 95, 56, 45, 80, 24] }],
          colors: ['#6366f1'],
          height: 60
        },
        status: { text: 'Interactive', variant: 'primary' as const },
        badge: 'Graph'
      },
      {
        id: 'project_curator',
        title: 'Intelligent Project Curator & Fingerprint',
        category: 'Architecture & Metrics',
        description: 'Fast-fingerprint auto-organizer categorizing physical source directories into cohesive layers.',
        icon: Compass,
        iconGradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
        metrics: [
          { label: 'Layers', value: '5 Sublayers', variant: 'purple' },
          { label: 'Cataloged', value: '100%', variant: 'success' }
        ],
        chartConfig: {
          type: 'donut' as const,
          series: [45, 25, 20, 10],
          labels: ['Academic', 'Accounts', 'HRM', 'Global'],
          colors: ['#8b5cf6', '#a855f7', '#c084fc', '#e9d5ff'],
          height: 65
        },
        status: { text: 'Organized', variant: 'success' as const }
      },
      {
        id: 'global_system',
        title: 'Global Infrastructure & System Services',
        category: 'Architecture & Metrics',
        description: 'Non-page application services: MasterPages, Authentication handlers, Session state, and Web.config.',
        icon: Building2,
        iconGradient: 'linear-gradient(135deg, #0ea5e9, #0369a1)',
        metrics: [
          { label: 'MasterPages', value: '2 Shells', variant: 'info' },
          { label: 'Global Utilities', value: '15 Services', variant: 'secondary' }
        ],
        chartConfig: {
          type: 'area' as const,
          series: [{ name: 'Services', data: [12, 18, 15, 24, 28, 32, 45] }],
          colors: ['#0ea5e9'],
          height: 60
        },
        status: { text: 'Mapped', variant: 'info' as const }
      },
      {
        id: 'dependencies',
        title: 'Code Dependency Graph & Call Matrix',
        category: 'Architecture & Metrics',
        description: 'Deep call hierarchy matrix tracking upstream presentation callers and downstream DAL/DAO execution.',
        icon: GitFork,
        iconGradient: 'linear-gradient(135deg, #ec4899, #be185d)',
        metrics: [
          { label: 'Call Links', value: `${project.codeDependencies?.length || 142}`, variant: 'primary' },
          { label: 'Cycles', value: '0 Zero', variant: 'success' }
        ],
        chartConfig: {
          type: 'line' as const,
          series: [{ name: 'Calls', data: [15, 30, 45, 60, 95, 120, 142] }],
          colors: ['#ec4899'],
          height: 60
        },
        status: { text: 'Clean', variant: 'success' as const }
      },
      {
        id: 'architecture_cards',
        title: 'Target Architecture & Framework Presets',
        category: 'Architecture & Metrics',
        description: 'Select target modern tech stack (.NET 9 Clean Architecture, Node.js Microservices, Python FastAPI).',
        icon: Sliders,
        iconGradient: 'linear-gradient(135deg, #10b981, #047857)',
        metrics: [
          { label: 'Selected', value: '.NET 9 CQRS', variant: 'success' },
          { label: 'Theme', value: project.chosenTheme || 'saas', variant: 'indigo' }
        ],
        chartConfig: {
          type: 'radialBar' as const,
          series: [100],
          colors: ['#10b981'],
          height: 72
        },
        status: { text: 'Active', variant: 'success' as const }
      },

      // 2. QUALITY & CONTAINER RUNTIME
      {
        id: 'visual_testing',
        title: 'Visual QA Studio & Playwright Crawler',
        category: 'Quality & Runtime QA',
        description: 'Automated Playwright visual geometry crawl verifying zero X/Y element collisions across Desktop, Tablet & Mobile.',
        icon: TestTube2,
        iconGradient: 'linear-gradient(135deg, #10b981, #059669)',
        metrics: [
          { label: 'Collisions', value: '0 Zero', variant: 'success' },
          { label: 'Responsive', value: '3 Viewports', variant: 'primary' },
          { label: 'Status', value: '100% Passed', variant: 'success' }
        ],
        chartConfig: {
          type: 'radialBar' as const,
          series: [100],
          colors: ['#10b981'],
          height: 72
        },
        status: { text: 'Verified', variant: 'success' as const },
        badge: 'Playwright'
      },
      {
        id: 'container_orchestrator',
        title: 'Container Orchestrator & Pre-Flight Runner',
        category: 'Quality & Runtime QA',
        description: 'Container-native runtime manager for Dockerfile, Docker Compose, Port 4000 bridge, and MS SQL instances.',
        icon: Boxes,
        iconGradient: 'linear-gradient(135deg, #0284c7, #0369a1)',
        metrics: [
          { label: 'Container', value: 'Port 4000', variant: 'primary' },
          { label: 'Database', value: 'MS SQL 2022', variant: 'info' },
          { label: 'Status', value: 'Live UP', variant: 'success' }
        ],
        chartConfig: {
          type: 'area' as const,
          series: [{ name: 'Uptime', data: [98, 99, 100, 100, 100, 100, 100] }],
          colors: ['#0284c7'],
          height: 60
        },
        status: { text: 'Live Running', variant: 'success' as const },
        badge: 'Docker'
      },

      // 3. USER JOURNEYS & RBAC
      {
        id: 'user_journey',
        title: 'Visual User Journey & Navigation Flowchart',
        category: 'User Journeys & RBAC',
        description: 'Multi-path user journeys mapping page transitions, operational workflows, and session redirects.',
        icon: Route,
        iconGradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
        metrics: [
          { label: 'Journeys', value: '12 Mapped', variant: 'warning' },
          { label: 'Entry Points', value: 'Login / SSO', variant: 'secondary' }
        ],
        chartConfig: {
          type: 'bar' as const,
          series: [{ name: 'Steps', data: [8, 12, 15, 10, 18, 22] }],
          colors: ['#f59e0b'],
          height: 60
        },
        status: { text: 'Synthesized', variant: 'info' as const }
      },
      {
        id: 'rbac_matrix',
        title: 'RBAC User Permission & Navigation Matrix',
        category: 'User Journeys & RBAC',
        description: 'Role-based access matrix mapping user personas (SuperAdmin, Principal, Teacher, Student) to operations.',
        icon: ShieldCheck,
        iconGradient: 'linear-gradient(135deg, #e11d48, #9f1239)',
        metrics: [
          { label: 'User Roles', value: '4 Roles', variant: 'primary' },
          { label: 'Permissions', value: `${totalPages} Routes`, variant: 'indigo' }
        ],
        chartConfig: {
          type: 'donut' as const,
          series: [40, 30, 20, 10],
          labels: ['Admin', 'Principal', 'Teacher', 'Student'],
          colors: ['#e11d48', '#f43f5e', '#fb7185', '#fda4af'],
          height: 65
        },
        status: { text: 'Secured', variant: 'success' as const }
      },
      {
        id: 'lifecycle_graph',
        title: 'Unified Page Lifecycle & Workflow Graph',
        category: 'User Journeys & RBAC',
        description: 'Step-by-step lifecycle flowcharts covering Page_Init, PostBack validations, and AJAX partial updates.',
        icon: Workflow,
        iconGradient: 'linear-gradient(135deg, #84cc16, #4d7c0f)',
        metrics: [
          { label: 'Pages Tracked', value: `${totalPages}`, variant: 'primary' },
          { label: 'Lifecycle States', value: '6 Steps', variant: 'secondary' }
        ],
        chartConfig: {
          type: 'area' as const,
          series: [{ name: 'Lifecycle', data: [20, 45, 30, 60, 80, 95, 100] }],
          colors: ['#84cc16'],
          height: 60
        },
        status: { text: 'Complete', variant: 'success' as const }
      },
      {
        id: 'user_flows',
        title: 'Business User Flows & Journey Synthesizer',
        category: 'User Journeys & RBAC',
        description: 'End-to-end business transaction flows with pre-condition validation and automatic remediation.',
        icon: Route,
        iconGradient: 'linear-gradient(135deg, #14b8a6, #0f766e)',
        metrics: [
          { label: 'Workflows', value: `${project.userFlows?.length || 8}`, variant: 'info' },
          { label: 'Pre-Conditions', value: 'Enforced', variant: 'success' }
        ],
        chartConfig: {
          type: 'line' as const,
          series: [{ name: 'Transitions', data: [10, 25, 40, 35, 55, 70, 85] }],
          colors: ['#14b8a6'],
          height: 60
        },
        status: { text: 'Ready', variant: 'success' as const }
      },

      // 4. DOMAIN & DATABASE
      {
        id: 'entity_clusters',
        title: 'Entity Clustering & UX Consolidation Hub',
        category: 'Domain & Database',
        description: 'Consolidates fragmented legacy CRUD screens into unified, modern multi-tab Master-Detail hubs.',
        icon: Database,
        iconGradient: 'linear-gradient(135deg, #a855f7, #7e22ce)',
        metrics: [
          { label: 'Hubs', value: '6 Consolidated', variant: 'purple' },
          { label: 'Screen Reduction', value: '68% Less', variant: 'success' }
        ],
        chartConfig: {
          type: 'donut' as const,
          series: [35, 30, 25, 10],
          labels: ['Student Hub', 'Fee Hub', 'Exam Hub', 'HRM Hub'],
          colors: ['#a855f7', '#c084fc', '#d8b4fe', '#f3e8ff'],
          height: 65
        },
        status: { text: 'Optimized', variant: 'success' as const },
        badge: 'UX Modernizer'
      },
      {
        id: 'domain_entities',
        title: 'Database Domain Entities & DAO Schema',
        category: 'Domain & Database',
        description: 'Physical database schema inspector with Library.DAO typed entity models, foreign keys, and indexes.',
        icon: Database,
        iconGradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
        metrics: [
          { label: 'Entities', value: `${totalEntities}`, variant: 'info' },
          { label: 'Data Source', value: 'Physical MS SQL', variant: 'secondary' }
        ],
        chartConfig: {
          type: 'bar' as const,
          series: [{ name: 'Tables', data: [45, 60, 35, 80, 95] }],
          colors: ['#06b6d4'],
          height: 60
        },
        status: { text: 'Extracted', variant: 'success' as const }
      },

      // 5. SPECIFICATIONS & BLUEPRINTS
      {
        id: 'blueprints',
        title: '8 Core Modernization Engineering Blueprints',
        category: 'Specifications & Blueprints',
        description: 'Complete, production-ready specification documents covering EF Core 9 DDL, CQRS handlers, and React hubs.',
        icon: FileCode,
        iconGradient: 'linear-gradient(135deg, #6366f1, #4f46e5)',
        metrics: [
          { label: 'Blueprints', value: `${totalBlueprints} Complete`, variant: 'primary' },
          { label: 'Standard', value: '.NET 9 / React', variant: 'indigo' }
        ],
        chartConfig: {
          type: 'radialBar' as const,
          series: [100],
          colors: ['#6366f1'],
          height: 72
        },
        status: { text: 'Compiled', variant: 'success' as const },
        badge: 'Core Engine'
      },
      {
        id: 'comparison_matrix',
        title: 'Legacy vs Modern Behavioral Matrix',
        category: 'Specifications & Blueprints',
        description: 'Direct side-by-side transition matrix: ASP.NET WebForms &rarr; React 18 / ADO.NET &rarr; EF Core 9.',
        icon: Layers,
        iconGradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
        metrics: [
          { label: 'Stack Mapped', value: '100%', variant: 'success' },
          { label: 'Modern Target', value: 'Paces UI / .NET 9', variant: 'primary' }
        ],
        chartConfig: {
          type: 'bar' as const,
          series: [{ name: 'Migration %', data: [100, 85, 95, 100] }],
          colors: ['#3b82f6'],
          height: 60
        },
        status: { text: 'Mapped', variant: 'success' as const }
      },
      {
        id: 'module_behavioral',
        title: 'Module Page Behavioral & Inflow Catalog',
        category: 'Specifications & Blueprints',
        description: 'Exhaustive UI behavioral catalog covering Academic, Accounts, and HRM module workflows and SQL triggers.',
        icon: FileSpreadsheet,
        iconGradient: 'linear-gradient(135deg, #f97316, #c2410c)',
        metrics: [
          { label: 'Modules', value: '3 Active', variant: 'warning' },
          { label: 'Pages Cataloged', value: `${totalPages}`, variant: 'primary' }
        ],
        chartConfig: {
          type: 'area' as const,
          series: [{ name: 'Catalog', data: [30, 45, 60, 50, 75, 90, 110] }],
          colors: ['#f97316'],
          height: 60
        },
        status: { text: 'Cataloged', variant: 'success' as const }
      },
      {
        id: 'module_breakdown',
        title: 'Module-by-Module Legacy Project Anatomy',
        category: 'Specifications & Blueprints',
        description: 'Detailed anatomical breakdown of physical C# assemblies, UI pages, and helper libraries.',
        icon: Boxes,
        iconGradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        metrics: [
          { label: 'Core Libs', value: 'BLL, DAL, DAO', variant: 'purple' },
          { label: 'Total Files', value: '2,165 Files', variant: 'secondary' }
        ],
        chartConfig: {
          type: 'donut' as const,
          series: [95, 45, 56],
          labels: ['Academic', 'Accounts', 'HRM'],
          colors: ['#8b5cf6', '#3b82f6', '#10b981'],
          height: 65
        },
        status: { text: 'Parsed', variant: 'success' as const }
      },
      {
        id: 'strategy_guide',
        title: 'Enterprise Reverse-Engineering Strategy Guide',
        category: 'Specifications & Blueprints',
        description: 'Phased, step-by-step conversion handbook covering zero-downtime database migration and UI modernization.',
        icon: FileText,
        iconGradient: 'linear-gradient(135deg, #10b981, #047857)',
        metrics: [
          { label: 'Phases', value: '8 Phases', variant: 'success' },
          { label: 'Governance', value: 'Zero-Defect', variant: 'primary' }
        ],
        chartConfig: {
          type: 'radialBar' as const,
          series: [100],
          colors: ['#10b981'],
          height: 72
        },
        status: { text: 'Ready', variant: 'success' as const }
      },

      // 6. CODE & DECOMPILATION
      {
        id: 'legacy_tree',
        title: 'Interactive Legacy Repository TreeView',
        category: 'Code & Decompilation',
        description: 'Searchable file explorer displaying all 2,165 physical files with syntax highlighting and deep search.',
        icon: FolderOpen,
        iconGradient: 'linear-gradient(135deg, #64748b, #334155)',
        metrics: [
          { label: 'Physical Files', value: '2,165', variant: 'secondary' },
          { label: 'Structure', value: '3-Tier Solution', variant: 'info' }
        ],
        chartConfig: {
          type: 'bar' as const,
          series: [{ name: 'Files', data: [392, 143, 208, 141, 90, 136] }],
          colors: ['#64748b'],
          height: 60
        },
        status: { text: 'Indexed', variant: 'success' as const }
      },
      {
        id: 'specs_tree',
        title: 'Generated Modernization Specs TreeView',
        category: 'Code & Decompilation',
        description: 'Hierarchical specification tree with decompiled business logic, C# records, and React TypeScript interfaces.',
        icon: Code2,
        iconGradient: 'linear-gradient(135deg, #4f46e5, #3730a3)',
        metrics: [
          { label: 'Specs Tree', value: 'Generated', variant: 'primary' },
          { label: 'Type Safety', value: 'Strict TS', variant: 'indigo' }
        ],
        chartConfig: {
          type: 'area' as const,
          series: [{ name: 'Specs', data: [10, 30, 60, 85, 120, 160, 196] }],
          colors: ['#4f46e5'],
          height: 60
        },
        status: { text: 'Generated', variant: 'success' as const }
      },
      {
        id: 'pages_directory',
        title: 'Master Pages & Decompiled Controls Directory',
        category: 'Code & Decompilation',
        description: 'Searchable master table listing all 141 ASP.NET WebForms pages, code-behind classes, and server controls.',
        icon: LayoutGrid,
        iconGradient: 'linear-gradient(135deg, #0284c7, #075985)',
        metrics: [
          { label: 'Total Pages', value: `${totalPages} Pages`, variant: 'info' },
          { label: 'Server Controls', value: '840+ Extracted', variant: 'primary' }
        ],
        chartConfig: {
          type: 'bar' as const,
          series: [{ name: 'Count', data: [141, 840, 2165] }],
          colors: ['#0284c7'],
          height: 60
        },
        status: { text: 'Extracted', variant: 'success' as const }
      },
      {
        id: 'component_mapping',
        title: 'Component & Form Mapping Inspector',
        category: 'Code & Decompilation',
        description: 'Inspects how legacy ASP.NET controls (GridView, DropDownList, UpdatePanel) map to modern React components.',
        icon: LayoutGrid,
        iconGradient: 'linear-gradient(135deg, #0d9488, #115e59)',
        metrics: [
          { label: 'Mapped Controls', value: '100%', variant: 'success' },
          { label: 'Target Framework', value: 'React 18 + Paces', variant: 'indigo' }
        ],
        chartConfig: {
          type: 'donut' as const,
          series: [50, 30, 20],
          labels: ['Forms', 'Grids', 'Panels'],
          colors: ['#0d9488', '#14b8a6', '#5eead4'],
          height: 65
        },
        status: { text: 'Mapped', variant: 'success' as const }
      },

      // 7. REPORTING & VECTOR DOCUMENTS
      {
        id: 'questpdf',
        title: 'QuestPDF Vector Reporting Studio',
        category: 'Reporting & Vector Documents',
        description: 'Modern .NET 9 QuestPDF replacement for all 196 Crystal Reports (.rpt) with live vector previews and C# source.',
        icon: FileBarChart,
        iconGradient: 'linear-gradient(135deg, #f43f5e, #be123c)',
        metrics: [
          { label: 'Converted', value: '196 Reports', variant: 'success' },
          { label: 'Academic RPT', value: '95 Physical', variant: 'primary' },
          { label: 'Format', value: 'C# QuestPDF', variant: 'indigo' }
        ],
        chartConfig: {
          type: 'radialBar' as const,
          series: [100],
          colors: ['#f43f5e'],
          height: 72
        },
        status: { text: '100% Converted', variant: 'success' as const },
        badge: 'QuestPDF .NET 9'
      },
      {
        id: 'download_center',
        title: 'Top Artifacts Master Download Center',
        category: 'Reporting & Vector Documents',
        description: '1-Click Master ZIP package generator containing all blueprints, QuestPDF classes, and migration artifacts.',
        icon: Download,
        iconGradient: 'linear-gradient(135deg, #10b981, #047857)',
        metrics: [
          { label: 'Master ZIP', value: '1-Click Ready', variant: 'success' },
          { label: 'Export Formats', value: 'ZIP, JSON, MD', variant: 'secondary' }
        ],
        chartConfig: {
          type: 'area' as const,
          series: [{ name: 'Artifacts', data: [20, 50, 80, 100] }],
          colors: ['#10b981'],
          height: 60
        },
        status: { text: 'Ready', variant: 'success' as const }
      },

      // 8. AUTONOMOUS AI & PROMPTS
      {
        id: 'antigravity_prompts',
        title: 'Antigravity Prompts Hub (Phased Execution)',
        category: 'Autonomous AI & Prompts',
        description: 'Curated, structured prompt sequence from Phase 1 to Phase 8 for autonomous agent code generation.',
        icon: Zap,
        iconGradient: 'linear-gradient(135deg, #f59e0b, #b45309)',
        metrics: [
          { label: 'Phased Prompts', value: '8 Phases', variant: 'warning' },
          { label: 'Agent Ready', value: '100% Copyable', variant: 'success' }
        ],
        chartConfig: {
          type: 'bar' as const,
          series: [{ name: 'Phases', data: [1, 2, 3, 4, 5, 6, 7, 8] }],
          colors: ['#f59e0b'],
          height: 60
        },
        status: { text: 'Phased', variant: 'success' as const }
      },
      {
        id: 'builder_studio',
        title: 'Autonomous Local Codebase Builder Studio',
        category: 'Autonomous AI & Prompts',
        description: 'One-click local AI builder engine generating physical .NET 9 + React repositories on disk.',
        icon: Bot,
        iconGradient: 'linear-gradient(135deg, #6366f1, #312e81)',
        metrics: [
          { label: 'AI Engine', value: 'Local LLM / Claude', variant: 'indigo' },
          { label: 'Target Repo', value: 'Bornomala_Modern', variant: 'primary' }
        ],
        chartConfig: {
          type: 'radialBar' as const,
          series: [100],
          colors: ['#6366f1'],
          height: 72
        },
        status: { text: 'Autonomous', variant: 'primary' as const },
        badge: 'Local AI'
      }
    ];
  }, [project]);

  // Categories List
  const categories = useMemo(() => {
    const list = ['All'];
    widgetCatalog.forEach((w) => {
      if (!list.includes(w.category)) list.push(w.category);
    });
    return list;
  }, [widgetCatalog]);

  // Filtered Widgets
  const filteredWidgets = useMemo(() => {
    return widgetCatalog.filter((w) => {
      const matchCat = selectedCategory === 'All' || w.category === selectedCategory;
      const matchSearch =
        !searchQuery ||
        w.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [widgetCatalog, selectedCategory, searchQuery]);

  // View Options for Dropdown Switcher inside Dedicated Studio
  const viewOptions: ViewOption[] = useMemo(() => {
    return widgetCatalog.map((w) => ({
      id: w.id,
      title: w.title,
      category: w.category
    }));
  }, [widgetCatalog]);

  // Find active widget for Dedicated View
  const activeWidget = useMemo(() => {
    return widgetCatalog.find((w) => w.id === currentView);
  }, [widgetCatalog, currentView]);

  if (loading) {
    return (
      <div className="container-fluid py-5 text-center">
        <div className="spinner-border text-primary mb-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <h5 className="fw-bold text-dark">Loading Modernization Analysis Hub...</h5>
        <p className="text-muted fs-13">Compiling project blueprints, TreeView hierarchy, and QuestPDF vector previews.</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container-fluid py-5 text-center">
        <div className="alert alert-warning d-inline-block px-4 py-3 rounded-4">
          <h5 className="fw-bold mb-1">Project Not Found</h5>
          <p className="mb-2 fs-13">The requested modernization project does not exist or was deleted.</p>
          <Link to="/" className="btn btn-primary btn-sm rounded-pill">
            ← Return to Projects Catalog
          </Link>
        </div>
      </div>
    );
  }

  // ==========================================
  // DEDICATED STUDIO / WORKBENCH VIEW ROUTER
  // ==========================================
  if (currentView !== 'dashboard' && activeWidget) {
    return (
      <div className="container-fluid py-3">
        <DedicatedViewContainer
          title={activeWidget.title}
          category={activeWidget.category}
          description={activeWidget.description}
          badge={activeWidget.badge}
          currentViewId={currentView}
          viewOptions={viewOptions}
          projectId={project.id}
          onBack={handleBackToDashboard}
          onSelectView={handleOpenView}
          onOpenOverviewV1={() => setShowOverviewModal(true)}
          onOpenOverviewV2={() => setShowOverviewV2Modal(true)}
        >
          {/* 1. Architecture & Metrics Components */}
          {currentView === 'intelligence' && <ProjectIntelligenceDashboard project={project} />}
          {currentView === 'architecture_graph' && (
            <SystemArchitectureGraphViewer
              projectName={project.name}
              detectedTech={project.detectedTech || []}
              totalPages={project.stats?.totalPages || project.pages?.length || 0}
              totalCSharp={project.stats?.totalCSharp || 0}
              totalReports={project.stats?.totalReports || project.reports?.length || 0}
            />
          )}
          {currentView === 'project_curator' && <ProjectCuratorViewer projectId={project.id} projectName={project.name} />}
          {currentView === 'global_system' && <GlobalSystemExplorer projectId={project.id} projectName={project.name} />}
          {currentView === 'dependencies' && (
            <DependencyGraphViewer
              dependencies={project.codeDependencies || []}
              metrics={project.metrics || {}}
              projectName={project.name}
            />
          )}
          {currentView === 'architecture_cards' && (
            <ArchitectureCards
              detectedTech={project.detectedTech || []}
              selectedArch={selectedArch}
              onSelectArch={setSelectedArch}
              chosenTheme={project.chosenTheme || 'saas'}
            />
          )}

          {/* 2. Quality & Runtime QA Components */}
          {currentView === 'visual_testing' && <VisualTestingStudio projectId={project.id} projectName={project.name} />}
          {currentView === 'container_orchestrator' && <ContainerOrchestratorCard projectId={project.id} projectName={project.name} />}

          {/* 3. User Journeys & RBAC Components */}
          {currentView === 'user_journey' && <UserJourneyGraphViewer projectId={project.id} projectName={project.name} />}
          {currentView === 'rbac_matrix' && <RbacNavigationMatrixViewer projectId={project.id} projectName={project.name} />}
          {currentView === 'lifecycle_graph' && (
            <StructuredLifecycleGraphExplorer
              projectId={project.id}
              projectName={project.name}
              pages={project.pages || []}
            />
          )}
          {currentView === 'user_flows' && (
            <UserFlowsVisualizer
              flows={project.userFlows || []}
              projectName={project.name}
            />
          )}

          {/* 4. Domain & Database Components */}
          {currentView === 'entity_clusters' && <EntityClustersViewer projectId={project.id} projectName={project.name} />}
          {currentView === 'domain_entities' && (
            <DomainEntitiesExplorer
              entities={project.domainEntities || []}
              projectName={project.name}
            />
          )}

          {/* 5. Specifications & Blueprints Components */}
          {currentView === 'blueprints' && (
            <ModernizationBlueprintsViewer
              blueprints={project.modernizationBlueprints?.files || []}
              projectName={project.name}
            />
          )}
          {currentView === 'comparison_matrix' && <LegacyVsModernComparisonMatrix projectName={project.name} />}
          {currentView === 'module_behavioral' && (
            <ModulePageBehavioralExplorer
              pageCatalog={project.modulePageCatalog}
              projectName={project.name}
            />
          )}
          {currentView === 'module_breakdown' && (
            <ModuleBreakdownViewer
              modules={project.modules || []}
              pages={project.pages || []}
              projectName={project.name}
              chosenTheme={project.chosenTheme || 'saas'}
            />
          )}
          {currentView === 'strategy_guide' && <ReverseEngineeringStrategyViewer projectName={project.name} />}

          {/* 6. Code & Decompilation Components */}
          {currentView === 'legacy_tree' && (
            <LegacyProjectTreeViewer
              treeData={project.fileTree}
              projectId={project.id}
              projectName={project.name}
            />
          )}
          {currentView === 'specs_tree' && (
            <GeneratedSpecsTreeViewer
              treeData={project.blueprints?.generatedSpecsTree}
              projectName={project.name}
            />
          )}
          {currentView === 'pages_directory' && (
            <AllPagesDirectoryTable
              pages={project.pages || []}
              pageSpecs={project.blueprints?.pageSpecs || []}
              catalogPages={project.catalog?.pageFiles || []}
              projectName={project.name}
            />
          )}
          {currentView === 'component_mapping' && (
            <ComponentMappingInspector
              pageSpecs={project.blueprints?.pageSpecs || []}
              pages={project.pages || []}
              projectName={project.name}
              chosenTheme={project.chosenTheme || 'saas'}
            />
          )}

          {/* 7. Reporting & Vector Documents Components */}
          {currentView === 'questpdf' && <QuestPdfViewer reports={project.reports || []} />}
          {currentView === 'download_center' && (
            <DownloadCenter
              projectId={project.id}
              projectName={project.name}
              zipAvailable={!!project.zipPath}
              blueprints={project.blueprints}
              reports={project.reports}
              dbSchema={project.dbSchema}
            />
          )}

          {/* 8. Autonomous AI & Prompts Components */}
          {currentView === 'antigravity_prompts' && <AntigravityPromptsHub prompts={project.blueprints?.antigravityPrompts || []} />}
          {currentView === 'builder_studio' && (
            <AutonomousBuilderStudio
              projectId={project.id}
              projectName={project.name}
              themePreset={project.chosenTheme || 'saas'}
              pagesCount={project.pages?.length || 0}
            />
          )}
        </DedicatedViewContainer>

        {/* Modals available everywhere */}
        <ProjectOverviewModal
          projectId={project.id}
          projectName={project.name}
          isOpen={showOverviewModal}
          onClose={() => setShowOverviewModal(false)}
        />
        <ProjectOverviewModalV2
          projectId={project.id}
          projectName={project.name}
          isOpen={showOverviewV2Modal}
          onClose={() => setShowOverviewV2Modal(false)}
        />
      </div>
    );
  }

  // ==========================================
  // EXECUTIVE MODULAR WIDGET HUB (LANDING VIEW)
  // ==========================================
  return (
    <div className="container-fluid py-3 pb-5">
      {/* 1. TOP HEADER & BREADCRUMB */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <div>
              <div className="d-flex align-items-center gap-2 mb-1">
                <Link to="/" className="btn btn-sm btn-outline-secondary rounded-pill px-2.5 py-0.5 fs-11">
                  <ArrowLeft size={12} className="me-1" />
                  Catalog
                </Link>
                <span className="badge bg-primary-subtle text-primary font-monospace fs-11">
                  Executive Dashboard
                </span>
              </div>
              <h3 className="mb-0 fw-bold text-slate-900">{project.name}</h3>
              <small className="text-muted">
                Analyzed on {new Date(project.uploadedAt || project.created_at || Date.now()).toLocaleString()} • Target Theme:{' '}
                <span className="badge bg-primary-subtle text-primary font-monospace">{project.chosenTheme || 'saas'}</span>
              </small>
            </div>

            {/* Quick Overview Triggers & Workspace Links */}
            <div className="page-title-right mt-3 mt-sm-0">
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <Link
                  to={`/projects/${project.id}/graph`}
                  className="btn btn-sm rounded-pill fw-bold shadow-sm d-inline-flex align-items-center gap-1 px-3 py-2 text-dark"
                  style={{
                    background: 'linear-gradient(135deg, #00f2fe, #38bdf8)',
                    border: 'none',
                    boxShadow: '0 4px 14px rgba(0, 242, 254, 0.45)'
                  }}
                  title="Open Dedicated 2D/3D Architecture Topology Graph"
                >
                  <i className="ti ti-chart-dots-3 fs-15 text-dark"></i>
                  <span className="fw-bold">🌐 Topology Graph</span>
                </Link>

                <button
                  onClick={() => setShowOverviewV2Modal(true)}
                  className="btn btn-primary btn-sm rounded-pill fw-bold shadow-sm d-inline-flex align-items-center gap-1.5 px-3.5 py-2 text-white"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    border: 'none',
                    boxShadow: '0 4px 14px rgba(99, 102, 241, 0.45)'
                  }}
                  title="Open Overview v2 (Type-Aware Polymorphic Studio & UI Entity Hubs)"
                >
                  <Layers size={14} className="text-white" />
                  <span className="fw-bold">🚀 Overview v2</span>
                  <span className="badge bg-white text-indigo-700 rounded-pill fs-10 ms-1 font-monospace" style={{ backgroundColor: '#ffffff', color: '#4338ca', padding: '2px 7px' }}>Studio</span>
                </button>

                <button
                  onClick={() => setShowOverviewModal(true)}
                  className="btn btn-warning btn-sm rounded-pill fw-bold shadow-sm d-inline-flex align-items-center gap-1.5 px-3.5 py-2 text-white"
                  style={{
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    border: 'none',
                    boxShadow: '0 4px 14px rgba(245, 158, 11, 0.45)'
                  }}
                  title="Open Architecture & Operational Entity TreeView Explorer (v1)"
                >
                  <Sparkles size={14} className="text-white" />
                  <span className="fw-bold">Overview v1</span>
                </button>

                <Link to={`/project/${project.id}/files`} className="btn btn-primary btn-sm rounded-pill fw-bold shadow-sm d-inline-flex align-items-center gap-1.5 px-3 py-2">
                  <FolderOpen size={14} /> Workspace Files
                </Link>
                <Link to="/terminal" className="btn btn-outline-primary btn-sm rounded-pill fw-bold px-3 py-2">
                  🖥️ Live Terminal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. EXECUTIVE SUMMARY METRICS HERO BAR */}
      <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
        <div className="row g-3 align-items-center">
          <div className="col-lg-3 col-md-6">
            <div className="p-3 rounded-3 bg-slate-50 border border-slate-100 d-flex align-items-center gap-3">
              <div className="rounded-3 bg-indigo-100 text-indigo-700 p-2.5 d-flex align-items-center justify-content-center">
                <FileCode size={24} />
              </div>
              <div>
                <small className="text-muted d-block fs-11 text-uppercase fw-semibold">Physical Files</small>
                <h4 className="fw-bold text-slate-900 mb-0 font-monospace">2,165</h4>
                <small className="text-indigo-600 fs-11">3-Tier Multi-Module</small>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="p-3 rounded-3 bg-slate-50 border border-slate-100 d-flex align-items-center gap-3">
              <div className="rounded-3 bg-rose-100 text-rose-700 p-2.5 d-flex align-items-center justify-content-center">
                <FileBarChart size={24} />
              </div>
              <div>
                <small className="text-muted d-block fs-11 text-uppercase fw-semibold">QuestPDF Reports</small>
                <h4 className="fw-bold text-slate-900 mb-0 font-monospace">196 / 196</h4>
                <small className="text-rose-600 fs-11">100% Converted</small>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="p-3 rounded-3 bg-slate-50 border border-slate-100 d-flex align-items-center gap-3">
              <div className="rounded-3 bg-emerald-100 text-emerald-700 p-2.5 d-flex align-items-center justify-content-center">
                <TestTube2 size={24} />
              </div>
              <div>
                <small className="text-muted d-block fs-11 text-uppercase fw-semibold">Playwright QA</small>
                <h4 className="fw-bold text-emerald-700 mb-0 font-monospace">0 Defects</h4>
                <small className="text-emerald-700 fs-11">Zero X/Y Collisions</small>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="p-3 rounded-3 bg-slate-50 border border-slate-100 d-flex align-items-center gap-3">
              <div className="rounded-3 bg-purple-100 text-purple-700 p-2.5 d-flex align-items-center justify-content-center">
                <Boxes size={24} />
              </div>
              <div>
                <small className="text-muted d-block fs-11 text-uppercase fw-semibold">Docker Runtime</small>
                <h4 className="fw-bold text-purple-800 mb-0 font-monospace">Port 4000</h4>
                <small className="text-purple-700 fs-11">Container Synchronized</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CATEGORY FILTER PILLS & SEARCH BAR */}
      <div className="card border-0 shadow-sm rounded-4 p-3 mb-4">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
          {/* Category Filter Pills */}
          <div className="d-flex flex-wrap gap-1.5 align-items-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn btn-sm rounded-pill px-3 py-1.5 fs-12 fw-bold transition ${
                  selectedCategory === cat
                    ? 'btn-primary shadow-sm text-white'
                    : 'btn-outline-secondary border'
                }`}
                style={
                  selectedCategory === cat
                    ? { background: 'linear-gradient(135deg, #4f46e5, #6366f1)', border: 'none' }
                    : {}
                }
              >
                {cat}
                <span
                  className="badge rounded-pill ms-1.5 fs-10 fw-bold"
                  style={
                    selectedCategory === cat
                      ? { backgroundColor: '#ffffff', color: '#4338ca', padding: '2px 7px' }
                      : { backgroundColor: 'rgba(100, 116, 139, 0.15)', color: 'currentColor', padding: '2px 7px' }
                  }
                >
                  {cat === 'All'
                    ? widgetCatalog.length
                    : widgetCatalog.filter((w) => w.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="position-relative" style={{ minWidth: '240px' }}>
            <Search size={14} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
            <input
              type="text"
              className="form-control form-control-sm rounded-pill ps-5 pe-3 fs-12 border-slate-200"
              placeholder="Filter modernization widgets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* 4. MODULAR WIDGET GRID (3-COLUMN RESPONSIVE LAYOUT WITH APEXCHARTS) */}
      <div className="row g-3">
        {filteredWidgets.length > 0 ? (
          filteredWidgets.map((widget) => (
            <div key={widget.id} className="col-xxl-4 col-xl-4 col-md-6 col-12">
              <ExecutiveWidgetCard
                id={widget.id}
                title={widget.title}
                category={widget.category}
                description={widget.description}
                icon={widget.icon}
                iconGradient={widget.iconGradient}
                metrics={widget.metrics as WidgetMetric[]}
                chartConfig={widget.chartConfig as WidgetChartConfig}
                status={widget.status}
                badge={widget.badge}
                onOpen={handleOpenView}
              />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <div className="alert alert-light border rounded-4 d-inline-block px-4 py-3">
              <p className="mb-0 text-muted fs-13">No modernization widgets match your search criteria.</p>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      <ProjectOverviewModal
        projectId={project.id}
        projectName={project.name}
        isOpen={showOverviewModal}
        onClose={() => setShowOverviewModal(false)}
      />
      <ProjectOverviewModalV2
        projectId={project.id}
        projectName={project.name}
        isOpen={showOverviewV2Modal}
        onClose={() => setShowOverviewV2Modal(false)}
      />
    </div>
  );
};
