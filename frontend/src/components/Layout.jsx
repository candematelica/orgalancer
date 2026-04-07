import { useState } from 'react'
import './Layout.css'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="layout">
      <Sidebar open={sidebarOpen} />
      <div className="layout-content">
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  )
}
