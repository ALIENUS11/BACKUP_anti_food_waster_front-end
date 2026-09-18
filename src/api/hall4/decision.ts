import {
  DECISION_HOT_WET,
  DECISION_CO2,
  type DecisionData,
} from '@/mock/hall4/decision'
// import { get } from '@/api/request'   // ← 阶段二打开这行

/** 风险场景：高温高湿 / CO₂ 超标 */
export type DecisionScene = 'hot-wet' | 'co2'

/**
 * 4-2 AI仓储风险综合决策系统 —— 接口层
 *
 * 【阶段一】直接返回假数据
 * 【阶段二】把函数体换成注释里的写法，页面不用改
 *
 * 两种场景用来演示「不同风险场景下给出不同处置建议」。
 */
export const getDecision = async (
  scene: DecisionScene = 'hot-wet',
): Promise<DecisionData> => {
  // 阶段二改成：return get<DecisionData>('/hall4/decision', { scene })
  return scene === 'co2' ? DECISION_CO2 : DECISION_HOT_WET
}