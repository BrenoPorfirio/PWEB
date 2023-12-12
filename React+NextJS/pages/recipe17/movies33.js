import useSWR from 'swr';
import { useState } from 'react';

export function TheForm({ onSubmit }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="titleSearchString">Filtro de Título</label>
        <input
          id="titleSearchString"
          name="titleSearchString"
          type="text"
          autoComplete="true"
          onKeyPress={handleKeyPress}
        />
      </form>
    </div>
  );
}

export function TheMovies({ data, show }) {
  if (!show) return <div></div>;

  if (!data || !data.Search) return <div></div>;
  if (data.error) return <div>falha na pesquisa</div>;
  if (data.Search === '') return <div>carregando...</div>;

  return (
    <div>
      {data.Search.map((m) => (
        <div key={m.imdbID}>
          {m.Title} --- {m.Year}
        </div>
      ))}
    </div>
  );
}

export function TheLink({ url, handler }) {
  return (
    <div>
      <a href="/movies3.js" onClick={handler}>
        {url === '' ? 'Mostrar' : 'Ocultar'}
      </a>
    </div>
  );
}

export default function Movies33() {
  const [state, setState] = useState({ url: '', titleSearchString: '' });
  const { data, error } = useSWR(state.url, async (u) => {
    if (!state.url || !state.titleSearchString) return { Search: '' };
    if (state.url === '' || state.titleSearchString === '') return { Search: '' };

    const res = await fetch(`${state.url}/?apiKey=ca98445&s=${state.titleSearchString}`);
    const json = await res.json();
    return json;
  });

  const onClickHandler = (e) => {
    e.preventDefault();

    let searchString = document.getElementById('titleSearchString').value;

    if (!searchString.trim()) {
      alert('O campo de pesquisa não pode estar vazio!');
      return;
    }

    if (state.url === '') {
      setState({ url: 'http://www.omdbapi.com', titleSearchString: searchString });
    } else {
      setState({ url: '', titleSearchString: state.titleSearchString });
    }
  };

  const onSubmitHandler = () => {
    let searchString = document.getElementById('titleSearchString').value;

    if (!searchString.trim()) {
      alert('O campo de pesquisa não pode estar vazio!');
      return;
    }

    if (state.url === '') {
      setState({ url: 'http://www.omdbapi.com', titleSearchString: searchString });
    } else {
      setState({ url: '', titleSearchString: state.titleSearchString });
    }
  };

  return (
    <div>
      <TheForm onSubmit={onSubmitHandler} />
      <TheLink url={state.url} handler={onClickHandler} />
      <TheMovies data={data ? data : { Search: '' }} show={state.url !== ''} />
    </div>
  );
}