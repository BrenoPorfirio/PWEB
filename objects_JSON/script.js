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
const carregarDiv = (cs) => {
  const tbody = document.querySelector("#cervejasDiv tbody")
  tbody.innerHTML = ""
  cs.forEach((item) => {
    const row = tbody.insertRow()
    const properties = ["name", "alcohol", "ibu", "style"]
    properties.forEach((property) => {
      const cell = row.insertCell()
      cell.textContent = item[property]
    })
  })
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarDiv(cervejas))
