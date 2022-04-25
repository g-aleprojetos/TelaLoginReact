import React from 'react';
import * as S from './login.style';
import Input from 'component/input';
import { StatusTela } from 'resources/enums/statusTela';

type Props = {
    tipo?: StatusTela;
};

const Login = (props: Props) => {

    const {
        tipo,
    } = props;

    return (
        <S.Container>
            <Input label='email' id='1' placeholder='email' />
            {tipo !== StatusTela.password ? <Input label='password' id='2' /> : null}
        </S.Container>
    );
};

export default Login;