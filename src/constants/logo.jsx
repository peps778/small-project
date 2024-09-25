// logo.jsx
import React from "react";
import { logo } from "../assets"; // Adjust the path as needed

const Logo = () => {
  return (
    <img
      src={logo}
      alt="Logo"
      style={{ borderRadius: '50%', width: '100px', height: '100px' }} // Adjust dimensions as necessary
    />
  );
};

export default Logo;
