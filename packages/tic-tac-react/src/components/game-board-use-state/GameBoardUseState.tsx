import React, { FunctionComponent, useCallback, useState } from 'react';
import { Square, SquareItem } from '../square/Square';
import { BOARD_SIZE, createGameState } from 'common';


export const GameBoardUseState: FunctionComponent = () => {
  const [gameState, setGameState] = useState(createGameState());

  const onSquareClick = useCallback((clickedSquare: SquareItem) => {
    console.log('-------- onSquareClick --------');
    setGameState(gameState => ({
      squares: gameState.squares.map(square => square === clickedSquare ? {
        ...square,
        value: gameState.nextPlayer,
      } : square),
      nextPlayer: gameState.nextPlayer === 'O' ? 'X' : 'O',
    }));
  }, [setGameState]);

  console.log('[Render] GameBoard');

  return <section>
    <h1>Tic Tac React / useState</h1>

    <div className="game-board"
         style={{
           gridTemplateColumns: `repeat(${BOARD_SIZE}, 40px)`,
           gridTemplateRows: `repeat(${BOARD_SIZE}, 40px)`,
         }}>
      {gameState.squares.map(square => <Square key={square.index} onClick={onSquareClick} item={square} />)}
    </div>

  </section>;
};
