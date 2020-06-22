import React, { FunctionComponent, memo } from 'react';

export type SquareItem = { index: string, value: string };

type Props = {
  onClick: (item: SquareItem) => void;
  item: SquareItem;
}

export const Square: FunctionComponent<Props> = memo(({onClick, item}) => {
  const emitOnClick = ()=> {
    onClick(item);
  };
  console.log('Render', item.index);
  return <div className="square" onClick={emitOnClick}>{item.value}</div>
})
