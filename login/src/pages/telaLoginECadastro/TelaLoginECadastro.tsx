import React from 'react';
import * as S from './TelaLoginECadastro.style';
import Login from './login';
import Text from 'component/text';
import Button from 'component/button';
import Avatar from 'component/avatar';
import cores from 'resources/cores';

type Props = S.PropsTelaLoginECadastro & {

};

const TelaLoginECadastro = (props: Props) => {

    const {
        tela = 'Login',
    } = props;

    return (
        <S.Main>
            <S.Container>
                <Avatar tipoAvatar={20} />
                <S.ContainerHeader >
                    <S.ContainerHeaderTexto onClick={() => { }} ativo={true}>
                        <Text
                            fontSize='16px'
                            cor='#fff'
                            cursor='pointer'>{tela}</Text>
                    </S.ContainerHeaderTexto>



                    <S.ContainerHeaderTexto onClick={() => { }} >
                        <Text
                            fontSize='16px'
                            cor={cores.shuttleGray}
                            cursor='pointer'>Singn Up</Text>
                    </S.ContainerHeaderTexto>

                </S.ContainerHeader>
                <Login />
                <Button><Text cor='#fff'>Submit</Text></Button>
                <S.TextoRecuperarSenha onClick={() => { }}>
                    <Text
                        textDecoration='underline'
                        cor={cores.shuttleGray}
                        cursor={'pointer'}
                    >FORGET YOUR PASSWORD?</Text>
                </S.TextoRecuperarSenha>
            </S.Container>
        </S.Main>
    );
};

export default TelaLoginECadastro;