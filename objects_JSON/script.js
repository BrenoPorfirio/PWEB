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
  const tbody = document.querySelector("#cervejasDiv tbody")
  tbody.innerHTML = ""
  cs.forEach((item) => {
    const row = tbody.insertRow()
    const nomeCell = row.insertCell(0)
    const alcoolCell = row.insertCell(1)
    nomeCell.textContent = item.name
    alcoolCell.textContent = item.alcohol
  })
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarDiv(cervejas))
