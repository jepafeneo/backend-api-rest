import { Router } from "express";

const router = Router();

import { authMiddleware } from "../middlewares/auth.middleware.js";
import { addToCart, getCart, clearCart } from "../controllers/cart.controller.js";

router.post("/", authMiddleware, addToCart);
router.get("/", authMiddleware, getCart);
router.delete("/clear", authMiddleware, clearCart);

export default router;
