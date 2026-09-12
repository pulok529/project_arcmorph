import React from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const ChartsApexRangePage: React.FC = () => {
  const basicOptions: ApexOptions = {
    chart: { height: 350, type: 'rangeArea' },
    stroke: { curve: 'straight' },
    title: { text: 'New York Temperature (Range)' },
    markers: { hover: { sizeOffset: 5 } },
    dataLabels: { enabled: false },
    yaxis: { labels: { formatter: (val) => `${val}°C` } }
  };
  const basicSeries = [{
    name: 'New York Temperature',
    data: [
      { x: 'Jan', y: [-2, 4] },
      { x: 'Feb', y: [-1, 6] },
      { x: 'Mar', y: [3, 10] },
      { x: 'Apr', y: [8, 16] },
      { x: 'May', y: [13, 22] },
      { x: 'Jun', y: [18, 26] },
      { x: 'Jul', y: [21, 29] },
      { x: 'Aug', y: [21, 28] },
      { x: 'Sep', y: [17, 24] },
      { x: 'Oct', y: [11, 18] },
      { x: 'Nov', y: [6, 12] },
      { x: 'Dec', y: [1, 7] }
    ]
  }];

  const comboOptions: ApexOptions = {
    chart: { height: 350, type: 'rangeArea' },
    stroke: { curve: 'straight' },
    title: { text: 'Range Area with Line' }
  };
  const comboSeries = [
    {
      type: 'rangeArea',
      name: 'Team B Range',
      data: [
        { x: 'Jan', y: [1100, 1900] },
        { x: 'Feb', y: [1200, 1800] },
        { x: 'Mar', y: [900, 2900] },
        { x: 'Apr', y: [1400, 2700] },
        { x: 'May', y: [2600, 3900] }
      ]
    },
    {
      type: 'line',
      name: 'Team B Median',
      data: [
        { x: 'Jan', y: 1500 },
        { x: 'Feb', y: 1700 },
        { x: 'Mar', y: 1900 },
        { x: 'Apr', y: 2200 },
        { x: 'May', y: 3000 }
      ]
    }
  ];

  return (
    <div className="container-fluid">
      <PageHeader title="Range Area Charts" breadcrumbs={[{ label: 'Apex' }, { label: 'Range Area Charts', active: true }]} />

      <div className="row">
        <div className="col-lg-6">
          <Card title="Basic Range Area">
            <ReactApexChart options={basicOptions} series={basicSeries} type="rangeArea" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Range Area With Line">
            <ReactApexChart options={comboOptions} series={comboSeries} type="rangeArea" height={350} />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ChartsApexRangePage;
