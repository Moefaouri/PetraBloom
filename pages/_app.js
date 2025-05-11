import React from "react";
import Head from "next/head";
import { CartProvider, useCart } from "../src/context/CartContext";
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
        <meta
          name="description"
          content="بيودوين هو وجهتك الأولى لشراء العسل المحلي الفاخر. اكتشف أفضل أنواع العسل الأردني، ومنتجات النحل، والنكهات الفريدة، وكل ذلك يتم توصيله إليك مباشرة."
        />
        <meta
          name="keywords"
          content="عسل أردني, عسل بلدي, عسل طبيعي, متجر عسل, عسل عضوي, عسل خام, منتجات النحل, هدايا عسل, عسل أونلاين الأردن, jordanian honey, natural honey, raw honey, organic honey, bee products, honey gifts, online honey store"
        />
        <meta
          name="google-site-verification"
          content="sufZkCMsEi99KK1hbpwzlN500G2nRDIs9YhcKivdcUw"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Store",
                  "@id": "https://www.beedouin.com/#organization",
                  name: "Beedouin | بيدوين",
                  description:
                    "متجر بيودوين يقدم عسل بلدي طبيعي 100% من مناحل السلط، مع توصيل سريع داخل الأردن.",
                  founder: {
                    "@type": "Person",
                    name: "Mansour Nsour",
                    image: "https://www.beedouin.com/images/BeedouinLogo.svg",
                    jobTitle: "Founder",
                    sameAs: "https://www.facebook.com/beedouin",
                  },
                  by: "Mohammad Elfauri",
                  logo: {
                    "@type": "ImageObject",
                    "@id": "https://www.beedouin.com/images/BeedouinLogo.svg",
                    url: "https://www.beedouin.com/images/BeedouinLogo.svg",
                    caption: "Beedouin",
                  },
                  url: "https://www.beedouin.com",
                  sameAs: [
                    "https://www.facebook.com/beedouin",
                    "https://www.instagram.com/beedouin.jo",
                  ],
                  email: "mnsour17@gmail.com",
                  telephone: "+962790137445",
                  priceRange: "$",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "عمان",
                    addressRegion: "عمان",
                    addressCountry: "الأردن",
                  },
                  openingHours: [
                    "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday 00:00-24:00",
                  ],
                  paymentAccepted: "Cash, Cliq",
                  currenciesAccepted: "JOD",
                },
                {
                  "@type": "Place",
                  "@id": "https://www.beedouin.com/#place",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "عمان",
                    addressRegion: "عمان",
                    addressCountry: "الأردن",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.beedouin.com/",
                  url: "https://www.beedouin.com",
                  name: "Beedouin",
                  alternateName: "بيدوين",
                  publisher: {
                    "@id": "https://www.beedouin.com/",
                  },
                  inLanguage: "ar",
                },
                {
                  "@type": "ListItem",
                  position: "2",
                  item: {
                    "@id": "https://www.beedouin.com/products/",
                    name: "المتجر",
                  },
                },
                {
                  "@type": "CollectionPage",
                  "@id": "https://www.beedouin.com/products/",
                  url: "https://www.beedouin.com/products/",
                  name: "المتجر - Beedouin | بيدوين",
                  isPartOf: {
                    "@id": "https://www.beedouin.com/",
                  },
                },
              ],
            }),
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>

        <title>Beedouin</title>
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
