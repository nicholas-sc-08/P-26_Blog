import { IUsuario } from "@/types/IUsuario.types";
import api from "../api";

export async function get_usuarios(): Promise<IUsuario[] | undefined>{

    try {

        const resposta = await api.get("/usuarios");
        return resposta.data;
        
    } catch (erro: any) {
        
        console.error(erro);
    };
};

export async function get_usuario_id(id_usuario: number): Promise<IUsuario | undefined>{

    try {

        const resposta = await api.get(`/usuarios/${id_usuario}`);
        return resposta.data;       
    } catch (erro: any) {
      
        console.error(erro);
    };
};