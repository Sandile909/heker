import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Footer from './components/Footer'
import Habanero from './pages/Habanero'
import StrikeFrenzy from "./pages/Strikefrenzy"
import Status404 from './pages/Status404'
import HotBetway from "./pages/Hotbetway"
import WealthInn from './pages/WealthInn'

function App() {

  return (
      
     <BrowserRouter> 
     {/** NAVBAR | GLOBAL */}
     <Nav />

     {/** ROUTES */}
     <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='*' element={<Status404 />} />
      <Route path='/strike-frenzy' element={<StrikeFrenzy />} />
      <Route path='/hot-betway' element={<HotBetway />} />
      <Route path='/hothotfruits' element={<Habanero />} />
      <Route path='/wealthin' element={<WealthInn />} />
     </Routes>

     {/** FOOTER | GLOBAL */}
      <Footer />
     </BrowserRouter>
      
   
  )
}

export default App
