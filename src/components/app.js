import GameBoard from "./GameBoard";
import baseroute from "../baseroute";
const App = () => {
  return <GameBoard path={`${baseroute}/`} />;
};

export default App;
