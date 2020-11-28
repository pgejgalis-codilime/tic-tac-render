export const BOARD_SIZE = 3;
export const UPDATE_LEVEL: UpdateLevel = 'VALUE';
export const USE_MEMO_WRAPPER = true;
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

type UpdateLevel = 'VALUE' | 'ITEM' | 'ARRAY' | 'GAME_STATE';
export type SquareItem = { index: string, value: string };
export type GameState = {
  nextPlayer: 'O' | 'X';
  squares: Array<SquareItem>;
}
