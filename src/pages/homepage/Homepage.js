import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import { Container } from "./Homepage.styled";
import { animation } from "../../components/animations/Animation";
import { motion } from "framer-motion";
const Homepage = () => {
  return (
    <Container>
      <motion.div
        className="homepage"
        variants={animation.general}
        initial="hidden"
        animate="show"
        exit="hide"
        style={{
          backgroundImage: `url('./images/background/bg.png')`,
        }}
      >
        <div className="overlay">
          <Header />
          <div className="hero">
            <h2>
              I Am web developer, click a section to discover more about me
            </h2>
            <motion.div
              className="options"
              variants={animation.options}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="option">
                <Link to="/projects">projects</Link>
              </motion.div>
              <motion.div className="option">
                <Link to="/skills">skills</Link>
              </motion.div>
              <motion.div className="option">
                <Link to="/services">services</Link>
              </motion.div>

              <motion.div className="option">
                <Link to="/contacts">contact me</Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Homepage;
