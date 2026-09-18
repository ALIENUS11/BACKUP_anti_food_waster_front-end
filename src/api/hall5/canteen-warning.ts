import {
  CANTEEN_WARNING,
  type CanteenWarningData,
} from '@/mock/hall5/canteen-warning'
// import { get } from '@/api/request'   // ← 阶段二打开这行

/**
 * 5-1 数字化食堂浪费场景警示展示 —— 接口层
 *
 * 【阶段一】直接返回假数据（视频本身是本地文件，不走接口）
 * 【阶段二】把函数体换成注释里的写法，页面不用改
 */
export const getCanteenWarning = async (): Promise<CanteenWarningData> => {
  // 阶段二改成：return get<CanteenWarningData>('/hall5/canteen-warning')
  return CANTEEN_WARNING
}