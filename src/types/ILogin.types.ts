import { ROLE } from "./Enum.types";

export interface ILogin {

    email: string;
    senha: string;
    role: ROLE.ADMIN | ROLE.ESCRITOR | ROLE.USER;
};