import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>probando github</h1>
        <h2>segunda prueba carolina</h2>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id natus magnam quam. Voluptatum numquam blanditiis voluptas, quis nobis rerum. Blanditiis nesciunt incidunt dolorum possimus unde consequuntur quia asperiores minus. Saepe!</p>
      <button>Enviar</button>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid magni rem iste? Eius voluptatum alias iste minima sed neque quod labore animi amet distinctio laborum, accusantium a quo ea quibusdam?</p>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae asperiores quis nemo fuga ipsum autem, veritatis iure quisquam ipsam laborum animi quod neque exercitationem rem incidunt quae, sed deleniti?</h3>
      <h1>Hola esta es una prueba</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti porro velit id voluptate. At dolor, sapiente laborum odit optio veritatis soluta commodi ipsam non cupiditate. Nihil, inventore tempora. Omnis, in.</p>
    </>
  )
}

export default App
