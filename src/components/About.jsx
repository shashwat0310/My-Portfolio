import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Shashwat Srivastava,born 2000 resides in Greater Noida, India. I recently completed my Bachelor's degree in Electronics and Communication Engineering. I have always been fascinated by the world of technology and the endless possibilities it presents. My interest in web design and development started during my college days when I was introduced to the world of HTML, CSS, and JavaScript. Since then, I have been continuously learning and improving my skills in various web technologies such as React, NodeJS, Tailwind, GraphQL, and more.
        </p>

        <br />

        <p className="text-xl">
        I have an eye for detail and a passion for creating visually stunning and highly functional websites and applications. I believe that the user experience should be at the forefront of any project, and I strive to create websites that are not only aesthetically pleasing but also easy to navigate and use.Apart from web design and development, I am also enthusiastic about the field of IoT and automation. I believe that the future of technology lies in creating interconnected devices and automating processes to make our lives easier and more efficient.
        </p>
      </div>
    </div>
  );
};

export default About;
