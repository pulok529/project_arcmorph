import React from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const ChartsApexRadialbarPage: React.FC = () => {
  const basicOptions: ApexOptions = {
    chart: { height: 350, type: 'radialBar' },
    plotOptions: { radialBar: { hollow: { size: '70%' } } },
    labels: ['Cricket'],
    colors: ['#4f46e5']
  };

  const multipleOptions: ApexOptions = {
    chart: { height: 350, type: 'radialBar' },
    plotOptions: { radialBar: { dataLabels: { name: { fontSize: '22px' }, value: { fontSize: '16px' } } } },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    colors: ['#4f46e5', '#06b6d4', '#10b981', '#f59e0b']
  };

  const customAngleOptions: ApexOptions = {
    chart: { height: 350, type: 'radialBar' },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: { margin: 5, size: '30%', background: 'transparent' },
        dataLabels: { name: { show: false }, value: { show: false } }
      }
    },
    colors: ['#4f46e5', '#06b6d4', '#10b981', '#f59e0b'],
    labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn']
  };

  const strokedGaugeOptions: ApexOptions = {
    chart: { height: 350, type: 'radialBar', offsetY: -10 },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: { name: { fontSize: '16px', color: undefined, offsetY: 120 }, value: { offsetY: 76, fontSize: '22px', color: undefined } }
      }
    },
    fill: { type: 'gradient', gradient: { shade: 'dark', shadeIntensity: 0.15, inverseColors: false, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 65, 91] } },
    stroke: { dashArray: 4 },
    labels: ['Median Ratio'],
    colors: ['#4f46e5']
  };

  const gradientOptions: ApexOptions = {
    chart: { height: 350, type: 'radialBar', toolbar: { show: true } },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: { margin: 0, size: '70%', background: '#fff', dropShadow: { enabled: true, top: 3, left: 0, blur: 4, opacity: 0.24 } },
        track: { background: '#fff', strokeWidth: '67%', margin: 0 },
        dataLabels: { show: true, name: { offsetY: -10, show: true, color: '#888', fontSize: '17px' }, value: { color: '#111', fontSize: '36px', show: true } }
      }
    },
    fill: { type: 'gradient', gradient: { shade: 'dark', type: 'horizontal', shadeIntensity: 0.5, gradientToColors: ['#ABE5A1'], opacityFrom: 1, opacityTo: 1, stops: [0, 100] } },
    stroke: { lineCap: 'round' },
    labels: ['Percent']
  };

  const semiCircleOptions: ApexOptions = {
    chart: { type: 'radialBar', offsetY: -20, sparkline: { enabled: true } },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: { background: '#e7e7e7', strokeWidth: '97%', margin: 5 },
        dataLabels: { name: { show: false }, value: { offsetY: -2, fontSize: '22px' } }
      }
    },
    grid: { padding: { top: -10 } },
    fill: { type: 'gradient', gradient: { shade: 'light', shadeIntensity: 0.4, inverseColors: false, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 53, 91] } },
    labels: ['Average Results'],
    colors: ['#4f46e5']
  };

  return (
    <div className="container-fluid">
      <PageHeader title="RadialBar Charts" breadcrumbs={[{ label: 'Apex' }, { label: 'RadialBar Charts', active: true }]} />

      <div className="row">
        <div className="col-lg-6">
          <Card title="Basic RadialBar Chart">
            <ReactApexChart options={basicOptions} series={[70]} type="radialBar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Multiple RadialBars">
            <ReactApexChart options={multipleOptions} series={[44, 55, 67, 83]} type="radialBar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Circle Chart - Custom Angle">
            <ReactApexChart options={customAngleOptions} series={[76, 67, 61, 90]} type="radialBar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Circle Chart with Image">
            <ReactApexChart options={basicOptions} series={[67]} type="radialBar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Stroked Circular Guage">
            <ReactApexChart options={strokedGaugeOptions} series={[67]} type="radialBar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Gradient Circular Chart">
            <ReactApexChart options={gradientOptions} series={[75]} type="radialBar" height={350} />
          </Card>
        </div>
        <div className="col-lg-6">
          <Card title="Semi Circle Gauge">
            <ReactApexChart options={semiCircleOptions} series={[76]} type="radialBar" height={350} />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ChartsApexRadialbarPage;
