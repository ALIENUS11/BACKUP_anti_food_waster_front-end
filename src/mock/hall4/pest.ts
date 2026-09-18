/**
 * 4-1 虫害环境模拟系统 —— 假数据
 * 负责人：王宇烨
 */
export interface PestSpecies {
  id: string
  name: string
}

/**
 * 处置前后对比
 * 这五组数据是 docx 点名要展示的，缺一不可
 */
export interface PestDisposal {
  /** 处置措施名称 */
  measure: string
  /** 处置开始时间 */
  startedAt: string
  /** 处置前后虫害数量 */
  countBefore: number
  countAfter: number
  /** 虫害指数下降幅度 % */
  indexDropPct: number
  /** 风险区域缩小比例 % */
  areaShrinkPct: number
}

export interface PestData {
  /** 可选虫害种类 */
  species: PestSpecies[]
  /** 可选初始数量 */
  initialCounts: number[]
  /** 风险预警文案 */
  alert: string
  /** 处置建议 */
  advice: string
  /** 处置前后对比 */
  disposal: PestDisposal
}

export const PEST_DATA: PestData = {
  species: [
    { id: 'sitophilus', name: '玉米象' },
    { id: 'rhizopertha', name: '谷蠹' },
    { id: 'tribolium', name: '赤拟谷盗' },
  ],
  initialCounts: [10, 50, 100, 200],
  alert: '虫害风险达到高风险等级，虫情指数 78，建议立即处置。',
  advice: '建议采用磷化氢熏蒸，并加密监测频次至每日一次。',
  disposal: {
    measure: '磷化氢熏蒸',
    startedAt: '2026-09-18 09:12:30',
    countBefore: 200,
    countAfter: 46,
    indexDropPct: 77,
    areaShrinkPct: 64,
  },
}