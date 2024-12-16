import styled from 'styled-components';

export const SButton = styled.button`
  color: #fff;
  background-color: #ABBB6C;
  border-bottom: 5px solid #889D35;
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
  box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
  font-size: 1.6rem;
  font-weight: 700;
  margin: 5px;
  
  &:focus {
      outline-color: #889D35;
  }
    

  &:hover {
  margin-top: 8px;
  color: #fff;
  background: #ABBB6C;
  border-bottom: 2px solid #889D35;
  }
`;
