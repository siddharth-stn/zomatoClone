import { FaLocationDot } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { RxCaretDown } from "react-icons/rx";
import { Settings2 } from "lucide-react";
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <>
      <header className="py-3 px-5 md:py-5 md:mx-8 lg:py-3  lg:mx-auto lg:max-w-275">
        <div className="flex items-center justify-between lg:justify-normal">
          <div className="lg:hidden">
            <Menu />
          </div>
          <div className="w-32">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="logo"
              className="block"
            />
          </div>
          <div className="hidden lg:flex items-center shadow-[0_0_3px_2px_rgb(232,232,232)] rounded-md lg:ml-6 lg:w-175 py-3.5 text-[#757575] text-[14px]">
            <div className="flex items-center gap-1 w-[50%]">
              <div className="text-[#FF7E8B] ml-2">
                <FaLocationDot size={20} />
              </div>
              <span>Satna</span>
              <div className="text-[#4F4F4F] mr-1 ml-auto">
                <FaCaretDown size={20} />
              </div>
            </div>
            <hr className="w-9 bg-gray-500 rotate-90" />
            <div className="text-[#757575] pl-1">
              <HiMagnifyingGlass size={20} />
            </div>
            <input type="text" className="w-full pl-1 text-[15px]" placeholder="  Search for restaurant, cuisine or a dish" />
          </div>
          <div className="text-[#757575] lg:flex gap-2 ml-auto hidden">
            <button>Log in</button>
            <button>Sign up</button>
          </div>
        </div>
        <div className="text-[#757575] flex gap-3 md:mt-15 mt-8">
          <button
            type="button"
            className="flex gap-1 items-center rounded-xl border border-[#757575] text-[14px] py-1.5 px-1.5 md:py-2 md:px-2"
          >
            <Settings2 size={19} />
            Filters
          </button>
          <button
            type="button"
            className="rounded-xl border border-[#757575] text-[14px] px-1.5 md:px-2"
          >
            Pure Veg
          </button>
          <button
            type="button"
            className="flex gap-1 items-center rounded-xl border border-[#757575] text-[14px] px-1.5 md:mx-2"
          >
            Cuisines
            <RxCaretDown size={19} />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
