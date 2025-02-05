import { Router } from "express";
import { getDocs } from "../controllers/docs.controller.js";

const router = Router();

router.get('/docs/:matricula', getDocs);


export default router;