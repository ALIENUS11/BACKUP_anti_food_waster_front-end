import { PageShell } from '@/components'

/**
 * 6-1 全链条成果动态总览系统
 *
 * 区域：尾厅
 * 负责人：王宇烨
 * 需求：见 relate.md 中「6-1 全链条成果动态总览系统」的「展示要求 / 交互要求」两节
 * 数据：假数据写在 src/mock/hall6/overview.ts
 *       页面从 src/api/hall6/overview.ts 取数（阶段一返回 mock，阶段二换真实请求，页面不用改）
 *
 * 写页面时先看样板页：src/pages/Template/index.tsx（路由 /template）
 */
const Overview = () => (
  <PageShell area="尾厅" title="全链条成果动态总览系统">
    <div className="flex h-full items-center justify-center">
      <p className="text-ink-subtle">
        待开发 —— 需求见 relate.md「6-1 全链条成果动态总览系统」
      </p>
    </div>
  </PageShell>
)

export default Overview
