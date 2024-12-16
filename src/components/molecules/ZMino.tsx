import { FC, memo } from 'react';
import { ArrangeColorBlocks } from './ArrangeColorBlock';

export const ZMino: FC = memo(() => {
  return (
    <ArrangeColorBlocks
      color={8}
      array={[
        [1, 1, 0],
        [0, 1, 1],
      ]}
      mino={'ZMino'}
    />
  );
});
