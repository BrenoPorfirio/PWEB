import useSWR from "swr"
import { useState } from "react"
import { Button, Card, Spin, Row, Col } from "antd"
import Link from "next/link"

const { Meta } = Card

async function theFetcher(url) {
  if (url === null || url === "") return { Search: "" }
  const res = await fetch(url)
  const json = await res.json()
  return json
}

export function TheMovies({ data, show }) {
  if (!show) return null
  if (data.error) return <div>falha na requisição</div>
  if (data.Search === "") return null

  return (
    <div>
      {data.Search.map((m) => (
        <Link href={`onemovie/${m.imdbID}`}>
          <Card key={m.imdbID} style={{ width: 350, marginBottom: 16 }}>
            <img src={m.Poster} />
            <Meta title={m.Title} description={m.Year} />
          </Card>
        </Link>
      ))}
    </div>
  )
}

export function TheLink({ url, handler }) {
  return (
    <div>
      <Button type="primary" onClick={handler}>
        {url === "" ? "Mostrar" : "Ocultar"}
      </Button>
    </div>
  )
}

export default function Movies3() {
  const [url, setUrl] = useState("")
  const { data, error } = useSWR(url, theFetcher)

  const isShowingMovies = url !== "" && !error

  return (
    <Row justify="center" style={{ marginTop: 16 }}>
      <Col span={8}>
        <TheLink
          url={url}
          handler={() =>
            setUrl(
              url === ""
                ? "http://www.omdbapi.com/?apikey=ca98445&s=bagdad"
                : ""
            )
          }
        />
      </Col>
      <Col span={16}>
        {isShowingMovies && (
          <Spin spinning={!data} tip="Carregando..." style={{ marginTop: 24 }}>
            <TheMovies data={data ? data : { Search: "" }} show={url !== ""} />
          </Spin>
        )}
        {error && (
          <div style={{ marginTop: 20, color: "red" }}>Erro na pesquisa</div>
        )}
      </Col>
    </Row>
  )
}
