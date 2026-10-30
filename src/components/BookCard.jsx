import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'
import './BookCard.css'

function BookCard({ book }) {
  const { addToCart } = useCart()

  return (
    <article className="book">
      <div className="book__cover" style={{ backgroundColor: book.color }} aria-hidden="true">
        <span>{book.title}</span>
      </div>

      <div className="book__info">
        <h3 className="book__title">{book.title}</h3>
        <p className="book__author">
          {book.author}, {book.year}
        </p>
        <p className="book__condition">Estado: {book.condition}</p>

        <div className="book__footer">
          <span className="book__price">{formatPrice(book.price)}</span>
          <button type="button" className="button" onClick={() => addToCart(book)}>
            Adicionar
          </button>
        </div>
      </div>
    </article>
  )
}

export default BookCard
