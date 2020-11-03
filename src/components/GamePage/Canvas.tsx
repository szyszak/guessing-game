import React, { useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';

// TYPES
interface ICanvasProps {
  imgPath: string;
  step: number;
}

// STYLES
const StyledCanvas = styled.canvas`
  display: block;
  margin: auto;
  margin-bottom: 10px;
  width: 100%;
`;

// COMPONENT
const Canvas: React.FC<ICanvasProps> = ({ imgPath, step }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;

    const img = new Image();
    img.src = imgPath;

    const context = canvas!.getContext('2d');

    img.onload = () => {
      const width = img.width;
      const height = img.height;

      canvas!.width = width;
      canvas!.height = height;

      const percent = step;

      const scaledWidth = width * percent;
      const scaledHeight = height * percent;

      // disable smoothing to get that crispy, pixelated look
      context!.imageSmoothingEnabled = false;

      // render image smaller
      context!.drawImage(img, 0, 0, scaledWidth, scaledHeight);

      // stretch image onto larger context
      context!.drawImage(canvas!, 0, 0, scaledWidth, scaledHeight, 0, 0, width, height);
    };
  }, [imgPath, step]);

  return <StyledCanvas ref={canvasRef} />;
};

export { Canvas };
