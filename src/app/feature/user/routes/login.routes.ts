import {Router} from "express";
import {UserController} from "../controllers/user.controller";

const loginRoute = Router();

loginRoute.post("/", UserController.loginUserControll);

export {loginRoute};
