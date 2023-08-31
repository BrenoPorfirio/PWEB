const transformar = (item) => {
  return `<h1>${item}</h1>`
}

const carregarDiv = (cervs) => {
  const div = document.getElementById("meuAmor")
  const cervejasHtml = cervs.map(transformar)
  div.innerHTML = `${cervejasHtml.join("\n")}`
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => {
  const cervejas = ["Guiness", "Desperados", "Becks"]
  carregarDiv(cervejas)
})
