import styled from 'styled-components';

interface StyleProps {
  color: number;
  isBorder?: boolean;
}

// フィールドから数字を取得し、そのインデックスに対応する色にする
const ColorArray = [
  'black',
  'gray',
  'purple',
  'aqua',
  'yellow',
  'blue',
  'orange',
  'lime',
  'red',
];

export const SBlock = styled.div<StyleProps>`
    width: 30px;
    height: 30px;
    ${(props) => {
      return `background-color: ${ColorArray[props.color]};`;
    }}
    ${(props) => {
      return props.isBorder ? `padding: 1px;` : `border: 1px solid black;`;
    }} 
`;
