import { Router } from "express";

const router = Router();

import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  addToCart,
  getCart,
  clearCart,
  removeProductFromCart,
} from "../controllers/cart.controller.js";

router.post("/", authMiddleware, addToCart);
router.get("/", authMiddleware, getCart);
router.delete("/clear", authMiddleware, clearCart);
router.delete("/:productId", authMiddleware, removeProductFromCart);

export default router;
