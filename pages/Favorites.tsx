import React from "react";
import Image from "next/image";
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
    title: "عسل",
    description: "عسل طبيعي من جبال السلط بلدي واصلي 100% 'الأكثر مبيعا'",
    image: "/images/honey.webp",
    price: 20,
    currency: "د.أ",
  },
  {
    id: 2,
    title: "البان",
    description: "لبن بلدي من ايادي سيدات عصاميات بلدي يمتاز بجودته العالية",
    image: "/images/milk.webp",
    price: 20,
    currency: "د.أ",
  },
  {
    id: 3,
    title: "اعشاب",
    description:
      "اعشاب بلدية ووصفات طبية لعلاج الكثير من الامراض كلها من جبال بلدنا",
    image: "/images/herbs.webp",
    price: 20,
    currency: "د.أ",
  },
];

interface FavoritesPageProps {
  favorites?: number[]; // Optional to handle undefined cases.
  onClose: () => void;
}

const FavoritesPage = ({ favorites = [], onClose }: FavoritesPageProps) => {
  const { toggleFavorite } = useFavorites() || { toggleFavorite: () => {} }; // Fallback to avoid errors.

  // Filter favorite products safely.
  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <>
      {/* Overlay */}
      <div className="cart-overlay open" onClick={onClose}></div>

      {/* Popup */}
      <div className="cart-popup open">
        <div className="container py-5">
          <h2 className="text-center mb-4 section-title-n-m">المفضلة</h2>
          <button className="close-button" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32px"
              viewBox="0 -960 960 960"
              width="32px"
              fill="#000"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>

          {/* Display favorite products */}
          {favoriteProducts.length > 0 ? (
            favoriteProducts.map((product) => (
              <div key={product.id} className="card mb-3 shadow-sm arabic-card">
                <div className="row g-0">
                  <div className="col-md-4 position-relative">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={200}
                      height={200}
                      className="img-fluid product-image p-4"
                    />
                  </div>
                  <div className="col-md-8 py-4">
                    <div className="card-body">
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <div className="card-title arabic-text">
                          <h5>{product.title}</h5>
                        </div>
                        <button
                          className="remove-btn pt-4"
                          onClick={() => toggleFavorite(product.id)}
                          aria-label="Remove"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="#ff4444"
                          >
                            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                          </svg>
                        </button>
                      </div>
                      <div className="d-flex flex-column gap-2 mt-3">
                        <p className="fw-bold m-0">{product.description}</p>
                        <div className="d-flex justify-content-between">
                          <span className="text-muted">السعر:</span>
                          <span>
                            {product.price} {product.currency}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-5">
              <div className="empty-cart-icon mb-3">❤️</div>
              <p className="text-muted fs-5">لا توجد عناصر في المفضلة</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FavoritesPage;
