import { Container } from "./Projects.styled";
import { projects } from "../../components/Data";
import { motion } from "framer-motion";
import { animation } from "../../components/animations/Animation";

import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";

const Projects = () => {
  return (
    <Container>
      <motion.div
        className="projects"
        variants={animation.general}
        initial="hidden"
        animate="show"
        exit="hide"
      >
        <Header />
        <motion.div className="title" variants={animation.title}>
          <h4>click on a project for more details</h4>
          <Link to="/">
            <MdClose className="icon" />
          </Link>
        </motion.div>
        <motion.div className="projects_grid" variants={animation.grid}>
          {projects.map((project, index) => {
            return (
              <div className="card" key={index}>
                <Link to={`/project/${project.id}`}>
                  <img src={`./images/projects/${project.image}`} alt="" />
                  <p>{project.name}</p>
                </Link>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Projects;
