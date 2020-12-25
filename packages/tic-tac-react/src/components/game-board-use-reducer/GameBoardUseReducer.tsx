import React, { FunctionComponent, useCallback, useReducer } from 'react';
import { Square, SquareItem } from '../square/Square';
import { BOARD_SIZE, GameState, INITIAL_STATE, log, USE_MEMO_WRAPPER } from 'common';

type Action = { type: 'CLICK_SQUARE', payload: SquareItem };

const gameStateReducer = (gameState: GameState, action: Action): GameState => {
  switch (action.type) {
    case 'CLICK_SQUARE':
      const clickedSquare = action.payload;
      return {
        squares: gameState.squares.map(square => square === clickedSquare ? {
          ...square,
          value: gameState.nextPlayer,
        } : square),
        nextPlayer: gameState.nextPlayer === 'O' ? 'X' : 'O',
      };
  }
  return gameState;
};

export const GameBoardUseReducer: FunctionComponent = () => {
  document.title = 'useReducer';

  const [gameState, dispatch] = useReducer(gameStateReducer, INITIAL_STATE);

  const onSquareClick = useCallback((clickedSquare: SquareItem) => {
    log('-------- onSquareClick --------');
    dispatch({ type: 'CLICK_SQUARE', payload: clickedSquare });
  }, [dispatch]);

  log('[Render] GameBoard');

  return <section>
    <h1>Tic Tac React / useReducer</h1>
    <p>Update Level: STATE</p>
    <p>memo(Square): {USE_MEMO_WRAPPER ? '✔️' : '❌'}</p>

    <div className="game-board"
         style={{
           gridTemplateColumns: `repeat(${BOARD_SIZE}, 40px)`,
           gridTemplateRows: `repeat(${BOARD_SIZE}, 40px)`,
         }}>
      {gameState.squares.map(square => <Square
        key={square.index}
        onClick={onSquareClick}
        item={square}
      />)}
    </div>

  </section>;
};
