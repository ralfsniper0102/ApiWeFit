import { Router } from "express";
import perfilRouter from "./perfilRouter";

const router = Router();

router.use(perfilRouter)

export default router;