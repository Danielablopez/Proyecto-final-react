import './Componentes/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portada from './Componentes/Portada'
import Historial from './Componentes/Historial'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Portada} />
          <Route path='/historial' Component={Historial} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
