import { ProductCardProps } from "@/components/shourov/ProductCard";
import { createStore } from "zustand/vanilla";

interface CartItemProps extends ProductCardProps {
  quantity: number;
}
export type CartState = {
  cart: CartItemProps[];
};

export type CartActions = {
  addToCart: (item: CartItemProps) => void;
  removeToCart: (id: number) => void;
};

export type CartStore = CartState & CartActions;

export const defaultInitState: CartState = {
  cart: [],
};

export const createCartStore = (initState: CartState = defaultInitState) => {
  return createStore<CartStore>()((set) => ({
    ...initState,
    addToCart: (item: CartItemProps) =>
      set((state) => {
        // const existing = state.cart.find(
        // 	(c) => c.productName === item.productName,
        // );
        // console.log(existing);
        // if (existing) {
        // 	// Increment quantity if item already in cart
        // 	return {
        // 		cart: state.cart.map((c) =>
        // 			c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c,
        // 		),
        // 	};
        // }

        // console.log(state);

        return {
          ...state,
          cart: [...state.cart, item],
        };
      }),
    removeToCart: (id: number) =>
      set((state) => ({
        ...state,
        cart: state.cart.filter((item) => item.id !== id),
      })),
  }));
};
