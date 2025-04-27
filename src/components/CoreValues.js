import React from "react";
import { Sparkles, ShieldCheck, Users, Award, BookOpen } from "lucide-react";

const values = [
  {
    title: "Innovation",
    description: "We believe in continuously introducing the most advanced technologies to improve healthcare outcomes.",
    icon: <Sparkles className="w-7 h-7 text-indigo-500" />,
  },
  {
    title: "Integrity",
    description: "We operate with the highest ethical standards, ensuring transparency, honesty, and responsibility in all our dealings.",
    icon: <ShieldCheck className="w-7 h-7 text-green-600" />,
  },
  {
    title: "Collaboration",
    description: "We value the power of partnerships, working with leading suppliers, healthcare professionals, and stakeholders to achieve shared goals.",
    icon: <Users className="w-7 h-7 text-blue-500" />,
  },
  {
    title: "Excellence",
    description: "We strive for excellence in all aspects of our business, from the products we offer to the services we provide.",
    icon: <Award className="w-7 h-7 text-yellow-500" />,
  },
  {
    title: "Education & Awareness",
    description: "We are committed to raising medical awareness and providing educational opportunities to healthcare professionals in Egypt and beyond.",
    icon: <BookOpen className="w-7 h-7 text-pink-500" />,
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-16">
          Our Core Values
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-xs bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="flex-shrink-0 p-2 bg-white rounded-full shadow mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
