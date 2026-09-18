/**
 * 2-3 粮食品质综合分级系统 —— 假数据
 * 负责人：熊欣
 */
export interface Indicator {
  name: string
  value: string
  unit: string
}

export interface PreprocessRow {
  sampleId: string
  /** 原始数据（字符串，便于原样展示） */
  raw: string
  /** 预处理后数据 */
  cleaned: string
  /** 数据状态：正常 / 修正 / 剔除 */
  status: '正常' | '修正' | '剔除'
}

export interface QualityResult {
  sampleId: string
  /** 综合评分 0–100 */
  score: number
  /** 品质等级：优级 / 良级 / 合格级 */
  grade: string
  /** 风险状态：低 / 中 / 高 */
  risk: string
  /** 理化指标 */
  indicators: Indicator[]
  /** 环境参数 */
  environment: Indicator[]
  /** 预处理前后对比 */
  preprocess: PreprocessRow[]
  /** AI 入库决策建议 */
  suggestion: string
}

export const QUALITY_RESULT: QualityResult = {
  sampleId: 'SP-20260918-0021',
  score: 78.4,
  grade: '良级',
  risk: '中',
  indicators: [
    { name: '水分', value: '14.2', unit: '%' },
    { name: '蛋白质', value: '12.8', unit: 'g/100g' },
    { name: '杂质率', value: '2.10', unit: '%' },
  ],
  environment: [
    { name: '温度', value: '26.4', unit: '℃' },
    { name: '湿度', value: '68', unit: '%RH' },
  ],
  preprocess: [
    {
      sampleId: 'SP-0021',
      raw: '水分 14.2 / 杂质 2.10',
      cleaned: '归一化 0.71 / 0.21',
      status: '正常',
    },
    {
      sampleId: 'SP-0022',
      raw: '水分 空值',
      cleaned: '批次均值 13.8 填充',
      status: '修正',
    },
    {
      sampleId: 'SP-0023',
      raw: '水分 142（异常）',
      cleaned: '超出量程，剔除',
      status: '剔除',
    },
  ],
  suggestion:
    '该批粮食含水率偏高，在当前环境下预计 7–15 天内存在霉变风险，建议优先处理后入库。',
}