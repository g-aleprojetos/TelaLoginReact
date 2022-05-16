
export interface IErroAPI {
    error: boolean;
    message: string;
};

export interface IErroInput {
    name?: string;
    error?: boolean;
    message?: string;
    props?: {
        lenMin?: number,
        lenMax?: number,
        nullPass?: boolean;
    };
};

export interface IAvatar {
    tipo: string;
    avatar: JSX.Element;
};

export interface ITipoTela{
    tipo?: 'Login' | 'Password' | 'Singn Up' | 'Modal';
}

export interface ILoginCadastro{
    avatar?: string,
    name?: string,
    email: string,
    password?: string,
    Confirmpassword?: string,
}
