/**
 * ============================================================================
 * 样板页 —— 开发前先看这一页
 * ============================================================================
 * 路由：/template
 *
 * 这一页的作用不是展示业务，而是把「一个标准页面长什么样、用哪些组件、
 * 数据怎么放」全部演示一遍。你写自己的模块时，照着这一页抄结构就行。
 *
 * 这一页演示了：
 *   1. PageShell 页面骨架（顶部栏 + 内容区 + 底部提示条）
 *   2. 12 栅格布局，卡片间距 gap-6
 *   3. MetricCard 指标卡（4 种颜色语义）
 *   4. Panel 卡片（含标题栏右侧操作区）
 *   5. RiskTag 风险标签
 *   6. ECharts 图表（加了 theme 就不用写样式）
 *   7. Table 表格（状态列用 RiskTag）
 *   8. Button 主/次按钮
 *   9. 点击有反馈（规范里的硬性要求）
 *  10. mock 数据怎么放、怎么命名
 *
 * 注意：整页没有出现一个 # 色值，颜色全部来自设计令牌。
 * ============================================================================
 */

import { useState } from 'react'
import { Button, Table, type TableProps } from 'antd'
import ReactECharts from 'echarts-for-react'

// 通用组件统一从 '@/components' 引入
import { PageShell, Panel, MetricCard, RiskTag } from '@/components'

// 假数据统一从 '@/mock' 引入，不要写死在页面里
import {
  METRICS,
  TREND,
  CATEGORY_DIST,
  DETECT_ROWS,
  GRADES,
  SUMMARY,
  UPDATED_AT,
  type DetectRow,
} from '@/mock/template'

/* ---------------------------------------------------------------------------
 * 表格列定义
 * 规则：数字列右对齐 + 等宽字体；状态列用 RiskTag；文本列左对齐
 * ------------------------------------------------------------------------ */
const columns: TableProps<DetectRow>['columns'] = [
  { title: '目标类别', dataIndex: 'category', key: 'category' },
  {
    title: '位置坐标',
    dataIndex: 'position',
    key: 'position',
    render: (v: string) => <span className="font-mono text-ink-muted">{v}</span>,
  },
  {
    title: '数量',
    dataIndex: 'count',
    key: 'count',
    align: 'right',
    render: (v: number) => <span className="font-mono">{v}</span>,
  },
  {
    title: '置信度',
    dataIndex: 'confidence',
    key: 'confidence',
    align: 'right',
    render: (v: number) => <span className="font-mono">{v.toFixed(2)}</span>,
  },
  {
    title: '状态',
    dataIndex: 'level',
    key: 'level',
    render: (level: DetectRow['level']) => <RiskTag level={level} />,
  },
]

const Template = () => {
  // 演示「点击有反馈」：选中哪个等级，哪个就高亮
  const [activeGrade, setActiveGrade] = useState('良级')
  // 演示「操作按钮」：点「重新识别」切换一组数据
  const [refreshed, setRefreshed] = useState(false)

  /* 图表配置：只写数据，不写样式 —— 样式由 theme="grain-hall" 统一提供 */
  const trendOption = {
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: TREND.map((d) => d.time) },
    yAxis: { type: 'value', name: '杂质率 %' },
    series: [
      {
        name: '杂质率',
        type: 'line',
        data: TREND.map((d) => d.impurityRate),
      },
    ],
  }

  const distOption = {
    tooltip: { trigger: 'item' },
    legend: { top: 0, right: 0 },
    series: [
      {
        name: '杂质构成',
        type: 'pie',
        radius: ['55%', '78%'], // 环形图，不用实心饼图
        data: CATEGORY_DIST,
      },
    ],
  }

  return (
    /* 1. 页面骨架 —— 每个页面都必须用它包裹 */
    <PageShell
      area="样板页"
      title="组件与用法示例"
      status={
        <>
          <RiskTag level="warn" />
          <span className="font-mono text-sm text-ink-subtle">{UPDATED_AT}</span>
        </>
      }
      footer="操作提示：点击「质量等级」卡片查看详情，点击「重新识别」刷新检测结果"
    >
      <div className="grid grid-cols-12 gap-6">
        {/* 2. 指标卡一行 —— 同组卡片尺寸一致，数值大、单位小 */}
        {METRICS.map((m) => (
          <div key={m.label} className="col-span-3">
            <MetricCard
              label={m.label}
              value={m.value}
              unit={m.unit}
              tone={m.tone}
              hint={m.hint}
            />
          </div>
        ))}

        {/* 3. 图表卡片 —— 加 theme="grain-hall" 即可，不要在 option 里写样式 */}
        <div className="col-span-8">
          <Panel title="杂质率趋势">
            <ReactECharts theme="grain-hall" option={trendOption} style={{ height: 320 }} />
          </Panel>
        </div>

        {/* 4. 环形图 —— 占比类数据固定用环形图 */}
        <div className="col-span-4">
          <Panel title="杂质构成占比">
            <ReactECharts theme="grain-hall" option={distOption} style={{ height: 320 }} />
          </Panel>
        </div>

        {/* 5. 卡片 + 点击反馈 + 按钮 —— 交互后必须有视觉响应，不能点了没反应 */}
        <div className="col-span-5">
          <Panel
            title="质量等级"
            extra={
              <Button size="small" onClick={() => setRefreshed((v) => !v)}>
                重新识别
              </Button>
            }
          >
            <div className="space-y-3">
              {GRADES.map((g) => {
                const active = g.name === activeGrade
                return (
                  <button
                    key={g.name}
                    type="button"
                    onClick={() => setActiveGrade(g.name)}
                    className={[
                      'flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left transition-all',
                      active
                        ? 'border-brand bg-brand-soft shadow-glow'
                        : 'border-line bg-panel hover:bg-hover',
                    ].join(' ')}
                  >
                    <span className="text-card text-ink">{g.name}</span>
                    <span className="text-sm text-ink-subtle">{g.range}</span>
                  </button>
                )
              })}
            </div>

            <div className="mt-4 rounded-lg bg-raised p-4">
              <div className="mb-1 text-sm text-ink-subtle">AI 判定结论</div>
              <p className="text-ink-muted">
                {refreshed ? '检测已刷新：' : ''}
                {SUMMARY}
              </p>
            </div>
          </Panel>
        </div>

        {/* 6. 表格 —— 数字右对齐 + 等宽，状态列用 RiskTag */}
        <div className="col-span-7">
          <Panel
            title="识别明细"
            extra={
              <div className="flex gap-2">
                <Button size="small">导出</Button>
                <Button size="small" type="primary">
                  重新检测
                </Button>
              </div>
            }
          >
            <Table<DetectRow>
              columns={columns}
              dataSource={DETECT_ROWS}
              rowKey="id"
              pagination={false}
              size="middle"
            />
          </Panel>
        </div>
      </div>
    </PageShell>
  )
}

export default Template