import React from "react";
import Nav from "./nav";
import Main from "./main";
import Products from "./products";
import Advantages from "./advantages"
import OurStory from "./ourstory"
import ContactUs from "./contactUs"

const Home = () => {
  return (
    <div>
      <Nav />
      <Main />
      <Products />
      <Advantages />
      <OurStory />
      <ContactUs />
    </div>
  );
};

export default Home;
