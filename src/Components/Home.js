import React from "react";
import Snowfall from "react-snowfall";
import Contact from "./Contact";
import Hero from "./Home/Hero";
import HomeProjects from "./Home/HomeProjects";
import Quotes from "./Home/Quotes";
import Skilled from "./Home/Skilled";
import Title from "./Shared/Title";
import BlogFetch from "./Shared/Blogs/BlogFetch";

const Home = () => {
  return (
    <>
      <Title title="Frontend Developer"></Title>
      <Snowfall></Snowfall>
      <Hero></Hero>
      <Quotes></Quotes>
      <Skilled></Skilled>
      <HomeProjects></HomeProjects>
      <div className="w-9/12 mx-auto">
        <BlogFetch></BlogFetch>
      </div>
      <Contact></Contact>
    </>
  );
};

export default Home;
