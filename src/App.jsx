import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageLayout } from './layout/PageLayout'
import { Home } from './pages/Home'
import { Date } from './pages/Date'
import { Since } from './pages/Since'
import './App.scss';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path={"date"} element={<Date />} />
          <Route path={"since"} element={<Since />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
