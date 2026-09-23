import { useQuery } from '@tanstack/react-query'
import ReactECharts from 'echarts-for-react'

import { PageShell, Panel, MetricCard, RiskTag, type RiskLevel } from '@/components'
import { getRoutePlan } from '@/api/hall3/route-plan'
import type { RouteInfo, RouteNode } from '@/mock/hall3/route-plan'

/**
 * 3-1 运输路线选择系统
 *
 * 区域：运输
 * 负责人：汤程鑫
 *
 * 甲方确认：本模块为「单条推荐路线」展示，不做多路线对比。
 * 页面结构：指标卡 → 运输路线示意（节点坐标图）→ 风险提示 → 途经节点步骤流
 * 数据：src/mock/hall3/route-plan.ts，经 src/api/hall3/route-plan.ts 取数。
 */

/** 风险文案（低/中/高）→ RiskTag 等级（safe/warn/danger） */
const RISK_TO_LEVEL: Record<RouteInfo['riskLevel'], RiskLevel> = {
  低风险: 'safe',
  中风险: 'warn',
  高风险: 'danger',
}

/** 节点类型徽标样式（颜色全部来自设计令牌，不写 # 色值） */
const NODE_TYPE_CLS: Record<RouteNode['type'], string> = {
  起点: 'bg-brand-soft text-brand',
  沿途: 'bg-raised text-ink-muted',
  终点: 'bg-safe-soft text-safe',
}

const RoutePlan = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['route-plan'],
    queryFn: getRoutePlan,
  })

  if (isLoading || !data) {
    return (
      <PageShell area="运输" title="运输路线选择系统">
        <div className="flex h-full items-center justify-center text-ink-subtle">
          正在加载…
        </div>
      </PageShell>
    )
  }

  /* 路线示意：直接用节点经纬度画在平面坐标系（非地图），样式交给 grain-hall 主题 */
  const routeOption = {
    tooltip: { trigger: 'item' },
    xAxis: { type: 'value', name: '经度', min: 115, max: 121 },
    yAxis: { type: 'value', name: '纬度', min: 37, max: 40.5 },
    series: [
      {
        name: '运输路线',
        type: 'line',
        data: data.nodes.map((n) => ({ name: n.name, value: n.lngLat })),
        symbolSize: 8,
        lineStyle: { width: 3 },
      },
      {
        name: '途经节点',
        type: 'effectScatter',
        data: data.nodes.map((n) => ({ name: n.name, value: n.lngLat })),
        symbolSize: 14,
        rippleEffect: { brushType: 'stroke' },
      },
    ],
  }

  const riskNodeCount = data.nodes.filter((n) => n.risk).length
  const riskLevel = RISK_TO_LEVEL[data.info.riskLevel]

  return (
    <PageShell
      area="运输"
      title="运输路线选择系统"
      status={<RiskTag level={riskLevel} label={data.info.riskLevel} />}
      footer="操作提示：当前为系统推荐运输方案，沿途节点的风险提示随运输环节自动更新"
    >
      <div className="grid grid-cols-12 gap-6">
        {/* 指标卡：同组尺寸一致，数字用等宽字体 */}
        <div className="col-span-3">
          <MetricCard label="总里程" value={data.info.distanceKm} unit="km" />
        </div>
        <div className="col-span-3">
          <MetricCard label="预计时长" value={data.info.durationH} unit="小时" />
        </div>
        <div className="col-span-3">
          <MetricCard label="途经节点" value={data.nodes.length} unit="个" />
        </div>
        <div className="col-span-3">
          <MetricCard
            label="风险等级"
            value={data.info.riskLevel}
            tone={riskLevel}
            hint={`全程 ${data.info.distanceKm} km · 约 ${data.info.durationH} 小时`}
          />
        </div>

        {/* 运输路线示意 */}
        <div className="col-span-8">
          <Panel title="运输路线示意">
            <ReactECharts theme="grain-hall" option={routeOption} style={{ height: 360 }} />
          </Panel>
        </div>

        {/* 风险提示 */}
        <div className="col-span-4">
          <Panel title="风险提示">
            <div className="flex items-center gap-3">
              <RiskTag level={riskLevel} label={data.info.riskLevel} />
              <span className="text-sm text-ink-subtle">当前运输方案</span>
            </div>

            <div className="mt-4 rounded-lg bg-raised p-4">
              <div className="mb-1 text-sm text-ink-subtle">风险说明</div>
              <p className="text-ink-muted">{data.info.riskDetail}</p>
            </div>

            <div className="mt-4 rounded-lg bg-raised p-4">
              <div className="mb-1 text-sm text-ink-subtle">风险节点统计</div>
              <p className="text-ink-muted">
                全程共 {data.nodes.length} 个节点，其中 {riskNodeCount} 个环节存在风险提示
                （见下方途经节点）。
              </p>
            </div>
          </Panel>
        </div>

        {/* 途经节点步骤流 */}
        <div className="col-span-12">
          <Panel title="途经节点">
            <div className="flex flex-wrap items-stretch gap-4">
              {data.nodes.map((n, i) => (
                <div key={n.id} className="flex items-center gap-4">
                  <div className="w-60 rounded-xl border border-line bg-panel p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${NODE_TYPE_CLS[n.type]}`}
                      >
                        {n.type}
                      </span>
                      {n.risk && <span className="text-xs text-warn">有风险</span>}
                    </div>
                    <div className="text-card text-ink">{n.name}</div>
                    <div className="mt-1 text-sm text-ink-muted">{n.desc}</div>
                    {n.risk && (
                      <div className="mt-2 rounded-lg bg-warn-soft px-3 py-2 text-sm text-warn">
                        风险：{n.risk}
                      </div>
                    )}
                  </div>
                  {i < data.nodes.length - 1 && <div className="text-section text-brand">→</div>}
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </PageShell>
  )
}

export default RoutePlan
