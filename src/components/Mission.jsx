import React from "react";
import cycler from "../assets/astronaut-1.png";

function Mission({ ref }) {
  return (
    <section
      ref={ref}
      className="min-h-screen grid items-end py-20 relative"
      id="page2"
    >
      <div className="w-80 space-y-4">
        <img src={cycler} alt="Astronaut exploring the metaverse" />
        <p>
          Interweaving scientific accuracy, high-quality visualizations, and
          engaging storytelling to pioneer the uncharted metaverse frontier.
        </p>
      </div>
    </section>
  );
}

export default Mission;
