# Tic Tac Render

Comparing rerendering between:

 * React/useState
 * React/useReducer
 * React/MobX
 * Vue

and between different update levels (if available):
 * VALUE
 * ITEM
 * ARRAY
 * STATE

# Installation

The project uses [Lerna](https://lerna.js.org/) to re-use modules from `pakages/common`. Before you start you need to
install all packages:

```
npm ci && npm run lerna-bootstrap
```

# Dev Mode

Use this mode to play around with  `UPDATE_LEVEL`, `BOARD_SIZE` or `USE_MEMO_WRAPPER` from `packages/common/index.ts`

```
npm run start-dev
```

Script above will open React and Vue dev servers.

# Prod Mode

Use this mode to benchmark production builds.

Run http servers once… 
```
npm run serve-built
```

… then you may build many times all packages by:
```
npm run build
```

