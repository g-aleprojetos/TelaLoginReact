import { useEffect, useState } from 'react';
import * as S from './avatar.style';
import * as A from '../avatares';


type Props = S.PropsAvatar & {
   handleTipoAvatar?: string;
};

const Avatar = (props: Props) => {
    const {     
        tipoPagina,
        handleTipoAvatar = "",
    } = props;

    const [avatar, setAvatar] = useState(<A.Avatar1 /> as JSX.Element);
    const [tipoAvatar, setTipoAvatar] = useState("");
    

    useEffect(() => {
        setTipoAvatar(handleTipoAvatar ? handleTipoAvatar : tipoPagina === 'Singn Up'? 'avatarAdd' : 'avatarDefault');
        let _avatar = A.Avatares.find(x => x.tipo === tipoAvatar);
        if (_avatar) setAvatar(_avatar.avatar);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tipoPagina, tipoAvatar, handleTipoAvatar]);


    return (
        <S.Container tipoPagina={tipoPagina} >
            {avatar}
        </S.Container>
    );
};

export default Avatar;


