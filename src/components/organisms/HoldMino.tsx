import { Box, Flex } from '@chakra-ui/react';
import { memo } from 'react';
import { Mino } from '../../class/Mino';
import { ColorArray } from './NextMino';

type Props = {
  holdMino: Mino | null;
};

export const HoldMino = memo((props: Props) => {
  const { holdMino } = props;

  return (
    <Box height="700px" width="250px" margin={'10'}>
      <Flex direction="column" align={'left'} height={'700px'}>
        <Box
          height={'28%'}
          width={'50%'}
          margin={'10'}
          color="black"
          border={'1px solid'}
          borderColor="black"
          fontSize={'1.5em'}
          fontWeight={'700'}
          fontFamily={'inherit'}
          alignContent={'start'}
          alignSelf={'end'}
        >
          Hold
          <Box height={'10%'} />
          <Box
            display={'block'}
            alignContent={'center'}
            justifyContent={'center'}
          >
            {holdMino == null ? '' : ColorArray[holdMino.shape]}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
});
