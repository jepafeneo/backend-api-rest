// const cart = {};

// cart.user = "69b";

// cart.products = [
//   { product: "69b01", quantity: 2 },
//   { product: "69b02", quantity: 1 },
// ];

// console.log(cart);

// Agregar 2 unidades al producto `69b01`
// Buscar carrito, buscar producto, sumar unidades al quantity

// Agregar 1 unidad al producto `69b05`
// Buscar carrito, buscar producto, crear producto nuevo y agregar con la cantidad

// Buscar carrito, si existe lo uso, sino existe creo un carrito vacio

// Buscar el producto en el carrito
// Si existe el producto, sumar a quantity
// Si no existe el producto, crear el producto, push a products

// Guardar el carrito

// Validación

// Usuario existe, tiene un token

// productId, tiene existir
// quantity, ser igual o mayor a uno, tiene que ser entero, que sea numero

// Agregar un producto, buscando el producto

// Stock
// Si el producto nuevo, quantity es menor igual al stock

// Si el producto existe

// en el carrito tengo 9 unidades de el mouse
// quiero comprar 3 mas
// Sumar la cantidad que tiene el producto en el carrito + quantity menor o igual al stock

// ---

const productId = "69b03";

const products = [
  { product: "69b01", name: "Mouse", price: 100, stock: 10 },
  { product: "69b02", name: "Teclado", price: 50, stock: 0 },
  { product: "69b03", name: "Monitor", price: 500, stock: 2 },
  { product: "69b04", name: "Parlantes", price: 15, stock: 0 },
];

const filtered = products.filter((p) => p.product != productId);

// const filtered = products.filter((p) => p.stock != 0);

console.log(filtered);

// Obtener el productId del req.params
// Buscar el carrito
