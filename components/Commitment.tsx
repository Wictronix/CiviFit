import React from "react";
import Image from "next/image";

export default function Commitment() {
  return (
    <div className="relative w-full h-fit max-w-[70rem] m-auto flex px-6 py-2 pt-6 sm:flex-row flex-col flex-wrap justify-center items-center gap-3 bg-slate-800">
      <div className="flex-1 max-sm:text-center max-sm:w-full h-[300px] shrink py-5 px-5 flex flex-col">
        <h2 className="text-3xl font-black text-white/70">
          Driven by our Commitments
        </h2>
        <h3 className="text-2xl font-black text-green-500">Our People First</h3>
        <p className="my-4 text-white/70">
          Our purpose is to change the way people think about waste and our team
          of workers provide unrivalled end-to-end waste and recycling solutions
          for thousands of households each day.
        </p>
      </div>
      <div className="relative sm:flex-1 max-sm:w-full h-[300px] shrink-0 overflow-hidden rounded-[4px]">
        <Image
          className="p-4"
          src={"/civifit_247.webp"}
          alt={"leading"}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
