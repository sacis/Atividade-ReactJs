import { useState } from 'react'
import Dropdown from './Dropdown'
import Pagination from './Pagination'
import BookCard from './BookCard'
import { books, genreOptions, sortOptions } from '../data/books'
import './Catalog.css'

const BOOKS_PER_PAGE = 6

function sortBooks(list, criteria) {
  const sorted = [...list]

  if (criteria === 'menor-preco') return sorted.sort((a, b) => a.price - b.price)
  if (criteria === 'maior-preco') return sorted.sort((a, b) => b.price - a.price)
  if (criteria === 'ano') return sorted.sort((a, b) => a.year - b.year)
  return sorted.sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'))
}

function Catalog() {
  const [genre, setGenre] = useState('todos')
  const [sortBy, setSortBy] = useState('titulo')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredBooks = genre === 'todos' ? books : books.filter((book) => book.genre === genre)
  const sortedBooks = sortBooks(filteredBooks, sortBy)
  const totalPages = Math.max(1, Math.ceil(sortedBooks.length / BOOKS_PER_PAGE))
  const start = (currentPage - 1) * BOOKS_PER_PAGE
  const visibleBooks = sortedBooks.slice(start, start + BOOKS_PER_PAGE)

  function handleGenreChange(value) {
    setGenre(value)
    setCurrentPage(1)
  }

  function handleSortChange(value) {
    setSortBy(value)
    setCurrentPage(1)
  }

  function handlePageChange(page) {
    setCurrentPage(page)
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="catalogo" className="section" aria-labelledby="titulo-catalogo">
      <div className="catalog__top">
        <div>
          <h2 id="titulo-catalogo" className="section__title">Catálogo</h2>
          <p className="catalog__count">
            {sortedBooks.length} {sortedBooks.length === 1 ? 'livro encontrado' : 'livros encontrados'}
          </p>
        </div>

        <div className="catalog__filters">
          <Dropdown label="Gênero" options={genreOptions} selected={genre} onSelect={handleGenreChange} />
          <Dropdown label="Ordenar por" options={sortOptions} selected={sortBy} onSelect={handleSortChange} />
        </div>
      </div>

      <ul className="catalog__grid">
        {visibleBooks.map((book) => (
          <li key={book.id}>
            <BookCard book={book} />
          </li>
        ))}
      </ul>

      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </section>
  )
}

export default Catalog
