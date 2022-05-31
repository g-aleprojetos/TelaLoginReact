import cores from "resources/cores";
import styled from "styled-components";

export interface PropSwitch {

}

export const Container = styled.div`
  margin-top: 15px;
  display: flex;  
  justify-items: center;
`;

export const ContainerContent = styled.div`
     position: relative;
`;

export const ToggleLabel = styled.label`
     position: absolute;
     top: 0;
     width: 42px;
     height: 26px;
     left: 0;
     border-radius: 15px;
     background: #bebebe;
     cursor: pointer;
     &::after {
         content: "";
         display: block;
         border-radius: 50%;
         width: 18px;
         height: 18px;
         margin: 3px;
         background: #ffffff;
         box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
         transition: 0.2s;
  }
`;

export const ToggleInput = styled.input`
    opacity: 0;
    z-index: 1;
     border-radius: 15px;
     width: 42px;
     height: 26px;
    
     &:checked + ${ToggleLabel} {
      background: ${cores.caribbeanGreen};
     &::after {
          content: "";
          display: block;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          margin-left: 21px;
         transition: 0.2s;
    }
  }

`;




