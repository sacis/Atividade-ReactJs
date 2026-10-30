export const books = [
  { id: 1, title: 'Dom Casmurro', author: 'Machado de Assis', year: 1899, genre: 'realismo', price: 18.9, condition: 'Bom', color: '#7a3b2e' },
  { id: 2, title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis', year: 1881, genre: 'realismo', price: 22.5, condition: 'Ótimo', color: '#2f4858' },
  { id: 3, title: 'O Cortiço', author: 'Aluísio Azevedo', year: 1890, genre: 'realismo', price: 15.0, condition: 'Regular', color: '#5b6b3a' },
  { id: 4, title: 'Iracema', author: 'José de Alencar', year: 1865, genre: 'romantismo', price: 12.0, condition: 'Bom', color: '#a0522d' },
  { id: 5, title: 'Senhora', author: 'José de Alencar', year: 1875, genre: 'romantismo', price: 14.9, condition: 'Ótimo', color: '#6d4c7d' },
  { id: 6, title: 'Vidas Secas', author: 'Graciliano Ramos', year: 1938, genre: 'regionalismo', price: 24.0, condition: 'Bom', color: '#b5835a' },
  { id: 7, title: 'Capitães da Areia', author: 'Jorge Amado', year: 1937, genre: 'regionalismo', price: 27.9, condition: 'Ótimo', color: '#1f6f78' },
  { id: 8, title: 'Mar Morto', author: 'Jorge Amado', year: 1936, genre: 'regionalismo', price: 21.0, condition: 'Bom', color: '#2b4c7e' },
  { id: 9, title: 'O Quinze', author: 'Rachel de Queiroz', year: 1930, genre: 'regionalismo', price: 16.5, condition: 'Regular', color: '#c07a3a' },
  { id: 10, title: 'Macunaíma', author: 'Mário de Andrade', year: 1928, genre: 'modernismo', price: 19.9, condition: 'Bom', color: '#3d7a4a' },
  { id: 11, title: 'A Hora da Estrela', author: 'Clarice Lispector', year: 1977, genre: 'modernismo', price: 29.0, condition: 'Ótimo', color: '#4a3f6b' },
  { id: 12, title: 'Grande Sertão: Veredas', author: 'Guimarães Rosa', year: 1956, genre: 'modernismo', price: 39.9, condition: 'Bom', color: '#8a6d3b' },
  { id: 13, title: 'O Alienista', author: 'Machado de Assis', year: 1882, genre: 'realismo', price: 10.0, condition: 'Regular', color: '#59595b' },
  { id: 14, title: 'Quincas Borba', author: 'Machado de Assis', year: 1891, genre: 'realismo', price: 17.5, condition: 'Bom', color: '#8c3f4f' },
  { id: 15, title: 'Lucíola', author: 'José de Alencar', year: 1862, genre: 'romantismo', price: 11.9, condition: 'Regular', color: '#b04a5a' },
  { id: 16, title: 'São Bernardo', author: 'Graciliano Ramos', year: 1934, genre: 'regionalismo', price: 20.0, condition: 'Ótimo', color: '#6b5a3e' },
  { id: 17, title: 'Triste Fim de Policarpo Quaresma', author: 'Lima Barreto', year: 1915, genre: 'realismo', price: 13.9, condition: 'Bom', color: '#3e6259' },
  { id: 18, title: 'Sagarana', author: 'Guimarães Rosa', year: 1946, genre: 'modernismo', price: 26.0, condition: 'Bom', color: '#7d6a2f' }
]

export const genreOptions = [
  { value: 'todos', label: 'Todos os gêneros' },
  { value: 'realismo', label: 'Realismo' },
  { value: 'romantismo', label: 'Romantismo' },
  { value: 'regionalismo', label: 'Regionalismo' },
  { value: 'modernismo', label: 'Modernismo' }
]

export const sortOptions = [
  { value: 'titulo', label: 'Título (A-Z)' },
  { value: 'menor-preco', label: 'Menor preço' },
  { value: 'maior-preco', label: 'Maior preço' },
  { value: 'ano', label: 'Mais antigos' }
]
