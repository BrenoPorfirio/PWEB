let vehicle = []
//cs é um array de cervejas
const carregarDiv = (cs) => {
  const div = document.getElementById("cervejasDiv")
  const itensHtml = cs.map(
    ({ make_and_model, color, transmission, drive_type }) =>
      `<p>${make_and_model} -- ${color} -- ${transmission} -- ${drive_type}<p>`
  )
  div.innerHTML = `${itensHtml.join("\n")}`
}

async function carregarCervejas() {
  try {
    let res = await fetch(
      "https://random-data-api.com/api/vehicle/random_vehicle?size=3"
    )
    vehicle = await res.json()
    carregarDiv(vehicle)
  } catch (err) {
    document.getElementById("cervejasDiv").innerHTML = "Fudeu..."
  }
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarCervejas())
