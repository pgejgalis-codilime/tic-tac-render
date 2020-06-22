import {action} from 'mobx';
import React, {FunctionComponent} from 'react';
import {BOARD_SIZE, createGameState} from 'common';
import {Square, SquareItem} from '../square/Square';
import {useLocalStore, useObserver} from "mobx-react-lite";


export const GameBoardMobX: FunctionComponent = () => {
  const store = useLocalStore(() => ({
    ...createGameState(),  // nextPlayer: 'O',
                           // squares: [ {index,value}... ],
    setPlayerChoice: action((clickedSquare: SquareItem) => {
      clickedSquare.value = store.nextPlayer;

      // IMMUTABLE
      // store.squares = store.squares.map(square => square === clickedSquare ? {...square, value: store.nextPlayer} : square)

      // MUTABLE
      store.nextPlayer = store.nextPlayer === 'O' ? 'X' : 'O'
    })
  }));

  return useObserver(() => <section>
    <h1>Tic Tac React / useState</h1>

    <div className="game-board"
         style={{
           gridTemplateColumns: `repeat(${BOARD_SIZE}, 40px)`,
           gridTemplateRows: `repeat(${BOARD_SIZE}, 40px)`
         }}>
      {store.squares.map(square => <Square key={square.index} onClick={store.setPlayerChoice} item={square}/>)}
    </div>

  </section>)
}
