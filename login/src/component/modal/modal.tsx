import React from 'react';
import ReactDOM from 'react-dom';
import cores from 'resources/cores';
import * as S from './modal.style';
import Button from 'component/button';
import Text from 'component/text';

type Props = S.PropsModal & {
    isShow?: boolean;
    title?: string;
    children?: React.ReactNode;
    handleFooterButton?: 'ok' | 'confirm/cancel';
    handleModal: () => void;   
    handleConfirmar?: ()=>void;
    handleOK?: ()=>void;
}

const Modal = (props: Props) => {

    const {
        isShow = false,
        title = " ",
        children,
        handleFooterButton = 'confirm/cancel',
        handleModal,
        handleConfirmar,
        handleOK,
    } = props


    return (
        <>
            {isShow ? ReactDOM.createPortal(<S.Container>
                <S.ContainerContent>
                    <S.Header>
                        <Text
                            fontSize='20px'
                            peso='bold'
                        >{title}</Text>
                        <Button
                            tipo='fechar'
                            handleOnClick={() => { handleModal(); }}
                        ><Text fontSize='20px' peso='bold' cursor='pointer'>X</Text></Button>
                    </S.Header>
                    <S.Body>{children}</S.Body>
                    <S.Footer>
                        {handleFooterButton === 'ok' ?
                            <Button tipo='ok' handleOnClick={() => {if(handleOK !== undefined)handleOK()}}>
                                <Text
                                    fontSize='18px'
                                    peso='bold'
                                    cursor='pointer'
                                    cor={cores.white}
                                >OK</Text>
                            </Button>
                            :
                            <>
                                <Button tipo='confirmar' handleOnClick={() => {if(handleConfirmar !== undefined) handleConfirmar() }}>
                                    <Text
                                        fontSize='18px'
                                        peso='bold'
                                        cursor='pointer'
                                        cor={cores.white}
                                    >Confirmar</Text>
                                </Button>
                                <Button tipo='cancelar' handleOnClick={() => { handleModal(); }}>
                                    <Text
                                        fontSize='18px'
                                        peso='bold'
                                        cursor='pointer'
                                        cor={cores.white}
                                    >Cancelar</Text>
                                </Button>
                            </>}
                    </S.Footer>
                </S.ContainerContent>
            </S.Container>, document.getElementById('modal-root')!) : null}
        </>
    );
}

export default Modal;


