import React from "react";
import { Stethoscope, Microscope, FlaskConical, GraduationCap, Wrench } from "lucide-react";

const services = [
  {
    title: "Advanced Diagnostic Equipment",
    description: "State-of-the-art IVD devices for early disease detection, including blood testing, molecular diagnostics, and point-of-care devices.",
    icon: <Microscope className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "MedTech Solutions",
    description: "Cutting-edge medical technologies designed to improve patient care and streamline healthcare operations.",
    icon: <Stethoscope className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Consumables and Reagents",
    description: "High-quality, reliable consumables and reagents used in laboratory diagnostics to ensure precise and accurate results.",
    icon: <FlaskConical className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Training & Support Services",
    description: "Educational programs for healthcare professionals, ensuring they are fully equipped to use the latest technologies effectively.",
    icon: <GraduationCap className="w-8 h-8 text-pink-500" />,
  },
  {
    title: "Maintenance and After-Sales Support",
    description: "Comprehensive support services to ensure the smooth operation and longevity of all diagnostic and MedTech equipment.",
    icon: <Wrench className="w-8 h-8 text-yellow-500" />,
  },
];

export default function ProductsServicesList() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-16">
          Products and Services We Provide
        </h2>

        <div className="flex flex-wrap justify-center gap-10 text-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-6 bg-white max-w-lg p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="flex-shrink-0 p-2 bg-blue-50 rounded-full">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {String(index + 1).padStart(2, '0')} {service.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
