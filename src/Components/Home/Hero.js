import React from "react";
import Social from "../Social";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black">
      <div className="text-center ">
        <div className="w-10/12 mx-auto">
          <div className="h-screen grid content-center">
            <h2 className="lg:text-5xl font-bold font-satisfy text-white sm:text-2xl">
              Hi I'm
            </h2>
            <h1 className="py-4 text-6xl text-white font-satisfy font-normal">
              Ashikur Rahman
            </h1>
            <h3 className="text-2xl text-white font-josefin">
              A Fronted Focused MERN Stack Developer
            </h3>

            <div className="flex items-center justify-center w-full">
              <a
                href="https://drive.google.com/uc?export=download&id=1Lzgq-WwGQR31wi7bUVVBcxtXyBNuSZZ0"
                className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-[#96afdd] rounded-lg  focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
              >
                Download Resume
              </a>
            </div>

            <div className="text-white w-60 mx-auto">
              <Social></Social>
            </div>
          </div>
        </div>
        <div className="mb-[100px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#5000ca"
              fill-opacity="1"
              d="M0,224L18.5,218.7C36.9,213,74,203,111,181.3C147.7,160,185,128,222,138.7C258.5,149,295,203,332,240C369.2,277,406,299,443,298.7C480,299,517,277,554,256C590.8,235,628,213,665,181.3C701.5,149,738,107,775,117.3C812.3,128,849,192,886,197.3C923.1,203,960,149,997,117.3C1033.8,85,1071,75,1108,90.7C1144.6,107,1182,149,1218,181.3C1255.4,213,1292,235,1329,208C1366.2,181,1403,107,1422,69.3L1440,32L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
