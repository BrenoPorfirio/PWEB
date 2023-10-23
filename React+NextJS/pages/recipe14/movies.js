export default function Movies({ data }) {
  return (
    <div>
      <div>
        {data.Search.map((m) => (
          <div>
            {m.Title} --- {m.Year}
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
