let cervejas = ["Guinness", "Desperados", "Becks"]

function transformToTable(item) {
  return `<tr><td>${item}</td></tr>`
}

function loadTable() {
  let tableBody = document.querySelector("#cervejasTable tbody")
  let cervejasHtml = cervejas.map(transformToTable)
  tableBody.innerHTML = cervejasHtml.join("\n")
}

function sortCervejas() {
  cervejas.sort()
  loadTable()
}

let botaoCarregar = document.getElementById("botaoCarregar")
botaoCarregar.addEventListener("click", loadTable)

let botaoOrdenar = document.getElementById("BSort")
botaoOrdenar.addEventListener("click", sortCervejas)
