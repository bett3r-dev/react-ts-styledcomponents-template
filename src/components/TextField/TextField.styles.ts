import styled from 'styled-components';


export const Textfield_Base = styled.div`
    display: flex;
    margin-top: 0.75rem;
    flex-direction: column;
    width: 100%;
`;
export const Textfield_Input_Base = styled.input`
    border-style:solid;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 0.75rem;
    background-color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    border-radius: 0.125rem;
    border-width: 1px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border-color: var(--color-disabled)

    &:focus {
        outline: 0;
        border-width: 2px;
        border-color: var(--color-primary);
        --ring-color: var(--color-primary); 
    }
`;
export const Input_Label_Base = styled.label`
    padding-bottom: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 700;
    color: var(--color-text-header)
`;
export const Icon_Textfield_Base = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
`;
export const Icon_Textfield_Input_Base = styled.input`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    background-color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    border-radius: 0.125rem;
    border-width: 1px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    color: var(--color-text-input)

    &:focus {
        outline: 0;
        border-color: var(--color-primary);
        --ring-color: var(--color-primary); 
    }
`;

export const Icon_Textfield_Icon_Base = styled.div`
    display: inline-flex;
    position: absolute;
    top: 0;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 100%;
`
  