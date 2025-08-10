import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-lg text-center">
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1 className="text-3xl font-bold text-blue-600">Vite + React</h1>
          <div className="p-4">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </button>
            <p className="mt-4">
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="text-gray-500">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </>
  )
}

export default App