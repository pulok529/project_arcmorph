export interface User {
  username: string;
  name: string;
  role: string;
}

export interface ProjectSummary {
  id: string;
  name: string;
  archive_name?: string;
  created_at?: string;
  uploadedAt?: string;
  domain_summary?: string;
  tech_stack?: string[];
  status: string;
  progress?: number;
  chosenTheme?: string;
  suggestedTheme?: string;
  targetArch?: string;
  detectedTech?: string[];
  pages?: any[];
  reports?: any[];
  dbSchema?: any;
  blueprints?: any;
  modernizationBlueprints?: any;
  modulePageCatalog?: any;
  domainEntities?: any[];
  userFlows?: any[];
  codeDependencies?: any[];
  metrics?: any;
  enterpriseTechStack?: any;
  fileTree?: any;
  modules?: any[];
  catalog?: any;
  stats?: any;
  latestCrawl?: any;
  zipPath?: string | null;
}

export interface AiRule {
  id: string;
  category: string;
  rule: string;
  addedAt: string;
  source: string;
}

export interface LogMessage {
  timestamp: string;
  text: string;
  progress?: number;
  timeRemaining?: string;
}
