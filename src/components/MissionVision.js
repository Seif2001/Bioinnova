import React from "react";
import { Lightbulb, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative bg-gradient-to-br from-white to-blue-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-16">
          Our Mission & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission Card */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl ring-1 ring-blue-100 transition hover:shadow-2xl hover:ring-blue-300">
            <div className="flex items-center gap-4 mb-4">
              <Lightbulb className="w-8 h-8 text-green-500" />
              <h3 className="text-2xl font-semibold text-blue-800">Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
            To advance healthcare in Egypt and the region by introducing state-of-the-art IVD and
            MedTech solutions, empowering healthcare professionals, and improving patient
            outcomes. We are committed to filling critical gaps in Egypt’s medical diagnostic
            market through innovative technologies and strategic partnerships.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl ring-1 ring-blue-100 transition hover:shadow-2xl hover:ring-blue-300">
            <div className="flex items-center gap-4 mb-4">
              <Eye className="w-8 h-8 text-blue-500" />
              <h3 className="text-2xl font-semibold text-blue-800">Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
            To become Egypt’s leading provider of innovative diagnostic solutions and
            MedTech technologies, bridging the gap between healthcare professionals
            and world-class medical advancements. We aim to make a lasting impact
            on healthcare in Egypt and neighbouring countries by fostering
            partnerships that promote growth and sustainability in the sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
