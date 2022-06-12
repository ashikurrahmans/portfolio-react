import React from "react";
import Social from "./Social";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="bg-[#D0DCF2] font-josefin">
      <div className="w-10/12 mx-auto">
        <footer className="footer p-10  text-base-content">
          <div>
            <span className="text-black font-bold text-2xl">Links</span>
            <Link to="/blogs" className="link link-hover">
              Blogs
            </Link>
            <Link to="/projects" className="link link-hover">
              Projects
            </Link>
          </div>
          <div>
            <span className="text-black font-bold text-2xl">My Contacts</span>
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
          </div>
          <div>
            <span className="text-black font-bold text-2xl">Follow Me On</span>
            <div className="w-7/12">
              <Social></Social>
            </div>
          </div>
        </footer>
      </div>
      <footer className="footer footer-center p-4 bg-black text-white">
        <div>
          <p>Copyright © 2022 - All right reserved by Ashikur Rahman</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
