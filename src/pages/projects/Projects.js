import { Container } from "./Projects.styled";
import { projects } from "../../components/Data";
import { motion } from "framer-motion";
import { projects_animation } from "../../components/animations/projectsAnimations";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";

const Projects = () => {
  return (
    <Container>
      <motion.div
        className="nav_bar"
        variants={projects_animation.logo}
        initial="hidden"
        animate="show"
        exit="hide"
      >
        <Header />
      </motion.div>
      <motion.div
        className="title"
        variants={projects_animation.title}
        initial="hidden"
        animate="show"
        exit="hide"
      >
        <h4>click on a project for more details</h4>
        <Link to="/">
          <MdClose className="icon" />
        </Link>
      </motion.div>
      <motion.div
        className="projects_grid"
        variants={projects_animation.grid}
        initial="hidden"
        animate="show"
        exit="hide"
      >
        {projects.map((project, index) => {
          return (
            <motion.div
              className="card"
              key={index}
              variants={projects_animation.card}
            >
              <Link to={`/project/${project.id}`}>
                <img src={`./images/projects/${project.image}`} alt="" />
                <p>{project.name}</p>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </Container>
  );
};

export default Projects;
