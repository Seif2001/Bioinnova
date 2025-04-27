import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // lightweight icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-1 shadow-md bg-white relative z-50">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <img src="images/logo.png" alt="BioInnova Medical" className="h-[95px]" />
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-blue-900 font-medium">
        <a href="/about" className="hover:text-blue-600">About</a>
        <a href="/products-services" className="hover:text-blue-600">Products & Services</a>
        <a href="/why-us" className="hover:text-blue-600">Why Us</a>
        <a href="/ceo-message" className="hover:text-blue-600">CEO's Message</a>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-900">
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-8 text-blue-900 font-medium md:hidden">
          <a href="/about" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/products-services" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Products & Services</a>
          <a href="/why-us" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Why Us</a>
          <a href="/ceo-message" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>CEO's Message</a>
        </div>
      )}
    </nav>
  );
}
