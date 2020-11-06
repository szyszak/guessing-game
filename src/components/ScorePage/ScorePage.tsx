import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, scoreSelector } from '../../store';
import { Button } from '../Shared';

// STYLES
const Wrapper = styled.div`
  padding-top: 120px;
`;

// COMPONENT
const ScorePage = () => {
  const history = useHistory();
  const score = useSelector(scoreSelector);

  return (
    <Wrapper>
      <h1>GAME OVER</h1>
      <p>Your score is: {score}.</p>

      <Button onClick={() => history.push('/')} className="start-button">
        go back
      </Button>
    </Wrapper>
  );
};

export { ScorePage };
