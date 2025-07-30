
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
        <div className="flex w-full flex-col px-[130px] py-[60px] justify-center items-center gap-[20px]">
           <h6 className="text-[#FDED1B] font-Inter text-[18px] font-normal leading-[20px]">
          Who We Are at Firefly Security
           </h6>
        <p className="text-[#FFFFFF] w-[850px] text-center font-Inter text-[47px] font-semibold leading-[55px]">
          Driving secure digital transformation through Zero Trust expertise and a mission-led approach.
           </p>
        </div>
    </section>
  );
};

export default Hero;
