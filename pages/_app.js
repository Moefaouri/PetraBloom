import React from "react";
import Head from "next/head";
import { CartProvider, useCart } from "../src/context/CartContext"; // Adjusted to match your context file
import { FavoriteProvider } from "../src/context/FavoriteContext";
import Nav from "./nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/reset.css";
import "../styles/global.css";
import "../styles/media.css";
import "../styles/fonts.css";
import { Analytics } from "@vercel/analytics/react";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="/images/favicon-32x32.png"
          type="image/png"
        ></link>
      </Head>

      <CartProvider>
        <FavoriteProvider>
          <Nav />
          <Component {...pageProps} />
          <Analytics />
        </FavoriteProvider>
      </CartProvider>

      {/* Add Bootstrap JS */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
        async
      ></script>
    </>
  );
}

export default MyApp;
