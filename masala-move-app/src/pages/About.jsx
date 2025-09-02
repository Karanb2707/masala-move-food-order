import React from 'react'
import logo from '../assets/images/logo.png'

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-6">
      {/* Logo */}
      <img
        src={logo}
        alt="Masala Move Logo"
        className="w-32 h-20 mb-6 drop-shadow-lg"
      />

      {/* Title */}
      <h1 className="text-2xl font-bold text-orange-700 mb-4">
        About Masala Move
      </h1>

      {/* Details */}
      <p className="text-center max-w-xl text-gray-700 leading-relaxed mb-6">
        Masala Move is your one-stop destination for ordering fresh and flavorful food.
        We bring authentic taste and convenience right to your doorstep. 
        Our mission is to make your dining experience delightful with quick service,
        quality ingredients, and the perfect blend of spices.
      </p>

      {/* Contact / Footer */}
      <div className="text-center text-gray-600 text-sm">
        <p>📍 Based in India</p>
        <p>📞 +91 98765 43210</p>
        <p>✉️ support@masalamove.com</p>
      </div>
    </div>
  );
};

export default About