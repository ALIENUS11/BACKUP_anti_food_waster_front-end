import { PageShell } from '@/components'

/**
 * 3-1 运输路线选择系统
 *
 * 区域：运输
 * 负责人：汤程鑫
 * 需求：见 relate.md 中「3-1 运输路线选择系统」的「展示要求 / 交互要求」两节
 * 数据：假数据写在 src/mock/hall3/route-plan.ts
 *       页面从 src/api/hall3/route-plan.ts 取数（阶段一返回 mock，阶段二换真实请求，页面不用改）
 *
 * 写页面时先看样板页：src/pages/Template/index.tsx（路由 /template）
 */
const RoutePlan = () => (
  <PageShell area="运输" title="运输路线选择系统">
    <div className="flex h-full items-center justify-center">
      <p className="text-ink-subtle">
        待开发 —— 需求见 relate.md「3-1 运输路线选择系统」
      </p>
    </div>
  </PageShell>
)

export default RoutePlan
