import { useState, useEffect } from 'react'
import './Dashboard.css'
import Card from '../components/Card'
import Button from '../components/Button'

export default function Dashboard() {
  const stats = [
    { title: 'Ingresos Este Mes', value: '$4,580', icon: '💰', color: 'green', trend: { positive: true, text: '+12% vs mes anterior' } },
    { title: 'Proyectos Activos', value: '5', icon: '📋', color: 'blue', trend: { positive: true, text: '2 completados' } },
    { title: 'Horas Trabajadas', value: '124', icon: '⏱️', color: 'amber', trend: { positive: false, text: '-8 horas vs semana anterior' } },
    { title: 'Clientes', value: '12', icon: '👥', color: 'pink', trend: { positive: true, text: '+3 nuevos' } },
  ]

  const recentProjects = [
    { id: 1, name: 'Landing Page', client: 'TechCorp', status: 'En Progreso', progress: 75 },
    { id: 2, name: 'App Mobile', client: 'StartupXYZ', status: 'En Progreso', progress: 45 },
    { id: 3, name: 'Consultoría', client: 'Empresa SAC', status: 'Completado', progress: 100 },
  ]

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>📊 Dashboard</h1>
        <p>Bienvenido de vuelta, Freelancer!</p>
      </div>

      {/* Estadísticas */}
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <Card
            key={idx}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
            trend={stat.trend}
          />
        ))}
      </div>

      {/* Proyectos Recientes */}
      <div className="recent-section">
        <div className="section-header">
          <h2>Proyectos Recientes</h2>
          <Button variant="primary" size="sm">Ver Todos</Button>
        </div>

        <div className="projects-list">
          {recentProjects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-info">
                <h3>{project.name}</h3>
                <p className="project-client">{project.client}</p>
              </div>
              <div className="project-progress">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <span className="progress-text">{project.progress}%</span>
              </div>
              <span className={`status ${project.status === 'Completado' ? 'completed' : 'in-progress'}`}>
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Acciones Rápidas */}
      <div className="quick-actions">
        <h2>Acciones Rápidas</h2>
        <div className="actions-grid">
          <Button variant="primary">➕ Nuevo Cliente</Button>
          <Button variant="primary">📋 Nuevo Proyecto</Button>
          <Button variant="primary">⏱️ Registrar Tiempo</Button>
          <Button variant="primary">📄 Generar Factura</Button>
        </div>
      </div>
    </div>
  )
}
