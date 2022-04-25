import { useState } from "react";
import { IErroInput } from "../../resources/interfaces";

export default function useInputErrors<Ttype>(initialState: Ttype) {
    const [erroInput, setErroItem] = useState<Ttype>(defineInitialState(initialState));

    function defineInitialState(initial: Ttype) {
        let state = {};
        for (const [key, value] of Object.entries(initial)) {
            state = { ...state, [key]: ErroDefault(key, false, value) };
        }
        return state as Ttype;
    }

    function ErroDefault(name = '', reset = true, campo?: IErroInput): IErroInput | void {
        if (reset) {
            setErroItem(defineInitialState(initialState));
        } else {
            const message = campo?.message ?? '';
            const error = campo?.error ?? false;
            return { name, message, error, props: campo?.props };
        }
    };

    function ErroCampoVazio(campo: IErroInput, value = '') {
        const name = campo.name ?? 'campo';
        const lenMin = campo.props?.lenMin ?? 4;
        const lenMax = campo.props?.lenMax ?? 100;
        const nullPass = campo.props?.nullPass ?? false;

        if (nullPass || value.length > 0) {
            return ErroCampoMuitoCurto(name, value, lenMin, lenMax, nullPass);
        } else {
            return { name, message: 'Preencha este campo.', error: true };
        }
    }
    function ErroCampoMuitoCurto(name: string, value: string, lenMin: number, lenMax: number, nullPass?: boolean) {
        if (nullPass || value.length >= lenMin) {
            return ErroCampoMuitoLongo(name, value, lenMax);
        } else {
            return { name, message: `Mínimo ${lenMin} caracteres.`, error: true };
        }
    }

    function ErroCampoMuitoLongo(name: string, value: string, lenMax: number) {
        if (value.length <= (lenMax)) {
            return ErroDefault(name, false);
        } else {
            return { name, message: `Máximo ${lenMax} caracteres.`, error: true };
        }
    }

    function ValidarCampos(campos: { input: IErroInput, value: string; }[]) {
        let newState = { ...erroInput };
        let submit = true;
        campos.forEach(campo => {
            let validacao = ErroCampoVazio(campo.input, campo.value);
            if (validacao?.error) {
                submit = false;
            }
            newState = { ...newState, [campo.input.name ?? '']: { ...validacao, props: campo.input.props } };
        });
        setErroItem(newState);
        return submit;
    }

    function onFocusDefaultErro(campo: IErroInput) {
        const newState = { ...erroInput, [campo.name ?? '']: { ...ErroDefault(campo.name, false), props: campo.props } };
        setErroItem(newState);
    }

    function onBlurValidate(campo: IErroInput, value: string): void {
        const newState = { ...erroInput, [campo.name ?? '']: { ...ErroCampoVazio(campo, value), props: campo.props } };
        setErroItem(newState);
    }


    return {
        erroInput,
        ErroDefault,
        onBlurValidate,
        onFocusDefaultErro,
        ValidarCampos,
    };
}