import React from "react";
import { Link } from "react-router-dom";

const BlogSingle = (props) => {
  const {
    id,
    title,
    img,
    description,
    tags,
    authorName,
    authorImage,
    authorDesignation,
  } = props.blog;

  return (
    <>
      <section>
        <div className="flex flex-wrap place-items-center">
          <div className="shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <Link to={`/blogs/${id}`} className="w-full h-full">
              <img alt="blog " src={img} />
              <div className="bg-white w-full p-4">
                <p className="text-indigo-500 text-2xl font-medium">{title}</p>

                <p className="text-gray-600 font-light text-md">
                  {description.slice(0, 60)}
                  <Link to="">
                    <button className="inline-flex text-indigo-500 ml-1">
                      Read More
                    </button>
                  </Link>
                </p>
                <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                  <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                    # {tags[0]}
                  </span>
                  <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                    # {tags[1]}
                  </span>
                  <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                    # {tags[2]}
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    alt="User avatar"
                    src={authorImage}
                  />

                  <div className="pl-3">
                    <div className="font-medium">{authorName}</div>
                    <div className="text-gray-600 text-sm">
                      {authorDesignation}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSingle;
