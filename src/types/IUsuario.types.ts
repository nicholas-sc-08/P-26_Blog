import type { ROLE } from "@/types/Enum.types";

export interface IUsuario {

    id_usuario: number;
    nome: string;
    email: string;
    senha: string;
    role: ROLE.ADMIN | ROLE.ESCRITOR | ROLE.USER;
}

export interface ICreateUsuario {

    nome: string;
    email: string;
    senha: string;
    role: ROLE.ADMIN | ROLE.ESCRITOR | ROLE.USER;
}

export interface IUpdateUsuario {

    nome?: string;
    email?: string;
    senha?: string;
}

export interface GetParamId {

    id_usuario: number;
}