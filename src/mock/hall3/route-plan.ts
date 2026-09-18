/**
 * 3-1 运输路线选择系统 —— 假数据
 * 负责人：汤程鑫
 *
 * 甲方已确认：由三条候选路线改为「一条」，
 * 不要再做路线切换、多路线对比的界面。
 */
export interface RouteNode {
  id: string
  name: string
  /** 节点类型：起点 / 沿途 / 终点 */
  type: '起点' | '沿途' | '终点'
  /** 经纬度 [经度, 纬度] */
  lngLat: [number, number]
  /** 节点说明 */
  desc: string
  /** 风险提示，无风险传空字符串 */
  risk: string
}

export interface RouteInfo {
  /** 路线距离 km */
  distanceKm: number
  /** 预计时长（小时） */
  durationH: number
  riskLevel: '低风险' | '中风险' | '高风险'
  /** 风险来源说明 */
  riskDetail: string
}

export interface RoutePlanData {
  startName: string
  endName: string
  /** 途经节点（含起终点） */
  nodes: RouteNode[]
  info: RouteInfo
}

export const ROUTE_PLAN: RoutePlanData = {
  startName: '产地 · 出库点',
  endName: '目的地 · 中转粮库',
  nodes: [
    {
      id: 'n1',
      name: '产地 · 出库点',
      type: '起点',
      lngLat: [116.39, 39.91],
      desc: '粮食装车出发',
      risk: '',
    },
    {
      id: 'n2',
      name: '陆运中转站',
      type: '沿途',
      lngLat: [117.2, 39.13],
      desc: '公路转铁路，装卸一次',
      risk: '装卸环节存在破碎损耗',
    },
    {
      id: 'n3',
      name: '港口中转',
      type: '沿途',
      lngLat: [117.72, 38.98],
      desc: '散粮装船',
      risk: '港口滞留可能受潮',
    },
    {
      id: 'n4',
      name: '海运航段',
      type: '沿途',
      lngLat: [119.1, 38.4],
      desc: '海上运输',
      risk: '舱内温湿度波动',
    },
    {
      id: 'n5',
      name: '目的地 · 中转粮库',
      type: '终点',
      lngLat: [120.1, 37.9],
      desc: '到港卸粮入库',
      risk: '',
    },
  ],
  info: {
    distanceKm: 486,
    durationH: 11.5,
    riskLevel: '中风险',
    riskDetail: '港口中转环节遇降雨概率较高，建议缩短露天暂存时间。',
  },
}