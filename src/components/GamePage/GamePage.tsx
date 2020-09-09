import React from 'react';
import { useSelector } from '../../store';
import { randomAnswersSelector } from '../../store';

const GamePage = () => {
  const answers = useSelector(randomAnswersSelector);

  console.table(answers);

  return <h1>GAME PAGE</h1>;
};

export { GamePage };
