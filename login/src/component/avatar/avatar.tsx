import React, { useEffect, useState } from 'react';
import * as S from './avatar.style';
import * as A from '../avatares';


type Props = S.PropsAvatar & {
    tipoAvatar?: number;
};

const Avatar = (props: Props) => {
    const {
        tipoAvatar = 0,
        tipoPagina = 'login'
    } = props;

    const [avatar, setAvatar] = useState(<A.AvatarDefault />);

    useEffect(() => {
        if (tipoAvatar === 0) setAvatar(<A.AvatarDefault />);
        if (tipoAvatar === 1) setAvatar(<A.Avatar1 />);
        if (tipoAvatar === 2) setAvatar(<A.Avatar2 />);
        if (tipoAvatar === 3) setAvatar(<A.Avatar3 />);
        if (tipoAvatar === 4) setAvatar(<A.Avatar4 />);
        if (tipoAvatar === 5) setAvatar(<A.Avatar5 />);
        if (tipoAvatar === 6) setAvatar(<A.Avatar6 />);
        if (tipoAvatar === 7) setAvatar(<A.Avatar7 />);
        if (tipoAvatar === 8) setAvatar(<A.Avatar8 />);
        if (tipoAvatar === 9) setAvatar(<A.Avatar9 />);
        if (tipoAvatar === 10) setAvatar(<A.Avatar10 />);
        if (tipoAvatar === 11) setAvatar(<A.Avatar11 />);
        if (tipoAvatar === 12) setAvatar(<A.Avatar12 />);
        if (tipoAvatar === 13) setAvatar(<A.Avatar13 />);
        if (tipoAvatar === 14) setAvatar(<A.Avatar14 />);
        if (tipoAvatar === 15) setAvatar(<A.Avatar15 />);
        if (tipoAvatar === 16) setAvatar(<A.Avatar16 />);
        if (tipoAvatar === 17) setAvatar(<A.Avatar17 />);
        if (tipoAvatar === 18) setAvatar(<A.Avatar18 />);
        if (tipoAvatar === 19) setAvatar(<A.Avatar19 />);
        if (tipoAvatar === 20) setAvatar(<A.Avatar20 />);

    }, [tipoAvatar]);


    return (
        <S.Container tipoPagina={tipoPagina} onClick={() => { }}>
            {avatar}
        </S.Container>
    );
};

export default Avatar;