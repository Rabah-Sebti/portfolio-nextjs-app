import React from "react";

import { twMerge } from "tailwind-merge";

export const Highlight2 = ({ className, children }) => {
  return (
    <span
      class={twMerge(
        "before:block before:absolute before:-inset-[2px] before:-skew-y-3 before:bg-sky-900 relative inline-block mx-2",
        className
      )}
    >
      <span class="relative text-white">{children}</span>
    </span>
  );
};
