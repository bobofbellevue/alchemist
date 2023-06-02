import "./CharacterRatingTable.css";

export function CharacterRatingTable({ characters }) {
  const charactersClone = characters.slice();
  const charactersSorted = charactersClone
    .sort((a, b) => b.votes - a.votes)
    .filter((character) => character.votes > 0);
  return (
    <div id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {charactersSorted.map((character) => (
            <tr key={character.id} className={character.class}>
              <td>
                {character.name}
                {character.nickname ? ` "${character.nickname}"` : ``}
              </td>
              <td>{character.skills.join(", ")}</td>
              <td>{character.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
