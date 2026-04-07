import { useState } from 'react'
import './CRUD.css'
import Table from '../components/Table'
import Button from '../components/Button'
import Modal from '../components/Modal'
import Input from '../components/Input'

export default function TimeTracking() {
  const [entries, setEntries] = useState([
    { id: 1, project: 'Landing Page', hours: 8, date: '2024-01-15', description: 'Frontend development' },
    { id: 2, project: 'App Mobile', hours: 6, date: '2024-01-14', description: 'API integration' },
    { id: 3, project: 'Landing Page', hours: 4, date: '2024-01-14', description: 'Bug fixes' },
  ])

  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    project: '',
    hours: '',
    date: '',
    description: '',
  })

  const handleSave = () => {
    if (editingId) {
      setEntries(entries.map(e => e.id === editingId ? { ...e, ...formData } : e))
    } else {
      setEntries([...entries, { id: Math.max(...entries.map(e => e.id), 0) + 1, ...formData }])
    }
    resetForm()
    setShowModal(false)
  }

  const handleEdit = (entry) => {
    setEditingId(entry.id)
    setFormData(entry)
    setShowModal(true)
  }

  const handleDelete = (id) => {
    if (confirm('¿Estás seguro?')) {
      setEntries(entries.filter(e => e.id !== id))
    }
  }

  const resetForm = () => {
    setFormData({ project: '', hours: '', date: '', description: '' })
    setEditingId(null)
  }

  const totalHours = entries.reduce((sum, e) => sum + parseFloat(e.hours || 0), 0)

  const columns = [
    { key: 'project', label: 'Proyecto' },
    { key: 'date', label: 'Fecha' },
    { key: 'hours', label: 'Horas' },
    { key: 'description', label: 'Descripción' },
  ]

  return (
    <div className="crud-page">
      <div className="page-header">
        <div>
          <h1>⏱️ Seguimiento de Tiempo</h1>
          <p>Total de horas: <strong>{totalHours}h</strong></p>
        </div>
        <Button
          variant="primary"
          onClick={() => {
            resetForm()
            setShowModal(true)
          }}
        >
          ⏱️ Registrar Tiempo
        </Button>
      </div>

      <Table columns={columns} data={entries} actions={(entry) => (
        <>
          <Button variant="secondary" size="sm" onClick={() => handleEdit(entry)}>✏️</Button>
          <Button variant="danger" size="sm" onClick={() => handleDelete(entry.id)}>🗑️</Button>
        </>
      )} />

      <Modal
        isOpen={showModal}
        title={editingId ? 'Editar Registro' : 'Nuevo Registro de Tiempo'}
        onClose={() => { setShowModal(false); resetForm() }}
        onSave={handleSave}
      >
        <Input
          label="Proyecto"
          placeholder="Nombre del proyecto"
          value={formData.project}
          onChange={(e) => setFormData({ ...formData, project: e.target.value })}
          required
        />
        <Input
          label="Horas"
          type="number"
          placeholder="8"
          value={formData.hours}
          onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
          required
        />
        <Input
          label="Fecha"
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />
        <Input
          label="Descripción"
          placeholder="Qué trabajaste en este tiempo"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </Modal>
    </div>
  )
}
