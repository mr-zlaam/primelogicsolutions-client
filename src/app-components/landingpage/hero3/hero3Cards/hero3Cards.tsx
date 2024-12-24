import PageWrapper from "@/app-components/pagewrapper/pagewrapper";
import { TfiLayoutLineSolid } from "react-icons/tfi";

import React from "react";
import { FaPlus } from "react-icons/fa"; // Plus icon from react-icons
import { FaCode, FaServer, FaShieldAlt, FaTasks, FaUsers } from "react-icons/fa";

const services = [
  {
    title: "Cyber Security",
    description: "Dramatically cultivate quality user-centric growth strategies to enable emerging technologies.",
    icon: <FaShieldAlt className="text-3xl " />
  },
  {
    title: "IT Management",
    description: "Dramatically cultivate quality user-centric growth strategies to enable emerging technologies.",
    icon: <FaServer className="text-3xl " />
  },
  {
    title: "Web Development",
    description: "Dramatically cultivate quality user-centric growth strategies to enable emerging technologies.",
    icon: <FaCode className="text-3xl " />
  },
  {
    title: "Leadership Work",
    description: "Dramatically cultivate quality user-centric growth strategies to enable emerging technologies.",
    icon: <FaUsers className="text-3xl " />
  },
  {
    title: "Project Management",
    description: "Dramatically cultivate quality user-centric growth strategies to enable emerging technologies.",
    icon: <FaTasks className="text-3xl " />
  },
  {
    title: "Business Development",
    description: "Dramatically cultivate quality user-centric growth strategies to enable emerging technologies.",
    icon: <FaShieldAlt className="text-3xl " />
  }
];

const Hero3Cards = () => {
  return (
    <PageWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-16 pt-10 cursor-default">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group rounded-lg animate-y-tofro shadow-md p-6 text-center bg-background border border-gray-200 overflow-hidden transition-transform hover:scale-105 max-w-[300px] hover:text-background">
            <div className="absolute -inset-60 bg-gradient-to-t from-primary via-primary  scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-1000" />

            <div className="relative z-10 flex justify-center items-center mb-4">{service.icon}</div>

            <h3 className="relative z-10 text-lg font-semibold ">{service.title}</h3>
            <div className="relative z-10 flex justify-center">
              <TfiLayoutLineSolid size={45} />
            </div>

            <p className="relative z-10 text-sm leading-6 ">{service.description}</p>

            <div className="relative z-10 mt-4">
              <button className="flex items-center justify-center gap-2 py-2 px-4 rounded bg-gray-100 text-foreground group-hover:bg-black group-hover:text-background transition-all duration-500">
                Read More
                <FaPlus />
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-2xl font-bold mt-20 text-background">
        Consulting and Finance Services Built Specially and Business Find Solutions
      </p>
    </PageWrapper>
  );
};

export default Hero3Cards;
