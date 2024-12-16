import { FC, memo } from 'react';
import { ArrangeColorBlocks } from './ArrangeColorBlock';

export const IMino: FC = memo(() => {
  return (
    <ArrangeColorBlocks
      color={3}
      array={[
        [1, 1, 1, 1],
        [0, 0, 0, 0],
      ]}
      mino={'IMino'}
    />
  );
});
