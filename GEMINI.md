# Antigravity Agent Memory & Architectural Invariants (ArcMorph)

This document serves as the persistent memory, operational rules, and architectural guidelines for all Antigravity agents collaborating on the **ArcMorph** platform.

---

## 1. Core Platform Identity & Repository Isolation

1. **ArcMorph Scope**:
   - ArcMorph is an **Autonomous Enterprise Modernization & Reverse-Engineering Platform**.
   - It ingests legacy enterprise monolithic codebases (ASP.NET WebForms, ADO.NET, monolithic MSSQL stored procedures, Crystal Reports) and reverse-engineers them into modern clean architecture (.NET 9 Web API, React 19, CQRS, and RBAC).
2. **Strict GitHub Isolation Rule**:
   - The Git repository (`project_arcmorph`) must **ONLY contain the pure source code of the ArcMorph tool** (`arcmorph_web`, `paces_template`, `brand_identity`, `ui_concepts`, docs).
   - **NEVER** commit, stage, or push any user-uploaded project archives, extracted codebases, database backups (`.bak`), SQL dumps, or generated modernized applications to GitHub.
   - All generated and uploaded assets are strictly quarantined to Object Storage (MinIO) and local Docker volumes.

---

## 2. Design System & UI Principles

1. **Paces Design System**:
   - Internal application views strictly adhere to the enterprise **Paces** template design tokens and responsive layout.
2. **Zero Theme Customizer Clutter**:
   - Never inject floating theme customizer buttons, offcanvas style customizers, or theme-toggling cogs into client applications unless explicitly requested by the user.
3. **Cybernetic Aesthetic Boundary**:
   - The futuristic cybernetic sci-fi aesthetic is reserved strictly for the Authentication Gateway (/login) and Session Lock Screen (/lockscreen). All operational workspaces must remain clean, professional, and accessible.

---

## 3. Authentication & Security Lifecycle

1. **Strict Auth Lifecycle**:
   - Unauthenticated visits to modernized applications must **always start on the login screen** (/login).
   - Logging out must cleanly purge session tokens and redirect to /login.
   - Never use silent mock auto-login fallbacks that bypass the login gateway.
2. **Root SuperAdmin Authority**:
   - The primary root administrative authority is superadmin (assigned to Md Naimul Islam).
   - Root user management (/users) controls feature-wise page permissions and audit trails.

---

## 4. Multi-Agent & AI Studio Architecture

1. **LangGraph State Machine**:
   - Cyclic multi-agent graph with automated test-healing loops:
     - **Cartographer Agent**: AST Syntax crawler & schema miner.
     - **Code Builder Agent**: CQRS & React 19 synthesizer.
     - **Test Gate Agent**: Playwright visual geometry & collision inspector.
     - **Compiler Healer Agent**: Self-correction & refactoring loop.
2. **AutoGen Peer Review Arena**:
   - Multi-agent conversational debate between:
     - **Modernization Architect Agent** (Qwen 2.5 Coder): Decomposes monoliths into CQRS & React.
     - **Security & Integrity Critic Agent** (Llama 3.3 70B): Audits concurrency deadlocks, SQL injection, and database sequences.
     - **System Orchestrator**: Enforces consensus before compilation.
3. **LlamaIndex AST RAG Ground-Truth**:
   - Vector semantic index of decompiled legacy business rules, mathematical formulas, and domain invariants with exact provenance tracking.

---

## 5. Storage & Persistence Architecture

1. **MinIO S3 Object Storage**:
   - `arcmorph-uploads`: Raw uploaded archives and database `.bak` dumps.
   - `arcmorph-vault`: Scanned passport and document OCR metadata.
   - `arcmorph-artifacts`: AST JSON profiles, 2D/3D topology blueprints.
   - `arcmorph-releases`: Modernized project ZIP download packages.
2. **MongoDB Persistence**:
   - Stores project metadata, user accounts, and immutable security audit logs.

---

## 6. Environment & Command Execution Quirks

1. **PowerShell Curl Bug**:
   - On Windows PowerShell, **never** execute plain `curl` (it aliases to `Invoke-WebRequest` without closing response streams, hanging the agent indefinitely).
   - **Always** invoke `curl.exe`, `Invoke-RestMethod`, or execute via Python.
2. **Docker Service Architecture**:
   - ArcMorph Web Cockpit runs on port `3005` (`project_arcmorph`).
   - MinIO Object Storage runs on ports `9000` (API) and `9001` (Web Console).
   - MSSQL 2022 runs on port `1433` (`bornomala-mssql-2022`).
