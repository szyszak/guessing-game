import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Canvas } from './Canvas';
import { ProgressBar } from './ProgressBar';
import { Button } from '../Shared';
import {
  useSelector,
  randomAnswersSelector,
  incrementScore,
  // resetScore,
  scoreSelector,
} from '../../store';
import { NUMBER_OF_ROUNDS, INTERVAL, STEPS, NUMBER_OF_STEPS } from '../../config';

// STYLES
const Wrapper = styled.div`
  margin: auto;
  width: min(100%, 600px);
`;

const ButtonWrapper = styled.div`
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
  const score = useSelector(scoreSelector);

  const [currentStep, setCurrentStep] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);

  const history = useHistory();
  const dispatch = useDispatch();

  // GAME LOGIC
  useEffect(() => {
    if (currentRound === NUMBER_OF_ROUNDS) {
      return history.push('./');
    }
  }, [currentRound, history, score]);

  useEffect(() => {
    let timer: number;

    if (currentStep < NUMBER_OF_STEPS - 1) {
      timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, INTERVAL);
    } else if (currentRound < NUMBER_OF_ROUNDS) {
      setCurrentRound(currentRound + 1);
      setCurrentStep(0);
    }

    return () => clearTimeout(timer);
  }, [currentStep, currentRound, history, score]);

  const handleButtonClick = (isCorrectAnswer: boolean) => {
    if (isCorrectAnswer) {
      dispatch(incrementScore(10));
    }

    setCurrentStep(0);
    setCurrentRound(currentRound + 1);
  };

  // game over, don't render anything
  if (currentRound === NUMBER_OF_ROUNDS) {
    return null;
  }

  return (
    <Wrapper>
      <Canvas imgPath={answers[currentRound].imgPath} step={STEPS[currentStep]} />

      <ProgressBar step={STEPS[currentStep]} />

      <ButtonWrapper>
        <Button
          className="answer-button"
          onClick={() => handleButtonClick(answers[currentRound].answers[0].correct)}
        >
          {answers[currentRound].answers[0].answer}
        </Button>

        <Button
          className="answer-button"
          onClick={() => handleButtonClick(answers[currentRound].answers[1].correct)}
        >
          {answers[currentRound].answers[1].answer}
        </Button>

        <Button
          className="answer-button"
          onClick={() => handleButtonClick(answers[currentRound].answers[2].correct)}
        >
          {answers[currentRound].answers[2].answer}
        </Button>

        <Button
          className="answer-button"
          onClick={() => handleButtonClick(answers[currentRound].answers[3].correct)}
        >
          {answers[currentRound].answers[3].answer}
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export { GamePage };
