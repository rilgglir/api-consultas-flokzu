import { Router } from "express";
import { getPostal } from "../controllers/postal.controller.js";

const router = Router();

router.get('/postal/:cp', getPostal);


export default router;