"use client";

import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode; // Accept an optional icon as a prop
}

export default function Button({
  text,
  onClick,
  className,
  icon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-primary rounded-[32.5px] shadow-[0px_32px_54px_rgba(3,3,3,0.14)] flex items-center justify-center space-x-4 px-6 ${className}`}
    >
      <span className="font-rubik font-bold text-[#F4F7FA] tracking-[1.625px] uppercase">
        {text}
      </span>
      {icon && <div className="flex items-center">{icon}</div>}
    </button>
  );
}
