import React from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const ChartsApexRadarPage: React.FC = () => {
  const basicOptions: ApexOptions = {
    chart: { height: 350, type: 'radar' },
    title: { text: 'Basic Radar Chart' },
    xaxis: { categories: ['January', 'February', 'March', 'April', 'May', 'June'] }
  };
  const basicSeries = [{ name: 'Series 1', data: [80, 50, 30, 40, 100, 20] }];

  const polygonOptions: ApexOptions = {
    chart: { height: 350, type: 'radar' },
    plotOptions: { radar: { size: 140, polygons: { strokeColors: '#e9e9e9', fill: { colors: ['#f8f8f8', '#fff'] } } } },
    title: { text: 'Radar with Polygon Fill' },
    colors: ['#FF4560'],
    markers: { size: 4, colors: ['#FF4560'], strokeColors: ['#FF4560'], strokeWidth: 2 },
    xaxis: { categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] }
  };
  const polygonSeries = [{ name: 'Series 1', data: [20, 100, 40, 30, 50, 80, 33] }];

  const multiOptions: ApexOptions = {
    chart: { height: 350, type: 'radar', dropShadow: { enabled: true, blur: 1, left: 1, top: 1 } },
    title: { text: 'Radar – Multiple Series' },
    stroke: { width: 2 },
    fill: { opacity: 0.1 },
    markers: { size: 0 },
    xaxis: { categories: ['2011', '2012', '2013', '2014', '2015', '2016'] }
  };
  const multiSeries = [
    { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
    { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
    { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] }
  ];

  return (
    <div className="container-fluid">
      <PageHeader title="Radar Charts" breadcrumbs={[{ label: 'Apex' }, { label: 'Radar Charts', active: true }]} />

      <div className="row">
        <div className="col-lg-6">
          <Card title="Basic Radar Chart">
            <ReactApexChart options={basicOptions} series={basicSeries} type="radar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Radar with Polygon-fill">
            <ReactApexChart options={polygonOptions} series={polygonSeries} type="radar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Radar – Multiple Series">
            <ReactApexChart options={multiOptions} series={multiSeries} type="radar" height={350} />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ChartsApexRadarPage;
