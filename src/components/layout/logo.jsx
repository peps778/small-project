// logo.jsx
import React from "react";
import { logo } from "../../assets"; // Adjust the path as needed
import "./globals.css"; // Import your CSS file

const Logo = () => {
  return <img src={logo} alt="Logo" className="logo" />;
};

export default Logo;
