import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function WhyUs() {
  const reasons = [
    {
      title: "In-Depth Knowledge of the Egyptian Market",
      description: "With over 25 years of experience, we understand the complexities and demands of the Egyptian healthcare system. We are well-positioned to introduce products that meet the specific needs of the local market.",
    },
    {
      title: "Strong Network and Relationships",
      description: "Our extensive connections with key opinion leaders, government bodies, healthcare professionals, and industry stakeholders give us an edge in fostering strong collaborations and gaining market access quickly.",
    },
    {
      title: "Proven Track Record",
      description: "Having worked with multinational and local companies, we bring a wealth of experience in navigating market challenges and driving business growth in Egypt.",
    },
    {
      title: "Commitment to Quality and Innovation",
      description: "We prioritize quality and the introduction of innovative solutions to the Egyptian healthcare market. Our partnerships are built on trust and a shared vision for improving patient care.",
    },
    {
      title: "Tailored Solutions for Local Needs",
      description: "We offer personalized, market-specific solutions that are aligned with the latest medical advancements and local regulations, ensuring that your products are perfectly suited to the Egyptian healthcare environment.",
    },
    {
      title: "After-Sales Support",
      description: "We are not just about delivering products—we stand by our solutions with exceptional after-sales support, training, and maintenance services to ensure ongoing satisfaction and success for our partners.",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-blue-50 py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
            Why Choose Us
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Discover what makes BioInnova Medical your ideal partner in Egypt’s evolving healthcare landscape.
          </p>
        </div>
      </section>

      {/* Reasons List */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-10 h-10 flex items-center justify-center">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-blue-800">
                  {reason.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}




