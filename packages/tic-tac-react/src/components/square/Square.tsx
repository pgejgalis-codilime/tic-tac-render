import React, { FunctionComponent, memo } from 'react';
import { log, USE_MEMO_WRAPPER } from 'common';

const Square_: FunctionComponent<Props> = ({ onClick, item }) => {
  const emitOnClick = () => {
    onClick(item);
  };
  log('[Render]', item.index);
  return <div className="square" onClick={emitOnClick}>{item.value}</div>;
};

export const Square = USE_MEMO_WRAPPER ? memo(Square_) : Square_;

export type SquareItem = { index: string, value: string };

type Props = {
  onClick: (item: SquareItem) => void;
  item: SquareItem;
}
