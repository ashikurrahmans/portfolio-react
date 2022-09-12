import React from "react";
import Social from "./Social";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <section className="font-josefin bg-black py-8 text-white">
        <div className="w-10/12 mx-auto">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <span className="font-bold text-2xl">Links</span>
              <div className="py-2">
                <li className="list-none">
                  <Link to="/blogs" className="link link-hover">
                    Blogs
                  </Link>
                </li>
                <li className="list-none">
                  <Link to="/projects" className="link link-hover">
                    Projects
                  </Link>
                </li>
              </div>
            </div>
            <div>
              <span className="font-bold text-2xl">My Contacts</span>
              <div className="py-2">
                <li className="list-none">
                  <Link
                    to="tel:+8801684986010"
                    className="link link-hover font-josefin"
                  >
                    <span>
                      <BsFillTelephoneFill
                        style={{ display: "inline-block", margin: "4px" }}
                      />
                    </span>
                    +8801684986010
                  </Link>
                </li>
                <li className="list-none">
                  <Link to="/" className="link link-hover hover:no-underline">
                    <span>
                      <AiOutlineMail
                        style={{
                          display: "inline-block",
                          margin: "4px",
                          fontSize: "16px",
                        }}
                      />
                    </span>
                    ashiqur.dream@gmail.com
                  </Link>
                </li>
              </div>
            </div>
            <div>
              <span className=" font-bold text-2xl">Follow Me On</span>
              <div className="w-7/12">
                <Social></Social>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="p-4 bg-black text-white text-center">
        <div>
          <p className="space-x-2">
            Copyright © 2022 - All right reserved Designed & Developed by
            <a
              className="text-green-500 ml-1"
              target="_blank"
              rel="noreferrer"
              href="https://facebook.com/ashiqur.dream"
            >
              Ashikur Rahman
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
