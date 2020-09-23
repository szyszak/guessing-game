import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Canvas } from './Canvas';
import { ProgressBar } from './ProgressBar';
import { Button } from '../Shared';
import { useSelector, randomAnswersSelector } from '../../store';
import { NUMBER_OF_ROUNDS, INTERVAL, STEPS, NUMBER_OF_STEPS } from '../../config';

// STYLES
const Wrapper = styled.div`
  width: 300px;
  margin: auto;
  margin-top: 20px;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  gap: 10px;
`;

// COMPONENT
const GamePage: React.FC = () => {
  const answers = useSelector(randomAnswersSelector);
  console.log(answers);

  const [currentStep, setCurrentStep] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);

  const history = useHistory();

  useEffect(() => {
    if (currentStep < NUMBER_OF_STEPS - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, INTERVAL);
    } else {
      setCurrentRound(currentRound + 1);
      setCurrentStep(0);
    }
  }, [currentStep, currentRound]);

  useEffect(() => {
    if (currentRound === 9) {
      history.push('./');
    }
  });

  return (
    <>
      <Canvas imgPath={answers[currentRound].imgPath} step={STEPS[currentStep]} />

      <ProgressBar />

      <Wrapper>
        <Button className="answer-button">{answers[currentRound].answers[0].answer}</Button>
        <Button className="answer-button">{answers[currentRound].answers[1].answer}</Button>
        <Button className="answer-button">{answers[currentRound].answers[2].answer}</Button>
        <Button className="answer-button">{answers[currentRound].answers[3].answer}</Button>
      </Wrapper>
    </>
  );
};

export { GamePage };
