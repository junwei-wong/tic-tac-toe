import Swal from "sweetalert2";

export const checkWin = (box1, box2, box3) => {
  return !!(box1 === box2 && box2 === box3);
};

export const convertTurnToSymbol = (turnValue) => {
  return turnValue % 2 === 0 ? "O" : "X";
};

export const showWinnerAlert = async (
  turn,
  incrementWinnerScore,
  resetGame,
  setFreezeGame
) => {
  const previousTurn = turn - 1;
  const winnerSymbol = convertTurnToSymbol(previousTurn);
  incrementWinnerScore(winnerSymbol);
  await Swal.fire({
    title: "Victory!",
    text: `${winnerSymbol} wins`,
    confirmButtonText: "Cool!",
    showCancelButton: true,
    cancelButtonText: "New Game",
  }).then((result) => {
    if (result.isDismissed) resetGame();
    else if (result.isConfirmed) setFreezeGame(true);
  });
};

export const showTieAlert = async (resetGame, setFreezeGame) => {
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
