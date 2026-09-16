import { Link } from 'react-router-dom'

const areas = [
  { path: '/hall', name: '区域一：展厅大厅', icon: '🌾', desc: '欢迎来到「一粒米的旅程」' },
  { path: '/quality-check', name: '区域二：质量检测', icon: '🔍', desc: '质量检测流程与标准' },
  { path: '/transport', name: '区域三：粮食运输', icon: '🚛', desc: '粮食收购与运输环节' },
  { path: '/pest', name: '区域四：虫害防治', icon: '🐛', desc: '储存中的虫害防治技术' },
  { path: '/canteen', name: '区域五：食堂餐桌', icon: '🍚', desc: '从田间到餐桌的旅程' },
  { path: '/summary', name: '区域六：总结回顾', icon: '📊', desc: '旅程回顾与粮食节约倡议' },
]

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-amber-50 to-green-50 px-4 py-12">
      <h1 className="mb-2 text-5xl font-bold text-amber-800">🌾 一粒米的旅程</h1>
      <p className="mb-10 text-lg text-gray-500">反粮食浪费 · 数字展厅</p>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area) => (
          <Link
            key={area.path}
            to={area.path}
            className="rounded-xl border border-amber-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="mb-3 text-3xl">{area.icon}</div>
            <h2 className="mb-1 text-lg font-semibold text-gray-800">{area.name}</h2>
            <p className="text-sm text-gray-400">{area.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home