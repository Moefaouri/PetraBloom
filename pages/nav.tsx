import React, { useState } from "react";
import { useRouter } from "next/router";
import { CartProvider, useCart } from "../src/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import CartPage from "./cart";
import { useFavorites } from "../src/context/FavoriteContext";
import FavoritesPage from "./Favorites";

const Nav = () => {
  const router = useRouter();
  const { totalItems, cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const { favorites } = useFavorites();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleFavorites = () => {
    setIsFavoritesOpen(!isFavoritesOpen);
    if (!isFavoritesOpen && isCartOpen) setIsCartOpen(false);
  };

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen); // Toggle cart popup visibility
  };

  return (
    <div className="nav-container p-lg-3 p-sm-2 p-xs-2">
      {/* Conditional Circle Button */}
      {totalItems > 0 && (
        <button className="circle" onClick={handleCartClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="28px"
            viewBox="0 -960 960 960"
            width="28px"
            fill="#556b2f"
          >
            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
          </svg>
          {totalItems > 0 && (
            <span className="badge-counter">{totalItems}</span>
          )}
        </button>
      )}
      <div className="container ">
        <header className="">
          <div className="position-absolute honey-controller">
            <img src="/images/honeyWave.svg" alt="Honey Wave" />
          </div>

          <div className="nav-content  row align-items-center">
            {/* Logo Section */}
            <div className="website-logo d-flex flex-row gap-2 align-items-center col-6 col-md-6 col-lg-3 col-xl-3  ">
              {/* Mobile Menu Toggle */}
              <div className="icon-controller justify-content-center">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleMenu}
                  aria-label="Toggle navigation"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="34px"
                    viewBox="0 -960 960 960"
                    width="34px"
                    fill="#164c29"
                    style={{ transform: "scaleX(-1)" }}
                  >
                    <path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z" />
                  </svg>
                </button>
              </div>
              <Link href="/">
                <Image
                  src="/images/BeedouinLogo.svg"
                  width={100}
                  height={100}
                  alt="Beedouin Logo"
                  priority
                />
              </Link>
            </div>
            {/* Navigation Links */}
            <div className="col-12 col-lg-6 justify-content-center d-none d-lg-flex">
              <nav className="nav">
                <ul className="d-flex flex-column flex-md-column flex-lg-row justify-content-center gap-1 list-unstyled">
                  <li className="nav-item">
                    <Link
                      href="/main"
                      className="nav-link text-decoration-none"
                    >
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
                      href="/ourstory"
                      className="nav-link text-decoration-none"
                    >
                      قصتنا
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/contactUs"
                      className="nav-link text-decoration-none"
                    >
                      التواصل معنا
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Cart & Favorites Section */}
            <div
              className="col-6 col-lg-3  justify-content-end d-flex gap-3 align-items-center position-relative"
              style={{ zIndex: 999 }}
            >
              {/* Cart Icon with Badge */}
              <div className="position-relative d-flex cart gap-3">
                <div
                  onClick={handleCartClick}
                  style={{ cursor: "pointer" }}
                  role="button"
                  aria-label="View Cart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="26px"
                    viewBox="0 -960 960 960"
                    width="26px"
                    fill="#fff"
                  >
                    <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                  </svg>
                  {totalItems >= 0 && (
                    <span className="badge-counter">{totalItems}</span>
                  )}
                </div>
              </div>
              {/* Cart Popup */}
              {isCartOpen && (
                <CartPage
                  cart={encodeURIComponent(JSON.stringify(cart))}
                  onClose={() => setIsCartOpen(false)}
                />
              )}
              <div className="position-relative fav ">
                <span className="badge-counter">{favorites.size}</span>
                <svg
                  onClick={toggleFavorites}
                  xmlns="http://www.w3.org/2000/svg"
                  height="26px"
                  viewBox="0 0 24 24"
                  width="26px"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>

              {/* Favorites Popup */}
              {isFavoritesOpen && (
                <FavoritesPage
                  favorites={Array.from(favorites)}
                  onClose={() => setIsFavoritesOpen(false)}
                />
              )}
            </div>
          </div>
          {/* Navigation Links */}
          <div
            className={`nav-wrapper d-lg-none ${
              isMenuOpen ? "open text-center" : ""
            }`}
          >
            <nav className={`nav ${isMenuOpen ? "open text-center" : ""}`}>
              <ul className="d-flex flex-column flex-md-column flex-lg-row justify-content-center gap-1 list-unstyled">
                <li className="nav-item">
                  <Link
                    href="/main"
                    className="nav-link text-decoration-none"
                    onClick={toggleMenu}
                  >
                    الصفحة الرئيسية
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/products"
                    className="nav-link text-decoration-none"
                    onClick={toggleMenu}
                  >
                    منتجاتنا
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/advantages"
                    className="nav-link text-decoration-none"
                    onClick={toggleMenu}
                  >
                    الفوائد
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/ourstory"
                    className="nav-link text-decoration-none"
                    onClick={toggleMenu}
                  >
                    قصتنا
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/contactUs"
                    className="nav-link text-decoration-none"
                    onClick={toggleMenu}
                  >
                    التواصل معنا
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Nav;
