import React from "react";
import { cadastrar_usuario } from "./cadastrar";
import { ICreateUsuario } from "@/types/IUsuario.types";

export async function handle_form(e: React.FormEvent, data: ICreateUsuario, confirmar_senha: string) {

    e.preventDefault();
    cadastrar_usuario(data, confirmar_senha);
};