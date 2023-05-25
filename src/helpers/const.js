export const LIMIT = 8;

export const ACTIONS = {
  products: "products",
  oneProduct: "oneProduct",
  pageTotalCount: "pageTotalCount",
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
export const filterProduct = (
  products,
  category,
  style,
  color,
  search,
  sort
) => {
  return products
    .filter((product) => {
      if (
        category === "all" &&
        style === "all" &&
        color === "all" &&
        search === ""
      ) {
        return true;
      } else if (category === "all" || style === "all" || color === "all") {
        return (
          product.title.toLowerCase().includes(search.toLowerCase()) &&
          (category === "all" || product.category === category) &&
          (color === "all" || product.color === color) &&
          (style === "all" || product.style === style)
        );
      } else if (sort === "Price high to low") {
        return (
          product.category === category &&
          product.style === style &&
          product.color === color &&
          product.title.toLowerCase().includes(search.toLowerCase())
        );
      } else if (sort === "Price low to high") {
        return (
          product.category === category &&
          product.style === style &&
          product.color === color &&
          product.title.toLowerCase().includes(search.toLowerCase())
        );
      } else {
        return (
          product.category === category &&
          product.style === style &&
          product.color === color &&
          product.title.toLowerCase().includes(search.toLowerCase())
        );
      }
    })
    .sort((a, b) => {
      if (sort === "Price high to low") {
        return b.price - a.price;
      } else if (sort === "Price low to high") {
        return a.price - b.price;
      } else {
        return 0;
      }
    });
};
