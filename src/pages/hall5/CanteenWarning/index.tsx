import { PageShell } from '@/components'

/**
 * 5-1 数字化食堂浪费场景警示展示
 *
 * 区域：消费
 * 负责人：许议文
 * 需求：见 relate.md 中「5-1 数字化食堂浪费场景警示展示」的「展示要求 / 交互要求」两节
 * 数据：假数据写在 src/mock/hall5/canteen-warning.ts
 *       页面从 src/api/hall5/canteen-warning.ts 取数（阶段一返回 mock，阶段二换真实请求，页面不用改）
 *
 * 写页面时先看样板页：src/pages/Template/index.tsx（路由 /template）
 */
const CanteenWarning = () => (
  <PageShell area="消费" title="数字化食堂浪费场景警示展示">
    <div className="flex h-full items-center justify-center">
      <p className="text-ink-subtle">
        待开发 —— 需求见 relate.md「5-1 数字化食堂浪费场景警示展示」
      </p>
    </div>
  </PageShell>
)

export default CanteenWarning
