import React from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { DiFirebase } from "react-icons/di";
import { SiJsonwebtokens } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import ashikImage from "../../../src/assets/ashik.jpg";

const Skilled = () => {
  return (
    <section className=" py-24">
      <div className="w-9/12 mx-auto lg:flex md:flex">
        <img
          src={ashikImage}
          alt="Ashikur Rahman"
          className="w-60 h-60 rounded-lg"
        />

        <div>
          <p className="md:ml-12 lg:ml-16 font-satisfy text-xl mt-4 font-semibold leading-10">
            Hello, buddy... <br />
            This is
            <span className="text-indigo-700 text-3xl font-bold ml-1 font-systemui ">
              &lt;Ashik /&gt;
            </span>
            <span className="text-[#203647]">
              I build applications for solving real time problems. I am working
              as a Frontend Developer at Upwork (Freelance). I am helping my
              busineses to build a robust and flexible React Component Library
              and make other React projects performant and smooth.
            </span>
          </p>
        </div>
      </div>
      <div className="w-9/12 mx-auto flex font-josefin rounded-md my-12">
        <h1 className="font-josefin text-4xl font-bold">I'm skilled at</h1>
      </div>
      <div className="w-9/12 mx-auto">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <div className=" w-80 md:w-60 bg-base-100 shadow-2xl py-4 rounded-xl">
            <div className="flex gap-6 md:gap-6 items-center ">
              <div className="pl-10 md:pl-4">
                <FaReact fontSize="50px" />
              </div>
              <div>
                <h2 className="font-josefin text-2xl font-bold">React JS</h2>
              </div>
            </div>
          </div>
          <div className=" w-80 md:w-60 bg-base-100 shadow-2xl py-4 rounded-xl">
            <div className="flex gap-6 md:gap-6 items-center">
              <div className="pl-10 md:pl-4 ">
                <SiNextdotjs fontSize="50px" />
              </div>
              <div>
                <h2 className="font-josefin text-2xl font-bold">Next JS</h2>
              </div>
            </div>
          </div>
          <div className=" w-80 md:w-60 bg-base-100 shadow-2xl py-4 rounded-xl">
            <div className="flex gap-6 md:gap-6 items-center">
              <div className="pl-10 md:pl-4 ">
                <SiTailwindcss fontSize="50px" />
              </div>
              <div>
                <h2 className=" font-josefin text-2xl font-bold">Tailwind</h2>
              </div>
            </div>
          </div>
          <div className=" w-80 md:w-60  bg-base-100 shadow-2xl py-4 rounded-xl">
            <div className="flex gap-6 md:gap-6 items-center">
              <div className="pl-10 md:pl-4">
                <BsBootstrapFill fontSize="50px" />
              </div>
              <div>
                <h2 className="font-josefin text-2xl font-bold">Bootstrap</h2>
              </div>
            </div>
          </div>
          <div className=" w-80 md:w-60 bg-base-100 shadow-2xl py-4 rounded-xl">
            <div className="flex gap-6 md:gap-6 items-center">
              <div className="pl-10 md:pl-4 ">
                <DiFirebase fontSize="50px" />
              </div>
              <div>
                <h2 className=" font-josefin text-2xl font-bold">Firebase</h2>
              </div>
            </div>
          </div>
          <div className=" w-80 md:w-60 bg-base-100 shadow-2xl py-4 rounded-xl">
            <div className="flex gap-6 md:gap-6 items-center">
              <div className="pl-10 md:pl-4 ">
                <SiJsonwebtokens fontSize="50px" />
              </div>
              <div>
                <h2 className=" font-josefin text-2xl font-bold">JWT</h2>
              </div>
            </div>
          </div>
          <div className="w-80 md:w-60 bg-base-100 shadow-2xl py-4 rounded-xl">
            <div className="flex gap-6 md:gap-6 items-center">
              <div className="pl-10 md:pl-4 ">
                <SiExpress fontSize="50px" />
              </div>
              <div>
                <h2 className=" font-josefin text-2xl font-bold">Express JS</h2>
              </div>
            </div>
          </div>
          <div className=" w-80 md:w-60 bg-base-100 shadow-2xl py-4 rounded-xl">
            <div className="flex gap-6 md:gap-6 items-center">
              <div className="pl-10 md:pl-4 ">
                <DiMongodb fontSize="50px" />
              </div>
              <div>
                <h2 className=" font-josefin text-2xl font-bold">Mongo DB</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skilled;
