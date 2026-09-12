import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import SimpleBar from 'simplebar-react';
import { PageHeader } from '../components/common/PageHeader';
import { VectorWorldMap } from '../components/common/VectorWorldMap';

export const DashboardPage: React.FC = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState('10');
  const [activeTab, setActiveTab] = useState<'users' | 'sessions' | 'bounce' | 'duration'>('users');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeUsers, setActiveUsers] = useState(125);
  const [activeViews, setActiveViews] = useState(125);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(Math.floor(150 * Math.random() + 150));
      setActiveViews(Math.floor(Math.random() * 150 + 25));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Chart 1: Stacked Bar Chart for Card 1 (Total Orders)
  const ordersChartOptions: ApexCharts.ApexOptions = {
    chart: { type: 'bar', height: 263, stacked: true, toolbar: { show: false } },
    plotOptions: { bar: { columnWidth: '35%', borderRadius: 2 } },
    colors: ['#236dc9', '#00c5bc'],
    dataLabels: { enabled: false },
    legend: { show: true, position: 'bottom', horizontalAlign: 'center', fontSize: '11px', offsetY: 10 },
    xaxis: { 
      categories: ['1D', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', '11D', '12D', '13D', '14D', '15D'], 
      tickAmount: 6,
      labels: { style: { fontSize: '11px' } } 
    },
    yaxis: { show: true, labels: { style: { fontSize: '10px' } } },
    grid: { show: false, padding: { top: -10, right: 0, bottom: -10, left: 10 } }
  };
  const ordersChartSeries = [
    { name: 'Orders', data: [45, 60, 75, 50, 65, 80, 70, 60, 55, 65, 75, 85, 70, 65, 75] },
    { name: 'Refunds', data: [15, 12, 18, 10, 14, 16, 12, 10, 11, 13, 15, 17, 14, 13, 15] }
  ];

  // Chart 4: Sessions Overview Spline Area Chart (Dynamic series per tab)
  const tabConfigs = {
    users: {
      visitors: [16, 19, 19, 16, 16, 14, 15, 15, 17, 17, 19, 19, 18, 18, 20, 20, 18, 18, 22, 22, 20, 20, 18, 18, 20, 20, 18, 20, 20, 22],
      pageViews: [21, 24, 24, 21, 21, 19, 20, 20, 22, 22, 24, 24, 23, 23, 25, 25, 23, 23, 27, 27, 25, 25, 23, 23, 25, 25, 23, 25, 25, 27],
      unit: 'k'
    },
    sessions: {
      visitors: [20, 22, 23, 21, 21, 22, 23, 22, 23, 24, 23, 23, 24, 25, 24, 24, 25, 27, 29, 27, 26, 26, 26, 26, 26, 27, 26, 28, 28, 29],
      pageViews: [25, 28, 29, 26, 26, 27, 28, 27, 28, 30, 29, 29, 30, 31, 30, 30, 31, 33, 35, 33, 32, 32, 32, 32, 32, 33, 32, 34, 34, 35],
      unit: 'k'
    },
    bounce: {
      visitors: [30, 32, 31, 29, 28, 30, 31, 29, 30, 32, 31, 30, 31, 33, 31, 30, 32, 34, 36, 34, 33, 32, 32, 32, 33, 34, 33, 35, 35, 36],
      pageViews: [40, 42, 41, 39, 38, 40, 41, 39, 40, 42, 41, 40, 41, 43, 41, 40, 42, 44, 46, 44, 43, 42, 42, 42, 43, 44, 43, 45, 45, 46],
      unit: '%'
    },
    duration: {
      visitors: [120, 140, 135, 125, 130, 145, 150, 140, 145, 160, 155, 150, 155, 165, 160, 155, 165, 180, 195, 180, 175, 170, 170, 170, 175, 180, 175, 190, 190, 195],
      pageViews: [180, 200, 195, 185, 190, 205, 210, 200, 205, 220, 215, 210, 215, 225, 220, 215, 225, 240, 255, 240, 235, 230, 230, 230, 235, 240, 235, 250, 250, 255],
      unit: 's'
    }
  };

  const currentTab = tabConfigs[activeTab];
  const sessionsChartOptions: ApexCharts.ApexOptions = {
    chart: { type: 'area', height: 328, toolbar: { show: false } },
    stroke: { width: [2, 2], dashArray: [0, 5], curve: 'smooth' },
    colors: ['#236dc9', '#f59e0b'],
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.35, opacityTo: 0.05, stops: [0, 95] } },
    xaxis: { categories: Array.from({ length: 30 }, (_, i) => String(i + 1)), axisBorder: { show: false } },
    yaxis: { tickAmount: 3, min: 0, labels: { formatter: (val) => `${val}${currentTab.unit}` } },
    dataLabels: { enabled: false },
    legend: { show: true, position: 'bottom', horizontalAlign: 'center' },
    grid: { strokeDashArray: 7, borderColor: '#e2e8f0' }
  };
  const sessionsChartSeries = [
    { name: 'Visitors', data: currentTab.visitors },
    { name: 'Page Views', data: currentTab.pageViews }
  ];

  // Chart 5: Total Users Donut Chart
  const usersDonutOptions: ApexCharts.ApexOptions = {
    chart: { type: 'donut', height: 160 },
    colors: ['#236dc9', '#00c5bc', '#eab308'],
    labels: ['Organic', 'Referral', 'Paid'],
    legend: { show: false },
    stroke: { width: 0 },
    dataLabels: { enabled: false },
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
              label: 'Total',
              fontSize: '13px',
              fontWeight: 600,
              formatter: () => '140k'
            }
          }
        }
      }
    }
  };
  const usersDonutSeries = [44, 55, 41];

  const toggleRow = (id: number) => {
    setSelectedRows(prev => prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]);
  };

  const tableData = [
    { id: 1, path: '/dashboard', ref: 'Direct', views: '3,980', time: '02m:12s', bounce: '19.5%', conv: '4.3%' },
    { id: 2, path: '/pricing', ref: 'Google', views: '1,742', time: '01m:49s', bounce: '22.1%', conv: '6.7%' },
    { id: 3, path: '/features', ref: 'LinkedIn', views: '2,310', time: '02m:05s', bounce: '17.8%', conv: '5.4%' },
    { id: 4, path: '/blog/how-to-boost-sales', ref: 'Twitter', views: '1,128', time: '03m:14s', bounce: '14.9%', conv: '2.2%' },
    { id: 5, path: '/docs/get-started', ref: 'Reddit', views: '2,540', time: '04m:01s', bounce: '11.2%', conv: '7.9%' }
  ];

  const filteredData = tableData.filter(d => 
    d.path.toLowerCase().includes(searchQuery.toLowerCase()) || 
    d.ref.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <PageHeader title="Analytics" category="Dashboard" />

      {/* Row 1: KPI & Goal Target Cards (Cards 1, 2, 3) */}
      <div className="row g-3">
        {/* Card 1: Total Orders */}
        <div className="col-xxl-4 col-xl-6">
          <div className="card card-h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start flex-wrap">
                <div>
                  <h4 className="fs-13 mb-2 fw-bold text-uppercase text-muted">Total Orders</h4>
                  <div className="d-flex align-items-center gap-2 mb-2 py-1">
                    <div className="avatar-md flex-shrink-0">
                      <span className="avatar-title text-bg-success rounded-circle">
                        <i className="ti ti-basket fs-xxl"></i>
                      </span>
                    </div>
                    <h3 className="mb-0 fw-bold">$659.8k</h3>
                    <span className="badge fs-13 ms-auto badge-soft-danger">
                      <i className="ti ti-arrow-down"></i> 3.21%
                    </span>
                  </div>
                </div>
                <div className="app-search app-search-sm">
                  <select className="form-select form-control form-select-sm">
                    <option value="All">All Time</option>
                    <option value="today">Today</option>
                    <option value="last_7_days">Last 7 Days</option>
                    <option value="last_30_days">Last 30 Days</option>
                    <option value="last_90_days" selected>Last 90 Days</option>
                  </select>
                </div>
              </div>
              <ReactApexChart options={ordersChartOptions} series={ordersChartSeries} type="bar" height={263} />
            </div>
          </div>
        </div>

        {/* Card 2: Total Visitors */}
        <div className="col-xxl-4 col-xl-6">
          <div className="card card-h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start flex-wrap">
                <div>
                  <h4 className="fs-13 mb-2 fw-bold text-uppercase text-muted">Total Visitors</h4>
                  <div className="d-flex align-items-center gap-2 mb-2 py-1">
                    <div className="avatar-md flex-shrink-0">
                      <span className="avatar-title text-bg-secondary rounded-circle">
                        <i className="ti ti-eye fs-xxl"></i>
                      </span>
                    </div>
                    <h3 className="mb-0 fw-bold">82.3M</h3>
                    <span className="badge fs-13 ms-auto badge-soft-success">
                      <i className="ti ti-arrow-up"></i> 6.84%
                    </span>
                  </div>
                </div>
                <div className="app-search app-search-sm">
                  <select className="form-select form-control form-select-sm">
                    <option value="All">All Time</option>
                    <option value="today">Today</option>
                    <option value="last_7_days">Last 7 Days</option>
                    <option value="last_30_days">Last 30 Days</option>
                    <option value="last_90_days" selected>Last 90 Days</option>
                  </select>
                </div>
              </div>

              {/* Mobile vs Desktop Dual Meters */}
              <div className="row text-center mt-2 mb-1">
                <div className="col-6 text-start">
                  <span className="text-muted fs-xs d-block">MOBILE PHONE</span>
                  <h5 className="mb-0 fw-bold">69.40%</h5>
                  <span className="text-muted fs-xs">41,927 Sessions</span>
                </div>
                <div className="col-6 text-end">
                  <span className="text-muted fs-xs d-block">DESKTOP</span>
                  <h5 className="mb-0 fw-bold">30.60%</h5>
                  <span className="text-muted fs-xs">18,476 Sessions</span>
                </div>
              </div>
              <div className="progress mb-3" style={{ height: 8 }}>
                <div className="progress-bar bg-primary" style={{ width: '69.4%' }}></div>
                <div className="progress-bar bg-info" style={{ width: '30.6%' }}></div>
              </div>

              {/* Goal Progress Table */}
              <div className="table-responsive">
                <table className="table table-sm table-borderless fs-xs mb-0">
                  <thead className="table-light">
                    <tr><th>GOAL</th><th>COMPLETED</th><th>TARGET</th><th>PROGRESS</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Total Visitors</td><td>824,300</td><td>1,000,000</td><td><span className="badge bg-success">82%</span></td></tr>
                    <tr><td>Mobile Traffic</td><td>41,927</td><td>60,000</td><td><span className="badge bg-primary">69%</span></td></tr>
                    <tr><td>Desktop Traffic</td><td>18,476</td><td>30,000</td><td><span className="badge bg-info">61%</span></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Total Subscribers */}
        <div className="col-xxl-4 col-xl-12">
          <div className="card card-h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start flex-wrap">
                <div>
                  <h4 className="fs-13 mb-2 fw-bold text-uppercase text-muted">Total Subscribers</h4>
                  <div className="d-flex align-items-center gap-2 mb-2 py-1">
                    <div className="avatar-md flex-shrink-0">
                      <span className="avatar-title text-bg-info rounded-circle">
                        <i className="ti ti-mail fs-xxl"></i>
                      </span>
                    </div>
                    <h3 className="mb-0 fw-bold">55.6k</h3>
                    <span className="badge fs-13 ms-auto badge-soft-success">
                      <i className="ti ti-arrow-up"></i> 4.87%
                    </span>
                  </div>
                </div>
                <div className="app-search app-search-sm">
                  <select className="form-select form-control form-select-sm">
                    <option value="All">All Time</option>
                    <option value="today">Today</option>
                    <option value="last_7_days">Last 7 Days</option>
                    <option value="last_30_days">Last 30 Days</option>
                    <option value="last_90_days" selected>Last 90 Days</option>
                  </select>
                </div>
              </div>

              <div className="mb-2 mt-2">
                <div className="d-flex justify-content-between fs-xs mb-1">
                  <span>Email Marketing</span><span>+ 34,920 &nbsp; <strong>27.41%</strong></span>
                </div>
                <div className="progress" style={{ height: 6 }}><div className="progress-bar bg-primary" style={{ width: '27.41%' }}></div></div>
              </div>

              <div className="mb-2">
                <div className="d-flex justify-content-between fs-xs mb-1">
                  <span>Social Marketing</span><span>+ 58,775 &nbsp; <strong>46.13%</strong></span>
                </div>
                <div className="progress" style={{ height: 6 }}><div className="progress-bar bg-info" style={{ width: '46.13%' }}></div></div>
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between fs-xs mb-1">
                  <span>Direct</span><span>+ 33,645 &nbsp; <strong>26.46%</strong></span>
                </div>
                <div className="progress" style={{ height: 6 }}><div className="progress-bar bg-warning" style={{ width: '26.46%' }}></div></div>
              </div>

              {/* Congratulations Milestone Banner */}
              <div className="p-2 border rounded bg-light d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <span className="avatar-sm bg-warning-subtle text-warning rounded-circle d-flex align-items-center justify-content-center">
                    <i className="ti ti-award fs-18"></i>
                  </span>
                  <div>
                    <h6 className="mb-0 fs-xs fw-bold">Congratulations !...</h6>
                    <span className="text-muted fs-11">You've reached a new subscriber milestone.</span>
                  </div>
                </div>
                <div className="text-end">
                  <h6 className="mb-0 fw-bold fs-xs text-primary">29.4k</h6>
                  <span className="text-muted fs-10 text-uppercase">SUBSCRIBERS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Sessions Overview (Col 9) & Audience Insights (Col 3) */}
      <div className="row g-3 mt-1">
        {/* Card 4: Sessions Overview */}
        <div className="col-xxl-9 col-xl-8">
          <div className="card card-h-100">
            <div className="card-header justify-content-between d-flex align-items-center">
              <h4 className="card-title mb-0">
                Sessions Overview <span className="text-muted fs-base fw-normal">(609.5k Sessions)</span>
              </h4>
              <div>
                <a className="btn btn-sm btn-outline-secondary me-1" href="#export"><i className="ti ti-cloud-upload me-1"></i> Export</a>
                <a className="btn btn-sm btn-light" href="#import"><i className="ti ti-download me-1"></i> Import</a>
              </div>
            </div>
            <div className="card-body p-0">
              {/* 4 Authentic Sub-metrics Tabs */}
              <ul className="nav nav-tabs nav-justified nav-bordered mb-0">
                <li className="nav-item">
                  <button 
                    className={`nav-link py-3 gap-2 d-flex align-items-center justify-content-center ${activeTab === 'users' ? 'active' : ''}`}
                    onClick={() => setActiveTab('users')}
                  >
                    <span className="avatar-md flex-shrink-0 d-none d-xxl-block" style={{ width: 36, height: 36 }}>
                      <span className="avatar-title bg-info-subtle text-info rounded-circle d-flex align-items-center justify-content-center h-100 w-100">
                        <i className="ti ti-users fs-18"></i>
                      </span>
                    </span>
                    <span className="text-start">
                      <span className="text-muted fs-xs d-block">Users</span>
                      <h5 className="mb-0 fw-bold fs-sm">39.03k <span className="fs-xs text-success">↑ 3.02%</span></h5>
                    </span>
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link py-3 gap-2 d-flex align-items-center justify-content-center ${activeTab === 'sessions' ? 'active' : ''}`}
                    onClick={() => setActiveTab('sessions')}
                  >
                    <span className="avatar-md flex-shrink-0 d-none d-xxl-block" style={{ width: 36, height: 36 }}>
                      <span className="avatar-title bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center h-100 w-100">
                        <i className="ti ti-eye fs-18"></i>
                      </span>
                    </span>
                    <span className="text-start">
                      <span className="text-muted fs-xs d-block">Sessions</span>
                      <h5 className="mb-0 fw-bold fs-sm">42.15k <span className="fs-xs text-danger">↓ 4.78%</span></h5>
                    </span>
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link py-3 gap-2 d-flex align-items-center justify-content-center ${activeTab === 'bounce' ? 'active' : ''}`}
                    onClick={() => setActiveTab('bounce')}
                  >
                    <span className="avatar-md flex-shrink-0 d-none d-xxl-block" style={{ width: 36, height: 36 }}>
                      <span className="avatar-title bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center h-100 w-100">
                        <i className="ti ti-trending-down fs-18"></i>
                      </span>
                    </span>
                    <span className="text-start">
                      <span className="text-muted fs-xs d-block">Bounce Rate</span>
                      <h5 className="mb-0 fw-bold fs-sm">21.20% <span className="fs-xs text-danger">↓ 31.39%</span></h5>
                    </span>
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link py-3 gap-2 d-flex align-items-center justify-content-center ${activeTab === 'duration' ? 'active' : ''}`}
                    onClick={() => setActiveTab('duration')}
                  >
                    <span className="avatar-md flex-shrink-0 d-none d-xxl-block" style={{ width: 36, height: 36 }}>
                      <span className="avatar-title bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center h-100 w-100">
                        <i className="ti ti-clock fs-18"></i>
                      </span>
                    </span>
                    <span className="text-start">
                      <span className="text-muted fs-xs d-block">Session Duration</span>
                      <h5 className="mb-0 fw-bold fs-sm">3m 12s <span className="fs-xs text-success">↑ 7.92%</span></h5>
                    </span>
                  </button>
                </li>
              </ul>
              <div className="p-3">
                <ReactApexChart options={sessionsChartOptions} series={sessionsChartSeries} type="area" height={328} />
              </div>
            </div>
          </div>
        </div>

        {/* Card 5: Audience Insights */}
        <div className="col-xxl-3 col-xl-4">
          <div className="card card-h-100">
            <div className="card-header justify-content-between d-flex align-items-center">
              <h4 className="card-title mb-0">Audience Insights</h4>
              <button className="btn btn-sm btn-link text-muted p-0"><i className="ti ti-dots-vertical fs-18"></i></button>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-around text-muted mb-2">
                <span><i className="ti ti-users me-1 text-primary"></i> <strong id="active-users-count">{activeUsers}</strong></span>
                <span><i className="ti ti-device-desktop me-1 text-info"></i> <strong id="active-views-count">{activeViews}</strong></span>
              </div>
              <ReactApexChart options={usersDonutOptions} series={usersDonutSeries} type="donut" height={160} />
              <div className="table-responsive mt-3">
                <table className="table table-sm align-middle fs-xs mb-3">
                  <thead className="table-light"><tr><th>PAGE</th><th>VIEWS</th><th>B. RATE</th></tr></thead>
                  <tbody>
                    <tr><td><code>/dashboard-analytics</code></td><td>25</td><td><span className="badge bg-success-subtle text-success">87.5%</span></td></tr>
                    <tr><td><code>/dashboard-crm</code></td><td>15</td><td><span className="badge bg-info-subtle text-info">21.4%</span></td></tr>
                    <tr><td><code>/ubold/dashboard</code></td><td>10</td><td><span className="badge bg-warning-subtle text-warning">63.5%</span></td></tr>
                  </tbody>
                </table>
              </div>
              <button className="btn btn-primary btn-sm w-100 fw-semibold">View All <i className="ti ti-arrow-right ms-1"></i></button>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: User Geography (Col 7) & Top Traffic Sources (Col 5) */}
      <div className="row g-3 mt-1">
        {/* Card 6: User Geography with Real Vector Map */}
        <div className="col-xl-7">
          <div className="card card-h-100">
            <div className="card-header justify-content-between d-flex align-items-center">
              <h4 className="card-title mb-0">
                User Geography Intelligence <i className="ti ti-info-circle text-muted fs-xs" title="Deep insight into user distribution across the globe."></i>
              </h4>
              <button className="btn btn-sm btn-link text-muted p-0"><i className="ti ti-dots-vertical fs-18"></i></button>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <VectorWorldMap height={300} selectedRegions={['CA', 'US', 'RU', 'IN']} />
                </div>
                <div className="col-md-5">
                  <div className="mb-3">
                    <div className="d-flex justify-content-between fs-xs mb-1">
                      <span><img src="/assets/images/flags/us.svg" alt="us" className="me-1 rounded" style={{ width: 16 }} /> United States</span>
                      <span className="fw-bold">67.5k (72.15%)</span>
                    </div>
                    <div className="progress" style={{ height: 6 }}><div className="progress-bar bg-primary" style={{ width: '72.15%' }}></div></div>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between fs-xs mb-1">
                      <span><img src="/assets/images/flags/in.svg" alt="in" className="me-1 rounded" style={{ width: 16 }} /> India</span>
                      <span className="fw-bold">7.92k (28.65%)</span>
                    </div>
                    <div className="progress" style={{ height: 6 }}><div className="progress-bar bg-success" style={{ width: '28.65%' }}></div></div>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between fs-xs mb-1">
                      <span><img src="/assets/images/flags/br.svg" alt="br" className="me-1 rounded" style={{ width: 16 }} /> Brazil</span>
                      <span className="fw-bold">89.05k (62.5%)</span>
                    </div>
                    <div className="progress" style={{ height: 6 }}><div className="progress-bar bg-warning" style={{ width: '62.5%' }}></div></div>
                  </div>

                  <div className="mb-1">
                    <div className="d-flex justify-content-between fs-xs mb-1">
                      <span><img src="/assets/images/flags/ca.svg" alt="ca" className="me-1 rounded" style={{ width: 16 }} /> Canada</span>
                      <span className="fw-bold">5.3k (42.2%)</span>
                    </div>
                    <div className="progress" style={{ height: 6 }}><div className="progress-bar bg-info" style={{ width: '42.2%' }}></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 7: Top Traffic Sources (Authentic progress-info & SVGs) */}
        <div className="col-xl-5">
          <div className="card card-h-100">
            <div className="card-header justify-content-between d-flex align-items-center">
              <h4 className="card-title mb-0">
                Top Traffic Sources <i className="ti ti-info-circle text-muted fs-xs" title="Shows which channels drive the most traffic."></i>
              </h4>
              <button className="btn btn-sm btn-link text-muted p-0"><i className="ti ti-dots-vertical fs-18"></i></button>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  {/* Google */}
                  <div className="custom-progress mb-3">
                    <div className="progress-info d-flex justify-content-between align-items-center">
                      <div>
                        <img src="/assets/images/logos/google.svg" height="24" className="me-1" alt="google" />
                        <span className="align-middle fw-semibold fs-xs">Google</span>
                      </div>
                      <span className="fw-semibold text-muted fs-xs">87.8k</span>
                    </div>
                    <div className="progress" style={{ height: 4 }}><div className="progress-bar bg-warning" style={{ width: '72%' }}></div></div>
                  </div>

                  {/* Instagram */}
                  <div className="custom-progress mb-3">
                    <div className="progress-info d-flex justify-content-between align-items-center">
                      <div>
                        <img src="/assets/images/logos/instagram.svg" height="24" className="me-1" alt="instagram" />
                        <span className="align-middle fw-semibold fs-xs">Instagram</span>
                      </div>
                      <span className="fw-semibold text-muted fs-xs">42.9k</span>
                    </div>
                    <div className="progress" style={{ height: 4 }}><div className="progress-bar bg-danger" style={{ width: '30%' }}></div></div>
                  </div>

                  {/* LinkedIn */}
                  <div className="custom-progress mb-3">
                    <div className="progress-info d-flex justify-content-between align-items-center">
                      <div>
                        <img src="/assets/images/logos/linkedin.svg" height="20" className="me-1" alt="linkedin" />
                        <span className="align-middle fw-semibold fs-xs">LinkedIn</span>
                      </div>
                      <span className="fw-semibold text-muted fs-xs">58.5k</span>
                    </div>
                    <div className="progress" style={{ height: 4 }}><div className="progress-bar bg-info" style={{ width: '43%' }}></div></div>
                  </div>

                  {/* Dribbble */}
                  <div className="custom-progress mb-3">
                    <div className="progress-info d-flex justify-content-between align-items-center">
                      <div>
                        <img src="/assets/images/logos/dribbble.svg" height="24" className="me-1" alt="dribbble" />
                        <span className="align-middle fw-semibold fs-xs">Dribbble</span>
                      </div>
                      <span className="fw-semibold text-muted fs-xs">2.85k</span>
                    </div>
                    <div className="progress" style={{ height: 4 }}><div className="progress-bar bg-secondary" style={{ width: '12%' }}></div></div>
                  </div>

                  {/* Messenger */}
                  <div className="custom-progress mb-0">
                    <div className="progress-info d-flex justify-content-between align-items-center">
                      <div>
                        <img src="/assets/images/logos/messenger.svg" height="24" className="me-1" alt="messenger" />
                        <span className="align-middle fw-semibold fs-xs">Messenger</span>
                      </div>
                      <span className="fw-semibold text-muted fs-xs">9.08k</span>
                    </div>
                    <div className="progress" style={{ height: 4 }}><div className="progress-bar bg-primary" style={{ width: '5%' }}></div></div>
                  </div>
                </div>

                <div className="col-6">
                  {/* Meta */}
                  <div className="custom-progress mb-3">
                    <div className="progress-info d-flex justify-content-between align-items-center">
                      <div>
                        <img src="/assets/images/logos/meta.svg" height="24" className="me-1" alt="meta" />
                        <span className="align-middle fw-semibold fs-xs">Meta</span>
                      </div>
                      <span className="fw-semibold text-muted fs-xs">77.7k</span>
                    </div>
                    <div className="progress" style={{ height: 4 }}><div className="progress-bar bg-primary" style={{ width: '65%' }}></div></div>
                  </div>

                  {/* Telegram */}
                  <div className="custom-progress mb-3">
                    <div className="progress-info d-flex justify-content-between align-items-center">
                      <div>
                        <img src="/assets/images/logos/telegram.svg" height="24" className="me-1" alt="telegram" />
                        <span className="align-middle fw-semibold fs-xs">Telegram</span>
                      </div>
                      <span className="fw-semibold text-muted fs-xs">31.5k</span>
                    </div>
                    <div className="progress" style={{ height: 4 }}><div className="progress-bar bg-info" style={{ width: '25%' }}></div></div>
                  </div>

                  {/* Twitter X */}
                  <div className="custom-progress mb-3">
                    <div className="progress-info d-flex justify-content-between align-items-center">
                      <div>
                        <img src="/assets/images/logos/x.svg" height="20" className="me-1" alt="twitter-x" />
                        <span className="align-middle fw-semibold fs-xs">Twitter X</span>
                      </div>
                      <span className="fw-semibold text-muted fs-xs">22.6k</span>
                    </div>
                    <div className="progress" style={{ height: 4 }}><div className="progress-bar bg-dark" style={{ width: '15%' }}></div></div>
                  </div>

                  {/* WhatsApp */}
                  <div className="custom-progress mb-3">
                    <div className="progress-info d-flex justify-content-between align-items-center">
                      <div>
                        <img src="/assets/images/logos/whatsapp.svg" height="24" className="me-1" alt="whatsapp" />
                        <span className="align-middle fw-semibold fs-xs">WhatsApp</span>
                      </div>
                      <span className="fw-semibold text-muted fs-xs">3.1k</span>
                    </div>
                    <div className="progress" style={{ height: 4 }}><div className="progress-bar bg-success" style={{ width: '8%' }}></div></div>
                  </div>

                  {/* Snapchat */}
                  <div className="custom-progress mb-0">
                    <div className="progress-info d-flex justify-content-between align-items-center">
                      <div>
                        <img src="/assets/images/logos/snapchat.svg" height="24" className="me-1" alt="snapchat" />
                        <span className="align-middle fw-semibold fs-xs">Snapchat</span>
                      </div>
                      <span className="fw-semibold text-muted fs-xs">5.8k</span>
                    </div>
                    <div className="progress" style={{ height: 4 }}><div className="progress-bar bg-warning" style={{ width: '2%' }}></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 4: Sessions by Browser (Col 3) & Page Analytics (Col 9) */}
      <div className="row g-3 mt-1">
        {/* Card 8: Sessions by Browser */}
        <div className="col-xl-3">
          <div className="card card-h-100">
            <div className="card-header justify-content-between d-flex align-items-center">
              <h4 className="card-title mb-0">Sessions by Browser</h4>
              <button className="btn btn-sm btn-link text-muted p-0"><i className="ti ti-dots-vertical fs-18"></i></button>
            </div>
            <div className="card-body py-2 px-0">
              <SimpleBar className="px-2" style={{ maxHeight: '364px' }}>
                {[
                  { name: 'Chrome', icon: 'chrome.svg', pct: '62.5%', trend: '5.06%', isUp: false },
                  { name: 'Firefox', icon: 'firefox.svg', pct: '12.3%', trend: '1.5%', isUp: false },
                  { name: 'Safari', icon: 'safari.svg', pct: '9.86%', trend: '1.03%', isUp: true },
                  { name: 'Brave', icon: 'brave.svg', pct: '3.15%', trend: '0.3%', isUp: false },
                  { name: 'Opera', icon: 'opera.svg', pct: '3.01%', trend: '1.58%', isUp: true },
                  { name: 'Tor', icon: 'tor.svg', pct: '2.8%', trend: '0.01%', isUp: true },
                  { name: 'Edge', icon: 'edge.svg', pct: '4.25%', trend: '0.75%', isUp: true },
                  { name: 'Other', icon: 'globe.svg', pct: '6.38%', trend: '3.6%', isUp: true }
                ].map((b, idx) => (
                  <div key={idx} className="d-flex justify-content-between align-items-center p-2 border-bottom border-light">
                    <div>
                      <img src={`/assets/images/browsers/${b.icon}`} height="26" className="me-2" alt={b.name} />
                      <span className="align-middle fw-semibold fs-xs">{b.name}</span>
                    </div>
                    <span className="fw-semibold text-muted fs-xs">{b.pct}</span>
                    <span className={`fw-semibold fs-xs ${b.isUp ? 'text-success' : 'text-danger'}`}>
                      <i className={`ti ${b.isUp ? 'ti-arrow-up' : 'ti-arrow-down'}`}></i> {b.trend}
                    </span>
                  </div>
                ))}
              </SimpleBar>
            </div>
          </div>
        </div>

        {/* Card 9: Page Analytics Overview */}
        <div className="col-xl-9">
          <div className="card card-h-100" data-table data-table-rows-per-page={rowsPerPage}>
            <div className="card-header border-light justify-content-between d-flex align-items-center">
              <h4 className="card-title mb-0">Page Analytics Overview</h4>
              <div className="d-flex align-items-center gap-2">
                {selectedRows.length > 0 && (
                  <button className="btn btn-sm btn-danger py-1 px-2 fs-xs" onClick={() => setSelectedRows([])}>
                    Delete Selected ({selectedRows.length})
                  </button>
                )}
                <div className="app-search app-search-sm">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search pages..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <i className="ti ti-search app-search-icon text-muted"></i>
                </div>
                <select 
                  className="form-select form-select-sm my-1 my-md-0" 
                  value={rowsPerPage} 
                  onChange={(e) => setRowsPerPage(e.target.value)} 
                  style={{ width: '90px' }}
                >
                  <option value="5">5 rows</option>
                  <option value="10">10 rows</option>
                  <option value="15">15 rows</option>
                  <option value="20">20 rows</option>
                  <option value="50">50 rows</option>
                </select>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-custom table-centered table-hover w-100 mb-0">
                <thead className="bg-light bg-opacity-25 thead-sm">
                  <tr className="text-uppercase table-nowrap fs-xxs">
                    <th scope="col" style={{ width: '1%' }}>
                      <input 
                        type="checkbox" 
                        className="form-check-input form-check-input-light fs-14 mt-0"
                        checked={selectedRows.length === filteredData.length && filteredData.length > 0}
                        onChange={(e) => setSelectedRows(e.target.checked ? filteredData.map(d => d.id) : [])}
                      />
                    </th>
                    <th>PAGE PATH</th>
                    <th>TOP REFERRAL SOURCE</th>
                    <th>PAGE VIEWS</th>
                    <th>AVG TIME ON PAGE</th>
                    <th>BOUNCE RATE</th>
                    <th>CONVERSION RATE</th>
                    <th className="text-center">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((row) => (
                    <tr key={row.id}>
                      <td>
                        <input 
                          type="checkbox" 
                          className="form-check-input form-check-input-light fs-14 mt-0" 
                          checked={selectedRows.includes(row.id)}
                          onChange={() => toggleRow(row.id)}
                        />
                      </td>
                      <td><code>{row.path}</code></td>
                      <td>{row.ref}</td>
                      <td><i className="ti ti-eye text-muted me-1"></i> {row.views}</td>
                      <td><i className="ti ti-clock text-muted me-1"></i> {row.time}</td>
                      <td>{row.bounce}</td>
                      <td>{row.conv}</td>
                      <td className="text-center">
                        <button className="btn btn-sm btn-link text-danger p-0" onClick={() => setSelectedRows(prev => prev.filter(r => r !== row.id))}>
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center p-3 border-top fs-xs text-muted">
              <span>Showing 1 to {Math.min(filteredData.length, parseInt(rowsPerPage))} of {filteredData.length} entries</span>
              <ul className="pagination pagination-sm mb-0">
                <li className="page-item disabled"><button className="page-link">&lt;</button></li>
                <li className="page-item active"><button className="page-link">1</button></li>
                <li className="page-item"><button className="page-link">2</button></li>
                <li className="page-item"><button className="page-link">3</button></li>
                <li className="page-item"><button className="page-link">&gt;</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
