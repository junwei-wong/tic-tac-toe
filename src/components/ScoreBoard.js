import { getXicon, getOicon } from "./Icons";
import style from "./style.css";

const ScoreBoard = (props) => {
  const { scoreO, scoreX } = props;
  return (
    <div className={style.scoreBoard}>
      <h3>{scoreO} -</h3> {getOicon(style.iconInScore)}
      {getXicon(style.iconInScore)} <h3>- {scoreX}</h3>
    </div>
  );
};

export default ScoreBoard;
