import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  res.send({ message: "productos en el carrito" });
});

export default router;
