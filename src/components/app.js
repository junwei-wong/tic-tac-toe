import GameBoard from "./GameBoard";
import baseroute from "../baseroute";
const App = () => {
  return (
    <div id="preact_root">
      <GameBoard path={`${baseroute}/`} />
    </div>
  );
};

export default App;
