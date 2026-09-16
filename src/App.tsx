import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Hall from '@/pages/Hall'
import Transport from '@/pages/Transport'
import Pest from '@/pages/Pest'
import QualtiyCheck from '@/pages/QualtiyCheck'
import Canteen from '@/pages/Canteen'
import Summary from '@/pages/Summary'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hall" element={<Hall />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/pest" element={<Pest />} />
        <Route path="/quality-check" element={<QualtiyCheck />} />
        <Route path="/canteen" element={<Canteen />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App