import React from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { DiFirebase } from "react-icons/di";
import { SiJsonwebtokens } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import HomeTitle from "../Shared/HomeTitle";
import Layout from "../Shared/Layout";
import Profile from "./Profile";

const Skilled = () => {
  return (
    <section className="py-24">
      <Layout>
        <Profile></Profile>
        <div className="mt-12">
          <HomeTitle title="I'm skilled at"></HomeTitle>
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
                  <h2 className=" font-josefin text-2xl font-bold">
                    Express JS
                  </h2>
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
      </Layout>
    </section>
  );
};

export default Skilled;
