import { useEffect, useState } from 'react';
import * as S from './avatar.style';
import * as A from '../avatares';


type Props = S.PropsAvatar & {
   avatarModal?: string;
};

const Avatar = (props: Props) => {
    const {     
        tipoPagina,
        avatarModal = "",
    } = props;

    const [avatar, setAvatar] = useState(<A.AvatarDefault /> as JSX.Element);
    const [tipoAvatar, setTipoAvatar] = useState("");
    

    useEffect(() => {
        setTipoAvatar(avatarModal ? avatarModal : tipoPagina === 'Singn Up'? 'avatarAdd' : 'avatarDefault');
        let _avatar = A.Avatares.find(x => x.tipo === tipoAvatar);
        if (_avatar) setAvatar(_avatar.avatar);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tipoPagina, tipoAvatar, avatarModal]);


    return (
        <S.Container tipoPagina={tipoPagina} >
            {avatar}
        </S.Container>
    );
};

export default Avatar;


