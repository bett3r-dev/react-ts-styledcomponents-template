import styled from 'styled-components';

export const Button_Base = styled.button`
    display: flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
    align-items: center;
    border-radius: 0.125rem;
    border-style: none;
    cursor: pointer;
    justify-content: center;

    &:focus {
        outline: 0;
      }
`;

export const Button_Plain = styled.button`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
`
export const Button_Primary = styled(Button_Base)`
  background-color: var(--color-primary);
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  color: #ffffff;

  &:hover {
    background-color: var(--color-button-hover);
  }
`

export const Button_Secondary = styled(Button_Base)`
color: var(--color-primary);
  background-color: var(--color-button-secondary);
  border-color: var(--color-primary);
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border-width: 1px;
  &:hover {
    background-color: var(--color-button-secondary-hover);
  }
`
export const Button_Disabled= styled(Button_Base)`
    background-color: var(--color-disabled);
    color: #ffffff;
    cursor: default;
`

export const Icon_Primary = styled(Button_Primary)`
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  align-items: center;
  border-radius: 9999px;
  &:hover {
    background-color: var(--color-button-hover);
  }
`
export const Icon_Secondary = styled(Button_Secondary)`
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  align-items: center;
  border-radius: 9999px;
  &:hover {
    background-color: var(--color-button-secondary-hover);
  }
`
export const Icon_Disabled = styled(Button_Disabled)`
    display: flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
    align-items: center;
    border-radius: 9999px;
`