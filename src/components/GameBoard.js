import { useEffect, useReducer, useState } from "preact/hooks";
import Boxes from "./Boxes";
import ScoreBoard from "./ScoreBoard";
import Header from "./Header";
import {
  checkWin,
  convertTurnToSymbol,
  showWinnerAlert,
  showTieAlert,
} from "../utils/helperFunctions";
import style from "./style.css";

const initialState = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const initialScore = { x: 0, o: 0 };
const scoreReducer = (state, action) => {
  switch (action.type) {
    case "X_WINS":
      return {
        ...state,
        x: state.x + 1,
      };
    case "O_WINS":
      return {
        ...state,
        o: state.o + 1,
      };
    default:
      return { ...state };
  }
};

const GameBoard = () => {
  const [turn, setTurn] = useState(0);
  const [moveHistory, setMoveHistory] = useState([]);
  const [boxes, setBoxes] = useState([...initialState]);
  const [score, dispatchScore] = useReducer(scoreReducer, { ...initialScore });
  const [freezeGame, setFreezeGame] = useState(false);
  const [winner, setWinner] = useState(false);
  const [box1, box2, box3, box4, box5, box6, box7, box8, box9] = boxes;

  useEffect(() => {
    if (checkWin(box1, box2, box3)) {
      setWinner(true);
    }
  }, [box1, box2, box3]);

  useEffect(() => {
    if (checkWin(box4, box5, box6)) {
      setWinner(true);
    }
  }, [box4, box5, box6]);

  useEffect(() => {
    if (checkWin(box7, box8, box9)) {
      setWinner(true);
    }
  }, [box7, box8, box9]);

  useEffect(() => {
    if (checkWin(box1, box4, box7)) {
      setWinner(true);
    }
  }, [box1, box4, box7]);

  useEffect(() => {
    if (checkWin(box2, box5, box8)) {
      setWinner(true);
    }
  }, [box2, box5, box8]);

  useEffect(() => {
    if (checkWin(box3, box6, box9)) {
      setWinner(true);
    }
  }, [box3, box6, box9]);

  useEffect(() => {
    if (checkWin(box1, box5, box9)) {
      setWinner(true);
    }
  }, [box1, box5, box9]);

  useEffect(() => {
    if (checkWin(box3, box5, box7)) {
      setWinner(true);
    }
  }, [box3, box5, box7]);

  useEffect(() => {
    if (winner)
      showWinnerAlert(turn, incrementWinnerScore, resetGame, setFreezeGame);
  }, [winner]);

  useEffect(() => {
    if (turn === 9) showTieAlert(resetGame, setFreezeGame);
  }, [turn]);

  const resetGame = () => {
    if (winner) setWinner(false);
    setBoxes([...initialState]);
    setTurn(0);
    setFreezeGame(false);
  };

  const incrementWinnerScore = (symbol) => {
    if (symbol === "O") {
      dispatchScore({ type: "O_WINS" });
    } else if (symbol === "X") {
      dispatchScore({ type: "X_WINS" });
    }
  };

  const addValueToBox = (initialBoxValue, index) => {
    if (typeof initialBoxValue === "number" && !freezeGame) {
      const tempBox = [...boxes];
      setMoveHistory((prevState) => [...prevState, tempBox[index]]);
      tempBox[index] = convertTurnToSymbol(turn);
      setBoxes([...tempBox]);
      setTurn((prevState) => prevState + 1);
    }
  };

  const undoLastMove = () => {
    const lastMove = moveHistory[moveHistory.length - 1];
    const indexOfLastMove = lastMove - 1;
    const tempBox = [...boxes];
    if (typeof tempBox[indexOfLastMove] === "string" && !freezeGame) {
      tempBox[indexOfLastMove] = lastMove;
      const tempMoveHistory = [...moveHistory];
      tempMoveHistory.pop();
      setMoveHistory([...tempMoveHistory]);
      setBoxes([...tempBox]);
      setTurn((prevState) => prevState - 1);
    }
  };

  return (
    <>
      <Header turn={turn} undoLastMove={undoLastMove} resetGame={resetGame} />
      <div className={style.gameBoard}>
        {boxes.map((boxValue, index) => (
          <Boxes
            boxValue={boxValue}
            index={index}
            changeBoxValue={addValueToBox}
          />
        ))}
      </div>
      <ScoreBoard scoreO={score.o} scoreX={score.x} />
    </>
  );
};

export default GameBoard;
