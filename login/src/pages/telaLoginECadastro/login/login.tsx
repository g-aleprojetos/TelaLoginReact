import React from 'react';
import * as S from './login.style';
import Input from 'component/input';

const Login = () => {
    return (
        <S.Container>
            <Input label='email' id='1' placeholder='email' />
            <Input label='password' id='2' />
        </S.Container>
    );
};

export default Login;