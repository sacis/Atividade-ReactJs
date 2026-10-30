# Sebo da Ladeira

Atividade de React.js - Engenharia de Software (UCSAL).

Página de um sebo fictício de Salvador feita com React e Vite, usando seis componentes próprios:

| Componente | Onde aparece |
| --- | --- |
| Acordeão (`Accordion`) | Perguntas frequentes |
| Paginação (`Pagination`) | Catálogo de livros |
| Barra de progresso (`ProgressBar`) | Envio da lista de leitura |
| Abas (`Tabs`) | Informações da loja |
| Menu suspenso (`Dropdown`) | Filtro por gênero e ordenação do catálogo |
| Notificação toast (`Toast`) | Sacola, envio de arquivo e erros |

Desafio extra: estado global com Context API (`ToastContext` e `CartContext`). O cabeçalho mostra a sacola e os cards dos livros adicionam itens nela sem passar props entre si.

## Como rodar

```bash
npm install
npm run dev
```

No Codespaces, a porta 5173 é encaminhada automaticamente. É só abrir o link que aparece na aba "Portas".

## Estrutura

```
src/
  App.jsx
  main.jsx
  index.css
  components/
  context/
  data/
  utils/
```
