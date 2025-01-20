import { useRouter } from "next/router";
import Nav from "./nav";

const CartPage = () => {
  const router = useRouter();
  const { cart } = router.query;

  const products = [
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

  // Parse cart data from URL
  const parsedCart = cart ? JSON.parse(decodeURIComponent(cart as string)) : {};

  // Filter and map cart items
  const selectedItems = Object.keys(parsedCart)
    .filter((productId) => parsedCart[productId] > 0)
    .map((productId) => {
      const product = products.find((p) => p.id === parseInt(productId));
      return product ? {
        ...product,
        quantity: parsedCart[productId]
      } : null;
    })
    .filter(item => item !== null); // Remove null entries

  // Calculate total
  const total = selectedItems.reduce((sum, item) => {
    return sum + (item?.price || 0) * (item?.quantity || 0);
  }, 0);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 arabic-title">سلة التسوق</h2>
      
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {selectedItems.length > 0 ? (
            selectedItems.map((item) => (
              item && (
                <div key={item.id} className="card mb-3 shadow-sm arabic-card">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid rounded-start product-image"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title arabic-text">{item.title}</h5>
                        <div className="d-flex flex-column gap-2">
                          <div className="d-flex justify-content-between">
                            <span className="text-muted">السعر:</span>
                            <span>{item.price} {item.currency}</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span className="text-muted">الكمية:</span>
                            <span>{item.quantity}</span>
                          </div>
                          <div className="d-flex justify-content-between fw-bold">
                            <span>المجموع:</span>
                            <span>{item.price * item.quantity} {item.currency}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))
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
                <button className="btn btn-primary w-100 py-3 arabic-button">
                  إتمام الشراء
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;