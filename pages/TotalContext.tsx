// CartContext.tsx
import React, { createContext, useState, useContext } from "react";

interface CartState {
  [productId: number]: number;
}

interface CartContextType {
  totalItems: number;
  setTotalItems: React.Dispatch<React.SetStateAction<number>>;
  cart: CartState;
  setCart: React.Dispatch<React.SetStateAction<CartState>>;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [totalItems, setTotalItems] = useState(0);
  const [cart, setCart] = useState<CartState>({ 1: 0, 2: 0, 3: 0 });

  return (
    <CartContext.Provider value={{ totalItems, setTotalItems, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};