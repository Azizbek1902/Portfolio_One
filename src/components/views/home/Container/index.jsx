import React from "react";
import img from "../../../../assets/images/illustrations/cta-bg.png";
import img2 from "../../../../assets/images/illustrations/cta.png";
import img3 from "../../../../assets/images/gallery/google-play.png";
import img4 from "../../../../assets/images/gallery/app-store.png";

function Container() {
  return (
    <div>
      <div className="flex justify-end items-center mb-40">
        <div className="w-[1250px]">
          <div
            className="sm:grid sm:grid-cols-2 grid-cols-1 flex flex-col-reverse sm:mt-0 mt-[100%] gap-16 bg-cover bg-no-repeat h-[80vh] w-full bg-[image:var(--image-url)]"
            // className="bg-cover bg-no-repeat h-[80vh] w-full bg-[image:var(--image-url)]"
            style={{
              "--image-url": `url(${img})`,
              backgroundPosition: "100px",
            }}
          >
            <div className="md:text-start text-center xl:w-[600px] w-[400px] md:mt-20 md:ml-3">
              <h1 className="lg:text-5xl sm:text-4xl text-3xl font-sans leading-9  sm:leading-loose ml-5 mt-9 font-semibold">
                <span className="text-[#FDC800]">Create</span> your own <br />{" "}
                mobile library
              </h1>
              <p className="md:pt-8 xl:w-[500px] md:text-lg text-[#778295] sm:text-xl text-base pt-7 sm:pt-0 ml-4">
                Create your own library on your phone easily with Sevi mobile
                app. Get it free on Google Play Store for android and Download
                on the App Store for iOS for free.
              </p>
              <div className="flex justify-center gap-4 mb-10 sm:mb-0 sm:gap-8 mt-6">
                <img className="h-[7vh]" src={img3} alt="" />
                <img className="h-[7vh]" src={img4} alt="" />
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="xl:h-[90vh]"
                src={img2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
