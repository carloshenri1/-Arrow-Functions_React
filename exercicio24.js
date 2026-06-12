const numeros = [1, 2, 3, 4, 5, 6]

const resultado = numeros
  .filter((numero) => numero % 2 === 0)
  .map((numero) => numero * 2)
  .reduce((total, numero) => total + numero, 0)

console.log(resultado)
