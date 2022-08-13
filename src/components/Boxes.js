import { getXicon, getOicon } from "./Icons";
import style from "./style.css";

const Boxes = (props) => {
  const { index, boxValue, changeBoxValue } = props;

  const renderBoxValue = (value) => {
    if (value === "O") return getOicon();
    else if (value === "X") return getXicon();
    else return null;
  };

  return (
    <div
      className={style.boxes}
      name={`boxes${index}`}
      onClick={() => changeBoxValue(boxValue, index)}
    >
      {renderBoxValue(boxValue)}
    </div>
  );
};

export default Boxes;
