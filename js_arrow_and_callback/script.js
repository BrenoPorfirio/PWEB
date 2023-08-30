let cervejas = ["Guiness", "Desperados", "Becks"]

function transformar(item) {
  return `<h1>${item}</h1>`
}

function carregarDiv() {
  let div = document.getElementById("meu amor")
  let cervejasHtml = cervejas.map(transformar)
  div.innerHTML = `${cervejasHtml.join("\n")}`
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", carregarDiv)
