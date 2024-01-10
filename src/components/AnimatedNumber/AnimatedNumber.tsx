import React, { useEffect, useRef } from "react";
import styles from "./AnimatedNumber.module.css";

const AnimatedNumber = ({ num }: { num: number }) => {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (numRef.current) {
      numRef.current.style.setProperty("--num", num.toString());
    }
  }, [num]);

  return <span className={styles.price} ref={numRef} />;
};

export default AnimatedNumber;
