import { PageShell } from '@/components'

/**
 * 2-1 田间收获减损展示
 *
 * 区域：收储
 * 负责人：熊欣
 * 需求：见 relate.md 中「2-1 田间收获减损展示」的「展示要求 / 交互要求」两节
 * 数据：假数据写在 src/mock/hall2/field-loss.ts
 *       页面从 src/api/hall2/field-loss.ts 取数（阶段一返回 mock，阶段二换真实请求，页面不用改）
 *
 * 写页面时先看样板页：src/pages/Template/index.tsx（路由 /template）
 */
const FieldLoss = () => (
  <PageShell area="收储" title="田间收获减损展示">
    <div className="flex h-full items-center justify-center">
      <p className="text-ink-subtle">
        待开发 —— 需求见 relate.md「2-1 田间收获减损展示」
      </p>
    </div>
  </PageShell>
)

export default FieldLoss
