const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
  ];


let total_ventas = 0;

let total_peliculas = products.length;

for (let i = 0; i < products.length; i++) {
    total = total + products[i].sellCount;
}

console.log(total_ventas / total_peliculas);
