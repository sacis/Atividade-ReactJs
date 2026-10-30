import { useId, useRef, useState } from 'react'
import './Tabs.css'

function Tabs({ tabs, label }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef([])
  const baseId = useId()

  function selectTab(index) {
    setActiveIndex(index)
    tabRefs.current[index].focus()
  }

  function handleKeyDown(event) {
    const last = tabs.length - 1

    if (event.key === 'ArrowRight') {
      selectTab(activeIndex === last ? 0 : activeIndex + 1)
    } else if (event.key === 'ArrowLeft') {
      selectTab(activeIndex === 0 ? last : activeIndex - 1)
    } else if (event.key === 'Home') {
      selectTab(0)
    } else if (event.key === 'End') {
      selectTab(last)
    } else {
      return
    }
    event.preventDefault()
  }

  return (
    <div className="tabs">
      <div className="tabs__list" role="tablist" aria-label={label} onKeyDown={handleKeyDown}>
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            ref={(element) => (tabRefs.current[index] = element)}
            id={`${baseId}-aba-${index}`}
            type="button"
            role="tab"
            className="tabs__tab"
            aria-selected={activeIndex === index}
            aria-controls={`${baseId}-painel-${index}`}
            tabIndex={activeIndex === index ? 0 : -1}
            onClick={() => setActiveIndex(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {tabs.map((tab, index) => (
        <div
          key={tab.title}
          id={`${baseId}-painel-${index}`}
          role="tabpanel"
          className="tabs__panel"
          aria-labelledby={`${baseId}-aba-${index}`}
          hidden={activeIndex !== index}
          tabIndex={0}
        >
          {tab.content}
        </div>
      ))}
    </div>
  )
}

export default Tabs
