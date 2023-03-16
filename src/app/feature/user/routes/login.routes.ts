import {Router} from "express";
import {UserController} from "../controllers/user.controller";

const loginRoute = Router();

loginRoute.post("/", new UserController().loginUserControll);

export {loginRoute};
