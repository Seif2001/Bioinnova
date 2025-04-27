import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CEOsMessage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-blue-50 py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
            CEO's Message
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            A word from our leadership at BioInnova Medical
          </p>
        </div>
      </section>

      {/* CEO Message Content */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          
          {/* CEO Image */}
          <div className="flex-shrink-0">
            <img
              src="images/ceo.png"
              alt="CEO of BioInnova Medical"
              className="w-[400px] h-[500px] full object-cover shadow-lg"
            />
          </div>

          {/* CEO Text */}
          <div className="flex-1 space-y-6">
          <p className="text-gray-800 text-lg leading-relaxed">
            Welcome to <span className="font-semibold text-blue-900">BioInnova Medical</span>, where we are at the forefront of revolutionizing healthcare in Egypt. With over 25 years of experience in the In Vitro Diagnostics (IVD) and MedTech fields, we possess in-depth knowledge of the Egyptian market’s unique challenges and opportunities. Our expertise is built on years of collaboration with both multinational and local companies, allowing us to develop an extensive network of key stakeholders and thought leaders across the healthcare sector.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            Egypt’s healthcare market is evolving rapidly, with increasing demand for advanced diagnostic solutions and innovative technologies. However, significant gaps still need to be filled, and this is where we come in. At <span className="font-semibold text-blue-900">BioInnova Medical</span>, we are committed to bridging these gaps by offering cutting-edge IVD and MedTech solutions that not only meet the demands of today but also anticipate the needs of tomorrow.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            Our strong relationships with key opinion leaders, government entities, and healthcare professionals in Egypt position us as the ideal partner to help you navigate this dynamic market. By collaborating with us, you will have access to exclusive insights, a tailored approach to market entry, and the support needed to succeed in Egypt.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            We invite you to join us on this exciting journey to shape the future of healthcare in Egypt and beyond. Together, we can create a lasting impact and drive sustainable growth.
          </p>

          <p className="mt-10 text-blue-900 font-bold text-xl">
            — Dr. Hisham Gamil
          </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
