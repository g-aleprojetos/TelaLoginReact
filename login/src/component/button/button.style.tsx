import styled from "styled-components";
import cores from 'resources/cores';

export interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {


}

export const Container = styled.div`
    margin: 10px;
`;

export const ContainerButton = styled.button`
    background-color: ${cores.caribbeanGreen};
    border-radius: 8px;
    padding: 5px 40px ;
`;