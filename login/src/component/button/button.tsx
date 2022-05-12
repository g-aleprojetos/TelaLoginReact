
import React from 'react';
import * as S from './button.style';

type Props = S.PropsButton & {
    children?: React.ReactNode;
};

const Button = (props: Props) => {
    const {
        tipo,
        children
    } = props;

    return (
        <S.Container>
            <S.ContainerButton tipo={tipo}>{children}</S.ContainerButton>
        </S.Container>
    );
};

export default Button;