import "./styles.css";
function Characters({ characterList, id }) {
  //
  // if (characterList[id].status === "Alive") {
  //   return (
  //     <div className="charCardAlive">
  //       <div>Name: {characterList[id].name}</div>
  //       <div id="statusAlive">Status: {characterList[id].status}</div>
  //     </div>
  //   );
  // } else if (characterList[id].status === "Dead") {
  //   return (
  //     <div className="charCardDead">
  //       <div>Name: {characterList[id].name}</div>
  //       <div className="statusDead">Status: {characterList[id].status}</div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="charCardUnknown">
  //       <div>Name: {characterList[id].name}</div>
  //       <div className="statusUnknown">Status: {characterList[id].status}</div>
  //     </div>
  //   );
  // }
  //
  //
  return (
    <div className="charCardUnknown">
      <img src={characterList[id].image} alt="" />
      <div>Name: {characterList[id].name}</div>
      <div>House: {characterList[id].house}</div>
      {/* <div className="statusUnknown">Status: {characterList[id].status}</div> */}
    </div>
  );
  //
}

export default Characters;
