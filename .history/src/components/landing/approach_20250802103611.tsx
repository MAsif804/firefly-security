export default function Approach() {
    return (
        <section className="flex flex-col w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[88px] py-8 sm:py-10 md:py-[45px] gap-5 sm:gap-[30px] items-center bg-[#1A2236]">
            <h2 className="text-[#FDED1B] font-Inter text-2xl sm:text-3xl md:text-[35px] font-bold leading-normal sm:leading-[21px] text-center">
                Zero Trust Approach
            </h2>
            
            <div className="flex flex-col items-center gap-3 sm:gap-[11px] w-full">
                <div className="w-full overflow-hidden flex justify-center">
                    <img 
                        src="/apporach-1.png" 
                        alt="DoD Zero Trust Capabilities Diagram" 
                        className="h-auto max-h-[250px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[500px] w-auto object-contain" 
                    />
                </div>
                <p className="text-[#CACACA] text-center font-Inter text-base sm:text-lg md:text-xl lg:text-[22px] font-normal leading-normal sm:leading-[21px] underline cursor-pointer">
                    DoD Zero Trust Capabilities
                </p>
            </div>
            
            <div className="flex w-full flex-col items-center gap-3 sm:gap-[11px] mt-4 sm:mt-6">
                <div className="w-full overflow-hidden flex justify-center">
                    <img 
                        src="/apporach-2.png" 
                        alt="Zero Trust Target Level Diagram" 
                        className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[514px] object-contain" 
                    />
                </div>
                <p className="text-[#CACACA] text-center font-Inter text-base sm:text-lg md:text-xl lg:text-[22px] font-normal leading-normal sm:leading-[21px] underline cursor-pointer">
                    Zero Trust Target Level
                </p>
            </div>
        </section>
    );
}