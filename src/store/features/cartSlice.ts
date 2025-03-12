import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../Types/Types";

interface CartItem extends Product {
  quantity: number;
  firstImage: string;
}

interface CartState {
  items: CartItem[];
}

const loadCartFromLocalStorage = (): CartItem[] => {
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : [];
};

const saveCartToLocalStorage = (items: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

const initialState: CartState = {
  items: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<Product & { quantity: number }>
    ) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      // Extract the first image from the `image` field
      const firstImage =
        typeof product.image === "string"
          ? product.image.split(",")[0]?.trim() || ""
          : "";

      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        state.items.push({
          ...product,
          quantity: product.quantity,
          firstImage, // Add the first image
        });
      }

      saveCartToLocalStorage(state.items);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
      saveCartToLocalStorage(state.items);
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
        saveCartToLocalStorage(state.items);
      }
    },

    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state.items);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
