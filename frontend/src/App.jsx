import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import Projects from './pages/Projects'
import TimeTracking from './pages/TimeTracking'
import Income from './pages/Income'
import Invoices from './pages/Invoices'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/time" element={<TimeTracking />} />
          <Route path="/income" element={<Income />} />
          <Route path="/invoices" element={<Invoices />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
