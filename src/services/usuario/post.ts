import api from "../api";
import { ICreateUsuario, IUsuario } from "@/types/IUsuario.types";

export async function post_usuario(data: ICreateUsuario){

    try {

        const usuario = await api.post("/usuarios", data);
        alert(usuario);
        return usuario;
        
    } catch (erro: any) {
      
        console.error(erro);
    };
};