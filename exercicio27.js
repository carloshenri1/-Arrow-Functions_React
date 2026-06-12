const categorias = ['eletronicos', 'casa', 'eletronicos']

const contagem = categorias.reduce((total, categoria) => {
  total[categoria] = (total[categoria] || 0) + 1
  return total
}, {})

console.log(contagem)
