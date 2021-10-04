// import Characters from '../../../components/Characters'

const movie = ({film}) => {

    return (
        <div>
            <div>Movie page for <strong>{film.title}</strong></div>
            <div>Episode {film.episode_id}</div>
            {/* <Characters characters={film.characters} /> */}
        </div>
    )
}

export async function getStaticPaths() {

    const res = await fetch (`https://swapi.dev/api/films`)
    const movies = await res.json();

    const paths = movies.results.map((movie) => ({
        params: {id: movie.url.replace("https://swapi.dev/api/films/","").replace("/","")}
    }))

    return {paths, fallback: false}
}

export const getStaticProps = async ({params}) => {
    const res = await fetch (`https://swapi.dev/api/films/${params.id}`)

    const film = await res.json()
    
    return {
        props: {
            film
        }
    }
}



export default movie;