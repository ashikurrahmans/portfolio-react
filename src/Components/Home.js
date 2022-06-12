import React from "react";
import Snowfall from "react-snowfall";
import Contact from "./Contact";
import Hero from "./Home/Hero";
import HomeProjects from "./Home/HomeProjects";
import Quotes from "./Home/Quotes";
import Skilled from "./Home/Skilled";
import Title from "./Shared/Title";
import AllBlogs from "./Shared/AllBlogs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Title title="Frontend Developer"></Title>
      <Snowfall></Snowfall>
      <Hero></Hero>

      <Quotes></Quotes>
      <Skilled></Skilled>

      <HomeProjects></HomeProjects>
      <div className="flex justify-center my-12">
        <Link className="btn gap-2 text-xl font-josefin" to="/projects">
          See More
        </Link>
      </div>

      <div className="w-9/12 mx-auto">
        <AllBlogs></AllBlogs>
      </div>
      <Contact></Contact>
    </>
  );
};

export default Home;
