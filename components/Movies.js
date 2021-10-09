import React from 'react';
import Link from 'next/link';
import style from '../styles/Movies.module.scss';

class Movies extends React.Component{
    render() {
        const { results } = this.props.movies.films;
        // console.log(results);
        
        return (
            <ul className={style.movie__list}>
                {results.map((film, index) => (
                    <li className={ style.movie__item } key={film.episode_id}>
                        <Link
                            href={`/films/${index+1}`}
                        >
                            <a>{film.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }
}

export default Movies;