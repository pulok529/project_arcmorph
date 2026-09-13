import React from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const ChartsApexAreaPage: React.FC = () => {
  const basicOptions: ApexOptions = {
    chart: { type: 'area', height: 350, zoom: { enabled: false } },
    dataLabels: { enabled: false },
    stroke: { curve: 'straight', width: 2 },
    colors: ['#4f46e5'],
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'] }
  };
  const basicSeries = [{ name: 'STOCK ABC', data: [8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85] }];

  const splineOptions: ApexOptions = {
    chart: { type: 'area', height: 350 },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2 },
    colors: ['#4f46e5', '#10b981'],
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] }
  };
  const splineSeries = [
    { name: 'series1', data: [31, 40, 28, 51, 42, 109, 100] },
    { name: 'series2', data: [11, 32, 45, 32, 34, 52, 41] }
  ];

  const datetimeOptions: ApexOptions = {
    chart: { type: 'area', height: 350 },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2 },
    colors: ['#3b82f6'],
    xaxis: { type: 'datetime', categories: ['2026-01-01', '2026-02-01', '2026-03-01', '2026-04-01', '2026-05-01', '2026-06-01'] }
  };
  const datetimeSeries = [{ name: 'Visits', data: [34, 55, 41, 67, 22, 43] }];

  const negativeOptions: ApexOptions = {
    chart: { type: 'area', height: 350 },
    dataLabels: { enabled: false },
    stroke: { curve: 'straight', width: 2 },
    colors: ['#06b6d4'],
    xaxis: { categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09'] }
  };
  const negativeSeries = [{ name: 'North', data: [0, 10, -5, 12, 18, -8, 25, 30, -2] }];

  const githubOptions: ApexOptions = {
    chart: { type: 'area', height: 160, id: 'yt', group: 'social' },
    colors: ['#6b7280'],
    xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
  };
  const githubSeries = [{ name: 'Commits', data: [12, 24, 18, 45, 32, 15, 60] }];

  const stackedOptions: ApexOptions = {
    chart: { type: 'area', height: 350, stacked: true },
    colors: ['#4f46e5', '#06b6d4', '#f59e0b'],
    xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] }
  };
  const stackedSeries = [
    { name: 'Central', data: [14, 25, 18, 30] },
    { name: 'East', data: [12, 19, 14, 22] },
    { name: 'West', data: [9, 11, 15, 18] }
  ];

  const irregularOptions: ApexOptions = {
    chart: { type: 'area', height: 350 },
    colors: ['#8b5cf6'],
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'] }
  };
  const irregularSeries = [{ name: 'PRODUCT A', data: [11, 15, 26, 20, 35, 45, 60] }];

  const nullOptions: ApexOptions = {
    chart: { type: 'area', height: 350 },
    stroke: { curve: 'straight' },
    colors: ['#ec4899'],
    xaxis: { categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] }
  };
  const nullSeries = [{ name: 'Network', data: [34, 44, null, 56, 66, 45, null, 70] }];

  return (
    <div className="container-fluid">
      <PageHeader title="Area Charts" breadcrumbs={[{ label: 'Apex' }, { label: 'Area Charts', active: true }]} />

      <div className="row">
        <div className="col-lg-6">
          <Card title="Basic Area Chart">
            <ReactApexChart options={basicOptions} series={basicSeries} type="area" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Spline Area">
            <ReactApexChart options={splineOptions} series={splineSeries} type="area" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Area Chart - Datetime X-axis">
            <ReactApexChart options={datetimeOptions} series={datetimeSeries} type="area" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Area with Negative Values">
            <ReactApexChart options={negativeOptions} series={negativeSeries} type="area" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Selection - Github Style">
            <ReactApexChart options={githubOptions} series={githubSeries} type="area" height={160} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Stacked Area">
            <ReactApexChart options={stackedOptions} series={stackedSeries} type="area" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Irregular TimeSeries">
            <ReactApexChart options={irregularOptions} series={irregularSeries} type="area" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Area Chart with Null values">
            <ReactApexChart options={nullOptions} series={nullSeries} type="area" height={350} />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ChartsApexAreaPage;
