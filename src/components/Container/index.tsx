import { ContainerDiv } from './Container.styles';
import { ContainerTypes } from './types';

export default function Container({children, size, padding, customStyles} : ContainerTypes) {
  return (
    <ContainerDiv
         size={size}
         style={{padding: padding, ...customStyles}}>
        {children}
    </ContainerDiv>
  )
}
