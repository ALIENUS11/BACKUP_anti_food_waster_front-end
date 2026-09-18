/**
 * 样板页的假数据
 *
 * 【数据放哪】
 *   阶段一全部用假数据，统一放 src/mock/ 下。真实模块按区域分子目录，例如：
 *     src/mock/hall2/impurity.ts   ← 收储 · 杂质筛除
 *     src/mock/hall4/pest.ts       ← 仓储 · 虫害模拟
 *
 * 【怎么组织】
 *   1. 每个模块一个文件，按下面的方式导出一组命名常量
 *   2. 字段结构按「最终接口会返回什么」来写（嵌套、单位、时间格式都照着真实接口想）
 *      —— 这样阶段二接后端时，只改数据来源，页面组件一行都不用动
 *   3. 类型定义和 mock 数据放一起，页面 import 类型即可
 */

import type { MetricTone, RiskLevel } from '@/components'

/* ---------------------------------------------------------------- 指标卡 */

export interface MetricItem {
  label: string
  value: string
  unit?: string
  /** 不传 = 普通颜色（text-ink） */
  tone?: MetricTone
  hint?: string
}

export const METRICS: MetricItem[] = [
  { label: '检测样本数', value: '186', unit: '个' },
  { label: '正常颗粒数', value: '1,834', tone: 'safe' },
  {
    label: '杂质率',
    value: '2.10',
    unit: '%',
    tone: 'warn',
    hint: '杂质数量 ÷ 总颗粒数 × 100%',
  },
  { label: '异常目标数', value: '39', tone: 'danger', hint: '含霉变粒、砂石' },
]

/* ---------------------------------------------------------------- 图表 */

export interface TrendPoint {
  time: string
  impurityRate: number
}

/** 杂质率随时间变化（用于折线图） */
export const TREND: TrendPoint[] = [
  { time: '08:00', impurityRate: 1.2 },
  { time: '08:05', impurityRate: 1.5 },
  { time: '08:10', impurityRate: 1.4 },
  { time: '08:15', impurityRate: 1.9 },
  { time: '08:20', impurityRate: 2.1 },
  { time: '08:25', impurityRate: 1.8 },
  { time: '08:30', impurityRate: 2.3 },
]

/** 各杂质类别的数量（用于柱状图 / 环形图） */
export const CATEGORY_DIST = [
  { name: '砂石', value: 18 },
  { name: '秸秆', value: 9 },
  { name: '霉变粒', value: 8 },
  { name: '碎米', value: 4 },
]

/* ---------------------------------------------------------------- 表格 */

export interface DetectRow {
  id: string
  category: string
  position: string
  count: number
  confidence: number
  level: RiskLevel
}

export const DETECT_ROWS: DetectRow[] = [
  { id: '1', category: '砂石', position: '(412, 236)', count: 18, confidence: 0.93, level: 'safe' },
  { id: '2', category: '秸秆', position: '(188, 402)', count: 9, confidence: 0.88, level: 'safe' },
  { id: '3', category: '霉变粒', position: '(530, 118)', count: 8, confidence: 0.71, level: 'warn' },
  { id: '4', category: '碎米', position: '(274, 655)', count: 4, confidence: 0.64, level: 'warn' },
]

/* ---------------------------------------------------------------- 等级 */

export interface GradeItem {
  name: string
  range: string
  active: boolean
}

export const GRADES: GradeItem[] = [
  { name: '优级', range: '杂质率 0 – 2%', active: false },
  { name: '良级', range: '杂质率 2 – 5%', active: true },
  { name: '合格级', range: '杂质率 ≥ 5%', active: false },
]

/* ---------------------------------------------------------------- 文本 */

export const SUMMARY =
  '本批粮食杂质率 2.10%，处于良级区间。检测到霉变粒 8 粒，建议复检水分后入库。'

export const UPDATED_AT = '2026-09-18 08:32:07'