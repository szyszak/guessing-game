import React from 'react';
import styled, { keyframes } from 'styled-components';
import { INTERVAL, NUMBER_OF_STEPS } from '../../config';

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
  height: 10px;
  background-color: #00e803;
  transform-origin: left;
  animation: ${animation};
  animation-duration: ${INTERVAL}ms;
  animation-timing-function: linear;
  animation-iteration-count: ${NUMBER_OF_STEPS};
`;

// COMPONENT
const ProgressBar: React.FC = () => {
  return (
    <Outer>
      <Inner />
    </Outer>
  );
};

export { ProgressBar };
