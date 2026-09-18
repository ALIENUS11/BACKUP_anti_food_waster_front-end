import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { antdTheme } from '@/theme/antd'
import { registerEchartsTheme } from '@/theme/echarts'
import App from './App.tsx'
import './index.css'

// 注册 ECharts 统一主题（全局只需一次）
registerEchartsTheme()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* ConfigProvider 给所有 AntD 组件套上项目主题，不需要给组件单独写样式 */}
    <ConfigProvider theme={antdTheme} locale={zhCN}>
      <App />
    </ConfigProvider>
  </StrictMode>,
)