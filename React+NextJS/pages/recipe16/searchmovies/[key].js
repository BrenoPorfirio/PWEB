import { useState } from "react";
import useSWR from "swr";
import { Spin, Row, Col, Card } from "antd";
import { useRouter } from "next/router";

const { Meta } = Card;

async function theFetcher(url) {
  if (url === null || url === "") return { Search: "" };
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

export default function SearchMovies() {
  const router = useRouter();
  const { key } = router.query;

  const [url, setUrl] = useState(`http://www.omdbapi.com/?apikey=ca98445&s=${key}`);
  const { data, error } = useSWR(url, theFetcher);

  const isShowingMovies = url !== "" && !error;

  return (
    <Row justify="center" style={{ marginTop: 16 }}>
      <Col span={16}>
        {isShowingMovies && (
          <Spin spinning={!data} tip="Carregando..." style={{ marginTop: 24 }}>
            {data && data.Search ? (
              <div>
                {data.Search.map((m) => (
                  <Card key={m.imdbID} style={{ width: 350, marginBottom: 16 }}>
                    <img src={m.Poster} alt={m.Title} />
                    <Meta title={m.Title} description={m.Year} />
                  </Card>
                ))}
              </div>
            ) : (
              <div>Nenhum resultado encontrado</div>
            )}
          </Spin>
        )}
        {error && (
          <div style={{ marginTop: 20, color: "red" }}>Erro na pesquisa</div>
        )}
      </Col>
    </Row>
  );
}
