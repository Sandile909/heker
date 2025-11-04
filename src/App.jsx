import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Footer from './components/Footer'
import Habanero from './pages/Habanero'
import Status404 from './pages/Status404'

function App() {

  return (
      
     <BrowserRouter> 
     {/** NAVBAR | GLOBAL */}
     <Nav />

     {/** ROUTES */}
     <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='*' element={<Status404 />} />
      <Route path='/habanero' element={<Habanero />} />
      <Route path='/red-tiger' element={<Habanero />} />
      <Route path='/pragmatic-play' element={<Habanero />} />
      <Route path='/evolution' element={<Habanero />} />
      <Route path='/betway' element={<Habanero />} />
     </Routes>

     {/** FOOTER | GLOBAL */}
      <Footer />
     </BrowserRouter>
      
   
  )
}

export default App
