import { Container } from "./Project.styled";
import { useParams } from "react-router-dom";
import { projects } from "../../components/Data";
import { motion } from "framer-motion";
import { ProjectAnimation } from "../../components/animations/ProjectAnimation";

const Project = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id === parseInt(id));

  return (
    <Container>
      <motion.div
        className="project"
        variants={ProjectAnimation.project}
        initial="hidden"
        animate="show"
        exit="hide"
      >
        <img src={`../images/projects/${project.image}`} alt="" />
        <div className="text">
          <h1>{project.name}</h1>
          <button>source code</button>
          <button>visit site</button>
          <h2>description</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            quibusdam ad minus adipisci cumque error recusandae suscipit
            blanditiis doloribus facilis quos placeat libero ratione, accusamus
            unde nisi, eaque voluptas tempora.
          </p>
        </div>
      </motion.div>
    </Container>
  );
};

export default Project;
