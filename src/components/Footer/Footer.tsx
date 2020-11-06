import React from 'react';
import styled from 'styled-components';

// STYLES
const StyledFooter = styled.footer`
  margin-top: auto;
`;

// COMPONENT
const Footer = () => (
  <StyledFooter>
    <p>
      All pictures provided by <a href="https://unsplash.com/">Unsplash</a>
    </p>
  </StyledFooter>
);

export { Footer };
