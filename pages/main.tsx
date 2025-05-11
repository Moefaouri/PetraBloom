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
                <h1 className="home-label text-center">عسل بلدي</h1>
                <p className="product-description text-center">
                  أصلي، عضوي، حُر، وغير معالج بالحرارة
                </p>
              </div>
              <div className="col-12  col-md-6 col-lg-6-md-6">
                <div className="product-image-container text-center">
                  <Image
                    src="/images/items.webp"
                    width={500}
                    height={500}
                    alt="items"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Herbs Section */}
          <div className="carousel-item">
            <div className="row align-items-center">
              <div className="col-12  col-md-6 col-lg-6-md-6">
                <h1 className="home-label text-center">حبوب لقاح</h1>
                <p className="product-description text-center">
                  غنية بالفيتامينات والبروتين، لتعزيز المناعة وتغذية الجسم
                </p>
              </div>
              <div className="col-12  col-md-6 col-lg-6-md-6">
                <div className="product-image-container text-center">
                  <Image
                    src="/images/bees.webp"
                    width={500}
                    height={500}
                    alt="bees"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Yogurt and Milk Section */}
          <div className="carousel-item">
            <div className="row align-items-center">
              <div className="col-12  col-md-6 col-lg-6-md-6">
                <h1 className="home-label text-center text-center">
                  توصيل مجاني
                </h1>
                <p className="product-description text-center">
                  توصيل مجاني وسريع لكل أنحاء المملكة
                   للطلبات فوق 15 دينار
                </p>
              </div>
              <div className="col-12  col-md-6 col-lg-6-md-6">
                <div className="product-image-container text-center">
                  <Image
                    src="/images/Amman.webp"
                    width={500}
                    height={500}
                    alt="Amman"
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
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Main;
