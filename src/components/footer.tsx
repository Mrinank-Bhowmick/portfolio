import React from "react";

export const Footer = () => {
  return (
    <div className="border-t border-custom-border-gray mt-16 pt-8 pb-8 text-center text-gray-500 text-sm">
      <p>
        &copy; {new Date().getFullYear()} Mrinank Bhowmick. All rights reserved.
      </p>
    </div>
  );
};
