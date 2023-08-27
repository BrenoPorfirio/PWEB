let cervejas = ["Guinness", "Desperados", "Becks"]

function transformToTableRow(item) {
  return `<tr><td>${item}</td></tr>`
}

function loadTable() {
  let tableBody = document.querySelector("#cervejasTable tbody")
  let cervejasHtml = cervejas.map(transformToTableRow)
  tableBody.innerHTML = cervejasHtml.join("\n")
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", loadTable)
