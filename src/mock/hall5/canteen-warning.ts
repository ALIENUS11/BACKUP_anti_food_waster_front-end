/**
 * 5-1 数字化食堂浪费场景警示展示 —— 假数据
 * 负责人：许议文
 */
export interface WarnVideo {
  id: string
  title: string
  /** 视频地址，放 public/videos/ 下，本地加载，不要用外链 */
  src: string
}

export interface CanteenWarningData {
  videos: WarnVideo[]
  /** 底部节粮宣传标语 */
  slogan: string
}

export const CANTEEN_WARNING: CanteenWarningData = {
  videos: [
    { id: 'v1', title: '取餐', src: '/videos/canteen-01.mp4' },
    { id: 'v2', title: '用餐', src: '/videos/canteen-02.mp4' },
    { id: 'v3', title: '剩餐回收', src: '/videos/canteen-03.mp4' },
    { id: 'v4', title: '光盘行动对比', src: '/videos/canteen-04.mp4' },
  ],
  slogan: '光盘行动，从我做起 —— 珍惜每一粒粮食',
}