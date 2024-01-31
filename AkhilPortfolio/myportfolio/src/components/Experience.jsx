import React from "react";

import html from "../assests/html.png"
import css from "../assests/css.png";
import javascript from "../assests/javascript.png"
import reactImage from "../assests/react.png";
// import github from "../assests/github.png";
// import tailwind from "../assests/tailwind.png";
import angular from "../assests/angular.png";
// import bootstrap from "../assests/bootstrap.png";
import mongo from "../assests/mongo.png";
import redux from "../assests/redux.png";
import python from "../assests/python.png";
import node from "../assests/node.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
        id: 5,
        src: angular,
        title: "Angular",
        style: "shadow-red-500",
    },
    {
        id: 6,
        src: redux,
        title: "Redux",
        style: "shadow-purple-500",
    },
    {
        id: 7,
        src: mongo,
        title: "MongoDb",
        style: "shadow-green-400",
    },
    {
        id: 8,
        src: python,
        title: "Python",
        style: "shadow-blue-400",
    },
    {
        id: 9,
        src: node,
        title: "NodeJs",
        style: "shadow-green-400",
    },
    // {
    //     id: 10,
    //     src: github,
    //     title: "GitHub",
    //     style: "shadow-gray-400",
    // },
    // {
    //     id: 11,
    //     src: bootstrap,
    //     title: "BootStrap",
    //     style: "shadow-purple-400",
    // },
    // {
    //   id: 12,
    //   src: tailwind,
    //   title: "Tailwind",
    //   style: "shadow-sky-400",
    // },
  ];

  return (
    <div
      name="techstack"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Techincal Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;