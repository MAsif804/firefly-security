
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
            Comprehensive Zero Trust Services
          </h1>
          
        </div>
        <p className="text-[14px] w-[560px] pl-8 font-medium font-Inter leading-6 text-[#FDED1B] mb-8">
          From assessment to implementation, we help you build a secure and resilient infrastructure aligned with modern Zero Trust principles.
        </p>
      </div>
    </section>
  );
};

export default Hero;
