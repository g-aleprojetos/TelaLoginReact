import React from 'react';
import Text from 'component/text';
import * as S from './toggleSwitch.style'
import cores from 'resources/cores';

type Props = S.PropSwitch & {
    handlelabel: string;
    handleCheckbox?: boolean;
}

const ToggleSwitch = (props: Props) => {

    const {
        handlelabel = "",
        handleCheckbox = false,
    } = props

    return (
        <S.Container>

            <S.ContainerContent>
                <S.ToggleInput
                    id={handlelabel}
                    type='checkbox' />
                <S.ToggleLabel htmlFor={handlelabel}>
                </S.ToggleLabel>
            </S.ContainerContent>
            <Text fontSize='18px' cor={cores.lightgray}>{handlelabel}</Text>
        </S.Container>
    );
}

export default ToggleSwitch;