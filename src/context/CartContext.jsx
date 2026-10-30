import { createContext, useContext, useState } from 'react'
import { useToast } from './ToastContext'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const { showToast } = useToast()

  function addToCart(book) {
    if (items.some((item) => item.id === book.id)) {
      showToast(`"${book.title}" já está na sua sacola.`, 'info')
      return
    }
    setItems([...items, book])
    showToast(`"${book.title}" foi para a sacola.`, 'success')
  }

  function clearCart() {
    if (items.length === 0) {
      showToast('Sua sacola já está vazia.', 'error')
      return
    }
    setItems([])
    showToast('Sacola esvaziada.', 'info')
  }

  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <CartContext.Provider value={{ items, total, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
