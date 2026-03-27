const cart = {};

cart.user = "u1";

cart.products = [
  { product: "p1", quantity: 2 },
  { product: "p2", quantity: 1 }, // Te voy a llamar productExist
];

// Buscar: find
// agrego 1 unidad al 'p1' -> Existe: sumo la unidades
// agregar 2 unidades al 'p5' -> No existe: agrego el nuevo producto: push

console.log(cart);

const productId = "p2";
const quantity = 2;

const productExist = cart.products.find((p) => p.product == productId);

console.log(productExist);

productExist.quantity += quantity;

console.log(productExist);
console.log(cart);

// Opción con Index

// const productIndex = cart.products.findIndex((p) => p.product == productId);

// console.log(productIndex);

// // cart.products[productIndex].quantity

// const newProduct = {
//   product: productId,
//   quantity: cart.products[productIndex].quantity + quantity,
// };

// cart.products[productIndex] = newProduct;

// console.log(cart);

// Se puede user splice

// https://es.javascript.info/array-methods#splice