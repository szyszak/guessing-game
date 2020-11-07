import React from 'react';
import styled from 'styled-components';
import { useSelector, scoreSelector } from '../../store';
import { Link } from '../shared';

// STYLES
const Wrapper = styled.div`
  padding-top: 120px;
`;

// COMPONENT
const ScorePage = () => {
  const score = useSelector(scoreSelector);

  return (
    <Wrapper>
      <h1>GAME OVER</h1>
      <p>Your score is: {score}.</p>

      <Link to="/">go back</Link>
    </Wrapper>
  );
};

export { ScorePage };
