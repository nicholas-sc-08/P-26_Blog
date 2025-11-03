import { ICreateUsuario, IUsuario } from "@/types/IUsuario.types";
import { post_usuario } from "./post";

export async function cadastrar_usuario(data: ICreateUsuario, confirmar_senha: string, array_usuarios: IUsuario[] | undefined){

    try {

        const usuarios = array_usuarios?.find(usuario => usuario.email == data.email);
        
        if(data.email.trim() == "" || !usuarios){
            
            return null;
        };
        
        if(data.senha == confirmar_senha){
            
            if(data.senha.length >= 7 && data.senha.length <= 12){
        
                const dados = await post_usuario(data);
                return dados;
            };

        } else {

            return null;
        };
        
    } catch (erro: any) {
      
        console.error(erro);
    };
};