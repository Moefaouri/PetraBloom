import React, { createContext, useState } from "react";

interface CartContextType {
    totalItems: number;
    setTotalItems: React.Dispatch<React.SetStateAction<number>>;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [totalItems, setTotalItems] = useState(0);

    return (
        <CartContext.Provider value={{ totalItems, setTotalItems }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
