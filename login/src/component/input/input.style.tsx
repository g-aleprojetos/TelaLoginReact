import styled from 'styled-components';
import cores from 'resources/cores';

export interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement>  {
    
}

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`
export const LabelBox = styled.label`
    margin-left: 10px;
    font-size: 12px;
    text-transform: uppercase;
    color: ${cores.shuttleGray};
`

export const InputBox = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 8px;
    font-size: 16px;
    background-color: ${cores.shuttleGray};
`