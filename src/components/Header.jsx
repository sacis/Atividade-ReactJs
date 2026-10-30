import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'
import './Header.css'

const links = [
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#a-loja', label: 'A loja' },
  { href: '#lista-de-leitura', label: 'Lista de leitura' },
  { href: '#duvidas', label: 'Dúvidas' }
]

function Header() {
  const { items, total, clearCart } = useCart()

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#catalogo" className="header__logo">
          Sebos e Molhados
          <small>livros usados desde 1994</small>
        </a>

        <nav aria-label="Navegação principal">
          <ul className="header__nav">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__cart" aria-live="polite">
          <span>
            Sacola: <strong>{items.length}</strong> {items.length === 1 ? 'livro' : 'livros'} · {formatPrice(total)}
          </span>
          <button type="button" className="header__clear" onClick={clearCart}>
            Esvaziar
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
