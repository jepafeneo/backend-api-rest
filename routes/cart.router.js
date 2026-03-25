import { Router } from "express";

const router = Router();

import { addToCart } from "../controllers/cart.controller.js";

router.post("/", addToCart);

export default router;
