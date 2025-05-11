import Image from "next/image";
// pages/404.js
export default function Custom404() {
    return (
      <div className="error-container d-flex flex-column justify-content-center align-items-center text-center p-4 position-relative">
        <Image
          src="/images/404.webp"
          alt="404 Not Found"
          width={250}
          height={250}
          className="error-image"
          />
        <h1 className="display-1 mb-3">404</h1>
        <h2 className="h2 mb-2">الصفحة غير موجودة</h2>
        <p className="h5 text-muted mb-4">
          عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <a href="/" className="primary-btns error-btn">
          العودة إلى الصفحة الرئيسية
        </a>
      </div>
    );
  }
  