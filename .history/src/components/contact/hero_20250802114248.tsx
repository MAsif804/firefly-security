

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row w-full max-w-[1440px] mx-auto justify-center items-stretch bg-[#171F31]">
            <div className="flex px-4 sm:px-8 md:px-12 lg:px-[88px] py-8 sm:py-10 md:py-[60px] w-full md:w-1/2 flex-col items-center gap-5 sm:gap-6 md:gap-[31px] bg-[url('/benefit.png')] bg-cover bg-center">
               <div className="flex w-full flex-col items-start gap-2 sm:gap-3 md:gap-[9px]">
                <h6 className="text-white font-Inter text-xl sm:text-2xl md:text-[30px] font-semibold leading-tight sm:leading-tight md:leading-[35px]">
                   Get in Touch with Firefly Security
                </h6>
                <p className="text-[#FDED1B] font-Inter text-sm sm:text-base md:text-[16px] font-normal leading-normal sm:leading-relaxed md:leading-[25px]">
                     Whether you're starting your Zero Trust journey or need expert guidance, we're here to support you.
                </p>
               </div>
               <div className="flex flex-col sm:flex-row w-full items-center gap-4 sm:gap-[20px]">
                    <div className="flex w-full sm:w-[180px] md:w-[203px] p-3 sm:p-4 flex-col items-start gap-2 sm:gap-[12px] rounded-[8px] border border-[#6380A9] bg-[#33415533]">
                        <h6 className="text-[#FDED1B] font-Inter text-sm sm:text-base md:text-[16px] font-bold leading-tight md:leading-[20px]">
                            Phone
                        </h6>
                        <p className="text-[#D6DEEA] font-Inter text-xs sm:text-sm md:text-[14px] font-normal leading-normal md:leading-[25px]">
                            (843) 284-7931
                        </p>
                    </div>
                    <div className="flex w-full sm:w-[180px] md:w-[203px] p-3 sm:p-4 flex-col items-start gap-2 sm:gap-[12px] rounded-[8px] border border-[#6380A9] bg-[#33415533]">
                        <h6 className="text-[#FDED1B] font-Inter text-sm sm:text-base md:text-[16px] font-bold leading-tight md:leading-[20px]">
                            Email
                        </h6>
                        <p className="text-[#D6DEEA] underline font-Inter text-xs sm:text-sm md:text-[14px] font-normal leading-normal md:leading-[25px]">
                            info@fireflysecurity.com
                        </p>
                    </div>
               </div>
            </div>
            <div className="flex w-full md:w-1/2 flex-col px-4 sm:px-8 md:px-12 lg:px-[88px] py-8 sm:py-10 md:py-[60px] items-start gap-5 sm:gap-6 md:gap-[21px] bg-[#171F31]">
                <h2 className="text-white font-Inter text-xl sm:text-2xl md:text-[30px] font-semibold leading-tight sm:leading-tight md:leading-[35px]">
                    Contact us for more information or to discuss scheduling an assessment.
                </h2>
                <div className="flex flex-col w-full items-start gap-3 sm:gap-4 md:gap-[18px]">
                    <input type="text" placeholder="Full Name"
                        className="flex items-center w-full h-10 sm:h-12 md:h-[53px] px-3 sm:px-4 md:px-[20px] py-2 sm:py-[9px] rounded-[10px] ic border border-[#C9D2EA] bg-[#171F31]
                        text-[#646F87] font-Inter text-sm sm:text-base md:text-[18px] font-normal leading-normal md:leading-[20px] placeholder-[#646F87] placeholder:font-Inter placeholder:text-sm sm:placeholder:text-base md:placeholder:text-[18px] placeholder:font-normal outline-none"
                    />
                    <input type="email" placeholder="Email Address"
                        className="flex items-center w-full h-10 sm:h-12 md:h-[53px] px-3 sm:px-4 md:px-[20px] py-2 sm:py-[9px] rounded-[10px] ic border border-[#C9D2EA] bg-[#171F31]
                        text-[#646F87] font-Inter text-sm sm:text-base md:text-[18px] font-normal leading-normal md:leading-[20px] placeholder-[#646F87] placeholder:font-Inter placeholder:text-sm sm:placeholder:text-base md:placeholder:text-[18px] placeholder:font-normal outline-none"
                    />
                    <textarea name="message" placeholder="Message"
                        className="flex items-start w-full h-24 sm:h-28 md:h-[128px] px-3 sm:px-4 md:px-[20px] py-2 sm:py-3 md:py-[15px] rounded-[10px] ic border border-[#C9D2EA] bg-[#171F31]
                        text-[#646F87] font-Inter text-sm sm:text-base md:text-[18px] font-normal leading-normal md:leading-[20px] placeholder-[#646F87] placeholder:font-Inter placeholder:text-sm sm:placeholder:text-base md:placeholder:text-[18px] placeholder:font-normal outline-none resize-none"
                    />

                </div>
                <button className="flex px-3 sm:px-4 md:px-[20px] py-2.5 sm:py-3 md:py-[14.5px] justify-center items-center gap-2 sm:gap-[9px] rounded-[10px] border border-[#FDED1B] bg-[#171F31]
                        text-[#FDED1B] font-Inter text-sm sm:text-base md:text-[16px] font-medium leading-normal md:leading-[20px] hover:bg-[#FDED1B] hover:text-[#171F31] transition duration-300 ease-in-out w-full sm:w-auto"
                    >Submit
            </button>
            </div>
           
        </section>
    );
};
export default Hero;
