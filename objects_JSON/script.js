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
  Id = "cervejasDiv",
  properties = ["name", "alcohol", "ibu", "style"],
  columns = ["Nome", "Álcool", "Estilo", "Amargor"]
) => {
  const div = document.querySelector(`#${Id}`)
  div.innerHTML = ""

  const columnRow = `<tr>${columns
    .map((column) => `<th>${column}</th>`)
    .join("")}</tr>`

  const itemsHtml = cs.map((item) => {
    const cells = properties.map((property) => {
      const value = item[property] || ""
      return `<td>${value}</td>`
    })
    return `<tr>${cells.join("")}</tr>`
  })
  div.innerHTML = `<table>${columnRow}${itemsHtml.join("\n")}</table>`
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarDiv(cervejas))
