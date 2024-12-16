import { FC, memo } from 'react';
import { ArrangeColorBlocks } from './ArrangeColorBlock';

export const TMino: FC = memo(() => {
  return (
    <ArrangeColorBlocks
      color={2}
      array={[
        [0, 1, 0],
        [1, 1, 1],
      ]}
      mino={'TMino'}
    />
  );
});
