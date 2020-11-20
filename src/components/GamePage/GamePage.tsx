import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Canvas } from './Canvas';
import { ProgressBar } from './ProgressBar';
import { Button } from '../shared';
import { incrementScore, resetScore, answers } from '../../store';
import { calculateScore, pickRandomItems } from '../../util';
import { NUMBER_OF_ROUNDS, INTERVAL, STEPS, NUMBER_OF_STEPS } from '../../config';

// STYLES
const Wrapper = styled.div`
  margin: auto;
  padding-top: 60px;
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
  const [randomAnswers] = useState(pickRandomItems(answers, NUMBER_OF_ROUNDS));
  const [currentStep, setCurrentStep] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);

  const history = useHistory();
  const dispatch = useDispatch();

  // GAME LOGIC
  useEffect(() => {
    dispatch(resetScore());
  }, [dispatch]);

  useEffect(() => {
    if (currentRound === NUMBER_OF_ROUNDS) {
      return history.push('./score');
    }
  }, [currentRound, history]);

  useEffect(() => {
    let timer: number;

    if (currentStep < NUMBER_OF_STEPS - 1) {
      timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, INTERVAL);
    } else if (currentStep === NUMBER_OF_STEPS - 1) {
      // don't start next round until player makes a choice
      return;
    } else if (currentRound < NUMBER_OF_ROUNDS) {
      setCurrentRound(currentRound + 1);
      setCurrentStep(0);
    }

    return () => clearTimeout(timer);
  }, [currentStep, currentRound]);

  const handleButtonClick = (isCorrectAnswer: boolean) => {
    if (isCorrectAnswer) {
      const calculatedScore = calculateScore(currentStep);

      dispatch(incrementScore(calculatedScore));
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
      <Canvas imgPath={randomAnswers[currentRound].imgPath} step={STEPS[currentStep]} />

      <ProgressBar step={STEPS[currentStep]} />

      <ButtonWrapper>
        <Button
          className="answer-button"
          onClick={() => handleButtonClick(randomAnswers[currentRound].answers[0].correct)}
        >
          {randomAnswers[currentRound].answers[0].answer}
        </Button>

        <Button
          className="answer-button"
          onClick={() => handleButtonClick(randomAnswers[currentRound].answers[1].correct)}
        >
          {randomAnswers[currentRound].answers[1].answer}
        </Button>

        <Button
          className="answer-button"
          onClick={() => handleButtonClick(randomAnswers[currentRound].answers[2].correct)}
        >
          {randomAnswers[currentRound].answers[2].answer}
        </Button>

        <Button
          className="answer-button"
          onClick={() => handleButtonClick(randomAnswers[currentRound].answers[3].correct)}
        >
          {randomAnswers[currentRound].answers[3].answer}
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export { GamePage };
