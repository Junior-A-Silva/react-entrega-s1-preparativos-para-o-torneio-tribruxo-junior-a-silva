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

  let filteredCharacterList = characterList
    .filter((item) => item.image !== "")
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div className="App">
      <h1>Harry Potter</h1>
      <main>
        <CharCard characterList={filteredCharacterList} />
      </main>
    </div>
  );
}

export default App;
