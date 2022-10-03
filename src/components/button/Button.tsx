import React, { useRef } from "react";
import styles from "./Button.module.scss";
import { ReactComponent } from "../../assets/svgr-custom";
// @ts-ignore
import { ReactComponent as LoadingCircles } from "../../assets/loading-circles.svg";

interface ButtonProps {
  loading?: boolean;
  icon?: typeof ReactComponent;
  children: any;
}

const Button: React.FC<ButtonProps> = ({ children, loading, icon }) => {
  return (
    <button className={styles.button}>
      <div className={styles.background}></div>
      <div style={{ opacity: loading ? 0 : 1 }} className={styles.children}>
        {children}
      </div>
      {loading && (
        <span className={styles.loadingCircles}>
          <LoadingCircles />
        </span>
      )}
    </button>
  );
};

export default Button;
