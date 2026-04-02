import { Router } from "express";
import tokenRouter from "./token.route.js";

const router=Router();

router.use('/token',tokenRouter);

export default router;