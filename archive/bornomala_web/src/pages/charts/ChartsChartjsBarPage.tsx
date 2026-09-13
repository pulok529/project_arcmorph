import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const ChartsChartjsBarPage: React.FC = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const lineData = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Revenue 2026',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: '#4f46e5',
        backgroundColor: 'rgba(79, 70, 229, 0.15)',
        tension: 0.4
      },
      {
        fill: true,
        label: 'Expenses 2026',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: '#06b6d4',
        backgroundColor: 'rgba(6, 182, 212, 0.15)',
        tension: 0.4
      }
    ]
  };

  const barData = {
    labels,
    datasets: [
      {
        label: 'Orders Processed',
        data: [45, 79, 50, 41, 76, 85, 90],
        backgroundColor: '#10b981',
        borderRadius: 6
      }
    ]
  };

  return (
    <div>
      <PageHeader title="Bar Charts" category="Charts" />

      <div className="row">
        <div className="col-lg-6">
          <Card title="Bar Charts - Trend Analysis">
            <div style={{ height: 350, position: 'relative' }}>
              <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </Card>
        </div>

        <div className="col-lg-6">
          <Card title="Bar Charts - Volume Breakdown">
            <div style={{ height: 350, position: 'relative' }}>
              <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
