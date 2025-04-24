import React from "react";
import Image from "next/image";

const Advantages = () => {
  return (
    <div className="container position-relative my-6">
      {/* Randomly Distributed Leaves */}
      <Image
        src="/images/leaf.png"
        alt="leaf"
        width={50}
        height={50}
        className="leaf leaf-1"
      />
      <Image
        src="/images/leaf.png"
        alt="leaf"
        width={70}
        height={70}
        className="leaf leaf-2"
      />
      <Image
        src="/images/leaf.png"
        alt="leaf"
        width={40}
        height={40}
        className="leaf leaf-3"
      />
      <Image
        src="/images/leaf.png"
        alt="leaf"
        width={60}
        height={60}
        className="leaf leaf-4"
      />
      <Image
        src="/images/leaf.png"
        alt="leaf"
        width={80}
        height={80}
        className="leaf leaf-5"
      />
      <Image
        src="/images/leaf.png"
        alt="leaf"
        width={80}
        height={80}
        className="leaf leaf-6"
      />

      {/* Main Content */}
      <div className="row text-center ">
        <h2 className="section-title">الفوائد</h2>
      </div>
      <div className="row">
        <div className="col-12  col-md-4 col-lg-4 right-content  d-flex flex-column justify-content-around">
          <div className="row">
            منتجاتنا الأفضل في السوق لأنها طبيعية من مزارعنا المنتشرة في أرجاء
            المملكة ولا تحتوي على مواد حافظة.
          </div>
          <div className="row">
            <div className="bee-mover d-flex flex-row justify-content-center">
              &nbsp;
            </div>
          </div>
          <div className="row">
            يوفر العسل طاقة سريعة للجسم بسبب احتوائه على السكريات الطبيعية مثل
            الجلوكوز والفركتوز.
          </div>
          <div className="row">&nbsp;</div>
        </div>
        <div className="col-12  col-md-4 col-lg-4 dashed-line-container ">
          <div className="bee-container d-flex justify-content-center">
            <Image
              src="/images/Layer2.png"
              width={450}
              height={660}
              alt="dashed line"
            />
          </div>
        </div>
        <div className="col-12  col-md-4 col-lg-4 left-content  d-flex justify-content-around flex-column">
          <div className="row">&nbsp;</div>
          <div className="row">
            منتجاتنا الأفضل في السوق لأنها طبيعية من مزارعنا المنتشرة في أرجاء
            المملكة ولا تحتوي على مواد حافظة.
          </div>
          <div className="row">
            <div className="bee-mover d-flex flex-row justify-content-center">
              &nbsp;
            </div>
          </div>
          <div className="row">
            يوفر العسل طاقة سريعة للجسم بسبب احتوائه على السكريات الطبيعية مثل
            الجلوكوز والفركتوز.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
