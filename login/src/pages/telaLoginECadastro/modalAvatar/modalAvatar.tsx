import Button from "component/button";
import React, { useEffect, useState } from "react";
import * as S from './modalAvatar.style'
import * as A from 'component/avatares';
import Text from 'component/text';
import Avatar from "component/avatar";
import { ITipoTela } from "resources/interfaces";
import cores from "resources/cores";

export type Props = S.PropsModalAvatar & {
    title?: string;
}



const ModalAvatar = (props: Props) => {

    const {
        title = " ",
    } = props;

    const [avatares, setAvatares] = useState([] as string[]);
    const [select, setSelect] = useState<string>();


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
                        chosen={`avatar${(key + 1).toString()}` === select ? true : false}
                        onClick={() => { setSelect(`avatar${(key + 1).toString()}`) }}>
                        <Avatar avatarModal={avatar} tipoPagina={'Modal' as ITipoTela} />
                    </S.BodyContent>))}
            </S.Body>
        </S.Container>
    );
}

export default ModalAvatar;