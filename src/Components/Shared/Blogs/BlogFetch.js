import React, { useEffect, useState } from "react";
import HomeTitle from "../HomeTitle";
import Layout from "../Layout";
import BlogCard from "./BlogCard";
import { useLocation } from "react-router-dom";

const BlogFetch = () => {
  const location = useLocation();
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    fetch("https://ashikurrahmans.github.io/portfolio-json/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      }, []);
  });

  return (
    <>
      <Layout>
        {location.pathname === "/" && <HomeTitle title="My Blogs"></HomeTitle>}
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 lg:gap-8 md:gap-8 pb-12 my-12">
          {blogs?.map((blog) => (
            <BlogCard blog={blog} key={blog.id}></BlogCard>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default BlogFetch;
