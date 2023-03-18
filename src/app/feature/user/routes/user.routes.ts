import {Router, Request, Response} from "express";
import {UserController} from "../controllers/user.controller";
import {UserValidator} from "../middlewares/user.validator";

const route = Router();

route.post("/", UserValidator, UserController.create);

export {route as userRoutes};
