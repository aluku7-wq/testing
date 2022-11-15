import { Container } from "./Project.styled";
import { useParams } from "react-router-dom";
import { projects } from "../../components/Data";
import { motion } from "framer-motion";
import { animation } from "../../components/animations/Animation";
import Header from "../../components/header/Header";

const Project = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id === parseInt(id));

  return (
    <Container>
      <motion.div
        className="project"
        variants={animation.general}
        initial="hidden"
        animate="show"
        exit="hide"
      >
        <Header />
        <motion.div className="home" variants={animation.project}>
          <motion.div className="text" variants={animation.text}>
            <h1>{project.name}</h1>
            <div className="buttons">
              <a
                href="https://github.com/aluku7-wq/gym"
                target="_blank"
                rel="noreferrer"
              >
                source code
              </a>
              <a
                href="https://alukugym.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                visit site
              </a>
            </div>
            <div className="description">
              <h2>description</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                quibusdam ad minus adipisci cumque error recusandae suscipit
                blanditiis doloribus facilis quos placeat libero ratione,
                accusamus unde nisi, eaque voluptas tempora.
              </p>
            </div>
          </motion.div>
          <motion.img
            src={`../images/projects/${project.image}`}
            alt=""
            variants={animation.image}
          />
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Project;
