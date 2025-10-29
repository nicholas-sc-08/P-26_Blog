import { ICreateUsuario, IUsuario } from "./IUsuario.types";

export interface IGlobalContext {

    array_usuarios: IUsuario[],
    set_array_usuarios: React.Dispatch<React.SetStateAction<any>>,
    form_cadastro: ICreateUsuario,
    set_form_cadastro: React.Dispatch<React.SetStateAction<any>>,
    confirmar_senha: string;
    set_confirmar_senha: React.Dispatch<React.SetStateAction<any>>,
};