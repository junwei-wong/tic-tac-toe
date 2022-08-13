import { useEffect, useState } from "preact/hooks";
import Boxes from "./Boxes";
import { getXicon, getOicon } from "./Icons";
import { checkWin } from "../utils/helperFunctions";
import style from "./style.css";

const initialState = [null, null, null, null, null, null, null, null, null];

const GameBoard = () => {
  const [turn, setTurn] = useState(false);
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

  const resetGame = () => {
    setBoxes([...initialState]);
    setTurn(false);
  };

  const changeBoxValue = (boxValue, index) => {
    if (boxValue === null) {
      const tempBox = [...boxes];
      tempBox[index] = turn;
      setBoxes([...tempBox]);
      setTurn((prevState) => !prevState);
    }
  };

  return (
    <>
      <div className={style.header}>
        {turn ? getXicon(style.iconintitle) : getOicon(style.iconintitle)}
        <label>Turn</label>
        <button onClick={resetGame}>Reset</button>
      </div>
      <div className={style.gameBoard}>
        {boxes.map((boxValue, index) => (
          <Boxes
            boxValue={boxValue}
            index={index}
            changeBoxValue={changeBoxValue}
          />
        ))}
      </div>
    </>
  );
};

export default GameBoard;
