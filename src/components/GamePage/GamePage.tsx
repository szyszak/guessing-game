import React from 'react';
import { Canvas } from './Canvas';
import { useSelector, randomAnswersSelector } from '../../store';

const GamePage = () => {
  const answers = useSelector(randomAnswersSelector);

  return (
    <>
      <h1>GAME PAGE</h1>
      <Canvas imgPath={answers[0].imgPath} step={0.2} />
    </>
  );
};

export { GamePage };
