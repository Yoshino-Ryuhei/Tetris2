import { FC, memo } from 'react';
import { ArrangeColorBlocks } from './ArrangeColorBlock';

export const OMino: FC = memo(() => {
  return (
    <ArrangeColorBlocks
      color={4}
      array={[
        [0, 1, 1, 0],
        [0, 1, 1, 0],
      ]}
      mino={'OMino'}
    />
  );
});
