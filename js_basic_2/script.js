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

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

function shuffleCervejas() {
  shuffle(cervejas)
  loadTable()
}

let botaoCarregar = document.getElementById("botaoCarregar")
botaoCarregar.addEventListener("click", loadTable)

let botaoOrdenar = document.getElementById("BSort")
botaoOrdenar.addEventListener("click", sortCervejas)

let botaoEmbaralhar = document.getElementById("BShuffle")
botaoEmbaralhar.addEventListener("click", shuffleCervejas)
