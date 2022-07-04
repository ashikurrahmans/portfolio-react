import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ children }) => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar  sticky top-0 bg-[#D0DCF2] z-10">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="w-9/12 mx-auto ">
              <div className="flex-1 px-2 mx-2 sm:justify-between">
                <Link to="/">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C5103AQH_bxKYrpJCng/profile-displayphoto-shrink_800_800/0/1566404083867?e=1660176000&v=beta&t=d-tgDcFjLcg_kpGgbwDq1dAd4jcdQir8i33rGDkDg2A"
                    alt=""
                    className="w-12 h-12 shadow"
                  />
                </Link>
              </div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal font-josefin ">
                  <li>
                    <Link to="/" className="text-black font-bold text-2xl">
                      It's Ashik
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blogs"
                      className="text-black tracking-wide text-2xl font-bold"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects"
                      className="text-black font-bold text-2xl"
                    >
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80  ">
            <li>
              <Link to="/" className="text-white">
                It's Ashik
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="text-white">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-white">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
