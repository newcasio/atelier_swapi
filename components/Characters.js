import Link from 'next/link';

const Characters = ({ characters }) => {
    return (
         <ul>
            {characters.map((person) => (
                <li>
                    <Link href="/characters/[id]" as={`/character/${person.replace("https://swapi.dev/api/people/","").replace("/","")}`} >
                        <a>{person}</a>
                    </Link>
                </li>
            ))}
        </ul>
            )
}

export default Characters;