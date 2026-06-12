const datas = ['10/05/2024', '25/12/2025']

const datasFormatadas = datas.map((data) => {
  const [dia, mes, ano] = data.split('/')
  return { dia, mes, ano }
})

console.log(datasFormatadas)
