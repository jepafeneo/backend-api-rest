const products = [
  { id: "69b01", name: "Mouse", price: 50 },
  { id: "69b03", name: "Monitor", price: 500 },
  { id: "69b02", name: "Teclado", price: 100 },
  { id: "69b04", name: "Impresora", price: 200 },
];

// function getProductNames(list) {
//     return list.map(item => item.name);
// }

// const getProductNames = () => list.map((item) => item.name);
// const names = getProductNames(products);
// console.log(names);

// solo producto con precio > 150

// function getExpensiveProducts(list) {
//   return list.filter((item) => item.price > 150);
// }

// const precios = getExpensiveProducts(products);
// console.log(precios);

// function getProductPrice(list, id) {
//   const product = list.find((item) => item.id == id);
//   //   if (!product) {
//   //     return null;
//   //   }

//   //   return product.price;

//   // return !product ? null : product.price
//   return product ? product.price : null;
// }

// const existe = getProductPrice(products, "69b02");
// console.log(existe);

// Que devuelva el precio del producto con el id recibido.
// Si no existe, devolver `null`.

// Operador ternario
// let mensaje;
// let edad = 14;

// // if (edad >= 18) {
// //   mensaje = "Eres mayor de edad";
// // } else {
// //   mensaje = "Eres menor";
// // }

// mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor";

// console.log(mensaje);

// ---

// function getExpensiveNames(list) {
//   //   const expensives = list.filter((item) => item.price > 150);

//   //   return expensives.map((item) => item.name);

//   return list.filter((item) => item.price > 150).map((item) => item.name);
// }

// // Que devuelva un array con los nombres de los productos cuyo `price` sea mayor a `150`.

// const names = getExpensiveNames(products);
// console.log(names);

const caros = products.some((item) => item.price < 50);

console.log(caros);
