import styled from "styled-components";

export interface PropsAvatar {
    tipoPagina?: 'cadastro' | 'login';
}




export const Container = styled.div<PropsAvatar>`
width: 100px;
height: 100px;
position: relative;
top: -50px;
cursor: ${p => p.tipoPagina === 'login' ? 'default' : 'pointer'};

`;