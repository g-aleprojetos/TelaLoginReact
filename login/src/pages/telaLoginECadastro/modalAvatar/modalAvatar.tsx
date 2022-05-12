import Button from "component/button";
import React from "react";
import * as S from './modalAvatar.style'
import Text from 'component/text';

const ModalAvatar = () => {
    return (
        <S.Container>
            <S.ContainerContent>
                <S.Header>
                    <Text
                        fontSize='20px'
                        peso='bold'
                    >Escola seu Avatar</Text>
                    <Button
                        tipo='fechar'
                    ><Text fontSize='20px' peso='bold' cursor='pointer'>X</Text></Button>
                </S.Header>
                <S.Body></S.Body>
                <S.Footer>
                    <Button tipo='confirmar'><Text fontSize='18px' peso='bold'>OK</Text></Button>
                    <Button tipo='cancelar'><Text fontSize='18px' peso='bold'>Cancelar</Text></Button>
                </S.Footer>
            </S.ContainerContent>
        </S.Container>
    );
}

export default ModalAvatar;