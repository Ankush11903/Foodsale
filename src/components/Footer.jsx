import React from 'react';
import logo from "../logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Additional content or components */}
        </div>
        <div className="text-center text-gray-600 mt-2">
          &copy; {new Date().getFullYear()} Foosale. All rights reserved.
          <span className="text-sm text-gray-400">Website created by Ankush</span>
        </div>
      </div>
    </footer>
  );
}
