import React from 'react';
import * as S from './text.style';

type Props = S.PropsText & {
    id?: string;
    className?: string;
};

const Text = (props: Props) => {
    return <S.TextoStyled {...props} />;
};

export default Text;