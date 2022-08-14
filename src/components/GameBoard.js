import { useEffect, useState } from "preact/hooks";
import Boxes from "./Boxes";
import { getXicon, getOicon } from "./Icons";
import { checkWin } from "../utils/helperFunctions";
import Swal from "sweetalert2";
import style from "./style.css";

const initialState = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const GameBoard = () => {
  const [turn, setTurn] = useState(0);
  const [boxes, setBoxes] = useState([...initialState]);
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
    if (winner) showWinnerAlert();
  }, [winner]);

  useEffect(() => {
    if (turn === 9) showTieAlert();
  }, [turn]);

  const resetGame = () => {
    setWinner(false);
    setBoxes([...initialState]);
    setTurn(0);
    setFreezeGame(false);
  };

  const changeTurn = () => setTurn((prevState) => prevState + 1);

  const convertTurnToSymbol = (turnValue) => {
    return turnValue % 2 === 0 ? "O" : "X";
  };

  const showWinnerAlert = async () => {
    const previousTurn = turn - 1;
    await Swal.fire({
      title: "Victory!",
      text: `${convertTurnToSymbol(previousTurn)} wins`,
      confirmButtonText: "Cool!",
      showCancelButton: true,
      cancelButtonText: "New Game",
    }).then((result) => {
      if (result.isDismissed) resetGame();
      else if (result.isConfirmed) setFreezeGame(true);
    });
  };

  const showTieAlert = async () => {
    await Swal.fire({
      title: "Tie!",
      text: "Equally skilled",
      confirmButtonText: "Aw man!",
      showCancelButton: true,
      cancelButtonText: "New Game",
    }).then((result) => {
      if (result.isDismissed) resetGame();
      else if (result.isConfirmed) setFreezeGame(true);
    });
  };

  const changeBoxValue = (initialBoxValue, index) => {
    if (typeof initialBoxValue === "number" && !freezeGame) {
      const tempBox = [...boxes];
      tempBox[index] = convertTurnToSymbol(turn);
      setBoxes([...tempBox]);
      changeTurn();
    }
  };

  return (
    <>
      <div className={style.header}>
        <h1>Tic-Tac-Toe</h1>
        {turn % 2 === 0
          ? getOicon(style.iconintitle)
          : getXicon(style.iconintitle)}
        <label>Turn</label>
        <button onClick={resetGame}>Reset</button>
      </div>
      <div className={style.gameBoard}>
        {console.log("hello")}
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
