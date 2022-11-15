import React from "react";
import { Container } from "./Contact.styled";
import { contacts } from "../../components/Data";
import Header from "../../components/header/Header";
import { motion } from "framer-motion";
import { animation } from "../../components/animations/Animation";

const Contact = () => {
  return (
    <Container>
      <motion.div
        className="contact"
        variants={animation.general}
        initial="hidden"
        animate="show"
        exit="hide"
      >
        <Header />
        <motion.div className="grid" variants={animation.grid}>
          {contacts.map((item, index) => {
            return (
              <div className="card" key={index}>
                <item.icon />
                <p>{item.name}</p>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Contact;
