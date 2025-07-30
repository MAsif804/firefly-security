const ZeroTrust = () => {
  return (
    <section className="flex w-full max-w-[1440px] mx-auto px-[88px] py-[42px] justify-center items-center bg-[#171F31]">
      <div className="flex w-full flex-col items-start gap-[18px]">
        <h6 className="text-[#FDED1B] font-Inter text-[30px] font-semibold leading-[24px]">
          What is Zero Trust? 
        </h6>
      <div className="flex w-full flex-col items-start gap-[9px]">
        <p className="text-white font-Inter text-[16px] text-justify leading-[25px] font-normal">
            Zero Trust is a security model, a set of system design principles, and a coordinated cybersecurity and system management strategy based on an acknowledgement that threats exist both inside and outside traditional network boundaries. The Zero Trust security model eliminates implicit trust in any one element, node, or service and instead requires continuous verification of the operational picture via real-time information fed from multiple sources to determine access and other system responses.
        </p>
        <p className="text-white font-Inter text-[16px] text-justify leading-[25px] font-normal">
            The Zero Trust security model assumes that a breach is inevitable or has likely already occurred, so it constantly limits access to only what is needed and looks for anomalous or malicious activity. Zero Trust embeds comprehensive security monitoring; granular risk-based access controls; and system security automation in a coordinated manner throughout all aspects of the infrastructure in order to focus on protecting critical assets (data) in real-time within a dynamic threat environment. This data-centric security model allows the concept of least-privileged access to be applied for every access decision, allowing or denying access to resources based on the combination of several contextual factors.
        </p>
      </div>
        
      </div>
    </section>
  );
};

export default ZeroTrust;
