import React from 'react';
import * as S from './input.style';

type Props = S.PropsInput & {
    label?: string;

};

const Input = (props: Props) => {
    const {
        label,
        id
    } = props;

    return (

        <S.ContainerInput>
            <S.LabelBox htmlFor={id}>{label}</S.LabelBox>
            <S.InputBox id={id} />
        </S.ContainerInput>
    );
};

export default Input;