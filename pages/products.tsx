import React from "react";
import Image from "next/image";
import { CartProvider, useCart } from "../src/context/CartContext";
import { useFavorites } from "../src/context/FavoriteContext";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  currency: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "كيلو عسل جبلي",
    description: "كيلو واحد من العسل الطبيعي الأصلي، قطفة ربيع 2025 مع تغليف مميز",
    image: "/images/prod1.webp",
    price: 19.99,
    currency: "د.أ",
  },
  {
    id: 2,
    title: "نصف كيلو عسل جبلي",
    description: "نصف كيلو من العسل الطبيعي الأصلي، قطفة ربيع 2025 مع تغليف مميز",
    image: "/images/prod3.webp",
    price: 11.99,
    currency: "د.أ",
  },
  {
    id: 3,
    title: "حبوب لقاح",
    description: "(250 غم) غنية بالفيتامينات، البروتينات، ومضادات الأكسدة اللي بتقوّي المناعة، تزيد النشاط، وبتدعم صحة الهضم والبشرة",
    image: "/images/prod2.webp",
    price: 5.99,
    currency: "د.أ",
  },
];

const Products = () => {
  const { setTotalItems, cart, setCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();


  const handleAddToCart = (productId: number) => {
    setCart(prev => {
      const newCart = { ...prev, [productId]: 1 };
      setTotalItems(Object.values(newCart).reduce((a, b) => a + b, 0));
      return newCart;
    });
  };

  const incrementQuantity = (productId: number) => {
    setCart(prev => {
      const newCart = { ...prev, [productId]: (prev[productId] || 0) + 1 };
      setTotalItems(Object.values(newCart).reduce((a, b) => a + b, 0));
      return newCart;
    });
  };

  const decrementQuantity = (productId: number) => {
    setCart(prev => {
      const newCart = { ...prev, [productId]: Math.max((prev[productId] || 0) - 1, 0) };
      setTotalItems(Object.values(newCart).reduce((a, b) => a + b, 0));
      return newCart;
    });
  };

  return (
    <div className="container my-6 full-width-invert my-6">
      <div className="row text-center">
        <h2 className="section-title">منتجاتنا</h2>
      </div>
      <div className="row">
        {products.map(product => (
          <div className="col-12 col-md-6 col-lg-4 mb-5" key={product.id}>
            <div className="product-container position-relative mb-1">
              {/* Updated Favorite icon */}
              <span 
                className="fav-icon position-absolute"
                onClick={() => toggleFavorite(product.id)} // ADDED
                style={{ cursor: 'pointer', zIndex: 2 }} // ADDED
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill={favorites.has(product.id) ? "red" : "white"} // MODIFIED
                    stroke={favorites.has(product.id) ? "none" : "black"}
                    strokeWidth={favorites.has(product.id) ? 0 : 2}
                  />
                </svg>
              </span>

              {/* Rest of your existing product code remains unchanged */}
              <div className="prod-img">
                <Image
                  src={product.image}
                  width={300}
                  height={300}
                  alt={product.title}
                  priority={true}
                />
              </div>

              <div className="prod">
                <h3 className="product-title">
                  {product.title}
                  <span className="product-price-responsive">
                    {product.price} {product.currency}
                  </span>
                </h3>
                <p className="prod-desc py-4">{product.description}</p>
                
                {/* Cart controls remain unchanged */}
                {(cart[product.id] || 0) === 0 ? (
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      className="primary-btns d-flex gap-2 mt-3"
                      onClick={() => handleAddToCart(product.id)}
                    >
                      الأضافة الى السلة
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#ffffff"
                      >
                        <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                      </svg>
                    </button>
                    <span className="product-price">
                      {product.price} {product.currency}
                    </span>
                  </div>
                ) : (
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="quantity-buttons d-flex gap-4 align-items-center primary-btns">
                      <button
                        className="decrement-btn"
                        onClick={() => decrementQuantity(product.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#556b2f"
                        >
                          <path d="M240-440q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h480q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H240Z" />
                        </svg>
                      </button>
                      <span className="quantity">{cart[product.id]}</span>
                      <button
                        className="increment-btn"
                        onClick={() => incrementQuantity(product.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#556b2f"
                        >
                          <path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
                        </svg>
                      </button>
                    </div>
                    <span className="product-price">
                      {product.price} {product.currency}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;