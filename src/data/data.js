const allProducts = [
  {
    id: crypto.randomUUID(),
    title: "Gradient Graphic T-shirt",
    name: "tshirt.png",
    rating: 4.5,

    stock: 212,
    price: 145,
  },
  {
    id: crypto.randomUUID(),
    title: "Polo with Tipping Details",
    name: "image 10-1.png",
    rating: 1,
    stock: 320,
    price: 180,
  },
  {
    id: crypto.randomUUID(),
    title: "Black Striped T-shirt",
    name: "tshirt2.png",
    rating: 3,
    stock: 420,
    price: 120,
  },
  {
    id: crypto.randomUUID(),
    title: "Skinny Fit Jeans",
    name: "image 7-1.png",
    rating: 4,
    stock: 20,
    price: 240,
  },
  {
    id: crypto.randomUUID(),
    title: "Checkered Shirt",
    name: "image 8-1.png",
    rating: 5,
    stock: 20,
    price: 180,
  },
  {
    id: crypto.randomUUID(),
    title: "Sleeve Striped T-shirt",
    name: "image 9-1.png",
    rating: 4,
    stock: 20,
    price: 130,
  },
  {
    id: crypto.randomUUID(),
    title: "Vertical Striped Shirt",
    name: "image 8-2.png",
    rating: 4,
    stock: 20,
    price: 212,
  },
  {
    id: crypto.randomUUID(),
    title: "Courage Graphic T-shirt",
    name: "image 9-2.png",
    rating: 3,
    stock: 20,
    price: 145,
  },
  {
    id: crypto.randomUUID(),
    title: "Loose Fit Bermuda Shorts",
    name: "image 9.png",
    rating: 5,
    stock: 5,
    price: 80,
  },
];

const getData = () => allProducts;
export { getData };
