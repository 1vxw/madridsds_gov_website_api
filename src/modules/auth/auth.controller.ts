import { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service.js";
import { Admin } from "../../types/admin.types.js";

export class AuthController {
    constructor(private readonly service: AuthService = new AuthService()) {}

    login = async (
        _:Request,
        res:Response<Admin>,
        next:NextFunction,
    ): Promise<void> => {
        try {
            const { email, password } = _.body;
            res.json(await this.service.signin(email, password));
        } catch (e) {
            next(e);
        }
    }
}