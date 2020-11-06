import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button } from '../Shared';

// STYLES
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
`;

const H1 = styled.h1``;

const H2 = styled.h2``;

const P = styled.p`
  max-width: 800px;
`;

// COMPONENT
const HomePage = (): JSX.Element => {
  const history = useHistory();

  return (
    <Wrapper>
      <H1>Guessing Game</H1>

      <H2>How to play:</H2>

      <P>
        You'll see pixelated pictures and four buttons with answers. Pictures will become less
        pixelated as time goes by. Your task is to indentify the picture and choose the right answer
        as soon as you can.
      </P>

      <P>
        Your score will depend on how fast you are. Press the start button when you're ready to
        play.
      </P>

      <Button onClick={() => history.push('/game')} className="start-button">
        Start
      </Button>
    </Wrapper>
  );
};

export { HomePage };
