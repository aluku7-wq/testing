import { useState, useEffect } from "react";
import { Container } from "./Cursor.styled";
import { motion } from "framer-motion";

const Cursor = () => {
  const [smallcircle, setsmallcircle] = useState({ x: 0, y: 0 });
  const [largecircle, setlargecircle] = useState({ x: 0, y: 0 });

  const mouseFunction = (e) => {
    setsmallcircle({ x: e.clientX, y: e.clientY });
    setlargecircle({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseFunction);
    return () => {
      window.removeEventListener("mousemove", mouseFunction);
    };
  }, []);

  return (
    <Container>
      <motion.div
        className="large"
        animate={{
          x: largecircle.x - 32,
          y: largecircle.y - 32,
          transition: { type: "spring", mass: 4 },
        }}
      ></motion.div>
      <motion.div
        className="small"
        animate={{
          x: smallcircle.x - 8,
          y: smallcircle.y - 8,
          transition: {
            type: "spring",
            mass: 3,
          },
        }}
      ></motion.div>
    </Container>
  );
};

export default Cursor;
