import express from "express";
import {regValidate, loginValidate, profile} from "../controllers/userControllers.js"
import validate from "../middlewares/userValidation.js"


const router = express.Router();

router.post("/register", validate, regValidate);

router.post("/login", loginValidate);

router.get("/profile", profile )

export default router;