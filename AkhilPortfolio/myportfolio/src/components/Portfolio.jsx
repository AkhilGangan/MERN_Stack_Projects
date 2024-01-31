import React from "react";
import FileSharingImage from "../assests/portfolio/FileSharingImage.jpg";
import FlipkartImage from "../assests/portfolio/FlipkartImage.jpg"
import TodoImage from "../assests/portfolio/TodoImage.jpg"

const Portfolio = () => {
  const openDemoWebsite = (demoUrl) => {
    window.open(demoUrl, "_blank","noreferrer");
  };
  const openCode = (codeurl) => {
    window.open(codeurl, "_blank","noreferrer");
  };
  const portfolios = [
    {
      id: 1,
      src: FlipkartImage,
      Name: 'FlipkartClone',
      Demo:"https://ecommercekart.vercel.app/",
      Code:"https://github.com/AkhilGangan/ECommerce-Website-FlipcartClone_Server",
    },
    {
      id: 2,
      src: FileSharingImage,
      Name: 'File-sharingsite',
      Demo:"https://filesharingweb.vercel.app/",
      Code:"https://github.com/AkhilGangan/File_Sharing_Server",
    },
    {
      id: 3,
      src: TodoImage,
      Name: 'TodoList',
      Demo:"https://mytodolistweb.vercel.app/",
      Code:"https://github.com/AkhilGangan/Todo_List_Server",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,Demo,Code,Name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div  className=" flex items-center justify-center text-2xl font-bold mt-2 ">
                 {Name}
              </div>
              
              <div className="flex items-center justify-center">
                <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => openDemoWebsite(Demo)}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=>openCode(Code)}>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;