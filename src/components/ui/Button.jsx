import React from "react";
import { twMerge } from "tailwind-merge";

function Button({ className, children, ...props }) {
  return (
    <button
      className={twMerge(
        "px-8 py-3 bg-black text-white font-semibold text-sm rounded transition-colors duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
