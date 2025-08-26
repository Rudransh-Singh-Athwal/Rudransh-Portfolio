import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Type() {
  return (
    <header id="header">
      <div className="text-3xl font-semibold text-gray-300">
        <TypeAnimation
          sequence={[
            "MERN Stack Developer ",
            2000,
            // "Competitive Programmer",
            // 2000,
            "DSA Enthusiast",
            2000,
            "CSE student",
            2000,
          ]}
          speed={40}
          repeat={Infinity}
        />
      </div>
    </header>
  );
}
