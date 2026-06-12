const alunos = [
  { nome: 'Daniel', notas: [8, 9, 7] },
  { nome: 'Ana', notas: [6, 7, 8] },
]

const medias = alunos.map((aluno) => {
  const total = aluno.notas.reduce((soma, nota) => soma + nota, 0)
  const media = total / aluno.notas.length

  return { nome: aluno.nome, media }
})

console.log(medias)
