import './Navbar.css'

export default function Navbar({ onMenuClick }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="menu-toggle" onClick={onMenuClick}>
          ☰
        </button>
        <h1 className="navbar-title">Orgalancer</h1>
      </div>
      <div className="navbar-right">
        <button className="profile-btn">👤 Perfil</button>
      </div>
    </header>
  )
}
