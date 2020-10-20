export const BOARD_SIZE = 3;

export type SquareItem = { index: string, value: string };
export type GameState = {
  nextPlayer: 'O' | 'X';
  squares: Array<SquareItem>;
}

export function createGameState(): GameState {
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
