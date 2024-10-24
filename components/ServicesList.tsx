import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    title: "Waste Collection",
    description:
      "Waste management services collect waste from residential, commercial, and industrial areas. This includes scheduled pick-ups of garbage, recyclables, organic waste, and hazardous materials.It is the transfer of solid waste from the point of use and disposal to the point of treatment or landfill. Waste collection also includes the curbside collection of recyclable materials that technically are not waste, as part of a municipal landfill diversion program.",
    image:
      "https://images.unsplash.com/photo-1495556650867-99590cea3657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 2,
    title: "Recycling",
    description:
      "Many waste management services facilitate recycling programs. They collect recyclable materials such as paper, plastics, glass, and metal, and ensure they are properly sorted and sent for recycling.It can also prevent the waste of potentially useful materials and reduce the consumption of fresh raw materials, reducing energy use, air pollution (from incineration) and water pollution (from landfilling).",
    image:
      "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 3,
    title: "Waste Sorting and Segregation",
    description:
      "Waste management companies have facilities where they sort and segregate different types of waste. They use manual and mechanical processes to separate recyclables from non-recyclables, hazardous waste from non-hazardous waste, and organic waste from other waste streams. Wet waste typically refers to organic waste usually generated by eating establishments and are heavy in weight due to dampness.",
    image:
      "https://images.unsplash.com/photo-1523293915678-d126868e96f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 4,
    title: "Hazardous Waste Management",
    description:
      "Specialized waste management services handle hazardous materials, such as chemicals, medical waste, electronic waste (e-waste), and batteries. They ensure proper containment, transportation, and disposal of these hazardous materials, following strict regulations and guidelines. Hazardous waste management involves reducing the amount of hazardous substances produced, treating hazardous wastes to reduce their toxicity.",
    image:
      "https://images.unsplash.com/photo-1695909327525-2263dc5528c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF6YXJkJTIwd2FzdGV8ZW58MHx8MHx8fDA%3D",
  },
];

export default function ServicesList() {
  return (
    <div className="w-full max-w-[70rem] m-auto flex flex-col md:gap-10 px-5 py-5 pb-10">
      {data.map((item) => (
        <div
          className="flex space-x-5 md:h-[350px] h-[600px] md:gap-4 md:flex-row flex-col"
          key={item.id}
        >
          <div className="relative h-full flex-1 transition ease-in-out delay-150 ">
            <Image
              className="rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...  cursor-pointer"
              src={item.image}
              alt=""
              fill
              style={{ objectFit: "cover", }}
            />
          </div>
          <div className="md:flex-1  flex flex-col gap-y-8">
            <h1 className="text-4xl font-extrabold text-amber-400 ">
              {item.title}
            </h1>
            <p className="text-black/80 dark:text-white/70 text-xl">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
