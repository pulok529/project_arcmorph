# 📜 AI Development Rulebook: Theme Customizer Pipeline

## 🎯 Purpose
This rulebook defines the strict architecture and QA protocols for converting raw theme templates (`1_actual_template`) into curated clean HTML/CSS (`2_clean_html_css`) and production-grade Vite + React applications (`3_react_template`).

---

## 🏛️ Core Architectural Standards

### 1. Root Layout Wrappers & CSS Inheritance
* **Main Content Wrapper**: MUST always use the exact container class defined in the source template CSS (e.g., `<div className="content-page">`, NOT `.page-content` or generic divs).
* **Sidebar Offsets**: The main content wrapper must inherit the template's `margin-left: 240px` (or `70px` when condensed) to prevent cards from being rendered underneath `position: fixed` sidebars.
* **Footer Placement**: `<footer className="footer">` MUST be nested inside `.content-page` at the bottom of the page content.

### 2. Sidenav Menu & Collapse Mechanisms
* Desktop (>= 768px): Toggling sidebar MUST alternate `data-sidenav-size="condensed"` vs `"default"`.
* Mobile (<= 767px): Toggling sidebar MUST toggle `sidebar-enable` class on `<html>` and open offcanvas drawer with backdrop.

### 3. Theme Customizer Capabilities
Every converted template must provide the full set of theme controls:
1. **Color Scheme**: `light` / `dark` / `system`
2. **Topbar Color**: `light` / `dark` / `gray` / `gradient`
3. **Sidebar Color**: `dark` / `light` / `gray` / `gradient`
4. **Sidebar Size**: `default` / `condensed` / `compact`
5. **Layout Width**: `fluid` / `boxed`
6. **Layout Position**: `fixed` / `scrollable`
7. **Direction**: `ltr` / `rtl`
8. **Sidebar User Switch**: Boolean flag for user profile header
9. **Reset Layout**: Pinned footer button restoring defaults.

---

## 📐 Playwright Automated QA Protocol

All test suites (`tests_qa/audit_runner.js`) MUST perform **Geometric Coordinate & Bounding Box Validation**:
1. **Zero X-Axis Collision**: `content.getBoundingClientRect().left >= sidebar.getBoundingClientRect().right`
2. **Zero Y-Axis Collision**: `content.getBoundingClientRect().top >= topbar.getBoundingClientRect().bottom`
3. **Responsive Modes**: Re-validate geometry in Default (240px), Condensed (70px), and Mobile (375px) viewports.
4. **Log Retention**: Record all findings in words in `QA_AUDIT_LOG.md`.
