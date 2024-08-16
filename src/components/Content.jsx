import React, { useEffect, useState } from "react";

const sections = [
  { id: "page1", label: "About Us", number: "01" },
  { id: "page2", label: "Our Mission", number: "02" },
  { id: "character", label: "Character", number: "03" },
  { id: "creation-process", label: "Creation Process", number: "04" },
  { id: "gallery", label: "Gallery", number: "05" },
  { id: "special-elements", label: "Special Elements", number: "06" },
  { id: "creative-team", label: "Creative Team", number: "07" },
  { id: "mint", label: "Mint", number: "08" },
  { id: "contact", label: "Contact", number: "09" },
];

function Content() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Centered check
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.clientHeight > scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="fixed top-20 right-8 hidden lg:block" id="lists">
      <ul className="space-y-4">
        {sections.map((section) => {
          const isActive = section.id === activeSection;

          return (
            <li key={section.id} className="flex items-center gap-4">
              <span className="text-right">{section.label}</span>
              <div className="flex items-center gap-2">
                <span className={`text-right font-bold ${isActive ? "text-blue-500" : "text-gray-500"}`}>
                  {section.number}
                </span>
                {isActive && (
                  <div className="transition-transform duration-300 bg-blue-500 h-32 w-0.5" />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Content;
