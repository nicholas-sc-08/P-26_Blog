import api from "../api";

export async function delete_usuario(id_usuario: number): Promise<void>{

    try {

        const usuario = await api.delete(`/usuarios/${id_usuario}`);
        
    } catch (erro: any) {
      
        console.error(erro);
    };
};