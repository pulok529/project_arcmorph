import React from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const ChartsApexPolarAreaPage: React.FC = () => {
  const basicOptions: ApexOptions = {
    chart: { type: 'polarArea', height: 350 },
    stroke: { colors: ['#fff'] },
    fill: { opacity: 0.8 },
    colors: ['#4f46e5', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'],
    responsive: [{ breakpoint: 480, options: { chart: { width: 200 }, legend: { position: 'bottom' } } }]
  };

  const monochromeOptions: ApexOptions = {
    chart: { type: 'polarArea', height: 350 },
    theme: { monochrome: { enabled: true, color: '#4f46e5', shadeTo: 'light', shadeIntensity: 0.6 } },
    responsive: [{ breakpoint: 480, options: { chart: { width: 200 }, legend: { position: 'bottom' } } }]
  };

  return (
    <div className="container-fluid">
      <PageHeader title="Polar Area Charts" breadcrumbs={[{ label: 'Apex' }, { label: 'Polar Area Charts', active: true }]} />

      <div className="row">
        <div className="col-lg-6">
          <Card title="Basic Polar Area Chart">
            <ReactApexChart options={basicOptions} series={[14, 23, 21, 17, 15, 10, 12, 17, 21]} type="polarArea" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Monochrome Polar Area">
            <ReactApexChart options={monochromeOptions} series={[42, 39, 35, 29, 26]} type="polarArea" height={350} />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ChartsApexPolarAreaPage;
