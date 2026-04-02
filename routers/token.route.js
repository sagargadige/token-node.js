import { Router } from "express";
import { create, login } from "../controllers/controller.js";

const tokenRouter=Router();

tokenRouter.post('/add',create);
tokenRouter.post('/login',login);
export default tokenRouter;