import { useState } from 'react'
import './CRUD.css'
import Table from '../components/Table'
import Button from '../components/Button'
import Modal from '../components/Modal'
import Input from '../components/Input'

export default function Invoices() {
  const [invoices, setInvoices] = useState([
    { id: 1, number: 'INV-001', client: 'TechCorp', amount: '$3,000', status: 'Paid', date: '2024-01-10' },
    { id: 2, number: 'INV-002', client: 'StartupXYZ', amount: '$4,000', status: 'Pending', date: '2024-01-15' },
    { id: 3, number: 'INV-003', client: 'Empresa SAC', amount: '$2,500', status: 'Paid', date: '2024-01-08' },
  ])

  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    number: '',
    client: '',
    amount: '',
    status: 'Draft',
    date: '',
  })

  const handleSave = () => {
    if (editingId) {
      setInvoices(invoices.map(i => i.id === editingId ? { ...i, ...formData } : i))
    } else {
      setInvoices([...invoices, { id: Math.max(...invoices.map(i => i.id), 0) + 1, ...formData }])
    }
    resetForm()
    setShowModal(false)
  }

  const handleEdit = (invoice) => {
    setEditingId(invoice.id)
    setFormData(invoice)
    setShowModal(true)
  }

  const handleDelete = (id) => {
    if (confirm('¿Estás seguro?')) {
      setInvoices(invoices.filter(i => i.id !== id))
    }
  }

  const resetForm = () => {
    setFormData({ number: '', client: '', amount: '', status: 'Draft', date: '' })
    setEditingId(null)
  }

  const columns = [
    { key: 'number', label: 'Número' },
    { key: 'client', label: 'Cliente' },
    { key: 'date', label: 'Fecha' },
    { key: 'amount', label: 'Monto' },
    { key: 'status', label: 'Estado', render: (row) => <span className={`status ${row.status.toLowerCase()}`}>{row.status}</span> },
  ]

  return (
    <div className="crud-page">
      <div className="page-header">
        <div>
          <h1>📄 Gestión de Facturas</h1>
          <p>Total de facturas: {invoices.length}</p>
        </div>
        <Button
          variant="primary"
          onClick={() => {
            resetForm()
            setShowModal(true)
          }}
        >
          ➕ Nueva Factura
        </Button>
      </div>

      <Table columns={columns} data={invoices} actions={(invoice) => (
        <>
          <Button variant="secondary" size="sm" onClick={() => handleEdit(invoice)}>✏️</Button>
          <Button variant="danger" size="sm" onClick={() => handleDelete(invoice.id)}>🗑️</Button>
          <Button variant="success" size="sm">📥 Descargar</Button>
        </>
      )} />

      <Modal
        isOpen={showModal}
        title={editingId ? 'Editar Factura' : 'Nueva Factura'}
        onClose={() => { setShowModal(false); resetForm() }}
        onSave={handleSave}
      >
        <Input
          label="Número de Factura"
          placeholder="INV-001"
          value={formData.number}
          onChange={(e) => setFormData({ ...formData, number: e.target.value })}
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
          label="Monto"
          type="text"
          placeholder="$5,000"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          required
        />
        <Input
          label="Estado"
          as="select"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        />
        <Input
          label="Fecha"
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />
      </Modal>
    </div>
  )
}
