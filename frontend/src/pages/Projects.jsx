import { useState } from 'react'
import './CRUD.css'
import Table from '../components/Table'
import Button from '../components/Button'
import Modal from '../components/Modal'
import Input from '../components/Input'

export default function Projects() {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Landing Page', client: 'TechCorp', status: 'In Progress', budget: '$3,000', hourly_rate: '$50' },
    { id: 2, name: 'App Mobile', client: 'StartupXYZ', status: 'In Progress', budget: '$8,000', hourly_rate: '$60' },
    { id: 3, name: 'Consultoría', client: 'Empresa SAC', status: 'Completed', budget: '$2,500', hourly_rate: '$45' },
  ])

  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    client: '',
    status: 'In Progress',
    budget: '',
    hourly_rate: '',
  })

  const handleSave = () => {
    if (editingId) {
      setProjects(projects.map(p => p.id === editingId ? { ...p, ...formData } : p))
    } else {
      setProjects([...projects, { id: Math.max(...projects.map(p => p.id), 0) + 1, ...formData }])
    }
    resetForm()
    setShowModal(false)
  }

  const handleEdit = (project) => {
    setEditingId(project.id)
    setFormData(project)
    setShowModal(true)
  }

  const handleDelete = (id) => {
    if (confirm('¿Estás seguro?')) {
      setProjects(projects.filter(p => p.id !== id))
    }
  }

  const resetForm = () => {
    setFormData({ name: '', client: '', status: 'In Progress', budget: '', hourly_rate: '' })
    setEditingId(null)
  }

  const columns = [
    { key: 'name', label: 'Proyecto' },
    { key: 'client', label: 'Cliente' },
    { key: 'status', label: 'Estado' },
    { key: 'budget', label: 'Presupuesto' },
    { key: 'hourly_rate', label: 'Tarifa Horaria' },
  ]

  return (
    <div className="crud-page">
      <div className="page-header">
        <div>
          <h1>📋 Gestión de Proyectos</h1>
          <p>Total de proyectos: {projects.length}</p>
        </div>
        <Button
          variant="primary"
          onClick={() => {
            resetForm()
            setShowModal(true)
          }}
        >
          ➕ Nuevo Proyecto
        </Button>
      </div>

      <Table columns={columns} data={projects} actions={(project) => (
        <>
          <Button variant="secondary" size="sm" onClick={() => handleEdit(project)}>✏️</Button>
          <Button variant="danger" size="sm" onClick={() => handleDelete(project.id)}>🗑️</Button>
        </>
      )} />

      <Modal
        isOpen={showModal}
        title={editingId ? 'Editar Proyecto' : 'Nuevo Proyecto'}
        onClose={() => { setShowModal(false); resetForm() }}
        onSave={handleSave}
      >
        <Input
          label="Nombre del Proyecto"
          placeholder="Ej: Landing Page"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <Input
          label="Cliente"
          placeholder="Nombre del cliente"
          value={formData.client}
          onChange={(e) => setFormData({ ...formData, client: e.target.value })}
          required
        />
        <Input
          label="Estado"
          as="select"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        />
        <Input
          label="Presupuesto"
          type="text"
          placeholder="$5,000"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
        />
        <Input
          label="Tarifa Horaria"
          type="text"
          placeholder="$50"
          value={formData.hourly_rate}
          onChange={(e) => setFormData({ ...formData, hourly_rate: e.target.value })}
        />
      </Modal>
    </div>
  )
}
