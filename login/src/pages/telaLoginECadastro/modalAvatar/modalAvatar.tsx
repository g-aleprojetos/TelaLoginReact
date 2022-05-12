import Button from "component/button";
import React, { useEffect, useState } from "react";
import * as S from './modalAvatar.style'
import * as A from 'component/avatares';
import Text from 'component/text';
import Avatar from "component/avatar";

const ModalAvatar = () => {

    const [avatares, setAvatares] = useState([] as string[]);

    useEffect(()=>{
    for (let i = 1; i <= A.Avatares.length; i++) {
        let _avatar = A.Avatares.find(x => x.tipo === `avatar${i}`);
        if (_avatar) setAvatares((listaAvatar: any) => ([...listaAvatar, _avatar?.tipo]));     
    }
    },[]);

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
                <S.Body>
                   
                      {avatares.map((avatar,key) =>( 
                          
                      <S.BodyContent key={key.toString()}>
                          <Avatar tipoAvatar={avatar} tipoPagina='modal'/>
                      </S.BodyContent>  ))} 
                                                    
                </S.Body>
                <S.Footer>
                    <Button tipo='confirmar'><Text fontSize='18px' peso='bold'>OK</Text></Button>
                    <Button tipo='cancelar'><Text fontSize='18px' peso='bold'>Cancelar</Text></Button>
                </S.Footer>
            </S.ContainerContent>
        </S.Container>
    );
}

export default ModalAvatar;