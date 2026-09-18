/**
 * 6-1 全链条成果动态总览系统 —— 假数据
 * 负责人：王宇烨
 *
 * 注意：四个环节的成果文案要与前面各区域的展示数据口径一致，不能自相矛盾。
 */
export interface ResultLink {
  id: string
  /** 环节名称，固定四选一：精准分级 / 智能运输 / 仓储预警 / 餐桌减损 */
  name: string
  /** 成果摘要 */
  summary: string
  /** 风险控制点 */
  riskControl: string
  /** 减损成效 */
  benefit: string
}

export const RESULT_LINKS: ResultLink[] = [
  {
    id: 'grade',
    name: '精准分级',
    summary: '入库前多模态质检，识别杂质与品质等级',
    riskControl: '杂质率、水分、霉变风险',
    benefit: '拦截劣质粮入库，降低后续仓储风险',
  },
  {
    id: 'transport',
    name: '智能运输',
    summary: '运输路线规划与在途风险预测',
    riskControl: '在途温湿度、运输时长、天气扰动',
    benefit: '提前识别高风险时段，降低在途品质劣变',
  },
  {
    id: 'warehouse',
    name: '仓储预警',
    summary: '24 小时粮情监测与综合风险指数评估',
    riskControl: '温湿度、CO₂、虫情扩散',
    benefit: '事前预警替代事后处置，避免霉变扩散',
  },
  {
    id: 'dining',
    name: '餐桌减损',
    summary: '餐盘剩余物识别与资源换算',
    riskControl: '剩余食物类别与数量',
    benefit: '量化浪费、推动行为改变',
  },
]