import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import { AiFillMediumCircle } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Social = () => {
  return (
    <>
      <section className="">
        <div className="grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-5 grid-cols-4 gap-6 my-8 ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ashikurrohman/"
            className="btn btn-circle"
          >
            <AiFillLinkedin fontSize="20px" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ashikurrahmans"
            className="btn btn-circle"
          >
            <AiFillGithub fontSize="20px" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://stackoverflow.com/users/11748404/ashikur-rahman"
            className="btn btn-circle"
          >
            <BsStackOverflow fontSize="20px" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://medium.com/@ashikurrohman"
            className="btn btn-circle"
          >
            <AiFillMediumCircle fontSize="20px" />
          </a>
          <a href="mailto: ashiqur.dream@gmail.com" className="btn btn-circle">
            <SiGmail fontSize="20px" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/ashiqur.dream/"
            className="btn btn-circle"
          >
            <BsFacebook fontSize="20px" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/ashikurrohmani"
            className="btn btn-circle"
          >
            <BsTwitter fontSize="20px" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Social;
