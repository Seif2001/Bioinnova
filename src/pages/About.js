import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-blue-50 py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
            About BioInnova Medical
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Transforming Egypt’s healthcare landscape with innovation and expertise.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          <p className="text-gray-800 text-lg leading-relaxed">
            <span className="font-semibold text-blue-900">BioInnova Medical</span> is a newly established pioneering company dedicated to transforming Egypt’s healthcare landscape by introducing cutting-edge In Vitro Diagnostics (IVD) and MedTech solutions.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            With over 25 years of expertise, we combine a deep understanding of the Egyptian market with an extensive network of healthcare professionals, key opinion leaders, and industry stakeholders.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            Our mission is to fill the gaps in the Egyptian healthcare system by providing advanced diagnostic technologies, fostering partnerships, and driving awareness through education.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
