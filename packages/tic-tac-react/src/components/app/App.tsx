import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import 'common/css/styles.css';
import { GameBoardUseState } from '../game-board-use-state/GameBoardUseState';
import { GameBoardUseReducer } from '../game-board-use-reducer/GameBoardUseReducer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/use-state">
            <GameBoardUseState />
          </Route>
          <Route path="/use-reducer">
            <GameBoardUseReducer />
          </Route>
          <Route path="/">
            <ul>
              <li><Link to="/use-state">useState</Link></li>
              <li><Link to="/use-reducer">useReducer</Link></li>
            </ul>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
