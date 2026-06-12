const alunos = [
  { nome: 'Daniel', nota: 8 },
  { nome: 'Ana', nota: 6 },
  { nome: 'Bruno', nota: 9 },
]

const aprovados = alunos
  .filter((aluno) => aluno.nota >= 7)
  .map((aluno) => aluno.nome)

console.log(aprovados)
