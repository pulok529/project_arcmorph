import React from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const ChartsApexMixedPage: React.FC = () => {
  const lineColOptions: ApexOptions = {
    chart: { height: 350, type: 'line' },
    stroke: { width: [0, 4] },
    dataLabels: { enabled: true, enabledOnSeries: [1] },
    labels: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan'],
    xaxis: { type: 'category' },
    yaxis: [{ title: { text: 'Website Blog' } }, { opposite: true, title: { text: 'Social Media' } }]
  };
  const lineColSeries = [
    { name: 'Website Blog', type: 'column', data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320] },
    { name: 'Social Media', type: 'line', data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22] }
  ];

  const multiYOptions: ApexOptions = {
    chart: { height: 350, type: 'line', stacked: false },
    stroke: { width: [1, 1, 4] },
    xaxis: { categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008] }
  };
  const multiYSeries = [
    { name: 'Income', type: 'column', data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6] },
    { name: 'Cashflow', type: 'column', data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5] },
    { name: 'Revenue', type: 'line', data: [20, 29, 37, 36, 44, 45, 50, 58] }
  ];

  const lineAreaOptions: ApexOptions = {
    chart: { height: 350, type: 'line' },
    stroke: { curve: 'smooth' },
    fill: { type: 'solid', opacity: [0.35, 1] },
    labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09', 'Dec 10']
  };
  const lineAreaSeries = [
    { name: 'TEAM A', type: 'area', data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47] },
    { name: 'TEAM B', type: 'line', data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61] }
  ];

  const allThreeOptions: ApexOptions = {
    chart: { height: 350, type: 'line', stacked: false },
    stroke: { width: [0, 2, 5], curve: 'smooth' },
    plotOptions: { bar: { columnWidth: '50%' } },
    fill: { opacity: [0.85, 0.25, 1] },
    labels: ['01/01/2026', '02/01/2026', '03/01/2026', '04/01/2026', '05/01/2026', '06/01/2026', '07/01/2026', '08/01/2026', '09/01/2026']
  };
  const allThreeSeries = [
    { name: 'TEAM A', type: 'column', data: [23, 11, 22, 27, 13, 22, 37, 21, 44] },
    { name: 'TEAM B', type: 'area', data: [44, 55, 41, 67, 22, 43, 21, 41, 56] },
    { name: 'TEAM C', type: 'line', data: [30, 25, 36, 30, 45, 35, 64, 52, 59] }
  ];

  return (
    <div className="container-fluid">
      <PageHeader title="Mixed Charts" breadcrumbs={[{ label: 'Apex' }, { label: 'Mixed Charts', active: true }]} />

      <div className="row">
        <div className="col-lg-6">
          <Card title="Line & Column Chart">
            <ReactApexChart options={lineColOptions} series={lineColSeries} type="line" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Multiple Y-Axis Chart">
            <ReactApexChart options={multiYOptions} series={multiYSeries} type="line" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Line & Area Chart">
            <ReactApexChart options={lineAreaOptions} series={lineAreaSeries} type="line" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Line, Column & Area Chart">
            <ReactApexChart options={allThreeOptions} series={allThreeSeries} type="line" height={350} />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ChartsApexMixedPage;
