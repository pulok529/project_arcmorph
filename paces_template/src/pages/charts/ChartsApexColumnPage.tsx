import React from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const ChartsApexColumnPage: React.FC = () => {
  const basicOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    plotOptions: { bar: { horizontal: false, columnWidth: '55%', borderRadius: 4 } },
    dataLabels: { enabled: false },
    colors: ['#4f46e5', '#10b981', '#f59e0b'],
    xaxis: { categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'] }
  };
  const basicSeries = [
    { name: 'Net Profit', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
    { name: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] },
    { name: 'Free Cash Flow', data: [35, 41, 36, 26, 45, 48, 52, 53, 41] }
  ];

  const datalabelsOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    plotOptions: { bar: { borderRadius: 4, dataLabels: { position: 'top' } } },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val}%`,
      offsetY: -20,
      style: { fontSize: '12px', colors: ['#304758'] }
    },
    colors: ['#3b82f6'],
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] }
  };
  const datalabelsSeries = [{ name: 'Inflation', data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2] }];

  const stackedOptions: ApexOptions = {
    chart: { type: 'bar', height: 350, stacked: true },
    colors: ['#4f46e5', '#06b6d4', '#f59e0b', '#ef4444'],
    xaxis: { categories: ['01/01/2026', '01/02/2026', '01/03/2026', '01/04/2026'] }
  };
  const stackedSeries = [
    { name: 'PRODUCT A', data: [44, 55, 41, 67] },
    { name: 'PRODUCT B', data: [13, 23, 20, 8] },
    { name: 'PRODUCT C', data: [11, 17, 15, 15] }
  ];

  const stacked100Options: ApexOptions = {
    chart: { type: 'bar', height: 350, stacked: true, stackType: '100%' },
    colors: ['#4f46e5', '#10b981', '#f59e0b'],
    xaxis: { categories: ['2021', '2022', '2023', '2024', '2025', '2026'] }
  };

  const distributedOptions: ApexOptions = {
    chart: { type: 'bar', height: 350, events: {} },
    colors: ['#4f46e5', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#6b7280'],
    plotOptions: { bar: { columnWidth: '45%', distributed: true } },
    dataLabels: { enabled: false },
    legend: { show: false },
    xaxis: { categories: ['John Doe', 'Joe Smith', 'Jake Williams', 'Amber', 'Peter Brown', 'Mary Evans', 'David Wilson', 'Lily Roberts'] }
  };
  const distributedSeries = [{ data: [21, 22, 10, 28, 16, 21, 13, 30] }];

  return (
    <div className="container-fluid">
      <PageHeader title="Column Charts" breadcrumbs={[{ label: 'Apex' }, { label: 'Column Charts', active: true }]} />

      <div className="row">
        <div className="col-lg-6">
          <Card title="Basic Column Charts">
            <ReactApexChart options={basicOptions} series={basicSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Column Chart with Datalabels">
            <ReactApexChart options={datalabelsOptions} series={datalabelsSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Stacked Column Charts">
            <ReactApexChart options={stackedOptions} series={stackedSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="100% Stacked Column Chart">
            <ReactApexChart options={stacked100Options} series={stackedSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Grouped Stacked Columns Chart">
            <ReactApexChart options={stackedOptions} series={stackedSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Dumbbell Chart">
            <ReactApexChart options={basicOptions} series={basicSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Column with Markers">
            <ReactApexChart options={basicOptions} series={basicSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Column with Group Label">
            <ReactApexChart options={basicOptions} series={basicSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Column Chart with rotated labels & Annotations">
            <ReactApexChart options={basicOptions} series={basicSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Column Chart with negative values">
            <ReactApexChart options={basicOptions} series={[{ name: 'Cash Flow', data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16] }]} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Distributed Column Charts">
            <ReactApexChart options={distributedOptions} series={distributedSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Range Column Charts">
            <ReactApexChart options={basicOptions} series={basicSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Dynamic Loaded Chart">
            <ReactApexChart options={basicOptions} series={basicSeries} type="bar" height={350} />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ChartsApexColumnPage;
