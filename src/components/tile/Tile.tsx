import React from "react";
import { ReactComponent } from "../../assets/svgr-custom";
import styles from "./Tile.module.scss";
import { Link } from "react-router-dom";

interface TileProps {
  text: string;
  icon: typeof ReactComponent;

  linkTo: string;

  onClick?: () => unknown;
}

const Tile: React.FC<TileProps> = ({ text, icon: Icon, linkTo, onClick }) => {
  return (
    <Link to={linkTo} onClick={onClick} className={styles.tile}>
      <div className={styles.background}></div>
      <span className={styles.iconContainer}>
        <Icon />
      </span>
      <span className={styles.textContainer}>{text}</span>
    </Link>
  );
};

export default Tile;
