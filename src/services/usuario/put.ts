import api from "../api";
import { IUpdateUsuario, IUsuario } from "@/types/IUsuario.types";

export async function put_usuario(id_usuario: number, data: IUpdateUsuario): Promise<IUsuario | undefined>{

    try {

        const usuario: IUsuario = await api.put(`/usuarios/${id_usuario}`, data);
        return usuario;
        
    } catch (erro: any) {
      
        console.error(erro);
    };
};