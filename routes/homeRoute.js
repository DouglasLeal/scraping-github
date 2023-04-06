import express from "express";

import Controller from "../controllers/HomeController.js";

const router = express.Router();

router
    .get("/", Controller.index)
    .post("/buscar", Controller.buscar)
    

export default router;