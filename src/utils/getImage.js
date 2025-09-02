function getImage(name) {
  return new URL(`../assets/productsimage/${name}`, import.meta.url).href;
}
export { getImage };
