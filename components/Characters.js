import Character from "./Character";

const Characters = ({ charList }) => {
    console.log('charlist', charList)
    return (
        <>
            <div>Characters</div>
            <ul>
                {charList.map((character, index) => {
                    return (
                        <li>
                            <Character details={character} />
                        </li>
                    )
                })}        
            </ul>
        </>            
    )
}

export default Characters;