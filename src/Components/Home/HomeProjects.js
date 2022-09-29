import React from "react";
import HomeTitle from "../Shared/HomeTitle";
import Layout from "../Shared/Layout";
import ProjectFatch from "../Shared/Projects/ProjectFatch";

const HomeProjects = () => {
  return (
    <>
      <section className="bg-[#F8FAFD] mb-12">
        <Layout>
          <HomeTitle title="My Projects"></HomeTitle>
          <ProjectFatch></ProjectFatch>
        </Layout>
      </section>
    </>
  );
};

export default HomeProjects;
