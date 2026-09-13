import React from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const ChartsApexBarPage: React.FC = () => {
  const basicOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    plotOptions: { bar: { horizontal: true, borderRadius: 4 } },
    dataLabels: { enabled: false },
    colors: ['#4f46e5'],
    xaxis: { categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'] }
  };
  const basicSeries = [{ name: 'Values', data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] }];

  const groupedOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    plotOptions: { bar: { horizontal: true, dataLabels: { position: 'top' } } },
    colors: ['#4f46e5', '#10b981'],
    xaxis: { categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007] }
  };
  const groupedSeries = [
    { name: 'Series 1', data: [44, 55, 41, 64, 22, 43, 21] },
    { name: 'Series 2', data: [53, 32, 33, 52, 13, 44, 32] }
  ];

  const stackedOptions: ApexOptions = {
    chart: { type: 'bar', height: 350, stacked: true },
    plotOptions: { bar: { horizontal: true } },
    colors: ['#4f46e5', '#06b6d4', '#f59e0b', '#ef4444', '#8b5cf6'],
    xaxis: { categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014] }
  };
  const stackedSeries = [
    { name: 'Marine', data: [44, 55, 41, 37, 22, 43, 21] },
    { name: 'Striker', data: [53, 32, 33, 52, 13, 43, 32] },
    { name: 'Tank', data: [12, 17, 11, 9, 15, 11, 20] }
  ];

  const stacked100Options: ApexOptions = {
    chart: { type: 'bar', height: 350, stacked: true, stackType: '100%' },
    plotOptions: { bar: { horizontal: true } },
    colors: ['#4f46e5', '#10b981', '#f59e0b'],
    xaxis: { categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014] }
  };

  const negativeOptions: ApexOptions = {
    chart: { type: 'bar', height: 350, stacked: true },
    colors: ['#4f46e5', '#ef4444'],
    plotOptions: { bar: { horizontal: true, barHeight: '80%' } },
    xaxis: { categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59'] }
  };
  const negativeSeries = [
    { name: 'Males', data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9] },
    { name: 'Females', data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85] }
  ];

  const reversedOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    plotOptions: { bar: { horizontal: true } },
    colors: ['#06b6d4'],
    yaxis: { reversed: true },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] }
  };

  const customDatalabelsOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    plotOptions: { bar: { barHeight: '100%', distributed: true, horizontal: true } },
    colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'],
    xaxis: { categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France'] }
  };

  const patternedOptions: ApexOptions = {
    chart: { type: 'bar', height: 350, stacked: true },
    plotOptions: { bar: { horizontal: true } },
    stroke: { width: 1, colors: ['#fff'] },
    fill: { opacity: 1 },
    xaxis: { categories: [2001, 2002, 2003, 2004, 2005] }
  };

  const markersOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    plotOptions: { bar: { horizontal: true } },
    colors: ['#10b981'],
    xaxis: { categories: ['2011', '2012', '2013', '2014', '2015', '2016'] }
  };
  const markersSeries = [{
    name: 'Actual',
    data: [
      { x: '2011', y: 12, goals: [{ name: 'Expected', value: 14, strokeWidth: 5, strokeColor: '#775DD0' }] },
      { x: '2012', y: 44, goals: [{ name: 'Expected', value: 54, strokeWidth: 5, strokeColor: '#775DD0' }] },
      { x: '2013', y: 54, goals: [{ name: 'Expected', value: 52, strokeWidth: 5, strokeColor: '#775DD0' }] }
    ]
  }];

  return (
    <div className="container-fluid">
      <PageHeader title="Bar Charts" breadcrumbs={[{ label: 'Apex' }, { label: 'Bar Charts', active: true }]} />

      <div className="row">
        <div className="col-lg-6">
          <Card title="Basic Bar Charts">
            <ReactApexChart options={basicOptions} series={basicSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Grouped Bar Chart">
            <ReactApexChart options={groupedOptions} series={groupedSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Stacked Bar Chart">
            <ReactApexChart options={stackedOptions} series={stackedSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="100% Stacked Bar Chart">
            <ReactApexChart options={stacked100Options} series={stackedSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Grouped Stacked Bars">
            <ReactApexChart options={stackedOptions} series={stackedSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Bar with Negative Values">
            <ReactApexChart options={negativeOptions} series={negativeSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Reversed Bar Chart">
            <ReactApexChart options={reversedOptions} series={basicSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Bar with Image Fill">
            <ReactApexChart options={basicOptions} series={basicSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Custom DataLabels Bar">
            <ReactApexChart options={customDatalabelsOptions} series={[{ data: [400, 430, 448, 470, 540, 580] }]} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Patterned Bar Chart">
            <ReactApexChart options={patternedOptions} series={stackedSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Bar with Markers">
            <ReactApexChart options={markersOptions} series={markersSeries as any} type="bar" height={350} />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ChartsApexBarPage;
