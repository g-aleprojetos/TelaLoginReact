import * as S from './TelaLoginECadastro.style';
import Text from 'component/text';
import Button from 'component/button';
import Avatar from 'component/avatar';
import cores from 'resources/cores';
import { useState } from 'react';
import Formulario from './cadastro';
import { ITipoTela } from 'resources/interfaces';

type Props = S.PropsTelaLoginECadastro & {

};

const TelaLoginECadastro = (props: Props) => {

    const {
        ativo,
    } = props;

    const [tipoTela, setTipoTela] = useState('Login' as ITipoTela);

    return (
        <S.Main>
            <S.Container>
                <Avatar tipoAvatar='avatarDefault' />
                <S.ContainerHeader >
                    <S.ContainerHeaderTexto onClick={() => { }} >
                        <Text
                            fontSize='16px'
                            cor={ativo ? cores.white : cores.shuttleGray }
                            cursor='pointer'>{tipoTela === 'Password' ? 'Reset Password' : 'Login'}</Text>
                    </S.ContainerHeaderTexto>



                    <S.ContainerHeaderTexto onClick={() => { }} ativo={true}>
                        <Text
                            fontSize='16px'
                            cor={ativo ? cores.white : cores.shuttleGray }
                            cursor='pointer'>{tipoTela === 'Password' ? 'Back' : 'Singn Up'}</Text>
                    </S.ContainerHeaderTexto>
                </S.ContainerHeader>

                <Formulario tela={tipoTela} />

                <Button><Text fontSize='16px' cor={cores.white}>Submit</Text></Button>
                <S.TextoRecuperarSenha onClick={() => {setTipoTela('Password' as ITipoTela) }}>
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