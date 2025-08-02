const Benefite = () => {
    return (
        <section
            style={{
                backgroundImage: "url('/benefit.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="flex w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[88px] py-8 sm:py-[35px] flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-6 bg-[#1A2236]">
            {/* left */}
            <div className="flex w-full md:w-[40%] lg:w-[369px] flex-col items-center md:items-start gap-5 sm:gap-[23px]">
                <h2 className="text-[#FDED1B] text-center md:text-left font-Inter text-2xl sm:text-3xl md:text-[35px] font-bold leading-normal sm:leading-[21px]">Benefits of Zero Trust</h2>
                <div className="flex w-full flex-col items-center md:items-start gap-4 sm:gap-[19px]">
                    <h6 className="text-[#FFFFFF] text-center md:text-left font-Inter text-xl sm:text-2xl md:text-[27px] font-medium leading-normal md:leading-[35px]">
                        Strengthen Security with Zero Trust Architecture
                    </h6>
                    <p className="text-[#D8D6D6] text-center md:text-left font-Inter text-sm sm:text-base md:text-[16px] font-normal leading-relaxed sm:leading-[21px]">
                        Empower your organization to protect critical data, reduce risk, and enable agile, cloud-ready operations through continuous monitoring and strict access control.
                    </p>
                </div>
            </div>
            
            {/* right */}
            <ul className="flex w-full md:w-[55%] lg:w-[577px] list-disc flex-col items-start gap-4 sm:gap-[25px] pl-5 md:pl-0">
                <li className="text-[#FFFFFF] list-disc text-left md:text-justify font-Inter text-sm sm:text-base md:text-[16px] leading-relaxed sm:leading-[21px] underline font-normal">
                    The ability of a user to access required data from anywhere, from any authorized and authenticated user and device, fully secured
                </li>
                <li className="text-[#FFFFFF] list-disc text-left md:text-justify font-Inter text-sm sm:text-base md:text-[16px] leading-relaxed sm:leading-[21px] underline font-normal">
                    Secured and protected information systems facilitating the evolution into a more agile, more mobile, cloud-supported workforce.
                </li>
                <li className="text-[#FFFFFF] list-disc text-left md:text-justify font-Inter text-sm sm:text-base md:text-[16px] leading-relaxed sm:leading-[21px] underline font-normal">
                    Reduced attack surface risk profiles through protective actions enabled by microsegmentation of the network.
                </li>
                <li className="text-[#FFFFFF] list-disc text-left md:text-justify font-Inter text-sm sm:text-base md:text-[16px] leading-relaxed sm:leading-[21px] underline font-normal">
                    Threats to Cloud, Artificial Intelligence (AI),and Command, Control, Communications, Computers, and Intelligence (C4I) remediated through risk-based cybersecurity protocols and policies.
                </li>
                <li className="text-[#FFFFFF] list-disc text-left md:text-justify font-Inter text-sm sm:text-base md:text-[16px] leading-relaxed sm:leading-[21px] underline font-normal">
                    Effective damage containment, mitigation, and remediation when a device, network, user, or credential is compromised.
                </li>
                <li className="text-[#FFFFFF] list-disc text-left md:text-justify font-Inter text-sm sm:text-base md:text-[16px] leading-relaxed sm:leading-[21px] underline font-normal">
                    Consistent, aligned, and effectively resourced ZT capabilities for advanced cybersecurity operations.
                </li>
                <li className="text-[#FFFFFF] list-disc text-left md:text-justify font-Inter text-sm sm:text-base md:text-[16px] leading-relaxed sm:leading-[21px] underline font-normal">
                    A resilient network architecture that recovers rapidly from attacks and minimizes damage through enablement of Zero Trust.
                </li>
            </ul>
        </section>
    );
};
export default Benefite;