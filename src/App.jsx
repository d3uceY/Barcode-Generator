import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BarcodeGenerator from './BarcodeGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BarcodeGenerator />
    </>
  )
}

export default App
