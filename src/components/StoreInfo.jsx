import Tabs from './Tabs'

const storeTabs = [
  {
    title: 'Sobre',
    content: (
      <>
        <p>
          O Sebos e Molhados começou com três estantes num corredor da Ladeira da Barra. Hoje são mais de
          20 mil títulos entre literatura brasileira, clássicos estrangeiros, quadrinhos e livros didáticos.
        </p>
        <p>Todo livro passa por limpeza e revisão antes de ir para a prateleira.</p>
      </>
    )
  },
  {
    title: 'Horários',
    content: (
      <ul>
        <li>Terça a sexta: 9h às 18h</li>
        <li>Sábado: 9h às 14h</li>
        <li>Domingo e segunda: fechado</li>
      </ul>
    )
  },
  {
    title: 'Entrega',
    content: (
      <ul>
        <li>Retirada na loja: grátis</li>
        <li>Salvador e região metropolitana: R$ 9,90</li>
        <li>Demais cidades: calculado pelos Correios</li>
        <li>Frete grátis em compras acima de R$ 120,00</li>
      </ul>
    )
  },
  {
    title: 'Contato',
    content: (
      <address>
        <p>
          Ladeira da Barra, 210 - Barra, Salvador - BA
          <br />
          (71) 3333-0000
          <br />
          contato@sebosemolhados.com.br
        </p>
      </address>
    )
  }
]

function StoreInfo() {
  return (
    <section id="a-loja" className="section card" aria-labelledby="titulo-loja">
      <h2 id="titulo-loja" className="section__title">A loja</h2>
      <Tabs tabs={storeTabs} label="Informações da loja" />
    </section>
  )
}

export default StoreInfo
