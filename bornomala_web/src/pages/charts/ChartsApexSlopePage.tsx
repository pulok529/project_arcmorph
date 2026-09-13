import React from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const ChartsApexSlopePage: React.FC = () => {
  const basicOptions: ApexOptions = {
    chart: { height: 350, width: '100%', type: 'line' },
    plotOptions: {
      line: {
        isSlopeChart: true
      }
    }
  };
  const basicSeries = [
    {
      name: 'Blue',
      data: [
        { x: 'Jan', y: 43 },
        { x: 'Feb', y: 58 }
      ]
    },
    {
      name: 'Green',
      data: [
        { x: 'Jan', y: 33 },
        { x: 'Feb', y: 27 }
      ]
    },
    {
      name: 'Orange',
      data: [
        { x: 'Jan', y: 55 },
        { x: 'Feb', y: 45 }
      ]
    },
    {
      name: 'Red',
      data: [
        { x: 'Jan', y: 40 },
        { x: 'Feb', y: 70 }
      ]
    }
  ];

  const multiOptions: ApexOptions = {
    chart: { height: 350, width: '100%', type: 'line' },
    plotOptions: {
      line: {
        isSlopeChart: true
      }
    }
  };
  const multiSeries = [
    {
      name: 'Category 1',
      data: [
        { x: 'Category 1', y: 14 },
        { x: 'Category 2', y: 64 },
        { x: 'Category 3', y: 40 },
        { x: 'Category 4', y: 88 }
      ]
    },
    {
      name: 'Category 2',
      data: [
        { x: 'Category 1', y: 73 },
        { x: 'Category 2', y: 23 },
        { x: 'Category 3', y: 60 },
        { x: 'Category 4', y: 30 }
      ]
    }
  ];

  return (
    <div className="container-fluid">
      <PageHeader title="Slope Charts" breadcrumbs={[{ label: 'Apex' }, { label: 'Slope Charts', active: true }]} />

      <div className="row">
        <div className="col-lg-6">
          <Card title="Basic Slope">
            <ReactApexChart options={basicOptions} series={basicSeries} type="line" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Multi Slope">
            <ReactApexChart options={multiOptions} series={multiSeries} type="line" height={350} />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ChartsApexSlopePage;
