import React from "react";
import Header from "../../components/views/home/Header";
import ContainerCard from "../../components/views/home/ContainerCard";
import Data from './Data'
import Content from "../../components/views/home/Content";
import ContentTwo from "../../components/views/home/ContentTwo";
import Container from "../../components/views/home/Container";

function Home() {
  return (
    <div>
      <Header />
      <h1 className="text-5xl text-center my-14 font-sans font-medium">
        <span className="text-[#FDC800]">Our</span> resources
      </h1>
      <div className="flex justify-center mt-10">
        <div className="xl:w-[1120px] ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:mx-14 lg:gap-20 sm:gap-7">
            {
              Data.map((elem) => (
                <ContainerCard key={elem.id} img={elem.img} title={elem.title} desc={elem.desc}/>
              ))
            }
          </div>
        </div>
      </div>
      <Content />
      <h1 className="text-5xl text-center my-28 font-sans font-medium">
        <span className="text-[#FDC800]">Best</span> seller books
      </h1>
      <ContentTwo />
      <Container />
    </div>
  );
}

export default Home;
