import React, { FunctionComponent, useCallback, useState } from 'react';
import { Square, SquareItem } from '../square/Square';
import { BOARD_SIZE, INITIAL_STATE, log, USE_MEMO_WRAPPER } from 'common';


export const GameBoardUseState: FunctionComponent = () => {
  const [gameState, setGameState] = useState(INITIAL_STATE);

  const onSquareClick = useCallback((clickedSquare: SquareItem) => {
    log('-------- onSquareClick --------');
    setGameState(gameState => {
      return {
        squares: gameState.squares.map(square => square === clickedSquare ? {
          ...square,
          value: gameState.nextPlayer,
        } : square),
        nextPlayer: gameState.nextPlayer === 'O' ? 'X' : 'O',
      };
    });
  }, [setGameState]);

  log('[Render] GameBoard');

  return <section>
    <h1>Tic Tac React / useState</h1>
    <p>Update Level: GAME_STATE</p>
    <p>memo(Square): {USE_MEMO_WRAPPER ? '✔️' : '❌'}</p>

    <div className="game-board"
         style={{
           gridTemplateColumns: `repeat(${BOARD_SIZE}, 40px)`,
           gridTemplateRows: `repeat(${BOARD_SIZE}, 40px)`,
         }}>
      {gameState.squares.map(square => <Square key={square.index} onClick={onSquareClick} item={square} />)}
    </div>

  </section>;
};
