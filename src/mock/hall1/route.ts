/**
 * 1-1 一粒米全链路动态路径展示 —— 假数据
 * 负责人：王宇烨
 */
export interface Capability {
  /** 感知对象 */
  perceive: string
  /** 输入数据 */
  input: string
  /** 算法 / 分析任务 */
  algorithm: string
  /** 分析结果 */
  result: string
  /** 减损作用 */
  benefit: string
}

export interface LinkNode {
  id: string
  /** 环节名称，固定四选一：收储分级 / 智能运输 / 仓储预警 / 餐桌减损 */
  name: string
  /** 风险说明 */
  risk: string
  /** AI 能力说明：五类固定字段，一个都不能少 */
  capability: Capability
  /** 导览提示 */
  guide: string
}

export const LINK_NODES: LinkNode[] = [
  {
    id: 'storage',
    name: '收储分级',
    risk: '入库前杂质、水分不达标，导致后续仓储损耗放大',
    capability: {
      perceive: '粮食颗粒、杂质',
      input: '工业相机图像、近红外光谱、水分含量',
      algorithm: '颗粒级目标检测 + 表面特征提取',
      result: '杂质率 2.1%，品质等级 良级',
      benefit: '入库前拦截劣质粮，减少后续仓储损耗',
    },
    guide: '接下来请前往收储展区，体验一把粮的 AI 检测',
  },
  {
    id: 'transit',
    name: '智能运输',
    risk: '在途温湿度波动导致霉变、受潮',
    capability: {
      perceive: '在途粮情环境',
      input: '温度、湿度、运输时长、天气',
      algorithm: '时序神经网络趋势预测',
      result: '霉变风险概率 12%',
      benefit: '提前识别高风险区段，降低在途品质劣变',
    },
    guide: '接下来请前往运输展区，看一条粮的运输链路',
  },
  {
    id: 'warehouse',
    name: '仓储预警',
    risk: '粮堆内部局部发热、虫害扩散难以肉眼发现',
    capability: {
      perceive: '粮堆温度场、虫情分布',
      input: '温度、湿度、CO₂ 浓度、虫情指数',
      algorithm: '热斑扩散预测 + 多源风险融合评估',
      result: '综合风险指数 68（中风险）',
      benefit: '24 小时守护，把事后处理变事前预警',
    },
    guide: '接下来请前往仓储展区，看 AI 如何 24 小时守护粮仓',
  },
  {
    id: 'dining',
    name: '餐桌减损',
    risk: '剩餐浪费对应的全过程资源投入被忽视',
    capability: {
      perceive: '餐盘剩余食物',
      input: '餐盘图像',
      algorithm: '目标检测 + 图像分类',
      result: '剩余食物 4 类，折合原粮 86g',
      benefit: '把浪费量化成数据，推动行为改变',
    },
    guide: '最后请前往消费展区，看看一盘剩餐背后的代价',
  },
]