import { PageShell } from '@/components'

/**
 * 5-2 餐盘剩余物智能识别系统
 *
 * 区域：消费
 * 负责人：许议文
 * 需求：见 relate.md 中「5-2 餐盘剩余物智能识别系统」的「展示要求 / 交互要求」两节
 * 数据：在 src/mock/hall5/PlateDetect.ts 里写假数据，不要在页面里写死
 *
 * 写页面时先看样板页：src/pages/Template/index.tsx（路由 /template）
 */
const PlateDetect = () => (
  <PageShell area="消费" title="餐盘剩余物智能识别系统">
    <div className="flex h-full items-center justify-center">
      <p className="text-ink-subtle">
        待开发 —— 需求见 relate.md「5-2 餐盘剩余物智能识别系统」
      </p>
    </div>
  </PageShell>
)

export default PlateDetect
