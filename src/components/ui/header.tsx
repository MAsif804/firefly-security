import { cn } from "@/lib/utils";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex w-full max-w-[1440px] mx-auto items-center justify-center py-2 sm:py-[7px] px-4 sm:px-6 md:px-10 lg:px-[40px] xl:px-[77px] bg-[#334155]">
      <div className="flex w-full items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-[10px] w-auto sm:w-[192px]">
          <img src="/logo.png" alt="Firefly Security Logo" className="w-[28px] sm:w-[33px] h-[35px] sm:h-[40px] aspect-[33/40]" />
          <img src="/logo-text.png" alt="Firefly Security" className="w-[120px] sm:w-[142px]" />
        </div>

        {/* Mobile menu button */}
        <button 
          className="flex md:hidden flex-col justify-center items-center p-2 rounded-md text-[#FDED1B] hover:bg-gray-700 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current mb-1.5 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current mt-1.5 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-[30px] xl:gap-[42px]">
          <ul className="flex py-4 sm:py-[20px] items-center gap-4 lg:gap-[20px] xl:gap-[30px]">
            <a href="/">
              <li className="cursor-pointer hover:text-white data-[state=active]:text-white text-[#FDED1B] font-Open text-base sm:text-lg lg:text-[18px] xl:text-[20px] font-semibold">Home</li>
            </a>
            <a href="/services">
              <li className="cursor-pointer hover:text-white data-[state=active]:text-white text-[#FDED1B] font-Open text-base sm:text-lg lg:text-[18px] xl:text-[20px] font-semibold">Services</li>
            </a>
            <a href="/company">
              <li className="cursor-pointer hover:text-white data-[state=active]:text-white text-[#FDED1B] font-Open text-base sm:text-lg lg:text-[18px] xl:text-[20px] font-semibold">Company</li>
            </a>
            <a href="/resources">
              <li className="cursor-pointer hover:text-white data-[state=active]:text-white text-[#FDED1B] font-Open text-base sm:text-lg lg:text-[18px] xl:text-[20px] font-semibold">Resources</li>
            </a>
            <a href="/contact">
              <li className="cursor-pointer hover:text-white data-[state=active]:text-white text-[#FDED1B] font-Open text-base sm:text-lg lg:text-[18px] xl:text-[20px] font-semibold">Contact</li>
            </a>
          </ul>
          <div className="relative flex h-10 sm:h-[42px] w-full max-w-[180px] lg:max-w-[200px] xl:max-w-[250px] flex-col items-center gap-3 sm:gap-[12px]">
            <input
              placeholder="Search"
              className={cn(
                "w-full h-10 sm:h-[42px] px-3 sm:px-[20px] py-2 sm:py-[10px] pl-8 sm:pl-[2.25rem] placeholder:text-sm sm:placeholder:text-[16px]",
                "placeholder:text-[#BCBCBC] rounded-[12px] border border-[#FDED1B]",
                "font-poppins bg-transparent text-sm sm:text-[16px]/normal font-normal not-italic text-[#BCBCBC]",
                "tracking-[0.64px] focus-visible:ring-none focus-visible:ring-0 focus:outline-none"
              )}
            />
            <svg
              className="absolute left-2 sm:left-2.5 top-1/2 h-4 sm:h-5 w-4 sm:w-5 -translate-y-1/2 text-[#BCBCBC]"
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

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[60px] left-0 right-0 bg-[#334155] border-t border-gray-700 z-50 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            <ul className="flex flex-col space-y-4 py-3">
              <a href="/" onClick={toggleMenu}>
                <li className="cursor-pointer hover:text-white data-[state=active]:text-white text-[#FDED1B] font-Open text-lg font-semibold">Home</li>
              </a>
              <a href="/services" onClick={toggleMenu}>
                <li className="cursor-pointer hover:text-white data-[state=active]:text-white text-[#FDED1B] font-Open text-lg font-semibold">Services</li>
              </a>
              <a href="/company" onClick={toggleMenu}>
                <li className="cursor-pointer hover:text-white data-[state=active]:text-white text-[#FDED1B] font-Open text-lg font-semibold">Company</li>
              </a>
              <a href="/resources" onClick={toggleMenu}>
                <li className="cursor-pointer hover:text-white data-[state=active]:text-white text-[#FDED1B] font-Open text-lg font-semibold">Resources</li>
              </a>
              <a href="/contact" onClick={toggleMenu}>
                <li className="cursor-pointer hover:text-white data-[state=active]:text-white text-[#FDED1B] font-Open text-lg font-semibold">Contact</li>
              </a>
            </ul>
            <div className="relative flex h-10 w-full max-w-full py-3">
              <input
                placeholder="Search"
                className={cn(
                  "w-full h-10 px-3 py-2 pl-8 placeholder:text-sm",
                  "placeholder:text-[#BCBCBC] rounded-[12px] border border-[#FDED1B]",
                  "font-poppins bg-transparent text-sm font-normal not-italic text-[#BCBCBC]",
                  "tracking-[0.64px] focus-visible:ring-none focus-visible:ring-0 focus:outline-none"
                )}
              />
              <svg
                className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-[#BCBCBC]"
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
      )}
    </nav>
  );
};

export default Header;