import React from "react";

const HomeTitle = ({ title }) => {
  return (
    <>
      <div className="flex mb-10 font-josefin rounded-md">
        <h1 className="font-josefin text-4xl font-bold">{title}</h1>
      </div>
    </>
  );
};

export default HomeTitle;
