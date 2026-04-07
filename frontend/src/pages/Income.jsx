import { useState } from 'react'
import './CRUD.css'
import Table from '../components/Table'
import Button from '../components/Button'
import Modal from '../components/Modal'
import Input from '../components/Input'

export default function Income() {
  const [incomes, setIncomes] = useState([
    { id: 1, amount: '$3,000', date: '2024-01-10', description: 'Landing Page - Payment 1' },
    { id: 2, amount: '$2,500', date: '2024-01-08', description: 'Consultoría - Completado' },
    { id: 3, amount: '$4,000', date: '2024-01-05', description: 'App Mobile - Payment 2' },
  ])

  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    amount: '',
    date: '',
    description: '',
  })

  const handleSave = () => {
    if (editingId) {
      setIncomes(incomes.map(i => i.id === editingId ? { ...i, ...formData } : i))
    } else {
      setIncomes([...incomes, { id: Math.max(...incomes.map(i => i.id), 0) + 1, ...formData }])
    }
    resetForm()
    setShowModal(false)
  }

  const handleEdit = (income) => {
    setEditingId(income.id)
    setFormData(income)
    setShowModal(true)
  }

  const handleDelete = (id) => {
    if (confirm('¿Estás seguro?')) {
      setIncomes(incomes.filter(i => i.id !== id))
    }
  }

  const resetForm = () => {
    setFormData({ amount: '', date: '', description: '' })
    setEditingId(null)
  }

  const totalIncome = incomes.reduce((sum, i) => sum + parseFloat(i.amount.replace('$', '').replace(',', '') || 0), 0)

  const columns = [
    { key: 'date', label: 'Fecha' },
    { key: 'description', label: 'Descripción' },
    { key: 'amount', label: 'Monto' },
  ]

  return (
    <div className="crud-page">
      <div className="page-header">
        <div>
          <h1>💰 Gestión de Ingresos</h1>
          <p>Ingresos totales: <strong>${totalIncome.toFixed(2)}</strong></p>
        </div>
        <Button
          variant="primary"
          onClick={() => {
            resetForm()
            setShowModal(true)
          }}
        >
          ➕ Registrar Ingreso
        </Button>
      </div>

      <Table columns={columns} data={incomes} actions={(income) => (
        <>
          <Button variant="secondary" size="sm" onClick={() => handleEdit(income)}>✏️</Button>
          <Button variant="danger" size="sm" onClick={() => handleDelete(income.id)}>🗑️</Button>
        </>
      )} />

      <Modal
        isOpen={showModal}
        title={editingId ? 'Editar Ingreso' : 'Nuevo Ingreso'}
        onClose={() => { setShowModal(false); resetForm() }}
        onSave={handleSave}
      >
        <Input
          label="Monto"
          type="text"
          placeholder="$5,000"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
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
          placeholder="Ej: Pago por proyecto Landing Page"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </Modal>
    </div>
  )
}
