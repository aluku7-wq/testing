import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Projects from "./pages/projects/Projects";
import Project from "./pages/project/Project";
import { AnimatePresence } from "framer-motion";
import Nomatch from "./pages/nomatch/Nomatch";

const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="*" element={<Nomatch />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
