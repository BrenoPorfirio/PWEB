function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function criarTabela(items, propertyNames, divId) {
  const div = document.getElementById(divId)
  const tabela = document.createElement("table")
  const thead = document.createElement("thead")
  const tbody = document.createElement("tbody")

  // Cria o cabeçalho da tabela usando map
  const headerRow = document.createElement("tr")
  propertyNames
    .map((propertyName) => {
      const th = document.createElement("th")
      th.textContent = capitalizeFirstLetter(propertyName.replace(/_/g, " "))
      return th
    })
    .forEach((th) => headerRow.appendChild(th))
  thead.appendChild(headerRow)
  tabela.appendChild(thead)

  // Preenche a tabela com os dados usando map
  items.map((item) => {
    const row = document.createElement("tr")
    propertyNames
      .map((propertyName) => {
        const cell = document.createElement("td")
        cell.textContent = item[propertyName] || ""
        return cell
      })
      .forEach((cell) => row.appendChild(cell))
    tbody.appendChild(row)
  })

  tabela.appendChild(tbody)
  div.innerHTML = "" // Limpa qualquer conteúdo anterior
  div.appendChild(tabela)
}

async function carregarVeiculos() {
  try {
    let res = await fetch(
      "https://random-data-api.com/api/vehicle/random_vehicle?size=3"
    )
    const vehicles = await res.json()
    criarTabela(
      vehicles,
      ["make_and_model", "color", "transmission", "drive_type"],
      "veiculosDiv"
    )
  } catch (err) {
    document.getElementById("veiculosDiv").innerHTML = "Fudeu..."
  }
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarVeiculos())
