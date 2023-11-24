import { useRouter } from "next/router"
import useSWR from "swr"

export default function MovieDetail() {
  const router = useRouter()
  const { id } = router.query

  const { data, error } = useSWR(
    id ? `http://www.omdbapi.com/?apikey=ca98445&i=${id}` : null,
    fetcher
  )

  if (error) return <div>Falha na requisição...</div>
  if (!data) return <div>Carregando...</div>

  return (
    <div>
      <img src={data.Poster} alt={data.Title} />
      <h2>Title: {data.Title}</h2>
      <ul>
        <li>
          <p>Released Year: {data.Year}</p>
        </li>
        <li>
          <p>Type: {data.Type}</p>
        </li>
      </ul>
    </div>
  )
}

async function fetcher(url) {
  const res = await fetch(url)
  const json = await res.json()
  return json
}
