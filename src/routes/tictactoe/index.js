import { useState } from "preact/hooks";
import style from "./style.css";

const initialState = [null, null, null, null, null, null, null, null, null];

// const winningPermutations = []

const TicTacToe = () => {
  const [turn, setTurn] = useState(true);
  const [box, setBoxes] = useState([...initialState]);

  const resetGame = () => setBoxes([...initialState]);

  const renderBox = (boxValue, index) => (
    <div
      className={style.box}
      name={`box${index}`}
      onClick={() => changeBoxValue(boxValue, index)}
    >
      {renderBoxValue(boxValue)}
    </div>
  );

  const changeBoxValue = (boxValue, index) => {
    if (boxValue === null) {
      const tempBox = [...box];
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
        {box.map((boxValue, index) => renderBox(boxValue, index))}
      </div>
    </div>
  );
};

export default TicTacToe;
