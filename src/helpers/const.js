export const LIMIT = 6;

export const ACTIONS = {
  products: "products",
  oneProduct: "oneProduct",
  cart: "cart",
  user: "user",
  cartLength: "cartLength",
  Things: "things",
  ThingsLength: " thingsLength",
};

export function totalSumFunc(products) {
  let data = products.reduce((acc, item) => acc + item.subPrice, 0);
  return data;
}

export function calcSubPrice(product) {
  return +product.count * product.price;
}

export const filterProduct = (products, category, search) => {
  return products.filter((product) => {
    if (category === "all" && search === "") {
      return true;
    } else if (category === "all") {
      return product.title.toLowerCase().includes(search.toLowerCase());
    } else if (search === "") {
      return product.category === category;
    } else {
      return (
        product.category === category &&
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }
  });
};
