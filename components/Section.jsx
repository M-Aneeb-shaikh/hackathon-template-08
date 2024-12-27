"use client";

import { twMerge } from "tailwind-merge";

const Section = ({
  center = true,
  className = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  title,
  children,
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto py-8">
      <h1
        className={twMerge(
          "py-6 text-3xl sm:text-4xl font-semibold",
          center ? "text-center" : "text-left"
        )}
      >
        {title}
      </h1>
      <div className={twMerge("p-2 grid gap-8", className)}>{children}</div>
    </div>
  );
};

export default Section;
