import Input from "component/input";
import { ITipoTela } from "resources/interfaces";
import { ILoginCadastro } from "resources/interfaces";
import * as S from "./formulario.style"

type Props = S.PropsFormulario & {
    tela?: ITipoTela;
    handleLoginCadastro:ILoginCadastro,
    handleSetLoginCadastro:((event:ILoginCadastro)=>void)
    handleSubmit?: ((event: React.FormEvent<HTMLFormElement>)=>void)
}

const Formulario = (props: Props) => {

    const {
        tela,
        handleLoginCadastro,
        handleSetLoginCadastro,
        handleSubmit
    } = props;

    return (
        <S.Container >
            <S.Form autoComplete="off" onSubmit={handleSubmit} >
                {tela === 'Singn Up' ? <Input label='name' id='3' value={handleLoginCadastro?.name} handleOnchange={(event)=> handleSetLoginCadastro({...handleLoginCadastro, name:event}) } /> : null}
                <Input label='email' id='1' value={handleLoginCadastro?.email} handleOnchange={(event)=> handleSetLoginCadastro({...handleLoginCadastro, email:event}) }/>
                {tela !== 'Password' ? <Input label='senha' id='2' type='password' value={handleLoginCadastro?.password} handleOnchange={(event)=> handleSetLoginCadastro({...handleLoginCadastro, password:event}) }/> : null}
                {tela === 'Singn Up' ? <Input label='confirmar senha' id='4' type='text' handleOnchange={(event)=> handleSetLoginCadastro({...handleLoginCadastro, Confirmpassword:event}) } /> : null}
            </S.Form>
        </S.Container>
    );
}

export default Formulario;