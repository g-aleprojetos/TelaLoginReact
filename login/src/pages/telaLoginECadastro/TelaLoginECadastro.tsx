import * as S from './TelaLoginECadastro.style';
import Text from 'component/text';
import Button from 'component/button';
import Avatar from 'component/avatar';
import cores from 'resources/cores';
import { useState } from 'react';
import Formulario from 'component/formulario';
import { ITipoTela } from 'resources/interfaces';

type Props = S.PropsTelaLoginECadastro & {

};

const TelaLoginECadastro = (props: Props) => {

    const {

    } = props;

    const [tipoTela, setTipoTela] = useState('Login' as ITipoTela);

    return (
        <S.Main>
            <S.Container>
                <Avatar tipoAvatar = {tipoTela === 'Singn Up' ? 'avatarAdd' : 'avatarDefault' } />
                <S.ContainerHeader >
                    <S.ContainerHeaderTexto
                        disabled = {tipoTela ==='Login' || tipoTela === 'Password' ? true : false }
                        ativo = {tipoTela ==='Login' || tipoTela === 'Password' ? true : false }
                        onClick={() => {setTipoTela('Login' as ITipoTela) }} >
                        <Text
                            fontSize='16px'
                            cor={tipoTela ==='Login' || tipoTela === 'Password' ? cores.white : cores.shuttleGray }
                            cursor={tipoTela === 'Login' || tipoTela === 'Password' ? 'default' : 'pointer'}
                            >{tipoTela === 'Password' ? 'Reset Password' : 'Login'}</Text>
                    </S.ContainerHeaderTexto>

                    <S.ContainerHeaderTexto 
                    disabled = {tipoTela ==='Singn Up'  ? true : false }
                    ativo = {tipoTela ==='Singn Up' ? true : false }
                    onClick={() => {tipoTela === 'Password' ? setTipoTela('Login' as ITipoTela): setTipoTela('Singn Up' as ITipoTela) }} >
                        <Text
                            fontSize='16px'
                            cor={tipoTela === 'Singn Up' ? cores.white : cores.shuttleGray }
                            cursor={tipoTela === 'Singn Up' ? 'default' : 'pointer'}
                            >{tipoTela === 'Password' ? 'Back' : 'Singn Up'}</Text>
                    </S.ContainerHeaderTexto>
                </S.ContainerHeader>

                <Formulario tela={tipoTela} />

                <Button><Text fontSize='16px' cor={cores.white}>Submit</Text></Button>
                {tipoTela === 'Login' ?
                <S.TextoRecuperarSenha onClick={() => {setTipoTela('Password' as ITipoTela) }}>
                    <Text
                        textDecoration='underline'
                        cor={cores.shuttleGray}
                        cursor={'pointer'}
                    >FORGET YOUR PASSWORD?</Text>
                </S.TextoRecuperarSenha>  : <S.TextoRecuperarSenha></S.TextoRecuperarSenha>}
            </S.Container>
        </S.Main>
    );
};

export default TelaLoginECadastro;