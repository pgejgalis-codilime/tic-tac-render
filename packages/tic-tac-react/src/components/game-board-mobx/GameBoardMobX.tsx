import React, { FunctionComponent } from 'react';
import { action } from 'mobx';
import { observer, useLocalStore } from 'mobx-react-lite';
import { BOARD_SIZE, INITIAL_STATE, log, UPDATE_LEVEL } from 'common';
import { Square, SquareItem } from './Square';


export const GameBoardMobX: FunctionComponent = observer(() => {
  document.title = 'MobX';

  const store = useLocalStore(() => ({
    gameState: INITIAL_STATE,
    onSquareClick: action((clickedSquare: SquareItem) => {
      log('-------- onSquareClick --------');

      switch (UPDATE_LEVEL) {
        case 'VALUE': {
          clickedSquare.value = store.gameState.nextPlayer;
          store.gameState.nextPlayer = store.gameState.nextPlayer === 'O' ? 'X' : 'O';
          break;
        }

        case 'ITEM': {
          const clickedSquareArrayIndex = store.gameState.squares
            .findIndex(square => square.index === clickedSquare.index);
          store.gameState.squares.splice(clickedSquareArrayIndex, 1, {
            index: clickedSquare.index,
            value: store.gameState.nextPlayer,
          });
          store.gameState.nextPlayer = store.gameState.nextPlayer === 'O' ? 'X' : 'O';
          break;
        }

        case 'ARRAY': {
          store.gameState.squares = store.gameState.squares.map(square => square === clickedSquare ? {
            ...square,
            value: store.gameState.nextPlayer,
          } : square);
          store.gameState.nextPlayer = store.gameState.nextPlayer === 'O' ? 'X' : 'O';
          break;
        }

        case 'STATE': {
          store.gameState = {
            squares: store.gameState.squares.map(square => square === clickedSquare ? {
              ...square,
              value: store.gameState.nextPlayer,
            } : square),
            nextPlayer: store.gameState.nextPlayer === 'O' ? 'X' : 'O',
          };
          break;
        }
      }
    }),
  }));

  log('[Render] GameBoard');

  const { gameState } = store;

  return <section>
    <h1>Tic Tac React / MobX</h1>
    <p>Update Level: {UPDATE_LEVEL}</p>

    <div className="game-board"
         style={{
           gridTemplateColumns: `repeat(${BOARD_SIZE}, 40px)`,
           gridTemplateRows: `repeat(${BOARD_SIZE}, 40px)`,
         }}>
      {gameState.squares.map(square => <Square
        key={square.index}
        onClick={store.onSquareClick}
        item={square}
      />)}
    </div>

  </section>;
});
