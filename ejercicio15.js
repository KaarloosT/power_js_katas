const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

const searchInput = 'Camiseta';

for (let i = 0; i < products.length; i++) {
  if (products[i].includes(searchInput)) {
    console.log(products[i]);
  }
}
