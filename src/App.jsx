import "./App.css";
import { AlchemistHeader } from "./components/AlchemistHeader/AlchemistHeader";
import { CharacterRatingTable } from "./components/CharacterRatingTable/CharacterRatingTable";
import { CharacterCards } from "./components/CharacterCards/CharacterCards";
import { characters } from "./CharacterData.js";

function App() {
  return (
    <>
      <div>
        <AlchemistHeader />
        <CharacterRatingTable characters={characters} />
        <CharacterCards characters={characters} />
      </div>
    </>
  );
}

export default App;
