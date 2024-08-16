import React from "react";
import Button from "./ui/Button";

const SectionTwo = React.forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      className="flex justify-between min-h-[calc(100vh-8rem)] gap-2 md:flex-row flex-col"
      id="page1"
    >
      {/* SectionTwo Left */}
      <section className="flex flex-col items-start justify-around">
        <div>
          <h1 id="SectionTwo-title" className="text-8xl font-bold">
            Astro NFT
          </h1>
          <div id="SectionTwo-content" className="ml-10 w-96 mt-10 space-y-8">
            <p>
              Exclusively for Genesis NFT Holders, our Astro NFT collection is
              the first metaverse wearable created for Everdome.
            </p>
            <Button>Connect your wallet</Button>
          </div>
        </div>

        <div id="SectionTwo-stats" className="mt-12">
          <h2 className="font-bold text-5xl mb-2">9,999</h2>
          <p>Collection Size</p>
        </div>
      </section>

      {/* SectionTwo Middle */}
      <section className="mt-12">
        <div className="w-80 bg-black h-[calc(100%-20%)]" />
      </section>

      {/* SectionTwo Right */}
      <section className="w-80 mt-20" id="SectionTwo-right">
        <p>
          Distinctive, one-of-a-kind metaverse wearables. Designed to be used
          during your Everdome City experience.
        </p>
      </section>
    </div>
  );
});

SectionTwo.displayName = "SectionTwo";
export default SectionTwo;
