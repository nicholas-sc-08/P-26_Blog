"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function Cadastro_blog() {

    return (

        <div className="fixed w-full flex justify-center items-center bg-black/10 z-90 shadow-2xl fixed min-h-screen">
            <Card className="w-full max-w-sm flex flex-col justify-center items-center">
                <CardHeader className="w-full">
                    <CardTitle>Cadastro de Artigo</CardTitle>
                    <CardDescription>Aqui aonde você irá cadastrar um artigo na plataforma</CardDescription>
                </CardHeader>
                <CardContent className="w-full">
                    <Label className="mt-2 mb-2">Titulo</Label>
                    <Input className="w-full" placeholder="Nome do artigo" />
                    <Label className="mt-2 mb-2">Descrição</Label>
                    <Textarea className="w-full" placeholder="Conteúdo do artigo" />
                    <div className="w-full flex justify-between mt-4">
                        <Button className="w-1/2 cursor-pointer mr-3">Cadastrar</Button>
                        <Button variant="outline" className="w-1/3 cursor-pointer">Cancelar</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};