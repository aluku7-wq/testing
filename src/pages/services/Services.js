import { services } from "../../components/Data";
import Grid from "../../components/grid/Grid";
import Header from "../../components/header/Header";
import { Container } from "./Services.styled";
import { motion } from "framer-motion";
import { animation } from "../../components/animations/Animation";

const Services = () => {
  return (
    <Container>
      <motion.div
        className="services"
        variants={animation.general}
        initial="hidden"
        animate="show"
        exit="hide"
      >
        <Header />
        <Grid data={services} />
      </motion.div>
    </Container>
  );
};

export default Services;
