
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [status, setStatus] = useState('Connecting...')

  useEffect(() => {
    fetch('http://127.0.0.1:7001/')
      .then((response) => {
        if (!response.ok) throw new Error('API request failed')
        return response.json()
      })
      .then((result) => {
        setData(result)
        setStatus('Connected')
      })
      .catch((error) => {
  console.error('Backend connection error:', error)
  setStatus('Connection failed: ' + error.message)
})
  }, [])

  return (
    <main className="dashboard">
      <header className="topbar">
        <div className="brand">AB<span>.</span></div>
        <div className="project-label">BACKEND DEVELOPMENT PROJECT</div>
        <span className={`status ${data ? 'online' : ''}`}>
          <span className="dot"></span>{status}
        </span>
      </header>

      <section className="hero-section">
        <p className="eyebrow">LEVEL 01 / PHASE 02</p>
        <h1>Backend API<br /><span>Dashboard.</span></h1>
        <p className="subtitle">
          A simple full-stack application powered by React and Express.js.
        </p>
        <div className="actions">
          <button onClick={() => window.location.reload()}>
            ↻ Refresh connection
          </button>
          <a href="http://127.0.0.1:7001/" target="_blank" rel="noreferrer">
            View API ↗
          </a>
        </div>
      </section>

      <section className="cards">
        <article className="card">
          <p className="card-label">FRONTEND</p>
          <h2>React + Vite</h2>
          <p>Interactive user interface</p>
          <span className="tag">Port 5173</span>
        </article>

        <article className="card">
          <p className="card-label">BACKEND</p>
          <h2>Node.js + Express</h2>
          <p>REST API service</p>
          <span className="tag">Port 7001</span>
        </article>

        <article className="card api-card">
          <p className="card-label">LIVE API RESPONSE</p>
          <h2>{data ? 'API is responding' : 'Waiting for API'}</h2>
          <p>{data ? data.message : 'Make sure the backend server is running.'}</p>
          <span className="tag">{data ? 'HTTP 200 expected' : status}</span>
        </article>
      </section>

      <footer>
        <span>ADVANCED BACKEND</span>
        <span>Learning by building.</span>
      </footer>
    </main>
  )
}

export default App

