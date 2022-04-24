import React, { useEffect, useState } from 'react';
import * as S from './avatar.style';
import * as A from '../avatares';


type Props = S.PropsAvatar & {
    tipoAvatar?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
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

    }, [tipoAvatar]);


    return (
        <S.Container tipoPagina={tipoPagina} onClick={() => { }}>
            {avatar}
        </S.Container>
    );
};

export default Avatar;