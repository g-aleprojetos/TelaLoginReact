import { useState, useEffect } from 'react';
import * as S from './TelaLoginECadastro.style';
import Text from 'component/text';
import Button from 'component/button';
import Avatar from 'component/avatar';
import cores from 'resources/cores';
import Login from './login';
import Cadastro from './cadastro';
import { StatusTela } from 'resources/enums/statusTela';

type Props = S.PropsTelaLoginECadastro & {

};



const TelaLoginECadastro = (props: Props) => {
    const [tipoTela, setTipoTela] = useState({ menu1: 'Login', menu2: 'Singn Up' });
    const [tela, setTela] = useState(StatusTela.login as StatusTela);
    const [status, setStatus] = useState({ statusLogin: true, statusCadastrar: false });

    const {

    } = props;

    const FunctionCadastro = () => {
        setTela(StatusTela.singnUp);
        setStatus({ statusLogin: false, statusCadastrar: true });
    };

    const FunctionLogin = () => {
        setTela(StatusTela.login);
        setTipoTela({ menu1: 'Login', menu2: 'Singn Up' });
        setStatus({ statusLogin: true, statusCadastrar: false });
    };

    useEffect(() => {
        console.log(status);
    }, [status]);

    return (
        <S.Main>
            <S.Container>
                {tela === StatusTela.singnUp ? <Avatar tipoAvatar='avatarAdd' /> : <Avatar tipoAvatar='avatarDefault' />}
                <S.ContainerHeader >
                    <S.ContainerHeaderTexto
                        disabled={status.statusLogin}
                        ativo={status.statusLogin}
                        onClick={() => { if (tela === StatusTela.singnUp) FunctionLogin(); }} >
                        <Text
                            fontSize='16px'
                            cor={status.statusLogin === true ? cores.white : cores.shuttleGray}
                            cursor={status.statusLogin === true ? 'default' : 'pointer'}
                        >{tipoTela.menu1}</Text>
                    </S.ContainerHeaderTexto>
                    <S.ContainerHeaderTexto
                        disabled={status.statusCadastrar}
                        ativo={status.statusCadastrar}
                        onClick={() => { tela === StatusTela.login ? FunctionCadastro() : FunctionLogin(); }} >
                        <Text
                            fontSize='16px'
                            cor={status.statusCadastrar === true ? cores.white : cores.shuttleGray}
                            cursor={status.statusCadastrar === true ? 'default' : 'pointer'}
                        >{tipoTela.menu2}</Text>
                    </S.ContainerHeaderTexto>
                </S.ContainerHeader>


                {tela === StatusTela.login ? <Login tipo={tela} /> : tela === StatusTela.password ? <Login tipo={tela} /> : <Cadastro tipo={tela} />}



                <Button><Text cor={cores.white}>Submit</Text></Button>

                <S.TextoRecuperarSenha onClick={() => { setTipoTela({ menu1: 'Password', menu2: 'Back' }); setTela(StatusTela.password); }} >
                    <Text
                        textDecoration='underline'
                        cor={cores.shuttleGray}
                        cursor={'pointer'}
                    >{tela === StatusTela.login ? 'FORGET YOUR PASSWORD?' : null}</Text>
                </S.TextoRecuperarSenha>
            </S.Container>
        </S.Main>
    );
};

export default TelaLoginECadastro;