import Movies from '../components/Movies';

export default function Home(films) {
  return (
    <div>
      <Movies movies={ films }/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://swapi.dev/api/films');
  const films = await res.json();
  return {
    props: {
      films: films
    }
  }
}