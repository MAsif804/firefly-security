

const Hero = () => {
    return (
        <section className="flex w-full max-w-[1440px] mx-auto justify-center items-center bg-[#171F31]">
            <div className="flex px-[88px] py-[60px] w-1/2 flex-col items-center gap-[31px] bg-[url('/benefit.png')] bg-cover bg-center">
               <div className="flex w-full flex-col items-start gap-[9px]">
                <h6 className="text-white font-Inter text-[30px] font-semibold leading-[35px]">
                   Get in Touch with Firefly Security
                </h6>
                <p className="text-[#FDED1B] font-Inter text-[16px] font-normal leading-[25px]">
                     Whether you're starting your Zero Trust journey or need expert guidance, we're here to support you.
                </p>
               </div>
               <div className="flex w-full items-center gap-[20px]">
                    <div className="flex w-[203px] h-[89px] p-4 flex-col items-start gap-[12px] rounded-[8px] border border-[#6380A9] bg-[#33415533]">
                        <h6 className="text-[#FDED1B] font-Inter text-[16px] font-bold leading-[20px]">
                            Phone
                        </h6>
                        <p className="text-[#D6DEEA] font-Inter text-[14px] font-normal leading-[25px]">
                            (843) 284-7931
                        </p>
                    </div>
                    <div className="flex w-[203px] h-[89px] p-4 flex-col items-start gap-[12px] rounded-[8px] border border-[#6380A9] bg-[#33415533]">
                        <h6 className="text-[#FDED1B] font-Inter text-[16px] font-bold leading-[20px]">
                            Email
                        </h6>
                        <p className="text-[#D6DEEA]  underline font-Inter text-[14px] font-normal leading-[25px]">
                            info@fireflysecurity.com
                        </p>
                    </div>
               </div>
            </div>
            <div className="flex w-1/2 flex-col px-[88px] py-[60px] items-start gap-[21px] bg-[#171F31]">
                <h2 className="text-white font-Inter text-[30px] font-semibold leading-[35px]">
                    Contact us for more information or to discuss scheduling an assessment.
                </h2>
                <div className="flex flex-col w-full items-start gap-[18px]">
                    <input type="text" placeholder="Full Name"
                        className=" flex items-center w-full h-[53px] px-[20px] py-[9px] rounded-[10px] ic border border-[#C9D2EA] bg-[#171F31]
                        text-[#646F87] font-Inter text-[18px] font-normal leading-[20px] placeholder-[#646F87] placeholder:font-Inter placeholder:text-[18px] placeholder:font-normal placeholder:leading-[20px] outline-none"
                    />
                    <input type="email" placeholder="Email Address"
                        className=" flex items-center w-full h-[53px] px-[20px] py-[9px] rounded-[10px] ic border border-[#C9D2EA] bg-[#171F31]
                        text-[#646F87] font-Inter text-[18px] font-normal leading-[20px] placeholder-[#646F87] placeholder:font-Inter placeholder:text-[18px] placeholder:font-normal placeholder:leading-[20px] outline-none"
                    />
                    <textarea name="message" placeholder="Message"
                        className=" flex items-center w-full h-[128px] px-[20px] py-[15px] rounded-[10px] ic border border-[#C9D2EA] bg-[#171F31]
                        text-[#646F87] font-Inter text-[18px] font-normal leading-[20px] placeholder-[#646F87] placeholder:font-Inter placeholder:text-[18px] placeholder:font-normal placeholder:leading-[20px] outline-none"
                    />

                </div>
                <button className="flex justify-center items-center w-[154px] h-[53px] px-[10px] py-[9px] rounded-[7px]  bg-[#FDED1B]
                text-black font-Inter text-[18px] font-normal leading-[20px]"
            >
                Submit
            </button>
            </div>
           
        </section>
    );
};
export default Hero;
