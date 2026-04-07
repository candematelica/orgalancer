import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar({ open }) {
  const location = useLocation()

  const menuItems = [
    { path: '/', label: '📊 Dashboard', icon: '📊' },
    { path: '/clients', label: '👥 Clientes', icon: '👥' },
    { path: '/projects', label: '📋 Proyectos', icon: '📋' },
    { path: '/time', label: '⏱️ Tiempo', icon: '⏱️' },
    { path: '/income', label: '💰 Ingresos', icon: '💰' },
    { path: '/invoices', label: '📄 Facturas', icon: '📄' },
  ]

  return (
    <aside className={`sidebar ${open ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h2>🚀 Orgalancer</h2>
      </div>
      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="sidebar-footer">
        <p>© 2024 Orgalancer</p>
      </div>
    </aside>
  )
}
