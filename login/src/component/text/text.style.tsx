import styled from "styled-components";

export interface PropsText {
  cor?: string;
  background?: string;
  textDecoration?: 'underline' | 'line-through';
  fontSize?: string;
  lineHeight?: string;
  marginTop?: number;
  children?: string | React.ReactNode;
  peso?: 'bold' | 'normal';
  toUpper?: boolean;
  cursor?: 'default' | 'pointer' | 'text';
  whiteSpace?: 'normal' | 'pre' | 'nowrap' | 'pre-wrap' | 'pre-line' | 'break-spaces';
  textOverflow?: 'clip' | 'ellipsis' | 'string' | 'initial' | 'inherit';
  overflow?: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto';
};

export const TextoStyled = styled.p <PropsText>`
  font-size: ${(props) => props.fontSize ?? "12px"};
  background: ${(props) => props.background ?? 'transparent'};
   color: ${(props) => props.cor ?? '#000'};
  margin-top: ${(props) => props.marginTop ?? 0}px;
  text-transform: ${(props) => (props.toUpper ? 'uppercase' : 'none')};
  text-decoration: ${(props) => props.textDecoration ?? 'none'}; 
  line-height: ${(props) => props.lineHeight ?? '150%'};
  cursor: ${p => p.cursor ?? 'text'};
  white-space: ${p => p.whiteSpace ?? 'normal'};
  text-overflow: ${p => p.textOverflow ?? 'none'};
  overflow: ${p => p.overflow ?? 'none'};
`;
