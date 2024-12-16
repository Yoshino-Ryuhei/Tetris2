import { FC, memo } from 'react';
import { SBlock } from '../../styles/SBlock';
import { SRow } from '../../styles/SRow';

type Props = {
  color: number;
  array: Array<Array<number>>;
  mino?: string;
};

export const ArrangeColorBlocks: FC<Props> = memo((props) => {
  const { color, array, mino } = props;

  let rows: any[] = [];
  array.forEach((y, yIndex) => {
    const cols = y.map((column: any, index: number) => (
      <SBlock
        className={`col-${column}`}
        key={index}
        color={column ? color : 9}
        isBorder={column ? false : true}
      />
    ));
    rows.push(
      <SRow className={mino} key={yIndex}>
        {cols}
      </SRow>
    );
  });
  return rows;
});
