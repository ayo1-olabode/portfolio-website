import React from "react";
import Navbar from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
import Hero from "../Components/Hero/Hero";

export default function Home() {
  return (
    <div className="page-container">
      <div className=".content-wrap">
        <Navbar />
        <section>
          <Hero />
        </section>
      </div>
      <Footer />
    </div>
  );
}
