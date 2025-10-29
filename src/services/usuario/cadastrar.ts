import { ICreateUsuario, IUsuario } from "@/types/IUsuario.types";
import { post_usuario } from "./post";

export async function cadastrar_usuario(data: ICreateUsuario, confirmar_senha: string){

    try {

        if(data.email.trim() == ""){

            return null;
        };

        if(data.senha == confirmar_senha){

            const dados = await post_usuario(data);
            return dados;

        } else {

            return null;
        };
        
    } catch (erro: any) {
      
        console.error(erro);
    };
};