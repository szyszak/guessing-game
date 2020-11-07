import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: inline-block;
  max-width: 150px;
  width: 100%;
  margin-top: 20px;
  padding: 12px 0;
  background-color: #79fc96;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  cursor: pointer;
`;

export { StyledLink as Link };
