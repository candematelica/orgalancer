import { useState } from 'react'
import './Modal.css'
import Button from './Button'

export default function Modal({ isOpen, title, children, onClose, onSave, hideFooter = false }) {
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    if (onSave) {
      await onSave()
    }
    setIsSaving(false)
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        {!hideFooter && (
          <div className="modal-footer">
            <Button variant="secondary" onClick={onClose}>Cancelar</Button>
            <Button 
              variant="primary" 
              onClick={handleSave}
              disabled={isSaving}
            >
              {isSaving ? 'Guardando...' : 'Guardar'}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
