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
            العسل الجبلي وحبوب اللقاح غنية بالفيتامينات والمضادات الطبيعية اللي
            بتساعد على تقوية جهاز المناعة وتحمي الجسم من الأمراض.
          </div>
          <div className="row">
            <div className="bee-mover d-flex flex-row justify-content-center">
              &nbsp;
            </div>
          </div>
          <div className="row">
            منتجاتنا بتعطيك طاقة مستدامة طول اليوم بفضل السكريات الطبيعية
            والبروتينات اللي فيها، وبتخليك دايمًا في نشاط وحيوية!
          </div>
          <div className="row">&nbsp;</div>
        </div>
        <div className="col-12  col-md-4 col-lg-4 dashed-line-container ">
          <div className="bee-container d-flex justify-content-center">
            <Image
              src="/images/honey-jar.webp"
              width={450}
              height={660}
              alt="honeyJar"
            />
          </div>
        </div>
        <div className="col-12  col-md-4 col-lg-4 left-content  d-flex justify-content-around flex-column">
          <div className="row">&nbsp;</div>
          <div className="row">
            بتحتوي على إنزيمات طبيعية بتساهم في تحسين عملية الهضم، بتساعد على
            تعزيز صحة الجهاز الهضمي بشكل عام.
          </div>
          <div className="row">
            <div className="bee-mover d-flex flex-row justify-content-center">
              &nbsp;
            </div>
          </div>
          <div className="row">
            العسل وحبوب اللقاح مفيدة للبشرة، بتجدد خلايا الجلد وبتقلل
            الالتهابات، مما يساهم في تحسين الصحة العامة للبشرة والشعر.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
