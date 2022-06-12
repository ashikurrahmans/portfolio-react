import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import { HelmetProvider } from "react-helmet-async";
import SingleBlog from "./Components/SingleBlog";
import AllBlogs from "./Components/Shared/AllBlogs";

function App() {
  return (
    <div>
      <HelmetProvider>
        <Menu>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<AllBlogs />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer></Footer>
        </Menu>
      </HelmetProvider>
    </div>
  );
}

export default App;
