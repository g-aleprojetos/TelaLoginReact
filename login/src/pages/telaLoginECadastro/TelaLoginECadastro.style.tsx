import cores from "resources/cores";
import styled from "styled-components";

export interface PropsTelaLoginECadastro extends React.AllHTMLAttributes<HTMLElement> {
    tela?: 'Login' | 'Password' | 'Singn Up';
    ativo?: boolean;
}


export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${cores.caribbeanGreen};  
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${cores.mineShaft};
    border-radius: 20px;
    box-shadow: 0px 30px 80px 3px black;
`;

export const ContainerHeader = styled.div`
    width: 400px;
    margin-left:15px;
    margin-right:15px;
    display: flex;
    justify-content: center;
`;

export const ContainerHeaderTexto = styled.div<PropsTelaLoginECadastro>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid ${p => p.ativo === true ? cores.white : cores.shuttleGray};
`;

export const TextoRecuperarSenha = styled.div`
    margin-bottom: 20px;
`;
