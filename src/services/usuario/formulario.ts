import React from "react";
import { cadastrar_usuario } from "./cadastrar";
import { ICreateUsuario, IUsuario } from "@/types/IUsuario.types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export async function handle_form(e: React.FormEvent, data: ICreateUsuario, confirmar_senha: string, array_usuarios: IUsuario[], router: AppRouterInstance) {

    e.preventDefault();
    cadastrar_usuario(data, confirmar_senha, array_usuarios, router);
};