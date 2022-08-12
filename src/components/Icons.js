import Xicon from "./../assets/icons/x-svgrepo-com.svg";
import Oicon from "./../assets/icons/circle-svgrepo-com.svg";
import style from "./style.css";

export const getOicon = (parentStyle) => (
  <img className={parentStyle ?? style.icon} src={Oicon} />
);

export const getXicon = (parentStyle) => (
  <img className={parentStyle ?? style.icon} src={Xicon} />
);
