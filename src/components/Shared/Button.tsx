import styled from 'styled-components';

const Button = styled.button.attrs(() => ({ 'data-testid': 'button' }))`
  max-width: 150px;
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

  &.answer-button {
    background-color: #2092ff;
  }
`;

export { Button };
