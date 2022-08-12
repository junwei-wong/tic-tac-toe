import { useEffect, useState } from "preact/hooks";
import { box1Win } from "../utils/winningPermutations";
import style from "./style.css";

const initialState = [null, null, null, null, null, null, null, null, null];

const App = () => {
  const [turn, setTurn] = useState(true);
  const [boxes, setBoxes] = useState([...initialState]);
  const [box1, box2, box3, box4, box5, box6, box7, box8, box9] = boxes;

  useEffect(() => {
    if (box1 !== null && box1Win(box1, box2, box3, box4, box7)) {
      console.log("win");
    }
  }, [box1]);

  const resetGame = () => setBoxes([...initialState]);

  const renderBox = (boxValue, index) => (
    <div
      className={style.boxes}
      name={`boxes${index}`}
      onClick={() => changeBoxValue(boxValue, index)}
    >
      {renderBoxValue(boxValue)}
    </div>
  );

  const changeBoxValue = (boxValue, index) => {
    if (boxValue === null) {
      const tempBox = [...boxes];
      tempBox[index] = turn;
      setBoxes([...tempBox]);
      setTurn((prevState) => !prevState);
    }
  };

  const renderBoxValue = (boxValue) => {
    if (!!boxValue) return "o";
    else if (boxValue === null) return null;
    else return "x";
  };

  return (
    <div className={style.tictactoe}>
      <h1 className={style.title}>{} Turn</h1>
      <button onClick={resetGame}>Reset</button>
      <div className={style.gameBoard}>
        {boxes.map((boxValue, index) => renderBox(boxValue, index))}
      </div>
    </div>
  );
};

export default App;
