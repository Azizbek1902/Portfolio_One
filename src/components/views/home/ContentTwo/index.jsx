import React from "react";
import { AiFillStar } from "react-icons/ai";
import img from "../../../../assets/images/gallery/lord-rings.png";
import img2 from "../../../../assets/images/gallery/amazon.png";

function ContentTwo() {
  return (
    <>
      <div className="flex justify-center">
        <div className="xl:w-[900px] md:w-[700px] w-[400px]">
          <div className="shadow-2xl">
            <hr className="border-[1px] border-gray-400 w-full" />
            <div className="grid grid-cols-1 px-10 py-8 md:grid-cols-2 md:mb-6">
              <div>
                <h1 className="text-xl font-bold">The Lord of the Rings </h1>
                <p className="text-[#]">J.R.R Tolkien</p>
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex gap-2">
                  <AiFillStar size={17} color="#FDC800" />
                  <AiFillStar size={17} color="#FDC800" />
                  <AiFillStar size={17} color="#FDC800" />
                  <AiFillStar size={17} color="#FDC800" />
                  <AiFillStar size={17} color="#FDC800" />
                </div>
                <h1 className="text-xl font-bold">$21</h1>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-10 px-10 xl:gap-0 md:gap-4">
              <div className="md:col-span-2 xl:col-span-2 flex justify-center mb-5">
                <img src={img} className="md:h-[20vh] h-[30vh]" alt="" />
              </div>
              <h4 className="md:col-span-8 xl:col-span-8">
                <li className="font-bold text-lg">Copies Sold: 150 million</li>
                The Lord of the Rings is an epic high-fantasy novel written by
                English author J. R. R. Tolkien. The story began as a sequel to
                Tolkiens 1937 fantasy novel The Hobbit, but eventually developed
                into... <img className="h-[7vh] mt-8 mb-6" src={img2} alt="" />
              </h4>
            </div>
          </div>
          <div className="border-t-[1px] border-gray-300 mt-5 grid grid-cols-1 px-10 py-8 md:grid-cols-2 md:mb-6">
            <div>
              <h1 className="text-xl font-bold">A Tale of Two Cities </h1>
              <p className="text-[#]">Charles Dickens</p>
            </div>
            <div className="flex justify-between mt-4 xl:pb-9">
              <div className="flex gap-2">
                <AiFillStar size={17} color="#FDC800" />
                <AiFillStar size={17} color="#FDC800" />
                <AiFillStar size={17} color="#FDC800" />
                <AiFillStar size={17} color="#FDC800" />
                <AiFillStar size={17} color="#FDC800" />
              </div>
              <h1 className="text-xl font-bold">$16</h1>
            </div>
          </div>
          <div className="border-t-[1px] border-gray-300 mt-5 grid grid-cols-1 px-10 py-8 md:grid-cols-2 md:mb-6">
            <div>
              <h1 className="text-xl font-bold">The Little Princess </h1>
              <p className="text-[#]">Antoine de Saint-Exupéry</p>
            </div>
            <div className="flex justify-between mt-4 xl:pb-9">
              <div className="flex gap-2">
                <AiFillStar size={17} color="#FDC800" />
                <AiFillStar size={17} color="#FDC800" />
                <AiFillStar size={17} color="#FDC800" />
                <AiFillStar size={17} color="#FDC800" />
                <AiFillStar size={17} color="#FDC800" />
              </div>
              <h1 className="text-xl font-bold">$11</h1>
            </div>
          </div>
          <div className="border-t-[1px] border-gray-300 mt-5 grid grid-cols-1 px-10 py-8 md:grid-cols-2 md:mb-6">
            <div>
              <h1 className="text-xl font-bold">The Hobbit </h1>
              <p className="text-[#]">Antoine de Saint-Exupéry</p>
            </div>
            <div className="flex justify-between mt-4 xl:pb-9">
              <div className="flex gap-2">
                <AiFillStar size={17} color="#FDC800" />
                <AiFillStar size={17} color="#FDC800" />
                <AiFillStar size={17} color="#FDC800" />
                <AiFillStar size={17} color="#FDC800" />
                <AiFillStar size={17} color="#FDC800" />
              </div>
              <h1 className="text-xl font-bold">$20</h1>
            </div>
          </div>
          <div className="border-t-[1px] border-gray-300 mt-5 grid grid-cols-1 px-10 py-8 md:grid-cols-2 md:mb-6">
            <div>
              <h1 className="text-xl font-bold">
                Alices Adventures in Wonderland
              </h1>
              <p className="text-[#]">Lewis Carroll</p>
            </div>
            <div className="flex justify-between mt-4 xl:pb-9">
              <div className="flex gap-2">
                <AiFillStar size={17} color="#FDC800" />
                <AiFillStar size={17} color="#FDC800" />
                <AiFillStar size={17} color="#FDC800" />
                <AiFillStar size={17} color="#FDC800" />
                <AiFillStar size={17} color="#FDC800" />
              </div>
              <h1 className="text-xl font-bold">$12</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="text-white bg-[#612a6f] px-8 py-2 mt-6 rounded-3xl font-sans font-semibold">
          Find More
        </button>
      </div>
    </>
  );
}

export default ContentTwo;
