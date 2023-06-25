import React from "react";
import img from "../../assets/images/favicons/favicon-32x32.png";
import { AiOutlineMenu, AiOutlineCaretDown } from 'react-icons/ai';

function Navber() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[1120px]">
          <div className="flex justify-between my-5 mx-7">
            <div className="flex gap-3">
              <img src={img} alt="" />
                <h1 className="text-xl font-semibold font-sans text-[#723182]">Sevi</h1>
            </div>
            <div className="lg:hidden">
              <AiOutlineMenu />
            </div>

            <div className="hidden lg:flex gap-10 mr-8">
              <ul className="flex gap-5">
                <li>Home</li>
                <li>Books</li>
                <li>Libraries</li>
                <li className="flex">More <AiOutlineCaretDown size={18} className="pt-2"/></li>
              </ul>
                <button className="text-white bg-[#612a6f] px-6 rounded-3xl font-sans font-semibold">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navber;
