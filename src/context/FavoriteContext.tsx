import React, { createContext, useContext, useState } from 'react';

type FavoriteContextType = {
  favorites: Set<number>;
  toggleFavorite: (productId: number) => void;
};

const FavoriteContext = createContext<FavoriteContextType>({
  favorites: new Set(),
  toggleFavorite: () => {}
});

export const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoriteContext);