"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { UserRound } from "lucide-react";

export default function Header() {

    const router = useRouter();
    const { menu_aberto, set_menu_aberto } = useGlobalContext();

    return (
        <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <header className="bg-white shadow-md w-full top-0 left-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                    <div className="text-xl font-bold">Blog</div>
                    <nav className="hidden md:flex space-x-6">
                        <Button variant="link" onClick={() => router.push("/")} className="text-gray-700 hover:text-gray-900 cursor-pointer">Home</Button>
                        <Button variant="link" onClick={() => router.push("/sobre")} className="text-gray-700 hover:text-gray-900 cursor-pointer">Sobre</Button>
                        <Button variant="link" onClick={() => router.push("/catalogo")} className="text-gray-700 hover:text-gray-900 cursor-pointer">Postagens</Button>
                        <Button variant="link" onClick={() => router.push("/contato")} className="text-gray-700 hover:text-gray-900 cursor-pointer">Contato</Button>
                        <Button variant="outline" className="cursor-pointer"><UserRound/></Button>
                        <Button className="cursor-pointer" onClick={() => router.push("/cadastro")}>Cadastre-se</Button>
                    </nav>
                    <div className="md:hidden">
                        <Button variant="outline" onClick={() => set_menu_aberto(!menu_aberto)} className="text-gray-700 hover:text-gray-900 cursor-pointer focus:outline-none">
                            {menu_aberto ? <X /> : <Menu />}
                        </Button>
                    </div>
                </div>
                {menu_aberto && (
                    <div className="md:hidden bg-white shadow-md">
                        <nav className="flex flex-col p-4 space-y-2">
                            <Button variant="link" onClick={() => router.push("/")} className="text-gray-700 hover:text-gray-900 cursor-pointer">Home</Button>
                            <Button variant="link" onClick={() => router.push("/sobre")} className="text-gray-700 hover:text-gray-900 cursor-pointer">Sobre</Button>
                            <Button variant="link" onClick={() => router.push("/artigos")} className="text-gray-700 hover:text-gray-900 cursor-pointer">Serviços</Button>
                            <Button variant="link" onClick={() => router.push("/contatos")} className="text-gray-700 hover:text-gray-900 cursor-pointer">Contato</Button>
                        </nav>
                    </div>
                )}
            </header>
        </div>
    );
};