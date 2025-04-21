import React from "react";
import Image from "next/image";
import { useCart } from "../src/context/CartContext";

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
    description: "اعشاب بلدية ووصفات طبية لعلاج الكثير من الامراض كلها من جبال بلدنا",
    image: "/images/herbs.webp",
    price: 20,
    currency: "د.أ",
  },
];

const CartPage = ({ cart, onClose }) => {
  const { setCart, setTotalItems } = useCart();

  // Handle item removal
  const handleRemove = (productId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      const removedQuantity = newCart[productId] || 0; // Get the quantity being removed
      delete newCart[productId];
      setTotalItems((prevTotal) => prevTotal - removedQuantity); // Update the total items
      return newCart;
    });
  };

  // Safely parse cart data
  let parsedCart = {};
  try {
    parsedCart =
      typeof cart === "string"
        ? JSON.parse(decodeURIComponent(cart))
        : cart || {};
  } catch (error) {
    console.error("Failed to parse cart data:", error);
    parsedCart = {};
  }

  // Filter and map cart items
  const selectedItems = Object.keys(parsedCart)
    .filter((productId) => parsedCart[productId] > 0)
    .map((productId) => {
      const product = products.find((p) => p.id === parseInt(productId));
      return product
        ? {
            ...product,
            quantity: parsedCart[productId],
          }
        : null;
    })
    .filter((item) => item !== null);

  // Calculate total
  const total = selectedItems.reduce((sum, item) => {
    return sum + (item?.price || 0) * (item?.quantity || 0);
  }, 0);

  return (
    <>
      <div
        className={`cart-overlay ${onClose ? "open" : ""}`}
        onClick={onClose}
      ></div>

      <div className="cart-popup open">
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

        <div className="container py-5">
          <h2 className="text-center mb-4 section-title-n-m">سلة التسوق</h2>

          {selectedItems.length > 0 ? (
            selectedItems.map(
              (item) =>
                item && (
                  <div
                    key={item.id}
                    className="card mb-3 shadow-sm arabic-card"
                  >
                    <div className="row g-0">
                      <div className="col-md-4 position-relative">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="img-fluid product-image p-4"
                        />
                      </div>
                      <div className="col-md-8 py-4">
                        <div className="card-body">
                          <div className="d-flex flex-row justify-content-between align-items-center">
                            <div className="card-title arabic-text">
                              <h5>{item.title}</h5>
                            </div>
                            <button
                              className="remove-btn pt-4"
                              onClick={() => handleRemove(item.id)}
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
                          <div className="d-flex flex-column gap-2">
                            <div className="d-flex justify-content-between">
                              <span className="text-muted">السعر:</span>
                              <span>
                                {item.price} {item.currency}
                              </span>
                            </div>
                            <div className="d-flex justify-content-between">
                              <span className="text-muted">الكمية:</span>
                              <span>{item.quantity}</span>
                            </div>
                            <div className="d-flex justify-content-between fw-bold">
                              <span>المجموع:</span>
                              <span>
                                {item.price * item.quantity} {item.currency}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )
          ) : (
            <div className="text-center py-5">
              <div className="empty-cart-icon mb-3">🛒</div>
              <p className="text-muted fs-5">لا توجد عناصر في السلة</p>
            </div>
          )}

          {selectedItems.length > 0 && (
            <div className="card shadow-lg mt-4 arabic-card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="mb-0 arabic-text">المجموع الكلي:</h4>
                  <h4 className="mb-0 text-success">{total} د.أ</h4>
                </div>
                <hr />
                <button className="btn btn-primary w-100 py-2 arabic-button">
                  إتمام الشراء
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
