import React from 'react';
import { FaArrowLeft , FaArrowRight } from 'react-icons/fa';

export default function CoreValues() {
  
  return (
    <div className=" w-5/6 m-auto py-16 px-4 relative group">
      <h1 className="text-center text-5xl p-5 font-black text-black/70 dark:text-white/70">
        Guided By Our Core Values
      </h1>
      <div className="bg-gray-500 bg-opacity-20 w-full h-full rounded-2xl bg-center bg-cover duration-500">
      <div className="relative w-full h-fit max-w-[70rem] m-auto flex px-6 py-2 pt-6 sm:flex-row flex-col flex-wrap justify-center items-center gap-3">
        <div className="flex-1 max-sm:w-full shrink py-5 px-5 flex flex-col justify-start">
          <h2 className="text-2xl font-black text-green-500">
            Inclusion & Diversity
          </h2>
          <p className="my-4 text-black/80 dark:text-white/70 text-justify">
          At our waste management company, we embrace inclusion and diversity. 
          We believe that a diverse workforce brings a variety of perspectives, 
          ideas, and experiences that contribute to our success. We foster an inclusive 
          environment where everyone is treated with respect and has equal opportunities 
          to grow and thrive.
          </p>
          <h2 className="text-2xl font-black text-green-500">
            Customers
          </h2>
          <p className="my-4 text-black/80 dark:text-white/70 text-justify">
          Our customers are at the heart of everything we do. 
          We prioritize their needs and work tirelessly to provide 
          exceptional waste management solutions. We value their 
          trust and strive to deliver reliable services that meet 
          their requirements. Our focus is on building long-lasting 
          relationships and exceeding customer expectations.
          </p>
          
                
        </div>
        <div className="flex-1 max-sm:w-full shrink py-5 px-5 flex flex-col justify-start">
        
          <h2 className="text-2xl font-black text-green-500">
            Environment
          </h2>
          <p className="my-4 text-black/80 dark:text-white/70 text-justify">
          We are deeply committed to protecting the environment. 
           we understand the importance 
          of sustainable practices. We employ innovative technologies 
          and processes to minimize waste, promote recycling, and reduce 
          environmental impact. Our aim is to contribute to a cleaner and 
          greener future for generations to come.
          </p>
          <h2 className="text-2xl font-black text-green-500">
            Safety
          </h2>
          <p className="my-4 text-black/80 dark:text-white/70 text-justify">
          Safety is our top priority. We prioritize the well-being of our employees, 
          customers, and the communities we serve. We maintain rigorous safety 
          standards and continuously invest in training and education to ensure 
          a safe working environment. We are implementing measures that protect 
          everyone involved in waste management operations.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
