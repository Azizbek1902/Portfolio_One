import React from "react";
import img from "../../../../assets/images/illustrations/hero-bg.png";
import img1 from "../../../../assets/images/illustrations/hero-section.png";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <div>
      <div className="flex justify-end items-center">
        <div className="w-[1250px]">
          <div
            className="grid grid-cols-2 gap-16 bg-cover bg-no-repeat h-[80vh] w-full bg-[image:var(--image-url)]"
            // className="bg-cover bg-no-repeat h-[80vh] w-full bg-[image:var(--image-url)]"
            style={{ "--image-url": `url(${img})`, backgroundPosition: "450px" }}
          >
            <div className="md:text-start text-center xl:w-[600px] w-[400px] md:mt-20 md:ml-3">
              <h1 className="lg:text-5xl text-4xl font-sans leading-snug ml-5 mt-9 font-semibold">Today's research, tomorrow's innovation</h1>
              <p className="md:pt-8 md:text-lg text-[#778295] text-xl ml-4">Accelerating research discovery to shape a better future</p>
              <div className="flex items-center xl:mr-48 justify-center relative left-6 mt-12">
                <input
                  type="text"
                  className="placeholder:text-[#d493e6] placeholder:font-normal w-[410px] py-2 px-4 rounded-3xl bg-[#f1eaf3]"
                  placeholder="Search books, articles, keywords"
                />
                <AiOutlineSearch size={22} className="relative right-9 text-[#778295]"/>
              </div>
            </div>
            <div className="hidden md:inline">
              <img className="hidden md:inline md:h-[60vh] md:w-[700px] xl:w-[460px] xl:ml-40 xl:h-[70vh]" src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
