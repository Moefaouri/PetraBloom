import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="container my-5">
      <div className="row text-center">
        <h2 className="section-title">التواصل معنا</h2>
      </div>
      <div className="row">
        <div className="col-12  col-md-6 col-lg-6 my-5">
          <div className="form-controller">
            <p className="py-4 contact-text">
              للتواصل معنا يرجى تعبئة جميع الحقول وسنقوم بالرد عليك في اسرع وقت
              ممكن
            </p>
            <form
              action="mailto:mnsour17@gmail.com" // The recipient's email address
              method="POST" // POST method to send the form data
              enctype="text/plain" // Ensures data is sent as plain text
              className="d-flex flex-column gap-4 mb-3"
            >
              <input
                placeholder="ايميلك الشخصي"
                type="email"
                name="email"
                className="form-control"
                required
              />
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="رقم الهاتف"
                style={{ direction: "rtl" }}
                pattern="[0-9]{10}"
                required
              />
              <textarea
                name="message"
                className="form-control custom-textarea"
                placeholder="محتوى الرسالة"
                required
              />
              <div className="Submit-button">
                <button
                  type="submit"
                  className="btn btn-primary w-100 custom-btn"
                >
                  ارسال
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-12  col-md-6 col-lg-6 my-5 position-relative">
          <div className="contact-honey contact-img ">
            <Image
              src="/images/contact-honey.webp"
              width={200}
              height={200}
              alt="Honey"
            />
          </div>
          <div className="contact-herbs contact-img">
            <Image
              src="/images/contact-herbs.webp"
              width={200}
              height={200}
              alt="Honey"
            />
          </div>
          <div className="contact-milk contact-img">
            <Image
              src="/images/contact-milk.webp"
              width={200}
              height={200}
              alt="Honey"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
