import Input from "component/input";
import { ITipoTela } from "resources/interfaces";
import * as S from "./formulario.style"

type Props = S.PropsFormulario&{
    tela?: ITipoTela;
}

const Formulario = (props:Props) =>{

    const{
        tela,
    } = props;


    return(
        <S.Container>
       {tela === 'Singn Up' ? <Input label='name' id='3'/> : null}
        <Input label='email' id='1' />
        {tela !== 'Password' ? <Input label='senha' id='2' /> : null}
        {tela === 'Singn Up' ? <Input label='confirmar senha' id='4'/> : null}
    </S.Container>
    );
}

export default Formulario;