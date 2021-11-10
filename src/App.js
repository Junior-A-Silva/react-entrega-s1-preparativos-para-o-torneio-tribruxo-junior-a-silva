import "./App.css";
import { useState, useEffect } from "react";
import CharCard from "./components/CharCard";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setCharacterList(response));
  }, []);

  let filteredCharacterList01 = characterList
    .filter((item) => item.image !== "")
    .sort(() => Math.random() - 0.5)
    .filter((item) => item.house === "Gryffindor")
    .slice(0, 1);

  let filteredCharacterList02 = characterList
    .filter((item) => item.image !== "")
    .sort(() => Math.random() - 0.5)
    .filter((item) => item.house === "Slytherin")
    .sort(() => Math.random() - 0.5)
    .slice(0, 1);

  let filteredCharacterList03 = characterList
    .filter((item) => item.image !== "")
    .sort(() => Math.random() - 0.5)
    .filter((item) => item.house === "Ravenclaw" || item.house === "Hufflepuff")
    .sort(() => Math.random() - 0.5)
    .slice(0, 1);

  return (
    <div className="App">
      <h1>Harry Potter</h1>
      <main>
        <CharCard characterList={filteredCharacterList01} />
        <CharCard characterList={filteredCharacterList02} />
        <CharCard characterList={filteredCharacterList03} />
      </main>
    </div>
  );
}

export default App;
