import { skills } from "../../components/Data";
import Grid from "../../components/grid/Grid";
import Header from "../../components/header/Header";
import { Container } from "./Skills.styled";
import { motion } from "framer-motion";
import { animation } from "../../components/animations/Animation";
const Skills = () => {
  return (
    <Container>
      <motion.div
        className="skills"
        variants={animation.general}
        initial="hidden"
        animate="show"
        exit="hide"
      >
        <Header />
        <Grid data={skills} />
      </motion.div>
    </Container>
  );
};

export default Skills;
