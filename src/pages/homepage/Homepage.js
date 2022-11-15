import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import { Container } from "./Homepage.styled";
import { homeAnimations } from "../../components/animations/HomeAnimations";
import { motion } from "framer-motion";
const Homepage = () => {
  return (
    <Container>
      <motion.div
        className="homepage"
        variants={homeAnimations.home}
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
            <motion.h2
              variants={homeAnimations.title}
              transition={{ duration: 0.5 }}
            >
              I Am web developer, click a section to discover more about me
            </motion.h2>
            <motion.div
              className="options"
              variants={homeAnimations.options}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="option">
                <Link>skills</Link>
              </motion.div>
              <motion.div className="option">
                <Link to="/projects">projects</Link>
              </motion.div>
              <motion.div className="option">
                <Link>skills</Link>
              </motion.div>
              <motion.div className="option">
                <Link>contact me</Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Homepage;
