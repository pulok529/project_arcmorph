import React from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const ChartsApexFunnelPage: React.FC = () => {
  const basicOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        barHeight: '80%',
        isFunnel: true
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any, opt?: any) {
        return (opt?.w?.globals?.labels?.[opt?.dataPointIndex] || '') + ':  ' + val;
      },
      dropShadow: { enabled: true }
    },
    title: { text: 'Recruitment Funnel', align: 'center' },
    xaxis: {
      categories: ['Sourced', 'Screened', 'Assessed', 'HR Interview', 'Technical', 'Verify', 'Offered', 'Hired']
    },
    legend: { show: false }
  };
  const basicSeries = [{
    name: 'Funnel Series',
    data: [1380, 1100, 990, 880, 740, 548, 330, 200]
  }];

  const pyramidOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        distributed: true,
        barHeight: '80%',
        isFunnel: true
      }
    },
    colors: ['#F44F5E', '#E55A5B', '#D86357', '#CA6D54', '#BD7651', '#AF804D', '#A1894A'],
    dataLabels: {
      enabled: true,
      formatter: function (_val: any, opt?: any) {
        return opt?.w?.globals?.labels?.[opt?.dataPointIndex] || '';
      },
      dropShadow: { enabled: true }
    },
    title: { text: 'Pyramid Funnel', align: 'center' },
    xaxis: {
      categories: ['Margues', 'White Gold', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master']
    },
    legend: { show: false }
  };
  const pyramidSeries = [{
    name: '',
    data: [200, 330, 548, 740, 880, 990, 1100]
  }];

  return (
    <div className="container-fluid">
      <PageHeader title="Funnel Charts" breadcrumbs={[{ label: 'Apex' }, { label: 'Funnel Charts', active: true }]} />

      <div className="row">
        <div className="col-lg-6">
          <Card title="Basic Funnel">
            <ReactApexChart options={basicOptions} series={basicSeries} type="bar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Pyramid Funnel">
            <ReactApexChart options={pyramidOptions} series={pyramidSeries} type="bar" height={350} />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ChartsApexFunnelPage;
