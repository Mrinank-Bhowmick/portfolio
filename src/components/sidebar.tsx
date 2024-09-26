import React from "react";
import avatar from "../../public/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div>
      <div className="h-screen w-80 items-center p-8">
        <div className="bg-custom-dark-gray h-full w-full border border-custom-border-gray rounded-3xl flex flex-col items-center p-14">
          <div className="flex flex-col gap-3">
            <div className="bg-custom-light-gray p-5 rounded-3xl brightness-90">
              <img src={avatar.src}></img>
            </div>
            <div className="font-bold text-3xl text-center brightness-75">
              Mrinank Bhowmick
            </div>
            <hr className="w-full border-t-2 border-custom-border-gray my-4" />
            <div className="flex flex-col gap-3">
              <div className="flex items-center bg-custom-light-gray px-3 py-2 rounded-lg gap-3">
                <FaLinkedin className="w-6 h-6" />
                <Link
                  href="https://www.linkedin.com/in/mrinank-bhowmick/"
                  className="text-blue-500"
                >
                  LinkedIn
                </Link>
              </div>
              <div className="flex items-center bg-custom-light-gray px-3 py-2 rounded-lg gap-3">
                <FaGithub className="w-6 h-6" />
                <Link
                  href="https://www.github.com/mrinank-bhowmick/"
                  className="text-blue-500"
                >
                  GitHub
                </Link>
              </div>
              <div className="flex items-center bg-custom-light-gray px-3 py-2 rounded-lg gap-3">
                <FaXTwitter className="w-6 h-6" />
                <Link href="https://x.com/mrinank110" className="text-blue-500">
                  Twitter/X
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
