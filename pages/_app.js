import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "../styles/reset.css"; // Your reset CSS
import "../styles/global.css"; // Your global styles
import "../styles/media.css"; // Your media queries or additional global styles
import Head from "next/head";
import { CartProvider } from "./TotalContext"; // Adjust the path as needed


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
    </>
  );
}

export default MyApp;
