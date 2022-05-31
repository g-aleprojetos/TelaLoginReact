import styled from 'styled-components';
import cores from 'resources/cores';

export interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {
display?: 'none' | 'flex' | 'grid';
}

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;
export const LabelBox = styled.label`
    margin-left: 10px;
    font-size: 12px;
    text-transform: uppercase;
    color: ${cores.shuttleGray};
`;

export const InputBox = styled.input<PropsInput>`
    height: 30px;
    margin-top: 5px;
    display: ${p => p.display ?? 'inline'};
    border-radius: 8px;
    border: 1px solid transparent;
    font-size: 16px;
    background-color: ${cores.shuttleGray};
    color: ${cores.white};
    outline: 0;
`;
