import React from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const ChartsApexScatterPage: React.FC = () => {
  const xyOptions: ApexOptions = {
    chart: { height: 350, type: 'scatter', zoom: { enabled: true, type: 'xy' } },
    xaxis: { tickAmount: 10, labels: { formatter: (val: any) => parseFloat(String(val)).toFixed(1) } },
    yaxis: { tickAmount: 7 }
  };
  const xySeries = [
    { name: 'SAMPLE A', data: [[16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0]] },
    { name: 'SAMPLE B', data: [[36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10]] }
  ];

  const datetimeOptions: ApexOptions = {
    chart: { height: 350, type: 'scatter', zoom: { type: 'xy' } },
    xaxis: { type: 'datetime' },
    yaxis: { max: 70 }
  };

  const imagesOptions: ApexOptions = {
    chart: { height: 350, type: 'scatter' },
    xaxis: { tickAmount: 10, min: 0, max: 40 },
    yaxis: { tickAmount: 7 }
  };

  return (
    <div className="container-fluid">
      <PageHeader title="Scatter Charts" breadcrumbs={[{ label: 'Apex' }, { label: 'Scatter Charts', active: true }]} />

      <div className="row">
        <div className="col-lg-6">
          <Card title="Scatter (XY) Chart">
            <ReactApexChart options={xyOptions} series={xySeries} type="scatter" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Scatter Chart - Datetime">
            <ReactApexChart options={datetimeOptions} series={xySeries} type="scatter" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Scatter - Images">
            <ReactApexChart options={imagesOptions} series={xySeries} type="scatter" height={350} />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ChartsApexScatterPage;
