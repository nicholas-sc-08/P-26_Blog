import React from "react";
import { cadastrar_usuario } from "./cadastrar";
import { ICreateUsuario, IUsuario } from "@/types/IUsuario.types";

export async function handle_form(e: React.FormEvent, data: ICreateUsuario, confirmar_senha: string, array_usuarios: IUsuario[]) {

    e.preventDefault();
    cadastrar_usuario(data, confirmar_senha, array_usuarios);
};