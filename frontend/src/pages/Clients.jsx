import { useState } from 'react'
import './CRUD.css'
import Table from '../components/Table'
import Button from '../components/Button'
import Modal from '../components/Modal'
import Input from '../components/Input'

export default function Clients() {
  const [clients, setClients] = useState([
    { id: 1, name: 'TechCorp', email: 'contact@techcorp.com', company: 'Tech Solutions', phone: '+34-123-456' },
    { id: 2, name: 'StartupXYZ', email: 'hello@startupxyz.com', company: 'Innovation Labs', phone: '+34-234-567' },
    { id: 3, name: 'Empresa SAC', email: 'info@empresa.com', company: 'Consulting SAC', phone: '+34-345-678' },
  ])

  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  })

  const handleSave = () => {
    if (editingId) {
      setClients(clients.map(c => c.id === editingId ? { ...c, ...formData } : c))
    } else {
      setClients([...clients, { id: Math.max(...clients.map(c => c.id), 0) + 1, ...formData }])
    }
    resetForm()
    setShowModal(false)
  }

  const handleEdit = (client) => {
    setEditingId(client.id)
    setFormData(client)
    setShowModal(true)
  }

  const handleDelete = (id) => {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      setClients(clients.filter(c => c.id !== id))
    }
  }

  const resetForm = () => {
    setFormData({ name: '', email: '', company: '', phone: '' })
    setEditingId(null)
  }

  const columns = [
    { key: 'name', label: 'Nombre' },
    { key: 'email', label: 'Email' },
    { key: 'company', label: 'Empresa' },
    { key: 'phone', label: 'Teléfono' },
  ]

  return (
    <div className="crud-page">
      <div className="page-header">
        <div>
          <h1>👥 Gestión de Clientes</h1>
          <p>Total de clientes: {clients.length}</p>
        </div>
        <Button
          variant="primary"
          onClick={() => {
            resetForm()
            setShowModal(true)
          }}
        >
          ➕ Nuevo Cliente
        </Button>
      </div>

      <Table
        columns={columns}
        data={clients}
        actions={(client) => (
          <>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => handleEdit(client)}
            >
              ✏️ Editar
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => handleDelete(client.id)}
            >
              🗑️ Eliminar
            </Button>
          </>
        )}
      />

      <Modal
        isOpen={showModal}
        title={editingId ? 'Editar Cliente' : 'Nuevo Cliente'}
        onClose={() => {
          setShowModal(false)
          resetForm()
        }}
        onSave={handleSave}
      >
        <Input
          label="Nombre"
          placeholder="Nombre del cliente"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <Input
          label="Email"
          type="email"
          placeholder="email@empresa.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <Input
          label="Empresa"
          placeholder="Nombre de la empresa"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
        <Input
          label="Teléfono"
          placeholder="+34-123-456"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </Modal>
    </div>
  )
}
