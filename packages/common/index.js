var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
export var BOARD_SIZE = 3;
export function createGameState() {
    return {
        nextPlayer: 'O',
        squares: __spreadArrays(Array(BOARD_SIZE)).map(function (_, rowIndex) { return __spreadArrays(Array(BOARD_SIZE)).map(function (_, colIndex) { return ({
            index: createSquareIndex(rowIndex, colIndex),
            value: ''
        }); }); }).flat()
    };
}
export function createSquareIndex(rowIndex, squareIndex) {
    return rowIndex + "x" + squareIndex;
}
//# sourceMappingURL=index.js.map