import {
  PLATE_RESULT_A,
  PLATE_RESULT_B,
  type PlateResult,
} from '@/mock/hall5/plate-detect'
// import { post } from '@/api/request'   // ← 阶段二打开这行

/** 餐盘样本编号 */
export type PlateSample = 'A' | 'B'

/**
 * 5-2 餐盘剩余物智能识别系统 —— 接口层
 *
 * 【阶段一】直接返回假数据
 * 【阶段二】把函数体换成注释里的写法，页面不用改
 *
 * 阶段二这里会改成：把摄像头采集到的图像 POST 给后端，后端跑模型后返回识别结果。
 */
export const detectPlate = async (
  sample: PlateSample = 'A',
): Promise<PlateResult> => {
  // 阶段二改成：return post<PlateResult>('/hall5/plate/detect', { image })
  return sample === 'B' ? PLATE_RESULT_B : PLATE_RESULT_A
}