import './ProgressBar.css'

function ProgressBar({ value, label }) {
  const percent = Math.round(Math.min(100, Math.max(0, value)))

  return (
    <div className="progress">
      <div className="progress__info">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div
        className="progress__track"
        role="progressbar"
        aria-label={label}
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`progress__fill ${percent === 100 ? 'is-done' : ''}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
