import api from "../api";
import { ICreateUsuario, IUsuario } from "@/types/IUsuario.types";

export async function post_usuario(data: ICreateUsuario): Promise<IUsuario | undefined>{

    try {

        const usuario: IUsuario = await api.post("/usuarios", data);
        console.log(usuario);
        
        alert(usuario);
        return usuario;
        
    } catch (erro: any) {
      
        console.error(erro);
    };
};