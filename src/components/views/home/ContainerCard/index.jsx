import React from "react";

function Container({ img, title, desc }) {
  return (
    <div>
      <div className="text-center md:mb-8 mb-20 lg:mb-0">
        <div className="flex justify-center">
          <img src={img} alt="" />
        </div>
        <h1 className="my-6 text-xl font-medium">{title}</h1>
        <h1 className="text-[#778295] md:text-base leading-7 text-base">{desc}</h1>
      </div>
    </div>
  );
}

export default Container;
