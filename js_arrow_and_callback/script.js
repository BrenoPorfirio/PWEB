const games = [
  "Red Dead Redemption",
  "CS-GO",
  "Deep Rocket Galatic",
  "Forza Horizon",
  "Left 4 Dead 2",
]

const transformar = (item) => {
  return `<table>${games}</table>`
}

const transformarPTab = (games) => {
  return `<table><tr><th>Games</th></tr>${games
    .map((item) => `<tr><td>${item}</td></tr>`)
    .join("")}</table>`
}

const carregarDiv = () => {
  const div = document.getElementById("meuAmor")
  const gamesHtml = games.map(transformar)
  div.innerHTML = transformarPTab(games)
}

const sort = () => {
  const div = document.getElementById("meuAmor")
  const itensOrdenados = [...games].sort()
  div.innerHTML = transformarPTab(itensOrdenados)
}

const shuffle = () => {
  const div = document.getElementById("meuAmor")
  const itensEmbaralhados = [...games].sort(() => Math.random() - 0.5)
  div.innerHTML = transformarPTab(itensEmbaralhados)
}

const botaoCarregar = document.getElementById("botaoCarregar")
botaoCarregar.addEventListener("click", () => carregarDiv(games))

const botaoOrdenar = document.getElementById("botaoOrdenar")
botaoOrdenar.addEventListener("click", () => sort(games))

const botaoEmbaralhar = document.getElementById("botaoEmbaralhar")
botaoEmbaralhar.addEventListener("click", () => shuffle(games))
