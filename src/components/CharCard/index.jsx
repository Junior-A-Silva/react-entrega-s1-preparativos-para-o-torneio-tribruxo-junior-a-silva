import "./styles.css";
import Characters from "../Characters";
function CharCard({ characterList }) {
  return (
    <div>
      <ul>
        {characterList.map((item, index) => (
          <li key={item.id} className="charCard">
            <Characters characterList={characterList} id={Number(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharCard;
