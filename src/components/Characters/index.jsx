import "./styles.css";
function Characters({ characterList, id }) {
  if (characterList[id].house === "Gryffindor") {
    return (
      <div className="charCardGryffindor">
        <img src={characterList[id].image} alt="" />
        <div className="characterName">Name: {characterList[id].name}</div>
        <div>House: {characterList[id].house}</div>
      </div>
    );
  } else if (characterList[id].house === "Slytherin") {
    return (
      <div className="charCardSlytherin">
        <img src={characterList[id].image} alt="" />
        <div className="characterName">Name: {characterList[id].name}</div>
        <div>House: {characterList[id].house}</div>
      </div>
    );
  } else if (characterList[id].house === "Ravenclaw") {
    return (
      <div className="charCardRavenclaw">
        <img src={characterList[id].image} alt="" />
        <div className="characterName">Name: {characterList[id].name}</div>
        <div>House: {characterList[id].house}</div>
      </div>
    );
  } else if (characterList[id].house === "Hufflepuff") {
    return (
      <div className="charCardHufflepuff">
        <img src={characterList[id].image} alt="" />
        <div className="characterName">Name: {characterList[id].name}</div>
        <div>House: {characterList[id].house}</div>
      </div>
    );
  } else {
    return (
      <div className="charCardUnknown">
        <img src={characterList[id].image} alt="" />
        <div className="characterName">Name: {characterList[id].name}</div>
        <div>House: {characterList[id].house}</div>
      </div>
    );
  }
}

export default Characters;
