

const CyberSecurity = () => {
    return (
        <section className="flex w-full max-w-[1440px] mx-auto px-[88px] py-[60px] justify-center items-center bg-[#171F31]">
            <div className="flex w-full  items-center justify-between">
                <div className="flex w-1/2 flex-col items-start gap-[25px]">
                    <h6 className="text-[#FDED1B]  font-Inter text-[27px] font-medium leading-[25px]">
                        What is the purpose of Cyber Security?
                    </h6>
                    <p className="text-[#ffffff] font-Inter text-[18px] leading-[22px] font-normal">
                        The main purpose of Cyber Security is to protect data. Previous versions of cybersecurity Frameworks focused on users. strong complex passwords, rotate every 30 days MFA build strong parameters to keep unauthorized users out.
                    </p>
                    <h6 className="text-[#FDED1B] font-Inter text-[27px] font-medium leading-[25px]">
                        Zero Trust - The focus in the data
                    </h6>
                    <p className="text-[#ffffff] font-Inter text-[18px] leading-[22px] font-normal">
                        This shift in philosophy ia a significant change for the cyber security approach and represents a major cultural change throughout the DoD Cybersecurity system.
                    </p>
                </div>
                <img src="/resources-1.png" alt="" className="w-[402px] h-[236px]" />
            </div>
        </section>
    );
};
export default CyberSecurity;