import { PageShell } from '@/components'

/**
 * 3-2 运输风险预测系统
 *
 * 区域：运输
 * 负责人：汤程鑫
 * 需求：见 relate.md 中「3-2 运输风险预测系统」的「展示要求 / 交互要求」两节
 * 数据：在 src/mock/hall3/RiskForecast.ts 里写假数据，不要在页面里写死
 *
 * 写页面时先看样板页：src/pages/Template/index.tsx（路由 /template）
 */
const RiskForecast = () => (
  <PageShell area="运输" title="运输风险预测系统">
    <div className="flex h-full items-center justify-center">
      <p className="text-ink-subtle">
        待开发 —— 需求见 relate.md「3-2 运输风险预测系统」
      </p>
    </div>
  </PageShell>
)

export default RiskForecast
