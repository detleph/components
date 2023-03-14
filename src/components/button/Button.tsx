import React, { useRef } from "react";
import styles from "./Button.module.scss";
// @ts-ignore
import { ReactComponent as LoadingCircles } from "../../assets/loading-circles.svg";
import { combineConditionalClasses } from "../../helpers/combineClasses";

interface ButtonProps {
  loading?: boolean;
  icon?: boolean;
  children: any;
}

const Button: React.FC<ButtonProps> = ({ children, loading, icon }) => {
  return (
    <button className={combineConditionalClasses({ [styles.button]: true, [styles.icon]: !!icon })}>
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
