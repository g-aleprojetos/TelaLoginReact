import React from 'react';
import * as S from './cadastro,style';
import Input from 'component/input';

type Props = {
    tipo?: string;
};

const Cadastro = (props: Props) => {

    const {
        tipo
    } = props;

    return (
        <S.Container>
            <Input label='email' id='1' placeholder='email' />
            <Input label='password' id='2' />
            {tipo === 'Singn Up' ? <Input label='Confirm password' id='2' /> : null}
        </S.Container>
    );
};
export default Cadastro;