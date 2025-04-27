import React from "react";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center md:text-left p-10 md:p-20 min-h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: "url('images/hero-image.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Innovating Health
        </h1>
        <p className="mt-6 text-blue-100 text-lg">
        BioInnova Medical combines cutting-edge science with innovative solutions to transform healthcare.
        </p>
        <a
          href="/about"
          className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-full shadow hover:opacity-90"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
