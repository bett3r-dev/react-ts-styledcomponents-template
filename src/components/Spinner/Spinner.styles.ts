import styled, { keyframes } from 'styled-components';

const spin = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner_Svg = styled.svg`
    color: var(--color-primary);
    margin-right: 0.75rem;
    margin-left: -0.25rem;
    animation: ${spin} 1s linear infinite;
    width: 1.25rem;
    height: 1.25rem;
`

export const Spinner_Circle = styled.circle`
    opacity: 0.25; 
`
export const Spinner_Path = styled.path`
    opacity: 0.75; 
`


  