import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const ChartsApexPiePage: React.FC = () => {
  const [updateSeries, setUpdateSeries] = useState([44, 55, 13, 33]);

  const randomize = () => {
    setUpdateSeries([
      Math.floor(Math.random() * 100) + 1,
      Math.floor(Math.random() * 100) + 1,
      Math.floor(Math.random() * 100) + 1,
      Math.floor(Math.random() * 100) + 1
    ]);
  };

  const simplePieOptions: ApexOptions = {
    chart: { type: 'pie', height: 320 },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    colors: ['#4f46e5', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'],
    responsive: [{ breakpoint: 480, options: { chart: { width: 200 }, legend: { position: 'bottom' } } }]
  };

  const simpleDonutOptions: ApexOptions = {
    chart: { type: 'donut', height: 320 },
    labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
    colors: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'],
    responsive: [{ breakpoint: 480, options: { chart: { width: 200 }, legend: { position: 'bottom' } } }]
  };

  const monochromeOptions: ApexOptions = {
    chart: { type: 'pie', height: 320 },
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    theme: { monochrome: { enabled: true, color: '#4f46e5', shadeTo: 'light', shadeIntensity: 0.6 } }
  };

  const gradientDonutOptions: ApexOptions = {
    chart: { type: 'donut', height: 320 },
    labels: ['Comedy', 'Action', 'SciFi', 'Drama', 'Horror'],
    fill: { type: 'gradient' },
    colors: ['#4f46e5', '#06b6d4', '#10b981', '#f59e0b', '#ef4444']
  };

  const patternedOptions: ApexOptions = {
    chart: { type: 'donut', height: 320 },
    labels: ['Item A', 'Item B', 'Item C', 'Item D'],
    colors: ['#4f46e5', '#10b981', '#f59e0b', '#8b5cf6'],
    stroke: { width: 2 }
  };

  return (
    <div className="container-fluid">
      <PageHeader title="Pie & Donut Charts" breadcrumbs={[{ label: 'Apex' }, { label: 'Pie Charts', active: true }]} />

      <div className="row">
        <div className="col-lg-6">
          <Card title="Simple Pie Chart">
            <ReactApexChart options={simplePieOptions} series={[44, 55, 13, 43, 22]} type="pie" height={320} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Simple Donut Chart">
            <ReactApexChart options={simpleDonutOptions} series={[44, 55, 41, 17, 15]} type="donut" height={320} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Monochrome Pie Chart">
            <ReactApexChart options={monochromeOptions} series={[25, 15, 44, 55, 41, 17]} type="pie" height={320} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Gradient Donut Chart">
            <ReactApexChart options={gradientDonutOptions} series={[44, 55, 41, 17, 15]} type="donut" height={320} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Patterned Donut Chart">
            <ReactApexChart options={patternedOptions} series={[44, 55, 41, 17]} type="donut" height={320} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Pie Chart with Image fill">
            <ReactApexChart options={simplePieOptions} series={[44, 33, 54, 45]} type="pie" height={320} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Donut Update">
            <div className="text-center mb-3">
              <button className="btn btn-sm btn-primary" onClick={randomize}>
                <i className="ti ti-arrows-shuffle me-1"></i> Randomize Data
              </button>
            </div>
            <ReactApexChart options={simpleDonutOptions} series={updateSeries} type="donut" height={280} />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ChartsApexPiePage;
