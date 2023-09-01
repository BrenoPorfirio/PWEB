let games = [
  "Red Dead Redemption",
  "CS-GO",
  "Deep Rocket Galatic",
  "Forza Horizon",
  "Left 4 Dead 2",
]

const transformar = (item) => {
  return `<h1 class="nome-jogo">${item}</h1>`
}

const sort = () => {
  games.sort()
  carregarDiv()
}

const carregarDiv = () => {
  const div = document.getElementById("meuAmor")
  const gamesHtml = games.map(transformar)
  div.innerHTML = `${gamesHtml.join("\n")}`
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

function shuffleGames() {
  shuffle(games)
  carregarDiv()
}

let botaoCarregar = document.getElementById("botaoCarregar")
botaoCarregar.addEventListener("click", carregarDiv)

let botaoOrdenar = document.getElementById("botaoOrdenar")
botaoOrdenar.addEventListener("click", sort)

let botaoEmbaralhar = document.getElementById("botaoEmbaralhar")
botaoEmbaralhar.addEventListener("click", shuffleGames)
