import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'
import './BookCard.css'

function BookCard({ book }) {
  const { addToCart } = useCart()

  return (
    <article className="book">
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
    </article>
  )
}

export default BookCard
