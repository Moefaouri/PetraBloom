import React, { useState } from "react";
import Image from "next/image";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("message", formData.message);
  
    const response = await fetch("https://formspree.io/f/xkgropwg", {
      method: "POST",
      headers: {
        "Accept": "application/json",
      },
      body: formDataToSend,
    });
  
    if (response.ok) {
      setSuccess(true);
      setFormData({ email: "", phone: "", message: "" });
    } else {
      alert("حدث خطأ أثناء إرسال النموذج. حاول مرة أخرى.");
    }
  };
  
  

  return (
    <div className="container my-6">
      <div className="row text-center">
        <h2 className="section-title">التواصل معنا</h2>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6">
          <div className="form-controller">
            <p className="py-4 contact-text">
              للتواصل معنا يرجى تعبئة جميع الحقول وسنقوم بالرد عليك في اسرع وقت ممكن
            </p>

            {/* Success alert */}
            {success && (
              <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>شكراً لتواصلك معنا!</strong> تم إرسال رسالتك بنجاح، وسنقوم بالرد عليك في أقرب وقت ممكن.
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="إغلاق"
                  onClick={() => setSuccess(false)}
                ></button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="d-flex flex-column gap-4 mb-3">
              <input
                placeholder="ايميلك الشخصي"
                type="email"
                name="email"
                autoComplete="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                className="form-control"
                placeholder="رقم الهاتف"
                style={{ direction: "rtl" }}
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                className="form-control custom-textarea"
                placeholder="محتوى الرسالة"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <div className="Submit-button">
                <button type="submit" className="btn btn-primary w-100 custom-btn">
                  ارسال
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-6 my-6 position-relative responsive-images">
          <div className="contact-honey contact-img">
            <Image src="/images/contact-honey.webp" width={200} height={200} alt="Honey" />
          </div>
          <div className="contact-herbs contact-img">
            <Image src="/images/contact-herbs.webp" width={200} height={200} alt="Herbs" />
          </div>
          <div className="contact-milk contact-img">
            <Image src="/images/contact-milk.webp" width={200} height={200} alt="Milk" />
          </div>
        </div>
      </div>

      <div className="row my-6">
        <div className="col">
          <ul className="social_links d-flex flex-row gap-4 justify-content-center align-content-center" id="login">
            <li>
              <a id="facebook_dlink" href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/facebook.png" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/twitter.png" alt="X (Twitter)" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
