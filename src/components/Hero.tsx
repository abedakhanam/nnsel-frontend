//hero
"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  const router = useRouter();
  return (
    <div className="relative flex flex-col items-center justify-center text-center">
      <h1 className="absolute top-[271px] w-[891px] h-[172px] font-syne font-bold text-[72px] leading-[86px] text-white">
        Adaptive Logo Design for Your Brand
      </h1>
      <Button
        text="Explore Works"
        className="absolute w-[242px] h-[65px] top-[536px] text-[13px] leading-[15px]"
        onClick={() => router.push("/my-works")}
        icon={<FaArrowRightLong className="text-white text-lg" />}
      />
    </div>
  );
}
