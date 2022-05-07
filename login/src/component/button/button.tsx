
import React from 'react';
import * as S from './button.style';

type Props = S.PropsButton & {
    children?: React.ReactNode;
};

const Button = (props: Props) => {
    const {
        children
    } = props;

    return (
        <S.Container>
            <S.ContainerButton>{children}</S.ContainerButton>
        </S.Container>
    );
};

export default Button;