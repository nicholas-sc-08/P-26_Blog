import { ILogin } from "@/types/ILogin.types";
import api from "../api";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export async function fazer_login(data: ILogin, router: AppRouterInstance) {

    try {
        const usuario = await api.post("/login", data);

        if(usuario.status == 401){

            localStorage.removeItem("token");
        };

        if (usuario) {

            router.push("/");
            localStorage.setItem("token", usuario.data.token);
            return usuario.data;
        };

    } catch (erro: any) {

        console.error(erro);
    };
};