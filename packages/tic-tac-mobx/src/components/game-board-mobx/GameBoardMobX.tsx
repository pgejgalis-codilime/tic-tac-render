import { action } from 'mobx';
import React, { FunctionComponent } from 'react';
import { BOARD_SIZE, createGameState } from 'common';
import { Square, SquareItem } from '../square/Square';
import { observer, useLocalStore } from 'mobx-react-lite';


export const GameBoardMobX: FunctionComponent = observer(() => {
  const store = useLocalStore(() => ({
    ...createGameState(),  // nextPlayer: 'O',
                           // squares: [ {index,value}... ],
    onSquareClick: action((clickedSquare: SquareItem) => {
      console.log('-------- onSquareClick --------');

      // MUTABLE
      clickedSquare.value = store.nextPlayer;

      // IMMUTABLE
      // store.squares = store.squares.map(square => square === clickedSquare ? {...square, value: store.nextPlayer} : square)

      store.nextPlayer = store.nextPlayer === 'O' ? 'X' : 'O';
    }),
  }));

  console.log('[Render] GameBoard');

  return <section>
    <h1>Tic Tac React / MobX</h1>

    <div className="game-board"
         style={{
           gridTemplateColumns: `repeat(${BOARD_SIZE}, 40px)`,
           gridTemplateRows: `repeat(${BOARD_SIZE}, 40px)`,
         }}>
      {store.squares.map(square => <Square key={square.index} onClick={store.onSquareClick} item={square} />)}
    </div>

  </section>;
});
