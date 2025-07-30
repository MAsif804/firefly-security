

const Benefite = () => {
    return (
        <section
        style={{
            backgroundImage: "url('/benefit.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
            className="flex w-full max-w-[1440px] mx-auto px-[88px] py-[35px] justify-between items-center bg-[#1A2236]">
            {/* left */}
            <div className="flex w-[369px] flex-col items-start gap-[23px]">
                <h2 className="text-[#FDED1B] text-center  font-Inter text-[35px] font-bold leading-[21px]">Benefits of Zero Trust</h2>
                 <div className="flex w-full flex-col items-start gap-[19px]">
                    <h6 className="text-[#FFFFFF] font-Inter text-[27px] font-medium leading-[35px]">
                        Strengthen Security with Zero Trust Architecture
                    </h6>
                    <p className="text-[#D8D6D6] font-Inter text-[16px] font-normal leading-[21px]">
                        Empower your organization to protect critical data, reduce risk, and enable agile, cloud-ready operations through continuous monitoring and strict access control.
                    </p>
                 </div>
            </div>
            {/* right */}
            <ul
                className="flex w-[577px] list-disc flex-col items-start gap-[25px]"
            >
                <li className="text-[#FFFFFF] list-disc text-justify font-Inter text-[16px] leading-[21px] underline font-normal">
                    The ability of a user to access required data from anywhere, from any authorized and authenticated user and device, fully secured
                </li>
                <li className="text-[#FFFFFF] list-disc text-justify font-Inter text-[16px] leading-[21px] underline font-normal">
                    Secured and protected information systems facilitating the evolution into a more agile, more mobile, cloud-supported workforce.
                </li>
                <li className="text-[#FFFFFF] list-disc text-justify font-Inter text-[16px] leading-[21px] underline font-normal">
                    Reduced attack surface risk profiles through protective actions enabled by microsegmentation of the network.
                </li>
                <li className="text-[#FFFFFF] list-disc text-justify font-Inter text-[16px] leading-[21px] underline font-normal">
                    Threats to Cloud, Artificial Intelligence (AI),and Command, Control, Communications, Computers, and Intelligence (C4I) remediated through risk-based cybersecurity protocols and policies.
                </li>
                <li className="text-[#FFFFFF] list-disc text-justify font-Inter text-[16px] leading-[21px] underline font-normal">
                    Effective damage containment, mitigation, and remediation when a device, network, user, or credential is compromised.
                </li>
                <li className="text-[#FFFFFF] list-disc text-justify font-Inter text-[16px] leading-[21px] underline font-normal">
                    Consistent, aligned, and effectively resourced ZT capabilities for advanced cybersecurity operations.
                </li>
                <li className="text-[#FFFFFF] list-disc text-justify font-Inter text-[16px] leading-[21px] underline font-normal">
                    A resilient network architecture that recovers rapidly from attacks and minimizes damage through enablement of Zero Trust.
                </li>
            </ul>
        </section>
    );
};  
export default Benefite;