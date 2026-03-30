import Product from "../models/Product.js";
import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {
  try {
    const { product: productId, quantity = 1 } = req.body;
    const { id: userId } = req.user;

    if (!productId) {
      return res.status(422).json({ error: "El product id es obligatorio" });
    }

    if (!Number.isInteger(quantity) || quantity < 1) {
      return res
        .status(400)
        .json({ error: "La cantidad debe ser mayor o igual a 1" });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product Not Found" });
    }

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({
        user: userId,
        products: [],
      });
    }

    const productExist = cart.products.find((p) => p.product == productId);
    // const productExist = cart.products.find((p) => p.product.toSting() === productId);

    if (productExist) {
      if (productExist.quantity + quantity > product.stock) {
        return res.status(400).json({ error: "No hay suficiente stock" });
      }

      productExist.quantity += quantity;
    } else {
      if (quantity > product.stock) {
        return res.status(400).json({ error: "No hay suficiente stock" });
      }

      const newProduct = {
        product: productId,
        quantity: quantity,
      };

      cart.products.push(newProduct);
    }

    await cart.save();

    res.status(201).json({ message: "Producto agregado al carrito", cart });
  } catch (error) {
    if (error.name == "CastError") {
      return res.status(400).json({ error: "Invalid ID" });
    }

    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user.id,
    });

    if (!cart) {
      const newCart = new Cart({
        user: req.user.id,
        products: [],
      });

      return res.json(newCart);
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user.id,
    });

    if (!cart) {
      const newCart = new Cart({
        user: req.user.id,
        products: [],
      });

      return res.json(newCart);
    }

    cart.products = [];
    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// const user = {
//   nombre: "Juan",
// };

// user.nombre 'Juan Pablo'

// console.log(user.nombre);
