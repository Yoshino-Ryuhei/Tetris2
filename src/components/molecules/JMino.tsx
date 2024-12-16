import { FC, memo } from 'react';
import { ArrangeColorBlocks } from './ArrangeColorBlock';

export const JMino: FC = memo(() => {
  return (
    <ArrangeColorBlocks
      color={5}
      array={[
        [1, 0, 0],
        [1, 1, 1],
      ]}
      mino={'JMino'}
    />
  );
});
