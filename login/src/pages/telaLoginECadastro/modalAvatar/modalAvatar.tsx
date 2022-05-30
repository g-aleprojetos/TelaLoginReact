import Button from "component/button";
import React, { useEffect, useState } from "react";
import * as S from './modalAvatar.style'
import * as A from 'component/avatares';
import Avatar from "component/avatar";
import {ITipoTela } from "resources/interfaces";
import cores from "resources/cores";

export type Props = S.PropsModalAvatar & {
    title?: string;
    handleSelect?: string;
    handleSetSelect: ((event:string)=>void);
}



const ModalAvatar = (props: Props) => {

    const {
        title = " ",
        handleSelect,
        handleSetSelect,
    } = props;

    const [avatares, setAvatares] = useState([] as string[]);
   

    useEffect(() => {
        for (let i = 1; i <= A.Avatares.length; i++) {
            let _avatar = A.Avatares.find(x => x.tipo === `avatar${i}`);
            if (_avatar) setAvatares((listaAvatar: any) => ([...listaAvatar, _avatar?.tipo]));
        }
    }, []);


    return (
        <S.Container >
            <S.Body>
                {avatares.map((avatar, key) => (
                    <S.BodyContent
                        key={key.toString()}
                        id={`avatar${(key + 1).toString()}`}
                        chosen={`avatar${(key + 1).toString()}` === handleSelect ? true : false}
                        onClick={() => { handleSetSelect(`avatar${(key + 1).toString()}`) }}>
                        <Avatar handleTipoAvatar={avatar} tipoPagina={'Modal' as ITipoTela} />
                    </S.BodyContent>))}
            </S.Body>
        </S.Container>
    );
}

export default ModalAvatar;