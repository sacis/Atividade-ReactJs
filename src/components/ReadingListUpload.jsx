import { useEffect, useRef, useState } from 'react'
import ProgressBar from './ProgressBar'
import { useToast } from '../context/ToastContext'
import './ReadingListUpload.css'

const MAX_SIZE = 5 * 1024 * 1024

function ReadingListUpload() {
  const [file, setFile] = useState(null)
  const [progress, setProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const inputRef = useRef(null)
  const { showToast } = useToast()

  useEffect(() => {
    if (!isUploading) return

    const interval = setInterval(() => {
      setProgress((current) => Math.min(current + Math.random() * 12 + 4, 100))
    }, 300)

    return () => clearInterval(interval)
  }, [isUploading])

  useEffect(() => {
    if (isUploading && progress === 100) {
      setIsUploading(false)
      showToast(`"${file.name}" enviado. Avisaremos quando algum livro chegar.`, 'success')
    }
  }, [progress, isUploading, file, showToast])

  function handleFileChange(event) {
    const selected = event.target.files[0]
    if (!selected) return

    if (selected.size > MAX_SIZE) {
      showToast('O arquivo passa de 5 MB. Escolha um menor.', 'error')
      event.target.value = ''
      return
    }

    setFile(selected)
    setProgress(0)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!file) {
      showToast('Escolha um arquivo antes de enviar.', 'error')
      return
    }

    setProgress(0)
    setIsUploading(true)
  }

  function handleCancel() {
    setIsUploading(false)
    setProgress(0)
    showToast('Envio cancelado.', 'info')
  }

  function handleReset() {
    setFile(null)
    setProgress(0)
    inputRef.current.value = ''
  }

  const isDone = progress === 100 && !isUploading

  return (
    <section id="lista-de-leitura" className="section card" aria-labelledby="titulo-lista">
      <h2 id="titulo-lista" className="section__title">Lista de leitura</h2>
      <p className="upload__text">
        Mande a lista dos livros que você procura e a gente avisa quando eles chegarem.
      </p>

      <form className="upload__form" onSubmit={handleSubmit}>
        <label className="upload__drop" htmlFor="arquivo-lista">
          <span className="upload__drop-title">{file ? file.name : 'Escolher arquivo'}</span>
          <span className="upload__drop-hint">
            {file ? `${(file.size / 1024).toFixed(1)} KB` : '.txt, .pdf ou .docx até 5 MB'}
          </span>
        </label>
        <input
          ref={inputRef}
          id="arquivo-lista"
          type="file"
          className="visually-hidden"
          accept=".txt,.pdf,.docx"
          onChange={handleFileChange}
          disabled={isUploading}
        />

        {(isUploading || progress > 0) && (
          <ProgressBar value={progress} label={isDone ? 'Envio concluído' : 'Enviando lista'} />
        )}

        <div className="upload__actions">
          {isUploading ? (
            <button type="button" className="button button--outline" onClick={handleCancel}>
              Cancelar
            </button>
          ) : isDone ? (
            <button type="button" className="button button--outline" onClick={handleReset}>
              Enviar outra lista
            </button>
          ) : (
            <button type="submit" className="button">
              Enviar lista
            </button>
          )}
        </div>
      </form>
    </section>
  )
}

export default ReadingListUpload
