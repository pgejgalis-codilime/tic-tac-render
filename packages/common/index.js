var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
export var BOARD_SIZE = 3;
export var UPDATE_LEVEL = 'STATE';
export var USE_MEMO_WRAPPER = false;
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
export var INITIAL_STATE = createGameState();
function createGameState() {
    return {
        nextPlayer: 'O',
        squares: __spreadArrays(Array(BOARD_SIZE)).map(function (_, rowIndex) {
            return __spreadArrays(Array(BOARD_SIZE)).map(function (_, colIndex) { return ({
                index: createSquareIndex(rowIndex, colIndex),
                value: '',
            }); });
        }).flat()
    };
}
export function createSquareIndex(rowIndex, squareIndex) {
    return rowIndex + "x" + squareIndex;
}
export function log() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (process.env.NODE_ENV !== 'production') {
        console.log.apply(console, args);
    }
}
//# sourceMappingURL=index.js.map