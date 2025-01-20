import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <div id="home" className="container mb-5">
      <div
        id="productCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Honey"
          ></button>
          <button
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide-to="1"
            aria-label="Herbs"
          ></button>
          <button
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide-to="2"
            aria-label="Yogurt and Milk"
          ></button>
        </div>

        {/* Carousel Inner */}
        <div className="carousel-inner">
          {/* Honey Section */}
          <div className="carousel-item active">
            <div className="row align-items-center">
              <div className="col-12  col-md-6 col-lg-6-md-6">
                <h1 className="home-label text-center">عسل بلدي اصلي</h1>
                <p className="product-description text-center">
                  يتوفر لدينا عسل طبيعي خالي من الشوائب من جبال السلط
                </p>
              </div>
              <div className="col-12  col-md-6 col-lg-6-md-6">
                <div className="product-image-container text-center">
                  <Image
                    src="/images/honey.webp"
                    width={500}
                    height={500}
                    alt="Honey"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Herbs Section */}
          <div className="carousel-item">
            <div className="row align-items-center">
              <div className="col-12  col-md-6 col-lg-6-md-6">
                <h1 className="home-label text-center">اعشاب علاجية</h1>
                <p className="product-description text-center">
                  يتوفر لدينا العديد من الوصفات العلاجية من خلال استخدام اعشاب وطننا العزيز
                </p>
              </div>
              <div className="col-12  col-md-6 col-lg-6-md-6">
                <div className="product-image-container text-center">
                  <Image
                    src="/images/herbs.webp"
                    width={500}
                    height={500}
                    alt="Herbs"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Yogurt and Milk Section */}
          <div className="carousel-item">
            <div className="row align-items-center">
              <div className="col-12  col-md-6 col-lg-6-md-6">
                <h1 className="home-label text-center text-center">منتجات بقرية</h1>
                <p className="product-description text-center">
                  يتوفر لدينا لمنتجات البقرية من حليب اجبان البان 
                </p>
              </div>
              <div className="col-12  col-md-6 col-lg-6-md-6">
                <div className="product-image-container text-center">
                  <Image
                    src="/images/milk.webp"
                    width={500}
                    height={500}
                    alt="Dairy Products"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Main;
