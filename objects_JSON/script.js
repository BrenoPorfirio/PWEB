let cervejas = [
  {
    name: "Guiness",
    alcohol: "10%",
    ibu: "34",
    style: "English IPA",
  },
  {
    name: "Desperados",
    alcohol: "6%",
    ibu: "56",
    style: "Cream Ale",
  },
  {
    name: "Becks",
    alcohol: "5%",
    ibu: "19",
    style: "APA",
  },
]
//cs é um array de cervejas
const carregarDiv = (
  cs,
  divId = "cervejasDiv",
  properties = ["name", "alcohol", "ibu", "style"]
) => {
  const tbody = document.querySelector(`#${divId} tbody`)
  tbody.innerHTML = ""
  const itemsHtml = cs.map((item) => {
    const cells = properties.map((property) => {
      const value = item[property] || ""
      return `<td>${value}</td>`
    })
    return `<tr>${cells.join("")}</tr>`
  })
  tbody.innerHTML = itemsHtml.join("\n")
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarDiv(cervejas))
