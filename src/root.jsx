import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout";
import "./App.css"
import clsx from "clsx";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Home from "./pages/home";

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
