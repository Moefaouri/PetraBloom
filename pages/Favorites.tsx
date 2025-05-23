import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useFavorites } from "../src/context/FavoriteContext";
import { motion } from "framer-motion";

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


interface FavoritesPageProps {
  favorites?: number[];
  onClose: () => void;
}

const FavoritesPage = ({ favorites = [], onClose }: FavoritesPageProps) => {
  const router = useRouter(); // Use Next.js router for navigation
  const { toggleFavorite } = useFavorites() || { toggleFavorite: () => {} };
  const [isLoading, setIsLoading] = useState(false); // State for loader

  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  const handleNavigation = async () => {
    setIsLoading(true); // Show loader
    onClose(); // Close popup
    await router.push("/products"); // Navigate to the products page
    setIsLoading(false); // Hide loader after navigation
  };

  return (
    <>
      {/* Overlay */}
      <motion.div
        key="overlay"
        className={`cart-overlay ${onClose ? "open" : ""}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />

      {/* Popup */}
      <motion.div
        key="popup"
        className={`cart-popup ${onClose ? "open" : ""}`}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
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

          {/* Loader */}
          {isLoading && (
            <div className="loader-container">
              <div className="loader"></div>
              <p>جاري التحميل...</p>
            </div>
          )}

          {/* Display favorite products */}
          {!isLoading &&
            (favoriteProducts.length > 0 ? (
              favoriteProducts.map((product) => (
                <div
                  key={product.id}
                  className="card mb-3 shadow-sm arabic-card"
                >
                  <div className="row g-0 align-items-center">
                    <div className="col-0 col-sm-4 position-relative">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={200}
                        height={200}
                        className="img-fluid product-image p-4"
                      />
                    </div>
                    <div className="col-12 col-sm-8 py-4">
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
                          <div
                            className="btn btn-primary w-100 mt-2 py-2 arabic-button"
                            onClick={handleNavigation}
                          >
                            الذهاب الى المنتج
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
            ))}
        </div>
      </motion.div>

      <style jsx>{`
        .loader-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 50px;
        }
        .loader {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default FavoritesPage;
