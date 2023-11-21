import styled from 'styled-components';
import { ContainerSizeTypes } from './types';

export const ContainerDiv = styled.div<{size?: ContainerSizeTypes}>`
${(props) =>
    props.size &&
    `
      @media (min-width: ${sizeMap[props.size]}px) {
        width: 100%;
      }
    `
}
`;
const sizeMap = {
    xs: 640,
    sm: 768,
    md: 1024,
    lg: 1280,
    xl: 1536,
}