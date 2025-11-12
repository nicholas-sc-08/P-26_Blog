import { ICreateUsuario, IUsuario } from "@/types/IUsuario.types";
import { post_usuario } from "./post";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export async function cadastrar_usuario(data: ICreateUsuario, confirmar_senha: string, array_usuarios: IUsuario[], router: AppRouterInstance) {

    try {

        const usuarios = array_usuarios.find(usuario => usuario.email == data.email);

        if (data.email.trim() == "") {

            return null;
        };

        if (data.senha == confirmar_senha) {

            const dados = await post_usuario(data);
            router.push("/login");
            return dados;

        } else {

            return null;
        };

    } catch (erro: any) {

        console.error(erro);
    };
};