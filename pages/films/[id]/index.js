import Characters from '../../../components/Characters'

const movie = ({film}) => {

    return (
        <div>
            <h1>{film.title}</h1>

            <h2>Characters</h2>
            <Characters charList={ film.characters}/>
        </div>
    )
}


// this getStaticPaths is just getting the different films, so this dynamic routes/pages can be prebuilt for each film
export const getStaticPaths = async() => {

    const res = await fetch (`https://swapi.dev/api/films`)
    const movies = await res.json();

    const paths = movies.results.map((movie, index) => ({
        params: {id: (index+1).toString()}
    }))

    return {paths, fallback: false}
}


// this get static props to get individual film details
export const getStaticProps = async (context) => {

    // console.log('context',context)
    const id = context.params.id;

    const res = await fetch (`https://swapi.dev/api/films/${id}`)
    const film = await res.json()
    
    return {
        props: {
            film
        }
    }
}



export default movie;