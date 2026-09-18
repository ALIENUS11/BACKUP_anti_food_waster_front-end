/**
 * 4-2 AI仓储风险综合决策系统 —— 假数据
 * 负责人：许议文
 *
 * 处置建议规则后续要搬进 MySQL 配置表，
 * 这里先按「规则表」的结构写，阶段二接后端时前端不用改。
 */
export interface Contribution {
  name: string
  /** 贡献度 % */
  value: number
}

export interface Advice {
  /** 建议内容 */
  content: string
  /** 建议优先级 */
  priority: '高' | '中' | '低'
}

export interface DecisionData {
  /** 综合风险指数 0–100 */
  riskIndex: number
  level: '低风险' | '中风险' | '高风险'
  /** 主要风险来源 */
  sources: string[]
  /** 各指标贡献度 */
  contribution: Contribution[]
  /** 处置建议 */
  advices: Advice[]
  /** 处置前后风险指数对比 */
  beforeAfter: { before: number; after: number }
}

/** 场景一：高温 + 高湿 → 优先除湿 */
export const DECISION_HOT_WET: DecisionData = {
  riskIndex: 68,
  level: '中风险',
  sources: ['高温', '高湿'],
  contribution: [
    { name: '温度', value: 34 },
    { name: '湿度', value: 41 },
    { name: 'CO₂', value: 15 },
    { name: '虫情', value: 10 },
  ],
  advices: [
    { content: '高温高湿叠加，霉变风险快速上升，建议优先启动除湿设备', priority: '高' },
    { content: '同步开启机械通风，降低粮堆内部温度', priority: '中' },
  ],
  beforeAfter: { before: 68, after: 31 },
}

/** 场景二：CO₂ 超标 → 重点巡查 */
export const DECISION_CO2: DecisionData = {
  riskIndex: 74,
  level: '高风险',
  sources: ['CO₂ 超标', '局部发热'],
  contribution: [
    { name: '温度', value: 22 },
    { name: '湿度', value: 14 },
    { name: 'CO₂', value: 52 },
    { name: '虫情', value: 12 },
  ],
  advices: [
    { content: 'CO₂ 浓度超标，提示粮堆局部发热或微生物活动加剧，建议重点巡查', priority: '高' },
    { content: '对高温点位使用粮情测温探杆复测，确认热斑范围', priority: '中' },
  ],
  beforeAfter: { before: 74, after: 38 },
}