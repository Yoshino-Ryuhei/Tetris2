import { FC, memo } from 'react';
import { ArrangeColorBlocks } from './ArrangeColorBlock';

export const SMino: FC = memo(() => {
  return (
    <ArrangeColorBlocks
      color={7}
      array={[
        [0, 1, 1],
        [1, 1, 0],
      ]}
      mino={'SMino'}
    />
  );
});
