import { getXicon, getOicon } from "./Icons";
import style from "./style.css";

const Header = (props) => {
  const { undoLastMove, resetGame, turn } = props;
  return (
    <div className={style.header}>
      <h1>Tic-Tac-Toe</h1>
      {turn % 2 === 0
        ? getOicon(style.iconInTitle)
        : getXicon(style.iconInTitle)}
      <h2>Turn</h2>
      <div className={style.buttonGroup}>
        <button className={style.undoButton} onClick={undoLastMove} name="undo">
          Undo
        </button>
        <button className={style.resetButton} onClick={resetGame} name="reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Header;
