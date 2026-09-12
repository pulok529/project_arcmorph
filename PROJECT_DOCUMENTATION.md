# ArcMorph: Autonomous Enterprise Modernization & Reverse-Engineering Platform
## Master Technical Architecture & Operational Reference Manual

---

### Executive Overview
**ArcMorph** is a state-of-the-art multi-agent code analysis, reverse-engineering, and architectural modernization platform. Designed to transition legacy monolithic software ecosystems (e.g., ASP.NET WebForms, ADO.NET, monolithic MSSQL stored procedures, and Crystal Reports) into cloud-native microservices architectures (.NET 9 Clean Architecture, CQRS slices, EF Core 9, PostgreSQL, and React 19 single-page applications), ArcMorph orchestrates local and cloud intelligence models, deterministic AST compilers, and vision gates in a unified cybernetic cockpit.

---

### Key Architectural Pillars

```
+--------------------------------------------------------------------------------------------------+
|                                    ARCMORPH UNIFIED COCKPIT                                      |
+------------------------------------+------------------------------------+------------------------+
|  Cybernetic Auth & Lock Gate       |  Paces Modernization UI Suite      |  Multi-Agent Telemetry |
|  - Vector SVG Identity Logo        |  - Dual Theme: Dark (#0b0f19) Def. |  - Master Interactive  |
|  - PIN Lockscreen (1234)           |  - Light Theme with Full Parity    |    Command Console     |
|  - Continuous Background Running   |  - 2D / 3D Architecture Topology   |  - Rolling Digits Stream|
+------------------------------------+------------------------------------+------------------------+
                                                 |
                                                 v
+--------------------------------------------------------------------------------------------------+
|                                   CORE OPERATIONAL MODULES                                       |
+--------------------------+---------------------------+-------------------------------------------+
| 1. OCR Studio & Vault    | 2. Profile & CV Engine    | 3. Security & Permission Control          |
| - MRZ TD3 Passport Parser| - Naimul Islam Verified ID| - SuperUser Authority (superadmin)        |
| - PDF Transcript OCR     | - Interactive CV Preview  | - Feature-Wise Page Permission Modulation |
| - Staged Vault Hierarchy | - Frictionless Pass Reset | - MongoDB Audit Trail Logging             |
+--------------------------+---------------------------+-------------------------------------------+
                                                 |
                                                 v
+--------------------------------------------------------------------------------------------------+
|                                  LOCAL AI & INFERENCE ROUTER                                     |
+--------------------------------------------------------------------------------------------------+
|  - Orchestrator (Fast Dispatch): Qwen2.5-3B-Instruct (~140 t/s, 2.4 GB VRAM)                     |
|  - Code Refactoring & CQRS: Qwen2.5-Coder-14B (32k context, 9.8 GB VRAM)                         |
|  - Visual Gate & OCR: Qwen2.5-VL-7B-Instruct / Gemma-3-4B-Vision                                  |
|  - External Audit Critique: Claude 3.7 Sonnet / DeepSeek-R1 (Hybrid Fallback)                    |
+--------------------------------------------------------------------------------------------------+
```

---

### Comprehensive Feature Guide

#### 1. Theme Engine & Navigation Parity
- **Default Cyber Dark Theme (`#0b0f19`)**: Designed for deep engineering sessions. High-contrast neon cyan (`#00f2fe`) accents, muted slate typography, and zero eye-strain luminance.
- **Full Light Theme (`#f4f6f9`) Support**: Instant toggle via the topbar sun/moon switch. All cards, tables, modals, and terminals dynamically transform with zero unreadable text collisions (`.text-slate-900` dynamically adapts to `#f1f5f9` in dark mode and `#0f172a` in light mode).
- **Navigation Animation Parity**: `.side-nav-link` elements feature smooth cubic-bezier transitions (`translateX(4px)`) and glowing indicators in both light and dark modes.

#### 2. Cybernetic Authentication & Lock Screen
- **Design Precaution Compliance**: Per user design guidelines, only `/login` and `/lockscreen` utilize custom cybernetic futuristic aesthetics; all other internal application pages strictly adhere to the enterprise **Paces** template layout.
- **Cybernetic Login Gate (`/login`)**:
  - High-res dynamic SVG vector ArcMorph logo with twin orbital rings and glowing gradient cores.
  - Dual login modes: Standard Password Authentication and Rapid 4-Digit PIN Access (`1234`).
  - Pre-configured quick login buttons for root SuperAdmin.
- **Cybernetic Lock Screen (`/lockscreen`)**:
  - Activated manually from the user dropdown or automatically by the idle watchdog.
  - Displays authenticated user avatar (Naimul Islam portrait), active client IP (`127.0.0.1`), and running pipeline counters.
  - Interactive on-screen cyber dialpad with instant PIN entry.
  - **Zero-Disruption Guarantee**: Locking the screen **never** halts, resets, or cancels background subagents, OCR sessions, or terminal processes.

#### 3. Engineer Profile & Interactive CV Generator (`/profile`)
- **Verified Identity Hydration**:
  - Name: **Md Naimul Islam** (Alias: Pulak)
  - Passport: **A02828950** (Country: Bangladesh, Expiry: 08 Dec 2030)
  - Education: **East West University**, Bachelor of Science in Computer Science and Engineering (Graduated May 2023).
  - Career History: **Proshika Computer Systems** (Lead Software Engineer), **LEADS Corporation Limited** (Software Engineer), **Creatrix Soft Tech** (Associate Engineer).
  - Scientific Research Publications: 3 indexed papers in *Elsevier Computer Methods and Programs in Biomedicine*, *MDPI Sensors*, and *ICDSNS 2022*.
- **Features**:
  - Live Curriculum Vitae preview pane formatted for executive enterprise presentation.
  - One-click **Print to PDF** and Clean HTML Export.
  - **Frictionless Password Reset**: In-profile password update requires only the new password and confirmation (no old password required).
  - Custom profile avatar upload with fallback to official portrait.

#### 4. Universal Document & Passport OCR Studio (`/ocr-studio`)
- **Document Ingestion Dropzone**:
  - Upload passports, national IDs, transcripts, and architectural schemas.
  - Built-in machine-readable zone (MRZ TD3) passport parsing engine extracting Document No, Issuing State, Full Name, DOB, Sex, Expiry, and Check Digits.
- **Vault Hierarchy**:
  - Persistent document storage following the structured format:
    ```
    ocr_vault/
    └── ocrproject_3903739/
        ├── Stored.detail.md
        ├── Stored/
        │   └── 1/
        │       ├── uploaded/
        │       │   └── Bangladesh_Passport_A02828950.jpg
        │       └── created/
        │           └── extracted_metadata.json
    ```
- **3-Minute Idle Watchdog**:
  - Monitors uncommitted OCR work. After 3 minutes of inactivity or navigating away, prompts the user via a **SweetAlert2** dialog with three choices:
    1. *Continue Current Work*
    2. *Save Project to Vault*
    3. *Discard & Delete Session*
- **Dedicated Bottom Action Bar**:
  - High-visibility `[💾 Save Project to Vault]` and `[🗑️ Discard & Delete Work]` buttons at the footer.

#### 5. Multi-Agent Master Terminal (`/terminal`)
- **Dual-Pane Split Architecture**:
  - **Master Terminal (Left Column)**: The *only* interactive and editable console. Features an interactive command prompt, command history, and ASCII status tables.
  - **Subagent Telemetry Pane (Right Column)**: Real-time streams for each worker agent (Roslyn AST Synthesizer, PostgreSQL DDL Compiler, Playwright Screen Analyzer) with live **Rolling Digits** telemetry (Tokens/sec, RAM footprint, CPU load).
- **Supported Terminal Commands**:
  - `upload`: Triggers the Batch File & Directory Ingestion modal for single files, directories, or ZIP packages.
  - `ls` / `dir`: Formats a clean ASCII table of all staged workspace assets with file sizes, types, and morph status.
  - `* morph`: Wildcard command that stages all files and launches parallel subagent workers.
  - `<file1>, <file2> morph`: Targeted conversion command for comma-separated files.
  - `status`: Displays pipeline throughput, token counters, and memory utilization.
  - `models`: Lists all active AI models and current orchestrator.
  - `clear`: Purges the master terminal screen buffer.
  - `help` / `docs`: Renders syntax guide and launches the Master Command Manual modal.
- **Dedicated Solo Terminal Window**:
  - Each subagent card features an `[⛶ Solo Expand]` button.
  - Opens a maximized dedicated window displaying the complete uncompressed log stream of that worker.
  - Can be minimized to a floating dock in the bottom-right corner without interrupting execution.
  - Includes individual `[⏸️ Pause]` and `[⏹️ Stop]` process controls.

#### 6. Background Task Engine & Active Logout Interceptor
- **Cross-Tab Continuity**: Long-running decompilations and AI code generation pipelines continue executing uninterrupted across browser tab switches and window minimizations.
- **Active Logout Interceptor (`SweetAlert2`)**:
  - When the user initiates logout while tasks are active, ArcMorph intercepts the event and presents three options:
    1. **`[💾 Save & Logout]`**: Checkpoints all pipeline states and subagent counters into `saved_sessions/`. Displays a resume prompt on next login.
    2. **`[⏹️ Stop & Logout]`**: Halts active processes and quarantines files in `temp_quarantine/` with a 15-day retention policy (fully restorable).
    3. **`[↩️ Return]`**: Cancels logout and returns to the active workspace.

#### 7. SuperUser & NoSQL MongoDB Permission Management (`/users`)
- **Root SuperAdmin Authority**:
  - Assigned to **`superadmin` / `naimul_islam`**.
  - Only this root ID can access the `/users` console, create user accounts, and grant feature permissions.
- **Feature-Wise UI Permissions**:
  - Granular permissions mapped directly to application routes (`/`, `/graph`, `/ocr-studio`, `/terminal`, `/morph-hub`, `/notifications`, `/search`, `/settings`, `/profile`).
  - When permissions are modified for a user, their sidebar automatically filters hidden routes, and route guards deny unauthorized access.
- **MongoDB Audit Trail**:
  - Real-time audit feed logging events: `COLLECTION_INIT`, `AUTH_SUCCESS`, `AUTH_FAILED`, `USER_CREATED`, `PERMISSIONS_MUTATED`, and `AUTH_LOGOUT`.

#### 8. Operational Feedback & Notification Hub (`/notifications`)
- **Paces Template Card Layout**:
  - Built strictly with `page-wrapper-module`, `PageHeader`, and Paces responsive cards.
- **Features**:
  - Chronological alerts list (External AI feedback, Tool audit blueprints, System notices).
  - Split-pane Deep Inspector displaying structured markdown reports and AI confidence ratings (e.g. `Claude 3.7 Sonnet: 9.2/10`).
  - **Date-Range Filter Modal**: Allows filtering alerts between `From Date` and `To Date`.
  - **Run Tool Analysis**: Direct dispatch button that opens `/terminal` with the suggested refactoring workload.
  - **Soundwave Ripple & Web Audio Chime**: Topbar notification bell features a 10-second CSS keyframe soundwave ripple animation and an in-browser synthesized cybernetic dual-tone audio chime (587 Hz & 880 Hz).

#### 9. Deep RAG Code AST & Schema Search (`/search`)
- **Unified Corpus Index**:
  - In-memory vector-style search indexing C# Roslyn syntax nodes, SQL table definitions, architectural blueprints, and OCR vault records.
- **Features**:
  - Real-time query execution from the topbar quick search or dedicated search bar.
  - Category filters: *All*, *Code AST*, *Database Schema*, *Blueprint*, *OCR Vault*.
  - Syntax-highlighted code snippet previews with exact line references (e.g., `StudentAdmission.aspx.cs:L142-L188`).
  - Relevance percentage scores and deep links directly to the 3D Graph or Terminal.
  - Full client-side pagination.

#### 10. Intelligence Settings & Local Model Registry (`/settings`)
- **Cloud-Speed Local Model Recommendation**:
  - **Fast Orchestrator**: `Qwen2.5-3B-Instruct` (~120–160 tokens/sec, ~2.4 GB VRAM) acts as the high-speed task planner and router.
  - **Heavy Code Generation**: `Qwen2.5-Coder-14B` (32k context) handles complex C# to .NET 9 Clean Architecture conversion.
  - **Multimodal & OCR**: `Qwen2.5-VL-7B-Instruct` executes image and PDF document decomposition.
- **Features**:
  - Active model status toggles (Online/Offline) and latency monitors.
  - `+ Add AI Model Endpoint` modal supporting Ollama, vLLM, HuggingFace, and MCP endpoints.
  - **Paces Customizer Launcher**: Offcanvas theme customizer button relocated here to keep primary navigation clean.
  - Security settings for Lock Screen timeout (3, 5, 10, 15 minutes, or Disabled) and PIN reconfiguration.

---

### Deployment & Verification

#### Docker Deployment
The application is packaged as a high-performance multi-stage Docker container utilizing Node.js for Vite building and Nginx Alpine for production serving.

```bash
# Build and run the ArcMorph container
docker compose up --build -d

# Verify container status
docker ps --filter "name=project_arcmorph"

# Access the web application
# URL: http://localhost:3005
```

#### Default Credentials & Quick Access
| User Role | Username / Identifier | Password | Lock PIN | Permissions |
|---|---|---|---|---|
| **Root SuperAdmin** | `superadmin` or `naimul_islam` | `admin` or `password123` | `1234` | Full Platform Access |
| **Security Auditor** | `auditor_guest` | `guest123` | `0000` | Dashboard, Graph, Notifications |

---
*ArcMorph Platform Documentation • Developed by Google DeepMind Agentic Pair Programmer for Naimul Islam (pulok529)*
