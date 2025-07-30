import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center bg-[#0D1323] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[#1E293BB2] opacity-20" 
           style={{
             backgroundImage: `url("/hero.png")`,
             backgroundSize: "cover",
             backgroundPosition: "center",
           }}
      />
      <div className="px-[88px]">
        <div className="w-[390px] pl-8 mx-auto text-center lg:text-left lg:mx-0">
          <h1 className="text-[16px] font-Inter md:text-[24px] lg:text-[40px] font-medium text-white leading-[50px] mb-6">
            Zero Trust is not a technology you buy, but a philosophy you adopt.
          </h1>
          <p className="text-[14px] w font-medium font-Inter leading-6 text-[#FDED1B] mb-8">
            The path to Zero Trust is an incremental process that may take years to implement
          </p>
          <Button 
            className="bg-[#CFC42C] hover:bg-[#E8B825] text-[#0D1323] text-lg font-medium px-8 py-6 rounded-[50px]"
            
          >
            <span className="font-Inter text-[#171F31] text-[16px] font-medium leading-[50px]">Explore Zero Trust</span> <ArrowRight className="ml-2 h-6 w-6 aspect-square" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
