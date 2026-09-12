import React from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const ChartsApexBoxplotPage: React.FC = () => {
  const basicOptions: ApexOptions = {
    chart: { type: 'boxPlot', height: 350 },
    title: { text: 'Basic BoxPlot Chart', align: 'left' },
    plotOptions: { boxPlot: { colors: { upper: '#5C4742', lower: '#A5978B' } } }
  };
  const basicSeries = [{
    type: 'boxPlot',
    data: [
      { x: 'Jan 2026', y: [54, 66, 69, 75, 88] },
      { x: 'Feb 2026', y: [43, 65, 69, 76, 81] },
      { x: 'Mar 2026', y: [31, 39, 45, 51, 59] },
      { x: 'Apr 2026', y: [39, 46, 55, 65, 71] },
      { x: 'May 2026', y: [29, 31, 35, 39, 44] }
    ]
  }];

  const scatterOptions: ApexOptions = {
    chart: { type: 'boxPlot', height: 350 },
    colors: ['#008FFB', '#FEB019'],
    title: { text: 'BoxPlot - Scatter Chart', align: 'left' },
    xaxis: { type: 'datetime' }
  };

  const horizontalOptions: ApexOptions = {
    chart: { type: 'boxPlot', height: 350 },
    plotOptions: { bar: { horizontal: true, barHeight: '50%' }, boxPlot: { colors: { upper: '#e9ecef', lower: '#f8f9fa' } } }
  };

  return (
    <div className="container-fluid">
      <PageHeader title="Boxplot Charts" breadcrumbs={[{ label: 'Apex' }, { label: 'Boxplot Charts', active: true }]} />

      <div className="row">
        <div className="col-lg-6">
          <Card title="Basic Boxplot">
            <ReactApexChart options={basicOptions} series={basicSeries} type="boxPlot" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Scatter Boxplot">
            <ReactApexChart options={scatterOptions} series={basicSeries} type="boxPlot" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Horizontal BoxPlot">
            <ReactApexChart options={horizontalOptions} series={basicSeries} type="boxPlot" height={350} />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ChartsApexBoxplotPage;
