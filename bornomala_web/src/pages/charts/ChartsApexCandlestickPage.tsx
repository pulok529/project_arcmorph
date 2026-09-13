import React from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const ChartsApexCandlestickPage: React.FC = () => {
  const simpleOptions: ApexOptions = {
    chart: { type: 'candlestick', height: 350 },
    title: { text: 'CandleStick Chart', align: 'left' },
    xaxis: { type: 'datetime' },
    yaxis: { tooltip: { enabled: true } }
  };
  const simpleSeries = [{
    data: [
      { x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] },
      { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
      { x: new Date(1538782200000), y: [6630.71, 6648.95, 6623.34, 6635.65] },
      { x: new Date(1538784000000), y: [6635.65, 6651, 6629.67, 6638.24] },
      { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] },
      { x: new Date(1538787600000), y: [6624.53, 6636.03, 6621.68, 6624.31] },
      { x: new Date(1538789400000), y: [6624.61, 6632.2, 6617, 6626.02] }
    ]
  }];

  const comboOptions: ApexOptions = {
    chart: { type: 'candlestick', height: 290, id: 'candles', toolbar: { autoSelected: 'pan', show: false }, zoom: { enabled: false } },
    xaxis: { type: 'datetime' }
  };

  const categoryOptions: ApexOptions = {
    chart: { type: 'candlestick', height: 350 },
    xaxis: { type: 'category' }
  };

  const lineOptions: ApexOptions = {
    chart: { height: 350, type: 'line' },
    stroke: { width: [3, 1] },
    xaxis: { type: 'datetime' }
  };
  const lineSeries = [
    { name: 'line', type: 'line', data: [{ x: new Date('2026-01-01'), y: 6630 }, { x: new Date('2026-01-02'), y: 6640 }] },
    { name: 'candle', type: 'candlestick', data: [{ x: new Date('2026-01-01'), y: [6629.81, 6650.5, 6623.04, 6633.33] }, { x: new Date('2026-01-02'), y: [6632.01, 6643.59, 6620, 6630.11] }] }
  ];

  return (
    <div className="container-fluid">
      <PageHeader title="Candlestick Charts" breadcrumbs={[{ label: 'Apex' }, { label: 'Candlestick Charts', active: true }]} />

      <div className="row">
        <div className="col-lg-6">
          <Card title="Simple Candlestick Charts">
            <ReactApexChart options={simpleOptions} series={simpleSeries} type="candlestick" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Combo Candlestick Charts">
            <ReactApexChart options={comboOptions} series={simpleSeries} type="candlestick" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Category X-Axis">
            <ReactApexChart options={categoryOptions} series={simpleSeries} type="candlestick" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Candlestick with Line">
            <ReactApexChart options={lineOptions} series={lineSeries} type="line" height={350} />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ChartsApexCandlestickPage;
