import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import Button from "./ui/Button";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 py-6 " id="header">
      <section className="flex items-center justify-between">
        <div>
          <span className="font-rave text-xl">EVERDOME</span>
        </div>

        <div className="flex items-center gap-16">
          <nav className="flex items-center gap-8 text-xl">
            <a href="/">
              <FaTelegram />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <FaDiscord />
            </a>
            <a href="/">
              <FaInstagram />
            </a>
            <a href="/">
              <FaFacebook />
            </a>
          </nav>
          <Button>Mint Astro NFT</Button>
        </div>
      </section>
    </header>
  );
}

export default Navbar;
