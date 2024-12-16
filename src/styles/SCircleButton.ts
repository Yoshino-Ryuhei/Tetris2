import styled from 'styled-components';
import { SButton } from './SButton';

export const SCircleButton = styled(SButton)`
  border-radius: 50%;
  font-size: 1.0em;
  font-weight: none;

  &:hover {
    margin-top: 5px;
    color: #fff;
    background: #ABBB6C;
    border-bottom: 2px solid #889D35;
    }
`;
