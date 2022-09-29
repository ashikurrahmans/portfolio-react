import React from "react";
import Social from "../Social";
import headerBottom from "../../../src/assets/HeaderBottomBg.png";
import Layout from "../Shared/Layout";

const Hero = () => {
  return (
    <section className="bg-black">
      <div className="text-center">
        <Layout>
          <div className="min-h-screen grid content-center lg:mt-14">
            <h2 className="lg:text-6xl font-medium font-TheHillsPersonalUseOnly tracking-widest text-white sm:text-3xl">
              Hi I'm
            </h2>
            <h1 className="py-4 text-6xl text-white font-TheHillsPersonalUseOnly tracking-widest font-extrabold">
              Ashikur Rahman
            </h1>
            <h3 className="text-2xl text-white">
              A Fronted Focused MERN Stack Developer
            </h3>

            <div className="flex items-center justify-center w-full">
              <a
                href="https://drive.google.com/uc?export=download&id=1Lzgq-WwGQR31wi7bUVVBcxtXyBNuSZZ0"
                className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-[#96afdd] rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none hover:px-12 transition ease-in-out delay-150 hover:tracking-widest"
              >
                Download Resume
              </a>
            </div>

            <div className="text-white w-60 mx-auto">
              <Social></Social>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={headerBottom} alt="Header Bottom background" />
          </div>
        </Layout>
      </div>
    </section>
  );
};

export default Hero;
