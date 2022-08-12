import { useEffect, useState } from "preact/hooks";
import { checkWin } from "../utils/helperFunctions";
import style from "./style.css";

const initialState = [null, null, null, null, null, null, null, null, null];

const GameBoard = () => {
  const [turn, setTurn] = useState(true);
  const [boxes, setBoxes] = useState([...initialState]);
  const [box1, box2, box3, box4, box5, box6, box7, box8, box9] = boxes;

  useEffect(() => {
    if (![box1, box2, box3].includes(null) && checkWin(box1, box2, box3)) {
      console.log("win123");
    }
  }, [box1, box2, box3]);

  useEffect(() => {
    if (![box4, box5, box6].includes(null) && checkWin(box4, box5, box6)) {
      console.log("win456");
    }
  }, [box4, box5, box6]);

  useEffect(() => {
    if (![box7, box8, box9].includes(null) && checkWin(box7, box8, box9)) {
      console.log("win789");
    }
  }, [box7, box8, box9]);

  useEffect(() => {
    if (![box1, box4, box7].includes(null) && checkWin(box1, box4, box7)) {
      console.log("box1, box4, box7");
    }
  }, [box1, box4, box7]);

  useEffect(() => {
    if (![box2, box5, box8].includes(null) && checkWin(box2, box5, box8)) {
      console.log("box2, box5, box8");
    }
  }, [box2, box5, box8]);

  useEffect(() => {
    if (![box3, box6, box9].includes(null) && checkWin(box3, box6, box9)) {
      console.log("box3, box6, box9");
    }
  }, [box3, box6, box9]);

  useEffect(() => {
    if (![box1, box5, box9].includes(null) && checkWin(box1, box5, box9)) {
      console.log("box1, box5, box9");
    }
  }, [box1, box5, box9]);

  useEffect(() => {
    if (![box3, box5, box7].includes(null) && checkWin(box3, box5, box7)) {
      console.log("box3, box5, box7");
    }
  }, [box3, box5, box7]);

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

export default GameBoard;
