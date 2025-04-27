import React from "react";

export default function Footer() {
  return (
    <footer className="text-center p-4 text-gray-500 text-sm">
      © {new Date().getFullYear()} BioInnova Medical. All rights reserved.
    </footer>
  );
}
