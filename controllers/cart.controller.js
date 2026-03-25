import Product from "../models/Product.js";

export const addToCart = async (req, res) => {
  try {
    console.log(req.body, req.user);

    // NO validamos el usuario

    // Validamos que el producto exista
    console.log(req.body.product);

    if (req.body.product == "undefined") {
      return res.status(422).json({ error: "El product id es obligatorio" });
    }

    const product = await Product.findById(req.body.product);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Si viene la cantidad, tiene que ser mayor o igual 1

    // Validamos que tengamos stock suficiente

    res.send({ message: "productos en el carrito" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Internal Server Error" });
  }
};
