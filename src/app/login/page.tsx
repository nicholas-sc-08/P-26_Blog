"use client";

import { useGlobalContext } from "../../context/GlobalContext";
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { handle_form } from "@/services/login/formulario";
import { useState } from "react";
import { ILogin } from "@/types/ILogin.types";
import { ROLE } from "@/types/Enum.types"

export default function page() {

    const { array_usuarios, set_array_usuarios } = useGlobalContext();
    const [form_login, set_form_login] = useState<ILogin>({ email: "", senha: "", role: ROLE.USER });
    const router = useRouter();

    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-foreground">Faça Login na sua Conta</CardTitle>
                    <CardDescription>
                        Insira suas informações abaixo para fazer o login na plataforma!
                    </CardDescription>
                    <CardAction>
                        <Button onClick={() => router.push("/cadastro")} className="cursor-pointer" variant="link">Cadastre-se</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form onSubmit={e => handle_form(e, form_login, router)}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label>Email</Label>
                                <Input required placeholder="example@gmail.com" type="email" value={form_login.email} onChange={e => set_form_login({ ...form_login, email: e.target.value })} />
                                <Label>Senha</Label>
                                <Input required minLength={7} maxLength={12} placeholder="Senha de 7-12 caracteres" type="password" value={form_login.senha} onChange={e => set_form_login({ ...form_login, senha: e.target.value })} />
                                <Button type="submit">Login</Button>
                                <Button type="button" variant="outline">Login com Google</Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};