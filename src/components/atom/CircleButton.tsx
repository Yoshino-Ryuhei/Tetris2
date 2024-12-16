import { FC, memo } from 'react';
import { SCircleButton } from '../../styles/SCircleButton';

type Props = {
  title: string;
  onClick: () => void;
};

export const CircleButton: FC<Props> = memo((props) => {
  const { title, onClick } = props;

  return <SCircleButton onClick={() => onClick()}>{title}</SCircleButton>;
});
