/**
 * 3-2 运输风险预测系统 —— 假数据
 * 负责人：汤程鑫
 *
 * docx 明确允许使用「预置运输环境时序数据或模拟数据」，不必等真实数据。
 */
export interface SeriesPoint {
  /** 统一时间轴上的时间点 */
  time: string
  temperature: number
  humidity: number
  /** 累计运输时长 h */
  duration: number
}

export interface ForecastPoint {
  time: string
  temperature: number
  humidity: number
}

export interface RiskForecastData {
  /** 历史时序数据 */
  history: SeriesPoint[]
  /** 预测曲线（衔接在历史之后） */
  forecast: ForecastPoint[]
  /** 预测起始时间（画竖线的位置） */
  forecastStart: string
  /** 预测时间范围 */
  forecastRange: string
  /** 潜在异常区段，用于高亮 */
  abnormalRanges: [string, string][]
  /** 霉变风险概率 % */
  moldRisk: number
  /** 受潮风险概率 % */
  dampRisk: number
  /** 风险概率阈值 %，超过要标识高风险区间 */
  riskThreshold: number
  /** 预警弹窗文案 */
  alert: string
}

export const RISK_FORECAST: RiskForecastData = {
  history: [
    { time: '08:00', temperature: 22.1, humidity: 55, duration: 0 },
    { time: '09:00', temperature: 24.6, humidity: 58, duration: 1 },
    { time: '10:00', temperature: 27.3, humidity: 63, duration: 2 },
    { time: '11:00', temperature: 29.8, humidity: 69, duration: 3 },
    { time: '12:00', temperature: 31.2, humidity: 74, duration: 4 },
  ],
  forecast: [
    { time: '13:00', temperature: 32.4, humidity: 78 },
    { time: '14:00', temperature: 33.1, humidity: 81 },
    { time: '15:00', temperature: 33.6, humidity: 84 },
    { time: '16:00', temperature: 33.2, humidity: 82 },
  ],
  forecastStart: '12:00',
  forecastRange: '12:00 – 16:00',
  abnormalRanges: [['14:00', '16:00']],
  moldRisk: 42,
  dampRisk: 58,
  riskThreshold: 50,
  alert:
    '未来 14:00–16:00 湿度持续高于 80%RH，受潮风险概率 58% 已超阈值，建议提前通风降湿。',
}