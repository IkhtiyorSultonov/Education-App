import React, { useEffect, useState } from "react";
import styles from "./scroll-up.module.css";
import IcoScroll from "./IcoScroll.svg";
import { motion,  } from "framer-motion";
import { useScrollY } from "@/hooks/useScrollY";
const ScrollUp = () => {
  const ScrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const ScrollY = useScrollY();
  //Method-1
  // const controls=useAnimation()
  // useEffect(() => {

  //     controls.start({opacity:ScrollY/document.body.scrollHeight})

  // }, [controls,ScrollY])

  return (
    ScrollY>150 &&
    <motion.button
      className={styles.ScrollUp}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
      exit={{y:100,opacity:0,transition:{duration:0.6}}}
      whileHover={{scale:1.2, transition:{duration:0.6}}}
      onClick={ScrolltoTop}
    >
      <IcoScroll className={styles.IcoScroll} />
    </motion.button>
  );
};

export default ScrollUp;
