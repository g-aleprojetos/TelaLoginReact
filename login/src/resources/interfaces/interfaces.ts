
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