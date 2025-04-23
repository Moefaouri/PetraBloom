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
    description:
      "اعشاب بلدية ووصفات طبية لعلاج الكثير من الامراض كلها من جبال بلدنا",
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
                <div className="d-flex flex-column ">
                  <h4 className="mb-3 arabic-text"> طريقة الدفع:</h4>
                  <form
                    id="payment-method-form"
                    className="d-flex flex-column gap-2"
                  >
                    <div className="form-check">
                      <input
                        type="radio"
                        id="pay-on-delivery"
                        name="payment-method"
                        value="الدفع عند الاستلام"
                        className="form-check-input"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="pay-on-delivery"
                      >
                        الدفع عند الاستلام
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        type="radio"
                        id="pay-by-cliq"
                        name="payment-method"
                        value="كليك"
                        className="form-check-input"
                      />
                      <label className="form-check-label" htmlFor="pay-by-cliq">
                        الدفع عبر كليك
                      </label>
                    </div>
                  </form>
                </div>
              </div>
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
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();

                    const paymentMethod =
                      (
                        document.querySelector(
                          'input[name="payment-method"]:checked'
                        ) as HTMLInputElement
                      )?.value || "غير محدد";

                    let message = "مرحبًا، أود إتمام الطلب التالي:\n";
                    selectedItems.forEach((item) => {
                      message += `${item.quantity} \u00D7 ${item.title} = ${
                        item.price * item.quantity
                      } ${item.currency}\n`;
                    });
                    message += `المجموع الكلي: ${total} د.أ\n`;
                    message += `طريقة الدفع: ${paymentMethod}`;

                    const whatsappLink = `https://wa.me/962786067097?text=${encodeURIComponent(
                      message
                    )}`;
                    window.open(whatsappLink, "_blank");
                  }}
                  className="btn btn-success w-100 py-2 arabic-button d-flex justify-content-center align-items-center gap-2 pay-btn"
                >
                  <span>
                  إتمام الشراء عبر واتساب
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={{ fill: "#fff", 
                      height: "32px",
                      width: "32px" }}
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
