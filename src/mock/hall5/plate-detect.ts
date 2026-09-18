/**
 * 5-2 餐盘剩余物智能识别系统 —— 假数据
 * 负责人：许议文
 */
export interface FoodItem {
  id: string
  /** 食物类别：米饭 / 面食 / 蔬菜 / 肉类 / 水果 */
  category: string
  /** 检测框 [x, y, w, h]，归一化坐标 0–1 */
  box: [number, number, number, number]
  /** 识别置信度 0–1 */
  confidence: number
}

export interface PlateResult {
  sampleId: string
  imageUrl: string
  foods: FoodItem[]
}

export const PLATE_RESULT_A: PlateResult = {
  sampleId: 'PLATE-A',
  imageUrl: '/samples/plate-a.jpg',
  foods: [
    { id: '1', category: '米饭', box: [0.18, 0.42, 0.3, 0.26], confidence: 0.94 },
    { id: '2', category: '蔬菜', box: [0.5, 0.3, 0.24, 0.22], confidence: 0.89 },
    { id: '3', category: '肉类', box: [0.45, 0.58, 0.26, 0.2], confidence: 0.86 },
  ],
}

export const PLATE_RESULT_B: PlateResult = {
  sampleId: 'PLATE-B',
  imageUrl: '/samples/plate-b.jpg',
  foods: [
    { id: '1', category: '面食', box: [0.22, 0.38, 0.32, 0.28], confidence: 0.92 },
    { id: '2', category: '水果', box: [0.58, 0.5, 0.2, 0.18], confidence: 0.81 },
  ],
}

/** 食物类别固定配色，全项目保持一致（检测框、图例、分割掩膜都用这套） */
export const FOOD_COLORS: Record<string, string> = {
  米饭: '#FFFFFF',
  面食: '#D97706',
  蔬菜: '#16A34A',
  肉类: '#DC2626',
  水果: '#7C3AED',
}