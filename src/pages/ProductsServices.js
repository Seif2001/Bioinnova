import React from "react";
import Navbar from "../components/Navbar";
import CoreValues from "../components/CoreValues";
import ProductsList from "../components/ProductsList";
import Footer from "../components/Footer";

export default function ProductsServices() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <section className="flex flex-col items-center justify-center py-16 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          Products & Services
        </h1>
        <p className="text-gray-700 max-w-3xl text-lg leading-relaxed">
          At BioInnova Medical, we provide cutting-edge biotechnology solutions,
          medical equipment, and educational services designed to elevate healthcare
          outcomes.
        </p>
      </section>

      <ProductsList />

      <Footer />
    </div>
  );
}



