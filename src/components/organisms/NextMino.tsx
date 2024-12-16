import { Box, Flex } from '@chakra-ui/react';
import { memo } from 'react';
import { TMino } from '../molecules/TMino';
import { JMino } from '../molecules/JMino';
import { LMino } from '../molecules/LMino';
import { IMino } from '../molecules/IMino';
import { OMino } from '../molecules/OMino';
import { SMino } from '../molecules/SMino';
import { ZMino } from '../molecules/ZMino';
import { Mino } from '../../class/Mino';

type Props = {
  nxMinoList: Array<Mino>;
};

// フィールドから数字を取得し、そのインデックスに対応するミノにする
export const ColorArray = [
  'no use',
  'no use',
  <TMino />,
  <IMino />,
  <OMino />,
  <JMino />,
  <LMino />,
  <SMino />,
  <ZMino />,
];

export const NextMino = memo((props: Props) => {
  const { nxMinoList } = props;
  return (
    <>
      <Box height="700px" width="250px" margin={'10'} className={'NextMino'}>
        <Flex
          direction="column"
          align={'left'}
          height={'700px'}
          width={'250px'}
        >
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
            justifyContent={'start'}
          >
            Next
            <Box height={'10%'} />
            <Box
              display={'block'}
              alignContent={'center'}
              justifyContent={'center'}
            >
              {ColorArray[nxMinoList[0].shape]}
            </Box>
          </Box>
          <Box
            height={'20%'}
            width={'50%'}
            margin={'10'}
            color="black"
            border={'1px solid'}
            borderColor="black"
            alignContent={'center'}
          >
            {ColorArray[nxMinoList[1].shape]}
          </Box>
          <Box
            height={'20%'}
            width={'50%'}
            margin={'10'}
            color="black"
            border={'1px solid'}
            borderColor="black"
            alignContent={'center'}
          >
            {ColorArray[nxMinoList[2].shape]}
          </Box>
          <Box
            height={'20%'}
            width={'50%'}
            margin={'10'}
            color="black"
            border={'1px solid'}
            borderColor="black"
            alignContent={'center'}
          >
            {ColorArray[nxMinoList[3].shape]}
          </Box>
        </Flex>
      </Box>
    </>
  );
});
