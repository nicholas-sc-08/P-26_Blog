import React from "react";
import { IUsuario } from "./IUsuario.types";
import { IPost } from "./IPost.types";

export interface IGlobalContext {

    array_usuarios: IUsuario[] | undefined;
    set_array_usuarios: React.Dispatch<React.SetStateAction<any>>;
    array_artigos: IPost[] | undefined;
    set_array_artigos: React.Dispatch<React.SetStateAction<any>>;
    confirmar_senha: string;
    set_confirmar_senha: React.Dispatch<React.SetStateAction<any>>;
    menu_aberto: boolean;
    set_menu_aberto: React.Dispatch<React.SetStateAction<any>>;
    artigo_selecionado: IPost | undefined;
    set_artigo_selecionado: React.Dispatch<React.SetStateAction<any>>;
};