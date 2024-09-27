import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <div className="text-3xl text-yellow-500 font-bold mt-8 mb-8">
        Contact
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center bg-custom-light-gray px-3 py-2 rounded-lg gap-3 md:w-1/6 lg:w-1/6 w-full">
          <FaLinkedin className="w-6 h-6" />
          <Link
            href="https://www.linkedin.com/in/mrinank-bhowmick/"
            className="text-blue-500"
          >
            LinkedIn
          </Link>
        </div>
        <div className="flex items-center bg-custom-light-gray px-3 py-2 rounded-lg gap-3 md:w-1/6 lg:w-1/6 w-full ">
          <FaXTwitter className="w-6 h-6" />
          <Link href="https://x.com/mrinank110" className="text-blue-500">
            Twitter/X
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
