import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Callback from './components/Callback'
import AlbumPage from './pages/AlbumPage'
import Layout from './components/Layout'
import GenrePage from './pages/GenrePage'

const App = () => (
  <Router>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/callback" element={<Callback />} />
        <Route path='/album' element={<AlbumPage />} />
        <Route path='/genre' element={<GenrePage />} />
      </Route>
    </Routes>
  </Router>
)

export default App
