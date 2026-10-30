import { useEffect } from 'react'

const titles = {
  success: 'Pronto',
  error: 'Ops',
  info: 'Aviso'
}

function Toast({ id, message, type, duration = 4000, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(id), duration)
    return () => clearTimeout(timer)
  }, [id, duration, onClose])

  return (
    <div className={`toast toast--${type}`} role={type === 'error' ? 'alert' : 'status'}>
      <div className="toast__body">
        <strong>{titles[type]}</strong>
        <p>{message}</p>
      </div>
      <button
        type="button"
        className="toast__close"
        aria-label="Fechar notificação"
        onClick={() => onClose(id)}
      >
        ×
      </button>
      <span className="toast__timer" style={{ animationDuration: `${duration}ms` }} aria-hidden="true" />
    </div>
  )
}

export default Toast
