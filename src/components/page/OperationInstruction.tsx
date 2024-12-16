import { Box, Flex } from '@chakra-ui/react';
import { memo } from 'react';

// 操作説明欄
export const OperationInstruction = memo(() => {
  return (
    <>
      <Box
        height="700px"
        width="1000px"
        margin={'10'}
        color="black"
        border={'1px solid'}
        borderColor="black"
        fontSize={'50px'}
      >
        <Flex direction="column" align={'center'} height={'700px'}>
          <Box
            width={'80%'}
            height={'20%'}
            margin={'10'}
            color="black"
            fontSize={'1.0em'}
            fontWeight={'700'}
            borderBottom={'1px solid'}
            alignContent={'center'}
          >
            {' '}
            操作方法
          </Box>
          <Flex direction="row" width={'100%'} height={'75%'}>
            <Box width={'50%'} borderRight={'1px solid'}>
              <Flex
                direction="column"
                align={'center'}
                height={'700px'}
                width={'100%'}
              >
                <Box
                  width={'100%'}
                  margin={'10'}
                  color="black"
                  fontSize={'40px'}
                  fontWeight={'500'}
                >
                  {' '}
                  キーボード
                </Box>
                <Box
                  width={'100%'}
                  margin={'10'}
                  color="black"
                  fontSize={'30px'}
                >
                  {' '}
                  d:左回転
                </Box>
                <Box
                  width={'100%'}
                  margin={'10'}
                  color="black"
                  fontSize={'30px'}
                >
                  {' '}
                  a:右移動
                </Box>
                <Box
                  width={'100%'}
                  margin={'10'}
                  color="black"
                  fontSize={'30px'}
                >
                  {' '}
                  w:ホールド
                </Box>
                <Box
                  width={'100%'}
                  margin={'10'}
                  color="black"
                  fontSize={'30px'}
                >
                  {' '}
                  →:右
                </Box>
                <Box
                  width={'100%'}
                  margin={'10'}
                  color="black"
                  fontSize={'30px'}
                >
                  {' '}
                  ←:左
                </Box>
                <Box
                  width={'100%'}
                  margin={'10'}
                  color="black"
                  fontSize={'30px'}
                >
                  {' '}
                  ↓:一段下
                </Box>
              </Flex>
            </Box>

            <Box width={'50%'}>
              <Flex
                direction="column"
                align={'center'}
                height={'700px'}
                width={'100%'}
              >
                <Box
                  width={'100%'}
                  margin={'10'}
                  color="black"
                  fontSize={'40px'}
                  fontWeight={'500'}
                >
                  {' '}
                  ボタン
                </Box>
                <Box
                  width={'100%'}
                  margin={'10'}
                  color="black"
                  fontSize={'30px'}
                >
                  {' '}
                  →:右
                </Box>
                <Box
                  width={'100%'}
                  margin={'10'}
                  color="black"
                  fontSize={'30px'}
                >
                  {' '}
                  ↺:右回転
                </Box>
                <Box
                  width={'100%'}
                  margin={'10'}
                  color="black"
                  fontSize={'30px'}
                >
                  {' '}
                  ←:左
                </Box>
                <Box
                  width={'100%'}
                  margin={'10'}
                  color="black"
                  fontSize={'30px'}
                >
                  {' '}
                  ↓:一番下
                </Box>
                <Box
                  width={'100%'}
                  margin={'10'}
                  color="black"
                  fontSize={'30px'}
                >
                  {' '}
                  H:ホールド
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
});
