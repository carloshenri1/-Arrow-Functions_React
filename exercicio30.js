const temporizador = {
  contador: 0,

  iniciar() {
    const intervalo = setInterval(() => {
      this.contador++
      console.log(this.contador)

      if (this.contador === 3) {
        clearInterval(intervalo)
      }
    }, 1000)
  },
}

temporizador.iniciar()

// A arrow function usa o mesmo this do metodo iniciar.
// Por isso, this.contador aponta para o objeto temporizador.
