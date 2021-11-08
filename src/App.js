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

  let filteredCharacterList = [];

  for (let indice = 0; indice < 3; indice++) {
    filteredCharacterList[indice] = characterList[indice];
  }

  console.log(filteredCharacterList);
  return (
    <div className="App">
      <h1>Meus personagens</h1>
      <main>
        <CharCard characterList={filteredCharacterList} />
      </main>
    </div>
  );
}

export default App;
