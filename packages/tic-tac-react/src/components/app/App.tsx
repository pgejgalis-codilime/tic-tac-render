import React from 'react';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import 'common/css/styles.css';
import { GameBoardUseState } from '../game-board-use-state/GameBoardUseState';
import { GameBoardUseReducer } from '../game-board-use-reducer/GameBoardUseReducer';

function App() {
  return (
    <div className="App">
      <HashRouter>
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
      </HashRouter>
    </div>
  );
}

export default App;
