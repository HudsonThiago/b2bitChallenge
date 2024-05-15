import { useState } from 'react'
import Login from './assets/router/public/Login'
import Dashboard from './assets/router/private/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
    </>
  )
}

export default App
