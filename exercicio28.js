const executarOperacao = (a, b, operacao) => operacao(a, b)

const soma = (a, b) => a + b
const multiplicacao = (a, b) => a * b

console.log(executarOperacao(5, 3, soma))
console.log(executarOperacao(5, 3, multiplicacao))
