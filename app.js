import dotenv from "dotenv";
dotenv.config();

import express from "express";
import "./db.js";
import cors from "cors";

import productsRouter from "./routes/products.router.js";
import categoriesRouter from "./routes/categories.router.js";
import authRouter from "./routes/auth.router.js";
import cartRouter from "./routes/cart.router.js";
import pingRouter from "./routes/ping.router.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/auth", authRouter);
app.use("/cart", cartRouter);
app.use(pingRouter);

app.get("/prueba", (req, res) => {
  res.send("Prueba de nueva rama");
});

export default app;
