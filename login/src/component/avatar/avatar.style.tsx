import cores from "resources/cores";
import { ITipoTela } from "resources/interfaces";
import styled from "styled-components";

export interface PropsAvatar {
    tipoPagina?: ITipoTela;

}




export const Container = styled.div<PropsAvatar>`
width: 100%;
height: 100%;
border-radius: 100%;
cursor: ${p => p.tipoPagina === 'login' ? 'default' : 'pointer'};

`;