import styled from "styled-components";

export interface PropsAvatar {
    tipoPagina?: 'cadastro' | 'login'| 'modal';
}




export const Container = styled.div<PropsAvatar>`
width: 100%;
height: 100%;
position: relative;
top: ${p => p.tipoPagina === 'login' || p.tipoPagina === 'cadastro' ? '-50px' : 'none'};//;
cursor: ${p => p.tipoPagina === 'login' ? 'default' : 'pointer'};

`;