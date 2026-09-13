import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const ChartsApexSparklinesPage: React.FC = () => {
  const [chartOptions] = useState<ApexOptions>({
    chart: {
      type: 'line' as any,
      toolbar: { show: true },
      animations: { enabled: true }
    },
    colors: ['#4f46e5', '#06b6d4', '#10b981', '#f59e0b'],
    stroke: { curve: 'smooth', width: 2 },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    tooltip: { theme: 'dark' },
    dataLabels: { enabled: false }
  });

  const [primarySeries] = useState([
    { name: 'Series A', data: [31, 40, 28, 51, 42, 109, 100, 120, 80] },
    { name: 'Series B', data: [11, 32, 45, 32, 34, 52, 41, 60, 45] }
  ]);
  const [secondarySeries] = useState([
    { name: 'Revenue', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] }
  ]);

  return (
    <div>
      <PageHeader title="Sparkline Apexcharts" category="Charts" />

      <div className="row">
        <div className="col-lg-6">
          <Card title="Primary Sparkline Apexcharts">
            <div className="py-2">
              <ReactApexChart
                options={chartOptions}
                series={primarySeries}
                type="line"
                height={350}
              />
            </div>
          </Card>
        </div>

        <div className="col-lg-6">
          <Card title="Secondary Sparkline Apexcharts">
            <div className="py-2">
              <ReactApexChart
                options={{
                  ...chartOptions,
                  colors: ['#3b82f6', '#ec4899', '#8b5cf6'],
                  plotOptions: {
                    bar: { borderRadius: 4, horizontal: false }
                  }
                }}
                series={secondarySeries}
                type="line"
                height={350}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
