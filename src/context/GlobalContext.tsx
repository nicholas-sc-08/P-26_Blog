"use client";

import { useEffect } from "react";
import { ROLE } from "@/types/Enum.types";
import type { IGlobalContext } from "@/types/IGlobalContext.types";
import { ICreateUsuario, IUsuario } from "@/types/IUsuario.types";
import { ReactNode, createContext, useContext, useState } from "react";
import { get_usuarios } from "@/services/usuario/get";
import { ILogin } from "@/types/ILogin.types";

const GlobalContext = createContext<IGlobalContext | null>(null);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {

    const [array_usuarios, set_array_usuarios] = useState<IUsuario[]>([]);
    const [form_cadastro, set_form_cadastro] = useState<ICreateUsuario>({ nome: "", email: "", senha: "", role: ROLE.USER });
    const [confirmar_senha, set_confirmar_senha] = useState<string>("");

    useEffect(() => {

        get_usuarios().then(u => u ? set_array_usuarios(u) : []);

    }, []);

    return (

        <GlobalContext.Provider value={{

            array_usuarios,
            set_array_usuarios,
            form_cadastro,
            set_form_cadastro,
            confirmar_senha,
            set_confirmar_senha,

        }}>{children}</GlobalContext.Provider>
    )
};

export const useGlobalContext = () => {

    const context = useContext(GlobalContext);

    if (!context) {

        throw new Error("global context deve ser usado dentro de um provider");
    };
    return context;
};