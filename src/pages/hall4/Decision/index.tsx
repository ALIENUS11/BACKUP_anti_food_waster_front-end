import { PageShell } from '@/components'

/**
 * 4-2 AI仓储风险综合决策系统
 *
 * 区域：仓储
 * 负责人：许议文
 * 需求：见 relate.md 中「4-2 AI仓储风险综合决策系统」的「展示要求 / 交互要求」两节
 * 数据：在 src/mock/hall4/Decision.ts 里写假数据，不要在页面里写死
 *
 * 写页面时先看样板页：src/pages/Template/index.tsx（路由 /template）
 */
const Decision = () => (
  <PageShell area="仓储" title="AI仓储风险综合决策系统">
    <div className="flex h-full items-center justify-center">
      <p className="text-ink-subtle">
        待开发 —— 需求见 relate.md「4-2 AI仓储风险综合决策系统」
      </p>
    </div>
  </PageShell>
)

export default Decision
