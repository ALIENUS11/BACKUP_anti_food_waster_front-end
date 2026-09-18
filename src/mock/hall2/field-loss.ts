/**
 * 2-1 田间收获减损展示 —— 假数据
 * 负责人：熊欣
 */
export interface LossType {
  name: string
  desc: string
}

export interface FactorPoint {
  /** 作物含水率 % */
  moisture: number
  /** 对应损失率 % */
  lossRate: number
}

export interface CompareItem {
  /** 作业方案名称 */
  plan: string
  lossRate: number
}

export interface FieldLossData {
  /** 过程指标 */
  metrics: { label: string; value: string; unit: string }[]
  /** 田间损失现象 */
  lossTypes: LossType[]
  /** 影响因素散点数据 */
  factors: FactorPoint[]
  /** 优化前后损失率对比 */
  compare: CompareItem[]
  /** AI 减损建议 */
  suggestion: string
}

export const FIELD_LOSS: FieldLossData = {
  metrics: [
    { label: '当前损失率', value: '3.4', unit: '%' },
    { label: '作物含水率', value: '20', unit: '%' },
    { label: '作业速度', value: '5.2', unit: 'km/h' },
  ],
  lossTypes: [
    { name: '落粒', desc: '收割机作业时籽粒脱落田间' },
    { name: '漏收', desc: '作业路径偏移导致部分作物未收割' },
    { name: '夹带', desc: '籽粒随秸秆排出机外' },
  ],
  factors: [
    { moisture: 14, lossRate: 1.8 },
    { moisture: 16, lossRate: 2.1 },
    { moisture: 18, lossRate: 2.6 },
    { moisture: 20, lossRate: 3.4 },
    { moisture: 22, lossRate: 4.2 },
    { moisture: 24, lossRate: 5.3 },
  ],
  compare: [
    { plan: '当前作业参数', lossRate: 3.4 },
    { plan: 'AI 优化参数', lossRate: 2.1 },
  ],
  suggestion:
    '当前含水率 20%，建议将滚筒转速下调 8%、作业速度降至 4.5 km/h，预计可降低损失约 1.3 个百分点。',
}