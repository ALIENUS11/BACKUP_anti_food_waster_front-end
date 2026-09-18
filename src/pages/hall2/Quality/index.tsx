import { PageShell } from '@/components'

/**
 * 2-3 粮食品质综合分级系统
 *
 * 区域：收储
 * 负责人：熊欣
 * 需求：见 relate.md 中「2-3 粮食品质综合分级系统」的「展示要求 / 交互要求」两节
 * 数据：在 src/mock/hall2/Quality.ts 里写假数据，不要在页面里写死
 *
 * 写页面时先看样板页：src/pages/Template/index.tsx（路由 /template）
 */
const Quality = () => (
  <PageShell area="收储" title="粮食品质综合分级系统">
    <div className="flex h-full items-center justify-center">
      <p className="text-ink-subtle">
        待开发 —— 需求见 relate.md「2-3 粮食品质综合分级系统」
      </p>
    </div>
  </PageShell>
)

export default Quality
