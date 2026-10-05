import { useState } from 'react'
import Navegacion from './components/Navegacion.jsx'
import Carrusel from './components/Carrusel.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navegacion/>
      <img src="/banner.webp" alt="" />
      <Carrusel/>

    </>
  )
}

export default App
