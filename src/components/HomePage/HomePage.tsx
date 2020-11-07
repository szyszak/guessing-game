import React from 'react';
import styled from 'styled-components';
import { Link } from '../shared';

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
  return (
    <Wrapper>
      <H1>Guessing Game</H1>

      <H2>How to play:</H2>

      <P>
        You'll see pixelated pictures and four buttons containing answers. Pictures will become less
        pixelated as time goes by. Your task is to indentify the picture and choose the right answer
        as soon as you can.
      </P>

      <P>
        Your score will depend on how fast you are. Press the START button when you're ready to
        play.
      </P>

      <Link to="/game">Start</Link>
    </Wrapper>
  );
};

export { HomePage };
