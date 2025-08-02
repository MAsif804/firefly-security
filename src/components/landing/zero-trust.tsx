const ZeroTrust = () => {
  return (
    <section className="flex w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[88px] py-6 sm:py-8 md:py-[42px] justify-center items-center bg-[#171F31]">
      <div className="flex w-full flex-col items-start sm:items-center md:items-start gap-4 sm:gap-5 md:gap-[18px]">
        <h6 className="text-[#FDED1B] font-Inter text-2xl sm:text-3xl md:text-[30px] font-semibold leading-normal sm:leading-tight md:leading-[24px] text-center sm:text-center md:text-left w-full">
          What is Zero Trust? 
        </h6>
      <div className="flex w-full flex-col items-start gap-3 sm:gap-4 md:gap-[9px]">
        <p className="text-white font-Inter text-sm sm:text-base md:text-[16px] text-left sm:text-justify leading-relaxed sm:leading-[25px] font-normal">
            Zero Trust is a security model, a set of system design principles, and a coordinated cybersecurity and system management strategy based on an acknowledgement that threats exist both inside and outside traditional network boundaries. The Zero Trust security model eliminates implicit trust in any one element, node, or service and instead requires continuous verification of the operational picture via real-time information fed from multiple sources to determine access and other system responses.
        </p>
        <p className="text-white font-Inter text-sm sm:text-base md:text-[16px] text-left sm:text-justify leading-relaxed sm:leading-[25px] font-normal">
            The Zero Trust security model assumes that a breach is inevitable or has likely already occurred, so it constantly limits access to only what is needed and looks for anomalous or malicious activity. Zero Trust embeds comprehensive security monitoring; granular risk-based access controls; and system security automation in a coordinated manner throughout all aspects of the infrastructure in order to focus on protecting critical assets (data) in real-time within a dynamic threat environment. This data-centric security model allows the concept of least-privileged access to be applied for every access decision, allowing or denying access to resources based on the combination of several contextual factors.
        </p>
      </div>
        
      </div>
    </section>
  );
};

export default ZeroTrust;
