import { FC, memo } from 'react';
import { SButton } from '../../styles/SButton';

type Props = {
  title: string;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { title, onClick } = props;

  return <SButton onClick={() => onClick()}>{title}</SButton>;
});
