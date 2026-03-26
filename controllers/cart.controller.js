import Product from "../models/Product.js";
import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {
  try {
    // NO validamos el usuario

    // Validamos que el producto exista
    if (!req.body.product) {
      return res.status(422).json({ error: "El product id es obligatorio" });
    }

    const product = await Product.findById(req.body.product);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Si viene la cantidad, tiene que ser mayor o igual 1
    if (req.body.quantity == undefined) {
      req.body.quantity = 1;
    }

    if (!Number.isInteger(req.body.quantity) || req.body.quantity < 1) {
      return res
        .status(400)
        .json({ error: "Quantity must be greater than or equal to 0" });
    }

    // Validamos que tengamos stock suficiente
    if (req.body.quantity > product.stock) {
      return res.status(400).json({ error: "Stock insuficiente" });
    }

    const cartExisting = await Cart.findOne({
      user: req.user.id,
    });

    // No existe carrito
    if (!cartExisting) {
      const cart = new Cart({
        user: req.user.id,
        products: [],
      });

      const item = {
        product: req.body.product,
        quantity: req.body.quantity,
      };

      cart.products.push(item);
      await cart.save();

      res.status(201).json({
        message: "productos en el carrito",
        cart,
      });
    } else {
      // Si existe el Cart
      const item = {
        product: req.body.product,
        quantity: req.body.quantity,
      };

      cartExisting.products.push(item);
      cartExisting.save();

      res.status(201).json({
        message: "productos en el carrito",
        cartExisting,
      });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Internal Server Error" });
  }
};
