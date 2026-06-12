const somarCarrinho = (precos) => precos.reduce((total, preco) => total + preco, 0)

console.log(somarCarrinho([50, 30, 20]))
