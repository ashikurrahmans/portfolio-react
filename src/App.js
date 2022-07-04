import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import { HelmetProvider } from "react-helmet-async";
import BlogFetch from "./Components/Shared/Blogs/BlogFetch";
import BlogSinglePage from "./Components/Shared/Blogs/BlogSinglePage";
import ProjectSingle from "./Components/Shared/Projects/ProjectSingle";
import Projects from "./Components/Shared/Projects/Projects";

function App() {
  return (
    <div>
      <HelmetProvider>
        <Menu>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogFetch></BlogFetch>} />
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
        </Menu>
      </HelmetProvider>
    </div>
  );
}

export default App;
