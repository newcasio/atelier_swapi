import React from 'react';
import Link from 'next/link';
import style from '../styles/Movies.module.scss';

class Movies extends React.Component{
    render() {
        const { results } = this.props.movies.films;
        console.log(results);
        
        return (
            <ul className={style.movie__list}>
                {results.map((film) => (
                    <li className={ style.movie__item } key={film.episode_id}>
                        <Link href={{
                            pathname: `/films/[id]`,
                            query: {
                                id: film.episode_id
                            }
                        }} as={`/films/${encodeURIComponent(film.url.replace("https://swapi.dev/api/films/", "").replace("/",""))}`} >
                            <a>{film.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }
}

export default Movies;