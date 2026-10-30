import { ToastProvider } from './context/ToastContext'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Catalog from './components/Catalog'
import StoreInfo from './components/StoreInfo'
import ReadingListUpload from './components/ReadingListUpload'
import Accordion from './components/Accordion'
import Footer from './components/Footer'
import { faq } from './data/faq'

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
        <Header />

        <main id="conteudo" className="container">
          <Catalog />

          <div className="two-columns">
            <StoreInfo />
            <ReadingListUpload />
          </div>

          <section id="duvidas" className="section" aria-labelledby="titulo-duvidas">
            <h2 id="titulo-duvidas" className="section__title">Perguntas frequentes</h2>
            <Accordion items={faq} />
          </section>
        </main>

        <Footer />
      </CartProvider>
    </ToastProvider>
  )
}

export default App
