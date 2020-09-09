import styled from 'styled-components';

const Button = styled.button`
  max-width: 120px;
  width: 100%;
  padding: 12px 0;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  &.start-button {
    margin-top: 20px;
    background-color: #79fc96;
  }
`;

export { Button };
