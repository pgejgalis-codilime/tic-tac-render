export const BOARD_SIZE = 3;
export const UPDATE_LEVEL: UpdateLevel = 'STATE';
export const USE_MEMO_WRAPPER = false;

/**
 *   {
 *      nextPlayer: 'O',
 *      squares: [
 *        { index: '0x0', value: '' },
 *        { index: '0x1', value: '' },
 *        { index: '0x2', value: '' },
 *        { index: '1x0', value: '' },
 *        …
 *        { index: '2x2', value: '' },
 *    ],
 *   };
 */
export const INITIAL_STATE = createGameState();

function createGameState(): GameState {
  return {
    nextPlayer: 'O',
    squares: [...Array(BOARD_SIZE)].map((_, rowIndex) => {
      return [...Array(BOARD_SIZE)].map((_, colIndex) => ({
        index: createSquareIndex(rowIndex, colIndex),
        value: '',
      }));
    }).flat()
  }
}

export function createSquareIndex(rowIndex: number, squareIndex: number) {
  return `${rowIndex}x${squareIndex}`;
}

export function log(...args: any[]) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(...args);
  }
}

type UpdateLevel = 'VALUE' | 'ITEM' | 'ARRAY' | 'STATE';
export type SquareItem = { index: string, value: string };
export type GameState = {
  nextPlayer: 'O' | 'X';
  squares: Array<SquareItem>;
}
