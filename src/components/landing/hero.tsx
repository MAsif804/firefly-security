import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[500px] h-screen flex items-center bg-[#0D1323] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[#1E293BB2] opacity-20" 
           style={{
             backgroundImage: `url("/hero.png")`,
             backgroundSize: "cover",
             backgroundPosition: "center",
           }}
      />
      <div className="px-4 sm:px-6 md:px-10 lg:px-[88px] w-full max-w-[1440px] mx-auto">
        <div className="w-full max-w-[320px] sm:max-w-[350px] md:max-w-[390px] px-0 sm:pl-4 md:pl-8 mx-auto text-center lg:text-left lg:mx-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-Inter font-medium text-white leading-normal md:leading-relaxed lg:leading-[50px] mb-3 sm:mb-4 md:mb-6">
            Zero Trust is not a technology you buy, but a philosophy you adopt.
          </h1>
          <p className="text-xs sm:text-sm md:text-[14px] font-medium font-Inter leading-normal sm:leading-6 text-[#FDED1B] mb-5 sm:mb-6 md:mb-8">
            The path to Zero Trust is an incremental process that may take years to implement
          </p>
          <Button 
            className="bg-[#CFC42C] hover:bg-[#E8B825] text-[#0D1323] text-base sm:text-lg font-medium px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-full sm:rounded-[50px]"
          >
            <span className="font-Inter text-[#171F31] text-sm sm:text-base md:text-[16px] font-medium leading-normal sm:leading-loose md:leading-[50px]">Explore Zero Trust</span> <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 aspect-square" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
