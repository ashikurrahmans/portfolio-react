import React from "react";
import ashikImage from "../../../src/assets/ashik.jpg";

const Profile = () => {
  return (
    <>
      <div className="lg:flex md:flex">
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
    </>
  );
};

export default Profile;
