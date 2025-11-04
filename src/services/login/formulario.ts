import { ILogin } from "@/types/ILogin.types";
import React from "react";
import { fazer_login } from "./login";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function handle_form(e: React.FormEvent, data: ILogin, router: AppRouterInstance){

    e.preventDefault();
    fazer_login(data, router);
};