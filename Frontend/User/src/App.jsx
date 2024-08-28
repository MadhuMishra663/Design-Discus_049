import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { All_Router } from './Routers/All_Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <All_Router/>
      
    </>
  )
}

export default App
