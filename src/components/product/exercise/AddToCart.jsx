import { useContext } from "react";
import { CartContext } from "./cartProvider";

export function AddToCart({ product}) {

  const {cart,setCart}=useContext(CartContext)

  const isInCart = cart.some((cartProduct) => cartProduct.id === product.id);

  function handleAddToCart() {
    setCart((currentCart) => [...currentCart, product]);
  }

  return (
    <button
      className="rounded-md bg-stone-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
      type="button"
      onClick={handleAddToCart}
    >
      {isInCart ? 'Add another' : 'Add to cart'}
    </button>
  );
}
