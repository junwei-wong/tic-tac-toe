import { h } from "preact";
import { Router } from "preact-router";

// Code-splitting is automated for `routes` directory
import TicTacToe from "../routes/tictactoe";

const App = () => (
  <div id="app">
    <Router>
      <TicTacToe path="/" />
    </Router>
  </div>
);

export default App;
