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
      <Snowfall></Snowfall>
      <Title title="Frontend Focused MERN Stack Developer"></Title>
      <Hero></Hero>
      <Quotes></Quotes>
      <Skilled></Skilled>
      <HomeProjects></HomeProjects>
      <BlogFetch></BlogFetch>
      <Contact></Contact>
    </>
  );
};

export default Home;
