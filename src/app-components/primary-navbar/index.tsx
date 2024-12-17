import { Hand } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
const PrimaryNavBar: React.FC = () => {
  return (
    <React.Fragment>
      <header className="w-full h-[100px] bg-[#141323] text-background  items-center justify-around lg:flex hidden">
        <div className="welcome-message">
          <span className="text-lg  flex items-center">
            <Hand
              className="text-orange-500 mr-2 rotate-45"
              size={24}
            />
            Welcome! to Prime Logic Solutions.
          </span>
        </div>
        <div className="flex items-center">
          <span className="mr-4 text-sm flex items-center">
            <span className="border border-primary w-[40px] mx-4" />
            <span className="font-semibold">FOLLOW US</span>
          </span>
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebook
                className="text-white"
                size={24}
              />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer">
              <IoLogoLinkedin
                className="text-white"
                size={24}
              />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaTwitter
                className="text-white"
                size={24}
              />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram
                className="text-white"
                size={24}
              />
            </Link>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default PrimaryNavBar;
