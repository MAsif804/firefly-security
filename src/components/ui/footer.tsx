

const Footer = () => {
  return (
    <footer className="flex w-full max-w-[1440px]  mx-auto items-center justify-center pt-[80px] pb-[45px] px-[40px] bg-[#0D1323]">
      <div className="flex w-full items-center flex-col gap-[77px]">
        <div className="flex w-full px-[80px] items-center justify-between">
          <div className="flex items-center gap-[10px] w-[192px]">
            <img src="/logo.png" alt="" className="w-[33px] h-[40px] aspect-[33/40]" />
            <img src="/logo-text.png" alt="" className="w-[142px] " />
          </div>
          <div className="flex items-center gap-[80px]">
            <ul className="flex py-[20px] items-center gap-[30px]">
              <a href="/">
                <li className="cursor-pointer hover:text-[#FDED1B] data-[state=active]:text-[#FDED1B] text-white font-Open text-[20px] font-semibold ">Home</li>
              </a>
              <a href="/services">
                <li className="cursor-pointer hover:text-[#FDED1B] data-[state=active]:text-[#FDED1B] text-white font-Open text-[20px] font-semibold ">Services</li>
              </a>
              <a href="/company">
                <li className="cursor-pointer hover:text-[#FDED1B] data-[state=active]:text-[#FDED1B] text-white font-Open text-[20px] font-semibold ">Company</li>
              </a>
              <a href="/resources">
                <li className="cursor-pointer hover:text-[#FDED1B] data-[state=active]:text-[#FDED1B] text-white font-Open text-[20px] font-semibold ">Resources</li>
              </a>
              <a href="/contact">
                <li className="cursor-pointer hover:text-[#FDED1B] data-[state=active]:text-[#FDED1B] text-white font-Open text-[20px] font-semibold ">Contact</li>
              </a>
            </ul>
            <div className="flex  items-center gap-[24px]">
              {/*  */}
              
                <img src="/twitter.png" alt="" className="w-[24px] h-[24px] aspect-[24/24]" />
                <img src="/facebook.png" alt="" className="w-[24px] h-[24px] aspect-[24/24]" />
                <img src="/instagram.png" alt="" className="w-[24px] h-[24px] aspect-[24/24]" />
                <img src="/mail.png" alt="" className="w-[24px] h-[24px] aspect-[24/24]" />
                
               
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-[20px]">
          <hr className="w-full bg-[#3E4550] h-[1px]"/>
          
          <p className="text-[#FDED1B] font-Inter text-[14px] font-normal leading-[20px] ">2025 Firefly Security® Zero Trust Cyber Security. All rights reserved. {""}<span className="text-[#FDED1B] font-Inter text-[14px] underline font-normal leading-[20px] cursor-pointer hover:text-[#FDED1B]">Privacy Policy</span></p>

        </div>
      </div>

    </footer>
  )
};

export default Footer;
 