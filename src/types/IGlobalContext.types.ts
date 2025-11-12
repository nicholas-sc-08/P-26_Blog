import React from "react";
import { ILogin } from "./ILogin.types";
import { ICreateUsuario, IUsuario } from "./IUsuario.types";

export interface IGlobalContext {

    array_usuarios: IUsuario[] | undefined,
    set_array_usuarios: React.Dispatch<React.SetStateAction<any>>,
    confirmar_senha: string;
    set_confirmar_senha: React.Dispatch<React.SetStateAction<any>>,
    menu_aberto: boolean,
    set_menu_aberto: React.Dispatch<React.SetStateAction<any>>;
};