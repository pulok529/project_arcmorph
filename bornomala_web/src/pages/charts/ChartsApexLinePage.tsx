import React from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const ChartsApexLinePage: React.FC = () => {
  const simpleOptions: ApexOptions = {
    chart: { type: 'line', height: 350, zoom: { enabled: false } },
    dataLabels: { enabled: false },
    stroke: { curve: 'straight', width: 3 },
    colors: ['#4f46e5'],
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'] }
  };
  const simpleSeries = [{ name: 'Desktops', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }];

  const dataLabelsOptions: ApexOptions = {
    chart: { type: 'line', height: 350 },
    colors: ['#4f46e5', '#10b981'],
    dataLabels: { enabled: true },
    stroke: { curve: 'smooth' },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] }
  };
  const dataLabelsSeries = [
    { name: 'High - 2026', data: [28, 29, 33, 36, 32, 32, 33] },
    { name: 'Low - 2026', data: [12, 11, 14, 18, 17, 13, 13] }
  ];

  const zoomableOptions: ApexOptions = {
    chart: { type: 'area', height: 350, zoom: { type: 'x', enabled: true, autoScaleYaxis: true } },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2 },
    colors: ['#06b6d4'],
    xaxis: { type: 'datetime' }
  };

  const annotationsOptions: ApexOptions = {
    chart: { type: 'line', height: 350 },
    colors: ['#3b82f6'],
    annotations: {
      yaxis: [{ y: 8200, borderColor: '#00E396', label: { borderColor: '#00E396', text: 'Support' } }],
      xaxis: [{ x: new Date('23 Nov 2026').getTime(), borderColor: '#775DD0', label: { text: 'Event' } }]
    },
    stroke: { width: 3 }
  };

  const gradientOptions: ApexOptions = {
    chart: { type: 'line', height: 350 },
    stroke: { width: 7, curve: 'smooth' },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FDD835'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      }
    },
    colors: ['#4f46e5'],
    xaxis: { categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000'] }
  };

  const dashedOptions: ApexOptions = {
    chart: { type: 'line', height: 350 },
    colors: ['#4f46e5', '#06b6d4', '#f59e0b'],
    stroke: { width: [2, 4, 3], dashArray: [0, 8, 5] },
    xaxis: { categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan'] }
  };
  const dashedSeries = [
    { name: 'Session Duration', data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10] },
    { name: 'Page Views', data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35] },
    { name: 'Total Visits', data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47] }
  ];

  const steplineOptions: ApexOptions = {
    chart: { type: 'line', height: 350 },
    stroke: { curve: 'stepline', width: 3 },
    colors: ['#8b5cf6'],
    xaxis: { categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] }
  };
  const steplineSeries = [{ data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66] }];

  return (
    <div className="container-fluid">
      <PageHeader title="Line Charts" breadcrumbs={[{ label: 'Apex' }, { label: 'Line Charts', active: true }]} />

      <div className="row">
        <div className="col-lg-6">
          <Card title="Simple line chart">
            <ReactApexChart options={simpleOptions} series={simpleSeries} type="line" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Line with Data Labels">
            <ReactApexChart options={dataLabelsOptions} series={dataLabelsSeries} type="line" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Zoomable Timeseries">
            <ReactApexChart options={zoomableOptions} series={simpleSeries} type="area" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Line Chart with Annotations">
            <ReactApexChart options={annotationsOptions} series={simpleSeries} type="line" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Syncing charts">
            <ReactApexChart options={simpleOptions} series={simpleSeries} type="line" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Gradient Line Chart">
            <ReactApexChart options={gradientOptions} series={[{ name: 'Likes', data: [4, 3, 10, 9, 29, 19, 22, 9, 12] }]} type="line" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Missing / Null values">
            <ReactApexChart options={simpleOptions} series={[{ data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9] }]} type="line" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Dashed Line Chart">
            <ReactApexChart options={dashedOptions} series={dashedSeries} type="line" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Stepline Chart">
            <ReactApexChart options={steplineOptions} series={steplineSeries} type="line" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Brush Chart">
            <ReactApexChart options={simpleOptions} series={simpleSeries} type="line" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Realtime Chart">
            <ReactApexChart options={simpleOptions} series={simpleSeries} type="line" height={350} />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ChartsApexLinePage;
