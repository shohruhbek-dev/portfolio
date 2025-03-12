import { Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
import Home from "./pages/Home";
import Layout from "./components/layout";
import "./App.css"
import clsx from "clsx";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function Root() {
  return (
    <div className={clsx("mainContainer")}>

      <Layout>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Layout>
    </div>
  );
}

export default Root;
