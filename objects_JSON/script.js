let cervejas = [
  {
    name: "Guiness",

    alcohol: "10%",
  },
  {
    name: "Desperados",
    alcohol: "6%",
  },
  {
    name: "Becks",
    alcohol: "5%",
  },
]
//cs é um array de cervejas
const carregarDiv = (cs) => {
  const div = document.getElementById("cervejasDiv")
  const itensHtml = cs.map(
    (item) => `<div>${item["name"]} -- ${item["alcohol"]}</div>`
  )
  div.innerHTML = `${itensHtml.join("\n")}`
}
let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarDiv(cervejas))
