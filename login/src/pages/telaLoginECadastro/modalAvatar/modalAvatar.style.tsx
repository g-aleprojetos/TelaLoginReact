import cores from "resources/cores";
import styled from "styled-components";

export interface PropsModalAvatar{
    chosen?: boolean;
}



export const Container = styled.div`
width: 700px;

`;

export const Body = styled.div`
height: 350px;
margin: 0px 10px 0px 10px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
grid-template-rows: repeat(auto-fill, minmax(80px, 1fr));
justify-content: center;
align-items: center;
justify-items: center;
`;

export const BodyContent = styled.div<PropsModalAvatar>`
width: ${p => p.chosen ? '75px' : '70px'};
height: ${p => p.chosen ? '75px' : '70px'};
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
box-shadow:${p => p.chosen ? `0px 0px 20px ${cores.red}` : 'none'};
`;

