import React from "react";
import img from "../../assets/images/favicons/favicon-32x32.png";
import { BsFacebook, BsFillSuitHeartFill } from 'react-icons/bs';
import { AiFillYoutube, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

function Footer() {
  const data = [
    {
      id: 1,
      title: "About us",
      title1: "Vision",
      title2: "Careers",
      title3: "Blog",
      title4: "Terms of Service",
      title5: "Donate",
    },
    {
      id: 2,
      title: "Discover",
      title1: "Home",
      title2: "Books",
      title3: "Authors",
      title4: "Subjects",
      title5: "Advanced Search",
    },
    {
      id: 3,
      title: "Develop",
      title1: "Development center",
      title2: "API Documentation",
      title3: "Writing Book",
      title4: "Add a Book",
    },
    {
      id: 4,
      title: "Develop",
      title1: "Help Center",
      title2: "Report a Problem",
      title3: "Suggesting Edits",
      title4: "Contact Us",
    },
  ];
  return (
    <div>
      <div className="flex justify-center mt-14">
        <div className="w-[1120px]">
          <div className="md:flex flex-col-reverse justify-center">
            <div className="grid grid-cols-1 ml-3 sm:ml-8 md:grid-cols-8">
              <div className="flex gap-3 mb-12 md:mt-7">
                <img src={img} className="w-6 h-6" alt="" />
                <h1 className="text-xl font-semibold font-sans text-[#723182]">Sevi</h1>
              </div>
              <div className="grid md:col-span-7 grid-cols-2 sm:grid-cols-4">
                {data.map((elem) => (
                  <div className="text-start mt-6" key={elem.id}>
                    <h1 className="pb-5 text-lg font-semibold">{elem.title}</h1>
                    <p className="py-3 text-[#B9B1BB]">{elem.title1 ? elem.title1 : ""}</p>
                    <p className="py-3 text-[#B9B1BB]">{elem.title2 ? elem.title2 : ""}</p>
                    <p className="py-3 text-[#B9B1BB]">{elem.title3 ? elem.title3 : ""}</p>
                    <p className="py-3 text-[#B9B1BB]">{elem.title4 ? elem.title4 : ""}</p>
                    <p className="py-3 text-[#B9B1BB]">{elem.title5 ? elem.title5 : ""}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-5 sm:gap-4 py-6">
              <h1 className="flex items-center py-4 sm:col-span-3">© This template is made with <BsFillSuitHeartFill color="#723182" size={17}/>  by ThemeWagon</h1>
              <div className="flex gap-3 sm:col-span-2 items-center justify-center">
                  <AiFillYoutube size={23} color="#723182"/>
                  <AiOutlineTwitter size={23} color="#723182"/>
                  <BsFacebook size={23} color="#723182"/>
                  <AiFillLinkedin size={23} color="#723182"/>
                  <AiFillInstagram size={23} color="#723182"/>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Footer;
