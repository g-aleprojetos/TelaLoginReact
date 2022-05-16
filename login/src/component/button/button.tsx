
import React from 'react';
import * as S from './button.style';

type Props = S.PropsButton & {
    children?: React.ReactNode;
    handleOnClick?:((e:any)=> void)
};

const Button = (props: Props) => {
    const {
        tipo,
        children,
        handleOnClick,
    } = props;



    return (
        <S.Container>
            <S.ContainerButton
              tipo={tipo}
              type={tipo === 'submit'?'submit': 'button' }
              onClick={handleOnClick}
              >{children}</S.ContainerButton>
        </S.Container>
    );
};

export default Button;