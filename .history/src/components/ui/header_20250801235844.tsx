import { cn } from "@/lib/utils";


const Header = () => {
  return (
    <nav className="flex w-full max-w-[1440px]  mx-auto items-center justify-center py-[7px] px-[77px] bg-[#334155]">
      <div className="flex ma w-full items-center justify-between">
        <div className="flex items-center gap-[10px] w-[192px]">
          <img src="/logo.png" alt="" className="w-[33px] h-[40px] aspect-[33/40]" />
          <img src="/logo-text.png" alt="" className="w-[142px] " />
        </div>
        <div className="flex items-center gap-[42px]">
          <ul className="flex py-[20px] items-center gap-[30px]">
            <a href="/">
              <li className="cursor-pointer hover:text-white data-[state=active]:text-white text-[#FDED1B] font-Open text-[20px] font-semibold ">Home</li>
            </a>
            <a href="/services">
              <li className="cursor-pointer hover:text-white data-[state=active]:text-white text-[#FDED1B] font-Open text-[20px] font-semibold ">Services</li>
            </a>
            <a href="/company">
              <li className="cursor-pointer hover:text-white data-[state=active]:text-white text-[#FDED1B] font-Open text-[20px] font-semibold ">Company</li>
            </a>
            <a href="/resources">
              <li className="cursor-pointer hover:text-white data-[state=active]:text-white text-[#FDED1B] font-Open text-[20px] font-semibold ">Resources</li>
            </a>
            <a href="/contact">
              <li className="cursor-pointer hover:text-white data-[state=active]:text-white text-[#FDED1B] font-Open text-[20px] font-semibold ">Contact</li>
            </a>
          </ul>
          <div className="relative flex h-[42px] w-full flex-col items-center gap-[12px]">
            <input
              placeholder="Search"
             
              className={cn(
                "w-full h-[42px] px-[20px] py-[10px] pl-[2.25rem] placeholder:text-[16px]",
                " placeholder:text-[#BCBCBC] rounded-[12px] border border-[#FDED1B]",
                "font-poppins bg-transparent text-[16px]/normal font-normal not-italic text-[#BCBCBC]",
                "tracking-[0.64px] focus-visible:ring-none focus-visible:ring-0"
              )}
            />
            <svg
              className="absolute left-2.5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#BCBCBC]"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                stroke="#546571"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;