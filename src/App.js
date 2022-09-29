import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { HelmetProvider } from "react-helmet-async";
import BlogSinglePage from "./Components/Shared/Blogs/BlogSinglePage";
import ProjectSingle from "./Components/Shared/Projects/ProjectSingle";
import Projects from "./Components/Shared/Projects/Projects";
import NavBar from "./Components/Navbar";
import Blogs from "./Components/Blogs";

function App() {
  return (
    <>
      <HelmetProvider>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs></Blogs>} />
          <Route
            path="/blogs/:id"
            element={<BlogSinglePage></BlogSinglePage>}
          />
          <Route
            path="/projects/:id"
            element={<ProjectSingle></ProjectSingle>}
          />
          <Route path="/projects" element={<Projects></Projects>}></Route>
        </Routes>
        <Footer></Footer>
      </HelmetProvider>
    </>
  );
}

export default App;
