import { useEffect, useId, useRef, useState } from 'react'
import './Dropdown.css'

function Dropdown({ label, options, selected, onSelect }) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)
  const buttonRef = useRef(null)
  const menuId = useId()
  const labelId = useId()
  const valueId = useId()

  useEffect(() => {
    if (!isOpen) return

    function handleClickOutside(event) {
      if (!containerRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        buttonRef.current.focus()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  function handleSelect(option) {
    onSelect(option.value)
    setIsOpen(false)
    buttonRef.current.focus()
  }

  const current = options.find((option) => option.value === selected)

  return (
    <div className="dropdown" ref={containerRef}>
      <span id={labelId} className="dropdown__label">{label}</span>
      <button
        ref={buttonRef}
        type="button"
        className="dropdown__toggle"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-labelledby={`${labelId} ${valueId}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span id={valueId}>{current ? current.label : 'Selecione'}</span>
        <span className={`dropdown__arrow ${isOpen ? 'is-open' : ''}`} aria-hidden="true" />
      </button>

      {isOpen && (
        <ul id={menuId} className="dropdown__menu" aria-labelledby={labelId}>
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                className={`dropdown__option ${option.value === selected ? 'is-selected' : ''}`}
                aria-current={option.value === selected ? 'true' : undefined}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
