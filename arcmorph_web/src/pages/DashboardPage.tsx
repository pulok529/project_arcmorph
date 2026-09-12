import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';

export const DashboardPage: React.FC = () => {
  // Chart 1: Debt Burn Down Spline Area
  const debtChartOptions: ApexCharts.ApexOptions = {
    chart: { type: 'area', height: 280, toolbar: { show: false } },
    stroke: { width: [3, 2], dashArray: [0, 4], curve: 'smooth' },
    colors: ['#00f2fe', '#3b82f6'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.35,
        opacityTo: 0.05,
        stops: [0, 95]
      }
    },
    xaxis: {
      categories: ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4', 'Sprint 5', 'Sprint 6', 'Current'],
      axisBorder: { show: false },
      labels: { style: { colors: '#94a3b8', fontSize: '11px' } }
    },
    yaxis: {
      tickAmount: 5,
      min: 0,
      max: 100,
      labels: {
        formatter: (val) => `${val}%`,
        style: { colors: '#94a3b8', fontSize: '11px' }
      }
    },
    dataLabels: { enabled: false },
    legend: { show: true, position: 'top', horizontalAlign: 'right', labels: { colors: '#cbd5e1' } },
    grid: { strokeDashArray: 4, borderColor: 'rgba(255, 255, 255, 0.08)' },
    tooltip: { theme: 'dark' }
  };

  const debtChartSeries = [
    { name: 'Target Modernization %', data: [15, 28, 45, 62, 78, 88, 94] },
    { name: 'Actual Burned Debt %', data: [12, 24, 40, 56, 70, 81, 85] }
  ];

  // Chart 2: Modernization Parity Radial Gauge
  const transformationOptions: ApexCharts.ApexOptions = {
    chart: { type: 'radialBar', height: 280 },
    plotOptions: {
      radialBar: {
        hollow: { size: '48%' },
        track: { background: 'rgba(255, 255, 255, 0.08)' },
        dataLabels: {
          name: { fontSize: '13px', color: '#94a3b8', offsetY: -10 },
          value: { fontSize: '22px', fontWeight: 700, color: '#00f2fe', offsetY: 6, formatter: (val) => `${val}%` },
          total: {
            show: true,
            label: 'Overall Parity',
            color: '#f8fafc',
            formatter: () => '88%'
          }
        }
      }
    },
    colors: ['#00f2fe', '#10b981', '#f59e0b', '#8b5cf6'],
    labels: ['UI Specs', 'ORM Slices', 'Workflows', 'API Gateway'],
    stroke: { lineCap: 'round' }
  };

  const transformationSeries = [94, 88, 76, 92];

  return (
    <div className="page-wrapper-module">
      <PageHeader title="ArcMorph Modernization Dashboard" category="Overview" />

      {/* Top Metric Cards */}
      <div className="row g-3 mb-4">
        <div className="col-sm-6 col-xl-3">
          <div className="card card-h-100">
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="text-muted fs-12 fw-semibold text-uppercase">Monolith Projects</span>
                <span className="badge bg-cyan text-dark fw-bold px-2">Active</span>
              </div>
              <h3 className="fw-bold mb-1 text-body">3</h3>
              <p className="fs-12 text-muted mb-0">
                <span className="text-success fw-bold"><i className="ti ti-arrow-up-right me-1"></i>Bornomala Monolith</span> loaded
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card card-h-100">
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="text-muted fs-12 fw-semibold text-uppercase">Cataloged Files</span>
                <span className="badge bg-info-subtle text-info border border-info-subtle px-2">AST Parsed</span>
              </div>
              <h3 className="fw-bold mb-1 text-body">2,165</h3>
              <p className="fs-12 text-muted mb-0">
                <span className="text-info fw-bold">1,288 C#</span> &bull; 443 ASPX &bull; 196 RPT
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card card-h-100">
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
          <div className="card card-h-100">
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

      {/* Middle Row: Charts and Modernization Parity */}
      <div className="row g-3 mb-4">
        {/* Modernization Velocity & Debt Burn-Down */}
        <div className="col-xl-8">
          <div className="card card-h-100">
            <div className="card-header justify-content-between d-flex align-items-center py-3">
              <div>
                <h4 className="card-title mb-1">Architecture Velocity & Debt Burn-Down</h4>
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

        {/* Modernization Parity Radial Gauge */}
        <div className="col-xl-4">
          <div className="card card-h-100">
            <div className="card-header justify-content-between d-flex align-items-center py-3">
              <h4 className="card-title mb-0">Modernization Parity</h4>
              <span className="text-muted fs-xs">Subsystem compliance status</span>
            </div>
            <div className="card-body p-3 d-flex flex-column align-items-center justify-content-center">
              <ReactApexChart options={transformationOptions} series={transformationSeries} type="radialBar" height={280} />
              <div className="w-100 mt-2">
                <div className="d-flex justify-content-between fs-12 mb-1">
                  <span className="text-muted">Target Stack:</span>
                  <span className="text-body fw-bold">.NET 9 + React 19 + MS SQL 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Active Process Runner & Launchpad */}
      <div className="row g-3 mb-4">
        {/* Active Process Runner Card */}
        <div className="col-xl-7">
          <div className="card card-h-100">
            <div className="card-header justify-content-between d-flex align-items-center py-3">
              <div className="d-flex align-items-center gap-2">
                <span className="spinner-grow spinner-grow-sm text-success" role="status"></span>
                <h4 className="card-title mb-0">Active Process Runner</h4>
              </div>
              <Link to="/terminal" className="btn btn-sm btn-outline-cyan fs-12">
                <i className="ti ti-terminal me-1"></i> Open Live Terminal
              </Link>
            </div>
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-secondary-subtle border border-secondary-subtle px-2 py-1 text-body">
                    <i className="ti ti-server me-1"></i> Pipeline #78864
                  </span>
                  <span className="text-body fw-bold">Bornomala Monolith Modernization</span>
                </div>
                <span className="text-success fw-bold fs-13">100% Completed</span>
              </div>

              <div className="progress mb-3" style={{ height: '8px' }}>
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: '100%' }}></div>
              </div>

              {/* Native Paces Metric Widgets */}
              <div className="row g-2 text-center fs-12">
                <div className="col-3">
                  <div className="p-2.5 border rounded bg-body-secondary text-center">
                    <span className="text-muted fs-xs d-block">AST Classes</span>
                    <h5 className="mb-0 fw-bold text-body">1,288</h5>
                  </div>
                </div>
                <div className="col-3">
                  <div className="p-2.5 border rounded bg-body-secondary text-center">
                    <span className="text-muted fs-xs d-block">React Specs</span>
                    <h5 className="mb-0 fw-bold text-body">443</h5>
                  </div>
                </div>
                <div className="col-3">
                  <div className="p-2.5 border rounded bg-body-secondary text-center">
                    <span className="text-muted fs-xs d-block">QuestPDF</span>
                    <h5 className="mb-0 fw-bold text-body">196</h5>
                  </div>
                </div>
                <div className="col-3">
                  <div className="p-2.5 border rounded bg-body-secondary text-center">
                    <span className="text-muted fs-xs d-block">Tables / DDL</span>
                    <h5 className="mb-0 fw-bold text-body">68</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Launchpad Card */}
        <div className="col-xl-5">
          <div className="card card-h-100">
            <div className="card-header justify-content-between d-flex align-items-center py-3">
              <h4 className="card-title mb-0">Modernization Launchpad</h4>
              <span className="text-muted fs-xs">Jump directly into tools and analyzers</span>
            </div>
            <div className="card-body p-3 d-flex flex-column justify-content-between gap-2">
              <Link to="/projects/proj_1788642109465" className="d-flex align-items-center justify-content-between p-3 rounded border border-secondary-subtle bg-body-secondary text-decoration-none hover-border-cyan">
                <div className="d-flex align-items-center gap-3">
                  <div className="avatar-sm rounded-circle d-flex align-items-center justify-content-center bg-info-subtle text-info" style={{ width: 40, height: 40 }}>
                    <i className="ti ti-layout-grid fs-20"></i>
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold text-body">Bornomala ERP Cockpit</h6>
                    <span className="text-muted fs-12">Access 24 interactive reverse-engineering widgets</span>
                  </div>
                </div>
                <i className="ti ti-arrow-right text-muted fs-18"></i>
              </Link>

              <Link to="/morph-hub" className="d-flex align-items-center justify-content-between p-3 rounded border border-secondary-subtle bg-body-secondary text-decoration-none hover-border-cyan">
                <div className="d-flex align-items-center gap-3">
                  <div className="avatar-sm rounded-circle d-flex align-items-center justify-content-center bg-primary-subtle text-primary" style={{ width: 40, height: 40 }}>
                    <i className="ti ti-folder fs-20"></i>
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold text-body">MorphHub Projects</h6>
                    <span className="text-muted fs-12">View and manage uploaded codebases</span>
                  </div>
                </div>
                <i className="ti ti-arrow-right text-muted fs-18"></i>
              </Link>

              <Link to="/ocr-studio" className="d-flex align-items-center justify-content-between p-3 rounded border border-secondary-subtle bg-body-secondary text-decoration-none hover-border-cyan">
                <div className="d-flex align-items-center gap-3">
                  <div className="avatar-sm rounded-circle d-flex align-items-center justify-content-center bg-success-subtle text-success" style={{ width: 40, height: 40 }}>
                    <i className="ti ti-scan fs-20"></i>
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold text-body">Universal OCR Studio</h6>
                    <span className="text-muted fs-12">Extract passports, CVs, and technical blueprints</span>
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
