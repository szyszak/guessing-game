import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { INTERVAL, NUMBER_OF_STEPS, NUMBER_OF_ROUNDS } from '../../config';

// TYPES
interface IProgressBarProps {
  step: number;
}

// STYLES
const animation = keyframes`
  0% {
    transform: scaleX(0);
  }

  100% {
    transform: scaleX(1);
  }
`;

const Outer = styled.div`
  width: 100%;
  border: 1px solid #3d3d3d;
  border-radius: 10px;
  background-color: #ffffff;
`;

const Inner = styled.div`
  /* transform: scaleX(0); */
  height: 10px;
  background-color: #00e803;
  transform-origin: left;
  animation: ${animation};
  animation-duration: ${INTERVAL}ms;
  animation-timing-function: linear;
  /* animation-play-state: paused; */
  /* animation-fill-mode: none; */
  /* animation-iteration-count: ${NUMBER_OF_STEPS * NUMBER_OF_ROUNDS}; */
`;

// COMPONENT
const ProgressBar: React.FC<IProgressBarProps> = ({ step }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    console.log(step);
    setCurrentStep(step);
  }, [step]);

  return (
    <Outer>
      <Inner />
    </Outer>
  );
};

export { ProgressBar };
