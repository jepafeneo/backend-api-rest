import Product from "../models/Product.js";
import Cart from "../models/Cart.js";

// export const addToCart = async (req, res) => {
//   try {
//     // NO validamos el usuario

//     // Validamos que el producto exista
//     if (!req.body.product) {
//       return res.status(422).json({ error: "El product id es obligatorio" });
//     }

//     const product = await Product.findById(req.body.product);

//     if (!product) {
//       return res.status(404).json({ error: "Product not found" });
//     }

//     // Si viene la cantidad, tiene que ser mayor o igual 1
//     if (req.body.quantity == undefined) {
//       req.body.quantity = 1;
//     }

//     if (!Number.isInteger(req.body.quantity) || req.body.quantity < 1) {
//       return res
//         .status(400)
//         .json({ error: "Quantity must be greater than or equal to 0" });
//     }

//     // Validamos que tengamos stock suficiente
//     if (req.body.quantity > product.stock) {
//       return res.status(400).json({ error: "Stock insuficiente" });
//     }

//     const cartExisting = await Cart.findOne({
//       user: req.user.id,
//     });

//     // No existe carrito
//     if (!cartExisting) {
//       const cart = new Cart({
//         user: req.user.id,
//         products: [],
//       });

//       const item = {
//         product: req.body.product,
//         quantity: req.body.quantity,
//       };

//       cart.products.push(item);
//       await cart.save();

//       res.status(201).json({
//         message: "productos en el carrito",
//         cart,
//       });
//     } else {
//       // Si existe el Cart
//       const item = {
//         product: req.body.product,
//         quantity: req.body.quantity,
//       };

//       cartExisting.products.push(item);
//       cartExisting.save();

//       res.status(201).json({
//         message: "productos en el carrito",
//         cartExisting,
//       });
//     }
//   } catch (error) {
//     console.log(error);

//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

export const addToCart = async (req, res) => {
  const { product: productId, quantity = 1 } = req.body;
  const { id: userId } = req.user;

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
    // const cantidadActual = productExist.quantity;
    // const nuevaCantidad = cantidadActual + quantity;
    // productExist.quantity = nuevaCantidad;

    // productExist.quantity = productExist.quantity + req.body.quantity;

    productExist.quantity += quantity;
  } else {
    const newProduct = {
      product: productId,
      quantity: quantity,
    };

    cart.products.push(newProduct);
  }

  await cart.save();

  res.status(201).json({ message: "Producto agregado al carrito", cart });
};

// Agregar un producto al carrito

// - Pasar el token para el middleware
// - req.user (id, email)

// Recibo id del producto y la cantidad, req.body
// - Existe el producto por el id
// - Validar quantity > 0

// Ver si existe el carrito
// - Buscar carrito que tengo el user igual al req.user.id

// Si no existe el carrito: Crear uno nuevo para el usuario
// Ver Stock con el req.body.quantity

// Si existe el carrito, ver si ya tiene producto

// Si no tiene el producto, ver stock con el req.body,quantity

// Si tiene el producto el carrito

// Si tengo 10 unidades
// Lo tengo en el carrito 3 unidades, donde esta registrado, card.products[{quantity: 3}]
// Quiero agregar al carrito 5 unidades, donde esta registrado, req.body.quantity

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
