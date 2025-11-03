"use client";

import { Card, CardHeader, CardTitle, CardAction, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { handle_form } from "@/services/usuario/formulario";
import { useGlobalContext } from "@/context/GlobalContext";

export default function page() {

    const { form_cadastro, set_form_cadastro} = useGlobalContext();
    const { confirmar_senha, set_confirmar_senha } = useGlobalContext();
    const { array_usuarios, set_array_usuarios } = useGlobalContext();

    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-foreground">Cadastra-se na sua conta</CardTitle>
                    <CardDescription>
                        Insira suas informações abaixo para cadastrar na plataforma!
                    </CardDescription>
                    <CardAction>
                        <Button variant="link" className="cursor-pointer">Login</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form onSubmit={e=> handle_form(e, form_cadastro, confirmar_senha, array_usuarios)}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label className="text-primaryDark">Nome</Label>
                                <Input value={form_cadastro.nome} onChange={e => set_form_cadastro({...form_cadastro, nome: e.target.value})} placeholder="Digite seu Nome" className="text-primaryDark" />
                                <Label className="mt-3">Email</Label>
                                <Input value={form_cadastro.email} onChange={e => set_form_cadastro({...form_cadastro, email: e.target.value})} placeholder="user@example.com" type="email"/>
                                <Label className="mt3">Senha</Label>
                                <Input value={form_cadastro.senha} onChange={e => set_form_cadastro({...form_cadastro, senha: e.target.value})} placeholder="Crie uma senha de 7-12 caracteres" type="password"/>
                                <Label className="mt-3">Confirmar Senha</Label>
                                <Input value={confirmar_senha} onChange={e => set_confirmar_senha(e.target.value)} placeholder="Repita a senha" type="password"/>
                                <Button className="cursor-pointer mt-3" variant="default" type="submit">Cadastrar-se</Button>
                                <Button className="cursor-pointer"variant="outline">Login com Google</Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
};