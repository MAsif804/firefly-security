
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
        <div className="w-[560px] pl-8 mx-auto text-center lg:text-left lg:mx-0">
          <h1 className="text-[16px] font-Inter md:text-[24px] lg:text-[40px] font-medium text-white leading-[50px] mb-6">
            Cybersecurity Resources, Insights & Tools
          </h1>
          
        </div>
        <p className="text-[14px] w-[700px] pl-8 font-medium font-Inter leading-6 text-[#FDED1B] mb-8">
          Stay ahead of evolving cyber threats with our curated library of Zero Trust guides, whitepapers, case studies, and expert insights designed to strengthen your digital defense.
        </p>
      </div>
    </section>
  );
};

export default Hero;
