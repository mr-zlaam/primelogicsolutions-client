import PageWrapper from "@/app-components/pagewrapper/pagewrapper";
import {} from "react";
import { SiBlockchaindotcom } from "react-icons/si";
import { MdDataExploration } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { HoverEffect } from "@/components/ui/card-hover-effect";
function Hero2Cards() {
  return (
    <PageWrapper className="py-10 ">
      <div className="relative">
        <HoverEffect items={cardData} />
      </div>
    </PageWrapper>
  );
}

export default Hero2Cards;

const cardData = [
  {
    title: "Block Chain",
    description: "We excels in developing blockchain technologies.",
    icon: <SiBlockchaindotcom size={50} />
  },
  {
    title: "AI Innovation",
    description: "We specializes in AI development and analysis.",
    icon: <GiArtificialIntelligence size={50} />
  },
  {
    title: "Data Experts",
    description: "We curate and analyze big data and analysis.",
    icon: <MdDataExploration size={50} />
  }
];

{
  cardData.map(() => (
    <>
      {/* <div */}
      {/*   key={card.title} */}
      {/*   className="flex flex-col h-[280px] relative overflow-hidden rounded-md p-5 max-w-[300px] border border-foreground/20 shadow-md hover:shadow-black/50 duration-300 transition-shadow"> */}
      {/*   <h1 className="w-16 h-16 bg-background/80 rounded-full flex items-center justify-center">{card.cardIcon}</h1> */}
      {/*   <h3 className="text-xl font-bold mt-4">{card.cardTitle}</h3> */}
      {/*   <p className="text-gray-600 mt-2">{card.cardDescription}</p> */}
      {/*   <div className="absolute bottom-[-50px] left-[-50px] animate-heart rounded-full bg-primary h-32 w-32" /> */}
      {/*   <div className="absolute top-[-50px] right-[-50px] animate-heart rounded-full bg-primary h-32 w-32" /> */}
      {/* </div> */}
    </>
  ));
}
