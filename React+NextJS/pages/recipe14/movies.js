import { useState } from "react"

export default function Movies({ data }) {
  const [searchTerm, setSearchTerm] = useState("")

  async function searchMovies() {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=ca98445&s=${searchTerm}`
    )
    const searchData = await res.json()
    data.Search = searchData.Search
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Digite a palavra-chave"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={searchMovies}>Pesquisar</button>{" "}
      </div>
      <div>
        {data.Search.map((m) => (
          <div key={m.imdbID}>
            <img src={m.Poster} width="180px" alt={m.Title}></img>
            <h2>
              {m.Title} --- {m.Year} --- {m.Type}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://www.omdbapi.com/?apikey=ca98445&s=bagdad`)
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}
