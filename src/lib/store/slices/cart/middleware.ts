"use client";
const saveCartToLocalStorage = (storeAPI) => (next) => (action) => {
  const result = next(action);

  if (["cart/addToCart", "cart/removeFromCart"].includes(action.type)) {
    const state = storeAPI.getState();
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }

  return result;
};

export default saveCartToLocalStorage;
