import React, { useEffect, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "./TotalContext"; // Adjust the path as needed

const Nav = () => {
  const { totalItems } = useContext(CartContext); // Access the totalItems from context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <div className="container">
      <header className="">
        <div className="position-absolute honey-controller">
          <svg
            id="wave"
            viewBox="0 0 1440 240"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="rgba(212, 175, 55, 1)" offset="0%"></stop>
                <stop stopColor="rgba(212, 175, 55, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient-0)"
              d="M0,168L10,164C20,160,40,152,60,128C80,104,100,64,120,76C140,88,160,152,180,148C200,144,220,72,240,48C260,24,280,48,300,76C320,104,340,136,360,128C380,120,400,72,420,76C440,80,460,136,480,140C500,144,520,96,540,96C560,96,580,144,600,152C620,160,640,128,660,120C680,112,700,128,720,116C740,104,760,64,780,64C800,64,820,104,840,116C860,128,880,112,900,108C920,104,940,112,960,128C980,144,1000,168,1020,176C1040,184,1060,176,1080,168C1100,160,1120,152,1140,132C1160,112,1180,80,1200,60C1220,40,1240,32,1260,48C1280,64,1300,104,1320,116C1340,128,1360,112,1380,116C1400,120,1420,144,1430,156L1440,168L1440,240L1430,240C1420,240,1400,240,1380,240C1360,240,1340,240,1320,240C1300,240,1280,240,1260,240C1240,240,1220,240,1200,240C1180,240,1160,240,1140,240C1120,240,1100,240,1080,240C1060,240,1040,240,1020,240C1000,240,980,240,960,240C940,240,920,240,900,240C880,240,860,240,840,240C820,240,800,240,780,240C760,240,740,240,720,240C700,240,680,240,660,240C640,240,620,240,600,240C580,240,560,240,540,240C520,240,500,240,480,240C460,240,440,240,420,240C400,240,380,240,360,240C340,240,320,240,300,240C280,240,260,240,240,240C220,240,200,240,180,240C160,240,140,240,120,240C100,240,80,240,60,240C40,240,20,240,10,240L0,240Z"
            ></path>
          </svg>
        </div>
        <div className="nav-content mt-3 row align-items-center">
          {/* Logo and Text */}
          <div className="website-logo d-flex flex-row gap-2 align-items-center col-10 col-md-10 col-lg-3 col-xl-2">
            <Image
              src="/images/logo.png"
              width={80}
              height={80}
              alt="my image"
            />
            <h2>بترا بلوم</h2>
          </div>
          {/* Hamburger Menu Button */}
          <div className="col-2 icon-controller">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>
          {/* Navigation Links */}
          <div
            className={`col-12 col-lg-7 col-xl-6 ${isMenuOpen ? "d-block" : "d-none d-lg-flex"}`}
          >
            <nav className={`nav ${isMenuOpen ? "open text-center" : ""}`}>
              <ul className="d-flex flex-column flex-md-column flex-lg-row justify-content-center gap-1 list-unstyled">
                <li className="nav-item">
                  <Link href="/" className="nav-link text-decoration-none">
                    الصفحة الرئيسية
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/products"
                    className="nav-link text-decoration-none"
                  >
                    منتجاتنا
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/advantages"
                    className="nav-link text-decoration-none"
                  >
                    الفوائد
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/our-story"
                    className="nav-link text-decoration-none"
                  >
                    قصتنا
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/contact"
                    className="nav-link text-decoration-none"
                  >
                    التواصل معنا
                  </Link>
                </li>
              </ul>
              {/* Social Media Icons (Visible only when menu is open on small screens) */}
              {isMenuOpen && (
                <div className="social-media d-flex flex-row justify-content-center gap-3 mt-3">
                  {/* Add your social media icons here */}
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                </div>
              )}
            </nav>
          </div>
          {/* Social Media and Icons (Hidden on Small Screens) */}
          <div className="social-media d-none d-lg-flex flex-row justify-content-around col-2 col-xl-2">
            <a
              target="_blank"
              className="Social-media-icon"
              href="https://www.instagram.com/your-profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="20px"
                height="20px"
                fill="#556B2F"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a
              target="_blank"
              className="Social-media-icon"
              href="https://www.facebook.com/your-profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                width="20px"
                height="20px"
                fill="#556B2F"
              >
                <path d="M279.14 288l14.22-92.66h-88.91V133.3c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.36 44.38-121.36 124.72v70.62H22.89V288h81.11v224h100.2V288z" />
              </svg>
            </a>
            <a
              target="_blank"
              className="Social-media-icon"
              href="https://twitter.com/your-profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="20px"
                height="20px"
                fill="#556B2F"
              >
                <path d="M384 121.9L232.6 288 381.1 470H297.6L191.9 324.3 87.5 470H2.9L151.7 288 0 121.9h85.6l107.5 132.3L300.5 121.9H384z" />
              </svg>
            </a>
          </div>
          <div
            className="col-2 col-xl-2 justify-content-end d-flex gap-3 align-items-center position-relative"
            style={{ zIndex: 999 }}
          >
            {/* Cart Icon */}
            <div className="position-relative d-flex cart gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28px"
                viewBox="0 -960 960 960"
                width="28px"
                fill="#fff" // Change to a visible color for debugging
              >
                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
              </svg>
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItems}
                </span>
              )}
            

            {/* Favorite Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 0 24 24"
              width="28px"
              fill="#fff" // Change to a visible color for debugging
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
