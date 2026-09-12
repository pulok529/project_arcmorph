import React from 'react';
import ReactECharts from 'echarts-for-react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/common/Card';

export const ChartsEchartCandlestickPage: React.FC = () => {
  const option1 = {
    title: { text: 'Candlestick Echart Overview', left: 'center', textStyle: { color: '#6c757d', fontSize: 14 } },
    tooltip: { trigger: 'axis' },
    legend: { data: ['Sales', 'Traffic', 'Conversion'], top: 25 },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: { type: 'value' },
    series: [
      { name: 'Sales', type: 'line', smooth: true, data: [120, 132, 101, 134, 90, 230, 210], color: '#4f46e5' },
      { name: 'Traffic', type: 'line', smooth: true, data: [220, 182, 191, 234, 290, 330, 310], color: '#06b6d4' },
      { name: 'Conversion', type: 'line', smooth: true, data: [150, 232, 201, 154, 190, 330, 410], color: '#10b981' }
    ]
  };

  const option2 = {
    tooltip: { trigger: 'item' },
    legend: { orient: 'vertical', left: 'left' },
    series: [
      {
        name: 'Traffic Source',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return (
    <div>
      <PageHeader title="Candlestick Echart" category="Charts" />

      <div className="row">
        <div className="col-lg-6">
          <Card title="Primary Candlestick Echart">
            <ReactECharts option={option1} style={{ height: 350, width: '100%' }} />
          </Card>
        </div>

        <div className="col-lg-6">
          <Card title="Secondary Candlestick Echart">
            <ReactECharts option={option2} style={{ height: 350, width: '100%' }} />
          </Card>
        </div>
      </div>
    </div>
  );
};
