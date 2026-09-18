import { PageShell } from '@/components'

/**
 * 1-1 一粒米全链路动态路径展示
 *
 * 区域：序厅
 * 负责人：王宇烨
 * 需求：见 relate.md 中「1-1 一粒米全链路动态路径展示」的「展示要求 / 交互要求」两节
 * 数据：在 src/mock/hall1/Route.ts 里写假数据，不要在页面里写死
 *
 * 写页面时先看样板页：src/pages/Template/index.tsx（路由 /template）
 */
const Route = () => (
  <PageShell area="序厅" title="一粒米全链路动态路径展示">
    <div className="flex h-full items-center justify-center">
      <p className="text-ink-subtle">
        待开发 —— 需求见 relate.md「1-1 一粒米全链路动态路径展示」
      </p>
    </div>
  </PageShell>
)

export default Route
