import React from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const ChartsApexTreemapPage: React.FC = () => {
  const basicOptions: ApexOptions = {
    chart: { height: 350, type: 'treemap' },
    title: { text: 'Basic Treemap', align: 'center' }
  };
  const basicSeries = [{
    data: [
      { x: 'New Delhi', y: 218 },
      { x: 'Kolkata', y: 149 },
      { x: 'Mumbai', y: 184 },
      { x: 'Ahmedabad', y: 55 },
      { x: 'Bangalore', y: 84 },
      { x: 'Pune', y: 31 },
      { x: 'Chennai', y: 70 },
      { x: 'Jaipur', y: 30 },
      { x: 'Surat', y: 44 },
      { x: 'Hyderabad', y: 68 },
      { x: 'Lucknow', y: 28 },
      { x: 'Indore', y: 19 },
      { x: 'Kanpur', y: 29 }
    ]
  }];

  const multipleOptions: ApexOptions = {
    chart: { height: 350, type: 'treemap' },
    title: { text: 'Multi-dimensional Treemap', align: 'center' }
  };
  const multipleSeries = [
    { name: 'Desktops', data: [{ x: 'ABC', y: 10 }, { x: 'DEF', y: 60 }] },
    { name: 'Mobiles', data: [{ x: 'ABCD', y: 10 }, { x: 'DEFG', y: 20 }, { x: 'WXYZ', y: 51 }] }
  ];

  const distributedOptions: ApexOptions = {
    chart: { height: 350, type: 'treemap' },
    title: { text: 'Distribute Chart with different color per series', align: 'center' },
    colors: ['#3B93A5', '#F7B844', '#ADD8C7', '#EC3C65', '#CDD7B6', '#C1F666', '#D43F97', '#1E5D8C', '#421243', '#7F94B0', '#EF6537', '#C0ADDB'],
    plotOptions: { treemap: { distributed: true, enableShades: false } }
  };

  const colorRangeOptions: ApexOptions = {
    chart: { height: 350, type: 'treemap' },
    title: { text: 'Treemap with Color scale', align: 'center' },
    plotOptions: {
      treemap: {
        colorScale: {
          ranges: [
            { from: -100, to: 0, color: '#CD363A' },
            { from: 0.001, to: 100, color: '#52B12C' }
          ]
        }
      }
    }
  };

  return (
    <div className="container-fluid">
      <PageHeader title="Treemap Charts" breadcrumbs={[{ label: 'Apex' }, { label: 'Treemap Charts', active: true }]} />

      <div className="row">
        <div className="col-lg-6">
          <Card title="Basic Treemap">
            <ReactApexChart options={basicOptions} series={basicSeries} type="treemap" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Treemap Multiple Series">
            <ReactApexChart options={multipleOptions} series={multipleSeries} type="treemap" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Distributed Treemap">
            <ReactApexChart options={distributedOptions} series={basicSeries} type="treemap" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Color Range Treemap">
            <ReactApexChart options={colorRangeOptions} series={basicSeries} type="treemap" height={350} />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ChartsApexTreemapPage;
