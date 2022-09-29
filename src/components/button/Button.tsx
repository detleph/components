import React from "react";
import styles from "./Button.module.scss";

const Button: React.FC<{ children: any }> = ({ children }) => {
  return (
    <button className={styles.button}>
      <div className={styles.background}></div>
      <div className={styles.children}>{children}</div>
    </button>
  );
};

export default Button;
