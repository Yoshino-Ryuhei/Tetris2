import { memo } from 'react';
import { SBlock } from '../../styles/SBlock';
import { SRow } from '../../styles/SRow';
import { isCanMove } from '../../App';
import { NextMino } from '../organisms/NextMino';
import { Mino } from '../../class/Mino';
import { Box, Flex } from '@chakra-ui/react';
import { HoldMino } from '../organisms/HoldMino';
import { CircleButton } from '../atom/CircleButton';
import { PrimaryButton } from '../atom/PrimaryButton';

type Props = {
  newGame: Array<Array<number>>;
  holdMino: Mino | null;
  nxMinoList: Array<Mino>;
  onGameStart: () => void;
  onGameReset: () => void;
  onClickLeft: () => void;
  onClickRight: () => void;
  onClickDown: () => void;
  onClickRotate: () => void;
  onClickHold: () => void;
};

export const TetrisPage = memo((props: Props) => {
  const {
    newGame,
    holdMino,
    nxMinoList,
    onGameStart,
    onGameReset,
    onClickLeft,
    onClickRight,
    onClickDown,
    onClickRotate,
    onClickHold,
  } = props;
  let rows: any[] = [];

  newGame.forEach((y, yIndex) => {
    const cols = y.map((column: any, index: number) => (
      <SBlock className={`col-${column}`} key={index} color={y[index]} />
    ));
    rows.push(
      <SRow className="tetris-board_row" key={yIndex}>
        {cols}
      </SRow>
    );
  });

  return (
    <Flex>
      <HoldMino holdMino={holdMino} />
      <Box className="tetris-board" height={'700px'} width={'500px'}>
        <div className="tetris-board_board">{rows}</div>
        <Box display={'flex'} justifyContent={'center'} height={'100px'}>
          {!isCanMove ? (
            <PrimaryButton
              title={'Game Start'}
              onClick={onGameStart}
            ></PrimaryButton>
          ) : (
            <PrimaryButton
              title={'Game Reset'}
              onClick={onGameReset}
            ></PrimaryButton>
          )}
          <Box display={'flex'} justifyContent={'center'}>
            <Box className={'controller'}>
              <Box height={'60%'}>
                <CircleButton title={'←'} onClick={onClickLeft}></CircleButton>
                <CircleButton
                  title={'↺'}
                  onClick={onClickRotate}
                ></CircleButton>
                <CircleButton title={'→'} onClick={onClickRight}></CircleButton>
              </Box>
              <Box height={'40%'} float={'right'}>
                {/* <CircleButton title={'↓'} onClick={onClickDown}></CircleButton> */}
                <CircleButton title={'↓'} onClick={onClickDown}></CircleButton>
                <CircleButton title={'H'} onClick={onClickHold}></CircleButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <NextMino nxMinoList={nxMinoList} />
    </Flex>
  );
});
