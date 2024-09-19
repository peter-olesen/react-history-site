import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageLayout } from './layout/PageLayout'
import { Home } from './pages/Home'
import { Date } from './pages/Date'
import { About } from './pages/About'
import './App.scss';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path={"date"} element={<Date />} />
          <Route path={"about"} element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
