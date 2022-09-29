import React from "react";
import BlogFetch from "./Shared/Blogs/BlogFetch";
import Title from "./Shared/Title";

const Blogs = () => {
  return (
    <>
      <Title title="Know About All Blogs"></Title>
      <div className="pt-12">
        <BlogFetch></BlogFetch>
      </div>
    </>
  );
};

export default Blogs;
