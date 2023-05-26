/**
 * Constante que representa la clave utilizada para almacenar y recuperar
 * el carrito de productos en el almacenamiento local.
 */
const PRODUCT_CART = "productsCart";

/**
 * Obtiene el carrito de productos almacenado en el almacenamiento local.
 *
 * @returns {Array} El carrito de productos almacenado en forma de matriz.
 */
export function getProductsCart() {
  const response = localStorage.getItem(PRODUCT_CART);
  return JSON.parse(response || "[]");
}

/**
 * Agrega un producto al carrito de productos.
 *
 * @param {number} id El ID del producto a agregar.
 */
export function addProductCart(id) {
  const products = getProductsCart();
  products.push(id);
  localStorage.setItem(PRODUCT_CART, JSON.stringify(products));
}

/**
 * Elimina un producto del carrito de productos mediante su índice.
 *
 * @param {number} index El índice del producto a eliminar.
 */
export function removeProductCartApi(index) {
  const idProducts = getProductsCart();
  idProducts.splice(index, 1);
  localStorage.setItem(PRODUCT_CART, JSON.stringify(idProducts));
}

/**
 * Limpia el carrito de productos, eliminando todos los productos almacenados.
 */
export function cleanProductCartApi() {
  localStorage.removeItem(PRODUCT_CART);
}
