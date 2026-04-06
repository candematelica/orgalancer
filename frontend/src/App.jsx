import './App.css'
import { useEffect, useState } from 'react'
import { getHealth } from './services'

function App() {
  const [apiStatus, setApiStatus] = useState('checking...')

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await getHealth()
        setApiStatus(response.data.status)
      } catch (error) {
        setApiStatus('error')
      }
    }

    checkHealth()
  }, [])

  return (
    <div className="container">
      <header className="header">
        <h1>🚀 Orgalancer</h1>
        <p>Plataforma para Freelancers</p>
      </header>

      <main className="main">
        <section className="hero">
          <h2>¡Bienvenido a Orgalancer!</h2>
          <p>Gestiona tus clientes, proyectos, ingresos y tiempo en un solo lugar</p>
          
          <div className="features">
            <div className="feature-card">
              <h3>👥 Clientes</h3>
              <p>Organiza y administra tus clientes</p>
            </div>
            <div className="feature-card">
              <h3>📋 Proyectos</h3>
              <p>Crea y monitorea tus proyectos</p>
            </div>
            <div className="feature-card">
              <h3>💰 Ingresos</h3>
              <p>Controla tu flujo de caja</p>
            </div>
            <div className="feature-card">
              <h3>⏱️ Tiempo</h3>
              <p>Registra el tiempo trabajado</p>
            </div>
          </div>

          <div className="status">
            <p>Estado de API: <strong>{apiStatus}</strong></p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Orgalancer - Ingeniería en Informática UBA</p>
      </footer>
    </div>
  )
}

export default App
