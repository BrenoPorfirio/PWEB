import Link from "next/link"

export default function MoviesServer({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <Link href={`movie/${movie.imdbID}`}>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://www.omdbapi.com/?apikey=ca98445&s=bagdad`)
  const data = await res.json()

  return {
    props: {
      movies: data.Search || [],
    },
  }
}
