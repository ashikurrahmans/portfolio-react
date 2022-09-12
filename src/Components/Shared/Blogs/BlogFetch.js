import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogFetch = () => {
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ashikurrahmans/portfolio-json/main/blog.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      }, []);
  });
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 lg:gap-8 md:gap-8 pb-12 my-12">
      {blogs.map((blog) => (
        <BlogCard blog={blog} key={blog.id}></BlogCard>
      ))}
    </div>
  );
};

export default BlogFetch;
