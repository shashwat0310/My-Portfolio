import React from "react";

import html from '../assets/html.png';
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import linux from "../assets/linux.png"

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            URL: "https://html.spec.whatwg.org/multipage/introduction.html",
            title: "HTML",
            style: "shadow-orange-500",
          },
          {
            id: 2,
            URL: "https://www.w3.org/Style/CSS/Overview.en.html",
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
          },
          {
            id: 3,
            URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
          },
          {
            id: 4,
            src: reactImage,
            URL: "https://react.dev/",
            title: "React",
            style: "shadow-blue-600",
          },
          {
            id: 5,
            src: tailwind,
            URL: "https://tailwindcss.com/",
            title: "Tailwind",
            style: "shadow-sky-400",
          },
          {
            id: 6,
            src: nextjs,
            URL: "https://nextjs.org/",
            title: "Next JS",
            style: "shadow-white",
          },
          {
            id: 7,
            src: graphql,
            URL: "https://graphql.org/",
            title: "GraphQL",
            style: "shadow-pink-400",
          },
          {
            id: 8,
            src: github,
            URL: "https://github.com/",
            title: "GitHub",
            style: "shadow-gray-400",
          },
          {
            id: 9,
            src: linux,
            URL: "https://www.linux.org/",
            title: "Linux",
            style: "shadow-yellow-300",
          },
    ];
  return (
    <div name='experience' className="bg-gradient-to-b from-gray-800 to to-black w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                <p className="py-6">These are the technologies I have worked with...</p>
            </div>

            <div className="w-full h-auto grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-2">

                {techs.map(({id, src, title, style, URL}) => (
                        <div key={id}
                         className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}>
                        <img src={src} alt="" className="w-20 mx-auto"/>
                            <a href={URL}><p className="mt-4">{title}</p>
                            </a>
                        </div>

                    ))}
                
            </div>
        </div>
    </div>
    );
};

export default Experience;