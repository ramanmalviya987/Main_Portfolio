import React from "react";
import "./header.css";
import { motion } from "framer-motion";
import Dark from "../../images/home.svg";
import Social from "../social/Social";
import Button from "@mui/material/Button";
// import Link from '@mui/material/Link';
import Animation, { headerAnimation, imageAnimation } from "../../Animation";

const Header = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 1, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="header  section__padding"
      id="home"
    >
      <motion.div
        variants={headerAnimation}
        transition={{ delay: 0.2 }}
        className="header-content"
      >
        <h1 className="gradient__text">Raman Malviya</h1>
        <p>
          {/* Nice to meet you, Since beginning my journey as a freelance designer
          nearly 2 years ago, I've done remote work for agencies, consulted for
          startups, and collaborated with talented people to create digital
          products for both business and consumer use. I'm quietly confident,
          naturally curious, and perpetually working on improving my chops one
          design problem at a time. */}
          Hi there, my name is Raman Malviya and I am a frontend developer with
          3 months of experience working at Qwings India. I am passionate about
          building responsive and intuitive web applications that provide a
          seamless user experience Apart from technical skills, I am a quick
          learner and a good team player, always open to learning new
          technologies and approaches. I am also an effective communicator and
          can explain technical concepts to non-technical stakeholders.
        </p>
        <div className="header-content_btn" style={{ display: "flex" }}>
          <Button
            href="https://drive.google.com/file/d/1_3fkoD8NRULYbWP98hLevqRENt_1H8DZ/view?usp=sharing"
            target="_blank"
          >
            Resume
          </Button>
          <div>
            <Social />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="header-image"
        variants={imageAnimation}
        transition={{ delay: 0.2 }}
      >
        <img src={Dark} />
      </motion.div>
    </motion.div>
  );
};

export default Header;
