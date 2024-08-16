import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Astronaut from "./components/Astronaut";
import SectionTwo from "./components/SectionTwo";
import Mission from "./components/Mission";
import { twMerge } from "tailwind-merge";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollHeight = docHeight - windowHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Initial call
    handleScroll();

    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Astronaut />
      <SectionTwo />
      <Mission />
      {/* Other components */}

      {/* Example usage of scrollProgress */}
      <div
        className={twMerge(
          "fixed bottom-4 left-4 bg-gray-800 text-white p-2 rounded",
          scrollProgress > 50 ? "bg-blue-600" : ""
        )}
      >
        Scroll Progress: {Math.round(scrollProgress)}%
      </div>
    </div>
  );
}

export default App;
