import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { LucideIcon, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export interface WidgetMetric {
  label: string;
  value: string | number;
  variant?: 'primary' | 'success' | 'warning' | 'info' | 'secondary' | 'indigo' | 'purple';
}

export interface WidgetChartConfig {
  type: 'area' | 'bar' | 'donut' | 'radialBar' | 'line';
  series: any[];
  colors?: string[];
  height?: number;
  labels?: string[];
  customOptions?: ApexCharts.ApexOptions;
}

export interface ExecutiveWidgetCardProps {
  id: string;
  title: string;
  category: string;
  categoryIcon?: string;
  categoryColor?: string;
  description: string;
  icon: LucideIcon;
  iconGradient: string;
  metrics: WidgetMetric[];
  status?: {
    text: string;
    variant: 'success' | 'warning' | 'info' | 'primary' | 'secondary';
  };
  badge?: string;
  chartConfig?: WidgetChartConfig;
  onOpen: (id: string) => void;
}

export const ExecutiveWidgetCard: React.FC<ExecutiveWidgetCardProps> = ({
  id,
  title,
  category,
  description,
  icon: Icon,
  iconGradient,
  metrics,
  status,
  badge,
  chartConfig,
  onOpen
}) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Generate ApexChart Options with smooth sparkline styling responsive to dark/light theme
  const chartOptions: ApexCharts.ApexOptions = React.useMemo(() => {
    if (!chartConfig) return {};

    const baseColors = chartConfig.colors || ['#6366f1', '#3b82f6', '#10b981', '#f59e0b'];

    const defaultSparklineOptions: ApexCharts.ApexOptions = {
      chart: {
        type: chartConfig.type,
        sparkline: { enabled: true },
        toolbar: { show: false },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800
        }
      },
      colors: baseColors,
      tooltip: {
        theme: isDarkMode ? 'dark' : 'light',
        x: { show: false },
        y: {
          title: {
            formatter: () => ''
          }
        }
      }
    };

    if (chartConfig.type === 'area' || chartConfig.type === 'line') {
      return {
        ...defaultSparklineOptions,
        stroke: { curve: 'smooth', width: 2.2 },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: isDarkMode ? 0.6 : 0.45,
            opacityTo: 0.05,
            stops: [0, 95]
          }
        },
        ...chartConfig.customOptions
      };
    }

    if (chartConfig.type === 'bar') {
      return {
        ...defaultSparklineOptions,
        plotOptions: {
          bar: {
            columnWidth: '55%',
            borderRadius: 3
          }
        },
        ...chartConfig.customOptions
      };
    }

    if (chartConfig.type === 'radialBar') {
      return {
        ...defaultSparklineOptions,
        plotOptions: {
          radialBar: {
            hollow: { size: '55%' },
            track: { background: isDarkMode ? '#1e293b' : '#f1f5f9' },
            dataLabels: {
              name: { show: false },
              value: {
                fontSize: '11px',
                fontWeight: 700,
                color: isDarkMode ? '#f8fafc' : '#1e293b',
                offsetY: 4
              }
            }
          }
        },
        ...chartConfig.customOptions
      };
    }

    if (chartConfig.type === 'donut') {
      return {
        ...defaultSparklineOptions,
        stroke: { width: 0 },
        labels: chartConfig.labels || ['A', 'B', 'C', 'D'],
        plotOptions: {
          pie: {
            donut: {
              size: '68%'
            }
          }
        },
        legend: { show: false },
        ...chartConfig.customOptions
      };
    }

    return { ...defaultSparklineOptions, ...chartConfig.customOptions };
  }, [chartConfig, isDarkMode]);

  return (
    <div
      onClick={() => onOpen(id)}
      className="card border-0 shadow-sm rounded-4 h-100 transition-all cursor-pointer position-relative overflow-hidden"
      style={{
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        minHeight: '270px'
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(id);
        }
      }}
    >
      {/* Top Gradient Border Highlight */}
      <div
        className="position-absolute top-0 start-0 end-0"
        style={{
          height: '4px',
          background: iconGradient
        }}
      />

      <div className="card-body p-4 d-flex flex-column justify-content-between">
        {/* Top Row: Icon + Category Badge + Status */}
        <div>
          <div className="d-flex align-items-start justify-content-between gap-2 mb-2">
            <div className="d-flex align-items-center gap-3">
              <div
                className="rounded-3 p-2.5 text-white d-flex align-items-center justify-content-center shadow-sm flex-shrink-0"
                style={{
                  background: iconGradient,
                  width: '44px',
                  height: '44px'
                }}
              >
                <Icon size={20} className="text-white" />
              </div>
              <div>
                <span
                  className="badge font-monospace fs-11 px-2.5 py-0.5 mb-1 d-inline-block"
                  style={{
                    backgroundColor: isDarkMode ? 'rgba(148, 163, 184, 0.15)' : '#f1f5f9',
                    color: isDarkMode ? '#cbd5e1' : '#334155',
                    border: isDarkMode ? '1px solid rgba(148, 163, 184, 0.25)' : '1px solid #e2e8f0'
                  }}
                >
                  {category}
                </span>
                <h5 className="fw-bold mb-0 fs-15 line-clamp-1" style={{ color: isDarkMode ? '#f8fafc' : '#0f172a' }} title={title}>
                  {title}
                </h5>
              </div>
            </div>

            <div className="d-flex flex-column align-items-end gap-1 flex-shrink-0">
              {badge && (
                <span
                  className="badge font-monospace fs-10 px-2 py-0.5"
                  style={{
                    backgroundColor: isDarkMode ? 'rgba(99, 102, 241, 0.2)' : '#eef2ff',
                    color: isDarkMode ? '#c7d2fe' : '#4338ca',
                    border: isDarkMode ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid #c7d2fe'
                  }}
                >
                  {badge}
                </span>
              )}
              {status && (
                <span className={`badge bg-${status.variant}-subtle text-${status.variant} d-flex align-items-center gap-1 fs-11 px-2 py-0.5`}>
                  <CheckCircle2 size={11} />
                  {status.text}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="fs-13 mb-3" style={{ minHeight: '36px', lineHeight: '1.45', color: isDarkMode ? '#94a3b8' : '#475569' }}>
            {description}
          </p>

          {/* Middle Row: Embedded Interactive Chart Zone */}
          {chartConfig && (
            <div
              className="p-2.5 rounded-3 mb-3 d-flex align-items-center justify-content-between gap-3"
              style={{
                backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.5)' : '#f8fafc',
                border: isDarkMode ? '1px solid #334155' : '1px solid #f1f5f9'
              }}
            >
              <div className="flex-grow-1" style={{ minWidth: 0 }}>
                <ReactApexChart
                  options={chartOptions}
                  series={chartConfig.series}
                  type={chartConfig.type}
                  height={chartConfig.height || 64}
                  width="100%"
                />
              </div>
            </div>
          )}
        </div>

        {/* Bottom Row: Metrics Grid + Launch Action Button */}
        <div className="pt-2.5 border-top" style={{ borderColor: isDarkMode ? '#1e293b' : '#f1f5f9' }}>
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
            {/* Metric Pills */}
            <div className="d-flex flex-wrap gap-1.5 align-items-center">
              {metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="px-2 py-0.5 rounded-3 d-flex align-items-center gap-1.5"
                  style={{
                    backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : '#f8fafc',
                    border: isDarkMode ? '1px solid #334155' : '1px solid #e2e8f0'
                  }}
                >
                  <small className="fs-11" style={{ color: isDarkMode ? '#94a3b8' : '#64748b' }}>{m.label}:</small>
                  <strong className="fs-12 font-monospace" style={{ color: isDarkMode ? '#f1f5f9' : '#0f172a' }}>{m.value}</strong>
                </div>
              ))}
            </div>

            {/* Action Trigger Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpen(id);
              }}
              className="btn btn-sm rounded-pill px-3 py-1 fs-12 fw-bold d-flex align-items-center gap-1 shadow-none transition"
              style={{
                backgroundColor: isDarkMode ? 'rgba(99, 102, 241, 0.2)' : '#eef2ff',
                color: isDarkMode ? '#c7d2fe' : '#4338ca',
                border: isDarkMode ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid #c7d2fe'
              }}
            >
              <span>Open Studio</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
