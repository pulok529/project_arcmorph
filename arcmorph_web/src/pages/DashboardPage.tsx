import React from 'react';
import { Link } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import { PageHeader } from '../components/common/PageHeader';

export const DashboardPage: React.FC = () => {
  // Debt Burn Down Area Chart
  const debtChartOptions: ApexCharts.ApexOptions = {
    chart: { type: 'area', height: 280, toolbar: { show: false }, background: 'transparent' },
    theme: { mode: 'dark' },
    stroke: { width: [3, 2], curve: 'smooth', dashArray: [0, 4] },
    colors: ['#00f2fe', '#3b82f6'],
    fill: {
      type: 'gradient',
      gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.05, stops: [0, 95] }
    },
    xaxis: {
      categories: ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4', 'Sprint 5', 'Sprint 6', 'Current'],
      axisBorder: { show: false },
      labels: { style: { colors: '#94a3b8' } }
    },
    yaxis: {
      labels: {
        style: { colors: '#94a3b8' },
        formatter: (val) => `${val}%`
      }
    },
    dataLabels: { enabled: false },
    legend: { show: true, position: 'top', horizontalAlign: 'right', labels: { colors: '#94a3b8' } },
    grid: { borderColor: 'rgba(255, 255, 255, 0.08)', strokeDashArray: 4 }
  };

  const debtChartSeries = [
    { name: 'Target Modernization %', data: [15, 30, 48, 62, 75, 88, 100] },
    { name: 'Actual Burned Debt %', data: [12, 28, 45, 60, 71, 82, 85] }
  ];

  // Component Transformation Radial Bar
  const transformationOptions: ApexCharts.ApexOptions = {
    chart: { type: 'radialBar', height: 280, background: 'transparent' },
    plotOptions: {
      radialBar: {
        hollow: { size: '40%' },
        dataLabels: {
          name: { fontSize: '12px', color: '#94a3b8', offsetY: -5 },
          value: { fontSize: '18px', fontWeight: 'bold', color: '#00f2fe', offsetY: 5 },
          total: {
            show: true,
            label: 'Overall Parity',
            color: '#94a3b8',
            formatter: () => '88%'
          }
        },
        track: { background: 'rgba(255, 255, 255, 0.05)' }
      }
    },
    colors: ['#00f2fe', '#3b82f6', '#10b981', '#f59e0b'],
    labels: ['C# BLL & DAL', 'React 19 Pages', 'QuestPDF Reports', 'MS SQL 2022 Schema']
  };

  const transformationSeries = [94, 88, 82, 98];

  return (
    <div className="container-fluid">
      <PageHeader
        title="Software Modernization Cockpit"
        category="ArcMorph Executive Hub"
        breadcrumbs={[{ label: 'Home' }, { label: 'Modernization Dashboard', active: true }]}
      />

      {/* Top Row: Portfolio Metrics */}
      <div className="row g-3 mb-4">
        <div className="col-sm-6 col-xl-3">
          <div className="card shadow-sm border-0 h-100" style={{ background: '#111827', border: '1px solid rgba(0, 242, 254, 0.15)' }}>
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="text-muted fs-12 fw-semibold text-uppercase">Tracked Projects</span>
                <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-2">
                  <i className="ti ti-folder me-1"></i> 1 Active
                </span>
              </div>
              <h3 className="fw-bold mb-1 text-light">3</h3>
              <p className="fs-12 text-muted mb-0">
                <span className="text-success fw-bold"><i className="ti ti-arrow-up-right me-1"></i>Bornomala Monolith</span> loaded
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card shadow-sm border-0 h-100" style={{ background: '#111827', border: '1px solid rgba(59, 130, 246, 0.15)' }}>
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="text-muted fs-12 fw-semibold text-uppercase">Cataloged Files</span>
                <span className="badge bg-info-subtle text-info border border-info-subtle px-2">AST Parsed</span>
              </div>
              <h3 className="fw-bold mb-1 text-light">2,165</h3>
              <p className="fs-12 text-muted mb-0">
                <span className="text-info fw-bold">1,288 C#</span> &bull; 443 ASPX &bull; 196 RPT
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card shadow-sm border-0 h-100" style={{ background: '#111827', border: '1px solid rgba(16, 185, 129, 0.15)' }}>
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="text-muted fs-12 fw-semibold text-uppercase">Tech Debt Burned</span>
                <span className="badge bg-success-subtle text-success border border-success-subtle px-2">+14% sprint</span>
              </div>
              <h3 className="fw-bold mb-1 text-success">85.4%</h3>
              <p className="fs-12 text-muted mb-0">
                <span className="text-success fw-bold">Clean Architecture</span> compliant
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card shadow-sm border-0 h-100" style={{ background: '#111827', border: '1px solid rgba(245, 158, 11, 0.15)' }}>
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="text-muted fs-12 fw-semibold text-uppercase">Vision QA Pass Rate</span>
                <span className="badge bg-warning-subtle text-warning border border-warning-subtle px-2">Playwright</span>
              </div>
              <h3 className="fw-bold mb-1 text-warning">100%</h3>
              <p className="fs-12 text-muted mb-0">
                <span className="text-warning fw-bold">0 X/Y Collisions</span> across viewports
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row: Charts and Active Pipeline */}
      <div className="row g-3 mb-4">
        {/* Modernization Burn Down */}
        <div className="col-xl-8">
          <div className="card shadow-sm border-0 h-100" style={{ background: '#111827', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="card-header bg-transparent border-bottom border-dark d-flex align-items-center justify-content-between py-3">
              <div>
                <h5 className="card-title text-light mb-1">Architecture Velocity & Debt Burn-Down</h5>
                <p className="fs-12 text-muted mb-0">Tracking cumulative decoupling across CQRS slices and React 19 pages</p>
              </div>
              <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-2 py-1">
                <i className="ti ti-chart-line me-1"></i> Automated Convergence
              </span>
            </div>
            <div className="card-body p-3">
              <ReactApexChart options={debtChartOptions} series={debtChartSeries} type="area" height={280} />
            </div>
          </div>
        </div>

        {/* Parity Radial Dial */}
        <div className="col-xl-4">
          <div className="card shadow-sm border-0 h-100" style={{ background: '#111827', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="card-header bg-transparent border-bottom border-dark py-3">
              <h5 className="card-title text-light mb-1">Modernization Parity</h5>
              <p className="fs-12 text-muted mb-0">Subsystem compliance status</p>
            </div>
            <div className="card-body p-3 d-flex flex-column align-items-center justify-content-center">
              <ReactApexChart options={transformationOptions} series={transformationSeries} type="radialBar" height={280} />
              <div className="w-100 mt-2">
                <div className="d-flex justify-content-between fs-12 mb-1">
                  <span className="text-muted">Target Stack:</span>
                  <span className="text-light fw-bold">.NET 9 + React 19 + MS SQL 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Active Process Widget & Quick Actions */}
      <div className="row g-3 mb-4">
        {/* Active Pipeline Card */}
        <div className="col-xl-7">
          <div className="card shadow-sm border-0 h-100" style={{ background: '#111827', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
            <div className="card-header bg-transparent border-bottom border-dark d-flex align-items-center justify-content-between py-3">
              <div className="d-flex align-items-center gap-2">
                <span className="spinner-grow spinner-grow-sm text-success" role="status"></span>
                <h5 className="card-title text-light mb-0">Active Process Runner</h5>
              </div>
              <Link to="/terminal" className="btn btn-sm btn-outline-cyan fs-12" style={{ borderColor: '#00f2fe', color: '#00f2fe' }}>
                <i className="ti ti-terminal me-1"></i> Open Live Terminal
              </Link>
            </div>
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-dark border border-secondary px-2 py-1 text-light">
                    <i className="ti ti-server me-1"></i> Pipeline #78864
                  </span>
                  <span className="text-light fw-bold">Bornomala Monolith Modernization</span>
                </div>
                <span className="text-success fw-bold fs-13">100% Completed</span>
              </div>

              <div className="progress mb-3" style={{ height: '8px', background: 'rgba(255,255,255,0.08)' }}>
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '100%', background: 'linear-gradient(90deg, #00f2fe, #10b981)' }}></div>
              </div>

              <div className="row g-2 text-center fs-12">
                <div className="col-3">
                  <div className="p-2 rounded bg-dark border border-secondary">
                    <span className="text-muted d-block">AST Classes</span>
                    <span className="fw-bold text-light">1,288</span>
                  </div>
                </div>
                <div className="col-3">
                  <div className="p-2 rounded bg-dark border border-secondary">
                    <span className="text-muted d-block">React Specs</span>
                    <span className="fw-bold text-light">443</span>
                  </div>
                </div>
                <div className="col-3">
                  <div className="p-2 rounded bg-dark border border-secondary">
                    <span className="text-muted d-block">QuestPDF</span>
                    <span className="fw-bold text-light">196</span>
                  </div>
                </div>
                <div className="col-3">
                  <div className="p-2 rounded bg-dark border border-secondary">
                    <span className="text-muted d-block">Tables / DDL</span>
                    <span className="fw-bold text-light">68</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Launchpad */}
        <div className="col-xl-5">
          <div className="card shadow-sm border-0 h-100" style={{ background: '#111827', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="card-header bg-transparent border-bottom border-dark py-3">
              <h5 className="card-title text-light mb-1">Modernization Launchpad</h5>
              <p className="fs-12 text-muted mb-0">Jump directly into tools and analyzers</p>
            </div>
            <div className="card-body p-3 d-flex flex-column justify-content-between gap-2">
              <Link to="/projects/proj_1788642109465" className="d-flex align-items-center justify-content-between p-3 rounded text-decoration-none border border-dark" style={{ background: 'rgba(0, 242, 254, 0.04)' }}>
                <div className="d-flex align-items-center gap-3">
                  <div className="avatar-sm rounded-circle d-flex align-items-center justify-content-center bg-cyan-subtle text-cyan" style={{ background: 'rgba(0,242,254,0.1)', color: '#00f2fe', width: 40, height: 40 }}>
                    <i className="ti ti-layout-grid fs-20"></i>
                  </div>
                  <div>
                    <h6 className="text-light mb-0 fw-bold">Bornomala ERP Cockpit</h6>
                    <span className="text-muted fs-12">Access 24 interactive reverse-engineering widgets</span>
                  </div>
                </div>
                <i className="ti ti-arrow-right text-muted fs-18"></i>
              </Link>

              <Link to="/morph-hub" className="d-flex align-items-center justify-content-between p-3 rounded text-decoration-none border border-dark" style={{ background: 'rgba(59, 130, 246, 0.04)' }}>
                <div className="d-flex align-items-center gap-3">
                  <div className="avatar-sm rounded-circle d-flex align-items-center justify-content-center" style={{ background: 'rgba(59,130,246,0.1)', color: '#3b82f6', width: 40, height: 40 }}>
                    <i className="ti ti-folder fs-20"></i>
                  </div>
                  <div>
                    <h6 className="text-light mb-0 fw-bold">MorphHub Projects</h6>
                    <span className="text-muted fs-12">View and manage uploaded codebases</span>
                  </div>
                </div>
                <i className="ti ti-arrow-right text-muted fs-18"></i>
              </Link>

              <Link to="/upload" className="d-flex align-items-center justify-content-between p-3 rounded text-decoration-none border border-dark" style={{ background: 'rgba(16, 185, 129, 0.04)' }}>
                <div className="d-flex align-items-center gap-3">
                  <div className="avatar-sm rounded-circle d-flex align-items-center justify-content-center" style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', width: 40, height: 40 }}>
                    <i className="ti ti-upload fs-20"></i>
                  </div>
                  <div>
                    <h6 className="text-light mb-0 fw-bold">Intake New Project</h6>
                    <span className="text-muted fs-12">Drag-and-drop legacy archive (.zip/.rar/.bak)</span>
                  </div>
                </div>
                <i className="ti ti-arrow-right text-muted fs-18"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
