import React from "react";
import img from "../../../../assets/images/illustrations/libraries-bg.png";
import img1 from "../../../../assets/images/illustrations/our-libraries.png";

function Content() {
  return (
    <div>
      <div className="flex justify-start items-center">
        <div className="w-[1250px]">
          <div
            className="grid text-center grid-cols-1 md:grid-cols-2 md:gap-3 gap-16 xl:gap-40 bg-cover bg-no-repeat h-[9  0vh] w-full bg-[image:var(--image-url)]"
            style={{
              "--image-url": `url(${img})`,
              // backgroundPosition: "450px",
            }}
          >
            <img className="h-[40vh] ml-4 md:h-[40vh] md:mt-20 md:ml-9 xl:h-[60vh] xl:ml-32" src={img1} alt="" />
            <div className="md:text-start text-center xl:w-[400px] md:w-[350px] w-[400px] md:mt-20 md:ml-3 pb-20">
              <h1 className="lg:text-5xl text-4xl font-sans leading-snug ml-5 mt-0 font-semibold">
              <span className="text-[#FDC800]">Our</span> libraries
              </h1>
              <p className="md:pt-8 md:text-lg text-[#778295] text-base leading-8 pt-6 ml-4">
                Your reading list is a good place to start, but you will be
                expected to read more widely too. Use Sevi to search for
                information on your topic, and to find books, journal articles
                and other materials in the Library.
              </p>
              <button className="text-white bg-[#612a6f] px-6 py-2 mt-6 rounded-3xl font-sans font-semibold">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
