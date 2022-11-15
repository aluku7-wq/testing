import React from "react";
import { Container } from "./Grid.styled";
import { motion } from "framer-motion";
import { animation } from "../animations/Animation";

const Grid = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <motion.div
        className="grid"
        variants={animation.grid}
        initial="hidden"
        animate="show"
        exit="hide"
      >
        {data.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div className="icon">
                <item.icon />
              </div>
              <p>{item.name}</p>
            </div>
          );
        })}
      </motion.div>
    </Container>
  );
};

export default Grid;
