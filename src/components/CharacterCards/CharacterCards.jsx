import './CharacterCards.css'

export function CharacterCards({characters}) {
  return (
    <div id="character-cards">
      {characters.map((character) => (
        <div key={character.id} className="card">
          <div className="card-titles">
            <h3>{character.name}</h3>
            <h4>{character.nickname}</h4>
          </div>
          <img src={character.image} alt={character.name}/>
          <p>{character.description}</p>
        </div>
      ))}
    </div>
  )
}