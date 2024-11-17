'use client'
import React, { useState, useEffect } from "react";

const ZoomOnScroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("zoom-box");
    if (element) {
      const rect = element.getBoundingClientRect();
      setIsVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[200vh] flex items-center justify-center">
      <div
        id="zoom-box"
        className={` ${
          isVisible ? "animate-zoomIn" : "animate-zoomOut"
        } w-48 h-48 bg-blue-300 rounded-lg flex items-center justify-center`}
      >
        <h2 className="text-white">Zoom Me!</h2>
      </div>
    </div>
  );
};

export default ZoomOnScroll;
