import React from 'react';
import * as S from './input.style';

type Props = S.PropsInput & {
    label?: string;
    value?: string;
    requered?: boolean;
    handleOnchange: ((event:string)=>void);
};

const Input = (props: Props) => {
    const {
        label,
        id,
        value,
        requered = false,
        handleOnchange,
    } = props;

    return (

        <S.ContainerInput>
            <S.LabelBox htmlFor={id}>{label}</S.LabelBox>
            <S.InputBox 
            id={id} 
            value={value}
            required = {requered === true ? true : false}
            onChange={(event)=>{handleOnchange(event.currentTarget?.value)}}
            {...props}
            />
        </S.ContainerInput>
    );
};

export default Input;