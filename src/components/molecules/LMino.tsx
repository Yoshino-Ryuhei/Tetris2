import { FC, memo } from 'react';
import { ArrangeColorBlocks } from './ArrangeColorBlock';

export const LMino: FC = memo(() => {
  return (
    <ArrangeColorBlocks
      color={6}
      array={[
        [0, 0, 1],
        [1, 1, 1],
      ]}
      mino={'LMino'}
    />
  );
});
