import Image from "next/image";
import React from "react";

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1612965110667-4175024b0dcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGUlMjB3YXN0ZSUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D",
    title: "E-waste management",
    description:
      "E-waste management solutions involve the implementation of legislation and regulations, the establishment of specialized recycling facilities, public awareness campaigns, convenient collection centers, and manufacturer involvement through take-back programs and eco-friendly product design.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523293915678-d126868e96f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Waste Sorting and Segregation",
    description:
      "Our waste management solution focuses on efficient waste sorting and segregation processes. By implementing advanced technologies and streamlined systems, we enable the systematic separation of recyclables from non-recyclables. This approach enhances resource recovery, minimizes environmental impact, and supports sustainable waste management practices.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVjeWNsaW5nfGVufDB8fDB8fHww",
    title: "Recycling",
    description:
      "Our recycling solution efficiently processes waste materials to create new products, reducing environmental impact and promoting a circular economy. Through advanced technologies and community engagement, we encourage responsible resource management and environmental preservation.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1557168892-62054f306302?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhhemFyZG91cyUyMHdhc3RlfGVufDB8fDB8fHww",
    title: "Hazardous Waste Management",
    description:
      "Our hazardous waste management solution prioritizes the safe handling, storage, and disposal of potentially harmful materials to protect the environment and public health. By adhering to strict regulations and employing specialized methods, we ensure the proper treatment and containment of hazardous waste.",
  },
];

export default function Solution() {
  return (
    <div className="text-center py-5">
      <h1 className="text-3xl font-black text-black/70 dark:text-white/70">
        Solution We Provide
      </h1>
      <p className="mx-auto text-[15px] text-black/70 dark:text-white/70 px-6 py-4 max-w-[750px]">
        We Collect And Recycle your waste. You Just have to your Rewards. Redeem
        that and keep place clean.
      </p>
      <div className="relative w-full max-w-5xl m-auto flex px-6 py-2 pt-6 sm:flex-row flex-col flex-wrap justify-center items-center gap-3">
        {data.map((item, index) => (
          <div
            className="relative sm:flex-1 w-full sm:min-w-[300px] h-80"
            key={index}
          >
            <Image
              src={item.image}
              alt="First Slide"
              style={{ objectFit: "cover" }}
              fill
              priority
              fetchPriority="high"
            />
            <div className="absolute w-full h-full bg-black/40 flex flex-col items-center justify-center gap-2">
              <h1 className="text-2xl text-white/90 font-black px-5">
                {item.title}
              </h1>
              <p className="text-sm text-white/90 font-medium p-2 px-5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
