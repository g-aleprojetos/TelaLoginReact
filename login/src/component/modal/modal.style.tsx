import cores from "resources/cores";
import styled from "styled-components";

export interface PropsModal {

}


export const Container = styled.span`
width: 100vw;
height: 100vh;
position: fixed;
display: flex;
justify-content: center;
align-items: center;
background-color: ${cores.caribbeanGreen};

`;

export const ContainerContent = styled.div`
border-radius: 20px;
box-shadow: 0px 30px 80px 3px black;
background-color: ${cores.lightgray};
`;

export const Header = styled.div`
height: 50px;
display: flex;
justify-content: space-between;
align-items: baseline;
padding-left: 20px;
border-radius: 20px 20px 0px 0px;
`;

export const Body = styled.div`
margin: 0px 10px 0px 10px;
display: flex;
justify-content: center;
align-items: center;
border-top: 2px solid ${cores.shuttleGray};
border-bottom: 2px solid ${cores.shuttleGray};
`;

export const Footer = styled.div`
height: 80px;
border-radius: 0px 0px 20px 20px;
display: flex;
justify-content: space-around;
align-items: center;
`;

