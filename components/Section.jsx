"use client";

import { twMerge } from "tailwind-merge";

const Section = ({ center = true, className, title, children }) => {
  return (
    <div className="w-full max-w-7xl mx-auto py-8">
      <h1
        className={twMerge(
          "py-6 text-4xl font-semibold",
          center ? "text-center" : "text-left"
        )}
      >
        {title}
      </h1>
      <div className={twMerge("p-2 grid grid-cols-4 gap-8", className)}>
        {children}
      </div>
    </div>
  );
};

export default Section;
