const usuarios = [
  { id: 1, nome: 'Ana' },
  { id: 2, nome: 'Bruno' },
  { id: 3, nome: 'Daniel' },
]

const usuario = usuarios.find((usuario) => usuario.id === 3)

console.log(usuario)
