import { useId, useState } from 'react'
import './Accordion.css'

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)
  const baseId = useId()

  function handleToggle(index) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const buttonId = `${baseId}-botao-${index}`
        const panelId = `${baseId}-painel-${index}`

        return (
          <div key={item.title} className={`accordion__item ${isOpen ? 'is-open' : ''}`}>
            <h3 className="accordion__heading">
              <button
                id={buttonId}
                type="button"
                className="accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => handleToggle(index)}
              >
                <span>{item.title}</span>
                <span className="accordion__icon" aria-hidden="true" />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className="accordion__panel"
            >
              <div className="accordion__content">
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
