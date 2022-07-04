import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogSinglePage = () => {
  const { id } = useParams();

  const [bloging, setBloging] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ashikurrahmans/portfolio-json/main/blog.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setBloging(data);
      }, []);
  });

  const fatchBlog = bloging.find((sblog) => sblog.id === id);
  // console.log(fatchBlog);

  return (
    <>
      <section>
        <main className="relative mx-auto bg-white px-4">
          <div className="relative -mx-4 top-0 pt-[17%] overflow-hidden">
            <img
              className="absolute inset-0 object-cover object-top w-full h-full filter blur"
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29uY2VydCUyMHBvc3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="bg for blog"
            />
          </div>

          <div className="mt-[-10%] w-1/2 mx-auto">
            <div className="relative pt-[56.25%] overflow-hidden rounded-2xl">
              <img
                className="w-full h-full absolute inset-0 object-cover"
                src={fatchBlog?.img}
                alt=""
              />
            </div>
          </div>
          <article className="max-w-prose mx-auto py-8">
            <h1 className="text-4xl font-bold">{fatchBlog?.title}</h1>
            <h2 className="mt-2 text-sm text-gray-500 ">
              Admin, 28 November 2021
            </h2>

            <p className="mt-6">{fatchBlog?.description}</p>
          </article>
        </main>
      </section>
    </>
  );
};

export default BlogSinglePage;
