import { useEffect, useState } from 'react';
import * as S from './avatar.style';
import * as A from '../avatares';


type Props = S.PropsAvatar & {
    tipoAvatar?: string;
};

const Avatar = (props: Props) => {
    const {
        tipoAvatar,
        tipoPagina = 'login'
    } = props;

    const [avatar, setAvatar] = useState(<A.AvatarDefault /> as JSX.Element);

    useEffect(() => {
        let _avatar = A.Avatares.find(x => x.tipo === tipoAvatar);
        if (_avatar) setAvatar(_avatar.avatar);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tipoAvatar]);


    return (
        <S.Container tipoPagina={tipoPagina} onClick={() => { }}>
            {avatar}
        </S.Container>
    );
};

export default Avatar;


