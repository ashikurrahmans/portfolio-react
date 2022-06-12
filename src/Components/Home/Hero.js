import React from "react";
import Social from "../Social";

const Hero = () => {
  return (
    <div>
      <section className="hero min-h-screen bg-[#0c0f13] ">
        <div className="hero-content text-center ">
          <div className="w-10/12 mx-auto">
            <h2 className="lg:text-5xl font-bold font-satisfy text-white sm:text-2xl">
              Hi I'm
            </h2>
            <h1 className="py-4 text-6xl text-white font-satisfy font-normal">
              Ashikur Rahman
            </h1>
            <h3 className="text-2xl text-white font-josefin">
              A Fronted Focused MERN Stack Developer
            </h3>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/uc?export=download&id=1Lzgq-WwGQR31wi7bUVVBcxtXyBNuSZZ0"
              className="btn bg-white hover:bg-white text-black mt-10 hover:text-gray-600"
            >
              Download Resume
            </a>
            <Social></Social>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
